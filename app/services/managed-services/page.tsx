
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
// CLOUDLEM — CLOUD MANAGED SERVICES
// ==========================================

const SERVICE_TITLE = "Managed Services";

// VERIFIED EXISTING CLOUDLEM IMAGE PATHS

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  application: "/images/backgrounds/section-1-4.jpg",
  operations: "/images/backgrounds/section-3-1.jpg",
  security: "/images/backgrounds/section-2-2.jpg",
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
// CLOUD MANAGED SERVICE CAPABILITIES
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

// ==========================================
// RELEVANT BUSINESS USE CASES
// ==========================================

const audiences = [
  "Organizations running business-critical applications across cloud infrastructure and managed services.",
  "Businesses looking to improve monitoring, maintenance, and operational support processes.",
  "Teams managing cloud costs, security configurations, deployment automation, and recurring infrastructure tasks.",
  "Organizations seeking a clearer operating model for cloud applications, databases, and infrastructure.",
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function ManagedServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO SECTION
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
                Cloud / Managed Services
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">

              Keep your cloud

              <span className="block text-[#B7B09F]">
                running with
              </span>

              confidence.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.8] sm:text-[17px]">
              Simplify cloud operations with
              structured monitoring, application
              support, infrastructure management,
              security practices, and continuous
              optimization. Help your teams focus
              on business priorities while
              maintaining operational visibility.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Managed Services

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
          SERVICE INTRODUCTION
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
                  Our Managed Services Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Reliable operations.

                <span className="block text-[#625C51]">
                  Greater business focus.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Managed cloud services help
                organizations maintain a
                structured approach to
                operating applications,
                infrastructure, and
                supporting cloud technologies.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  After cloud workloads are deployed,
                  they require continuous attention
                  to availability, system health,
                  configuration, security,
                  performance, and changing
                  application requirements.
                  These responsibilities can
                  become increasingly complex
                  as environments grow.
                </p>

                <p>
                  A managed services approach
                  helps establish clear processes
                  for monitoring, maintenance,
                  incident response, controlled
                  changes, and operational reviews.
                  It can complement internal
                  technical teams by defining
                  which responsibilities are
                  handled internally and which
                  are included in an agreed
                  service arrangement.
                </p>

                <p>
                  Cloudlem focuses on combining
                  cloud engineering practices
                  with practical service
                  management. We consider
                  reliability, security,
                  automation, infrastructure
                  visibility, and cost management
                  to help organizations maintain
                  an understandable and
                  manageable cloud environment.
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

                {/* TEXT */}

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

                {/* IMAGE */}

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
              Managed Cloud Operations
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">

              Less complexity.

              <span className="block text-[#B7B09F]">
                More operational clarity.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Structured cloud management
              helps teams understand service
              health, coordinate maintenance,
              improve security practices,
              and respond more effectively
              to changing operational needs.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          MANAGED SERVICES CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Managed Cloud Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Cloud managed

                <span className="block text-[#B7B09F]">
                  service capabilities.
                </span>
              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From cloud infrastructure
              monitoring and application
              maintenance to security
              operations, automation,
              and cost optimization,
              these capabilities support
              ongoing cloud management.
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
          THREE MANAGED SERVICE FAMILIES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Managed Service Areas
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Three areas of

                <span className="block text-[#625C51]">
                  cloud management.
                </span>
              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Managed cloud support
              can be organized around
              applications, security,
              and infrastructure operations.
              The specific responsibilities
              and coverage are defined
              by each service engagement.
            </p>

          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">

            {serviceFamilies.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {service.subtitle}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
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
                            className="mt-1 shrink-0"
                            aria-hidden="true"
                          />

                          <span className="text-[14px] leading-[1.7]">
                            {offering}
                          </span>

                        </li>
                      ))}

                    </ul>
                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          MANAGED OPERATIONS PRINCIPLES
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Operational Management Principles
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Operations guided

                <span className="block text-[#514C43]">
                  by clear processes.
                </span>
              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Dependable service management
              requires visibility, documented
              responsibilities, controlled
              changes, and regular review.
              These practices help teams
              coordinate ongoing cloud
              operations.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">

            {operatingPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.75]">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <BellRing size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Alerts & Escalation
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <Server size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Infrastructure Health
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <ShieldCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Security & Accountability
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          OPERATIONAL LIFECYCLE
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Managed Operations Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                A repeatable cycle

                <span className="block text-[#B7B09F]">
                  of service improvement.
                </span>
              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              Managed cloud operations
              benefit from a structured
              cycle that connects monitoring,
              prioritization, response,
              maintenance, and learning.
            </p>

          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="flex flex-col border border-[#B7B09F]/35 p-5"
              >

                <span className="text-[12px] font-bold text-[#B7B09F]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.03em]">
                  {stage.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-[#D8D2C8]/85">
                  {stage.description}
                </p>

                <ArrowRight
                  size={18}
                  className="mt-5 text-[#B7B09F]"
                  aria-hidden="true"
                />

              </article>
            ))}

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">

              <SearchCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Service Health Validation
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">

              <Workflow size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Incident & Change Procedures
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">

              <CircleDollarSign
                size={21}
                className="shrink-0"
              />

              <span className="text-[14px] font-semibold">
                Cost & Resource Review
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          MANAGED SERVICES IMPLEMENTATION
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <motion.div {...reveal}>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Managed Services Approach
                </p>

              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                From onboarding

                <span className="block text-[#625C51]">
                  to ongoing operations.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Introducing managed services
                begins with understanding
                the existing environment,
                current responsibilities,
                and operational expectations.
                A structured transition
                helps establish visibility,
                ownership, and suitable
                service procedures.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Service scope, support hours,
                  response targets, security
                  responsibilities, and any
                  service-level commitments
                  should be agreed and
                  documented before delivery.
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

                Managed cloud services

                <span className="block text-[#514C43]">
                  for evolving businesses.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Managed Services can support
                organizations seeking
                clearer operational processes,
                stronger cloud visibility,
                and more consistent management
                of applications and infrastructure.
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

                Ready to simplify

                <span className="block text-[#625C51]">
                  your cloud operations?
                </span>
              </h2>

            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your cloud
                infrastructure, applications,
                support challenges, monitoring
                needs, and operational goals.
                We can discuss an appropriate
                managed services approach
                for your environment.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Managed Services

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
