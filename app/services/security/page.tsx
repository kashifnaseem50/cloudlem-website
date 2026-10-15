
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
  BookOpen,
  Bug,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
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
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — SECURITY
// ==========================================

const SERVICE_TITLE = "Security";

// EXISTING VERIFIED CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  governance: "/images/backgrounds/section-3-1.jpg",
  technology: "/images/backgrounds/section-2-2.jpg",
  operations: "/images/backgrounds/section-1-4.jpg",
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
// SECURITY CAPABILITIES
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
// ORGANIZATIONS WE CAN SUPPORT
// ==========================================

const audiences = [
  "Organizations seeking a clearer understanding of security risks across cloud and on-premises infrastructure.",
  "Businesses improving identity controls, endpoint protection, application security, and data safeguards.",
  "Teams responding to vulnerability reports, security assessments, or compliance-readiness requirements.",
  "Organizations developing security monitoring, incident response, and ongoing risk-management processes.",
];

// ==========================================
// MAIN SECURITY PAGE
// ==========================================

export default function SecurityPage() {
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
                Security / Cybersecurity Services
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">
              Protect what

              <span className="block text-[#B7B09F]">
                matters most
              </span>

              to your business.
            </h1>

            <p className="mt-7 max-w-[710px] text-[16px] leading-[1.8] sm:text-[17px]">
              Build a stronger cybersecurity
              foundation through practical
              risk management, cloud security,
              application protection, threat
              visibility, and responsible
              security operations.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Security Needs
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
          SECURITY INTRODUCTION
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
                  Our Security Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Security built

                <span className="block text-[#625C51]">
                  into digital operations.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">
              <p className="text-[17px] font-semibold leading-[1.75]">
                Protecting business information,
                applications, and infrastructure
                requires a coordinated approach
                to people, processes, and
                technology.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  As organizations adopt cloud
                  services, digital applications,
                  remote access, and connected
                  systems, their security
                  responsibilities become
                  increasingly complex.
                  Different technologies
                  introduce different
                  vulnerabilities and
                  operating requirements.
                </p>

                <p>
                  Effective security combines
                  risk assessment, preventive
                  controls, vulnerability
                  management, operational
                  monitoring, and preparedness
                  for potential incidents.
                  These activities must be
                  aligned with the systems
                  and information most
                  important to the business.
                </p>

                <p>
                  Cloudlem approaches
                  cybersecurity through
                  practical technical
                  assessments, secure
                  infrastructure practices,
                  appropriate security
                  technologies, and
                  structured improvement.
                  The objective is to
                  help organizations
                  understand their risks
                  and make informed
                  security decisions.
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
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#181818] text-[#D8D2C8]">
                            <Check size={12} strokeWidth={2} aria-hidden="true" />
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
                  whileInView={{ opacity: 1, x: 0 }}
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
              A Stronger Cybersecurity Foundation
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Understand the risk.

              <span className="block text-[#B7B09F]">
                Strengthen the defense.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Security is an ongoing
              responsibility. A clear
              understanding of assets,
              potential threats, technical
              weaknesses, and operational
              controls helps organizations
              prioritize meaningful
              improvements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          SECURITY CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Cybersecurity Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Enterprise security

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From governance and
              vulnerability management to
              cloud security, monitoring,
              and incident readiness,
              these capabilities address
              important parts of an
              organization's security posture.
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
          THREE SECURITY PILLARS
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Security Service Areas
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Three pillars of

                <span className="block text-[#625C51]">
                  effective security.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              A strong security approach
              connects organizational
              governance, suitable
              technology controls, and
              operational procedures
              for monitoring and response.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-[12px] font-bold text-[#625C51]">
                      {pillar.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {pillar.subtitle}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {pillar.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
                      Focus Areas
                    </p>

                    <ul className="space-y-3">
                      {pillar.offerings.map((offering) => (
                        <li key={offering} className="flex items-start gap-3">
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
          SECURITY OPERATIONS CENTER MODELS
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Security Operations Center
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Security monitoring

                <span className="block text-[#514C43]">
                  built around your environment.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Organizations can structure
              Security Operations Center
              functions in several ways.
              The appropriate model depends
              on existing capabilities,
              security requirements, staffing,
              monitoring coverage, and budget.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {socModels.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-[12px] font-bold text-[#625C51]">
                      {model.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {model.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {model.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
                      Planning Considerations
                    </p>

                    <ul className="space-y-3">
                      {model.considerations.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            size={17}
                            className="mt-1 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-[14px] leading-[1.7]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 max-w-[850px] text-[14px] leading-[1.75] text-[#181818]/80">
            These are common SOC operating models presented for
            security planning. Monitoring hours, staffing,
            incident-response coverage, and service commitments
            depend on the actual scope of an engagement.
          </p>
        </div>
      </section>

      {/* ===================================
          SECURITY ASSESSMENT & TESTING
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Security Assessment & Testing
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Find weaknesses.

                <span className="block text-[#625C51]">
                  Prioritize improvements.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Security assessments help
              organizations understand
              technical weaknesses and
              configuration risks. Testing
              should be authorized, clearly
              scoped, and appropriate for
              the systems being assessed.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assessmentAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-[21px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <LockKeyhole size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Authorized Scope
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <ShieldCheck size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Risk-Based Remediation
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Check size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Verification & Reporting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          SECURITY LIFECYCLE
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Security Management Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                A continuous approach

                <span className="block text-[#B7B09F]">
                  to cyber resilience.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              Security requires ongoing
              assessment, prevention,
              detection, response, and
              learning. These activities
              help organizations refine
              their security posture as
              threats and technology change.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {securityLifecycle.map((stage) => (
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
              <Shield size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Risk & Governance
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">
              <Activity size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Monitoring & Detection
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">
              <HardDrive size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Continuity & Recovery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          OUR IMPLEMENTATION APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <motion.div {...reveal}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Security Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Practical protection.

                <span className="block text-[#625C51]">
                  Clear improvement plans.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Security improvements
                should be guided by real
                technical findings, business
                priorities, and operational
                constraints. Our approach
                emphasizes understanding
                the environment before
                recommending changes.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Changes to production
                  security controls should
                  include authorization,
                  appropriate backups,
                  validation, and a clear
                  rollback or recovery plan.
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
                Cybersecurity for

                <span className="block text-[#514C43]">
                  connected businesses.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[17px] font-medium leading-[1.75]">
                Security services are
                relevant to organizations
                seeking stronger protection
                for their infrastructure,
                applications, information,
                and daily operations.
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
                Ready to strengthen

                <span className="block text-[#625C51]">
                  your security posture?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your
                infrastructure, applications,
                security requirements,
                vulnerability findings,
                or risk-management goals.
                We can discuss a practical
                approach for your organization.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Security Project

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
