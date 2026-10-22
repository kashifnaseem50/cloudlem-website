
"use client";

import { useState } from "react";

import {
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

import ServiceInquiryModal from "../services/ServiceInquiryModal";

// ==========================================
// SOLUTION CARD PROPERTIES
// ==========================================

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  cta: string;

  // Retained for compatibility.
  gradient?: string;
}

// ==========================================
// CLOUDLEM SOLUTION CARD
// Premium Soft Lavender & White
// ==========================================

export default function SolutionCard({
  title,
  description,
  features,
  icon: Icon,
  cta,
}: SolutionCardProps) {
  const [isInquiryOpen, setIsInquiryOpen] =
    useState(false);

  // Preserve the existing inquiry title format.
  const solutionTitle = `Solutions - ${title}`;

  return (
    <>
      {/* ===================================
          SOLUTION CARD
      =================================== */}

      <article
        className="
          group relative flex h-full flex-col
          overflow-hidden
          rounded-[24px]
          border border-[#E8DDF1]
          bg-white
          text-[#30213D]
          shadow-[0_12px_40px_rgba(75,43,105,0.045)]
          transition-[transform,border-color,box-shadow]
          duration-300
          hover:border-[#CEB4E1]
          hover:shadow-[0_24px_55px_rgba(91,50,130,0.11)]
          motion-safe:hover:-translate-y-1.5
        "
      >

        {/* TOP GRADIENT ACCENT */}
        <div
          aria-hidden="true"
          className="
            h-[3px] w-full
            bg-gradient-to-r
            from-[#B78ED4]
            via-[#75449B]
            to-[#E7D7F3]
          "
        />

        {/* DECORATIVE BACKGROUND GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-24 -top-24
            h-64 w-64 rounded-full
            bg-[#F0E7F8]/60
            opacity-50 blur-[65px]
            transition-opacity duration-300
            group-hover:opacity-90
          "
        />

        <div className="relative flex h-full flex-col p-6 sm:p-8">

          {/* ===================================
              ICON AND CATEGORY
          =================================== */}

          <div className="mb-8 flex items-start justify-between gap-4">

            {/* SOLUTION ICON */}
            <div
              className="
                flex h-14 w-14 shrink-0
                items-center justify-center
                rounded-2xl
                border border-[#E7D9F0]
                bg-[#F2EAF9]
                text-[#75449B]
                transition-[background-color,border-color,transform]
                duration-300
                group-hover:border-[#CEAFE1]
                group-hover:bg-[#EAE0F5]
                motion-safe:group-hover:-translate-y-0.5
              "
            >
              <Icon
                size={25}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            {/* CATEGORY LABEL */}
            <div className="pt-2 text-right">
              <span
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.16em]
                  text-[#9A78B2]
                "
              >
                Cloudlem
              </span>

              <span
                className="
                  mt-1 block text-[10px]
                  font-medium uppercase
                  tracking-[0.14em]
                  text-[#A596AE]
                "
              >
                Solutions
              </span>
            </div>
          </div>

          {/* ===================================
              SOLUTION TITLE
          =================================== */}

          <h3
            className="
              text-[27px] font-semibold
              leading-tight
              tracking-[-0.05em]
              text-[#30213D]
              sm:text-[30px]
            "
          >
            {title}
          </h3>

          {/* DECORATIVE DIVIDER */}
          <div
            aria-hidden="true"
            className="
              mt-5 h-[3px] w-11
              rounded-full bg-[#AC7AC8]
              transition-[width,background-color]
              duration-300
              group-hover:w-16
              group-hover:bg-[#75449B]
            "
          />

          {/* ===================================
              SOLUTION DESCRIPTION
          =================================== */}

          <p
            className="
              mt-6 text-[13px]
              leading-[1.9]
              text-[#756980]
              sm:text-[14px]
            "
          >
            {description}
          </p>

          {/* ===================================
              KEY CAPABILITIES
          =================================== */}

          <div
            className="
              mt-8
              border-t border-[#EEE6F4]
              pt-7
            "
          >

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px w-5
                  bg-[#B58ACA]
                "
              />

              <p
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.16em]
                  text-[#75449B]
                "
              >
                Key Capabilities
              </p>
            </div>

            {/* FEATURES */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="
                    flex items-start gap-3
                    rounded-xl
                    border border-[#EFE8F5]
                    bg-[#FCFAFE]
                    px-3.5 py-3
                    transition-[background-color,border-color]
                    duration-200
                    hover:border-[#E1D0ED]
                    hover:bg-[#F7F1FB]
                  "
                >

                  {/* CHECK ICON */}
                  <div
                    className="
                      mt-0.5
                      flex h-5 w-5 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#EDE1F6]
                      text-[#75449B]
                    "
                  >
                    <Check
                      size={12}
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />
                  </div>

                  {/* FEATURE TEXT */}
                  <span
                    className="
                      text-[12px] font-medium
                      leading-6
                      text-[#60526C]
                    "
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================
              CTA BUTTON
          =================================== */}

          <div className="mt-auto pt-9">
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="
                group/btn
                flex min-h-[52px] w-full
                items-center justify-between
                gap-4 rounded-xl
                bg-[#75449B]
                px-6 py-3.5
                text-[11px] font-bold
                uppercase tracking-[0.1em]
                text-white
                shadow-[0_10px_24px_rgba(117,68,155,0.15)]
                transition-[background-color,box-shadow]
                duration-300
                hover:bg-[#633682]
                hover:shadow-[0_15px_30px_rgba(117,68,155,0.24)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#75449B]
              "
            >
              <span>{cta}</span>

              <span
                className="
                  flex h-7 w-7
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-white/15
                "
              >
                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    motion-safe:group-hover/btn:translate-x-0.5
                  "
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>

        </div>

        {/* BOTTOM ACCENT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0 left-0
            h-[3px] w-0
            bg-[#75449B]
            transition-[width] duration-500
            group-hover:w-full
          "
        />
      </article>

      {/* ===================================
          EXISTING SUPABASE INQUIRY MODAL
          FUNCTIONALITY PRESERVED
      =================================== */}

      <ServiceInquiryModal
        serviceTitle={solutionTitle}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}
