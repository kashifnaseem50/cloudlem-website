
import Link from "next/link";

import {
  ArrowRight,
  Network,
  Workflow,
  MonitorSmartphone,
  ReceiptText,
} from "lucide-react";

// ==========================================
// CLOUDLEM — WHAT WE SOLVE
// ==========================================

const problems = [
  {
    number: "01",
    title: "Unreliable Infrastructure",
    description:
      "Reduce downtime and improve performance with cloud environments designed around how your business operates.",
    icon: Network,
  },
  {
    number: "02",
    title: "Repetitive Manual Work",
    description:
      "Replace slow, error-prone tasks with practical automations that give your team time back.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Outdated Websites",
    description:
      "Build a faster, clearer web presence that supports customers and grows with the business.",
    icon: MonitorSmartphone,
  },
  {
    number: "04",
    title: "Unclear Financial Records",
    description:
      "Keep reconciliations, records, and reporting organized so decisions are based on current information.",
    icon: ReceiptText,
  },
];

const WhatWeSolve = () => {
  return (
    <section
      aria-labelledby="what-we-solve-heading"
      className="relative overflow-hidden bg-[#1F1F1F] py-14 text-[#F3F1EC] lg:py-[68px]"
    >
      <div className="container-systems relative z-10">

        {/* ===================================
            SECTION HEADING
        =================================== */}

        <div className="mb-9 grid gap-7 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-14">

          {/* LEFT HEADING */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span
                className="h-px w-9 bg-[#C97A4A]"
                aria-hidden="true"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D9D0C4]">
                Real Challenges. Practical Solutions.
              </p>

            </div>

            <h2
              id="what-we-solve-heading"
              className="text-[clamp(2.2rem,3.6vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#F3F1EC]"
            >
              What We Solve
            </h2>

            <div
              className="mt-5 h-[2px] w-85 bg-[#C97A4A]/80"
              aria-hidden="true"
            />

          </div>

          {/* RIGHT INTRODUCTION */}

          <div className="max-w-[550px] lg:justify-self-end">

            <p className="text-[15px] leading-[1.85] text-[#D9D3C9] sm:text-[16px]">
              We help businesses overcome operational,
              technical, and financial challenges
              with tailored, scalable solutions.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex min-h-9 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#F3F1EC] transition-colors duration-200 hover:text-[#E7B28E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3F1EC]"
            >
              View All Services

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>

        {/* ===================================
            PROBLEM CARDS
        =================================== */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {problems.map(
            ({ number, title, description, icon: Icon }) => (
              <article
                key={title}
                className="group relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-[4px] border border-white/[0.10] bg-[#171717] p-6 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:border-[#C97A4A]/40 hover:bg-[#1C1C1C] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] motion-safe:hover:-translate-y-1 sm:p-7 xl:min-h-[265px] xl:p-6 2xl:p-7"
              >

                {/* CARD TOP ROW */}

                <div className="mb-7 flex items-start justify-between gap-4">

                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-[#D9D0C4]/20 bg-[#D9D0C4]/[0.05] text-[#E8DFD2] transition-colors duration-300 group-hover:border-[#C97A4A]/45 group-hover:text-[#E7B28E]">

                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />

                  </div>

                  {/* CARD NUMBER */}

                  <span className="pt-1 text-[11px] font-semibold tracking-[0.12em] text-[#B7B09F]">
                    {number}
                  </span>

                </div>

                {/* CARD TITLE */}

                <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#F3F1EC] xl:text-[18px] 2xl:text-[19px]">
                  {title}
                </h3>

                {/* SUBTLE ACCENT LINE */}

                <div
                  className="mt-4 h-px w-50 bg-[#C97A4A]/80 transition-[width] duration-500 group-hover:w-0"
                  aria-hidden="true"
                />

                {/* CARD DESCRIPTION */}

                <p className="mt-4 text-[15px] leading-[1.75] text-[#C9C3BA]">
                  {description}
                </p>

                {/* CARD BOTTOM DETAIL */}

                <div
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#C97A4A]/80 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />

              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default WhatWeSolve;
