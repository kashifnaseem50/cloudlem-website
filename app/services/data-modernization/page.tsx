
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
  Database,
  Cloud,
  Layers3,
  GitMerge,
  ShieldCheck,
  ChartNoAxesCombined,
  Workflow,
  Network,
  SearchCheck,
  Boxes,
  FileCode2,
  BarChart3,
  BookOpen,
  Waypoints,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — DATA MODERNIZATION
// PREMIUM SOFT LAVENDER & WHITE
// ==========================================

const SERVICE_TITLE = "Data Modernization";

// ORIGINAL CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  architecture: "/images/backgrounds/section-2-2.jpg",
  integration: "/images/backgrounds/section-1-3.jpg",
  analytics: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-4.jpg",
};

// ==========================================
// EDITORIAL CONTENT — PRESERVED
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Modern Data Architecture",
    title: "Move beyond",
    highlight: "fragmented data systems.",
    image: images.architecture,
    alt: "Technology imagery supporting modern data architecture",
    paragraphs: [
      "Business information is often distributed across legacy databases, cloud services, enterprise applications, and departmental systems. When these environments develop independently, organizations can struggle with inconsistent reporting, duplicated information, and limited visibility into their operations.",
      "Data modernization starts by understanding the existing data landscape. This includes reviewing platforms, data structures, integration dependencies, reporting requirements, and the challenges that prevent teams from accessing reliable information.",
      "Cloudlem helps organizations plan a modern data architecture that aligns storage, processing, integration, security, and analytics requirements. The objective is to establish an adaptable foundation that supports changing workloads without introducing unnecessary complexity.",
    ],
    points: [
      "Existing data-platform assessment and gap analysis",
      "Modern data architecture and technology roadmaps",
      "Data warehouse, data lake, and lakehouse planning",
    ],
  },
  {
    number: "02",
    eyebrow: "Data Integration & Migration",
    title: "Bring your data",
    highlight: "into a connected environment.",
    image: images.integration,
    alt: "Connected infrastructure illustrating data integration",
    paragraphs: [
      "Organizations generate information through business applications, customer interactions, operational systems, and external data sources. Turning this information into a dependable business asset requires consistent methods for collecting, moving, processing, and organizing it.",
      "Modern integration approaches can connect on-premises systems, cloud applications, APIs, and databases through scheduled pipelines, event-driven processing, or other suitable ingestion methods. The appropriate design depends on source-system capabilities, data volumes, refresh requirements, and operational constraints.",
      "Cloudlem supports data integration and migration planning with attention to data mapping, transformation logic, validation, and continuity. We focus on making information more accessible while preserving its meaning, reliability, and appropriate access controls.",
    ],
    points: [
      "Cloud and on-premises data ingestion",
      "Migration planning, mapping, and validation",
      "Data pipelines, transformations, and synchronization",
    ],
  },
  {
    number: "03",
    eyebrow: "Analytics-Ready Data",
    title: "Transform information",
    highlight: "into actionable insight.",
    image: images.analytics,
    alt: "Digital technology representing analytics-ready information",
    paragraphs: [
      "Collecting information is only the beginning. To support useful reporting and analytics, organizations also need understandable data models, consistent definitions, reliable transformation rules, and confidence in the information they consume.",
      "Modern data platforms can organize raw information into validated and curated datasets suited to dashboards, operational reporting, historical analysis, and advanced analytical applications. Data catalogs, metadata, governance policies, and automated quality checks help teams understand how information should be interpreted and used.",
      "Cloudlem approaches analytics readiness by connecting data engineering decisions with actual business questions. This means designing data structures and processing workflows that support meaningful reporting today while providing a foundation for future analytics, machine learning, and AI initiatives.",
    ],
    points: [
      "Curated datasets and analytical data models",
      "Business intelligence and reporting readiness",
      "Data quality, metadata, and governance practices",
    ],
  },
];

// ==========================================
// NINE DATA MODERNIZATION CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Data Platform Assessment",
    description:
      "Evaluate current databases, processing workflows, reporting systems, technical dependencies, and operational constraints to identify modernization opportunities and implementation priorities.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Modern Data Architecture",
    description:
      "Plan data environments suited to business requirements, including warehouses, data lakes, lakehouses, integration services, and appropriate processing technologies.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Cloud Data Migration",
    description:
      "Develop migration approaches for selected datasets and workloads, taking into account compatibility, data integrity, security, validation, and operational continuity.",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Data Ingestion & Integration",
    description:
      "Design ways to ingest information from databases, business applications, APIs, cloud services, and other relevant sources through dependable integration workflows.",
    icon: GitMerge,
  },
  {
    number: "05",
    title: "Data Transformation & Processing",
    description:
      "Apply data mapping, cleaning, validation, and business transformation rules to convert source information into consistent datasets for downstream applications.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Data Warehousing & Storage",
    description:
      "Assess centralized storage and analytical modeling approaches that support historical reporting, query performance, access requirements, and cost-conscious data retention.",
    icon: Database,
  },
  {
    number: "07",
    title: "Data Quality & Governance",
    description:
      "Establish practical controls for data definitions, quality checks, ownership, lineage, access permissions, and responsible information management.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Business Intelligence Enablement",
    description:
      "Prepare reliable datasets and reporting structures that help business users work with dashboards, operational metrics, and self-service analytical tools.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "09",
    title: "Data Platform Operations",
    description:
      "Plan monitoring, pipeline error handling, observability, performance reviews, and ongoing operational processes for dependable data-platform management.",
    icon: Network,
  },
];

// ==========================================
// SIX DATA PLATFORM CONCEPTS
// ==========================================

const platformConcepts = [
  {
    title: "Data Quality",
    description:
      "Define measurable standards for completeness, accuracy, consistency, and timeliness. Use validation checks to identify data issues before they affect reporting.",
    icon: SearchCheck,
  },
  {
    title: "Data Governance",
    description:
      "Clarify data ownership, usage policies, access responsibilities, and the controls required to manage important organizational information.",
    icon: ShieldCheck,
  },
  {
    title: "Data Lakehouse",
    description:
      "Consider architectures that combine flexible large-scale storage with structured processing and analytical capabilities when they fit the workload.",
    icon: Database,
  },
  {
    title: "Metadata & Lineage",
    description:
      "Document data definitions, system relationships, transformation history, and the movement of information between sources and downstream consumers.",
    icon: BookOpen,
  },
  {
    title: "Data Virtualization & Fabric",
    description:
      "Evaluate integration patterns that help users discover or access information across distributed systems without requiring every dataset to be copied.",
    icon: Waypoints,
  },
  {
    title: "Domain-Oriented Data Management",
    description:
      "Explore data-mesh principles where appropriate, including domain accountability, shared standards, and the publication of reusable data products.",
    icon: Boxes,
  },
];

// ==========================================
// FIVE-STAGE DATA PLATFORM FLOW
// ==========================================

const dataFlow = [
  {
    number: "01",
    title: "Data Sources",
    description:
      "Business systems, databases, applications, APIs, and external information",
  },
  {
    number: "02",
    title: "Ingestion",
    description:
      "Collect, connect, and transfer relevant information into the data environment",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "Validate, transform, standardize, and apply business definitions",
  },
  {
    number: "04",
    title: "Curated Storage",
    description:
      "Organize dependable datasets for access, reuse, and historical analysis",
  },
  {
    number: "05",
    title: "Data Consumption",
    description:
      "Dashboards, business reporting, applications, and advanced analytics",
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Current-State Assessment",
    description:
      "Review the existing data environment, source systems, architecture, integrations, reporting needs, data quality concerns, and major operational dependencies.",
  },
  {
    number: "02",
    title: "Architecture & Roadmap",
    description:
      "Define a target approach that considers workload requirements, data movement, storage, processing, governance, security, and implementation priorities.",
  },
  {
    number: "03",
    title: "Integration & Migration",
    description:
      "Plan and implement selected ingestion, migration, and transformation workflows with appropriate data validation and compatibility checks.",
  },
  {
    number: "04",
    title: "Quality & Analytics Enablement",
    description:
      "Establish suitable data models, processing rules, quality checks, documentation, and reporting-ready datasets for intended business users.",
  },
  {
    number: "05",
    title: "Monitoring & Improvement",
    description:
      "Review platform performance, pipeline reliability, data quality, usage patterns, and opportunities for ongoing refinement as business requirements evolve.",
  },
];

const audiences = [
  "Organizations managing information across disconnected databases and business applications.",
  "Businesses preparing to move selected data workloads to modern cloud platforms.",
  "Teams replacing difficult-to-maintain reporting systems or legacy data warehouses.",
  "Organizations preparing reliable information foundations for BI, analytics, and AI.",
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
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
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// SHARED SECTION EYEBROW
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
// SHARED CARD STYLING
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN DATA MODERNIZATION PAGE
// ==========================================

export default function DataModernizationPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — HERO
      ====================================== */}

      <section
        aria-labelledby="data-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#DDC9ED]/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">

          <Reveal className="min-w-0">

            <Link
              href="/services"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#80519F] hover:text-[#4B2B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80519F]"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-x-1"
              />
              All Services
            </Link>

            <Eyebrow>
              Data &amp; Analytics / Data Modernization
            </Eyebrow>

            <h1
              id="data-title"
              className="max-w-[760px] text-[clamp(2.45rem,3.8vw,4.3rem)] font-semibold leading-[1.17] tracking-[-0.035em] text-[#291D34]]"
            >
              Modernize data.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Unlock clearer
              </span>

              decisions.
            </h1>

            <p className="mt-7 max-w-[640px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Transform fragmented data environments into
              connected, reliable, and scalable platforms.
              Build a stronger foundation for business
              intelligence, analytics, operational reporting,
              and future innovation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Data Strategy

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#capabilities"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-colors hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
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

          {/* HERO PHOTOGRAPHY */}

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

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Data Modernization
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Connect. Govern. Understand.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — DATA MODERNIZATION INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="data-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Data Modernization Perspective
            </Eyebrow>

            <h2
              id="data-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Build a stronger

              <span className="block text-[#8B58AC]">
                foundation for data.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              A modern data environment helps organizations
              connect information, improve its reliability,
              and make it more useful across the business.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                As businesses grow, information becomes
                distributed across applications, databases,
                cloud environments, and operational systems.
                Different teams may maintain their own data
                sources, reporting logic, and definitions,
                making it difficult to establish consistent
                business insights.
              </p>

              <p>
                Data modernization addresses these challenges
                by improving how information is collected,
                stored, processed, governed, and made
                accessible. Modern platforms can support
                more flexible storage, dependable processing,
                and better integration between systems.
              </p>

              <p>
                Cloudlem approaches data modernization with
                business objectives at the center. We evaluate
                existing systems, determine practical
                modernization opportunities, and help plan
                a data environment capable of supporting
                reporting, analytics, and future digital
                initiatives.
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
            aria-labelledby={`data-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0 ? "bg-[#F7F2FB]" : "bg-white"
            }`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL TEXT */}

              <Reveal
                className={`min-w-0 ${reversed ? "lg:order-2" : ""}`}
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

                <h2
                  id={`data-pillar-${section.number}`}
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

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map((paragraph, paragraphIndex) => (
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
                  ))}

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

              {/* EDITORIAL PHOTOGRAPH */}

              <Reveal
                className={`min-w-0 ${reversed ? "lg:order-1" : ""}`}
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
          06 — IMMERSIVE IMAGE FEATURE
      ====================================== */}

      <section
        aria-labelledby="data-feature"
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

        <div className="container-systems relative z-20">

          <Reveal className="max-w-[870px]">

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              A Connected Data Foundation
            </p>

            <h2
              id="data-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              From scattered data

              <span className="block text-[#DDB8F1]">
                to business intelligence.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              A well-designed data environment helps
              organizations reduce fragmentation,
              improve trust in reporting, and prepare
              information for operational decisions
              and advanced analysis.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — DATA MODERNIZATION CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="data-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Our Data Modernization Offerings
              </Eyebrow>

              <h2
                id="data-capabilities"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Modern data platform

                <span className="block text-[#8855A9]">
                  capabilities.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                From existing-platform assessments to
                migration, data engineering, governance,
                and analytics enablement, these capabilities
                help organizations plan a more reliable
                data environment.
              </p>

            </Reveal>

          </div>

          {/* NINE CAPABILITY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  className="h-full"
                  delay={(index % 3) * 0.06}
                >

                  <article className={`${cardStyle} min-h-[290px]`}>

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
          08 — MODERN DATA PLATFORM CONCEPTS
      ====================================== */}

      <section
        aria-labelledby="data-concepts"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Architecture &amp; Data Management
              </Eyebrow>

              <h2
                id="data-concepts"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Important elements

                <span className="block text-[#8855A9]">
                  of modern data.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                There is no single architecture that fits
                every organization. These data-management
                concepts can be considered according to
                business priorities, source systems, and
                intended analytical workloads.
              </p>

            </Reveal>

          </div>

          {/* SIX CONCEPT CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {platformConcepts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  className="h-full"
                  delay={(index % 3) * 0.06}
                >

                  <article className={`${cardStyle} min-h-[255px]`}>

                    <span className={iconStyle}>

                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                    </span>

                    <h3 className="mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
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
          09 — MODERN DATA PLATFORM FLOW
      ====================================== */}

      <section
        aria-labelledby="data-pipeline"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Modern Data Platform Strategy
              </Eyebrow>

              <h2
                id="data-pipeline"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                A connected journey

                <span className="block text-[#8855A9]">
                  from source to insight.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                A modern data platform connects multiple
                sources with dependable processing,
                governed storage, and useful information
                products. Security and quality should
                be considered throughout this flow.
              </p>

            </Reveal>

          </div>

          {/* FIVE-STAGE PIPELINE */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {dataFlow.map((stage, index) => (
              <li
                key={stage.number}
                className="relative min-w-0"
              >

                <Reveal
                  delay={(index % 5) * 0.045}
                  className="h-full"
                >

                  <div className="flex h-full min-h-[225px] flex-col rounded-[16px] border border-[#E1D1EA] bg-white p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                    <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                      STAGE {stage.number}
                    </span>

                    <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5F8] text-[#8250A4]">

                      {index < dataFlow.length - 1 ? (
                        <ArrowRight
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      ) : (
                        <Check
                          size={19}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}

                    </div>

                    <h3 className="mt-5 text-[18px] font-semibold leading-[1.3] text-[#32223E]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#665A70]">
                      {stage.description}
                    </p>

                  </div>

                </Reveal>

              </li>
            ))}

          </ol>

          {/* CROSS-CUTTING CONSIDERATIONS */}

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            {[
              { label: "Data Security & Access", icon: ShieldCheck },
              { label: "Quality & Governance", icon: Check },
              { label: "Metadata & Observability", icon: FileCode2 },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E3D4ED] bg-white px-5 py-4 text-[#493456]"
                >

                  <Icon
                    size={21}
                    aria-hidden="true"
                    className="shrink-0 text-[#8755A6]"
                  />

                  <span className="text-[14px] font-semibold">
                    {item.label}
                  </span>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          10 — IMPLEMENTATION APPROACH
      ====================================== */}

      <section
        aria-labelledby="data-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Approach
            </Eyebrow>

            <h2
              id="data-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Modernization with

              <span className="block text-[#8B57AB]">
                a practical roadmap.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Data modernization is a combination of
              technical architecture, reliable engineering,
              organizational requirements, and careful
              implementation planning. A phased approach
              can help manage migration dependencies and
              reduce unnecessary operational disruption.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <BarChart3
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                The objective is not only to move
                information into new technology, but to
                make it dependable, accessible, and useful.
              </p>

            </div>

          </Reveal>

          {/* FIVE-STEP APPROACH TIMELINE */}

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
          11 — WHO WE HELP
      ====================================== */}

      <section
        aria-labelledby="data-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="data-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Data foundations

              <span className="block text-[#8B57AB]">
                for evolving businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Data Modernization is relevant to
              organizations looking to improve information
              reliability, replace outdated processing
              systems, or prepare data for modern
              analytical workloads.
            </p>

          </Reveal>

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
          12 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="data-cta"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#553173_0%,#76459C_52%,#9668B5_100%)] py-20 text-white sm:py-24 lg:py-28"
      >

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

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="data-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to modernize

              <span className="block text-[#F0D9FA]">
                your data environment?
              </span>
            </h2>

          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your existing data systems,
              integration requirements, reporting challenges,
              and modernization goals. We can discuss a
              practical approach for your organization.
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
          EXISTING SUPABASE INQUIRY MODAL
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
