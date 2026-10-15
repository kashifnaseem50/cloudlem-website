
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Digital Consulting & Strategy";

// ORIGINAL IMAGE ASSETS PRESERVED

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  strategy: "/images/backgrounds/section-1-4.jpg",
  transformation: "/images/backgrounds/section-2-2.jpg",
  connected: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ==========================================
// ORIGINAL EDITORIAL CONTENT
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
// CONSULTING CAPABILITIES
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
// CONSULTING DELIVERY APPROACH
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
// REUSABLE ANIMATED REVEAL
// Respects reduced-motion preferences
// ==========================================

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: direction === "up" ? 22 : 0,
              x:
                direction === "left"
                  ? -22
                  : direction === "right"
                    ? 22
                    : 0,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.68,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// REUSABLE SECTION EYEBROW
// ==========================================

function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-[#A477C0]"
      />

      <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#80519F]">
        {children}
      </p>
    </div>
  );
}

// ==========================================
// MAIN DIGITAL CONSULTING PAGE
// ==========================================

export default function DigitalConsultingStrategyPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — BRIGHT EDITORIAL HERO
      ====================================== */}

      <section
        aria-labelledby="consulting-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        {/* AMBIENT LAVENDER LIGHTING */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#DDC9ED]/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">

          {/* HERO TEXT */}

          <Reveal className="min-w-0">

            {/* BREADCRUMB */}

            <Link
              href="/services"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 rounded-sm text-[11px] font-bold uppercase tracking-[0.14em] text-[#80519F] transition-colors hover:text-[#4B2B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80519F]"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-x-1"
              />

              All Services
            </Link>

            <Eyebrow>
              Digital Consulting &amp; Strategy
            </Eyebrow>

            {/* HERO HEADING */}

            <h1
              id="consulting-title"
              className="max-w-[760px] text-[clamp(2.45rem,3.8vw,4.3rem)] font-semibold leading-[1.17] tracking-[-0.035em] text-[#291D34]"
            >
              From vision

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                to meaningful
              </span>

              transformation.
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[640px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Turn ambitious business goals into a
              practical digital strategy. Cloudlem helps
              organizations evaluate technology,
              modernize operations, and plan sustainable
              digital transformation.
            </p>

            {/* ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Strategy

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#capabilities"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-[border-color,background-color] duration-300 hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Explore Capabilities

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>

            </div>

          </Reveal>

          {/* HERO IMAGE */}

          <Reveal
            className="relative min-w-0 lg:pl-4"
            direction="right"
            delay={0.12}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[36px] bg-[#DCC5EC]/35 blur-2xl"
            />

            <div className="group relative h-[360px] overflow-hidden rounded-[22px] border-[6px] border-white bg-[#E9DEF1] shadow-[0_30px_70px_rgba(75,40,98,0.16)] sm:h-[465px] lg:h-[555px]">

              <Image
                src={images.hero}
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover transition-transform duration-1000 motion-safe:group-hover:scale-[1.04]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#251531]/55 via-transparent to-transparent"
              />

              {/* IMAGE OVERLAY CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Digital Consulting
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Business goals. Technology direction.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — CONSULTING PERSPECTIVE
      ====================================== */}

      <section
        aria-labelledby="consulting-intro"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Consulting Perspective
            </Eyebrow>

            <h2
              id="consulting-intro"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Technology decisions

              <span className="block text-[#8B58AC]">
                guided by purpose.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Effective digital transformation starts
              with a clear understanding of the
              business—not with a technology purchase.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Organizations face constant pressure to
                improve efficiency, respond to changing
                customer needs, and modernize existing
                operations. Without a clear strategy,
                technology initiatives can become
                disconnected, expensive, or difficult
                to maintain.
              </p>

              <p>
                Cloudlem approaches digital consulting by
                connecting business objectives with
                technical planning. We consider the
                current environment, identify practical
                opportunities for improvement, and help
                define a direction that supports both
                immediate priorities and future growth.
              </p>

              <p>
                The goal is to create clarity: what should
                change, why it matters, how implementation
                can be approached, and which results are
                worth measuring.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — CONSULTING EDITORIAL SECTIONS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`consulting-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* TEXT COLUMN */}

              <Reveal
                className={`min-w-0 ${
                  reversed ? "lg:order-2" : ""
                }`}
                direction={reversed ? "right" : "left"}
              >

                <div className="mb-5 flex items-center gap-4">

                  <span className="text-[13px] font-bold tabular-nums text-[#AD86C6]">
                    {section.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[#AA80C4]"
                  />

                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8552A6]">
                    {section.eyebrow}
                  </p>

                </div>

                {/* EDITORIAL HEADING */}

                <h2
                  id={`consulting-pillar-${section.number}`}
                  className="max-w-[630px] text-[clamp(2.25rem,3.2vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.05em] text-[#2C2037]"
                >
                  {section.title}

                  <span className="block text-[#8A55AA]">
                    {section.highlight}
                  </span>
                </h2>

                <div
                  aria-hidden="true"
                  className="mt-6 h-1 w-12 rounded-full bg-[#A879C5]"
                />

                {/* ORIGINAL DESCRIPTION */}

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={
                          paragraphIndex === 0
                            ? "font-medium text-[#43354D]"
                            : ""
                        }
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                </div>

                {/* FOCUS AREAS */}

                <div className="mt-7 rounded-[15px] border border-[#E7DCEF] bg-white/80 p-5 shadow-[0_9px_28px_rgba(83,48,112,0.035)] sm:p-6">

                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8150A0]">
                    Key Focus Areas
                  </p>

                  <ul className="space-y-3">

                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3"
                      >

                        <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F0E3F7] text-[#7B479D]">

                          <Check
                            size={13}
                            strokeWidth={2.3}
                            aria-hidden="true"
                          />

                        </span>

                        <span className="text-[14px] font-medium leading-6 text-[#4E405B]">
                          {point}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>

              </Reveal>

              {/* IMAGE COLUMN */}

              <Reveal
                className={`min-w-0 ${
                  reversed ? "lg:order-1" : ""
                }`}
                direction={reversed ? "left" : "right"}
                delay={0.08}
              >

                <div className="group relative h-[340px] overflow-hidden rounded-[20px] bg-[#E5DAED] shadow-[0_20px_55px_rgba(60,28,87,0.12)] sm:h-[450px] lg:h-[550px]">

                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover transition-transform duration-1000 motion-safe:group-hover:scale-[1.045]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21142D]/35 via-transparent to-transparent"
                  />

                  {/* IMAGE CATEGORY LABEL */}

                  <div className="absolute bottom-6 left-6 right-6 flex w-fit max-w-[calc(100%-3rem)] items-center gap-3 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#653D82] backdrop-blur-md">

                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#A572C3]" />

                    <span>{section.eyebrow}</span>

                  </div>

                </div>

              </Reveal>

            </div>
          </section>
        );
      })}

      {/* ======================================
          06 — IMMERSIVE STRATEGY FEATURE
      ====================================== */}

      <section
        aria-labelledby="consulting-feature"
        className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#352142] py-24 text-white lg:min-h-[540px]"
      >

        {/* BACKGROUND IMAGE */}

        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover"
        />

        {/* PURPLE OVERLAY */}

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(37,21,52,0.94)_0%,rgba(46,27,62,0.80)_56%,rgba(65,40,77,0.45)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_30%,rgba(217,181,237,0.18),transparent_60%)]"
        />

        <div className="container-systems relative z-20">

          <Reveal className="max-w-[870px]">

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              Transforming Strategy into Action
            </p>

            <h2
              id="consulting-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Make every digital

              <span className="block text-[#DDB8F1]">
                decision count.
              </span>

            </h2>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              A practical digital strategy should
              provide more than direction. It should
              help organizations understand priorities,
              reduce unnecessary complexity, plan
              modernization, and make informed
              technology investments.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — CONSULTING CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="consulting-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          {/* HEADER */}

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Our Areas of Focus
              </Eyebrow>

              <h2
                id="consulting-capabilities"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Digital consulting

                <span className="block text-[#8855A9]">
                  capabilities.
                </span>

              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70] lg:justify-self-end">
                From technology assessments and digital
                roadmaps to cloud planning and workflow
                improvement, these capabilities support
                different stages of an organization&apos;s
                transformation journey.
              </p>

            </Reveal>

          </div>

          {/* CAPABILITY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.07}
                  className="h-full"
                >

                  <article className="group flex h-full min-h-[300px] flex-col rounded-[17px] border border-[#E9DDF1] bg-white p-6 shadow-[0_10px_28px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D3B8E4] hover:shadow-[0_20px_46px_rgba(70,34,99,0.105)] motion-safe:hover:-translate-y-1.5 sm:p-7">

                    <div className="mb-7 flex items-start justify-between">

                      {/* ICON */}

                      <span className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-[#E6D5F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EEDDF7] motion-safe:group-hover:scale-105">

                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <div
                      aria-hidden="true"
                      className="mt-4 h-0.5 w-10 rounded-full bg-[#B489CD]"
                    />

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {item.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          08 — CONSULTING DELIVERY APPROACH
      ====================================== */}

      <section
        aria-labelledby="consulting-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* APPROACH INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              How We Approach Consulting
            </Eyebrow>

            <h2
              id="consulting-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              A clear path

              <span className="block text-[#8B57AB]">
                from ideas to action.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              We believe digital transformation should
              be understandable, practical, and aligned
              with business priorities. Our approach
              helps turn broad ambitions into structured
              initiatives with clear next steps.
            </p>

            {/* SUPPORTING HIGHLIGHT */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <BarChart3
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                The right strategy balances business
                value, technical feasibility, and
                long-term operational needs.
              </p>

            </div>

          </Reveal>

          {/* PROCESS TIMELINE */}

          <ol className="relative space-y-0 border-l border-[#E6D8EF] pl-7 sm:pl-9">

            {approach.map((step, index) => (

              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >

                {/* TIMELINE INDICATOR */}

                <span
                  aria-hidden="true"
                  className="absolute -left-[39px] top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[5px] border-white bg-[#A56EC3] shadow-[0_0_0_1px_#DDC8EA] sm:-left-[47px]"
                />

                <Reveal delay={(index % 3) * 0.04}>

                  <div className="rounded-[14px] border border-[#ECE2F2] bg-[#FBF9FD] p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#F7F0FC] motion-safe:hover:translate-x-1 sm:p-6">

                    <div className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#9867B7]">
                      STEP {step.number}
                    </div>

                    <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#32223E] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {step.description}
                    </p>

                  </div>

                </Reveal>

              </li>

            ))}

          </ol>

        </div>
      </section>

      {/* ======================================
          09 — WHO WE HELP
      ====================================== */}

      <section
        aria-labelledby="consulting-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          {/* AUDIENCE INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="consulting-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Designed for

              <span className="block text-[#8B57AB]">
                changing businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Digital Consulting &amp; Strategy can be
              valuable for organizations planning growth,
              improving existing operations, or evaluating
              new technology.
            </p>

          </Reveal>

          {/* AUDIENCE CARDS */}

          <div className="grid gap-4 sm:grid-cols-2">

            {audiences.map((item, index) => (

              <Reveal
                key={item}
                delay={(index % 2) * 0.08}
                className="h-full"
              >

                <div className="group flex h-full min-h-[168px] flex-col rounded-[15px] border border-[#E8DCF0] bg-white p-6 shadow-[0_8px_22px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#CBA9DF] hover:shadow-[0_16px_36px_rgba(70,34,99,0.08)] motion-safe:hover:-translate-y-1">

                  <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#EFE3F7] text-[#8251A0]">

                    <Check
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                  </span>

                  <p className="text-[15px] font-medium leading-[1.7] text-[#44374F]">
                    {item}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>
      </section>

      {/* ======================================
          10 — FINAL CONSULTING CTA
      ====================================== */}

      <section
        aria-labelledby="consulting-cta"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#553173_0%,#76459C_52%,#9668B5_100%)] py-20 text-white sm:py-24 lg:py-28"
      >

        {/* DECORATIVE ELEMENTS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[470px] w-[470px] rounded-full border border-white/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-[350px] w-[350px] rounded-full border border-white/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-60 w-96 rounded-full bg-[#CFA7EA]/15 blur-[90px]"
        />

        <div className="container-systems relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* HEADING */}

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="consulting-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to shape your

              <span className="block text-[#F0D9FA]">
                digital future?
              </span>
            </h2>

          </Reveal>

          {/* INQUIRY BUTTON */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your organization, existing
              technology challenges, and digital goals.
              We can discuss your requirements and
              explore appropriate next steps.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Project

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              />
            </button>

          </Reveal>

        </div>

      </section>

      {/* ======================================
          ORIGINAL SERVICE INQUIRY MODAL
          PRESERVED
      ====================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
