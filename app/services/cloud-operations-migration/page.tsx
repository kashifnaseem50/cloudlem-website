
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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

// CLOUDLEM — CLOUD OPERATIONS & MIGRATION
// Premium Soft Lavender & White

const SERVICE_TITLE = "Cloud Operations & Migration";

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  assessment: "/images/backgrounds/section-1-3.jpg",
  migration: "/images/backgrounds/section-3-1.jpg",
  operations: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
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
// SIX CLOUD MIGRATION STRATEGIES
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

const audiences = [
  "Organizations moving selected applications or infrastructure from on-premises hosting to cloud platforms.",
  "Businesses modernizing legacy systems while managing operational dependencies and security requirements.",
  "Teams seeking better infrastructure monitoring, automation, cost visibility, and cloud governance.",
  "Organizations reviewing backup, disaster recovery, and reliability practices across cloud environments.",
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
// REUSABLE SECTION HEADER
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
// MAIN CLOUD OPERATIONS PAGE
// ==========================================

export default function CloudOperationsMigrationPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="cloud-title"
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
              Cloud / Operations &amp; Migration
            </Eyebrow>

            <h1
              id="cloud-title"
              className="max-w-[760px] text-[clamp(2.75rem,5.1vw,5.35rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Move to the cloud.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Operate with
              </span>

              confidence.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Plan cloud migrations, modernize infrastructure,
              and build dependable cloud operations.
              Connect strategic assessment, careful
              implementation, monitoring, security, and
              cost management in one practical approach.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Cloud Project
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#capabilities"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-colors duration-300 hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
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

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Cloud Operations &amp; Migration
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Assess. Migrate. Optimize.
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — CLOUD PERSPECTIVE
      ====================================== */}

      <section
        aria-labelledby="cloud-intro"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Our Cloud Perspective
            </Eyebrow>

            <h2
              id="cloud-intro"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Cloud transformation
              <span className="block text-[#8B58AC]">
                built around your business.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Successful cloud adoption requires more than
              migrating applications. It requires a reliable
              foundation for security, operations,
              performance, and future growth.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">
              <p>
                Organizations adopt cloud technologies for
                different reasons, including modernizing
                aging infrastructure, supporting new
                applications, improving operational
                flexibility, and accessing managed platform
                capabilities.
              </p>

              <p>
                Each environment has different requirements.
                Application dependencies, network design,
                database compatibility, security, recovery
                expectations, and ongoing costs all influence
                the appropriate migration and operating
                strategy.
              </p>

              <p>
                Cloudlem approaches cloud operations and
                migration as a connected journey. We consider
                readiness, architecture, deployment,
                validation, monitoring, governance, and
                optimization so organizations can plan for
                both the transition and the environment
                that follows.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — CLOUD SERVICE PILLARS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`cloud-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0 ? "bg-[#F7F2FB]" : "bg-white"
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

                <h2
                  id={`cloud-pillar-${section.number}`}
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
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={
                        pIndex === 0
                          ? "font-medium text-[#43354D]"
                          : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* FOCUS AREAS */}

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
        aria-labelledby="cloud-feature"
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
              From Migration to Modern Operations
            </p>

            <h2
              id="cloud-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Cloud is a journey.
              <span className="block text-[#DDB8F1]">
                Not just a destination.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              The real value of cloud adoption depends on
              how workloads are designed, migrated, operated,
              protected, and continuously improved.
              Build a clear plan for the transition and
              the responsibilities that follow.
            </p>

          </Reveal>
        </div>
      </section>

      {/* ======================================
          07 — CLOUD CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="cloud-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-capabilities"
            eyebrow="Our Cloud Service Offerings"
            title="End-to-end cloud"
            highlight="capabilities."
            description="From readiness assessments and infrastructure migration to automation, security, observability, and cost management, these capabilities support different stages of cloud adoption."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >
                  <article className={`${cardStyle} min-h-[280px]`}>

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
          08 — CLOUD MIGRATION STRATEGIES
      ====================================== */}

      <section
        aria-labelledby="cloud-strategies"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-strategies"
            eyebrow="Cloud Migration Strategies"
            title="The right migration"
            highlight="for each workload."
            description="Not every application requires the same migration method. Workload importance, technical dependencies, operating costs, and modernization goals help determine the most appropriate strategy."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {migrationStrategies.map((strategy, index) => {
              const Icon = strategy.icon;

              return (
                <Reveal
                  key={strategy.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >
                  <article
                    className={`${cardStyle} min-h-[285px] bg-[#FCFAFE]`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={iconStyle}>
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {strategy.number}
                      </span>
                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {strategy.subtitle}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#30213B]">
                      {strategy.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {strategy.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================
          09 — CLOUD OPERATIONS FRAMEWORK
      ====================================== */}

      <section
        aria-labelledby="cloud-framework"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-framework"
            eyebrow="Cloud Operations Framework"
            title="A stronger foundation"
            highlight="for daily operations."
            description="Once workloads are deployed, ongoing operations become essential. These four areas support an organized approach to monitoring, security, resilience, and efficiency."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {operationalPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  delay={(index % 2) * 0.07}
                  className="h-full"
                >
                  <article className={`${cardStyle} min-h-[225px]`}>

                    <span className={iconStyle}>
                      <Icon
                        size={26}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-5 text-[22px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 max-w-[570px] text-[15px] leading-[1.75] text-[#665A70]">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* SUPPORTING OPERATIONAL AREAS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Networking & Connectivity",
                icon: Network,
              },
              {
                label: "Access & Security",
                icon: ShieldCheck,
              },
              {
                label: "Automation & Improvement",
                icon: RefreshCw,
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
          10 — CLOUD IMPLEMENTATION PROCESS
      ====================================== */}

      <section
        aria-labelledby="cloud-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Our Cloud Migration Approach
            </Eyebrow>

            <h2
              id="cloud-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              A clear path
              <span className="block text-[#8B57AB]">
                from planning to operations.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Cloud migration requires careful planning
              and controlled execution. Our approach
              emphasizes discovery, appropriate architecture,
              pilot validation, change management, and
              operational readiness before considering
              the transition complete.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">
                <ClipboardCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Migration plans should include measurable
                validation criteria, clear ownership, and
                an appropriate rollback or recovery strategy.
              </p>
            </div>
          </Reveal>

          {/* SIX-STEP TIMELINE */}

          <ol className="relative border-l border-[#E6D8EF] pl-8 sm:pl-10">
            {approach.map((step, index) => (
              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[42px] top-0 flex h-5 w-5 items-center justify-center rounded-full border-[5px] border-white bg-[#A56EC3] shadow-[0_0_0_1px_#DDC8EA] sm:-left-[50px]"
                />

                <Reveal delay={(index % 3) * 0.04}>
                  <div className="rounded-[14px] border border-[#ECE2F2] bg-[#FBF9FD] p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#F7F0FC] motion-safe:hover:translate-x-1 sm:p-6">

                    <p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#9867B7]">
                      STEP {step.number}
                    </p>

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
        aria-labelledby="cloud-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="cloud-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Cloud services for
              <span className="block text-[#8B57AB]">
                evolving organizations.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Cloud Operations &amp; Migration supports
              organizations at different stages of cloud
              adoption, from initial assessments to
              improvements in established environments.
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
          12 — FINAL CLOUD CTA
      ====================================== */}

      <section
        aria-labelledby="cloud-cta"
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
              id="cloud-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready for your
              <span className="block text-[#F0D9FA]">
                next cloud move?
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >
            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your existing infrastructure,
              applications, migration goals, or cloud
              operational challenges. We can discuss your
              requirements and explore a practical
              direction for your environment.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Cloud Project

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              />
            </button>
          </Reveal>

        </div>
      </section>

      {/* EXISTING SUPABASE INQUIRY MODAL */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
