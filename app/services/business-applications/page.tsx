
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  AppWindow,
  Cloud,
  Database,
  GitMerge,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  UsersRound,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — BUSINESS APPLICATIONS
// ==========================================

const SERVICE_TITLE = "Business Applications";

// ==========================================
// EXISTING CLOUDLEM IMAGE ASSETS
// ==========================================

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  applications: "/images/backgrounds/section-1-3.jpg",
  integration: "/images/backgrounds/section-3-1.jpg",
  modernization: "/images/backgrounds/section-2-2.jpg",
  feature: "/images/backgrounds/section-3-2.jpg",
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
    eyebrow: "Custom Business Applications",
    title: "Build applications",
    highlight: "around the way you work.",
    image: images.applications,
    alt: "Digital technology representing business applications",
    paragraphs: [
      "Every organization has its own workflows, operational requirements, and business challenges. Standard software products may support common activities, but they do not always fit the specific processes that make a business work.",

      "Custom business applications provide an opportunity to organize information, simplify tasks, and connect essential operations through software designed around real user needs. From internal dashboards and administrative portals to customer-facing applications, an effective solution should make work easier rather than introduce additional complexity.",

      "Cloudlem approaches application development by understanding business requirements before choosing technologies. We consider users, data structures, access controls, integrations, performance, and long-term maintenance to create a practical foundation for digital operations.",
    ],
    points: [
      "Custom web applications and internal portals",
      "Business management dashboards and tools",
      "Role-based workflows and user experiences",
    ],
  },
  {
    number: "02",
    eyebrow: "Application Integration",
    title: "Connect your systems",
    highlight: "and simplify operations.",
    image: images.integration,
    alt: "Connected infrastructure representing application integration",
    paragraphs: [
      "Organizations frequently depend on multiple applications to manage customers, finances, projects, inventory, communication, and reporting. When these systems operate independently, employees may spend valuable time moving information manually between platforms.",

      "Application integration allows different tools to exchange relevant information through APIs, supported connectors, and carefully designed workflows. This can reduce duplicate data entry, improve consistency, and help teams access information when they need it.",

      "We help businesses evaluate existing software environments and identify suitable integration approaches. Our planning considers data consistency, error handling, security, reliability, and the operational requirements of each connected system.",
    ],
    points: [
      "API development and third-party integrations",
      "Cross-application workflow coordination",
      "Data synchronization and process automation",
    ],
  },
  {
    number: "03",
    eyebrow: "Application Modernization",
    title: "Modernize software",
    highlight: "for changing business needs.",
    image: images.modernization,
    alt: "Cloud infrastructure representing application modernization",
    paragraphs: [
      "Business applications need to evolve as organizations grow and operational demands change. Older systems may become difficult to maintain, integrate, or adapt, particularly when they rely on outdated technologies or processes that were designed for a different stage of the business.",

      "Application modernization can involve improving existing functionality, updating interfaces, restructuring software components, strengthening deployment practices, or evaluating cloud-based architecture. The appropriate approach depends on the condition of the existing system and the value of the proposed changes.",

      "Cloudlem focuses on practical modernization planning that considers continuity, security, maintainability, and technical feasibility. Rather than replacing systems unnecessarily, we evaluate where targeted improvements or a more substantial redesign may deliver better long-term value.",
    ],
    points: [
      "Existing application assessments",
      "Modern web interfaces and application architecture",
      "Cloud readiness and deployment improvements",
    ],
  },
];

// ==========================================
// BUSINESS APPLICATION CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Custom Application Development",
    description:
      "Design and develop applications around defined business requirements, with maintainable architecture, appropriate functionality, and interfaces that support everyday users.",
    icon: AppWindow,
  },
  {
    number: "02",
    title: "Business Portals & Dashboards",
    description:
      "Create centralized interfaces for operational information, administrative tasks, reporting, and relevant workflows, tailored to different user roles and responsibilities.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "API & System Integration",
    description:
      "Plan and develop integrations between compatible business applications, external services, and data sources using appropriate APIs and secure communication practices.",
    icon: GitMerge,
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Identify repetitive processes and explore application-based automation that can simplify approvals, notifications, record updates, and operational coordination.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Data & Reporting Applications",
    description:
      "Develop practical interfaces for organizing, retrieving, and presenting business information while considering data quality, access permissions, and reporting requirements.",
    icon: Database,
  },
  {
    number: "06",
    title: "Cloud Application Modernization",
    description:
      "Evaluate opportunities to improve application deployment, reliability, scalability, and maintainability through appropriate cloud architecture and engineering practices.",
    icon: Cloud,
  },
];

// ==========================================
// OUR DELIVERY APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business Requirements Discovery",
    description:
      "We learn how the organization operates, who will use the application, which processes need support, and what outcomes the software should help achieve.",
  },
  {
    number: "02",
    title: "Solution Architecture & Planning",
    description:
      "We define the proposed functionality, data requirements, user roles, integration needs, and technical approach before implementation begins.",
  },
  {
    number: "03",
    title: "Application Design & Development",
    description:
      "We develop user interfaces and application functionality in manageable stages, with attention to maintainability, accessibility, and business requirements.",
  },
  {
    number: "04",
    title: "Testing & Integration",
    description:
      "We review important functionality, data handling, user permissions, integration behavior, and expected workflows before preparing the application for use.",
  },
  {
    number: "05",
    title: "Deployment & Continuous Improvement",
    description:
      "We plan appropriate deployment steps and help identify opportunities to improve application functionality and performance as business requirements evolve.",
  },
];

// ==========================================
// RELEVANT ORGANIZATIONS
// ==========================================

const audiences = [
  "Businesses replacing manual spreadsheets and disconnected administrative processes.",
  "Growing organizations that need internal management portals or operational dashboards.",
  "Teams integrating customer, financial, project, or inventory applications.",
  "Organizations planning improvements to legacy software and existing business systems.",
];

// ==========================================
// BUSINESS APPLICATIONS PAGE
// ==========================================

export default function BusinessApplicationsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
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
            className="max-w-[880px]"
          >

            {/* BREADCRUMB */}

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

            {/* SERVICE CATEGORY */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B7B09F]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                Digital / Business Applications
              </p>
            </div>

            {/* MAIN HEADING */}

            <h1 className="max-w-[850px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#D8D2C8]">
              Smarter software

              <span className="block text-[#B7B09F]">
                for better
              </span>

              business.
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] text-[#D8D2C8] sm:text-[17px]">
              Transform daily business operations
              with applications designed around
              your organization. Connect workflows,
              simplify information management,
              and build software that supports
              productivity and long-term growth.
            </p>

            {/* CTA BUTTON */}

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
          INTRODUCTION — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-14 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >

            {/* HEADING */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                  Our Application Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Software built

                <span className="block text-[#625C51]">
                  for real operations.
                </span>
              </h2>
            </div>

            {/* INTRODUCTION TEXT */}

            <div className="lg:pt-3">
              <p className="text-[17px] font-semibold leading-[1.75]">
                Business applications should make
                everyday work more organized,
                efficient, and manageable.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  Modern businesses depend on software
                  to manage essential activities,
                  coordinate teams, serve customers,
                  and make decisions. However, when
                  applications are disconnected or
                  difficult to use, technology can
                  become a source of operational
                  complexity rather than improvement.
                </p>

                <p>
                  An effective business application
                  brings together relevant information,
                  clear workflows, and practical tools
                  that support how employees actually
                  work. The solution should reflect
                  operational requirements instead
                  of forcing every process into a
                  rigid software structure.
                </p>

                <p>
                  Cloudlem combines application
                  development, cloud engineering,
                  integrations, and automation
                  planning to help organizations
                  build and modernize digital
                  systems that serve a clear
                  business purpose.
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

                {/* TEXT COLUMN */}

                <motion.div
                  {...reveal}
                  className={reverse ? "lg:order-2" : ""}
                >

                  {/* SECTION LABEL */}

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#181818]" />

                    <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                      {section.eyebrow}
                    </p>
                  </div>

                  {/* HEADING */}

                  <h2 className="max-w-[620px] text-[clamp(2.3rem,3.2vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                    {section.title}

                    <span className="block text-[#514C43]">
                      {section.highlight}
                    </span>
                  </h2>

                  <div className="mt-5 h-[2px] w-12 bg-[#181818]" />

                  {/* DETAILED CONTENT */}

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

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[#181818]" />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ===================================
          WIDE FEATURE SECTION
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
              Connected Business Technology
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Bring your business

              <span className="block text-[#B7B09F]">
                systems together.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.8] text-[#D8D2C8]">
              The value of business software grows
              when applications, information, and
              people can work together. Thoughtful
              integrations, maintainable systems,
              and practical automation help
              organizations establish a more
              connected digital environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          BUSINESS APPLICATION CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Areas of Focus
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Business application

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From custom business portals and
              application integrations to workflow
              automation and modernization, our
              approach focuses on software that
              supports real operational needs.
            </p>
          </motion.div>

          {/* CAPABILITY CARDS */}

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
                  {/* ICON AND NUMBER */}

                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#B7B09F]/45 text-[#D8D2C8]">
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

                  {/* TITLE */}

                  <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#D8D2C8]">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-9 bg-[#B7B09F]" />

                  {/* DESCRIPTION */}

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
          APPLICATION DELIVERY APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* SECTION INTRO */}

            <motion.div {...reveal}>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  How We Build Applications
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                From business needs

                <span className="block text-[#625C51]">
                  to working software.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                A successful business application
                requires more than writing code.
                Our approach emphasizes clear
                requirements, practical architecture,
                usable interfaces, and thoughtful
                integration with existing systems.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Security, maintainability, and
                  user needs should be considered
                  throughout application planning
                  and development.
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

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >

            {/* HEADING */}

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Who We Help
              </p>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Built for

                <span className="block text-[#514C43]">
                  modern business needs.
                </span>
              </h2>
            </div>

            {/* AUDIENCES */}

            <div>
              <p className="text-[17px] font-medium leading-[1.75]">
                Business Applications can support
                organizations seeking more effective
                internal processes, connected digital
                systems, and software tailored to
                their operational requirements.
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

            {/* CTA HEADING */}

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to improve

                <span className="block text-[#625C51]">
                  your business systems?
                </span>
              </h2>
            </div>

            {/* CTA CONTENT */}

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your existing
                applications, operational challenges,
                and software requirements. We can
                discuss the possibilities and
                explore a practical approach
                for your project.
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
