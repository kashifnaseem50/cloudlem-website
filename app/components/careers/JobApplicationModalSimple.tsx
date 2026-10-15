
"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

// ==========================================
// CLOUDLEM JOB APPLICATION MODAL
// Warm Cream / Stone Beige / Charcoal
// ==========================================

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function JobApplicationModalSimple({
  isOpen,
  onClose,
  jobTitle,
}: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // ========================================
  // EXISTING FORMSPREE SUBMISSION LOGIC
  // ========================================

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xaqdbdvv",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitStatus("success");

        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
          form.reset();
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5">

        {/* ===================================
            MODAL BACKDROP
        =================================== */}

        <motion.button
          type="button"
          aria-label="Close job application form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-default bg-[#181818]/85 backdrop-blur-[5px]"
        />

        {/* ===================================
            MODAL CONTAINER
        =================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-application-title"
          className="relative z-10 max-h-[90dvh] w-full max-w-2xl overflow-y-auto overscroll-contain border border-[#181818]/30 bg-[#D8D2C8] text-[#181818] shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >

          {/* TOP ACCENT */}

          <div className="h-[4px] w-full bg-[#181818]" />

          {submitStatus === "success" ? (

            /* ===================================
                APPLICATION SUCCESS SCREEN
            =================================== */

            <div className="relative px-7 py-14 text-center sm:px-12 sm:py-16">

              {/* SUCCESS ICON */}

              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                <CheckCircle
                  size={38}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              {/* SUCCESS LABEL */}

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#181818]/70">
                  Application Received
                </p>

                <span className="h-px w-7 bg-[#181818]" />
              </div>

              {/* SUCCESS TITLE */}

              <h3
                id="job-application-title"
                className="text-[30px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818] sm:text-[38px]"
              >
                Application Submitted!
              </h3>

              {/* SUCCESS DESCRIPTION */}

              <p
                role="status"
                className="mx-auto mt-6 max-w-[430px] text-[13px] leading-8 text-[#181818]/75"
              >
                Thank you for applying. We&apos;ll
                review your application and get
                back to you soon.
              </p>

              {/* SELECTED POSITION */}

              <div className="mx-auto mt-8 max-w-[390px] border border-[#181818]/20 bg-[#B7B09F] px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#181818]/70">
                  Position Applied For
                </p>

                <p className="text-[15px] font-semibold text-[#181818]">
                  {jobTitle}
                </p>
              </div>

              {/* AUTO CLOSE MESSAGE */}

              <p className="mt-7 text-[11px] text-[#181818]/60">
                This window will close automatically.
              </p>
            </div>

          ) : (

            /* ===================================
                JOB APPLICATION FORM
            =================================== */

            <>
              {/* ===================================
                  MODAL HEADER — STONE BEIGE
              =================================== */}

              <div className="relative border-b border-[#181818]/20 bg-[#B7B09F] px-6 py-7 sm:px-9 sm:py-8">

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  aria-label="Close application form"
                  onClick={onClose}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-[#181818]/25 text-[#181818] transition-colors hover:bg-[#181818] hover:text-[#D8D2C8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818] sm:right-7 sm:top-7"
                >
                  <X
                    size={20}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </button>

                {/* HEADER LABEL */}

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#181818]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#181818]/75">
                    Cloudlem Careers
                  </p>
                </div>

                <div className="flex items-start gap-4 pr-9">

                  {/* POSITION ICON */}

                  <div className="flex h-13 w-13 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                    <Briefcase
                      size={23}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  {/* TITLE */}

                  <div className="min-w-0">

                    <h2
                      id="job-application-title"
                      className="text-[26px] font-semibold leading-[1.12] tracking-[-0.05em] text-[#181818] sm:text-[32px]"
                    >
                      Apply for Position
                    </h2>

                    <p className="mt-3 break-words text-[13px] font-medium text-[#181818]/75">
                      {jobTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================================
                  APPLICATION FORM
              =================================== */}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 px-6 py-8 sm:px-9 sm:py-9"
              >

                {/* EXISTING JOB TITLE FIELD */}

                <input
                  type="hidden"
                  name="job_title"
                  value={jobTitle}
                />

                {/* ===================================
                    FIRST AND LAST NAME
                =================================== */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="career-first-name"
                      className="mb-2 block text-[12px] font-semibold text-[#181818]"
                    >
                      First Name *
                    </label>

                    <input
                      id="career-first-name"
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      placeholder="John"
                      className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="career-last-name"
                      className="mb-2 block text-[12px] font-semibold text-[#181818]"
                    >
                      Last Name *
                    </label>

                    <input
                      id="career-last-name"
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      placeholder="Doe"
                      className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                    />
                  </div>
                </div>

                {/* ===================================
                    EMAIL ADDRESS
                =================================== */}

                <div>
                  <label
                    htmlFor="career-email"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Email Address *
                  </label>

                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="john.doe@example.com"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    PHONE NUMBER
                =================================== */}

                <div>
                  <label
                    htmlFor="career-phone"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    LINKEDIN PROFILE
                =================================== */}

                <div>
                  <label
                    htmlFor="career-linkedin"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    LinkedIn Profile URL

                    <span className="ml-2 text-[11px] font-normal text-[#181818]/60">
                      Optional
                    </span>
                  </label>

                  <input
                    id="career-linkedin"
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/johndoe"
                    className="min-h-12 w-full rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    RESUME / CV UPLOAD
                =================================== */}

                <div>
                  <label
                    htmlFor="career-resume"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Resume / CV *
                  </label>

                  <input
                    id="career-resume"
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full cursor-pointer rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[12px] text-[#181818] outline-none transition-all file:mr-4 file:cursor-pointer file:rounded-none file:border-0 file:bg-[#181818] file:px-4 file:py-2.5 file:text-[11px] file:font-semibold file:text-[#D8D2C8] hover:file:bg-[#33312D] focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />

                  <p className="mt-3 text-[11px] leading-6 text-[#181818]/65">
                    Upload your resume as a PDF or DOC/DOCX
                    file (max 5MB).
                  </p>
                </div>

                {/* ===================================
                    COVER LETTER
                =================================== */}

                <div>
                  <label
                    htmlFor="career-cover-letter"
                    className="mb-2 block text-[12px] font-semibold text-[#181818]"
                  >
                    Cover Letter *
                  </label>

                  <textarea
                    id="career-cover-letter"
                    name="cover_letter"
                    required
                    rows={5}
                    placeholder="Tell us why you'd be a great fit for this position..."
                    className="w-full resize-y rounded-none border border-[#181818]/25 bg-[#B7B09F]/30 px-4 py-3 text-[13px] leading-7 text-[#181818] outline-none transition-all placeholder:text-[#181818]/45 focus:border-[#181818] focus:ring-2 focus:ring-[#181818]/15"
                  />
                </div>

                {/* ===================================
                    SUBMISSION ERROR
                =================================== */}

                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 border border-red-700/35 bg-red-50 px-4 py-4 text-red-800"
                  >
                    <AlertCircle
                      size={20}
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />

                    <span className="text-[12px] leading-6">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                )}

                {/* ===================================
                    FORM ACTIONS
                =================================== */}

                <div className="grid grid-cols-1 gap-3 border-t border-[#181818]/20 pt-7 sm:grid-cols-2">

                  {/* CANCEL BUTTON */}

                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex min-h-12 items-center justify-center border border-[#181818]/40 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-[#181818] transition-colors hover:border-[#181818] hover:bg-[#B7B09F]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  {/* SUBMIT BUTTON */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex min-h-12 items-center justify-center gap-3 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.11em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
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
                        <Send
                          size={16}
                          aria-hidden="true"
                        />

                        Submit Application

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </button>
                </div>

                {/* PRIVACY NOTE */}

                <p className="text-center text-[11px] leading-6 text-[#181818]/65">
                  Your application details and uploaded CV
                  will be sent through our application
                  submission service.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
