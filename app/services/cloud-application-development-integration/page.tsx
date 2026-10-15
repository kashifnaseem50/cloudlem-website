
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Activity,
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GitMerge,
  Layers3,
  Network,
  RefreshCw,
  SearchCheck,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM
// CLOUD APPLICATION DEVELOPMENT & INTEGRATION
// ==========================================

const SERVICE_TITLE =
  "Cloud Application Development & Integration";

// EXISTING VERIFIED CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  development: "/images/backgrounds/section-1-4.jpg",
  integration: "/images/backgrounds/section-3-2.jpg",
  modernization: "/images/backgrounds/section-2-2.jpg",
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
// EDITORIAL SERVICE CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Cloud-Native Application Development",
    title: "Build modern applications",
    highlight: "for a connected world.",
    image: images.development,
    alt: "Cloud technology representing modern application development",
    paragraphs: [
      "Modern businesses need applications that can adapt to changing customer expectations, increasing workloads, and evolving operational requirements. Traditional application architectures may become difficult to maintain when new functionality must be introduced quickly or existing systems need to connect with additional services.",

      "Cloud-native development uses appropriate cloud capabilities, modern software architecture, and automated delivery practices to create applications designed for their intended operating environment. Depending on project requirements, solutions may use containers, managed application platforms, modular services, APIs, and scalable data technologies.",

      "Cloudlem approaches cloud application development by connecting software engineering decisions with business objectives. We consider performance, usability, security, deployment, integration requirements, and long-term maintainability to develop applications that can evolve without unnecessary operational complexity.",
    ],
    points: [
      "Custom cloud applications and digital platforms",
      "Cloud-native architecture and containerized services",
      "Application performance, reliability, and scalability",
    ],
  },
  {
    number: "02",
    eyebrow: "Enterprise Application Integration",
    title: "Connect applications.",
    highlight: "Simplify business operations.",
    image: images.integration,
    alt: "Connected infrastructure representing enterprise application integration",
    paragraphs: [
      "Organizations often rely on several applications to manage customers, finance, inventory, projects, communication, and digital services. When these applications operate separately, important information may need to be transferred manually, creating duplicated work and inconsistent records.",

      "Application integration establishes controlled ways for systems to communicate and exchange information. Depending on the business need, this may involve APIs, webhooks, messaging platforms, scheduled data transfers, or integration services that coordinate communication between multiple applications.",

      "Cloudlem evaluates existing software environments, information flows, integration requirements, and security considerations before recommending an approach. We focus on maintainable connections, consistent data handling, monitoring, and error management so integrated applications can support dependable everyday operations.",
    ],
    points: [
      "API development and third-party integrations",
      "Application messaging and event-driven workflows",
      "Reliable data exchange and integration monitoring",
    ],
  },
  {
    number: "03",
    eyebrow: "Cloud Application Modernization",
    title: "Give existing software",
    highlight: "a stronger foundation.",
    image: images.modernization,
    alt: "Modern cloud infrastructure representing application modernization",
    paragraphs: [
      "Many organizations depend on applications that continue to provide business value but were developed using older technology or infrastructure. Over time, these systems may become harder to update, integrate, secure, and deploy, particularly when their architecture limits operational flexibility.",

      "Application modernization can involve improving deployment methods, updating software components, moving to supported frameworks, introducing containers, adopting suitable managed cloud services, or redesigning selected parts of an application. A complete replacement is not always necessary or desirable.",

      "Cloudlem approaches modernization through assessment and phased planning. We examine existing dependencies, application behavior, technical risks, testing requirements, and business continuity before selecting appropriate improvements. The objective is to preserve useful functionality while preparing applications for future requirements.",
    ],
    points: [
      "Legacy application assessment and modernization",
      "Containerization and managed cloud platforms",
      "Application refactoring and phased improvements",
    ],
  },
];

// ==========================================
// SERVICE CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Cloud Application Development",
    description:
      "Design and develop cloud-hosted applications with maintainable software architecture, responsive interfaces, suitable backend services, and business-focused functionality.",
    icon: AppWindow,
  },
  {
    number: "02",
    title: "Cloud-Native Architecture",
    description:
      "Evaluate architecture patterns using containers, managed platforms, modular services, and other appropriate cloud capabilities based on application requirements.",
    icon: Cloud,
  },
  {
    number: "03",
    title: "Microservices & Containers",
    description:
      "Explore modular application structures and container-based deployments where independent components and controlled scaling offer practical benefits.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "API Development & Integration",
    description:
      "Develop and integrate APIs that connect applications, approved external platforms, and supporting business systems through well-defined interfaces.",
    icon: GitMerge,
  },
  {
    number: "05",
    title: "Application Modernization",
    description:
      "Assess legacy applications and plan updates to architecture, frameworks, deployment methods, integrations, or selected software components.",
    icon: RefreshCw,
  },
  {
    number: "06",
    title: "Application & Data Integration",
    description:
      "Connect application workflows and data sources with appropriate validation, synchronization, error handling, and access controls.",
    icon: Database,
  },
  {
    number: "07",
    title: "DevOps & CI/CD Integration",
    description:
      "Establish version-controlled build, test, and deployment workflows that support consistent releases and traceable application changes.",
    icon: GitBranch,
  },
  {
    number: "08",
    title: "Cloud Application Security",
    description:
      "Consider authentication, authorization, secure interfaces, dependency management, secrets handling, and relevant security testing throughout development.",
    icon: ShieldCheck,
  },
  {
    number: "09",
    title: "Application Monitoring & Optimization",
    description:
      "Improve operational visibility through suitable application metrics, logging, tracing, alerting, performance review, and ongoing optimization.",
    icon: Activity,
  },
];

// ==========================================
// APPLICATION MODERNIZATION APPROACHES
// ==========================================

const modernizationOptions = [
  {
    number: "01",
    title: "Application Assessment",
    subtitle: "Understand the current environment",
    description:
      "Review application functionality, architecture, dependencies, operational challenges, framework support, and business priorities before deciding what should change.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Infrastructure-Based Migration",
    subtitle: "Move applications with limited changes",
    description:
      "Evaluate whether an existing application can operate on suitable cloud infrastructure with minimal code changes, supported by compatibility and deployment validation.",
    icon: Server,
  },
  {
    number: "03",
    title: "Cloud-Native Modernization",
    subtitle: "Improve the application architecture",
    description:
      "Consider containerization, managed services, modular components, and revised deployment patterns when these improvements support practical operational goals.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Application Refactoring",
    subtitle: "Update selected software components",
    description:
      "Improve appropriate parts of an application, such as integrations, interfaces, processing workflows, or technical dependencies, through controlled development stages.",
    icon: Code2,
  },
];

// ==========================================
// APPLICATION INTEGRATION PATTERNS
// ==========================================

const integrationPatterns = [
  {
    number: "01",
    title: "Point-to-Point Integration",
    description:
      "Connect two compatible applications directly when the integration scope is limited and the relationship can remain manageable.",
    icon: GitMerge,
  },
  {
    number: "02",
    title: "API-Led Integration",
    description:
      "Use well-defined APIs to expose approved application functionality and information to internal services or external integrations.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Event-Driven Messaging",
    description:
      "Exchange business events through appropriate messaging technologies when services need asynchronous communication and reliable processing.",
    icon: Network,
  },
  {
    number: "04",
    title: "Batch & Scheduled Integration",
    description:
      "Transfer and process information on an agreed schedule when immediate synchronization is unnecessary or source systems have practical limitations.",
    icon: Database,
  },
  {
    number: "05",
    title: "Service-Oriented Integration",
    description:
      "Organize reusable application services and interfaces to support communication between multiple systems and business functions.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Integration Platforms & Services",
    description:
      "Evaluate enterprise integration platforms, managed connectors, or integration middleware when many systems and workflows need coordinated management.",
    icon: Workflow,
  },
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "Operational Efficiency",
    description:
      "Reduce repetitive manual transfers and simplify supported business workflows by allowing applications to exchange relevant information.",
    icon: Workflow,
  },
  {
    title: "Better Data Consistency",
    description:
      "Support more dependable information exchange through suitable validation, mapping, synchronization, and error-handling practices.",
    icon: Database,
  },
  {
    title: "Application Flexibility",
    description:
      "Use maintainable interfaces and modular design to make selected application components easier to update or integrate.",
    icon: AppWindow,
  },
  {
    title: "Improved Visibility",
    description:
      "Connect operational systems and application monitoring to make important workflows, performance indicators, and issues easier to understand.",
    icon: BarChart3,
  },
];

// ==========================================
// DELIVERY APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business & Application Discovery",
    description:
      "Understand existing applications, business processes, user needs, system dependencies, integration requirements, and the outcomes the organization wants to achieve.",
  },
  {
    number: "02",
    title: "Architecture & Solution Planning",
    description:
      "Define suitable application components, cloud services, data flows, integration methods, security requirements, and an implementation roadmap.",
  },
  {
    number: "03",
    title: "Application Design & Development",
    description:
      "Develop or modernize selected application functionality using maintainable code, appropriate architecture, and clear technical requirements.",
  },
  {
    number: "04",
    title: "Integration & Testing",
    description:
      "Validate application functionality, API behavior, data mapping, access permissions, error handling, compatibility, and key end-to-end workflows.",
  },
  {
    number: "05",
    title: "Deployment & Operational Readiness",
    description:
      "Prepare controlled deployment processes, monitoring, rollback or recovery procedures, documentation, and operational responsibilities.",
  },
  {
    number: "06",
    title: "Monitoring & Continuous Improvement",
    description:
      "Review application performance, integration reliability, system usage, changing requirements, and opportunities for further refinement.",
  },
];

// ==========================================
// WHO THIS SERVICE IS FOR
// ==========================================

const audiences = [
  "Businesses developing new cloud-based web applications, internal platforms, or digital products.",
  "Organizations connecting CRM, ERP, finance, inventory, customer, or other operational applications.",
  "Teams modernizing legacy software through containers, updated frameworks, or managed cloud services.",
  "Businesses seeking reliable API integrations, automated deployments, and improved application observability.",
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function CloudApplicationDevelopmentIntegrationPage() {
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
            className="max-w-[930px]"
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
                Cloud / Application Development & Integration
              </p>
            </div>

            <h1 className="max-w-[900px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">

              Build modern apps.

              <span className="block text-[#B7B09F]">
                Connect every
              </span>

              possibility.
            </h1>

            <p className="mt-7 max-w-[710px] text-[16px] leading-[1.8] sm:text-[17px]">
              Develop modern cloud applications,
              connect business systems, and
              modernize existing software.
              Bring together cloud engineering,
              application integration, and
              reliable delivery practices to
              create solutions that support
              evolving business needs.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Application

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
                  Our Cloud Application Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Modern applications.

                <span className="block text-[#625C51]">
                  Connected digital business.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Modern applications need to
                work reliably on their own
                while connecting effectively
                with the wider technology
                environment of a business.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  Organizations increasingly
                  depend on cloud applications
                  for customer services,
                  internal processes,
                  information management,
                  and digital products.
                  These applications often
                  need to communicate with
                  existing databases,
                  third-party platforms,
                  and operational systems.
                </p>

                <p>
                  When software is difficult
                  to maintain or applications
                  cannot exchange information
                  effectively, technology
                  may limit business flexibility.
                  Modern development practices
                  and well-designed integration
                  interfaces can help
                  address these challenges.
                </p>

                <p>
                  Cloudlem combines software
                  engineering, cloud architecture,
                  application modernization,
                  API integration, and DevOps
                  practices to help organizations
                  develop practical digital
                  solutions. Our focus is on
                  maintainable applications,
                  reliable connections,
                  secure operations, and
                  business-aligned delivery.
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

                {/* EDITORIAL TEXT */}

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

                {/* EDITORIAL IMAGE */}

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
            className="max-w-[840px]"
          >

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              Modern Cloud Application Engineering
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">

              Build for today.

              <span className="block text-[#B7B09F]">
                Connect for tomorrow.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Cloud applications become more
              useful when modern engineering
              and reliable integration work
              together. Create a foundation
              that supports new functionality,
              dependable data exchange,
              and future business change.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          CLOUD APPLICATION CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Cloud Application Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Development and

                <span className="block text-[#B7B09F]">
                  integration capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From cloud-native application
              development and modernization
              to API integration, deployment
              automation, and monitoring,
              these capabilities support
              connected digital solutions.
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
          APPLICATION MODERNIZATION APPROACHES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Application Modernization
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Choose the right

                <span className="block text-[#625C51]">
                  modernization approach.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Modernization does not always
              require rebuilding an application
              from the beginning. The right
              approach depends on existing
              software, dependencies, technical
              limitations, and business priorities.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">

            {modernizationOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  key={option.number}
                  className="border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {option.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#625C51]">
                    {option.subtitle}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.035em]">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {option.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          INTEGRATION ARCHITECTURE PATTERNS
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Application Integration Architecture
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Different systems.

                <span className="block text-[#514C43]">
                  Smarter connections.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Applications can communicate
              through different integration
              patterns. Choosing the right
              method depends on complexity,
              data volumes, processing
              requirements, reliability,
              and the existing environment.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {integrationPatterns.map((pattern) => {
              const Icon = pattern.icon;

              return (
                <article
                  key={pattern.number}
                  className="flex flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {pattern.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[21px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {pattern.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {pattern.description}
                  </p>

                </article>
              );
            })}

          </div>

          {/* CROSS-CUTTING REQUIREMENTS */}

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <ShieldCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Secure Communication
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <Activity size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Reliability & Monitoring
              </span>

            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">

              <Check size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Validation & Error Handling
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          BUSINESS VALUE SECTION
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Business Value
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Integration that

                <span className="block text-[#625C51]">
                  supports better work.
                </span>
              </h2>

            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Good application integration
              is not only about connecting
              technical systems. It should
              address operational challenges
              and improve how information
              supports employees and customers.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.035em]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.75]">
                    {benefit.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          DELIVERY APPROACH
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
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

                From requirements

                <span className="block text-[#514C43]">
                  to connected applications.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">

                Modern application development
                and integration require
                clear planning, reliable
                engineering practices,
                and careful testing.
                Our approach considers
                the entire delivery process,
                from understanding business
                needs to operational support.

              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Security, application
                  reliability, maintainable
                  architecture, and
                  controlled deployment
                  should be considered
                  throughout delivery.
                </p>

              </div>
            </motion.div>

            {/* DELIVERY STAGES */}

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

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >

            <div>

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Who We Help
              </p>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Cloud applications

                <span className="block text-[#625C51]">
                  for growing businesses.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">

                Cloud Application Development
                & Integration can help
                organizations building
                new digital capabilities,
                connecting existing tools,
                or modernizing business
                applications.

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

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">

                Ready to build

                <span className="block text-[#514C43]">
                  connected applications?
                </span>
              </h2>

            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">

                Tell us about your
                application requirements,
                existing business systems,
                integration challenges,
                and modernization goals.
                We can discuss a practical
                approach to your project.

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
