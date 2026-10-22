
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

  // Retained for compatibility.
  gradient?: string;

  onApply?: () => void;
}

// ==========================================
// CLOUDLEM CAREER JOB CARD
// Premium Soft Lavender & White
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
    <article
      className="
        group relative overflow-hidden
        rounded-[24px]
        border border-[#E8DDF1]
        bg-white
        text-[#30213D]
        shadow-[0_12px_40px_rgba(75,43,105,0.045)]
        transition-[transform,border-color,box-shadow]
        duration-300
        hover:border-[#CDB3DF]
        hover:shadow-[0_22px_55px_rgba(91,50,130,0.10)]
        motion-safe:hover:-translate-y-1
      "
    >
      {/* TOP ACCENT */}
      <div
        aria-hidden="true"
        className="
          h-[3px] w-full
          bg-gradient-to-r
          from-[#C6A4DC]
          via-[#75449B]
          to-[#EADCF4]
        "
      />

      {/* DECORATIVE GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-28 -top-28
          h-72 w-72 rounded-full
          bg-[#F1E8F9]/70
          opacity-50 blur-[75px]
          transition-opacity duration-300
          group-hover:opacity-90
        "
      />

      <div className="relative p-6 sm:p-8 lg:p-9">
        {/* =====================================
            JOB HEADER
        ===================================== */}

        <div
          className="
            flex flex-col gap-6
            sm:flex-row sm:items-start
            sm:justify-between
          "
        >
          <div className="min-w-0 flex-1">
            {/* CATEGORY */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  border border-[#E6D8F0]
                  bg-[#F2EAF9]
                  text-[#75449B]
                  transition-[background-color,border-color,transform]
                  duration-300
                  group-hover:border-[#CDB0E0]
                  group-hover:bg-[#EAE0F5]
                  motion-safe:group-hover:-translate-y-0.5
                "
              >
                <BriefcaseBusiness
                  size={21}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.17em]
                  text-[#8E68A9]
                "
              >
                Career Opportunity
              </span>
            </div>

            {/* JOB TITLE */}
            <h3
              className="
                max-w-[700px]
                text-[26px] font-semibold
                leading-tight
                tracking-[-0.045em]
                text-[#30213D]
                sm:text-[32px]
              "
            >
              {title}
            </h3>

            {/* ACCENT LINE */}
            <div
              aria-hidden="true"
              className="
                mt-6 h-[3px] w-11
                rounded-full
                bg-[#AC7AC8]
                transition-[width,background-color]
                duration-300
                group-hover:w-16
                group-hover:bg-[#75449B]
              "
            />
          </div>

          {/* EXPERIENCE LEVEL */}
          <div
            className="
              inline-flex shrink-0
              self-start items-center
              rounded-full
              border border-[#DFCEEB]
              bg-[#F4EDF9]
              px-4 py-2.5
            "
          >
            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.12em]
                text-[#75449B]
              "
            >
              {level}
            </span>
          </div>
        </div>

        {/* =====================================
            JOB INFORMATION
        ===================================== */}

        <div
          className="
            mt-8 flex flex-wrap
            items-center gap-x-7 gap-y-3
            border-b border-[#EEE6F4]
            pb-7
          "
        >
          {/* LOCATION */}
          <div
            className="
              inline-flex items-center gap-2.5
              rounded-full
              border border-[#EFE6F5]
              bg-[#FCFAFE]
              px-3.5 py-2.5
            "
          >
            <MapPin
              size={16}
              className="shrink-0 text-[#75449B]"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span
              className="
                text-[12px] font-medium
                text-[#695A76]
              "
            >
              {location}
            </span>
          </div>

          {/* EMPLOYMENT TYPE */}
          <div
            className="
              inline-flex items-center gap-2.5
              rounded-full
              border border-[#EFE6F5]
              bg-[#FCFAFE]
              px-3.5 py-2.5
            "
          >
            <Clock3
              size={16}
              className="shrink-0 text-[#75449B]"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span
              className="
                text-[12px] font-medium
                text-[#695A76]
              "
            >
              {type}
            </span>
          </div>
        </div>

        {/* =====================================
            JOB DESCRIPTION
        ===================================== */}

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-6 bg-[#B58ACA]"
            />

            <p
              className="
                text-[10px] font-bold
                uppercase tracking-[0.17em]
                text-[#75449B]
              "
            >
              About the Role
            </p>
          </div>

          <p
            className="
              max-w-[850px]
              text-[13px] leading-[1.9]
              text-[#756980]
              sm:text-[14px]
            "
          >
            {description}
          </p>
        </div>

        {/* =====================================
            SKILLS & TECHNOLOGIES
        ===================================== */}

        <div className="mt-8">
          <p
            className="
              mb-5 text-[10px] font-bold
              uppercase tracking-[0.17em]
              text-[#75449B]
            "
          >
            Key Skills & Technologies
          </p>

          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="
                  rounded-full
                  border border-[#E6D8EF]
                  bg-[#F8F3FC]
                  px-4 py-2
                  text-[11px] font-medium
                  text-[#654879]
                  transition-[background-color,border-color,color]
                  duration-200
                  hover:border-[#CDAFE0]
                  hover:bg-[#EFE4F8]
                  hover:text-[#75449B]
                "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================
            BOTTOM ACTION AREA
        ===================================== */}

        <div
          className="
            mt-9 flex flex-col gap-6
            border-t border-[#EEE6F4]
            pt-7
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          {/* SUPPORTING TEXT */}
          <div>
            <p
              className="
                text-[14px] font-semibold
                text-[#30213D]
              "
            >
              Interested in this opportunity?
            </p>

            <p
              className="
                mt-2 max-w-[410px]
                text-[12px] leading-6
                text-[#817389]
              "
            >
              Share your experience and application
              with our team.
            </p>
          </div>

          {/* APPLY BUTTON */}
          <button
            type="button"
            onClick={onApply}
            disabled={!onApply}
            aria-label={`Apply for ${title}`}
            className="
              group/btn inline-flex
              min-h-[52px] w-full
              shrink-0 items-center
              justify-between gap-8
              rounded-xl
              bg-[#75449B]
              px-7 py-3.5
              text-[11px] font-bold
              uppercase tracking-[0.12em]
              text-white
              shadow-[0_10px_24px_rgba(117,68,155,0.17)]
              transition-[background-color,box-shadow]
              duration-300
              hover:bg-[#623682]
              hover:shadow-[0_15px_30px_rgba(117,68,155,0.25)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#75449B]
              disabled:cursor-not-allowed
              disabled:opacity-50
              sm:w-auto
            "
          >
            <span>Apply Now</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="
                shrink-0
                transition-transform duration-300
                motion-safe:group-hover/btn:-translate-y-0.5
                motion-safe:group-hover/btn:translate-x-0.5
              "
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* BOTTOM HOVER ACCENT */}
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
  );
}
