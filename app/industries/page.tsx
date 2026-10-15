
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

// ==========================================
// CLOUDLEM INDUSTRY DATA
// ==========================================

type Industry = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  priorities: string[];
  capabilities: string[];
};

const industries: Industry[] = [
  {
    id: "healthcare",
    number: "01",
    title: "Healthcare",
    shortDescription:
      "Digital systems, operational efficiency, and reliable technology infrastructure.",
    description:
      "Healthcare organizations depend on dependable technology and efficient processes. Cloudlem can help plan and develop digital platforms, cloud infrastructure, and automation workflows tailored to healthcare operations, with appropriate attention to data protection and system reliability.",
    icon: HeartPulse,
    priorities: [
      "Reliable digital platforms",
      "Administrative workflow automation",
      "Secure cloud architecture planning",
    ],
    capabilities: [
      "Cloud & DevOps",
      "Web Development",
      "AI & Automation",
    ],
  },
  {
    id: "education",
    number: "02",
    title: "Education",
    shortDescription:
      "Modern learning platforms, digital operations, and technology-enabled education.",
    description:
      "Educational institutions and training providers need accessible digital systems and efficient administration. We can support the development of learning platforms, cloud environments, and automated processes that simplify everyday operations.",
    icon: GraduationCap,
    priorities: [
      "Learning and training platforms",
      "Administrative process automation",
      "Scalable digital infrastructure",
    ],
    capabilities: [
      "Web Development",
      "Cloud & DevOps",
      "AI & Automation",
    ],
  },
  {
    id: "retail",
    number: "03",
    title: "Retail & E-commerce",
    shortDescription:
      "Digital commerce, connected workflows, and efficient business operations.",
    description:
      "Retail businesses need effective online experiences and connected operational systems. Cloudlem can help design digital storefronts, streamline repetitive workflows, and build supporting infrastructure for evolving commerce requirements.",
    icon: ShoppingBag,
    priorities: [
      "E-commerce websites and applications",
      "Order and inventory workflow automation",
      "Digital customer experiences",
    ],
    capabilities: [
      "Web Development",
      "AI & Automation",
      "Business Growth",
    ],
  },
  {
    id: "professional-services",
    number: "04",
    title: "Professional Services",
    shortDescription:
      "Streamlined client operations, financial workflows, and practical automation.",
    description:
      "Professional service providers rely on efficient client communication, reporting, and operational processes. We can help modernize internal workflows, organize financial operations, and develop digital solutions that support day-to-day business activities.",
    icon: BriefcaseBusiness,
    priorities: [
      "Client onboarding and workflow automation",
      "Bookkeeping and financial reporting",
      "Business websites and digital systems",
    ],
    capabilities: [
      "Bookkeeping & Accounting",
      "Business Growth",
      "AI & Automation",
    ],
  },
];

// ==========================================
// SHARED ANIMATION
// ==========================================

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

// ==========================================
// INDUSTRY DETAIL BLOCK
// ==========================================

function IndustryDetail({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const Icon = industry.icon;
  const alternate = index % 2 === 1;

  return (
    <section
      id={industry.id}
      className={`scroll-mt-24 border-t border-[#181818]/10 py-16 text-[#181818] lg:py-24 ${
        alternate
          ? "bg-[#B7B09F]"
          : "bg-[#D8D2C8]"
      }`}
    >
      <div className="container-systems">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ===================================
              INDUSTRY INFORMATION
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -22,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={revealTransition}
          >
            {/* Icon and number */}

            <div className="mb-9 flex items-center justify-between gap-4">
              <div className="flex h-16 w-16 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                <Icon
                  size={27}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <span className="text-[12px] font-bold tracking-[0.14em] text-[#181818]/70">
                {industry.number} / 04
              </span>
            </div>

            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#181818]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                Industry Solutions
              </p>
            </div>

            {/* Title */}

            <h2 className="max-w-[540px] text-[36px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#181818] sm:text-[46px] lg:text-[49px]">
              {industry.title}
              <span className="text-[#686154]">.</span>
            </h2>

            <div className="mt-7 h-[2px] w-12 bg-[#181818]" />

            {/* Description */}

            <p className="mt-7 max-w-[525px] text-[13.5px] leading-8 text-[#181818]/80">
              {industry.description}
            </p>

            {/* Contact CTA */}

            <motion.div
              whileHover={{ y: -2 }}
              className="mt-9 inline-block"
            >
              <Link
                href={`/contact?industry=${industry.id}`}
                className="group inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Requirements

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* ===================================
              CAPABILITIES PANEL
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 22,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={revealTransition}
            className="min-w-0"
          >
            <div
              className={`border border-[#181818]/20 p-7 sm:p-9 lg:p-10 ${
                alternate
                  ? "bg-[#D8D2C8]"
                  : "bg-[#B7B09F]"
              }`}
            >
              {/* Panel heading */}

              <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#181818]/20 pb-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.035em] text-[#181818] sm:text-[22px]">
                  Areas We Can Help With
                </h3>

                <span className="text-[11px] font-bold text-[#181818]/65">
                  {industry.number}
                </span>
              </div>

              {/* Priority list */}

              <ul className="space-y-6">
                {industry.priorities.map((priority) => (
                  <li
                    key={priority}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                      <Check
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-[13px] font-medium leading-7 text-[#181818]/90">
                      {priority}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Relevant services */}

              <div className="mt-10 border-t border-[#181818]/20 pt-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-[#181818]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]/80">
                    Relevant Cloudlem Services
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {industry.capabilities.map(
                    (capability) => (
                      <span
                        key={capability}
                        className="border border-[#181818]/25 bg-[#181818]/[0.045] px-3 py-2 text-[11px] font-medium text-[#181818]"
                      >
                        {capability}
                      </span>
                    )
                  )}
                </div>

                {/* Explore services link */}

                <Link
                  href="/services"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-[#181818]/40 pb-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#181818] transition-colors hover:border-[#181818]"
                >
                  Explore All Services

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN INDUSTRIES PAGE
// ==========================================

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* Hero title */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={revealTransition}
            >
              <div className="mb-6 flex items-center gap-4">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18,
                  }}
                  className="h-px bg-[#B7B09F]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B7B09F]">
                  Industries We Support
                </p>
              </div>

              <h1 className="max-w-[780px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                Technology for

                <span className="block text-[#B7B09F]">
                  Your Industry.
                </span>
              </h1>
            </motion.div>

            {/* Hero description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...revealTransition,
                delay: 0.12,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-[460px] text-[14px] leading-8 text-[#D8D2C8]/80">
                Every industry has its own challenges.
                We bring together engineering,
                automation, digital development, and
                business expertise to explore solutions
                built around your operational needs.
              </p>

              <a
                href="#industry-overview"
                className="group mt-8 inline-flex min-h-12 items-center gap-6 border border-[#B7B09F]/70 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#D8D2C8] transition-colors hover:bg-[#B7B09F] hover:text-[#181818]"
              >
                Explore Industries

                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Background typography */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[7rem] font-semibold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[10rem] lg:text-[14rem]">
            INDUSTRIES
          </p>
        </div>
      </section>

      {/* ===================================
          OVERVIEW — STONE BEIGE
      =================================== */}

      <section
        id="industry-overview"
        className="scroll-mt-24 bg-[#B7B09F] py-16 text-[#181818] lg:py-24"
      >
        <div className="container-systems">

          {/* Overview heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/80">
                  Our Industry Focus
                </p>
              </div>

              <h2 className="max-w-[570px] text-[32px] font-semibold leading-[1.08] tracking-[-0.055em] text-[#181818] sm:text-[43px]">
                Different challenges.

                <span className="block">
                  Thoughtful solutions.
                </span>
              </h2>
            </div>

            <p className="max-w-[490px] text-[13px] leading-8 text-[#181818]/80 lg:justify-self-end">
              Explore areas where Cloudlem&apos;s
              technology and business capabilities
              can support organizations with
              practical digital improvements.
            </p>
          </motion.div>

          {/* ===================================
              INDUSTRY NAVIGATION CARDS
          =================================== */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="h-full"
                >
                  <a
                    href={`#${industry.id}`}
                    className="group flex h-full flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 text-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#181818]/60 hover:shadow-[0_15px_35px_rgba(24,24,24,0.10)]"
                  >
                    {/* Card icon and number */}

                    <div className="mb-9 flex items-start justify-between gap-3">
                      <div className="flex h-13 w-13 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                        <Icon
                          size={23}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="text-[11px] font-bold text-[#181818]/65">
                        {industry.number}
                      </span>
                    </div>

                    {/* Card title */}

                    <h3 className="text-[21px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#181818]">
                      {industry.title}
                    </h3>

                    <div className="mt-5 h-[2px] w-9 bg-[#181818]" />

                    {/* Card description */}

                    <p className="mt-5 grow text-[12px] leading-7 text-[#181818]/75">
                      {industry.shortDescription}
                    </p>

                    {/* Card footer */}

                    <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#181818]/20 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#181818]">
                        Explore Industry
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-[#181818] transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          INDIVIDUAL INDUSTRY SECTIONS
      =================================== */}

      {industries.map((industry, index) => (
        <IndustryDetail
          key={industry.id}
          industry={industry}
          index={index}
        />
      ))}

      {/* ===================================
          FINAL CTA — CHARCOAL
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B7B09F]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                  Work With Cloudlem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#D8D2C8] sm:text-[46px]">
                Every business is different.

                <span className="mt-2 block text-[#B7B09F]">
                  Let&apos;s discuss yours.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[365px] text-[13px] leading-7 text-[#D8D2C8]/75">
                Don&apos;t see your industry listed?
                Tell us about your requirements.
                We&apos;ll explore whether our
                capabilities are a good fit.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
              >
                Contact Cloudlem

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
