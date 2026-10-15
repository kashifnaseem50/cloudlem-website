
"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
} from "lucide-react";

// ==========================================
// CLOUDLEM JOB CARD PROPERTIES
// ==========================================

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  level: string;
  description: string;
  tags: string[];

  // Retained for compatibility with
  // the existing Careers page.
  gradient?: string;

  onApply?: () => void;
}

// ==========================================
// CLOUDLEM CAREER JOB CARD
// Warm Cream / Stone Beige / Charcoal
// ==========================================

export default function JobCard({
  title,
  location,
  type,
  level,
  description,
  tags,
  onApply,
}: JobCardProps) {
  return (
    <article className="group relative overflow-hidden border border-[#181818]/20 bg-[#B7B09F] text-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#181818]/60 hover:shadow-[0_20px_45px_rgba(24,24,24,0.12)]">

      {/* ===================================
          TOP ACCENT
      =================================== */}

      <div className="h-[3px] w-full bg-[#181818] transition-all duration-300 group-hover:h-[5px]" />

      <div className="p-6 sm:p-8 lg:p-9">

        {/* ===================================
            JOB HEADER
        =================================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

          <div className="min-w-0 flex-1">

            {/* CATEGORY */}

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8] transition-colors duration-300 group-hover:bg-[#33312D]">
                <BriefcaseBusiness
                  size={21}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#181818]/75">
                Career Opportunity
              </span>
            </div>

            {/* JOB TITLE */}

            <h3 className="max-w-[650px] text-[26px] font-semibold leading-tight tracking-[-0.045em] text-[#181818] sm:text-[32px]">
              {title}
            </h3>

            {/* ACCENT LINE */}

            <div className="mt-6 h-[2px] w-11 bg-[#181818]" />
          </div>

          {/* ===================================
              EXPERIENCE LEVEL
          =================================== */}

          <div className="shrink-0 self-start border border-[#181818]/30 bg-[#D8D2C8] px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#181818]">
              {level}
            </span>
          </div>
        </div>

        {/* ===================================
            JOB INFORMATION
        =================================== */}

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-[#181818]/20 pb-7">

          {/* LOCATION */}

          <div className="flex items-center gap-3">
            <MapPin
              size={16}
              className="shrink-0 text-[#181818]"
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span className="text-[12px] font-medium text-[#181818]/80">
              {location}
            </span>
          </div>

          {/* EMPLOYMENT TYPE */}

          <div className="flex items-center gap-3">
            <Clock3
              size={16}
              className="shrink-0 text-[#181818]"
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span className="text-[12px] font-medium text-[#181818]/80">
              {type}
            </span>
          </div>
        </div>

        {/* ===================================
            JOB DESCRIPTION
        =================================== */}

        <div className="mt-8">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-[#181818]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]">
              About the Role
            </p>
          </div>

          <p className="max-w-[800px] text-[13px] leading-8 text-[#181818]/85">
            {description}
          </p>
        </div>

        {/* ===================================
            SKILLS & TECHNOLOGIES
        =================================== */}

        <div className="mt-8">

          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]">
            Key Skills & Technologies
          </p>

          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="border border-[#181818]/25 bg-[#D8D2C8] px-3 py-2 text-[11px] font-medium text-[#181818] transition-all duration-200 hover:border-[#181818] hover:bg-[#181818] hover:text-[#D8D2C8]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* ===================================
            BOTTOM ACTION AREA
        =================================== */}

        <div className="mt-9 flex flex-col gap-6 border-t border-[#181818]/20 pt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* SUPPORTING TEXT */}

          <div>
            <p className="text-[13px] font-semibold text-[#181818]">
              Interested in this opportunity?
            </p>

            <p className="mt-2 max-w-[390px] text-[11px] leading-6 text-[#181818]/70">
              Share your experience and application
              with our team.
            </p>
          </div>

          {/* ===================================
              APPLY BUTTON
          =================================== */}

          <button
            type="button"
            onClick={onApply}
            disabled={!onApply}
            aria-label={`Apply for ${title}`}
            className="group/btn inline-flex min-h-12 w-full shrink-0 items-center justify-between gap-8 border border-[#181818] bg-[#181818] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-all duration-200 hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Apply Now

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* ===================================
          DECORATIVE BOTTOM HOVER LINE
      =================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#181818] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
