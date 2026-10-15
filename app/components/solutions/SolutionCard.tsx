
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
// Warm Cream / Stone Beige / Charcoal
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

  const solutionTitle = `Solutions - ${title}`;

  return (
    <>
      {/* ===================================
          SOLUTION CARD
      =================================== */}

      <article className="group relative flex h-full flex-col overflow-hidden border border-[#181818]/20 bg-[#B7B09F] text-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#181818]/60 hover:shadow-[0_20px_45px_rgba(24,24,24,0.12)]">

        {/* TOP ACCENT */}

        <div className="h-[3px] w-full bg-[#181818] transition-all duration-300 group-hover:h-[5px]" />

        <div className="flex h-full flex-col p-7 sm:p-8">

          {/* ===================================
              ICON AND CATEGORY
          =================================== */}

          <div className="mb-9 flex items-start justify-between gap-4">

            {/* SOLUTION ICON */}

            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8] transition-colors duration-300 group-hover:bg-[#33312D]">
              <Icon
                size={24}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>

            {/* CATEGORY LABEL */}

            <span className="pt-2 text-right text-[9px] font-bold uppercase tracking-[0.17em] text-[#181818]/75">
              Cloudlem
              <span className="block">
                Solutions
              </span>
            </span>
          </div>

          {/* ===================================
              SOLUTION TITLE
          =================================== */}

          <h3 className="text-[27px] font-semibold leading-tight tracking-[-0.045em] text-[#181818] sm:text-[30px]">
            {title}
          </h3>

          {/* DECORATIVE DIVIDER */}

          <div className="mt-5 h-[2px] w-11 bg-[#181818]" />

          {/* ===================================
              SOLUTION DESCRIPTION
          =================================== */}

          <p className="mt-6 text-[13px] leading-7 text-[#181818]/85">
            {description}
          </p>

          {/* ===================================
              KEY CAPABILITIES
          =================================== */}

          <div className="mt-8 border-t border-[#181818]/20 pt-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-5 bg-[#181818]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]">
                Key Capabilities
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3"
                >
                  {/* CHECK ICON */}

                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#181818]/50 bg-[#181818]/10 text-[#181818]">
                    <Check
                      size={12}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* FEATURE TEXT */}

                  <span className="text-[12px] font-medium leading-6 text-[#181818]/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================
              CTA BUTTON
          =================================== */}

          <div className="mt-auto pt-10">
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="group/btn flex min-h-12 w-full items-center justify-between gap-4 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.11em] text-[#D8D2C8] transition-all duration-200 hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
            >
              <span>{cta}</span>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* SUBTLE DECORATIVE HOVER LINE */}

        <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#181818] transition-all duration-500 group-hover:w-full" />
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
