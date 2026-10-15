
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cloud,
  FileText,
  Globe2,
  Palette,
  TrendingUp,
} from "lucide-react";

import ServiceInquiryModal from "../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM SERVICES
// ==========================================

const services = [
  {
    id: "ai-automation",
    number: "01",
    eyebrow: "Intelligent Systems",
    title: "AI & Automation",
    description:
      "Custom AI solutions, workflow automation, and intelligent systems designed around real business operations.",
    details:
      "We help businesses reduce repetitive work, connect data, and introduce practical AI into day-to-day operations without adding unnecessary complexity.",
    image: "/images/backgrounds/section-1-4.png",
    alt: "AI and business automation",
    objectPosition: "center center",
    icon: Bot,
    features: [
      "AI Workflow Automation",
      "Agentic & RAG Systems",
      "Predictive Analytics",
      "Model Deployment",
    ],
  },
  {
    id: "cloud-devops",
    number: "02",
    eyebrow: "Infrastructure & Delivery",
    title: "Cloud & DevOps",
    description:
      "Scalable and secure cloud infrastructure designed for stability, delivery speed, and long-term reliability.",
    details:
      "From infrastructure provisioning to CI/CD, Kubernetes, monitoring, and cloud optimization, we build systems that are easier to operate and scale.",
    image: "/images/backgrounds/section-2-2.png",
    alt: "Cloud infrastructure and server systems",
    objectPosition: "center center",
    icon: Cloud,
    features: [
      "AWS, Azure & GCP",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Kubernetes & Monitoring",
    ],
  },
  {
    id: "web-development",
    number: "03",
    eyebrow: "Digital Products",
    title: "Web Development",
    description:
      "High-performance websites and applications built for usability, speed, and maintainability.",
    details:
      "We design and develop digital products that work reliably across devices, support business growth, and remain easy to extend over time.",
    image: "/images/backgrounds/section-1-3.png",
    alt: "Website design and development",
    objectPosition: "center center",
    icon: Globe2,
    features: [
      "Custom Web Applications",
      "Business Websites",
      "Performance Optimization",
      "Scalable Architecture",
    ],
  },
  {
    id: "bookkeeping-accounting",
    number: "04",
    eyebrow: "Financial Operations",
    title: "Bookkeeping & Accounting",
    description:
      "Accurate records, financial clarity, and reliable bookkeeping support for growing businesses.",
    details:
      "We help keep financial workflows organized through bookkeeping, reconciliation, reporting, and support across platforms such as QuickBooks and Xero.",
    image: "/images/backgrounds/section-2-1.png",
    alt: "Bookkeeping and accounting",
    objectPosition: "center center",
    icon: FileText,
    features: [
      "QuickBooks Support",
      "Xero Support",
      "Transaction Reconciliation",
      "Financial Reporting",
    ],
  },
  {
    id: "design-branding",
    number: "05",
    eyebrow: "Visual Identity",
    title: "Design & Branding",
    description:
      "Visual identity, marketing design, and brand systems built to create a consistent professional presence.",
    details:
      "We help businesses communicate more clearly through branding, campaign design, marketing assets, and consistent visual systems.",
    image: "/images/backgrounds/section-1-2.png",
    alt: "Design and branding",
    objectPosition: "center center",
    icon: Palette,
    features: [
      "Brand Identity",
      "Marketing Creatives",
      "Campaign Design",
      "Digital Collateral",
    ],
  },
  {
    id: "business-growth",
    number: "06",
    eyebrow: "Business Operations",
    title: "Business Growth",
    description:
      "Strategic support to improve operations, expand reach, and build stronger systems around growth.",
    details:
      "We work with businesses on processes, market expansion, partnerships, and operational improvements that support sustainable growth.",
    image: "/images/backgrounds/section-2-3.png",
    alt: "Business growth strategy",
    objectPosition: "center center",
    icon: TrendingUp,
    features: [
      "Growth Strategy",
      "Market Expansion",
      "Process Improvement",
      "Revenue Operations",
    ],
  },
];

type Service = (typeof services)[number];

// ==========================================
// SERVICE CONTENT BLOCK
// ==========================================

function ServiceBlock({
  service,
  index,
  onExplore,
}: {
  service: Service;
  index: number;
  onExplore: (title: string) => void;
}) {
  const reverse = index % 2 === 1;
  const Icon = service.icon;

  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`scroll-mt-[100px] border-b border-[#181818]/10 ${
        reverse ? "bg-[#B7B09F]" : "bg-[#D8D2C8]"
      }`}
    >
      <div className="container-systems py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ==========================
              SERVICE IMAGE
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? 30 : -30,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={
              reverse
                ? "w-full lg:order-2"
                : "w-full lg:order-1"
            }
          >
            <div
              className={`relative w-full max-w-[490px] ${
                reverse ? "lg:ml-auto" : "lg:mr-auto"
              }`}
            >
              {/* Decorative outer frame */}

              <div
                className={`pointer-events-none absolute -top-3 z-0 h-[72%] w-[75%] border border-[#181818]/30 ${
                  reverse ? "-right-3" : "-left-3"
                }`}
              />

              {/* Image container */}

              <div className="group relative z-10 aspect-[4/3] w-full overflow-hidden border border-[#181818]/20 bg-[#181818] sm:aspect-[1.55] lg:aspect-[1.42]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1280px) 490px, (min-width: 1024px) 45vw, 100vw"
                  style={{
                    objectPosition: service.objectPosition,
                  }}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.045]"
                />

                <div className="pointer-events-none absolute inset-0 bg-[#181818]/10" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#181818]/30 via-transparent to-transparent" />

                {/* Subtle hover shine */}

                <div className="pointer-events-none absolute inset-y-0 -left-[55%] w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-[1000ms] group-hover:left-[130%]" />
              </div>

              {/* Number badge */}

              <motion.div
                whileHover={{
                  y: -2,
                  scale: 1.04,
                }}
                className="absolute -left-2 -top-2 z-30 flex h-12 w-12 items-center justify-center border border-[#181818] bg-[#181818] text-[11px] font-bold text-[#D8D2C8]"
              >
                {service.number}
              </motion.div>

              {/* Icon badge */}

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                className={`absolute -bottom-3 z-30 flex h-12 w-12 items-center justify-center border border-[#181818] bg-[#D8D2C8] text-[#181818] ${
                  reverse ? "left-0" : "right-0"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ==========================
              SERVICE CONTENT
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? -25 : 25,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative ${
              reverse
                ? "lg:order-1 lg:pr-3"
                : "lg:order-2 lg:pl-3"
            }`}
          >
            {/* Category heading */}

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-[#181818]/30 text-[#181818]">
                <Icon
                  size={16}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                {service.eyebrow}
              </p>
            </div>

            {/* Service title */}

            <h2 className="max-w-[540px] text-[32px] font-semibold uppercase leading-[1.06] tracking-[-0.05em] text-[#181818] sm:text-[40px] lg:text-[45px]">
              {service.title}
            </h2>

            {/* Short divider */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 46 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.2,
              }}
              className="mt-6 h-[2px] bg-[#181818]"
            />

            {/* Main description */}

            <p className="mt-6 max-w-[510px] text-[14px] font-medium leading-7 text-[#181818]">
              {service.description}
            </p>

            {/* Supporting description */}

            <p className="mt-4 max-w-[510px] text-[12.5px] leading-7 text-[#181818]/75">
              {service.details}
            </p>

            {/* Feature list */}

            <div className="mt-7 grid gap-x-6 gap-y-4 border-t border-[#181818]/20 pt-6 sm:grid-cols-2">
              {service.features.map(
                (feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.06 + featureIndex * 0.05,
                    }}
                    className="group flex items-center gap-3 text-[11px] font-medium text-[#181818]/85"
                  >
                    <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#181818] transition-transform duration-200 group-hover:scale-150" />
                    <span>{feature}</span>
                  </motion.div>
                )
              )}
            </div>

            {/* Explore service button */}

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onExplore(service.title)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-10 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8D2C8] transition-colors hover:bg-[#33312D]"
            >
              Explore Service

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

// ==========================================
// MAIN SERVICES PAGE
// ==========================================

export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<string | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-6 flex items-center gap-4">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18,
                  }}
                  className="h-px bg-[#B7B09F]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B7B09F]">
                  What We Do
                </p>
              </div>

              <h1 className="max-w-[760px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                Our Core

                <span className="block text-[#B7B09F]">
                  Capabilities.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.65,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-[440px] text-[14px] leading-8 text-[#D8D2C8]/80">
                Technology, operations, finance, and
                creative expertise under one team —
                built around the problems your business
                actually needs to solve.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-[#D8D2C8]/20 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B7B09F]">
                  Six Core Capabilities
                </span>

                <ArrowRight
                  size={14}
                  className="text-[#B7B09F]"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background typography */}

        <div className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden">
          <p className="select-none whitespace-nowrap text-center text-[8rem] font-bold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[11rem] lg:text-[15rem]">
            SERVICES
          </p>
        </div>
      </section>

      {/* ===================================
          INTRO — STONE BEIGE
      =================================== */}

      <section className="border-b border-[#181818]/15 bg-[#B7B09F] py-14 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/80">
                  Our Services
                </p>
              </div>

              <h2 className="max-w-[550px] text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#181818] sm:text-[43px]">
                Built around real
                <span className="block">
                  operational needs.
                </span>
              </h2>
            </div>

            <p className="max-w-[490px] text-[13px] leading-8 text-[#181818]/80 lg:justify-self-end">
              Every engagement starts with the problem.
              We bring together the right capabilities
              instead of forcing every business into
              the same predefined package.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          SERVICES — CREAM & STONE
      =================================== */}

      <section aria-label="Cloudlem service capabilities">
        {services.map((service, index) => (
          <ServiceBlock
            key={service.id}
            service={service}
            index={index}
            onExplore={setSelectedService}
          />
        ))}
      </section>

      {/* ===================================
          WHY CLOUDLEM — CHARCOAL
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B7B09F]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                  The Cloudlem Difference
                </p>
              </div>

              <h2 className="max-w-[470px] text-[34px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#D8D2C8] sm:text-[44px]">
                One team.

                <span className="block text-[#B7B09F]">
                  Multiple capabilities.
                </span>
              </h2>

              <p className="mt-6 max-w-[400px] text-[13px] leading-7 text-[#D8D2C8]/70">
                A practical, collaborative approach to
                solving business challenges across
                technology, operations, and growth.
              </p>
            </motion.div>

            <div className="border-t border-[#D8D2C8]/20">
              {[
                ["01", "Problem-First Approach"],
                ["02", "Cross-Functional Expertise"],
                ["03", "Clear Communication"],
                ["04", "Ongoing Support"],
              ].map(([number, title], index) => (
                <motion.div
                  key={number}
                  initial={{
                    opacity: 0,
                    x: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group grid grid-cols-[52px_1fr_auto] items-center border-b border-[#D8D2C8]/20 py-6 transition-colors hover:border-[#B7B09F]"
                >
                  <span className="text-[11px] font-semibold text-[#B7B09F]">
                    {number}
                  </span>

                  <span className="text-[15px] font-medium tracking-[-0.025em] text-[#D8D2C8] transition-transform duration-300 group-hover:translate-x-1 sm:text-[17px]">
                    {title}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-[#B7B09F] transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          FINAL CTA — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Start With the Problem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                Have something slowing your
                business down?

                <span className="mt-2 block text-[#625C51]">
                  Let&apos;s find the right solution.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[340px] text-[13px] leading-7 text-[#181818]/75">
                Tell us what you&apos;re trying to
                solve. We&apos;ll help identify
                the right combination of services
                and next steps.
              </p>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setSelectedService("Custom Engagement")
                }
                className="group mt-7 inline-flex min-h-12 items-center gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:bg-[#33312D]"
              >
                Start a Conversation

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EXISTING SERVICE INQUIRY MODAL
          FUNCTIONALITY PRESERVED
      =================================== */}

      <ServiceInquiryModal
        serviceTitle={selectedService || ""}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
