
"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ==========================================
// CLOUDLEM SERVICE CARD PROPERTIES
// ==========================================

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;

  // Retained for compatibility with
  // existing parent components.
  gradient: string;

  onLearnMore: (serviceTitle: string) => void;
}

// ==========================================
// EXISTING SERVICE STATISTICS
// ==========================================

const stats = {
  "AI & Machine Learning": "40% efficiency gain",
  "Web Development": "3x faster load times",
  DevOps: "99.9% uptime",
  "Graphic Design & Brand Promotion": "2x engagement",
  "Business Development": "5x ROI potential",
};

// ==========================================
// CLOUDLEM SERVICE CARD
// Warm Cream / Stone Beige / Charcoal
// ==========================================

export default function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  onLearnMore,
}: ServiceCardProps) {
  const stat =
    stats[title as keyof typeof stats] ||
    "Enterprise-grade";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-[#181818]/20 bg-[#B7B09F] text-[#181818] transition-[border-color,box-shadow] duration-300 hover:border-[#181818]/60 hover:shadow-[0_20px_45px_rgba(24,24,24,0.12)]"
    >

      {/* ===================================
          TOP ACCENT
      =================================== */}

      <div className="h-[3px] w-full bg-[#181818]" />

      <div className="relative z-10 flex grow flex-col p-7 sm:p-8">

        {/* ===================================
            SERVICE ICON
        =================================== */}

        <div className="mb-8 flex items-start justify-between gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8] transition-colors duration-300 group-hover:bg-[#33312D]">
            <Icon
              size={25}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </div>

          <span className="pt-2 text-right text-[9px] font-bold uppercase tracking-[0.17em] text-[#181818]/70">
            Cloudlem
            <span className="block">
              Services
            </span>
          </span>
        </div>

        {/* ===================================
            SERVICE TITLE
        =================================== */}

        <h3 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#181818] sm:text-[28px]">
          {title}
        </h3>

        {/* ===================================
            EXISTING SERVICE STAT
        =================================== */}

        <div className="mt-5 flex flex-wrap items-center gap-3">

          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#181818]/30 bg-[#D8D2C8] text-[#181818]">
            <Zap
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </span>

          <span className="text-[11px] font-semibold tracking-[0.02em] text-[#181818]/80">
            {stat}
          </span>
        </div>

        {/* DECORATIVE DIVIDER */}

        <div className="mt-7 h-[2px] w-11 bg-[#181818]" />

        {/* ===================================
            SERVICE DESCRIPTION
        =================================== */}

        <p className="mt-6 text-[13px] leading-8 text-[#181818]/85">
          {description}
        </p>

        {/* ===================================
            SERVICE FEATURES
        =================================== */}

        <div className="mt-8 grow border-t border-[#181818]/20 pt-7">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-[#181818]" />

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

                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-[#181818]/40 bg-[#D8D2C8] text-[#181818]">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                {/* FEATURE NAME */}

                <span className="text-[12px] font-medium leading-7 text-[#181818]/85">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===================================
            LEARN MORE BUTTON
        =================================== */}

        <div className="mt-auto pt-9">

          <button
            type="button"
            onClick={() => onLearnMore(title)}
            className="group/btn inline-flex min-h-12 w-full items-center justify-between gap-5 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors duration-200 hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
          >
            Learn More

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* ===================================
          DECORATIVE BOTTOM HOVER LINE
      =================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#181818] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
