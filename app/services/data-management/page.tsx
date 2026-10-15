
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Check,
  Cloud,
  Database,
  GitMerge,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — DATA MANAGEMENT
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Data Management";

// ORIGINAL CLOUDLEM IMAGE ASSETS

const images = {
  hero: "/images/backgrounds/section-2-2.jpg",
  governance: "/images/backgrounds/section-3-1.jpg",
  operations: "/images/backgrounds/section-1-4.jpg",
  accessibility: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// EDITORIAL CONTENT — PRESERVED
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Data Governance & Quality",
    title: "Build confidence",
    highlight: "in every data decision.",
    image: images.governance,
    alt: "Technology systems illustrating structured data governance",
    paragraphs: [
      "Organizations rely on data to understand customers, manage operations, measure performance, and plan future initiatives. However, when information is incomplete, inconsistent, duplicated, or poorly documented, even sophisticated analytical tools may produce unreliable results.",
      "Effective data management begins with clear ownership, common definitions, quality standards, and responsible information handling. Governance establishes how important data should be managed, who is accountable for it, and which policies guide its use across applications and departments.",
      "Cloudlem approaches data governance and quality by helping organizations evaluate their current information practices, identify important datasets, and establish practical controls for validation, documentation, access, and ongoing improvement. The objective is to create information that teams can understand and use with confidence.",
    ],
    points: [
      "Data governance frameworks and stewardship",
      "Data quality assessment and validation rules",
      "Master data consistency and metadata management",
    ],
  },
  {
    number: "02",
    eyebrow: "DataOps & Observability",
    title: "Keep data reliable",
    highlight: "across every workflow.",
    image: images.operations,
    alt: "Connected cloud infrastructure representing data operations",
    paragraphs: [
      "Modern businesses depend on data pipelines that move and transform information between different systems. These pipelines support reporting, operational applications, integrations, and analytical workloads. When a pipeline fails or its output becomes unreliable, the impact may affect several business functions.",
      "DataOps brings engineering practices such as automation, version control, testing, monitoring, and repeatable deployment into data workflows. Observability complements these practices by making it easier to identify pipeline failures, unusual data volumes, schema changes, freshness delays, and quality issues.",
      "Cloudlem considers the operational lifecycle of data services, from initial ingestion to downstream consumption. Our approach emphasizes appropriate monitoring, validation, error handling, documentation, and recovery procedures so organizations can identify issues and maintain dependable data workflows.",
    ],
    points: [
      "Data pipeline monitoring and alerting",
      "Automated validation and freshness checks",
      "DataOps workflows and operational reliability",
    ],
  },
  {
    number: "03",
    eyebrow: "Unified & Multicloud Data Access",
    title: "Make information",
    highlight: "accessible and controlled.",
    image: images.accessibility,
    alt: "Digital infrastructure illustrating connected enterprise data access",
    paragraphs: [
      "Business information increasingly resides across cloud platforms, on-premises environments, SaaS applications, operational databases, and analytical services. Employees need appropriate access to this information, but disconnected platforms can make discovery, permission management, and reporting unnecessarily difficult.",
      "Unified data access seeks to simplify how approved users discover and work with relevant information while maintaining consistent security and governance. Depending on the architecture, this may involve catalogs, integrated data services, access policies, virtualization, or carefully managed data products.",
      "Cloudlem evaluates access patterns, cloud environments, security responsibilities, data movement, and operational costs when planning connected data management. Our objective is to help organizations make information available where it is useful, without overlooking privacy, security, or platform complexity.",
    ],
    points: [
      "Unified data discovery and access planning",
      "Multicloud data management considerations",
      "Role-based access and secure data sharing",
    ],
  },
];

// ==========================================
// NINE CORE DATA MANAGEMENT CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Data Governance & Stewardship",
    description:
      "Define practical data ownership, responsibilities, policies, standards, and stewardship processes to support consistent management across business functions.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Data Quality & Observability",
    description:
      "Evaluate completeness, accuracy, consistency, freshness, and pipeline health through data quality rules, monitoring, and appropriate issue-resolution workflows.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "DataOps & Pipeline Management",
    description:
      "Plan repeatable engineering workflows for data processing, testing, deployment, monitoring, and operational maintenance.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Unified Data Access",
    description:
      "Improve how approved users locate and work with relevant information across platforms while considering access controls and data governance.",
    icon: Network,
  },
  {
    number: "05",
    title: "Multicloud Data Management",
    description:
      "Evaluate data distribution, connectivity, reliability, security, and operational costs across supported cloud and hybrid environments.",
    icon: Cloud,
  },
  {
    number: "06",
    title: "Data Democratization",
    description:
      "Support self-service access to documented and governed datasets so business teams can explore relevant information with appropriate permissions.",
    icon: UsersRound,
  },
  {
    number: "07",
    title: "Master Data Management",
    description:
      "Identify important shared business entities and develop approaches to improve consistency of customer, product, supplier, and other master records.",
    icon: Database,
  },
  {
    number: "08",
    title: "Metadata & Data Catalogs",
    description:
      "Document datasets, definitions, ownership, relationships, and lineage to make organizational information easier to discover and understand.",
    icon: BookOpen,
  },
  {
    number: "09",
    title: "Data Migration & Lifecycle Planning",
    description:
      "Plan controlled data movement, retention, archiving, and platform transitions with attention to data integrity, operational dependencies, and governance.",
    icon: RefreshCw,
  },
];

// ==========================================
// DATA MANAGEMENT DISCIPLINES
// ==========================================

const disciplines = [
  {
    title: "Data Ownership",
    description:
      "Establish who is responsible for defining, maintaining, reviewing, and approving important business information.",
    icon: UsersRound,
  },
  {
    title: "Data Security",
    description:
      "Consider least-privilege access, appropriate protection mechanisms, classification, and organizational security requirements.",
    icon: LockKeyhole,
  },
  {
    title: "Data Quality",
    description:
      "Define practical rules for detecting incomplete, inconsistent, outdated, duplicated, or unexpected information.",
    icon: SearchCheck,
  },
  {
    title: "Data Lineage",
    description:
      "Document where information originates, how it changes, and which reports or applications depend on it.",
    icon: GitMerge,
  },
  {
    title: "Data Architecture",
    description:
      "Organize the systems, storage, integrations, and processing patterns needed to support reliable information use.",
    icon: Layers3,
  },
  {
    title: "Data Literacy",
    description:
      "Help teams understand dataset definitions, reporting limitations, and responsible approaches to working with information.",
    icon: ChartNoAxesCombined,
  },
];

// ==========================================
// FIVE-STAGE DATA LIFECYCLE
// ==========================================

const dataLifecycle = [
  {
    number: "01",
    title: "Collect",
    description:
      "Acquire relevant data from authorized business systems and sources.",
  },
  {
    number: "02",
    title: "Organize",
    description:
      "Apply consistent structures, definitions, and documented ownership.",
  },
  {
    number: "03",
    title: "Protect",
    description:
      "Manage access, classification, retention, and appropriate security controls.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Make approved information available for applications, reporting, and analytics.",
  },
  {
    number: "05",
    title: "Monitor",
    description:
      "Review quality, usage, operational reliability, and lifecycle requirements.",
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Data Environment Assessment",
    description:
      "Understand existing datasets, applications, storage locations, business processes, quality challenges, and operational dependencies.",
  },
  {
    number: "02",
    title: "Governance & Ownership Planning",
    description:
      "Identify important data domains, business responsibilities, relevant policies, quality standards, and access requirements.",
  },
  {
    number: "03",
    title: "Architecture & Integration Design",
    description:
      "Evaluate the systems, catalogs, pipelines, security controls, and management processes needed to support intended data usage.",
  },
  {
    number: "04",
    title: "Implementation & Validation",
    description:
      "Develop selected data management workflows and controls, test data handling, and verify appropriate quality and operational requirements.",
  },
  {
    number: "05",
    title: "Monitoring & Continuous Improvement",
    description:
      "Review quality indicators, operational issues, user feedback, governance adherence, and opportunities to refine data management processes.",
  },
];

const audiences = [
  "Organizations struggling with inconsistent reporting, duplicated records, or unclear data ownership.",
  "Businesses operating across several cloud platforms, applications, and data environments.",
  "Teams seeking stronger pipeline monitoring, data quality checks, and operational reliability.",
  "Organizations improving secure self-service analytics and enterprise-wide data accessibility.",
];

// ==========================================
// REUSABLE SCROLL REVEAL
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
// SHARED TWO-COLUMN SECTION HEADER
// ==========================================

function SectionHeader({
  id,
  eyebrow,
  title,
  highlight,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2
          id={id}
          className="text-[clamp(2.35rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30243B]"
        >
          {title}

          <span className="block text-[#8855A9]">
            {highlight}
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
          {description}
        </p>
      </Reveal>

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
// MAIN DATA MANAGEMENT PAGE
// ==========================================

export default function DataManagementPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="data-management-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >

        {/* AMBIENT LIGHTING */}

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
              Data &amp; Analytics / Data Management
            </Eyebrow>

            <h1
              id="data-management-title"
              className="max-w-[760px] text-[clamp(2.45rem,3.8vw,4.3rem)] font-semibold leading-[1.17] tracking-[-0.035em] text-[#291D34]"
            >
              Better data.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Stronger trust.
              </span>

              Smarter decisions.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Make business information reliable,
              accessible, secure, and ready for meaningful
              use. Build consistent data management
              practices that support operations,
              analytics, and long-term digital growth.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Data Needs

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
                  Data Management
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Trust. Quality. Accessibility.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — DATA MANAGEMENT INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="data-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Data Management Perspective
            </Eyebrow>

            <h2
              id="data-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Treat data as

              <span className="block text-[#8B58AC]">
                a business asset.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Effective data management ensures that
              important business information remains
              trustworthy, appropriately protected,
              and available to the people who need it.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Organizations generate and maintain
                information across customer platforms,
                financial systems, operational applications,
                cloud services, and analytical environments.
                As these systems grow, maintaining consistent
                definitions and dependable access can become
                increasingly difficult.
              </p>

              <p>
                Data management brings together governance,
                quality, security, engineering, and
                operational practices to address these
                challenges. It establishes a more structured
                approach to handling information throughout
                its useful lifecycle.
              </p>

              <p>
                Cloudlem focuses on practical data management
                solutions that consider business priorities,
                technology dependencies, responsible access,
                and long-term maintainability. The goal is
                to help organizations establish information
                they can understand, manage, and use.
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

                {/* ORIGINAL DETAILED CONTENT */}

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "font-medium text-[#43354D]"
                          : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>

                {/* KEY FOCUS AREAS */}

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

                  {/* IMAGE CATEGORY LABEL */}

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
          06 — PHOTOGRAPHIC FEATURE
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_30%,rgba(217,181,237,0.18),transparent_60%)]"
        />

        <div className="container-systems relative z-20">

          <Reveal className="max-w-[870px]">

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              Reliable Data Across Your Business
            </p>

            <h2
              id="data-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Build trust in data.

              <span className="block text-[#DDB8F1]">
                Strengthen every insight.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Dependable information supports meaningful
              reporting, connected applications, and
              better business decisions. Good data
              management creates the structure and
              discipline needed to maintain that confidence.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — DATA MANAGEMENT CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="data-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="data-capabilities"
            eyebrow="Our Data Management Offerings"
            title="Enterprise data"
            highlight="management capabilities."
            description="From governance and data quality to unified access, multicloud operations, and responsible information sharing, these capabilities support dependable data management practices."
          />

          {/* NINE CAPABILITY CARDS */}

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
          08 — DATA MANAGEMENT DISCIPLINES
      ====================================== */}

      <section
        aria-labelledby="data-disciplines"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="data-disciplines"
            eyebrow="Data Management Foundations"
            title="The foundations of"
            highlight="dependable information."
            description="Strong data management depends on more than technology. Clear responsibilities, trustworthy processes, and shared understanding help make information useful throughout an organization."
          />

          {/* SIX DISCIPLINE CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {disciplines.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[245px] bg-[#FCFAFE]`}
                  >

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
          09 — INFORMATION LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="data-lifecycle"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="data-lifecycle"
            eyebrow="Information Lifecycle"
            title="Manage information"
            highlight="throughout its lifecycle."
            description="Reliable information management requires consistent practices from collection through ongoing use and retention. The lifecycle should reflect organizational policies and applicable requirements."
          />

          {/* FIVE LIFECYCLE STAGES */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {dataLifecycle.map((stage, index) => (

              <li
                key={stage.number}
                className="min-w-0"
              >

                <Reveal
                  delay={(index % 5) * 0.045}
                  className="h-full"
                >

                  <div className="flex h-full min-h-[235px] flex-col rounded-[16px] border border-[#E1D1EA] bg-white p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                    <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                      STAGE {stage.number}
                    </span>

                    <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5F8] text-[#8250A4]">

                      {index < dataLifecycle.length - 1 ? (
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

                    <h3 className="mt-5 text-[19px] font-semibold leading-[1.3] text-[#32223E]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-[#665A70]">
                      {stage.description}
                    </p>

                  </div>

                </Reveal>

              </li>

            ))}

          </ol>

          {/* CROSS-CUTTING PRINCIPLES */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Governance & Accountability",
                icon: ShieldCheck,
              },
              {
                label: "Quality & Observability",
                icon: SearchCheck,
              },
              {
                label: "Privacy, Security & Retention",
                icon: LockKeyhole,
              },
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

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Implementation Approach
            </Eyebrow>

            <h2
              id="data-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Data management

              <span className="block text-[#8B57AB]">
                with a clear direction.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Effective data management requires a
              practical understanding of existing systems,
              responsibilities, information flows, and
              business priorities. We focus on manageable
              steps that support dependable operations
              and responsible information use.
            </p>

            {/* SUPPORTING CALLOUT */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Strong governance and operational
                processes help organizations maintain
                confidence in their data as technology
                and business needs evolve.
              </p>

            </div>

          </Reveal>

          {/* FIVE-STEP IMPLEMENTATION TIMELINE */}

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

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="data-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Reliable data for

              <span className="block text-[#8B57AB]">
                evolving organizations.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Data Management is particularly valuable
              when organizations need consistent
              information across business functions,
              dependable operations, and better control
              over how data is used.
            </p>

          </Reveal>

          {/* AUDIENCE CARDS */}

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

        {/* DECORATIVE CIRCLES */}

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
              Ready to take control

              <span className="block text-[#F0D9FA]">
                of your business data?
              </span>
            </h2>

          </Reveal>

          {/* CTA CONTENT */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your existing data platforms,
              quality challenges, integration requirements,
              and governance goals. We can discuss how
              to approach more reliable information
              management.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Data Project

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
