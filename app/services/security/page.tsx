
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
  BookOpen,
  Bug,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  Eye,
  FileSearch,
  Fingerprint,
  GitBranch,
  HardDrive,
  Laptop,
  LifeBuoy,
  LockKeyhole,
  Network,
  Radar,
  SearchCheck,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — SECURITY
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Security";

const featuredServices = [
  {
    number: "01",
    title: "DevSecOps & CI/CD Security",
    description:
      "Build security into every release with automated code, dependency, secrets, and infrastructure checks across your delivery pipelines.",
    href: "/services/security/devsecops",
    icon: GitBranch,
    details: ["Secure CI/CD workflows", "Automated security gates", "Secrets and supply chain controls"],
  },
  {
    number: "02",
    title: "Cloud Security & Posture Management",
    description:
      "Assess and strengthen AWS, Azure, and Google Cloud environments through identity reviews, configuration hardening, and prioritized remediation.",
    href: "/services/security/cloud-security",
    icon: Cloud,
    details: ["Multi-cloud posture reviews", "IAM and network hardening", "Risk-based remediation"],
  },
  {
    number: "03",
    title: "Kubernetes & Container Security",
    description:
      "Protect Kubernetes platforms and container workloads with secure configuration, image controls, and workload-focused guardrails.",
    href: "/services/security/kubernetes-security",
    icon: ShieldCheck,
    details: ["EKS, AKS and GKE", "Container image scanning", "Cluster and runtime controls"],
  },
];

// ORIGINAL CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  governance: "/images/backgrounds/section-3-1.jpg",
  technology: "/images/backgrounds/section-2-2.jpg",
  operations: "/images/backgrounds/section-1-4.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
};

// ==========================================
// EDITORIAL CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Governance, Risk & Compliance",
    title: "Build security",
    highlight: "around business priorities.",
    image: images.governance,
    alt: "Enterprise technology representing cybersecurity governance",
    paragraphs: [
      "Cybersecurity is not limited to installing tools or responding to technical alerts. Organizations need to understand the information and systems they depend on, the threats that could affect them, and the responsibilities required to manage security risks effectively.",
      "Governance, Risk and Compliance, commonly called GRC, provides a structured approach to security policies, risk assessments, control ownership, and operational accountability. Frameworks and recognized standards can help organizations identify gaps and prioritize improvements according to their business environment.",
      "Cloudlem approaches security governance by considering infrastructure, applications, business processes, information sensitivity, and operational priorities. We focus on practical risk identification, security configuration assessment, documented policies, and improvement planning rather than treating compliance as a one-time exercise.",
    ],
    points: [
      "Security strategy, policies, and procedures",
      "Risk assessments and control-gap analysis",
      "Security benchmarking and compliance readiness",
    ],
  },
  {
    number: "02",
    eyebrow: "Security Architecture & Technology",
    title: "Protect your systems",
    highlight: "at every critical layer.",
    image: images.technology,
    alt: "Cloud infrastructure representing layered security controls",
    paragraphs: [
      "Modern IT environments contain cloud workloads, business applications, databases, endpoints, networks, identities, and external integrations. Each component introduces security requirements that must be considered within the wider technology architecture.",
      "A layered security approach combines appropriate technical controls with reliable operational processes. Identity management, endpoint protection, application security, network segmentation, logging, and data protection help organizations reduce unnecessary exposure and understand how their environments are being used.",
      "Cloudlem evaluates security technologies based on actual system requirements and existing architecture. We consider implementation complexity, visibility, access permissions, configuration management, and integration with operational tools so security controls remain understandable and maintainable.",
    ],
    points: [
      "Cloud, network, and application security",
      "Identity, privileged access, and endpoint protection",
      "Security logging, monitoring, and data protection",
    ],
  },
  {
    number: "03",
    eyebrow: "Threat & Vulnerability Management",
    title: "Identify weaknesses",
    highlight: "before they become incidents.",
    image: images.operations,
    alt: "Connected technology representing security monitoring",
    paragraphs: [
      "Security risks change as software is updated, new systems are deployed, infrastructure configurations evolve, and vulnerabilities are discovered. Organizations need ways to identify meaningful weaknesses and understand which issues require the most urgent attention.",
      "Threat and vulnerability management brings together asset visibility, security assessment, scanning, configuration reviews, prioritization, and remediation tracking. Security events and technical findings should be evaluated in context, including system exposure, asset importance, exploitability, and available compensating controls.",
      "Cloudlem focuses on practical assessment and remediation planning. We consider how vulnerabilities affect the specific environment, how proposed fixes could affect running services, and what validation is needed after an approved change. The objective is to reduce risk without introducing unnecessary operational disruption.",
    ],
    points: [
      "Vulnerability assessment and risk prioritization",
      "Security configuration and infrastructure hardening",
      "Remediation planning, validation, and reporting",
    ],
  },
];

// ==========================================
// NINE SECURITY CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Security Governance & Risk",
    description:
      "Evaluate security responsibilities, policies, risk exposure, control gaps, and improvement priorities using frameworks appropriate to the organization.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Cloud Security Assessment",
    description:
      "Review cloud identities, permissions, network exposure, workload configurations, logging, storage access, and other important cloud security controls.",
    icon: Cloud,
  },
  {
    number: "03",
    title: "Identity & Access Security",
    description:
      "Assess authentication, authorization, privileged accounts, least-privilege permissions, access reviews, and identity-related operational processes.",
    icon: Fingerprint,
  },
  {
    number: "04",
    title: "Application Security",
    description:
      "Evaluate application security requirements, dependency risks, authentication flows, exposed interfaces, and secure development practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Vulnerability Management",
    description:
      "Support asset-based vulnerability reviews, severity assessment, remediation planning, tracking, and verification of approved fixes.",
    icon: Bug,
  },
  {
    number: "06",
    title: "Security Monitoring & SIEM",
    description:
      "Plan centralized security event collection, useful alert rules, dashboards, detection workflows, and integration with appropriate security monitoring tools.",
    icon: Radar,
  },
  {
    number: "07",
    title: "Endpoint & Server Security",
    description:
      "Review endpoint protection, server hardening, operating-system updates, security configuration, and monitoring needs across supported devices.",
    icon: Laptop,
  },
  {
    number: "08",
    title: "Network & Infrastructure Security",
    description:
      "Assess network segmentation, secure connectivity, firewall rules, public exposure, infrastructure configurations, and associated monitoring.",
    icon: Network,
  },
  {
    number: "09",
    title: "Incident Response Readiness",
    description:
      "Help define incident classification, escalation, investigation procedures, evidence handling considerations, recovery planning, and communication responsibilities.",
    icon: LifeBuoy,
  },
];

// ==========================================
// THREE SECURITY SERVICE PILLARS
// ==========================================

const securityPillars = [
  {
    number: "01",
    title: "Governance, Risk & Compliance",
    subtitle: "Establish a stronger security foundation",
    icon: BookOpen,
    description:
      "Security management begins with clear policies, defined responsibilities, suitable controls, and an understanding of the risks affecting the business.",
    offerings: [
      "Information security strategy and planning",
      "Security policies and operational procedures",
      "Risk assessment and control mapping",
      "CIS configuration benchmark reviews",
      "ISO-aligned gap and readiness assessments",
    ],
  },
  {
    number: "02",
    title: "Security Technology",
    subtitle: "Strengthen protection and visibility",
    icon: ShieldCheck,
    description:
      "Appropriate security technologies support identity protection, threat visibility, application controls, and safeguarding business information.",
    offerings: [
      "Security information and event management",
      "Cloud and application security controls",
      "Privileged access and identity management",
      "Endpoint detection and protection planning",
      "Data, database, email, and web protection",
    ],
  },
  {
    number: "03",
    title: "Security Operations",
    subtitle: "Support continuous risk management",
    icon: Activity,
    description:
      "Security operations organize the people, processes, monitoring tools, and response procedures used to identify and investigate potential security events.",
    offerings: [
      "Security monitoring and event review",
      "Vulnerability remediation tracking",
      "Threat investigation and escalation",
      "Incident response and recovery procedures",
      "Infrastructure hardening and validation",
    ],
  },
];

// ==========================================
// SOC OPERATING MODELS
// ==========================================

const socModels = [
  {
    number: "01",
    title: "On-Premises SOC",
    icon: Server,
    description:
      "A security operations model using monitoring infrastructure and operational resources located within an organization's controlled environment.",
    considerations: [
      "Locally managed security tooling",
      "Internal network and event visibility",
      "Defined staffing and escalation processes",
    ],
  },
  {
    number: "02",
    title: "Hybrid SOC",
    icon: GitBranch,
    description:
      "An operating model that combines internal security responsibilities with selected external services, tools, or specialist support.",
    considerations: [
      "Shared incident-handling responsibilities",
      "Integrated logging and security platforms",
      "Coordinated monitoring and escalation",
    ],
  },
  {
    number: "03",
    title: "Remote SOC",
    icon: Eye,
    description:
      "A monitoring model in which authorized security teams work with centrally collected events and approved remote operational access.",
    considerations: [
      "Secure remote event visibility",
      "Clear monitoring coverage and response scope",
      "Documented communication and escalation",
    ],
  },
];

// ==========================================
// SECURITY ASSESSMENT AREAS
// ==========================================

const assessmentAreas = [
  {
    title: "Static Application Security Testing",
    subtitle: "SAST",
    icon: FileSearch,
    description:
      "Review source code or intermediate artifacts using suitable static analysis tools to identify potential weaknesses before deployment.",
  },
  {
    title: "Dynamic Application Security Testing",
    subtitle: "DAST",
    icon: SearchCheck,
    description:
      "Assess the externally observable behavior of authorized running applications to identify common security weaknesses and configuration issues.",
  },
  {
    title: "Software Composition Analysis",
    subtitle: "SCA",
    icon: GitBranch,
    description:
      "Review application dependencies and known component vulnerabilities, including outdated or unsupported third-party packages.",
  },
  {
    title: "Mobile Application Security",
    subtitle: "Mobile Assessment",
    icon: Laptop,
    description:
      "Evaluate approved mobile applications for relevant authentication, storage, communication, and platform security concerns.",
  },
  {
    title: "Infrastructure Security Assessment",
    subtitle: "Configuration Review",
    icon: Server,
    description:
      "Assess server, network, cloud, and operating-system configurations against documented security requirements and appropriate baselines.",
  },
  {
    title: "Authorized Security Testing",
    subtitle: "Scoped Assessment",
    icon: ShieldAlert,
    description:
      "Plan permitted, carefully scoped security testing to help evaluate relevant controls, exposure, detection, and response readiness.",
  },
];

// ==========================================
// SECURITY OPERATIONS LIFECYCLE
// ==========================================

const securityLifecycle = [
  {
    number: "01",
    title: "Identify",
    description:
      "Understand critical assets, relevant threats, weaknesses, and business risk.",
  },
  {
    number: "02",
    title: "Protect",
    description:
      "Apply appropriate access, configuration, application, and data controls.",
  },
  {
    number: "03",
    title: "Detect",
    description:
      "Use logs, alerts, monitoring, and analysis to identify potential incidents.",
  },
  {
    number: "04",
    title: "Respond",
    description:
      "Investigate events, communicate findings, and follow approved response procedures.",
  },
  {
    number: "05",
    title: "Recover & Improve",
    description:
      "Validate restoration, review lessons learned, and strengthen affected controls.",
  },
];

// ==========================================
// DELIVERY APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Security Discovery",
    description:
      "Understand the organization's systems, data, cloud environments, security requirements, existing tools, responsibilities, and important business risks.",
  },
  {
    number: "02",
    title: "Assessment & Gap Analysis",
    description:
      "Review relevant controls, exposed services, identity practices, configurations, vulnerabilities, and monitoring capabilities within the agreed scope.",
  },
  {
    number: "03",
    title: "Risk-Based Prioritization",
    description:
      "Evaluate findings using severity, exposure, business importance, exploitability, dependencies, and potential operational impact.",
  },
  {
    number: "04",
    title: "Security Improvement Planning",
    description:
      "Define appropriate technical controls, policy updates, remediation tasks, monitoring requirements, and approval or rollback considerations.",
  },
  {
    number: "05",
    title: "Implementation & Verification",
    description:
      "Carry out approved improvements through controlled changes and verify that security objectives are met without unnecessary service impact.",
  },
  {
    number: "06",
    title: "Monitoring & Continuous Review",
    description:
      "Reassess security posture, review new findings, evaluate operational events, and refine controls as technologies and business requirements change.",
  },
];

// ==========================================
// WHO WE HELP
// ==========================================

const audiences = [
  "Organizations seeking a clearer understanding of security risks across cloud and on-premises infrastructure.",
  "Businesses improving identity controls, endpoint protection, application security, and data safeguards.",
  "Teams responding to vulnerability reports, security assessments, or compliance-readiness requirements.",
  "Organizations developing security monitoring, incident response, and ongoing risk-management processes.",
];

// ==========================================
// ACCESSIBLE ANIMATION COMPONENT
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
              y: direction === "up" ? 24 : 0,
              x:
                direction === "left"
                  ? -24
                  : direction === "right"
                    ? 24
                    : 0,
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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
// SECTION EYEBROW
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
          className="text-[clamp(2.3rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30243B]"
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
// SHARED PREMIUM CARD STYLES
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN SECURITY PAGE
// ==========================================

export default function SecurityPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="security-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >

        {/* AMBIENT LAVENDER GLOW */}

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
              Security / Cybersecurity Services
            </Eyebrow>

            <h1
              id="security-title"
              className="max-w-[760px] text-[clamp(2.65rem,5.1vw,5.3rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Protect what

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                matters most
              </span>

              to your business.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Build a stronger cybersecurity foundation
              through practical risk management, cloud
              security, application protection, threat
              visibility, and responsible security
              operations.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Security Needs

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#featured-security-services"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-colors hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Explore Security Services

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

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[320px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Cloudlem Security
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Assess. Protect. Improve.
                </p>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — SECURITY INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="security-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Security Perspective
            </Eyebrow>

            <h2
              id="security-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Security built

              <span className="block text-[#8B58AC]">
                into digital operations.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Protecting business information, applications,
              and infrastructure requires a coordinated
              approach to people, processes, and technology.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                As organizations adopt cloud services,
                digital applications, remote access,
                and connected systems, their security
                responsibilities become increasingly
                complex. Different technologies introduce
                different vulnerabilities and operating
                requirements.
              </p>

              <p>
                Effective security combines risk assessment,
                preventive controls, vulnerability management,
                operational monitoring, and preparedness for
                potential incidents. These activities must
                be aligned with the systems and information
                most important to the business.
              </p>

              <p>
                Cloudlem approaches cybersecurity through
                practical technical assessments, secure
                infrastructure practices, appropriate
                security technologies, and structured
                improvement. The objective is to help
                organizations understand their risks
                and make informed security decisions.
              </p>

            </div>

          </Reveal>

        </div>
      </section>

      {/* THREE FEATURED SECURITY SERVICES */}
      <section
        id="featured-security-services"
        aria-labelledby="featured-security-heading"
        className="scroll-mt-24 border-y border-[#EEE4F4] bg-[#FBF8FE] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">
          <SectionHeader
            id="featured-security-heading"
            eyebrow="Specialist Security Services"
            title="Three focused ways"
            highlight="to reduce risk."
            description="Explore Cloudlem's dedicated services in secure software delivery, multi-cloud protection, and Kubernetes security. Each engagement is shaped around your environment and priorities."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.href} delay={index * 0.08} className="h-full">
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-[22px] border border-[#E5D8EC] bg-white p-7 shadow-[0_18px_45px_rgba(75,38,103,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BB96D1] hover:shadow-[0_26px_55px_rgba(75,38,103,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className={iconStyle}><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
                      <span className="text-xs font-bold tabular-nums text-[#AF8FC4]">{service.number}</span>
                    </div>
                    <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.04em] text-[#30213B]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">{service.description}</p>
                    <ul className="my-7 space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#544761]">
                          <Check size={16} className="mt-1 shrink-0 text-[#8750A7]" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-3 border-t border-[#EEE5F4] pt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#713F96]">
                      Explore Service
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
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
            aria-labelledby={`security-editorial-${section.number}`}
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
                  id={`security-editorial-${section.number}`}
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
        aria-labelledby="security-feature"
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
              A Stronger Cybersecurity Foundation
            </p>

            <h2
              id="security-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Understand the risk.

              <span className="block text-[#DDB8F1]">
                Strengthen the defense.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Security is an ongoing responsibility.
              A clear understanding of assets, potential
              threats, technical weaknesses, and operational
              controls helps organizations prioritize
              meaningful improvements.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — SECURITY CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="security-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="security-capabilities"
            eyebrow="Our Cybersecurity Offerings"
            title="Enterprise security"
            highlight="capabilities."
            description="From governance and vulnerability management to cloud security, monitoring, and incident readiness, these capabilities address important parts of an organization's security posture."
          />

          {/* NINE SECURITY CAPABILITY CARDS */}

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
          08 — THREE SECURITY SERVICE PILLARS
      ====================================== */}

      <section
        aria-labelledby="security-pillars"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="security-pillars"
            eyebrow="Security Service Areas"
            title="Three pillars of"
            highlight="effective security."
            description="A strong security approach connects organizational governance, suitable technology controls, and operational procedures for monitoring and response."
          />

          {/* SECURITY PILLAR CARDS */}

          <div className="grid gap-5 lg:grid-cols-3">

            {securityPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.number}
                  delay={index * 0.07}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[510px] bg-[#FCFAFE]`}
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
                        {pillar.number}
                      </span>

                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8653A5]">
                      {pillar.subtitle}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.28] tracking-[-0.035em] text-[#30213B]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">
                      {pillar.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Focus Areas
                      </p>

                      <ul className="space-y-3">

                        {pillar.offerings.map((offering) => (
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
          09 — SECURITY OPERATIONS CENTER MODELS
      ====================================== */}

      <section
        aria-labelledby="security-soc"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="security-soc"
            eyebrow="Security Operations Center"
            title="Security monitoring"
            highlight="built around your environment."
            description="Organizations can structure Security Operations Center functions in several ways. The appropriate model depends on existing capabilities, security requirements, staffing, monitoring coverage, and budget."
          />

          {/* THREE SOC MODELS */}

          <div className="grid gap-5 lg:grid-cols-3">

            {socModels.map((model, index) => {
              const Icon = model.icon;

              return (
                <Reveal
                  key={model.number}
                  delay={index * 0.07}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[425px]`}>

                    <div className="flex items-start justify-between">

                      <span className={iconStyle}>
                        <Icon
                          size={26}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {model.number}
                      </span>

                    </div>

                    <h3 className="mt-6 text-[23px] font-semibold leading-[1.26] tracking-[-0.035em] text-[#30213B]">
                      {model.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">
                      {model.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Planning Considerations
                      </p>

                      <ul className="space-y-3">

                        {model.considerations.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3"
                          >

                            <Check
                              size={17}
                              strokeWidth={2}
                              aria-hidden="true"
                              className="mt-0.5 shrink-0 text-[#8755A6]"
                            />

                            <span className="text-[14px] leading-[1.7] text-[#51465C]">
                              {item}
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

          {/* ORIGINAL SOC DISCLAIMER */}

          <p className="mt-6 max-w-[850px] text-[14px] leading-[1.8] text-[#665A70]">
            These are common SOC operating models presented
            for security planning. Monitoring hours, staffing,
            incident-response coverage, and service commitments
            depend on the actual scope of an engagement.
          </p>

        </div>
      </section>

      {/* ======================================
          10 — SECURITY ASSESSMENT & TESTING
      ====================================== */}

      <section
        aria-labelledby="security-assessments"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="security-assessments"
            eyebrow="Security Assessment & Testing"
            title="Find weaknesses."
            highlight="Prioritize improvements."
            description="Security assessments help organizations understand technical weaknesses and configuration risks. Testing should be authorized, clearly scoped, and appropriate for the systems being assessed."
          />

          {/* SIX SECURITY ASSESSMENT CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {assessmentAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[280px] bg-[#FCFAFE]`}
                  >

                    <span className={iconStyle}>
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {item.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

          {/* TESTING PRINCIPLES */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Authorized Scope",
                icon: LockKeyhole,
              },
              {
                label: "Risk-Based Remediation",
                icon: ShieldCheck,
              },
              {
                label: "Verification & Reporting",
                icon: Check,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E3D4ED] bg-[#FCFAFE] px-5 py-4 text-[#493456]"
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
          11 — SECURITY MANAGEMENT LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="security-lifecycle"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="security-lifecycle"
            eyebrow="Security Management Lifecycle"
            title="A continuous approach"
            highlight="to cyber resilience."
            description="Security requires ongoing assessment, prevention, detection, response, and learning. These activities help organizations refine their security posture as threats and technology change."
          />

          {/* FIVE-STAGE SECURITY LIFECYCLE */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {securityLifecycle.map((stage, index) => (

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

                      {index < securityLifecycle.length - 1 ? (
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
                label: "Risk & Governance",
                icon: Shield,
              },
              {
                label: "Monitoring & Detection",
                icon: Activity,
              },
              {
                label: "Continuity & Recovery",
                icon: HardDrive,
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
          12 — OUR SECURITY APPROACH
      ====================================== */}

      <section
        aria-labelledby="security-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* APPROACH INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Security Approach
            </Eyebrow>

            <h2
              id="security-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Practical protection.

              <span className="block text-[#8B57AB]">
                Clear improvement plans.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Security improvements should be guided
              by real technical findings, business
              priorities, and operational constraints.
              Our approach emphasizes understanding
              the environment before recommending changes.
            </p>

            {/* SECURITY PRINCIPLE CARD */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Changes to production security controls
                should include authorization, appropriate
                backups, validation, and a clear rollback
                or recovery plan.
              </p>

            </div>

          </Reveal>

          {/* SIX-STEP IMPLEMENTATION TIMELINE */}

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
          13 — WHO WE HELP
      ====================================== */}

      <section
        aria-labelledby="security-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          {/* AUDIENCE INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="security-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Cybersecurity for

              <span className="block text-[#8B57AB]">
                connected businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Security services are relevant to
              organizations seeking stronger protection
              for their infrastructure, applications,
              information, and daily operations.
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
          14 — FINAL SECURITY CTA
      ====================================== */}

      <section
        aria-labelledby="security-cta"
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

          {/* FINAL CTA HEADING */}

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="security-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to strengthen

              <span className="block text-[#F0D9FA]">
                your security posture?
              </span>
            </h2>

          </Reveal>

          {/* FINAL CTA CONTENT */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your infrastructure,
              applications, security requirements,
              vulnerability findings, or risk-management
              goals. We can discuss a practical approach
              for your organization.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Security Project

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
