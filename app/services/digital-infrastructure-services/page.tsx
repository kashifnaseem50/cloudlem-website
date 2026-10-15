
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
  Boxes,
  Cable,
  Check,
  Cloud,
  Database,
  HardDrive,
  Headset,
  Laptop,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Monitor,
  Network,
  RefreshCw,
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
// ==========================================

const SERVICE_TITLE = "Digital Infrastructure Services";

// VERIFIED EXISTING CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  infrastructure: "/images/backgrounds/section-1-4.jpg",
  networking: "/images/backgrounds/section-2-2.jpg",
  edge: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// ANIMATION CONFIGURATION
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
// DIGITAL INFRASTRUCTURE CAPABILITIES
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
// NETWORK SERVICES
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
// EDGE IT SERVICES
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
// OPERATING PRINCIPLES
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

// ==========================================
// BUSINESS USE CASES
// ==========================================

const audiences = [
  "Organizations managing on-premises servers, storage, virtualization, and business-critical infrastructure.",
  "Businesses connecting existing data centers with cloud platforms or transitioning to hybrid environments.",
  "Teams improving enterprise networking, wireless connectivity, monitoring, and infrastructure security.",
  "Organizations seeking clearer IT operations, endpoint management, identity processes, and recovery planning.",
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function DigitalInfrastructureServicesPage() {
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
                Digital Infrastructure Services
              </p>
            </div>

            <h1 className="max-w-[900px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">

              Strong infrastructure.

              <span className="block text-[#B7B09F]">
                Connected
              </span>

              possibilities.
            </h1>

            <p className="mt-7 max-w-[710px] text-[16px] leading-[1.8] sm:text-[17px]">
              Build and manage the technology
              foundation behind your business.
              Connect servers, networks, storage,
              cloud platforms, and workplace
              systems through reliable,
              secure, and maintainable
              infrastructure practices.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Infrastructure

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
          INFRASTRUCTURE INTRODUCTION
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
                  Our Infrastructure Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Technology foundations

                <span className="block text-[#625C51]">
                  built for business.
                </span>
              </h2>

            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Effective digital infrastructure
                connects the technology that
                people, applications, and
                business operations depend on.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  Enterprise infrastructure
                  includes computing systems,
                  storage, networking, cloud
                  services, operating systems,
                  workplace devices, and
                  identity platforms. Together,
                  these technologies provide
                  the foundation for digital
                  business activities.
                </p>

                <p>
                  As organizations evolve,
                  their infrastructure must
                  support changing applications,
                  distributed teams, new
                  security requirements,
                  and additional operational
                  complexity. Aging systems,
                  disconnected environments,
                  and inconsistent management
                  practices can make these
                  changes harder to deliver.
                </p>

                <p>
                  Cloudlem approaches digital
                  infrastructure through
                  technical assessment,
                  structured architecture,
                  appropriate implementation,
                  operational monitoring,
                  and continuous improvement.
                  Our focus is on building
                  a dependable environment
                  that fits the organization's
                  actual business needs.
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

                {/* TEXT COLUMN */}

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

                {/* IMAGE COLUMN */}

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
              Connected Enterprise Infrastructure
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">

              Reliable foundations.

              <span className="block text-[#B7B09F]">
                Stronger digital operations.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Infrastructure should support
              business change rather than
              hold it back. Thoughtful
              architecture, secure
              connectivity, operational
              visibility, and maintainable
              systems help organizations
              build a more adaptable
              digital environment.
            </p>

          </motion.div>

        </div>
      </section>

      {/* ===================================
          INFRASTRUCTURE CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">

        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Infrastructure Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Digital infrastructure

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>

              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From servers and storage
              to virtualization, networking,
              monitoring, and workplace IT,
              these capabilities address
              the systems that support
              day-to-day business operations.
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
          ON-PREM / HYBRID / MULTICLOUD
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">

        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Infrastructure Environments
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Infrastructure built

                <span className="block text-[#625C51]">
                  for your environment.
                </span>

              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              An effective infrastructure
              strategy should reflect
              where applications operate,
              how people access them,
              and which technical and
              business requirements
              must be supported.
            </p>

          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">

            {infrastructureEnvironments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {item.number}
                    </span>

                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
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
          ENTERPRISE NETWORK SERVICES
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">

        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Enterprise Network Services
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Networks that connect

                <span className="block text-[#514C43]">
                  your digital operations.
                </span>

              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Enterprise networks require
              thoughtful planning, secure
              connectivity, monitoring,
              and practical management.
              We consider network requirements
              alongside the applications,
              services, and users
              that depend on them.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {networkServices.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-[21px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ===================================
          EDGE IT & WORKPLACE SERVICES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">

        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Edge IT & Workplace Technology
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Technology support

                <span className="block text-[#625C51]">
                  closer to your people.
                </span>

              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Workplace infrastructure
              includes devices, operating
              systems, collaboration tools,
              user accounts, and network
              access. Clear technical
              support practices help
              maintain productivity
              and security.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {edgeServices.map((item) => {
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
          INFRASTRUCTURE OPERATIONS LIFECYCLE
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">

        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Infrastructure Operations Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Manage infrastructure

                <span className="block text-[#B7B09F]">
                  with confidence.
                </span>

              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              Dependable infrastructure
              needs ongoing visibility,
              routine maintenance,
              security review, recovery
              planning, and continuous
              operational improvement.
            </p>

          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {operatingPrinciples.map((item) => (
              <article
                key={item.number}
                className="flex flex-col border border-[#B7B09F]/35 p-5"
              >

                <span className="text-[12px] font-bold text-[#B7B09F]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-[#D8D2C8]/85">
                  {item.description}
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

              <Activity size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Monitoring & Alerting
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">

              <ShieldCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Security & Access
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 p-4">

              <LifeBuoy size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Recovery & Resilience
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
                  Our Infrastructure Approach
                </p>

              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                From infrastructure

                <span className="block text-[#625C51]">
                  planning to operations.
                </span>

              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Infrastructure improvement
                requires careful consideration
                of existing applications,
                system dependencies,
                network connectivity,
                user requirements,
                operational risks,
                and long-term support.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Infrastructure changes
                  should follow approved
                  maintenance procedures,
                  appropriate backups,
                  technical validation,
                  and documented recovery
                  or rollback plans.
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

                Infrastructure for

                <span className="block text-[#514C43]">
                  modern organizations.
                </span>

              </h2>

            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Digital Infrastructure Services
                can support organizations
                managing complex technology
                environments, planning
                modernization, or improving
                infrastructure visibility
                and reliability.
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
                  your IT infrastructure?
                </span>

              </h2>

            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your servers,
                networking, storage,
                cloud environments,
                operational challenges,
                or infrastructure
                modernization plans.
                We can discuss a practical
                approach for your organization.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >

                Discuss Your Infrastructure

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
