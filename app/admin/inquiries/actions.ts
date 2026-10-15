
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/admin/require-admin";

type InquiryStatus = "new" | "contacted" | "closed";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isValidStatus(
  value: unknown
): value is InquiryStatus {
  return (
    value === "new" ||
    value === "contacted" ||
    value === "closed"
  );
}

export async function updateInquiryStatus(
  formData: FormData
) {
  // STEP 1: Verify administrator permissions.
  const { supabase, role } = await requireAdmin();

  if (role !== "owner" && role !== "editor") {
    redirect("/admin/inquiries?error=forbidden");
  }

  // STEP 2: Read submitted values.
  const inquiryId = formData.get("id");
  const statusValue = formData.get("status");

  // STEP 3: Validate inquiry ID.
  if (
    typeof inquiryId !== "string" ||
    !uuidPattern.test(inquiryId)
  ) {
    redirect("/admin/inquiries?error=invalid");
  }

  // STEP 4: Validate status.
  if (!isValidStatus(statusValue)) {
    redirect("/admin/inquiries?error=invalid");
  }

  // STEP 5: Update only the status column.
  // Customer name, email, company, and details
  // are never modified by this action.
  const { data: updated, error } = await supabase
    .from("service_inquiries")
    .update({
      status: statusValue,
    })
    .eq("id", inquiryId)
    .select("id, status")
    .maybeSingle();

  // STEP 6: Handle database failures.
  if (error) {
    console.error(
      "Failed to update inquiry status:",
      error.code
    );

    redirect("/admin/inquiries?error=database");
  }

  // Handle missing or inaccessible inquiries.
  if (!updated) {
    redirect("/admin/inquiries?error=notfound");
  }

  // STEP 7: Refresh the Admin Inquiries page.
  revalidatePath("/admin/inquiries");

  // STEP 8: Return to the dashboard.
  redirect("/admin/inquiries?success=updated");
}
