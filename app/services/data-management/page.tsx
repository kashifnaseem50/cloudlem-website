
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
// ==========================================

const SERVICE_TITLE = "Data Management";

// VERIFIED EXISTING CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-2-2.jpg",
  governance: "/images/backgrounds/section-3-1.jpg",
  operations: "/images/backgrounds/section-1-4.jpg",
  accessibility: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// ANIMATIONS
// ==========================================

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
// EDITORIAL CONTENT
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
// CORE DATA MANAGEMENT CAPABILITIES
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
// DATA LIFECYCLE
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

// ==========================================
// BUSINESS USE CASES
// ==========================================

const audiences = [
  "Organizations struggling with inconsistent reporting, duplicated records, or unclear data ownership.",
  "Businesses operating across several cloud platforms, applications, and data environments.",
  "Teams seeking stronger pipeline monitoring, data quality checks, and operational reliability.",
  "Organizations improving secure self-service analytics and enterprise-wide data accessibility.",
];

// ==========================================
// MAIN DATA MANAGEMENT PAGE
// ==========================================

export default function DataManagementPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO
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
        <div className="absolute inset-0 bg-linear-to-t from-[#181818]/65 to-transparent" />

        <div className="container-systems relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[900px]"
          >
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

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B7B09F]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Data & Analytics / Data Management
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">
              Better data.

              <span className="block text-[#B7B09F]">
                Stronger trust.
              </span>

              Smarter decisions.
            </h1>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.8] sm:text-[17px]">
              Make business information reliable,
              accessible, secure, and ready for
              meaningful use. Build consistent
              data management practices that support
              operations, analytics, and long-term
              digital growth.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Data Needs
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
          INTRODUCTION
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
                  Our Data Management Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Treat data as

                <span className="block text-[#625C51]">
                  a business asset.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">
              <p className="text-[17px] font-semibold leading-[1.75]">
                Effective data management ensures
                that important business information
                remains trustworthy, appropriately
                protected, and available to
                the people who need it.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  Organizations generate and maintain
                  information across customer platforms,
                  financial systems, operational
                  applications, cloud services, and
                  analytical environments. As these
                  systems grow, maintaining consistent
                  definitions and dependable access
                  can become increasingly difficult.
                </p>

                <p>
                  Data management brings together
                  governance, quality, security,
                  engineering, and operational
                  practices to address these
                  challenges. It establishes a
                  more structured approach to
                  handling information throughout
                  its useful lifecycle.
                </p>

                <p>
                  Cloudlem focuses on practical
                  data management solutions that
                  consider business priorities,
                  technology dependencies,
                  responsible access, and
                  long-term maintainability.
                  The goal is to help organizations
                  establish information they can
                  understand, manage, and use.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          THREE EDITORIAL SECTIONS
      =================================== */}

      {editorialSections.map((section, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            key={section.number}
            className={`py-14 text-[#181818] lg:py-[72px] ${
              index % 2 === 0
                ? "bg-[#B7B09F]"
                : "bg-[#D8D2C8]"
            }`}
          >
            <div className="container-systems">
              <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

                <motion.div
                  {...reveal}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#181818]" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                      {section.eyebrow}
                    </p>
                  </div>

                  <h2 className="max-w-[620px] text-[clamp(2.3rem,3.2vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                    {section.title}

                    <span className="block text-[#514C43]">
                      {section.highlight}
                    </span>
                  </h2>

                  <div className="mt-5 h-[2px] w-12 bg-[#181818]" />

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                          pIndex === 0 ? "font-medium" : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

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

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -18 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
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
          WIDE PHOTOGRAPHIC FEATURE
      =================================== */}

      <section className="relative flex min-h-[410px] items-center overflow-hidden bg-[#181818] py-[72px] text-[#D8D2C8] lg:min-h-[480px]">
        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#181818]/85" />

        <div className="container-systems relative z-10">
          <motion.div {...reveal} className="max-w-[830px]">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              Reliable Data Across Your Business
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Build trust in data.

              <span className="block text-[#B7B09F]">
                Strengthen every insight.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Dependable information supports
              meaningful reporting, connected
              applications, and better business
              decisions. Good data management
              creates the structure and discipline
              needed to maintain that confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          DATA MANAGEMENT CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Data Management Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Enterprise data

                <span className="block text-[#B7B09F]">
                  management capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From governance and data quality
              to unified access, multicloud
              operations, and responsible
              information sharing, these
              capabilities support dependable
              data management practices.
            </p>
          </motion.div>

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
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#B7B09F]/45">
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

                  <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.035em]">
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
          DATA MANAGEMENT DISCIPLINES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Data Management Foundations
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                The foundations of

                <span className="block text-[#625C51]">
                  dependable information.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Strong data management depends
              on more than technology. Clear
              responsibilities, trustworthy
              processes, and shared understanding
              help make information useful
              throughout an organization.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#181818]/20 bg-[#B7B09F]/30 p-6"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.75]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          DATA LIFECYCLE FRAMEWORK
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Information Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Manage information

                <span className="block text-[#514C43]">
                  throughout its lifecycle.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Reliable information management
              requires consistent practices
              from collection through ongoing
              use and retention. The lifecycle
              should reflect organizational
              policies and applicable
              requirements.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {dataLifecycle.map((stage) => (
              <article
                key={stage.number}
                className="flex flex-col border border-[#181818]/20 bg-[#D8D2C8] p-5"
              >
                <span className="text-[12px] font-bold text-[#625C51]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.03em]">
                  {stage.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-[1.75]">
                  {stage.description}
                </p>

                <ArrowRight
                  size={18}
                  className="mt-5 text-[#625C51]"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <ShieldCheck size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Governance & Accountability
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <SearchCheck size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Quality & Observability
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <LockKeyhole size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Privacy, Security & Retention
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          IMPLEMENTATION APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <motion.div {...reveal}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Implementation Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Data management

                <span className="block text-[#625C51]">
                  with a clear direction.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Effective data management
                requires a practical understanding
                of existing systems, responsibilities,
                information flows, and business
                priorities. We focus on manageable
                steps that support dependable
                operations and responsible
                information use.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Strong governance and
                  operational processes help
                  organizations maintain
                  confidence in their data
                  as technology and business
                  needs evolve.
                </p>
              </div>
            </motion.div>

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
                Reliable data for

                <span className="block text-[#514C43]">
                  evolving organizations.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[17px] font-medium leading-[1.75]">
                Data Management is particularly
                valuable when organizations need
                consistent information across
                business functions, dependable
                operations, and better control
                over how data is used.
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
          FINAL CALL TO ACTION
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to take control

                <span className="block text-[#625C51]">
                  of your business data?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your existing
                data platforms, quality
                challenges, integration
                requirements, and governance
                goals. We can discuss how
                to approach more reliable
                information management.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Data Project

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
