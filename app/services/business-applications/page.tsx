
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  AppWindow,
  Cloud,
  Database,
  GitMerge,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — BUSINESS APPLICATIONS
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Business Applications";

// EXISTING CLOUDLEM IMAGE ASSETS

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  applications: "/images/backgrounds/section-1-3.jpg",
  integration: "/images/backgrounds/section-3-1.jpg",
  modernization: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
};

// ==========================================
// EDITORIAL CONTENT — PRESERVED
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Custom Business Applications",
    title: "Build applications",
    highlight: "around the way you work.",
    image: images.applications,
    alt: "Digital technology representing business applications",
    paragraphs: [
      "Every organization has its own workflows, operational requirements, and business challenges. Standard software products may support common activities, but they do not always fit the specific processes that make a business work.",
      "Custom business applications provide an opportunity to organize information, simplify tasks, and connect essential operations through software designed around real user needs. From internal dashboards and administrative portals to customer-facing applications, an effective solution should make work easier rather than introduce additional complexity.",
      "Cloudlem approaches application development by understanding business requirements before choosing technologies. We consider users, data structures, access controls, integrations, performance, and long-term maintenance to create a practical foundation for digital operations.",
    ],
    points: [
      "Custom web applications and internal portals",
      "Business management dashboards and tools",
      "Role-based workflows and user experiences",
    ],
  },
  {
    number: "02",
    eyebrow: "Application Integration",
    title: "Connect your systems",
    highlight: "and simplify operations.",
    image: images.integration,
    alt: "Connected infrastructure representing application integration",
    paragraphs: [
      "Organizations frequently depend on multiple applications to manage customers, finances, projects, inventory, communication, and reporting. When these systems operate independently, employees may spend valuable time moving information manually between platforms.",
      "Application integration allows different tools to exchange relevant information through APIs, supported connectors, and carefully designed workflows. This can reduce duplicate data entry, improve consistency, and help teams access information when they need it.",
      "We help businesses evaluate existing software environments and identify suitable integration approaches. Our planning considers data consistency, error handling, security, reliability, and the operational requirements of each connected system.",
    ],
    points: [
      "API development and third-party integrations",
      "Cross-application workflow coordination",
      "Data synchronization and process automation",
    ],
  },
  {
    number: "03",
    eyebrow: "Application Modernization",
    title: "Modernize software",
    highlight: "for changing business needs.",
    image: images.modernization,
    alt: "Cloud infrastructure representing application modernization",
    paragraphs: [
      "Business applications need to evolve as organizations grow and operational demands change. Older systems may become difficult to maintain, integrate, or adapt, particularly when they rely on outdated technologies or processes that were designed for a different stage of the business.",
      "Application modernization can involve improving existing functionality, updating interfaces, restructuring software components, strengthening deployment practices, or evaluating cloud-based architecture. The appropriate approach depends on the condition of the existing system and the value of the proposed changes.",
      "Cloudlem focuses on practical modernization planning that considers continuity, security, maintainability, and technical feasibility. Rather than replacing systems unnecessarily, we evaluate where targeted improvements or a more substantial redesign may deliver better long-term value.",
    ],
    points: [
      "Existing application assessments",
      "Modern web interfaces and application architecture",
      "Cloud readiness and deployment improvements",
    ],
  },
];

// ==========================================
// BUSINESS APPLICATION CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Custom Application Development",
    description:
      "Design and develop applications around defined business requirements, with maintainable architecture, appropriate functionality, and interfaces that support everyday users.",
    icon: AppWindow,
  },
  {
    number: "02",
    title: "Business Portals & Dashboards",
    description:
      "Create centralized interfaces for operational information, administrative tasks, reporting, and relevant workflows, tailored to different user roles and responsibilities.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "API & System Integration",
    description:
      "Plan and develop integrations between compatible business applications, external services, and data sources using appropriate APIs and secure communication practices.",
    icon: GitMerge,
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Identify repetitive processes and explore application-based automation that can simplify approvals, notifications, record updates, and operational coordination.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Data & Reporting Applications",
    description:
      "Develop practical interfaces for organizing, retrieving, and presenting business information while considering data quality, access permissions, and reporting requirements.",
    icon: Database,
  },
  {
    number: "06",
    title: "Cloud Application Modernization",
    description:
      "Evaluate opportunities to improve application deployment, reliability, scalability, and maintainability through appropriate cloud architecture and engineering practices.",
    icon: Cloud,
  },
];

// ==========================================
// APPLICATION DELIVERY APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business Requirements Discovery",
    description:
      "We learn how the organization operates, who will use the application, which processes need support, and what outcomes the software should help achieve.",
  },
  {
    number: "02",
    title: "Solution Architecture & Planning",
    description:
      "We define the proposed functionality, data requirements, user roles, integration needs, and technical approach before implementation begins.",
  },
  {
    number: "03",
    title: "Application Design & Development",
    description:
      "We develop user interfaces and application functionality in manageable stages, with attention to maintainability, accessibility, and business requirements.",
  },
  {
    number: "04",
    title: "Testing & Integration",
    description:
      "We review important functionality, data handling, user permissions, integration behavior, and expected workflows before preparing the application for use.",
  },
  {
    number: "05",
    title: "Deployment & Continuous Improvement",
    description:
      "We plan appropriate deployment steps and help identify opportunities to improve application functionality and performance as business requirements evolve.",
  },
];

// ==========================================
// RELEVANT ORGANIZATIONS
// ==========================================

const audiences = [
  "Businesses replacing manual spreadsheets and disconnected administrative processes.",
  "Growing organizations that need internal management portals or operational dashboards.",
  "Teams integrating customer, financial, project, or inventory applications.",
  "Organizations planning improvements to legacy software and existing business systems.",
];

// ==========================================
// REUSABLE ANIMATED REVEAL
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
        duration: reducedMotion ? 0 : 0.65,
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

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#80519F]">
        {children}
      </p>
    </div>
  );
}

// ==========================================
// SHARED CARD STYLES
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN BUSINESS APPLICATIONS PAGE
// ==========================================

export default function BusinessApplicationsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="business-applications-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        {/* AMBIENT BACKGROUND */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#DDC9ED]/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">

          {/* HERO COPY */}

          <Reveal className="min-w-0">

            <Link
              href="/services"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#80519F] transition-colors hover:text-[#4B2B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80519F]"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-x-1"
              />
              All Services
            </Link>

            <Eyebrow>
              Digital / Business Applications
            </Eyebrow>

            <h1
              id="business-applications-title"
              className="max-w-[740px] text-[clamp(2.8rem,5.2vw,5.4rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Smarter software

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                for better
              </span>

              business.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Transform daily business operations with
              applications designed around your organization.
              Connect workflows, simplify information
              management, and build software that supports
              productivity and long-term growth.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Application

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
            direction="right"
            delay={0.12}
            className="relative min-w-0 lg:pl-4"
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

              {/* FLOATING INFORMATION CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Business Applications
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Built for the way you work.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — APPLICATION INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="applications-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Application Perspective
            </Eyebrow>

            <h2
              id="applications-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Software built

              <span className="block text-[#8B58AC]">
                for real operations.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Business applications should make everyday
              work more organized, efficient, and manageable.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Modern businesses depend on software to
                manage essential activities, coordinate
                teams, serve customers, and make decisions.
                However, when applications are disconnected
                or difficult to use, technology can become
                a source of operational complexity rather
                than improvement.
              </p>

              <p>
                An effective business application brings
                together relevant information, clear
                workflows, and practical tools that support
                how employees actually work. The solution
                should reflect operational requirements
                instead of forcing every process into
                a rigid software structure.
              </p>

              <p>
                Cloudlem combines application development,
                cloud engineering, integrations, and
                automation planning to help organizations
                build and modernize digital systems that
                serve a clear business purpose.
              </p>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — EDITORIAL SERVICE SECTIONS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`application-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >

            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL TEXT */}

              <Reveal
                direction={reversed ? "right" : "left"}
                className={`min-w-0 ${
                  reversed ? "lg:order-2" : ""
                }`}
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

                <h2
                  id={`application-pillar-${section.number}`}
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

                {/* ORIGINAL DETAILED CONTENT */}

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

                {/* FOCUS AREA CARD */}

                <div className="mt-7 rounded-[15px] border border-[#E7DCEF] bg-white/85 p-5 shadow-[0_9px_28px_rgba(83,48,112,0.035)] sm:p-6">

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

              {/* EDITORIAL IMAGE */}

              <Reveal
                direction={reversed ? "left" : "right"}
                delay={0.08}
                className={`min-w-0 ${
                  reversed ? "lg:order-1" : ""
                }`}
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

                  {/* IMAGE CATEGORY */}

                  <div className="absolute bottom-6 left-6 right-6 flex w-fit max-w-[calc(100%-3rem)] items-center gap-3 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#653D82] backdrop-blur-md">

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
          06 — IMMERSIVE PHOTOGRAPHIC FEATURE
      ====================================== */}

      <section
        aria-labelledby="applications-feature"
        className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#352142] py-24 text-white lg:min-h-[540px]"
      >

        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover"
        />

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
              Connected Business Technology
            </p>

            <h2
              id="applications-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Bring your business

              <span className="block text-[#DDB8F1]">
                systems together.
              </span>

            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              The value of business software grows when
              applications, information, and people can
              work together. Thoughtful integrations,
              maintainable systems, and practical automation
              help organizations establish a more connected
              digital environment.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — BUSINESS APPLICATION CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="applications-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          {/* SECTION HEADER */}

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Our Areas of Focus
              </Eyebrow>

              <h2
                id="applications-capabilities"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Business application

                <span className="block text-[#8855A9]">
                  capabilities.
                </span>

              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                From custom business portals and application
                integrations to workflow automation and
                modernization, our approach focuses on
                software that supports real operational needs.
              </p>

            </Reveal>

          </div>

          {/* SIX CAPABILITY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[275px]`}>

                    <div className="mb-7 flex items-start justify-between">

                      <span className={iconStyle}>

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

                    <span
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
          08 — APPLICATION DELIVERY APPROACH
      ====================================== */}

      <section
        aria-labelledby="applications-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              How We Build Applications
            </Eyebrow>

            <h2
              id="applications-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              From business needs

              <span className="block text-[#8B57AB]">
                to working software.
              </span>

            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              A successful business application requires
              more than writing code. Our approach
              emphasizes clear requirements, practical
              architecture, usable interfaces, and
              thoughtful integration with existing systems.
            </p>

            {/* SUPPORTING HIGHLIGHT */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Security, maintainability, and user needs
                should be considered throughout application
                planning and development.
              </p>

            </div>

          </Reveal>

          {/* FIVE-STEP DELIVERY TIMELINE */}

          <ol className="relative border-l border-[#E6D8EF] pl-7 sm:pl-9">

            {approach.map((step, index) => (

              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >

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
        aria-labelledby="applications-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          {/* AUDIENCE INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="applications-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Built for

              <span className="block text-[#8B57AB]">
                modern business needs.
              </span>

            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Business Applications can support
              organizations seeking more effective
              internal processes, connected digital
              systems, and software tailored to their
              operational requirements.
            </p>

          </Reveal>

          {/* FOUR AUDIENCE CARDS */}

          <div className="grid gap-4 sm:grid-cols-2">

            {audiences.map((item, index) => (

              <Reveal
                key={item}
                delay={(index % 2) * 0.07}
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
          10 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="applications-cta"
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

          {/* CTA HEADING */}

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="applications-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to improve

              <span className="block text-[#F0D9FA]">
                your business systems?
              </span>

            </h2>

          </Reveal>

          {/* CTA CONTENT */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your existing applications,
              operational challenges, and software
              requirements. We can discuss the possibilities
              and explore a practical approach for your project.
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
          ORIGINAL SUPABASE INQUIRY MODAL
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
