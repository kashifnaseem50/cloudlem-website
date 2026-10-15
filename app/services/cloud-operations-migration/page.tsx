
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Cloud,
  Database,
  GitBranch,
  HardDrive,
  Layers3,
  LifeBuoy,
  Network,
  RefreshCw,
  SearchCheck,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — CLOUD OPERATIONS & MIGRATION
// ==========================================

const SERVICE_TITLE = "Cloud Operations & Migration";

// VERIFIED EXISTING CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  assessment: "/images/backgrounds/section-1-3.jpg",
  migration: "/images/backgrounds/section-3-1.jpg",
  operations: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
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
// EDITORIAL SERVICE CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Cloud Readiness & Strategy",
    title: "Plan your cloud journey",
    highlight: "with greater clarity.",
    image: images.assessment,
    alt: "Technology infrastructure representing cloud assessment",
    paragraphs: [
      "Moving to the cloud is not simply a change of hosting provider. Every application has its own architecture, dependencies, performance requirements, security considerations, and operational responsibilities. Understanding these factors before migration helps organizations choose a practical direction.",

      "Cloud readiness assessment begins with an inventory of existing infrastructure, applications, databases, network connections, and business-critical workloads. This creates the foundation for evaluating cloud suitability, migration complexity, expected costs, and the potential operational impact of change.",

      "Cloudlem approaches cloud strategy by connecting technical analysis with business priorities. We help organizations consider suitable cloud architectures, migration sequences, implementation requirements, and the controls needed to support secure and maintainable operations.",
    ],
    points: [
      "Cloud readiness and infrastructure assessment",
      "Application dependency and migration planning",
      "Cloud architecture, security, and cost evaluation",
    ],
  },
  {
    number: "02",
    eyebrow: "Cloud Migration & Modernization",
    title: "Move workloads",
    highlight: "with a structured approach.",
    image: images.migration,
    alt: "Connected technology infrastructure representing cloud migration",
    paragraphs: [
      "Cloud migration may involve moving virtual machines, databases, applications, storage, and supporting services from an existing environment into a new platform. Some workloads can move with relatively limited changes, while others benefit from updates to their architecture or deployment model.",

      "An effective migration approach considers data transfer, application compatibility, networking, access permissions, testing, rollback requirements, and the timing of the final cutover. Workloads with sensitive information or significant operational dependencies may require additional validation and carefully coordinated migration stages.",

      "Cloudlem focuses on understanding the migration requirements before selecting an implementation method. Whether the appropriate approach is rehosting, replatforming, or application modernization, the goal is to establish a reliable transition path with clear verification and recovery procedures.",
    ],
    points: [
      "Workload and database migration planning",
      "Rehosting, replatforming, and modernization",
      "Cutover validation, rollback, and continuity planning",
    ],
  },
  {
    number: "03",
    eyebrow: "Continuous Cloud Operations",
    title: "Keep cloud environments",
    highlight: "reliable and manageable.",
    image: images.operations,
    alt: "Cloud infrastructure supporting operational monitoring",
    paragraphs: [
      "Cloud adoption introduces new operational opportunities, but it also requires ongoing attention to availability, performance, security, cost, and infrastructure changes. A successful migration should establish the processes needed to manage these responsibilities long after the initial deployment.",

      "Cloud operations combine monitoring, incident response, infrastructure automation, configuration management, security reviews, and capacity planning. Consistent operational practices help teams understand how systems are performing and identify issues that require attention.",

      "Cloudlem approaches cloud operations by evaluating existing monitoring and management processes, identifying opportunities for automation, and improving visibility into infrastructure health. We emphasize practical controls, documented procedures, and continuous review so cloud platforms can adapt to changing business requirements.",
    ],
    points: [
      "Infrastructure monitoring and operational visibility",
      "Automation, configuration, and deployment workflows",
      "Performance, security, and cloud cost optimization",
    ],
  },
];

// ==========================================
// CLOUD SERVICE CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Cloud Readiness Assessment",
    description:
      "Evaluate existing infrastructure, application dependencies, workload requirements, operational constraints, and technical risks to establish an informed migration strategy.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Cloud Architecture & Landing Zones",
    description:
      "Plan cloud environments with suitable account or project structures, networking, identity controls, access policies, logging, and infrastructure standards.",
    icon: Cloud,
  },
  {
    number: "03",
    title: "Workload & Database Migration",
    description:
      "Develop migration plans for applications, servers, storage, and databases with attention to compatibility, data integrity, validation, and operational continuity.",
    icon: Database,
  },
  {
    number: "04",
    title: "Infrastructure as Code",
    description:
      "Use infrastructure automation and version-controlled configurations to support consistent provisioning, controlled changes, and repeatable deployments.",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Cloud Monitoring & Observability",
    description:
      "Establish appropriate metrics, logs, alerts, dashboards, and operational checks to improve visibility into application and infrastructure health.",
    icon: Activity,
  },
  {
    number: "06",
    title: "Cloud Security & Governance",
    description:
      "Review access permissions, network controls, security configurations, audit visibility, and governance processes based on organizational requirements.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Cloud Cost Optimization",
    description:
      "Analyze resource usage, cost allocation, sizing opportunities, storage policies, and spending patterns to identify practical cost-management improvements.",
    icon: CircleDollarSign,
  },
  {
    number: "08",
    title: "Backup & Disaster Recovery",
    description:
      "Evaluate backup strategies, recovery objectives, restoration procedures, and resilience requirements for important applications and data.",
    icon: HardDrive,
  },
  {
    number: "09",
    title: "Cloud Platform Operations",
    description:
      "Support the planning of operational practices for virtual machines, containers, managed services, deployment pipelines, and cloud-native infrastructure.",
    icon: Server,
  },
];

// ==========================================
// MIGRATION STRATEGIES
// ==========================================

const migrationStrategies = [
  {
    number: "01",
    title: "Retain",
    subtitle: "Keep selected workloads in place",
    description:
      "Some applications may remain in their current environment because of technical dependencies, contractual restrictions, or business priorities. A migration roadmap should account for these decisions.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Rehost",
    subtitle: "Lift and shift",
    description:
      "Move a workload to a cloud infrastructure environment with limited application changes where compatibility, performance, and operational requirements permit.",
    icon: Server,
  },
  {
    number: "03",
    title: "Replatform",
    subtitle: "Make targeted improvements",
    description:
      "Move applications while adjusting selected infrastructure or platform components, such as adopting a managed database or improving deployment methods.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Re-architect",
    subtitle: "Modernize application design",
    description:
      "Redesign appropriate application components or integrations to better support cloud architecture, scalability, maintainability, and operational needs.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Replace",
    subtitle: "Adopt an alternative platform",
    description:
      "Evaluate whether an existing application should be replaced with a suitable managed or SaaS solution when this better meets business requirements.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Retire",
    subtitle: "Decommission obsolete systems",
    description:
      "Identify applications that are no longer required and plan safe retirement, including data retention, dependency review, access removal, and stakeholder approval.",
    icon: Database,
  },
];

// ==========================================
// CLOUD OPERATIONS PILLARS
// ==========================================

const operationalPillars = [
  {
    title: "Visibility & Monitoring",
    description:
      "Understand infrastructure health through useful metrics, centralized logging, alerting, and clear operational dashboards.",
    icon: Activity,
  },
  {
    title: "Security & Control",
    description:
      "Apply appropriate identity management, access reviews, network controls, configuration standards, and audit practices.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability & Recovery",
    description:
      "Assess availability requirements, backup coverage, recovery procedures, incident response, and infrastructure resilience.",
    icon: LifeBuoy,
  },
  {
    title: "Efficiency & Optimization",
    description:
      "Review resource sizing, platform utilization, automation opportunities, cost allocation, and operational improvements.",
    icon: ChartNoAxesCombined,
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Discover & Assess",
    description:
      "Inventory existing applications, servers, databases, networks, and operational dependencies. Evaluate business requirements, cloud readiness, risks, and potential migration constraints.",
  },
  {
    number: "02",
    title: "Design the Cloud Foundation",
    description:
      "Plan the target environment, networking, identity and access controls, infrastructure configuration, security requirements, and operational standards.",
  },
  {
    number: "03",
    title: "Pilot & Validate",
    description:
      "Use suitable pilot workloads to test migration methods, configuration, connectivity, compatibility, performance, backup procedures, and rollback readiness.",
  },
  {
    number: "04",
    title: "Migrate & Verify",
    description:
      "Execute approved migration activities in controlled stages and validate application functionality, data integrity, connectivity, and service behavior before completing cutover.",
  },
  {
    number: "05",
    title: "Operationalize & Support",
    description:
      "Establish monitoring, incident processes, access management, backup checks, documentation, and ownership responsibilities for the new environment.",
  },
  {
    number: "06",
    title: "Review & Optimize",
    description:
      "Evaluate cost, resource utilization, reliability, operational feedback, and opportunities for modernization or infrastructure improvements.",
  },
];

// ==========================================
// BUSINESS USE CASES
// ==========================================

const audiences = [
  "Organizations moving selected applications or infrastructure from on-premises hosting to cloud platforms.",
  "Businesses modernizing legacy systems while managing operational dependencies and security requirements.",
  "Teams seeking better infrastructure monitoring, automation, cost visibility, and cloud governance.",
  "Organizations reviewing backup, disaster recovery, and reliability practices across cloud environments.",
];

// ==========================================
// MAIN PAGE
// ==========================================

export default function CloudOperationsMigrationPage() {
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
                Cloud / Operations & Migration
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">

              Move to the cloud.

              <span className="block text-[#B7B09F]">
                Operate with
              </span>

              confidence.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.8] sm:text-[17px]">
              Plan cloud migrations, modernize
              infrastructure, and build dependable
              cloud operations. Connect strategic
              assessment, careful implementation,
              monitoring, security, and cost
              management in one practical approach.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Cloud Project

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
          CLOUD SERVICE INTRODUCTION
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
                  Our Cloud Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Cloud transformation

                <span className="block text-[#625C51]">
                  built around your business.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Successful cloud adoption requires
                more than migrating applications.
                It requires a reliable foundation
                for security, operations, performance,
                and future growth.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  Organizations adopt cloud
                  technologies for different
                  reasons, including modernizing
                  aging infrastructure, supporting
                  new applications, improving
                  operational flexibility, and
                  accessing managed platform
                  capabilities.
                </p>

                <p>
                  Each environment has different
                  requirements. Application
                  dependencies, network design,
                  database compatibility, security,
                  recovery expectations, and
                  ongoing costs all influence
                  the appropriate migration
                  and operating strategy.
                </p>

                <p>
                  Cloudlem approaches cloud
                  operations and migration
                  as a connected journey.
                  We consider readiness,
                  architecture, deployment,
                  validation, monitoring,
                  governance, and optimization
                  so organizations can plan
                  for both the transition
                  and the environment that
                  follows.
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

          <motion.div
            {...reveal}
            className="max-w-[830px]"
          >

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              From Migration to Modern Operations
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">

              Cloud is a journey.

              <span className="block text-[#B7B09F]">
                Not just a destination.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              The real value of cloud adoption
              depends on how workloads are
              designed, migrated, operated,
              protected, and continuously
              improved. Build a clear plan
              for the transition and the
              responsibilities that follow.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          CLOUD OPERATIONS CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Cloud Service Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                End-to-end cloud

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From readiness assessments
              and infrastructure migration
              to automation, security,
              observability, and cost
              management, these capabilities
              support different stages of
              cloud adoption.
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
          MIGRATION STRATEGIES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Cloud Migration Strategies
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                The right migration

                <span className="block text-[#625C51]">
                  for each workload.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Not every application requires
              the same migration method.
              Workload importance, technical
              dependencies, operating costs,
              and modernization goals help
              determine the most appropriate
              strategy.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {migrationStrategies.map((strategy) => {
              const Icon = strategy.icon;

              return (
                <article
                  key={strategy.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {strategy.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#625C51]">
                    {strategy.subtitle}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.035em]">
                    {strategy.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {strategy.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          CLOUD OPERATIONS FRAMEWORK
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Cloud Operations Framework
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                A stronger foundation

                <span className="block text-[#514C43]">
                  for daily operations.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Once workloads are deployed,
              ongoing operations become
              essential. These four areas
              support an organized approach
              to monitoring, security,
              resilience, and efficiency.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">

            {operationalPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.035em]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 max-w-[570px] text-[15px] leading-[1.75]">
                    {pillar.description}
                  </p>

                </article>
              );
            })}

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Network size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Networking & Connectivity
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <ShieldCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Access & Security
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <RefreshCw size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Automation & Improvement
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          CLOUD IMPLEMENTATION PROCESS
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <motion.div {...reveal}>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Cloud Migration Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                A clear path

                <span className="block text-[#625C51]">
                  from planning to operations.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Cloud migration requires
                careful planning and controlled
                execution. Our approach
                emphasizes discovery,
                appropriate architecture,
                pilot validation, change
                management, and operational
                readiness before considering
                the transition complete.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <ClipboardCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Migration plans should
                  include measurable
                  validation criteria,
                  clear ownership, and
                  an appropriate rollback
                  or recovery strategy.
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

                Cloud services for

                <span className="block text-[#514C43]">
                  evolving organizations.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Cloud Operations & Migration
                supports organizations at
                different stages of cloud
                adoption, from initial
                assessments to improvements
                in established environments.
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

                Ready for your

                <span className="block text-[#625C51]">
                  next cloud move?
                </span>
              </h2>

            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your existing
                infrastructure, applications,
                migration goals, or cloud
                operational challenges.
                We can discuss your
                requirements and explore
                a practical direction
                for your environment.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Cloud Project

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
