
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
  Boxes,
  Cable,
  Check,
  Cloud,
  HardDrive,
  Headset,
  Laptop,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Monitor,
  Network,
  Server,
  Settings2,
  ShieldCheck,
  UsersRound,
  Wifi,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — DIGITAL INFRASTRUCTURE SERVICES
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Digital Infrastructure Services";

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  infrastructure: "/images/backgrounds/section-1-4.jpg",
  networking: "/images/backgrounds/section-2-2.jpg",
  edge: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// EDITORIAL SERVICE CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Infrastructure Architecture & Transformation",
    title: "Build infrastructure",
    highlight: "that supports your business.",
    image: images.infrastructure,
    alt: "Technology infrastructure representing enterprise systems",
    paragraphs: [
      "Modern organizations depend on a combination of computing infrastructure, storage systems, applications, networks, and cloud platforms. Each component contributes to the ability of employees and customers to access digital services, exchange information, and complete essential business activities.",
      "Infrastructure transformation begins by understanding the existing environment and identifying where improvements are required. This may involve reviewing physical servers, virtualization platforms, operating systems, storage, application dependencies, and the operational challenges associated with aging or disconnected systems.",
      "Cloudlem approaches infrastructure design with attention to business requirements, technical compatibility, scalability, security, and maintainability. Whether an organization operates an on-premises data center, a hybrid environment, or multiple cloud platforms, the objective is to develop an infrastructure foundation that can adapt to future needs.",
    ],
    points: [
      "Data center and infrastructure architecture",
      "Server, storage, and virtualization planning",
      "Hybrid and multicloud infrastructure integration",
    ],
  },
  {
    number: "02",
    eyebrow: "Enterprise Network Services",
    title: "Connect your systems",
    highlight: "with secure, reliable networks.",
    image: images.networking,
    alt: "Connected computing infrastructure representing enterprise networks",
    paragraphs: [
      "Enterprise networks provide the connectivity that allows applications, employees, devices, and business locations to work together. As organizations adopt cloud services, remote working models, and distributed systems, network architecture becomes increasingly important to operational performance.",
      "Network design should consider how information moves between data centers, cloud environments, office locations, and external services. Routing, segmentation, bandwidth, wireless coverage, secure connectivity, and network monitoring all influence how effectively these systems communicate.",
      "Cloudlem evaluates network requirements alongside the applications and infrastructure they support. Our approach focuses on practical architecture, clear security boundaries, appropriate monitoring, and structured changes that help organizations understand and manage their connectivity.",
    ],
    points: [
      "Enterprise network design and architecture",
      "Cloud connectivity, segmentation, and secure access",
      "Network monitoring, wireless, and edge connectivity",
    ],
  },
  {
    number: "03",
    eyebrow: "Edge IT & Workplace Infrastructure",
    title: "Support the technology",
    highlight: "behind everyday productivity.",
    image: images.edge,
    alt: "Digital technology representing workplace and edge IT services",
    paragraphs: [
      "Business productivity depends on the devices, operating systems, applications, identities, and collaboration tools used by employees. Even when central infrastructure is performing well, problems at the endpoint or workplace level can interrupt access to important services.",
      "Edge IT support considers desktop and laptop environments, operating-system configuration, supported business applications, identity services, directory integration, security tooling, and device connectivity. Standardized configuration and documented troubleshooting processes can make these environments easier to maintain.",
      "Cloudlem approaches workplace infrastructure by evaluating the requirements of users, devices, existing systems, and organizational security policies. The goal is to support practical IT operations while maintaining appropriate access controls, compatibility, and clear procedures for maintenance and issue resolution.",
    ],
    points: [
      "Endpoint and operating-system management",
      "Identity, directory, and access management",
      "Workplace applications and collaboration support",
    ],
  },
];

// ==========================================
// INFRASTRUCTURE CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Infrastructure Advisory",
    description:
      "Assess existing infrastructure, capacity, technology dependencies, operational risks, and business requirements to establish practical modernization and investment priorities.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Server & Compute Infrastructure",
    description:
      "Plan and evaluate physical servers, virtual machines, operating systems, compute resources, and workload placement across supported environments.",
    icon: Server,
  },
  {
    number: "03",
    title: "Storage & Backup Solutions",
    description:
      "Review storage architecture, capacity, data protection, retention policies, backup coverage, and recovery requirements for important business systems.",
    icon: HardDrive,
  },
  {
    number: "04",
    title: "Virtualization & Container Platforms",
    description:
      "Evaluate virtualization technologies and container platforms that support appropriate workload isolation, deployment, resource management, and operational flexibility.",
    icon: Boxes,
  },
  {
    number: "05",
    title: "Enterprise Network Services",
    description:
      "Plan network architecture, routing, segmentation, secure connectivity, monitoring, and infrastructure changes based on business and application needs.",
    icon: Network,
  },
  {
    number: "06",
    title: "Hybrid & Multicloud Infrastructure",
    description:
      "Evaluate how on-premises infrastructure and cloud services can connect through suitable network, identity, security, and operating models.",
    icon: Cloud,
  },
  {
    number: "07",
    title: "Infrastructure Monitoring",
    description:
      "Improve operational visibility through infrastructure metrics, logs, availability checks, alerting, dashboards, and documented response procedures.",
    icon: Activity,
  },
  {
    number: "08",
    title: "Identity & Access Management",
    description:
      "Review identity services, directory integration, access permissions, authentication requirements, and appropriate account-management practices.",
    icon: LockKeyhole,
  },
  {
    number: "09",
    title: "IT Operations & Technical Support",
    description:
      "Support structured IT operations through troubleshooting procedures, service requests, operational documentation, maintenance planning, and escalation processes.",
    icon: Headset,
  },
];

// ==========================================
// INFRASTRUCTURE ENVIRONMENTS
// ==========================================

const infrastructureEnvironments = [
  {
    number: "01",
    title: "On-Premises Infrastructure",
    subtitle: "Physical and virtual environments",
    icon: Server,
    description:
      "Organizations maintaining local infrastructure require a clear approach to hardware lifecycle, operating systems, virtualization, storage, networking, and recovery planning.",
    offerings: [
      "Server and compute architecture",
      "Storage and capacity planning",
      "Virtualization and operating systems",
      "Data center networking",
      "Backup and recovery readiness",
    ],
  },
  {
    number: "02",
    title: "Hybrid Infrastructure",
    subtitle: "Connecting data centers and cloud",
    icon: Network,
    description:
      "Hybrid environments combine locally hosted workloads with cloud-based services. Successful designs account for secure connectivity, application dependencies, and shared operational responsibilities.",
    offerings: [
      "On-premises and cloud connectivity",
      "Workload and data placement",
      "Identity and access integration",
      "Monitoring across environments",
      "Security and configuration management",
    ],
  },
  {
    number: "03",
    title: "Multicloud Infrastructure",
    subtitle: "Coordinating multiple cloud platforms",
    icon: Cloud,
    description:
      "Using more than one cloud platform creates additional requirements for network design, governance, resource visibility, security, and consistent operational processes.",
    offerings: [
      "Multicloud architecture assessment",
      "Infrastructure standards and automation",
      "Cross-platform observability",
      "Access and security policy planning",
      "Resource and cost visibility",
    ],
  },
];

// ==========================================
// ENTERPRISE NETWORK SERVICES
// ==========================================

const networkServices = [
  {
    number: "01",
    title: "Data Center & Edge Networking",
    description:
      "Plan connectivity between servers, storage, business locations, applications, and edge systems with attention to capacity and network architecture.",
    icon: Network,
  },
  {
    number: "02",
    title: "Software-Defined Networking",
    description:
      "Evaluate policy-driven network controls and software-defined architectures when they provide practical operational and management benefits.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Network Design & Transformation",
    description:
      "Review network topology, routing, segmentation, cloud connections, dependencies, and modernization opportunities.",
    icon: Cable,
  },
  {
    number: "04",
    title: "Network Monitoring",
    description:
      "Establish monitoring for relevant network devices, interfaces, connectivity, latency, availability, and operational events.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Wireless & Workplace Connectivity",
    description:
      "Assess wireless coverage, device access, network configuration, and secure connectivity for workplace and mobile users.",
    icon: Wifi,
  },
  {
    number: "06",
    title: "Network Security & Access",
    description:
      "Plan appropriate security boundaries, traffic controls, authenticated access, and visibility into network configuration changes.",
    icon: ShieldCheck,
  },
];

// ==========================================
// EDGE IT & WORKPLACE SERVICES
// ==========================================

const edgeServices = [
  {
    title: "Devices & Hardware",
    description:
      "Review endpoint configuration, hardware compatibility, drivers, device connectivity, and troubleshooting procedures.",
    icon: Laptop,
  },
  {
    title: "Operating Systems",
    description:
      "Support operating-system configuration, maintenance planning, updates, and compatibility reviews for approved devices and servers.",
    icon: Monitor,
  },
  {
    title: "Endpoint Protection",
    description:
      "Assess endpoint security tools, configuration practices, updates, and procedures for investigating device-related security concerns.",
    icon: ShieldCheck,
  },
  {
    title: "Directory & Identity",
    description:
      "Evaluate directory services, account provisioning, user permissions, authentication, and identity integration requirements.",
    icon: UsersRound,
  },
  {
    title: "Collaboration Platforms",
    description:
      "Review deployment, configuration, access, and support requirements for business communication and collaboration tools.",
    icon: Headset,
  },
  {
    title: "Application Support",
    description:
      "Establish processes for approved software installation, compatibility, configuration, updates, and technical issue investigation.",
    icon: Settings2,
  },
];

// ==========================================
// INFRASTRUCTURE OPERATIONS LIFECYCLE
// ==========================================

const operatingPrinciples = [
  {
    number: "01",
    title: "Observe",
    description:
      "Monitor infrastructure health, connectivity, capacity, and relevant operational events.",
  },
  {
    number: "02",
    title: "Protect",
    description:
      "Review access, configuration, security controls, and important operational risks.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "Apply approved updates, maintenance activities, and controlled infrastructure changes.",
  },
  {
    number: "04",
    title: "Recover",
    description:
      "Prepare restoration procedures, recovery objectives, and incident-response processes.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review resource usage, recurring issues, technical debt, and modernization opportunities.",
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Infrastructure Discovery",
    description:
      "Understand the existing servers, networks, storage, applications, identities, cloud environments, and technical dependencies that support business operations.",
  },
  {
    number: "02",
    title: "Architecture & Requirements Assessment",
    description:
      "Evaluate workload needs, system capacity, security requirements, connectivity, availability expectations, operational risks, and existing technical limitations.",
  },
  {
    number: "03",
    title: "Solution Design & Planning",
    description:
      "Define an appropriate target architecture, implementation phases, required technologies, resource considerations, and operational responsibilities.",
  },
  {
    number: "04",
    title: "Implementation & Configuration",
    description:
      "Carry out approved infrastructure configuration or improvement activities using suitable change controls, documentation, and validation procedures.",
  },
  {
    number: "05",
    title: "Testing & Operational Handover",
    description:
      "Validate connectivity, system functionality, access, monitoring, backup expectations, and operational readiness before completing the handover.",
  },
  {
    number: "06",
    title: "Monitoring & Continuous Improvement",
    description:
      "Review infrastructure performance, capacity, security findings, support issues, and opportunities to simplify or strengthen the environment.",
  },
];

const audiences = [
  "Organizations managing on-premises servers, storage, virtualization, and business-critical infrastructure.",
  "Businesses connecting existing data centers with cloud platforms or transitioning to hybrid environments.",
  "Teams improving enterprise networking, wireless connectivity, monitoring, and infrastructure security.",
  "Organizations seeking clearer IT operations, endpoint management, identity processes, and recovery planning.",
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
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
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
// SHARED CARD STYLING
// ==========================================

const iconFrame =
  "flex h-13 w-13 shrink-0 items-center justify-center rounded-[14px] border border-[#E6D5F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EEDDF7] motion-safe:group-hover:scale-105";

const standardCard =
  "group flex h-full flex-col rounded-[17px] border border-[#E9DDF1] bg-white p-6 shadow-[0_10px_28px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D3B8E4] hover:shadow-[0_20px_46px_rgba(70,34,99,0.105)] motion-safe:hover:-translate-y-1 sm:p-7";

// ==========================================
// MAIN INFRASTRUCTURE PAGE
// ==========================================

export default function DigitalInfrastructureServicesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — HERO
      ====================================== */}

      <section
        aria-labelledby="infrastructure-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        {/* Ambient lighting */}

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
              Digital Infrastructure Services
            </Eyebrow>

            <h1
              id="infrastructure-title"
              className="max-w-[760px] text-[clamp(2.45rem,3.8vw,4.3rem)] font-semibold leading-[1.17] tracking-[-0.035em] text-[#291D34]"
            >
              Strong infrastructure.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Connected
              </span>

              possibilities.
            </h1>

            <p className="mt-7 max-w-[640px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Build and manage the technology foundation
              behind your business. Connect servers,
              networks, storage, cloud platforms, and
              workplace systems through reliable, secure,
              and maintainable infrastructure practices.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Infrastructure

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

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[320px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Digital Infrastructure
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Connect. Protect. Evolve.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="infra-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Infrastructure Perspective
            </Eyebrow>

            <h2
              id="infra-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Technology foundations

              <span className="block text-[#8B58AC]">
                built for business.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Effective digital infrastructure connects
              the technology that people, applications,
              and business operations depend on.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Enterprise infrastructure includes
                computing systems, storage, networking,
                cloud services, operating systems,
                workplace devices, and identity platforms.
                Together, these technologies provide the
                foundation for digital business activities.
              </p>

              <p>
                As organizations evolve, their infrastructure
                must support changing applications,
                distributed teams, new security requirements,
                and additional operational complexity.
                Aging systems, disconnected environments,
                and inconsistent management practices can
                make these changes harder to deliver.
              </p>

              <p>
                Cloudlem approaches digital infrastructure
                through technical assessment, structured
                architecture, appropriate implementation,
                operational monitoring, and continuous
                improvement. Our focus is on building a
                dependable environment that fits the
                organization&apos;s actual business needs.
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
            aria-labelledby={`infra-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >

            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* TEXT */}

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
                  id={`infra-pillar-${section.number}`}
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

              {/* IMAGE */}

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
        aria-labelledby="infra-feature"
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
              Connected Enterprise Infrastructure
            </p>

            <h2
              id="infra-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Reliable foundations.

              <span className="block text-[#DDB8F1]">
                Stronger digital operations.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Infrastructure should support business
              change rather than hold it back. Thoughtful
              architecture, secure connectivity,
              operational visibility, and maintainable
              systems help organizations build a more
              adaptable digital environment.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — INFRASTRUCTURE CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="infra-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Our Infrastructure Offerings
              </Eyebrow>

              <h2
                id="infra-capabilities"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Digital infrastructure

                <span className="block text-[#8855A9]">
                  capabilities.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                From servers and storage to virtualization,
                networking, monitoring, and workplace IT,
                these capabilities address the systems
                that support day-to-day business operations.
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
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${standardCard} min-h-[295px]`}
                  >

                    <div className="mb-7 flex items-start justify-between">

                      <span className={iconFrame}>

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
          08 — INFRASTRUCTURE ENVIRONMENTS
      ====================================== */}

      <section
        aria-labelledby="infra-environments"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Infrastructure Environments
              </Eyebrow>

              <h2
                id="infra-environments"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Infrastructure built

                <span className="block text-[#8855A9]">
                  for your environment.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                An effective infrastructure strategy
                should reflect where applications operate,
                how people access them, and which technical
                and business requirements must be supported.
              </p>

            </Reveal>

          </div>

          {/* ON-PREMISES / HYBRID / MULTICLOUD */}

          <div className="grid gap-5 lg:grid-cols-3">

            {infrastructureEnvironments.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={index * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${standardCard} min-h-[480px]`}
                  >

                    <div className="flex items-start justify-between">

                      <span className={iconFrame}>

                        <Icon
                          size={26}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {item.number}
                      </span>

                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.26] tracking-[-0.035em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {item.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Key Infrastructure Areas
                      </p>

                      <ul className="space-y-3">

                        {item.offerings.map((offering) => (
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
          09 — ENTERPRISE NETWORK SERVICES
      ====================================== */}

      <section
        aria-labelledby="infra-network"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Enterprise Network Services
              </Eyebrow>

              <h2
                id="infra-network"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Networks that connect

                <span className="block text-[#8855A9]">
                  your digital operations.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                Enterprise networks require thoughtful
                planning, secure connectivity, monitoring,
                and practical management. We consider
                network requirements alongside the
                applications, services, and users
                that depend on them.
              </p>

            </Reveal>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {networkServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${standardCard} min-h-[250px]`}
                  >

                    <div className="flex items-start justify-between">

                      <span className={iconFrame}>

                        <Icon
                          size={24}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {item.number}
                      </span>

                    </div>

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
          10 — EDGE IT & WORKPLACE
      ====================================== */}

      <section
        aria-labelledby="infra-edge"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Edge IT &amp; Workplace Technology
              </Eyebrow>

              <h2
                id="infra-edge"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Technology support

                <span className="block text-[#8855A9]">
                  closer to your people.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                Workplace infrastructure includes devices,
                operating systems, collaboration tools,
                user accounts, and network access.
                Clear technical support practices help
                maintain productivity and security.
              </p>

            </Reveal>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {edgeServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article
                    className={`${standardCard} min-h-[250px]`}
                  >

                    <span className={iconFrame}>

                      <Icon
                        size={24}
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
          11 — OPERATIONS LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="infra-lifecycle"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Infrastructure Operations Lifecycle
              </Eyebrow>

              <h2
                id="infra-lifecycle"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Manage infrastructure

                <span className="block text-[#8855A9]">
                  with confidence.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
                Dependable infrastructure needs ongoing
                visibility, routine maintenance, security
                review, recovery planning, and continuous
                operational improvement.
              </p>

            </Reveal>

          </div>

          {/* FIVE OPERATING PRINCIPLES */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

            {operatingPrinciples.map((item, index) => (
              <Reveal
                key={item.number}
                delay={(index % 5) * 0.045}
                className="h-full"
              >

                <article
                  className={`${standardCard} min-h-[240px]`}
                >

                  <span className="text-[11px] font-bold tracking-[0.1em] text-[#9867B7]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-[20px] font-semibold text-[#30213B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[14px] leading-[1.8] text-[#665A70]">
                    {item.description}
                  </p>

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="mt-5 text-[#A277C1] transition-transform motion-safe:group-hover:translate-x-1"
                  />

                </article>

              </Reveal>
            ))}

          </div>

          {/* SUPPORTING OPERATIONAL AREAS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Monitoring & Alerting",
                icon: Activity,
              },
              {
                label: "Security & Access",
                icon: ShieldCheck,
              },
              {
                label: "Recovery & Resilience",
                icon: LifeBuoy,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E6D8EF] bg-white px-5 py-4 text-[#493456]"
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
          12 — IMPLEMENTATION APPROACH
      ====================================== */}

      <section
        aria-labelledby="infra-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Infrastructure Approach
            </Eyebrow>

            <h2
              id="infra-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              From infrastructure

              <span className="block text-[#8B57AB]">
                planning to operations.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Infrastructure improvement requires
              careful consideration of existing
              applications, system dependencies,
              network connectivity, user requirements,
              operational risks, and long-term support.
            </p>

            {/* HIGHLIGHT */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Infrastructure changes should follow
                approved maintenance procedures,
                appropriate backups, technical validation,
                and documented recovery or rollback plans.
              </p>

            </div>

          </Reveal>

          {/* SIX-STEP TIMELINE */}

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
        aria-labelledby="infra-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="infra-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Infrastructure for

              <span className="block text-[#8B57AB]">
                modern organizations.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Digital Infrastructure Services can support
              organizations managing complex technology
              environments, planning modernization, or
              improving infrastructure visibility and
              reliability.
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
          14 — FINAL CTA
      ====================================== */}

      <section
        aria-labelledby="infra-cta"
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

          {/* CTA HEADING */}

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="infra-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to strengthen

              <span className="block text-[#F0D9FA]">
                your IT infrastructure?
              </span>
            </h2>

          </Reveal>

          {/* CTA DESCRIPTION & BUTTON */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your servers, networking,
              storage, cloud environments, operational
              challenges, or infrastructure modernization
              plans. We can discuss a practical approach
              for your organization.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Infrastructure

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
