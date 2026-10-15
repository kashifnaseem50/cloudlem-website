
"use client";

import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

import { motion } from "framer-motion";

import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Send,
} from "lucide-react";

type SubmitStatus = "idle" | "success" | "error";

type InquiryResponse = {
  success?: boolean;
  error?: string;
  message?: string;
};

type SelectedIndustry = {
  id: string;
  title: string;
};

// SUPPORTED INDUSTRIES
const industries: Record<string, string> = {
  healthcare: "Healthcare",
  education: "Education",
  retail: "Retail & E-commerce",
  "professional-services": "Professional Services",
};

const inputClass =
  "w-full min-h-12 border border-white/[0.12] " +
  "bg-[#111411] px-4 py-3 text-[13px] " +
  "text-[#F3F1EC] placeholder:text-white/30 " +
  "outline-none transition-colors duration-200 " +
  "focus:border-[#C97A4A] " +
  "focus:ring-1 focus:ring-[#C97A4A]/25";

const labelClass =
  "mb-2.5 block text-[11px] font-semibold " +
  "tracking-[0.02em] text-white/75";

export default function ContactFormSimple() {
  const [selectedIndustry, setSelectedIndustry] =
    useState<SelectedIndustry | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  // =====================================
  // READ INDUSTRY FROM CONTACT URL
  // =====================================
  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const industryId = (
      params.get("industry") ?? ""
    )
      .trim()
      .toLowerCase();

    if (
      Object.prototype.hasOwnProperty.call(
        industries,
        industryId
      )
    ) {
      setSelectedIndustry({
        id: industryId,
        title: industries[industryId],
      });
    } else {
      setSelectedIndustry(null);
    }
  }, []);

  // =====================================
  // SUBMIT CONTACT INQUIRY
  // =====================================
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const company = String(
      formData.get("company") ?? ""
    ).trim();

    const phone = String(
      formData.get("phone") ?? ""
    ).trim();

    const service = String(
      formData.get("service") ?? ""
    ).trim();

    const message = String(
      formData.get("message") ?? ""
    ).trim();

    const spamCheck = String(
      formData.get("inquiry_spam_check") ?? ""
    ).trim();

    // =====================================
    // BUILD INQUIRY TITLE
    // =====================================
    const titleParts = ["Contact"];

    if (selectedIndustry) {
      titleParts.push(selectedIndustry.title);
    }

    if (service) {
      titleParts.push(service);
    }

    if (
      !selectedIndustry &&
      !service
    ) {
      titleParts.push("General Inquiry");
    }

    const serviceTitle = titleParts.join(" - ");

    // =====================================
    // PRESERVE INDUSTRY AND PHONE
    // WITHOUT DATABASE SCHEMA CHANGES
    // =====================================
    const detailParts: string[] = [];

    if (selectedIndustry) {
      detailParts.push(
        `Industry: ${selectedIndustry.title}`
      );
    }

    if (phone) {
      detailParts.push(`Phone: ${phone}`);
    }

    detailParts.push(message);

    const details = detailParts.join("\n\n");

    setErrorMessage("");
    setSubmitStatus("idle");

    // =====================================
    // CLIENT-SIDE VALIDATION
    // =====================================
    if (
      name.length < 1 ||
      name.length > 150 ||
      email.length < 3 ||
      email.length > 254 ||
      company.length > 160 ||
      phone.length > 40 ||
      serviceTitle.length > 160 ||
      message.length < 10 ||
      details.length > 5000
    ) {
      setErrorMessage(
        "Please check your information. Your message must contain at least 10 characters."
      );

      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      // EXISTING SUPABASE-BACKED API
      const response = await fetch(
        "/api/service-inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            serviceTitle,
            name,
            email,
            company,
            details,
            website: spamCheck,
          }),
        }
      );

      let result: InquiryResponse | null = null;

      try {
        result =
          (await response.json()) as InquiryResponse;
      } catch {
        result = null;
      }

      // HTTP 201 confirms Supabase insertion.
      if (
        response.status !== 201 ||
        result?.success !== true
      ) {
        throw new Error(
          typeof result?.error === "string"
            ? result.error
            : "We could not confirm your inquiry was saved."
        );
      }

      form.reset();
      setSubmitStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // =====================================
  // SUCCESS MESSAGE
  // =====================================
  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center border border-white/[0.10] bg-[#171917] px-7 py-12 text-center sm:px-10"
      >
        <div className="mb-7 flex h-20 w-20 items-center justify-center border border-[#C97A4A]/30 bg-[#C97A4A]/[0.08]">
          <CheckCircle2
            size={36}
            strokeWidth={1.5}
            className="text-[#D8B08B]"
          />
        </div>

        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C97A4A]">
          Submission Successful
        </p>

        <h3 className="text-[30px] font-semibold tracking-[-0.05em] text-[#F3F1EC] sm:text-[36px]">
          Message Received.
        </h3>

        <div className="my-6 h-px w-12 bg-[#C97A4A]" />

        <p className="max-w-[380px] text-[13px] leading-7 text-white/60">
          Thank you for contacting Cloudlem.
          Your inquiry has been submitted
          successfully to our team.
        </p>

        <button
          type="button"
          onClick={() => {
            setErrorMessage("");
            setSubmitStatus("idle");
          }}
          className="group mt-9 inline-flex min-h-12 items-center gap-4 border border-[#C97A4A]/50 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#D8B08B] transition-colors hover:border-[#D8B08B] hover:bg-[#C97A4A]/[0.06]"
        >
          Send Another Message

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </motion.div>
    );
  }

  // =====================================
  // CONTACT FORM
  // =====================================
  return (
    <div className="relative border border-white/[0.10] bg-[#171917] p-6 text-white sm:p-8 lg:p-10">

      {/* TOP ACCENT */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C97A4A]/70" />

      {/* FORM HEADER */}
      <div className="mb-9">

        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-[#C97A4A]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C97A4A]">
            Contact Form
          </p>
        </div>

        <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.05em] text-[#F3F1EC] sm:text-[33px]">
          Send Us a Message.
        </h2>

        <p className="mt-4 max-w-[460px] text-[12px] leading-7 text-white/55">
          Share your project requirements,
          questions, or business challenges.
          Our team will review your inquiry.
        </p>
      </div>

      {/* =====================================
          SELECTED INDUSTRY
      ===================================== */}
      {selectedIndustry && (
        <div className="mb-8 flex items-start gap-4 border border-[#C97A4A]/30 bg-[#C97A4A]/[0.06] p-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C97A4A]/30 text-[#D8B08B]">
            <Building2
              size={19}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#C97A4A]">
              Selected Industry
            </p>

            <p className="text-[15px] font-semibold text-[#F3F1EC]">
              {selectedIndustry.title}
            </p>

            <p className="mt-1 text-[11px] leading-5 text-white/50">
              Your industry will be included
              in your inquiry.
            </p>
          </div>
        </div>
      )}

      {/* =====================================
          FORM FIELDS
      ===================================== */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label
              htmlFor="contact-name"
              className={labelClass}
            >
              Full Name <span className="text-[#C97A4A]">*</span>
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={150}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className={labelClass}
            >
              Email Address <span className="text-[#C97A4A]">*</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* COMPANY + PHONE */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label
              htmlFor="contact-company"
              className={labelClass}
            >
              Company
              <span className="ml-2 font-normal text-white/35">
                Optional
              </span>
            </label>

            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={160}
              placeholder="Company name"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className={labelClass}
            >
              Phone Number
              <span className="ml-2 font-normal text-white/35">
                Optional
              </span>
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="+92 XXX XXXXXXX"
              className={inputClass}
            />
          </div>
        </div>

        {/* SERVICE SELECTION */}
        <div>
          <label
            htmlFor="contact-service"
            className={labelClass}
          >
            Service Interested In
          </label>

          <select
            id="contact-service"
            name="service"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" className="bg-[#171917]">
              Select a service (optional)
            </option>

            <option value="AI & Automation" className="bg-[#171917]">
              AI & Automation
            </option>

            <option value="Cloud & DevOps" className="bg-[#171917]">
              Cloud & DevOps
            </option>

            <option value="Web Development" className="bg-[#171917]">
              Web Development
            </option>

            <option value="Bookkeeping & Accounting" className="bg-[#171917]">
              Bookkeeping & Accounting
            </option>

            <option value="Design & Branding" className="bg-[#171917]">
              Design & Branding
            </option>

            <option value="Business Growth" className="bg-[#171917]">
              Business Growth
            </option>

            <option value="Other" className="bg-[#171917]">
              Other / General Inquiry
            </option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="contact-message"
            className={labelClass}
          >
            Project Details / Message
            <span className="ml-1 text-[#C97A4A]">
              *
            </span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={4800}
            rows={6}
            placeholder="Tell us about your project, requirements, or how we can help..."
            className={`${inputClass} min-h-[155px] resize-y`}
          />

          <p className="mt-2 text-[10px] leading-5 text-white/35">
            Please include at least 10 characters.
          </p>
        </div>

        {/* HONEYPOT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden opacity-0"
        >
          <label htmlFor="inquiry-spam-check">
            Leave this field empty
          </label>

          <input
            id="inquiry-spam-check"
            type="text"
            name="inquiry_spam_check"
            autoComplete="off"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        {/* ERROR FEEDBACK */}
        {submitStatus === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 border border-red-400/25 bg-red-500/[0.07] px-4 py-4"
          >
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0 text-red-300"
              aria-hidden="true"
            />

            <p className="text-[12px] leading-6 text-red-200">
              {errorMessage}
            </p>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <div className="border-t border-white/[0.09] pt-6">

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex min-h-13 w-full items-center justify-center gap-4 bg-[#C8A23A] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#111111] transition-colors hover:bg-[#D8B84E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-[#111111]/25 border-t-[#111111]"
                  aria-hidden="true"
                />

                Sending Message...
              </>
            ) : (
              <>
                <Send
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Send Message

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </>
            )}
          </button>

          <p className="mt-4 text-center text-[10px] leading-5 text-white/35">
            Your information will be used
            to review and respond to your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
