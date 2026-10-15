
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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
// CLOUDLEM — CLOUD APPLICATION DEVELOPMENT
// & INTEGRATION
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE =
  "Cloud Application Development & Integration";

const images = {
  hero: "/images/backgrounds/section-3-1.jpg",
  development: "/images/backgrounds/section-1-4.jpg",
  integration: "/images/backgrounds/section-3-2.jpg",
  modernization: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
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

const audiences = [
  "Businesses developing new cloud-based web applications, internal platforms, or digital products.",
  "Organizations connecting CRM, ERP, finance, inventory, customer, or other operational applications.",
  "Teams modernizing legacy software through containers, updated frameworks, or managed cloud services.",
  "Businesses seeking reliable API integrations, automated deployments, and improved application observability.",
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
// REUSABLE SECTION HEADING
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
// MAIN PAGE COMPONENT
// ==========================================

export default function CloudApplicationDevelopmentIntegrationPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="cloud-app-title"
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

          {/* HERO TEXT */}

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
              Cloud / Application Development &amp; Integration
            </Eyebrow>

            <h1
              id="cloud-app-title"
              className="max-w-[760px] text-[clamp(2.55rem,5.1vw,5.3rem)] font-semibold leading-[1.07] tracking-[-0.06em] text-[#291D34]"
            >
              Build modern apps.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Connect every
              </span>

              possibility.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Develop modern cloud applications,
              connect business systems, and modernize
              existing software. Bring together cloud
              engineering, application integration,
              and reliable delivery practices to
              create solutions that support evolving
              business needs.
            </p>

            {/* HERO BUTTONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Application

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

              {/* FLOATING INFO CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Cloud Application Engineering
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Develop. Integrate. Modernize.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — SERVICE INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="cloud-app-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Cloud Application Perspective
            </Eyebrow>

            <h2
              id="cloud-app-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Modern applications.

              <span className="block text-[#8B58AC]">
                Connected digital business.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Modern applications need to work reliably
              on their own while connecting effectively
              with the wider technology environment
              of a business.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Organizations increasingly depend on cloud
                applications for customer services, internal
                processes, information management, and
                digital products. These applications often
                need to communicate with existing databases,
                third-party platforms, and operational systems.
              </p>

              <p>
                When software is difficult to maintain or
                applications cannot exchange information
                effectively, technology may limit business
                flexibility. Modern development practices
                and well-designed integration interfaces
                can help address these challenges.
              </p>

              <p>
                Cloudlem combines software engineering,
                cloud architecture, application modernization,
                API integration, and DevOps practices to
                help organizations develop practical digital
                solutions. Our focus is on maintainable
                applications, reliable connections, secure
                operations, and business-aligned delivery.
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
            aria-labelledby={`cloud-app-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL CONTENT */}

              <Reveal
                direction={reversed ? "right" : "left"}
                className={`min-w-0 ${
                  reversed ? "lg:order-2" : ""
                }`}
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
                  id={`cloud-app-pillar-${section.number}`}
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

                {/* DETAILED DESCRIPTION */}

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
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

              {/* EDITORIAL IMAGE */}

              <Reveal
                direction={reversed ? "left" : "right"}
                delay={0.08}
                className={`min-w-0 ${
                  reversed ? "lg:order-1" : ""
                }`}
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
        aria-labelledby="cloud-app-feature"
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_30%,rgba(217,181,237,0.18),transparent_60%)]"
        />

        <div className="container-systems relative z-20">

          <Reveal className="max-w-[870px]">

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              Modern Cloud Application Engineering
            </p>

            <h2
              id="cloud-app-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Build for today.

              <span className="block text-[#DDB8F1]">
                Connect for tomorrow.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Cloud applications become more useful when
              modern engineering and reliable integration
              work together. Create a foundation that
              supports new functionality, dependable
              data exchange, and future business change.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — CLOUD APPLICATION CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="cloud-app-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-app-capabilities"
            eyebrow="Our Cloud Application Offerings"
            title="Development and"
            highlight="integration capabilities."
            description="From cloud-native application development and modernization to API integration, deployment automation, and monitoring, these capabilities support connected digital solutions."
          />

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
          08 — APPLICATION MODERNIZATION
      ====================================== */}

      <section
        aria-labelledby="cloud-app-modernization"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-app-modernization"
            eyebrow="Application Modernization"
            title="Choose the right"
            highlight="modernization approach."
            description="Modernization does not always require rebuilding an application from the beginning. The right approach depends on existing software, dependencies, technical limitations, and business priorities."
          />

          {/* FOUR MODERNIZATION OPTIONS */}

          <div className="grid gap-5 md:grid-cols-2">

            {modernizationOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <Reveal
                  key={option.number}
                  delay={(index % 2) * 0.07}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[270px] bg-[#FCFAFE]`}
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
                        {option.number}
                      </span>

                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {option.subtitle}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#30213B]">
                      {option.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">
                      {option.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          09 — INTEGRATION ARCHITECTURE PATTERNS
      ====================================== */}

      <section
        aria-labelledby="cloud-app-integration"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-app-integration"
            eyebrow="Application Integration Architecture"
            title="Different systems."
            highlight="Smarter connections."
            description="Applications can communicate through different integration patterns. Choosing the right method depends on complexity, data volumes, processing requirements, reliability, and the existing environment."
          />

          {/* SIX INTEGRATION CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {integrationPatterns.map((pattern, index) => {
              const Icon = pattern.icon;

              return (
                <Reveal
                  key={pattern.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[250px]`}>

                    <div className="flex items-start justify-between">

                      <span className={iconStyle}>
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {pattern.number}
                      </span>

                    </div>

                    <h3 className="mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {pattern.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {pattern.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

          {/* CROSS-CUTTING INTEGRATION REQUIREMENTS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Secure Communication",
                icon: ShieldCheck,
              },
              {
                label: "Reliability & Monitoring",
                icon: Activity,
              },
              {
                label: "Validation & Error Handling",
                icon: Check,
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
          10 — BUSINESS VALUE
      ====================================== */}

      <section
        aria-labelledby="cloud-app-benefits"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeader
            id="cloud-app-benefits"
            eyebrow="Business Value"
            title="Integration that"
            highlight="supports better work."
            description="Good application integration is not only about connecting technical systems. It should address operational challenges and improve how information supports employees and customers."
          />

          {/* FOUR BUSINESS BENEFITS */}

          <div className="grid gap-5 md:grid-cols-2">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={(index % 2) * 0.07}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[230px] bg-[#FCFAFE]`}>

                    <span className={iconStyle}>
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-6 text-[22px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#30213B]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-[1.8] text-[#665A70]">
                      {benefit.description}
                    </p>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          11 — DELIVERY APPROACH
      ====================================== */}

      <section
        aria-labelledby="cloud-app-approach"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* DELIVERY INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Implementation Approach
            </Eyebrow>

            <h2
              id="cloud-app-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              From requirements

              <span className="block text-[#8B57AB]">
                to connected applications.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Modern application development and
              integration require clear planning,
              reliable engineering practices, and
              careful testing. Our approach considers
              the entire delivery process, from
              understanding business needs to
              operational support.
            </p>

            {/* DELIVERY PRINCIPLE */}

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-white p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Security, application reliability,
                maintainable architecture, and
                controlled deployment should be
                considered throughout delivery.
              </p>

            </div>

          </Reveal>

          {/* SIX-STEP DELIVERY TIMELINE */}

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

                  <div className="rounded-[14px] border border-[#ECE2F2] bg-white p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#FDFBFF] motion-safe:hover:translate-x-1 sm:p-6">

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
        aria-labelledby="cloud-app-audiences"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          {/* AUDIENCE INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="cloud-app-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Cloud applications

              <span className="block text-[#8B57AB]">
                for growing businesses.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Cloud Application Development &amp;
              Integration can help organizations
              building new digital capabilities,
              connecting existing tools, or
              modernizing business applications.
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
        aria-labelledby="cloud-app-cta"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#553173_0%,#76459C_52%,#9668B5_100%)] py-20 text-white sm:py-24 lg:py-28"
      >

        {/* DECORATIVE ELEMENTS */}

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
              id="cloud-app-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to build

              <span className="block text-[#F0D9FA]">
                connected applications?
              </span>
            </h2>

          </Reveal>

          {/* CTA CONTENT */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your application requirements,
              existing business systems, integration
              challenges, and modernization goals.
              We can discuss a practical approach to
              your project.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Project

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
          PRESERVED
      ====================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
