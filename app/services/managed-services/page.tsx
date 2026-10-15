
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
  BellRing,
  Check,
  CircleDollarSign,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Headset,
  LifeBuoy,
  Network,
  RefreshCw,
  SearchCheck,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — MANAGED SERVICES
// PREMIUM SOFT LAVENDER & WHITE
// ==========================================

const SERVICE_TITLE = "Managed Services";

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  application: "/images/backgrounds/section-1-4.jpg",
  operations: "/images/backgrounds/section-3-1.jpg",
  security: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
};

// ==========================================
// EDITORIAL SERVICE CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Cloud Application Support",
    title: "Keep business applications",
    highlight: "running with confidence.",
    image: images.application,
    alt: "Cloud technology representing application management",
    paragraphs: [
      "Applications play an essential role in everyday business operations. Customer portals, e-commerce platforms, internal applications, APIs, and cloud-hosted services must remain dependable as users, technology dependencies, and operational requirements change.",
      "Managing these applications involves more than responding when something fails. Regular maintenance, software updates, configuration reviews, testing, performance analysis, and reliable release practices all contribute to keeping applications operational and maintainable.",
      "Cloudlem approaches application support by understanding the application architecture, operational dependencies, business priorities, and existing support processes. Our focus is on identifying recurring issues, improving visibility, and establishing structured maintenance and change-management practices.",
    ],
    points: [
      "Application monitoring and maintenance",
      "Software updates, testing, and release support",
      "Cloud APIs and application performance management",
    ],
  },
  {
    number: "02",
    eyebrow: "CloudOps & Automation",
    title: "Simplify operations",
    highlight: "through better automation.",
    image: images.operations,
    alt: "Connected cloud infrastructure representing CloudOps",
    paragraphs: [
      "Cloud environments include virtual machines, networking services, databases, containers, storage, managed services, and numerous configuration settings. As infrastructure grows, managing these resources consistently becomes more challenging without appropriate operational processes.",
      "CloudOps combines monitoring, infrastructure management, automation, incident handling, and ongoing optimization. Repeatable workflows can help teams provision resources consistently, review infrastructure changes, manage configuration drift, and respond more effectively to operational events.",
      "Cloudlem considers infrastructure automation, observability, deployment workflows, resource utilization, and financial visibility as connected parts of cloud operations. The objective is to reduce unnecessary manual work while maintaining appropriate review, control, and accountability.",
    ],
    points: [
      "Infrastructure monitoring and cloud automation",
      "DevSecOps, DataOps, and deployment workflows",
      "FinOps, resource visibility, and cost optimization",
    ],
  },
  {
    number: "03",
    eyebrow: "Cloud Security Operations",
    title: "Strengthen security",
    highlight: "across cloud environments.",
    image: images.security,
    alt: "Digital infrastructure representing cloud security operations",
    paragraphs: [
      "Cloud security requires ongoing attention as applications change, infrastructure is deployed, users gain access, and new vulnerabilities are discovered. Security configurations that were appropriate during an initial deployment may need to be revisited as the environment evolves.",
      "Security operations help organizations monitor important events, review configurations, manage access, respond to potential threats, and maintain reliable records of changes. Depending on the environment, these activities may involve centralized logging, security alerts, vulnerability management, and incident-response procedures.",
      "Cloudlem approaches cloud security operations through risk-based assessment, clear responsibilities, appropriate technical controls, and documented response processes. We emphasize practical security improvements aligned with the organization's infrastructure, available tools, and operational requirements.",
    ],
    points: [
      "Cloud security monitoring and event visibility",
      "Identity, configuration, and vulnerability reviews",
      "Incident response and recovery planning",
    ],
  },
];

// ==========================================
// MANAGED SERVICES CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Cloud Infrastructure Monitoring",
    description:
      "Improve visibility into cloud resources through appropriate metrics, logs, service health checks, alerting, and operational dashboards.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Application Support & Maintenance",
    description:
      "Plan maintenance activities, software updates, application monitoring, issue investigation, and controlled changes for supported cloud applications.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Incident & Service Management",
    description:
      "Establish processes for issue reporting, triage, escalation, investigation, communication, and documented resolution according to agreed support responsibilities.",
    icon: Headset,
  },
  {
    number: "04",
    title: "Cloud Automation & DevSecOps",
    description:
      "Improve provisioning, configuration, testing, and deployment workflows using suitable infrastructure automation and security-aware engineering practices.",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Cloud Security Operations",
    description:
      "Evaluate security configurations, access controls, vulnerability findings, audit information, and monitoring requirements to support ongoing risk management.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "FinOps & Cloud Cost Management",
    description:
      "Review spending patterns, resource utilization, budget visibility, tagging, and sizing opportunities to support more informed cloud cost decisions.",
    icon: CircleDollarSign,
  },
  {
    number: "07",
    title: "Backup & Recovery Management",
    description:
      "Assess backup coverage, retention, recovery objectives, restoration procedures, and disaster recovery readiness for important workloads.",
    icon: LifeBuoy,
  },
  {
    number: "08",
    title: "DataOps & Database Operations",
    description:
      "Evaluate data pipeline reliability, database health, operational alerts, backup processes, and maintenance requirements for supported data services.",
    icon: Database,
  },
  {
    number: "09",
    title: "Cloud API & Integration Support",
    description:
      "Monitor and maintain supported application interfaces, service integrations, authentication flows, and relevant error-handling processes.",
    icon: Network,
  },
];

// ==========================================
// THREE MANAGED SERVICE FAMILIES
// ==========================================

const serviceFamilies = [
  {
    number: "01",
    title: "Cloud Application Support",
    subtitle: "Manage the applications your business depends on",
    icon: Code2,
    description:
      "Structured support for cloud-hosted software, application changes, quality assurance, and integrations.",
    offerings: [
      "Application maintenance and upgrades",
      "Application performance and issue investigation",
      "Testing and quality assurance processes",
      "Cloud API and integration management",
      "Release readiness and change support",
    ],
  },
  {
    number: "02",
    title: "Security Operations",
    subtitle: "Maintain visibility into security risks",
    icon: ShieldCheck,
    description:
      "Operational security practices that support configuration review, threat visibility, and coordinated incident handling.",
    offerings: [
      "Security monitoring and alert assessment",
      "SIEM and security event integration planning",
      "Identity and access configuration reviews",
      "Vulnerability and remediation tracking",
      "Incident response and recovery planning",
    ],
  },
  {
    number: "03",
    title: "CloudOps",
    subtitle: "Operate and improve cloud infrastructure",
    icon: Cloud,
    description:
      "Cloud engineering and operational practices focused on monitoring, automation, reliability, and cost management.",
    offerings: [
      "Infrastructure operations and monitoring",
      "DevSecOps and deployment automation",
      "DataOps and supported data workflows",
      "FinOps and resource optimization",
      "Configuration and infrastructure management",
    ],
  },
];

// ==========================================
// OPERATING PRINCIPLES
// ==========================================

const operatingPrinciples = [
  {
    title: "Operational Visibility",
    description:
      "Use monitoring, alerts, dashboards, and service records to understand the health and behavior of managed environments.",
    icon: Activity,
  },
  {
    title: "Controlled Changes",
    description:
      "Apply appropriate review, testing, approval, deployment, and rollback procedures when modifying important systems.",
    icon: GitBranch,
  },
  {
    title: "Clear Responsibilities",
    description:
      "Document support boundaries, escalation paths, service ownership, and the responsibilities shared between teams.",
    icon: Headset,
  },
  {
    title: "Continuous Improvement",
    description:
      "Review incidents, recurring issues, capacity, security findings, and resource usage to identify practical improvements.",
    icon: RefreshCw,
  },
];

// ==========================================
// MANAGEMENT LIFECYCLE
// ==========================================

const lifecycle = [
  {
    number: "01",
    title: "Observe",
    description:
      "Collect relevant health information, events, metrics, and logs.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review service conditions, alerts, risks, and operational priorities.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Investigate issues and follow agreed escalation and response procedures.",
  },
  {
    number: "04",
    title: "Maintain",
    description:
      "Carry out approved changes, updates, and routine operational activities.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review outcomes and identify automation, security, and efficiency improvements.",
  },
];

// ==========================================
// MANAGED SERVICES APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Environment & Service Discovery",
    description:
      "Review existing cloud accounts, applications, infrastructure, integrations, monitoring tools, operational processes, and current responsibilities.",
  },
  {
    number: "02",
    title: "Scope & Operational Planning",
    description:
      "Define the intended service coverage, support boundaries, escalation procedures, access requirements, maintenance activities, and measurable operating expectations.",
  },
  {
    number: "03",
    title: "Monitoring & Operational Baseline",
    description:
      "Establish or review appropriate monitoring, alerts, dashboards, documentation, asset inventories, and configuration records before transitioning operational responsibilities.",
  },
  {
    number: "04",
    title: "Service Transition & Validation",
    description:
      "Validate access, operating procedures, alert routing, backup expectations, incident workflows, and other agreed readiness requirements.",
  },
  {
    number: "05",
    title: "Ongoing Service Operations",
    description:
      "Perform agreed monitoring, support, maintenance, issue investigation, and change-management activities within documented service responsibilities.",
  },
  {
    number: "06",
    title: "Review & Optimization",
    description:
      "Review service trends, incidents, resource usage, costs, and improvement opportunities through an agreed operational review process.",
  },
];

const audiences = [
  "Organizations running business-critical applications across cloud infrastructure and managed services.",
  "Businesses looking to improve monitoring, maintenance, and operational support processes.",
  "Teams managing cloud costs, security configurations, deployment automation, and recurring infrastructure tasks.",
  "Organizations seeking a clearer operating model for cloud applications, databases, and infrastructure.",
];

// ==========================================
// REUSABLE SCROLL ANIMATION
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
              y: direction === "up" ? 24 : 0,
              x:
                direction === "left"
                  ? -24
                  : direction === "right"
                    ? 24
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
        duration: reduceMotion ? 0 : 0.66,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

// ==========================================
// REUSABLE SECTION LABEL
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
// SHARED CARD STYLING
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN MANAGED SERVICES PAGE
// ==========================================

export default function ManagedServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="managed-title"
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

          {/* HERO CONTENT */}

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
              Cloud / Managed Services
            </Eyebrow>

            <h1
              id="managed-title"
              className="max-w-[760px] text-[clamp(2.65rem,5.1vw,5.35rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Keep your cloud

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                running with
              </span>

              confidence.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Simplify cloud operations with structured
              monitoring, application support, infrastructure
              management, security practices, and continuous
              optimization. Help your teams focus on business
              priorities while maintaining operational
              visibility.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Managed Services

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
                  Managed Cloud Operations
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Monitor. Maintain. Improve.
                </p>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — MANAGED SERVICES INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="managed-intro"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Managed Services Perspective
            </Eyebrow>

            <h2
              id="managed-intro"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Reliable operations.

              <span className="block text-[#8B58AC]">
                Greater business focus.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Managed cloud services help organizations
              maintain a structured approach to operating
              applications, infrastructure, and supporting
              cloud technologies.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                After cloud workloads are deployed, they
                require continuous attention to availability,
                system health, configuration, security,
                performance, and changing application
                requirements. These responsibilities can
                become increasingly complex as environments
                grow.
              </p>

              <p>
                A managed services approach helps establish
                clear processes for monitoring, maintenance,
                incident response, controlled changes, and
                operational reviews. It can complement
                internal technical teams by defining which
                responsibilities are handled internally and
                which are included in an agreed service
                arrangement.
              </p>

              <p>
                Cloudlem focuses on combining cloud
                engineering practices with practical service
                management. We consider reliability,
                security, automation, infrastructure
                visibility, and cost management to help
                organizations maintain an understandable
                and manageable cloud environment.
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
            aria-labelledby={`managed-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >

            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL TEXT */}

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
                  id={`managed-pillar-${section.number}`}
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
        aria-labelledby="managed-feature"
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
              Managed Cloud Operations
            </p>

            <h2
              id="managed-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Less complexity.

              <span className="block text-[#DDB8F1]">
                More operational clarity.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Structured cloud management helps teams
              understand service health, coordinate
              maintenance, improve security practices, and
              respond more effectively to changing
              operational needs.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — MANAGED SERVICES CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="managed-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="managed-capabilities"
            eyebrow="Our Managed Cloud Offerings"
            title="Cloud managed"
            highlight="service capabilities."
            description="From cloud infrastructure monitoring and application maintenance to security operations, automation, and cost optimization, these capabilities support ongoing cloud management."
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

                  <article className={`${cardStyle} min-h-[285px]`}>

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
          08 — THREE MANAGED SERVICE FAMILIES
      ====================================== */}

      <section
        aria-labelledby="managed-families"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="managed-families"
            eyebrow="Managed Service Areas"
            title="Three areas of"
            highlight="cloud management."
            description="Managed cloud support can be organized around applications, security, and infrastructure operations. The specific responsibilities and coverage are defined by each service engagement."
          />

          {/* SERVICE FAMILY CARDS */}

          <div className="grid gap-5 lg:grid-cols-3">

            {serviceFamilies.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.number}
                  delay={index * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[490px] bg-[#FCFAFE]`}
                  >

                    <div className="flex items-start justify-between">

                      <span className={iconStyle}>

                        <Icon
                          size={26}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {service.number}
                      </span>

                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8755A6]">
                      {service.subtitle}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.26] tracking-[-0.035em] text-[#30213B]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Areas of Support
                      </p>

                      <ul className="space-y-3">

                        {service.offerings.map((offering) => (
                          <li
                            key={offering}
                            className="flex items-start gap-3"
                          >

                            <Check
                              size={17}
                              strokeWidth={2}
                              aria-hidden="true"
                              className="mt-0.5 shrink-0 text-[#8755A6]"
                            />

                            <span className="text-[14px] leading-[1.7] text-[#51465C]">
                              {offering}
                            </span>

                          </li>
                        ))}

                      </ul>

                    </div>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          09 — OPERATING PRINCIPLES
      ====================================== */}

      <section
        aria-labelledby="managed-principles"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="managed-principles"
            eyebrow="Operational Management Principles"
            title="Operations guided"
            highlight="by clear processes."
            description="Dependable service management requires visibility, documented responsibilities, controlled changes, and regular review. These practices help teams coordinate ongoing cloud operations."
          />

          <div className="grid gap-5 md:grid-cols-2">

            {operatingPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={(index % 2) * 0.07}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[220px]`}>

                    <span className={iconStyle}>

                      <Icon
                        size={26}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />

                    </span>

                    <h3 className="mt-5 text-[22px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[570px] text-[15px] leading-[1.75] text-[#665A70]">
                      {item.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

          {/* OPERATIONAL HIGHLIGHTS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Alerts & Escalation",
                icon: BellRing,
              },
              {
                label: "Infrastructure Health",
                icon: Server,
              },
              {
                label: "Security & Accountability",
                icon: ShieldCheck,
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
          10 — MANAGED OPERATIONS LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="managed-lifecycle"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="managed-lifecycle"
            eyebrow="Managed Operations Lifecycle"
            title="A repeatable cycle"
            highlight="of service improvement."
            description="Managed cloud operations benefit from a structured cycle that connects monitoring, prioritization, response, maintenance, and learning."
          />

          {/* FIVE-STAGE LIFECYCLE */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {lifecycle.map((stage, index) => (
              <li
                key={stage.number}
                className="min-w-0"
              >

                <Reveal
                  delay={(index % 5) * 0.045}
                  className="h-full"
                >

                  <div className="flex h-full min-h-[235px] flex-col rounded-[16px] border border-[#E1D1EA] bg-[#FCFAFE] p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                    <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                      STAGE {stage.number}
                    </span>

                    <span className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5F8] text-[#8250A4]">

                      {index < lifecycle.length - 1 ? (
                        <ArrowRight
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      ) : (
                        <RefreshCw
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      )}

                    </span>

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

          {/* LIFECYCLE SUPPORTING AREAS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Service Health Validation",
                icon: SearchCheck,
              },
              {
                label: "Incident & Change Procedures",
                icon: Workflow,
              },
              {
                label: "Cost & Resource Review",
                icon: CircleDollarSign,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E3D4ED] bg-[#F7F2FB] px-5 py-4 text-[#493456]"
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
          11 — MANAGED SERVICES IMPLEMENTATION
      ====================================== */}

      <section
        aria-labelledby="managed-approach"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* IMPLEMENTATION INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Managed Services Approach
            </Eyebrow>

            <h2
              id="managed-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              From onboarding

              <span className="block text-[#8B57AB]">
                to ongoing operations.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Introducing managed services begins with
              understanding the existing environment,
              current responsibilities, and operational
              expectations. A structured transition helps
              establish visibility, ownership, and suitable
              service procedures.
            </p>

            {/* OPERATIONAL AGREEMENT HIGHLIGHT */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-white p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Service scope, support hours, response
                targets, security responsibilities, and
                any service-level commitments should be
                agreed and documented before delivery.
              </p>

            </div>

          </Reveal>

          {/* SIX-STEP IMPLEMENTATION TIMELINE */}

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

                  <div className="rounded-[14px] border border-[#ECE2F2] bg-white p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#FDFCFF] motion-safe:hover:translate-x-1 sm:p-6">

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
          12 — WHO WE HELP
      ====================================== */}

      <section
        aria-labelledby="managed-audiences"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="managed-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Managed cloud services

              <span className="block text-[#8B57AB]">
                for evolving businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Managed Services can support organizations
              seeking clearer operational processes,
              stronger cloud visibility, and more
              consistent management of applications
              and infrastructure.
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

                <div className="group flex h-full min-h-[168px] flex-col rounded-[15px] border border-[#E8DCF0] bg-[#FCFAFE] p-6 shadow-[0_8px_22px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#CBA9DF] hover:shadow-[0_16px_36px_rgba(70,34,99,0.08)] motion-safe:hover:-translate-y-1">

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
          13 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="managed-cta"
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
              id="managed-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to simplify

              <span className="block text-[#F0D9FA]">
                your cloud operations?
              </span>
            </h2>

          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your cloud infrastructure,
              applications, support challenges, monitoring
              needs, and operational goals. We can discuss
              an appropriate managed services approach
              for your environment.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Managed Services

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
      ====================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
