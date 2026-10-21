"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
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

// IDs match the existing Industries page and its new eight-industry redesign.
const industries: Record<string, string> = {
  healthcare: "Healthcare",
  education: "Education",
  retail: "Retail & E-commerce",
  "professional-services": "Professional Services",
  "financial-services": "Financial Services",
  "real-estate": "Real Estate & Property Management",
  "manufacturing-logistics": "Manufacturing & Logistics",
  "technology-saas": "Technology & SaaS",
};

const inputClass =
  "min-h-12 w-full rounded-xl border border-[#E4D8EE] " +
  "bg-[#FCFAFE] px-4 py-3 text-[13px] text-[#30223E] " +
  "placeholder:text-[#9B8FA4] outline-none " +
  "transition-[border-color,background-color,box-shadow] duration-200 " +
  "hover:border-[#CEB9DF] focus:border-[#75449B] " +
  "focus:bg-white focus:ring-4 focus:ring-[#75449B]/10";

const labelClass =
  "mb-2.5 block text-[12px] font-semibold tracking-[-0.01em] text-[#44354F]";

export default function ContactFormSimple() {
  const [selectedIndustry, setSelectedIndustry] =
    useState<SelectedIndustry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const reduceMotion = useReducedMotion();

  // Preserve industry preselection from /contact?industry=<id>.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const industryId = (params.get("industry") ?? "")
      .trim()
      .toLowerCase();

    if (Object.prototype.hasOwnProperty.call(industries, industryId)) {
      setSelectedIndustry({
        id: industryId,
        title: industries[industryId],
      });
    } else {
      setSelectedIndustry(null);
    }
  }, []);

  // Existing Supabase-backed submission and validation preserved.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const spamCheck = String(formData.get("inquiry_spam_check") ?? "").trim();

    const titleParts = ["Contact"];
    if (selectedIndustry) titleParts.push(selectedIndustry.title);
    if (service) titleParts.push(service);
    if (!selectedIndustry && !service) titleParts.push("General Inquiry");
    const serviceTitle = titleParts.join(" - ");

    const detailParts: string[] = [];
    if (selectedIndustry) {
      detailParts.push(`Industry: ${selectedIndustry.title}`);
    }
    if (phone) detailParts.push(`Phone: ${phone}`);
    detailParts.push(message);
    const details = detailParts.join("\n\n");

    setErrorMessage("");
    setSubmitStatus("idle");

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
      const response = await fetch("/api/service-inquiries", {
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
      });

      let result: InquiryResponse | null = null;
      try {
        result = (await response.json()) as InquiryResponse;
      } catch {
        result = null;
      }

      if (response.status !== 201 || result?.success !== true) {
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

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[20px] bg-white px-5 py-12 text-center sm:px-10"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[22px] border border-[#DFCDEB] bg-[#F3ECFA]">
          <CheckCircle2
            size={36}
            strokeWidth={1.6}
            className="text-[#75449B]"
            aria-hidden="true"
          />
        </div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
          Submission successful
        </p>
        <h3 className="text-[30px] font-semibold tracking-[-0.05em] text-[#2B1C39] sm:text-[36px]">
          Message received.
        </h3>
        <div className="my-6 h-0.5 w-12 rounded-full bg-[#A57ABE]" />
        <p className="max-w-[390px] text-[13px] leading-7 text-[#6F6478]">
          Thank you for contacting Cloudlem. Your inquiry has been submitted
          successfully to our team.
        </p>
        <button
          type="button"
          onClick={() => {
            setErrorMessage("");
            setSubmitStatus("idle");
          }}
          className="group mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#D7BCE9] bg-[#F8F3FC] px-6 py-3 text-[12px] font-semibold text-[#75449B] transition-colors hover:border-[#75449B] hover:bg-[#EEE2F8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
        >
          Send another message
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform motion-safe:group-hover:translate-x-1"
          />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white p-1 text-[#2B2036] sm:p-2">
      <div
        aria-hidden="true"
        className="absolute inset-x-5 top-0 h-[3px] rounded-full bg-gradient-to-r from-[#D2B3E5] via-[#75449B] to-[#E4D3F0] sm:inset-x-7"
      />

      <div className="px-3 pb-4 pt-8 sm:px-5 sm:pb-6 sm:pt-9">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#A783BF]" aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
            Contact form
          </p>
        </div>
        <h2 className="text-[clamp(1.75rem,3vw,2.2rem)] font-semibold leading-tight tracking-[-0.05em] text-[#30203D]">
          Send us a message.
        </h2>
        <p className="mt-4 max-w-[480px] text-[13px] leading-7 text-[#756A7D]">
          Share your project requirements, questions, or business challenges.
          Our team will review your inquiry.
        </p>
      </div>

      {selectedIndustry && (
        <div className="mx-3 mb-7 flex items-start gap-4 rounded-[16px] border border-[#E3D2ED] bg-[#F5EFFA] p-4 sm:mx-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#75449B] shadow-[0_2px_10px_rgba(67,40,92,0.05)]">
            <Building2 size={19} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8057A0]">
              Selected industry
            </p>
            <p className="text-[15px] font-semibold text-[#342342]">
              {selectedIndustry.title}
            </p>
            <p className="mt-1 text-[12px] leading-6 text-[#766581]">
              Your industry will be included in your inquiry.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 px-3 pb-4 sm:px-5 sm:pb-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Full name <span className="text-[#75449B]">*</span>
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
            <label htmlFor="contact-email" className={labelClass}>
              Email address <span className="text-[#75449B]">*</span>
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-company" className={labelClass}>
              Company <span className="ml-2 font-normal text-[#988BA1]">Optional</span>
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
            <label htmlFor="contact-phone" className={labelClass}>
              Phone number <span className="ml-2 font-normal text-[#988BA1]">Optional</span>
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

        <div>
          <label htmlFor="contact-service" className={labelClass}>
            Service interested in
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select a service (optional)</option>

            <optgroup label="Digital Services">
              <option value="Digital Consulting & Strategy">Digital Consulting & Strategy</option>
              <option value="Digital Commerce">Digital Commerce</option>
              <option value="Business Applications">Business Applications</option>
            </optgroup>

            <optgroup label="Data & AI">
              <option value="Data Modernization">Data Modernization</option>
              <option value="Data Management">Data Management</option>
              <option value="Advanced Analytics">Advanced Analytics</option>
              <option value="Connected Intelligence">Connected Intelligence</option>
              <option value="Generative AI">Generative AI</option>
            </optgroup>

            <optgroup label="Cloud & Infrastructure">
              <option value="Digital Infrastructure Services">Digital Infrastructure Services</option>
              <option value="Cloud Application Development & Integration">Cloud Application Development & Integration</option>
              <option value="Cloud Operations & Migration">Cloud Operations & Migration</option>
              <option value="Managed Services">Managed Services</option>
            </optgroup>

            <optgroup label="Security">
              <option value="Security">Security</option>
            </optgroup>

            <optgroup label="Business Process Services">
              <option value="Contact Center">Contact Center</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Staff Augmentation">Staff Augmentation</option>
              <option value="Legal Process Outsourcing">Legal Process Outsourcing</option>
              <option value="Recruitment Process Outsourcing">Recruitment Process Outsourcing</option>
            </optgroup>

            <optgroup label="Bookkeeping">
              <option value="Bookkeeping Services">Bookkeeping Services</option>
            </optgroup>

            <option value="Other">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Project details / message <span className="text-[#75449B]">*</span>
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
          <p className="mt-2 text-[11px] leading-5 text-[#8C8095]">
            Please include at least 10 characters.
          </p>
        </div>

        {/* Honeypot field: preserve its name and submission behavior. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden opacity-0"
        >
          <label htmlFor="inquiry-spam-check">Leave this field empty</label>
          <input
            id="inquiry-spam-check"
            type="text"
            name="inquiry_spam_check"
            autoComplete="off"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        {submitStatus === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-[#F2C8D1] bg-[#FFF3F5] px-4 py-4"
          >
            <AlertCircle
              size={18}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#B23B58]"
            />
            <p className="text-[12px] leading-6 text-[#922B47]">
              {errorMessage}
            </p>
          </div>
        )}

        <div className="border-t border-[#ECE4F2] pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#75449B] px-6 py-4 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.17)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#60357F] hover:shadow-[0_15px_30px_rgba(117,68,155,0.23)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white motion-reduce:animate-none"
                  aria-hidden="true"
                />
                Sending message...
              </>
            ) : (
              <>
                <Send size={16} strokeWidth={1.8} aria-hidden="true" />
                Send message
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </>
            )}
          </button>
          <p className="mt-4 text-center text-[11px] leading-6 text-[#8B7D96]">
            Your information will be used to review and respond to your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
