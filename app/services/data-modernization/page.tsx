
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
// ==========================================

const SERVICE_TITLE = "Data Modernization";

// EXISTING VERIFIED CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  architecture: "/images/backgrounds/section-2-2.jpg",
  integration: "/images/backgrounds/section-1-3.jpg",
  analytics: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-4.jpg",
};

// ANIMATION CONFIGURATION

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
// DATA MODERNIZATION OFFERINGS
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
// MODERN DATA PLATFORM CONCEPTS
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
// DATA PLATFORM FLOW
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
// PAGE COMPONENT
// ==========================================

export default function DataModernizationPage() {
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

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                Data & Analytics / Data Modernization
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#D8D2C8]">
              Modernize data.

              <span className="block text-[#B7B09F]">
                Unlock clearer
              </span>

              decisions.
            </h1>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-[#D8D2C8] sm:text-[17px]">
              Transform fragmented data environments
              into connected, reliable, and scalable
              platforms. Build a stronger foundation
              for business intelligence, analytics,
              operational reporting, and future innovation.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Data Strategy

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
                  Our Data Modernization Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Build a stronger

                <span className="block text-[#625C51]">
                  foundation for data.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                A modern data environment helps
                organizations connect information,
                improve its reliability, and make
                it more useful across the business.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  As businesses grow, information
                  becomes distributed across
                  applications, databases, cloud
                  environments, and operational
                  systems. Different teams may
                  maintain their own data sources,
                  reporting logic, and definitions,
                  making it difficult to establish
                  consistent business insights.
                </p>

                <p>
                  Data modernization addresses
                  these challenges by improving
                  how information is collected,
                  stored, processed, governed,
                  and made accessible. Modern
                  platforms can support more
                  flexible storage, dependable
                  processing, and better
                  integration between systems.
                </p>

                <p>
                  Cloudlem approaches data
                  modernization with business
                  objectives at the center.
                  We evaluate existing systems,
                  determine practical modernization
                  opportunities, and help plan
                  a data environment capable
                  of supporting reporting,
                  analytics, and future digital
                  initiatives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EDITORIAL SECTIONS
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
          <motion.div
            {...reveal}
            className="max-w-[830px]"
          >

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              A Connected Data Foundation
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              From scattered data

              <span className="block text-[#B7B09F]">
                to business intelligence.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8] text-[#D8D2C8]">
              A well-designed data environment
              helps organizations reduce
              fragmentation, improve trust
              in reporting, and prepare
              information for operational
              decisions and advanced analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          DATA MODERNIZATION OFFERINGS
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Data Modernization Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Modern data platform

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From existing-platform assessments
              to migration, data engineering,
              governance, and analytics
              enablement, these capabilities
              help organizations plan a more
              reliable data environment.
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
          KEY DATA PLATFORM CONCEPTS
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Architecture & Data Management
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Important elements

                <span className="block text-[#625C51]">
                  of modern data.
                </span>
              </h2>
            </div>

            <p className="max-w-[530px] text-[16px] leading-[1.8] lg:justify-self-end">
              There is no single architecture
              that fits every organization.
              These data-management concepts
              can be considered according to
              business priorities, source systems,
              and intended analytical workloads.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {platformConcepts.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#181818]/20 bg-[#B7B09F]/35 p-6"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.75] text-[#181818]/85">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================
          MODERN DATA PLATFORM STRATEGY
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Modern Data Platform Strategy
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                A connected journey

                <span className="block text-[#514C43]">
                  from source to insight.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              A modern data platform connects
              multiple sources with dependable
              processing, governed storage,
              and useful information products.
              Security and quality should be
              considered throughout this flow.
            </p>
          </motion.div>

          {/* RESPONSIVE DATA PIPELINE */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {dataFlow.map((stage) => (
              <div
                key={stage.number}
                className="flex flex-col border border-[#181818]/20 bg-[#D8D2C8] p-5"
              >

                <span className="text-[12px] font-bold text-[#625C51]">
                  {stage.number}
                </span>

                <div className="mt-5">
                  <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.03em]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7]">
                    {stage.description}
                  </p>
                </div>

                <ArrowRight
                  size={19}
                  className="mt-5 text-[#625C51]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* CROSS-CUTTING CONSIDERATIONS */}

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 px-5 py-4">
              <ShieldCheck size={20} aria-hidden="true" />
              <span className="text-[14px] font-semibold">
                Data Security & Access
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 px-5 py-4">
              <Check size={20} aria-hidden="true" />
              <span className="text-[14px] font-semibold">
                Quality & Governance
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 px-5 py-4">
              <FileCode2 size={20} aria-hidden="true" />
              <span className="text-[14px] font-semibold">
                Metadata & Observability
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
                  Our Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Modernization with

                <span className="block text-[#625C51]">
                  a practical roadmap.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Data modernization is a
                combination of technical
                architecture, reliable
                engineering, organizational
                requirements, and careful
                implementation planning.
                A phased approach can help
                manage migration dependencies
                and reduce unnecessary
                operational disruption.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <BarChart3
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  The objective is not only
                  to move information into
                  new technology, but to
                  make it dependable,
                  accessible, and useful.
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
                Data foundations

                <span className="block text-[#514C43]">
                  for evolving businesses.
                </span>
              </h2>
            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Data Modernization is relevant
                to organizations looking to
                improve information reliability,
                replace outdated processing
                systems, or prepare data for
                modern analytical workloads.
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
                Ready to modernize

                <span className="block text-[#625C51]">
                  your data environment?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your existing
                data systems, integration
                requirements, reporting
                challenges, and modernization
                goals. We can discuss a
                practical approach for
                your organization.
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
