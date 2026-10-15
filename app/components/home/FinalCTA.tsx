
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// CLOUDLEM — CONTACT SECTION
// ==========================================

// IMPORTANT:
// Replace this with Cloudlem's verified
// company email address before using the form.
const CONTACT_EMAIL = "your-email@example.com";

const services = [
  "Digital Consulting & Strategy",
  "Digital Commerce",
  "Business Applications",
  "Data & Analytics",
  "Generative AI",
  "Cloud Operations & Migration",
  "Managed Services",
  "Digital Infrastructure Services",
  "Security",
  "Business Process Services",
  "Other / General Inquiry",
];

const inputClass =
  "mt-2 block h-[46px] w-full rounded-[6px] border border-[#DAD5DF] bg-white px-3.5 text-[13px] text-[#25202A] outline-none transition-colors placeholder:text-[#A19AA8] hover:border-[#BDB1C7] focus:border-[#8250A7] focus:ring-2 focus:ring-[#8250A7]/15";

const labelClass =
  "block text-[12px] font-semibold text-[#332B38]";

// ==========================================
// FINAL CTA COMPONENT
// ==========================================

export default function FinalCTA() {
  const [notice, setNotice] = useState("");

  // ========================================
  // PREPARE EMAIL INQUIRY
  // ========================================

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setNotice("");

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (CONTACT_EMAIL === "your-email@example.com") {
      setNotice(
        "Email delivery has not been configured yet. Please add Cloudlem's verified contact email in FinalCTA.tsx."
      );
      return;
    }

    const data = new FormData(form);

    const firstName = String(
      data.get("firstName") ?? ""
    ).trim();

    const lastName = String(
      data.get("lastName") ?? ""
    ).trim();

    const email = String(
      data.get("email") ?? ""
    ).trim();

    const company = String(
      data.get("company") ?? ""
    ).trim();

    const phone = String(
      data.get("phone") ?? ""
    ).trim();

    const country = String(
      data.get("country") ?? ""
    ).trim();

    const service = String(
      data.get("service") ?? ""
    ).trim();

    const message = String(
      data.get("message") ?? ""
    ).trim();

    const subject = `Cloudlem inquiry: ${service}`;

    const body = [
      "New Cloudlem business inquiry",
      "",
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Phone: ${phone}`,
      `Country / Region: ${country}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
      "",
      "Submitted using the Cloudlem website email form.",
    ].join("\n");

    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice(
      "Your email application should open with a prepared inquiry. Please review the email and press Send there."
    );

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-[#110C19] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* ======================================
          FULL-WIDTH PURPLE BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        <Image
          src="/images/backgrounds/contact-purple.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* GRADIENT FOR READABILITY */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,13,0.62)_0%,rgba(15,9,24,0.30)_48%,rgba(58,14,76,0.12)_100%)]" />

      </div>

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <div className="container-systems">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">

          {/* ==================================
              LEFT — CONTACT INTRO
          ================================== */}

          <div className="relative max-w-[580px]">

            {/* EYEBROW */}

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-9 bg-[#CB83EF]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.21em] text-[#E3BCF5]">
                Let's Work Together
              </p>

            </div>

            {/* MAIN HEADING */}

            <h2
              id="final-cta-heading"
              className="text-[clamp(2.7rem,4.5vw,4.8rem)] font-semibold leading-[1.09] tracking-[-0.06em] text-white"
            >
              Let's build
              <br />
              what's{" "}
              <span className="text-[#D891F2]">
                next,
              </span>
              <br />
              together.
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[480px] text-[15px] leading-[1.85] text-white/75 sm:text-[16px]">
              Have an idea, challenge, or project in
              mind? Tell us what you're working on.
              We'll help you explore a practical path
              forward.
            </p>

            {/* ==================================
                CONTACT HIGHLIGHTS
            ================================== */}

            <div className="mt-10 grid max-w-[470px] gap-6 border-t border-white/20 pt-7 sm:grid-cols-2">

              {/* HIGHLIGHT 1 */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] border border-white/15 bg-white/10 text-[#DCA6F2]">

                  <MessageCircle
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                </div>

                <div>

                  <h3 className="text-[13px] font-semibold text-white">
                    Let's talk
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-white/60">
                    Share your goals and requirements.
                  </p>

                </div>

              </div>

              {/* HIGHLIGHT 2 */}

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] border border-white/15 bg-white/10 text-[#DCA6F2]">

                  <ShieldCheck
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                </div>

                <div>

                  <h3 className="text-[13px] font-semibold text-white">
                    Practical solutions
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-white/60">
                    Technology aligned with your needs.
                  </p>

                </div>

              </div>

            </div>

            {/* ALTERNATIVE CONTACT LINK */}

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 border-b border-[#C78BE7]/65 pb-2 text-[12px] font-semibold text-[#E6C1F5] transition-colors hover:border-white hover:text-white"
            >
              Explore our contact page

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />

            </Link>

          </div>

          {/* ==================================
              RIGHT — CONTACT FORM
          ================================== */}

          <div className="relative">

            {/* FORM BACKGROUND GLOW */}

            <div className="pointer-events-none absolute -inset-4 rounded-[24px] bg-[#BD6CE1]/15 blur-[45px]" />

            {/* WHITE FORM CARD */}

            <div className="relative rounded-[14px] border border-white/70 bg-white p-6 text-[#171717] shadow-[0_28px_80px_rgba(9,5,18,0.26)] sm:p-8 lg:p-9">

              {/* FORM HEADER */}

              <div className="mb-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8852AA]">
                  Start a Conversation
                </p>

                <h3 className="mt-2 text-[26px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#211A27] sm:text-[30px]">
                  Get in touch
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#756E7B]">
                  Tell us a little about your project.
                  Fields marked * are required.
                </p>

              </div>

              {/* ==================================
                  CONTACT FORM
              ================================== */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* FIRST / LAST NAME */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="contact-first-name"
                      className={labelClass}
                    >
                      First name *
                    </label>

                    <input
                      id="contact-first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                      maxLength={80}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="contact-last-name"
                      className={labelClass}
                    >
                      Last name *
                    </label>

                    <input
                      id="contact-last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                      maxLength={80}
                      className={inputClass}
                    />

                  </div>

                </div>

                {/* EMAIL / COMPANY */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="contact-email"
                      className={labelClass}
                    >
                      Work email *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                      maxLength={254}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="contact-company"
                      className={labelClass}
                    >
                      Company name
                    </label>

                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      maxLength={120}
                      className={inputClass}
                    />

                  </div>

                </div>

                {/* PHONE / COUNTRY */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="contact-phone"
                      className={labelClass}
                    >
                      Phone number *
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 234 567 890"
                      required
                      maxLength={30}
                      className={inputClass}
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="contact-country"
                      className={labelClass}
                    >
                      Country / Region *
                    </label>

                    <input
                      id="contact-country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      placeholder="Your country"
                      required
                      maxLength={100}
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
                    Which service are you interested in? *
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (

                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>

                    ))}

                  </select>

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="contact-message"
                    className={labelClass}
                  >
                    Tell us about your project *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={4000}
                    placeholder="Share your goals, challenges, timeline, or any details that could help us understand your needs."
                    className="mt-2 block w-full resize-y rounded-[6px] border border-[#DAD5DF] bg-white px-3.5 py-3 text-[13px] leading-6 text-[#25202A] outline-none transition-colors placeholder:text-[#A19AA8] hover:border-[#BDB1C7] focus:border-[#8250A7] focus:ring-2 focus:ring-[#8250A7]/15"
                  />

                </div>

                {/* CONSENT */}

                <label className="flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#76409B]"
                  />

                  <span className="text-[11px] leading-[1.65] text-[#625B67]">
                    I consent to Cloudlem using the
                    information I provide to contact
                    me regarding this inquiry.
                  </span>

                </label>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="group flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[6px] bg-[#32203F] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#74449C] hover:shadow-[0_10px_28px_rgba(86,47,120,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8852AA]"
                >

                  Prepare Email Inquiry

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />

                </button>

                {/* FORM STATUS */}

                {notice && (

                  <p
                    role="status"
                    aria-live="polite"
                    className="rounded-[6px] border border-[#E9DEF0] bg-[#F8F4FA] px-3 py-3 text-[12px] leading-6 text-[#624276]"
                  >
                    {notice}
                  </p>

                )}

                {/* FORM FOOTER */}

                <div className="flex items-center justify-center gap-2 pt-1 text-[#8D8592]">

                  <CheckCircle2
                    size={14}
                    aria-hidden="true"
                  />

                  <p className="text-[11px]">
                    Please review your inquiry before sending.
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
