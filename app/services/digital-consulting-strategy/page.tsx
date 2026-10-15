
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Cloud,
  Compass,
  Layers3,
  Lightbulb,
  Network,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — DIGITAL CONSULTING & STRATEGY
// ==========================================

const SERVICE_TITLE = "Digital Consulting & Strategy";

// EXISTING VERIFIED IMAGE FILES

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  strategy: "/images/backgrounds/section-1-4.jpg",
  transformation: "/images/backgrounds/section-2-2.jpg",
  connected: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ANIMATION SETTINGS

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

// ==========================================
// EDITORIAL CONTENT — PRESERVED
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Strategic Direction",
    title: "Future-proof your",
    highlight: "digital strategy.",
    image: images.strategy,
    alt: "Technology visualization for digital strategy",
    paragraphs: [
      "A successful digital strategy is more than adopting new software or moving infrastructure to the cloud. It is about understanding where your organization stands today, defining where it needs to go, and creating a realistic plan to get there.",

      "Cloudlem helps businesses examine their current technology environment, assess existing processes, and identify the opportunities that can deliver meaningful operational improvements. We consider business priorities, available resources, technical requirements, and long-term growth objectives when developing a digital roadmap.",

      "Our approach emphasizes practical recommendations, clear priorities, and technologies that align with your organization's needs. Whether you are modernizing existing systems or planning new digital capabilities, the objective is to make every technology decision purposeful.",
    ],
    points: [
      "Digital maturity and technology assessments",
      "Transformation roadmap and investment priorities",
      "Technology selection and modernization planning",
    ],
  },
  {
    number: "02",
    eyebrow: "Digital Transformation",
    title: "Turn technology into",
    highlight: "business progress.",
    image: images.transformation,
    alt: "Infrastructure and connected technology systems",
    paragraphs: [
      "Organizations often operate with disconnected applications, repetitive manual tasks, and technology that no longer supports changing business demands. Addressing these challenges requires an approach that connects business processes with the right digital solutions.",

      "We help identify opportunities to simplify workflows, improve information sharing, modernize applications, and introduce automation where it can make a practical difference. This may include reviewing existing tools, planning integrations, evaluating cloud platforms, or identifying areas where intelligent systems can support operations.",

      "By connecting digital planning with implementation, businesses can move beyond isolated technology initiatives and develop more consistent, scalable, and maintainable ways of working.",
    ],
    points: [
      "Business process review and workflow improvement",
      "Application integration and modernization planning",
      "Automation and cloud adoption opportunities",
    ],
  },
  {
    number: "03",
    eyebrow: "Connected Digital Operations",
    title: "Build systems that",
    highlight: "work together.",
    image: images.connected,
    alt: "Visual representing connected digital operations",
    paragraphs: [
      "Digital transformation becomes more valuable when technology, people, and processes work together. A disconnected technology environment can make reporting difficult, slow down collaboration, and create unnecessary operational complexity.",

      "Cloudlem supports organizations in evaluating how their systems exchange information, where important data is managed, and how different business functions can benefit from better digital coordination. We focus on identifying practical improvements rather than recommending technology for its own sake.",

      "From customer-facing applications and internal workflows to cloud services and data platforms, a connected digital approach helps create the foundation for informed decision-making and future modernization.",
    ],
    points: [
      "Connected applications and digital workflows",
      "Data visibility and information flow planning",
      "Scalable and maintainable technology architecture",
    ],
  },
];

// ==========================================
// CONSULTING CAPABILITIES — PRESERVED
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Digital Strategy & Roadmaps",
    description:
      "Develop a clear direction for digital initiatives by connecting business goals with technology opportunities. Identify priorities, dependencies, investment considerations, and practical implementation milestones.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Technology Assessments",
    description:
      "Review existing applications, infrastructure, and operational workflows to identify limitations, unnecessary complexity, and opportunities for modernization or improvement.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Cloud Transformation Planning",
    description:
      "Evaluate cloud adoption and modernization options based on workload requirements, operational needs, reliability, security considerations, and long-term maintainability.",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Business Process Optimization",
    description:
      "Examine repetitive activities and disconnected processes to identify opportunities for workflow automation, improved coordination, and more efficient day-to-day operations.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Data & Digital Integration",
    description:
      "Assess how information moves across existing business systems and explore approaches for connecting applications, improving data accessibility, and supporting better decisions.",
    icon: Network,
  },
  {
    number: "06",
    title: "Innovation & Technology Advisory",
    description:
      "Explore emerging technologies, including AI-enabled tools and intelligent automation, while evaluating their suitability, implementation complexity, and potential business value.",
    icon: Lightbulb,
  },
];

// ==========================================
// CONSULTING APPROACH — PRESERVED
// ==========================================

const approach = [
  {
    number: "01",
    title: "Discovery & Understanding",
    description:
      "We begin by understanding business objectives, existing challenges, operational requirements, and the outcomes your organization wants to achieve.",
  },
  {
    number: "02",
    title: "Technology & Process Assessment",
    description:
      "We examine the current digital environment, including systems, workflows, integrations, infrastructure, and areas that may benefit from improvement.",
  },
  {
    number: "03",
    title: "Strategy & Prioritization",
    description:
      "We organize potential initiatives into a practical roadmap, considering expected business value, complexity, dependencies, and available resources.",
  },
  {
    number: "04",
    title: "Implementation Planning",
    description:
      "We define actionable next steps, appropriate technologies, delivery phases, and considerations for successful implementation and adoption.",
  },
  {
    number: "05",
    title: "Review & Continuous Improvement",
    description:
      "We encourage regular evaluation of outcomes and changing requirements so the strategy can evolve alongside the business.",
  },
];

const audiences = [
  "Startups defining the technology foundation for new digital products or services.",
  "Growing businesses looking to improve processes and connect their digital tools.",
  "Established organizations planning application modernization or cloud adoption.",
  "Teams exploring AI, automation, and data-driven operational improvements.",
];

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function DigitalConsultingStrategyPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — REFINED HEIGHT
      =================================== */}

      <section className="relative flex min-h-[550px] items-center overflow-hidden bg-[#181818] py-28 text-[#D8D2C8] sm:min-h-[580px] lg:min-h-[640px] lg:py-32">

        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#181818]/95 via-[#181818]/85 to-[#181818]/50" />

        <div className="absolute inset-0 bg-linear-to-t from-[#181818]/60 to-transparent" />

        <div className="container-systems relative z-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[880px]"
          >

            {/* BREADCRUMB */}

            <Link
              href="/services"
              className="group mb-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:text-[#B7B09F]"
            >
              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              All Services
            </Link>

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B7B09F]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                Digital Consulting & Strategy
              </p>
            </div>

            {/* HERO TITLE */}

            <h1 className="max-w-[850px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#D8D2C8]">
              From vision

              <span className="block text-[#B7B09F]">
                to meaningful
              </span>

              transformation.
            </h1>

            {/* INTRODUCTION */}

            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.8] text-[#D8D2C8] sm:text-[17px]">
              Turn ambitious business goals into a
              practical digital strategy. Cloudlem helps
              organizations evaluate technology,
              modernize operations, and plan
              sustainable digital transformation.
            </p>

            {/* ACTION */}

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Strategy

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          INTRODUCTION — MORE COMPACT
      =================================== */}

      <section className="bg-[#D8D2C8] py-14 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                  Our Consulting Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Technology decisions

                <span className="block text-[#625C51]">
                  guided by purpose.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Effective digital transformation starts
                with a clear understanding of the
                business—not with a technology purchase.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  Organizations face constant pressure
                  to improve efficiency, respond to
                  changing customer needs, and modernize
                  existing operations. Without a clear
                  strategy, technology initiatives can
                  become disconnected, expensive, or
                  difficult to maintain.
                </p>

                <p>
                  Cloudlem approaches digital consulting
                  by connecting business objectives with
                  technical planning. We consider the
                  current environment, identify practical
                  opportunities for improvement, and
                  help define a direction that supports
                  both immediate priorities and
                  future growth.
                </p>

                <p>
                  The goal is to create clarity:
                  what should change, why it matters,
                  how implementation can be approached,
                  and which results are worth measuring.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EDITORIAL SECTIONS
          COMPACT, BALANCED IMAGE/TEXT
      =================================== */}

      {editorialSections.map((section, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            key={section.number}
            className={`py-14 text-[#181818] lg:py-18 ${
              index % 2 === 0
                ? "bg-[#B7B09F]"
                : "bg-[#D8D2C8]"
            }`}
          >
            <div className="container-systems">

              <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

                {/* TEXT */}

                <motion.div
                  {...reveal}
                  className={
                    reverse ? "lg:order-2" : ""
                  }
                >

                  {/* EYEBROW */}

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#181818]" />

                    <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                      {section.eyebrow}
                    </p>
                  </div>

                  {/* TITLE */}

                  <h2 className="max-w-[620px] text-[clamp(2.3rem,3.2vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                    {section.title}

                    <span className="block text-[#514C43]">
                      {section.highlight}
                    </span>
                  </h2>

                  <div className="mt-5 h-[2px] w-12 bg-[#181818]" />

                  {/* DETAILED CONTENT */}

                  <div className="mt-5 space-y-4">

                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                            paragraphIndex === 0
                              ? "font-medium"
                              : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* FOCUS AREAS */}

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                      Key Focus Areas
                    </p>

                    <ul className="space-y-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#181818] text-[#D8D2C8]">
                            <Check
                              size={12}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </span>

                          <span className="text-[14px] font-medium leading-6 sm:text-[15px]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* IMAGE — REDUCED HEIGHT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -18 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  className={`relative h-[300px] min-w-0 overflow-hidden bg-[#181818] sm:h-[380px] lg:h-[440px] ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ===================================
          WIDE IMAGE FEATURE — SHORTER
      =================================== */}

      <section className="relative flex min-h-[410px] items-center overflow-hidden bg-[#181818] py-18 text-[#D8D2C8] lg:min-h-[480px]">

        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#181818]/80" />

        <div className="container-systems relative z-10">

          <motion.div
            {...reveal}
            className="max-w-[830px]"
          >
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              Transforming Strategy into Action
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Make every digital

              <span className="block text-[#B7B09F]">
                decision count.
              </span>
            </h2>

            <p className="mt-6 max-w-[670px] text-[16px] leading-[1.8] text-[#D8D2C8]">
              A practical digital strategy should
              provide more than direction. It should
              help organizations understand priorities,
              reduce unnecessary complexity, plan
              modernization, and make informed
              technology investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          CONSULTING CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Areas of Focus
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Digital consulting

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From technology assessments and digital
              roadmaps to cloud planning and workflow
              improvement, these capabilities support
              different stages of an organization&apos;s
              transformation journey.
            </p>
          </motion.div>

          {/* COMPACT CARDS */}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.06,
                  }}
                  className="flex h-full flex-col border border-[#B7B09F]/30 p-6 sm:p-7"
                >

                  {/* ICON AND NUMBER */}

                  <div className="mb-6 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center border border-[#B7B09F]/45 text-[#D8D2C8]">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[11px] text-[#B7B09F]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#D8D2C8]">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-9 bg-[#B7B09F]" />

                  <p className="mt-4 text-[15px] leading-[1.75] text-[#D8D2C8]/85">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          CONSULTING APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* INTRO */}

            <motion.div {...reveal}>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  How We Approach Consulting
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                A clear path

                <span className="block text-[#625C51]">
                  from ideas to action.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                We believe digital transformation
                should be understandable, practical,
                and aligned with business priorities.
                Our approach helps turn broad
                ambitions into structured initiatives
                with clear next steps.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <BarChart3
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  The right strategy balances business
                  value, technical feasibility, and
                  long-term operational needs.
                </p>
              </div>
            </motion.div>

            {/* PROCESS STEPS */}

            <div className="border-t border-[#181818]/20">

              {approach.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[38px_1fr] gap-4 border-b border-[#181818]/20 py-5"
                >

                  <span className="pt-1 text-[12px] font-bold text-[#625C51]">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-[15px] leading-[1.75]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          WHO THIS SERVICE IS FOR
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Who We Help
              </p>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Designed for

                <span className="block text-[#514C43]">
                  changing businesses.
                </span>
              </h2>
            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Digital Consulting & Strategy can be
                valuable for organizations planning
                growth, improving existing operations,
                or evaluating new technology.
              </p>

              <div className="mt-5 space-y-3">

                {audiences.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-[#181818]/20 pb-3"
                  >
                    <Check
                      size={19}
                      className="mt-1 shrink-0"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <p className="text-[15px] leading-[1.75]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          FINAL CTA
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to shape your

                <span className="block text-[#625C51]">
                  digital future?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your organization,
                existing technology challenges,
                and digital goals. We can discuss
                your requirements and explore
                appropriate next steps.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          EXISTING SUPABASE INQUIRY MODAL
      =================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
