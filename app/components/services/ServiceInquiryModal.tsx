
"use client";

import { useState, type FormEvent } from "react";

import {
  ArrowRight,
  Check,
  LoaderCircle,
  X,
} from "lucide-react";

// ==========================================
// SERVICE INQUIRY MODAL PROPERTIES
// ==========================================

interface ServiceInquiryModalProps {
  serviceTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

interface InquiryDialogProps {
  serviceTitle: string;
  onClose: () => void;
}

type ApiResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

// ==========================================
// CLOUDLEM INQUIRY DIALOG
// Warm Cream / Stone Beige / Charcoal
// ==========================================

function InquiryDialog({
  serviceTitle,
  onClose,
}: InquiryDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ========================================
  // EXISTING SUBMISSION LOGIC
  // UNCHANGED
  // ========================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    const payload = {
      serviceTitle,
      name: String(
        formData.get("name") ?? ""
      ).trim(),
      email: String(
        formData.get("email") ?? ""
      ).trim(),
      company: String(
        formData.get("company") ?? ""
      ).trim(),
      details: String(
        formData.get("details") ?? ""
      ).trim(),

      // Existing anti-spam field.
      website: String(
        formData.get("inquiry_spam_check") ?? ""
      ),
    };

    try {
      const response = await fetch(
        "/api/service-inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      let result: ApiResponse | null = null;

      try {
        result = (await response.json()) as ApiResponse;
      } catch {
        result = null;
      }

      // Real database insertion must return
      // HTTP 201 and success: true.
      //
      // HTTP 200 is not considered successful
      // because the spam handler may return
      // 200 without inserting a record.

      if (
        response.status !== 201 ||
        result?.success !== true
      ) {
        setError(
          response.status === 200
            ? "Your inquiry could not be confirmed. Please try again."
            : result?.error ??
                "Unable to submit your inquiry. Please try again."
        );

        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Unable to connect to the server. Please check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5">

      {/* ===================================
          MODAL BACKDROP
      =================================== */}

      <button
        type="button"
        aria-label="Close inquiry form"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#181818]/85 backdrop-blur-[5px]"
      />

      {/* ===================================
          MODAL CONTAINER
      =================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-inquiry-title"
        className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto overscroll-contain border border-[#181818]/25 bg-[#D8D2C8] text-[#181818] shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      >

        {/* TOP ACCENT */}

        <div className="h-[4px] w-full bg-[#181818]" />

        <div className="relative p-6 sm:p-9">

          {/* ===================================
              CLOSE BUTTON
          =================================== */}

          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-[#181818]/20 bg-[#B7B09F]/50 text-[#181818] transition-colors hover:border-[#181818] hover:bg-[#181818] hover:text-[#D8D2C8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818] sm:right-7 sm:top-7"
          >
            <X
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

          {!submitted ? (
            <>

              {/* ===================================
                  FORM HEADER
              =================================== */}

              <div className="mb-8 border-b border-[#181818]/20 pb-7">

                {/* EYEBROW */}

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#181818]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#181818]/70">
                    Cloudlem Project Inquiry
                  </p>
                </div>

                {/* TITLE */}

                <h3
                  id="service-inquiry-title"
                  className="max-w-[440px] pr-7 text-[27px] font-semibold leading-[1.12] tracking-[-0.05em] text-[#181818] sm:text-[32px]"
                >
                  Get Started with{" "}
                  <span className="text-[#625C51]">
                    {serviceTitle}
                  </span>
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 max-w-[460px] text-[13px] leading-7 text-[#181818]/75">
                  Share your requirement and our team will
                  get in touch shortly.
                </p>
              </div>

              {/* ===================================
                  SUBMISSION ERROR
              =================================== */}

              {error && (
                <div
                  role="alert"
                  className="mb-6 border border-red-700/40 bg-red-50 px-4 py-3 text-[12px] leading-6 text-red-800"
                >
                  {error}
                </div>
              )}

              {/* ===================================
                  INQUIRY FORM
              =================================== */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* ===================================
                    EXISTING HONEYPOT
                    DO NOT REMOVE
                =================================== */}

                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="inquiry-spam-check">
                    Leave this field empty
                  </label>

                  <input
                    id="inquiry-spam-check"
                    name="inquiry_spam_check"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                  />
                </div>

                {/* ===================================
                    FULL NAME
                =================================== */}

                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Full Name{" "}
                    <span className="text-[#181818]/60">
                      *
                    </span>
                  </label>

                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    maxLength={150}
                    autoComplete="name"
                    placeholder="Your full name"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#D8D2C8] px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    WORK EMAIL
                =================================== */}

                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Work Email{" "}
                    <span className="text-[#181818]/60">
                      *
                    </span>
                  </label>

                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#D8D2C8] px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    COMPANY NAME
                =================================== */}

                <div>
                  <label
                    htmlFor="inquiry-company"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Company Name

                    <span className="ml-2 text-[11px] font-normal text-[#181818]/60">
                      Optional
                    </span>
                  </label>

                  <input
                    id="inquiry-company"
                    name="company"
                    type="text"
                    maxLength={160}
                    autoComplete="organization"
                    placeholder="Your company name"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#D8D2C8] px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    PROJECT DETAILS
                =================================== */}

                <div>
                  <label
                    htmlFor="inquiry-details"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Project Details{" "}
                    <span className="text-[#181818]/60">
                      *
                    </span>
                  </label>

                  <textarea
                    id="inquiry-details"
                    name="details"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={4}
                    placeholder="Tell us about your project, requirements, and goals"
                    className="w-full resize-y rounded-none border border-[#181818]/25 bg-[#D8D2C8] px-4 py-3 text-[13px] leading-7 text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />

                  <p className="mt-2 text-[11px] text-[#181818]/65">
                    Please provide at least 10 characters.
                  </p>
                </div>

                {/* ===================================
                    SUBMIT BUTTON
                =================================== */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex min-h-13 w-full items-center justify-center gap-3 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-[#D8D2C8] transition-all duration-200 hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <LoaderCircle
                        size={18}
                        className="animate-spin"
                        aria-hidden="true"
                      />

                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry

                      <ArrowRight
                        size={17}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* ===================================
                  PRIVACY MESSAGE
              =================================== */}

              <p className="mt-6 border-t border-[#181818]/15 pt-5 text-center text-[11px] leading-6 text-[#181818]/65">
                Your inquiry will be shared with the
                Cloudlem team for follow-up.
              </p>
            </>
          ) : (

            /* ===================================
                SUCCESS SCREEN
            =================================== */

            <div className="py-8 text-center sm:py-10">

              {/* SUCCESS ICON */}

              <div className="mx-auto mb-7 flex h-18 w-18 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                <Check
                  size={34}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* SUCCESS LABEL */}

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-6 bg-[#181818]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#181818]/70">
                  Submission Confirmed
                </span>

                <span className="h-px w-6 bg-[#181818]" />
              </div>

              {/* SUCCESS TITLE */}

              <h3
                id="service-inquiry-title"
                className="text-[30px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818] sm:text-[35px]"
              >
                Inquiry Submitted!
              </h3>

              {/* SUCCESS DESCRIPTION */}

              <p
                role="status"
                className="mx-auto mt-5 max-w-[400px] text-[13px] leading-8 text-[#181818]/75"
              >
                Thank you for contacting Cloudlem.
                Your inquiry has been received.
                Our team will review your requirements
                and follow up with you.
              </p>

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={onClose}
                className="mt-9 inline-flex min-h-12 items-center justify-center border border-[#181818] bg-[#181818] px-10 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// EXPORTED MODAL COMPONENT
// ==========================================

export default function ServiceInquiryModal({
  serviceTitle,
  isOpen,
  onClose,
}: ServiceInquiryModalProps) {
  if (!isOpen) {
    return null;
  }

  // A fresh dialog mounts each time it opens,
  // resetting previous success/error messages.

  return (
    <InquiryDialog
      key={serviceTitle}
      serviceTitle={serviceTitle}
      onClose={onClose}
    />
  );
}
