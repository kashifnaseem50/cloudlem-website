
import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;

type InquiryPayload = {
  serviceTitle?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  details?: unknown;
  website?: unknown;
};

// =====================================
// EMAIL VALIDATION
// =====================================

function isValidEmail(email: string): boolean {
  return (
    email.length >= 3 &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

// =====================================
// REQUEST BODY SIZE PROTECTION
// =====================================

async function readLimitedBody(
  request: NextRequest
): Promise<string | null> {
  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();

  let totalBytes = 0;
  let body = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    totalBytes += value.byteLength;

    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }

    body += decoder.decode(value, {
      stream: true,
    });
  }

  return body + decoder.decode();
}

// =====================================
// SERVICE INQUIRY API
// =====================================

export async function POST(request: NextRequest) {
  try {
    // ---------------------------------
    // 1. Validate content type
    // ---------------------------------

    const contentType = (
      request.headers.get("content-type") ?? ""
    ).toLowerCase();

    if (
      !/^application\/json(?:\s*;|$)/.test(
        contentType
      )
    ) {
      return NextResponse.json(
        { error: "Invalid content type." },
        { status: 415 }
      );
    }

    // ---------------------------------
    // 2. Basic cross-site protection
    // ---------------------------------

    if (
      request.headers.get("sec-fetch-site") ===
      "cross-site"
    ) {
      return NextResponse.json(
        { error: "Request not allowed." },
        { status: 403 }
      );
    }

    // ---------------------------------
    // 3. Request size protection
    // ---------------------------------

    const contentLength = Number(
      request.headers.get("content-length") ?? 0
    );

    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    const rawBody = await readLimitedBody(request);

    if (rawBody === null) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    // ---------------------------------
    // 4. Parse JSON payload
    // ---------------------------------

    let body: InquiryPayload;

    try {
      const parsed: unknown = JSON.parse(rawBody);

      if (
        !parsed ||
        typeof parsed !== "object" ||
        Array.isArray(parsed)
      ) {
        throw new Error("Invalid payload");
      }

      body = parsed as InquiryPayload;
    } catch {
      return NextResponse.json(
        { error: "Invalid request data." },
        { status: 400 }
      );
    }

    // ---------------------------------
    // 5. Honeypot bot protection
    // ---------------------------------

    if (
      typeof body.website === "string" &&
      body.website.trim() !== ""
    ) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // ---------------------------------
    // 6. Validate input types
    // ---------------------------------

    if (
      typeof body.serviceTitle !== "string" ||
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.details !== "string" ||
      (
        body.company !== undefined &&
        body.company !== null &&
        typeof body.company !== "string"
      )
    ) {
      return NextResponse.json(
        {
          error: "Please provide valid form details.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------
    // 7. Normalize input fields
    // ---------------------------------

    const serviceTitle = body.serviceTitle.trim();

    const fullName = body.name.trim();

    const email = body.email.trim().toLowerCase();

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const details = body.details.trim();

    // ---------------------------------
    // 8. Server-side field validation
    // ---------------------------------

    if (
      serviceTitle.length < 1 ||
      serviceTitle.length > 160 ||
      fullName.length < 1 ||
      fullName.length > 150 ||
      !isValidEmail(email) ||
      company.length > 160 ||
      details.length < 10 ||
      details.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Please check your information. Project details must contain at least 10 characters.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------
    // 9. Load Supabase configuration
    // ---------------------------------

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error(
        "Service inquiry server configuration is missing."
      );

      return NextResponse.json(
        {
          error:
            "The inquiry service is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------
    // 10. Create server-only Supabase client
    // ---------------------------------

    // This client is independent of visitor
    // sessions and must never be exposed
    // to browser components.

    const supabase = createSupabaseClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false,
        },
      }
    );

    // ---------------------------------
    // 11. Store customer inquiry
    // ---------------------------------

    // Insert only validated fields.
    // Do not return customer records.

    const { error } = await supabase
      .from("service_inquiries")
      .insert({
        service_title: serviceTitle,
        full_name: fullName,
        email,
        company: company || null,
        details,
      });

    if (error) {
      console.error(
        "Service inquiry insert failed:",
        error.code
      );

      return NextResponse.json(
        {
          error:
            "We could not submit your inquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------
    // 12. Successful submission
    // ---------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry was submitted successfully.",
      },
      { status: 201 }
    );
  } catch {
    console.error(
      "Unexpected service inquiry error."
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
