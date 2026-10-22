"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const labelClass =
  "mb-2.5 block text-[12px] font-semibold text-[#443450]";

const inputClass =
  "min-h-12 w-full rounded-xl border border-[#E4D8EE] " +
  "bg-[#FCFAFE] px-4 py-3 text-[13px] text-[#30213D] " +
  "placeholder:text-[#9D90A6] outline-none transition-all duration-200 " +
  "hover:border-[#CDB4DE] focus:border-[#75449B] " +
  "focus:bg-white focus:ring-4 focus:ring-[#75449B]/10";

export default function JobApplicationModalSimple({
  isOpen,
  onClose,
  jobTitle,
}: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Existing Formspree endpoint, multipart form and submission behavior.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqdbdvv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-5">
        {/* Backdrop */}
        <motion.button
          type="button"
          aria-label="Close job application form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-default bg-[#251632]/70 backdrop-blur-[5px]"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-application-title"
          className="relative z-10 max-h-[90dvh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-[24px] border border-[#E6D8EF] bg-white text-[#30213D] shadow-[0_30px_90px_rgba(40,22,57,0.25)]"
        >
          <div
            aria-hidden="true"
            className="h-[3px] w-full bg-gradient-to-r from-[#C7A2DD] via-[#75449B] to-[#E8D7F4]"
          />

          {submitStatus === "success" ? (
            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-7 py-14 text-center sm:px-12 sm:py-16">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#CDE7D5] bg-[#EDF8F0] text-[#278451]">
                <CheckCircle size={38} strokeWidth={1.7} aria-hidden="true" />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                Application Received
              </p>

              <h3
                id="job-application-title"
                className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30213D] sm:text-[38px]"
              >
                Application Submitted!
              </h3>

              <p
                role="status"
                className="mx-auto mt-6 max-w-[430px] text-[13px] leading-8 text-[#756980]"
              >
                Thank you for applying. We&apos;ll review your application
                and get back to you soon.
              </p>

              <div className="mx-auto mt-8 w-full max-w-[390px] rounded-2xl border border-[#E5D7EF] bg-[#F5EFFA] px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8C69A4]">
                  Position Applied For
                </p>
                <p className="break-words text-[15px] font-semibold text-[#30213D]">
                  {jobTitle}
                </p>
              </div>

              <p className="mt-7 text-[11px] text-[#95879D]">
                This window will close automatically.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="relative border-b border-[#E8DDF1] bg-[linear-gradient(115deg,#F2EAF9_0%,#FAF7FD_70%,#FFFFFF_100%)] px-6 py-7 sm:px-9 sm:py-8">
                <button
                  type="button"
                  aria-label="Close application form"
                  onClick={onClose}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E1D2EC] bg-white/80 text-[#75449B] transition-colors hover:bg-[#EBE0F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B] sm:right-7 sm:top-7"
                >
                  <X size={20} strokeWidth={1.7} aria-hidden="true" />
                </button>

                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                  Cloudlem Careers
                </p>

                <div className="flex items-start gap-4 pr-9">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-[#E2D1ED] bg-[#EADDF5] text-[#75449B]">
                    <Briefcase size={23} strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h2
                      id="job-application-title"
                      className="text-[26px] font-semibold leading-[1.12] tracking-[-0.05em] text-[#30213D] sm:text-[32px]"
                    >
                      Apply for Position
                    </h2>
                    <p className="mt-3 break-words text-[13px] font-medium text-[#756980]">
                      {jobTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Application form: original names and required fields preserved */}
              <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-9 sm:py-9">
                <input type="hidden" name="job_title" value={jobTitle} />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="career-first-name" className={labelClass}>
                      First Name <span className="text-[#75449B]">*</span>
                    </label>
                    <input
                      id="career-first-name"
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="career-last-name" className={labelClass}>
                      Last Name <span className="text-[#75449B]">*</span>
                    </label>
                    <input
                      id="career-last-name"
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      placeholder="Doe"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="career-email" className={labelClass}>
                    Email Address <span className="text-[#75449B]">*</span>
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="john.doe@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="career-phone" className={labelClass}>
                    Phone Number <span className="text-[#75449B]">*</span>
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="career-linkedin" className={labelClass}>
                    LinkedIn Profile URL
                    <span className="ml-2 text-[11px] font-normal text-[#94879D]">
                      Optional
                    </span>
                  </label>
                  <input
                    id="career-linkedin"
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/johndoe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="career-resume" className={labelClass}>
                    Resume / CV <span className="text-[#75449B]">*</span>
                  </label>
                  <input
                    id="career-resume"
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full cursor-pointer rounded-xl border border-[#E4D8EE] bg-[#FCFAFE] px-4 py-3 text-[12px] text-[#443450] outline-none transition-colors file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#75449B] file:px-4 file:py-2.5 file:text-[11px] file:font-semibold file:text-white hover:border-[#CDB4DE] hover:file:bg-[#633682] focus:border-[#75449B] focus:ring-4 focus:ring-[#75449B]/10"
                  />
                  <p className="mt-3 text-[11px] leading-6 text-[#85778D]">
                    Upload your resume as a PDF or DOC/DOCX file (max 5MB).
                  </p>
                </div>

                <div>
                  <label htmlFor="career-cover-letter" className={labelClass}>
                    Cover Letter <span className="text-[#75449B]">*</span>
                  </label>
                  <textarea
                    id="career-cover-letter"
                    name="cover_letter"
                    required
                    rows={5}
                    placeholder="Tell us why you'd be a great fit for this position..."
                    className={`${inputClass} resize-y leading-7`}
                  />
                </div>

                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700"
                  >
                    <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-[12px] leading-6">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-3 border-t border-[#EEE6F4] pt-7 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex min-h-12 items-center justify-center rounded-xl border border-[#DCC9E9] bg-[#FAF7FD] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-[#75449B] transition-colors hover:bg-[#F0E7F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#75449B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.11em] text-white shadow-[0_10px_25px_rgba(117,68,155,0.16)] transition-colors hover:bg-[#633682] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
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

                <p className="text-center text-[11px] leading-6 text-[#85778D]">
                  Your application details and uploaded CV will be sent
                  through our application submission service.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
