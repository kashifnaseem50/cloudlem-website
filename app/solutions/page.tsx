
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Target,
  Zap,
} from "lucide-react";

import SolutionCard from "../components/solutions/SolutionCard";
import ServiceInquiryModal from "../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM SOLUTIONS
// ==========================================

const solutions = [
  {
    title: "Startups",
    description:
      "Accelerate your growth with scalable infrastructure, automated deployments, and cost-optimized cloud solutions.",
    icon: Zap,
    cta: "Get Started",
    features: [
      "Scalable CI/CD Pipelines",
      "Kubernetes for Rapid Scaling",
      "Cloud Cost Optimization",
      "MVP Development Support",
    ],
  },
  {
    title: "Enterprises",
    description:
      "Modernize legacy systems, implement automation, and ensure compliance with enterprise-grade cloud solutions.",
    icon: Building2,
    cta: "Learn More",
    features: [
      "Legacy System Modernization",
      "Enterprise Automation",
      "Compliance & Security",
      "Multi-Cloud Strategy",
    ],
  },
  {
    title: "AI Companies",
    description:
      "Build, train, and deploy AI models at scale with our MLOps expertise and cloud infrastructure.",
    icon: Bot,
    cta: "Explore AI Solutions",
    features: [
      "Model Serving Infrastructure",
      "MLOps Implementation",
      "Vector Databases",
      "Data Pipeline Automation",
    ],
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ==========================================
// WHY CLOUDLEM
// ==========================================

const advantages = [
  {
    number: "01",
    title: "Built Around Your Needs",
    description:
      "We start with your business challenges and recommend the right technology approach.",
  },
  {
    number: "02",
    title: "Engineering-Led Delivery",
    description:
      "Practical expertise across cloud, DevOps, automation, and AI infrastructure.",
  },
  {
    number: "03",
    title: "Designed to Scale",
    description:
      "Solutions built for operational reliability, maintainability, and future growth.",
  },
];

// ==========================================
// SOLUTIONS PAGE
// ==========================================

export default function SolutionsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden border-b border-[#D8D2C8]/10 bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* Hero heading */}

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
                  Who We Help
                </p>
              </div>

              <h1 className="max-w-[770px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                Solutions for

                <span className="block text-[#B7B09F]">
                  Every Stage
                </span>

                of Growth.
              </h1>
            </motion.div>

            {/* Hero description */}

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
                From ambitious startups to established
                enterprises and AI-driven companies,
                Cloudlem delivers technology solutions
                aligned with your business needs.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-[#D8D2C8]/20 pt-5">
                <Target
                  size={17}
                  strokeWidth={1.6}
                  className="text-[#B7B09F]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B7B09F]">
                  Practical. Scalable. Reliable.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative background typography */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[8rem] font-bold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[11rem] lg:text-[15rem]">
            SOLUTIONS
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
                  Our Approach
                </p>
              </div>

              <h2 className="max-w-[550px] text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#181818] sm:text-[43px]">
                Technology that works

                <span className="block">
                  for your business.
                </span>
              </h2>
            </div>

            <p className="max-w-[490px] text-[13px] leading-8 text-[#181818]/80 lg:justify-self-end">
              Every organization faces different
              operational challenges. We combine the
              right technologies, engineering practices,
              and delivery expertise to help you move
              forward with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          SOLUTION CARDS — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">

          {/* Section introduction */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-6 border-b border-[#181818]/15 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Tailored Solutions
                </p>
              </div>

              <h2 className="max-w-[600px] text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#181818] sm:text-[42px]">
                Built for the way
                <span className="block">
                  your business operates.
                </span>
              </h2>
            </div>

            <p className="max-w-[350px] text-[12.5px] leading-7 text-[#181818]/75">
              Specialized solutions for organizations
              at different stages of growth, from
              early-stage businesses to established
              enterprises.
            </p>
          </motion.div>

          {/* Existing SolutionCard components */}

          <motion.div
            className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-70px",
            }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                className="h-full"
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </motion.div>

          {/* Section bottom note */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#181818]/15 pt-6">
            <p className="text-[11px] font-medium text-[#181818]/70">
              Practical engineering for organizations
              of every size.
            </p>

            <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#181818]">
              Cloudlem Solutions

              <ArrowRight
                size={15}
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </section>

      {/* ===================================
          WHY CLOUDLEM — CHARCOAL
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Section heading */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B7B09F]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                  Why Cloudlem
                </p>
              </div>

              <h2 className="max-w-[470px] text-[34px] font-semibold leading-[1.06] tracking-[-0.055em] text-[#D8D2C8] sm:text-[44px]">
                The right expertise.

                <span className="block text-[#B7B09F]">
                  The right solution.
                </span>
              </h2>

              <p className="mt-6 max-w-[410px] text-[13px] leading-7 text-[#D8D2C8]/70">
                We focus on meaningful business outcomes,
                operational reliability, and solutions
                that remain useful as your organization
                evolves.
              </p>
            </motion.div>

            {/* Advantages list */}

            <div className="border-t border-[#D8D2C8]/20">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group grid grid-cols-[44px_1fr] gap-5 border-b border-[#D8D2C8]/20 py-6 sm:grid-cols-[55px_1fr]"
                >
                  <span className="pt-1 text-[11px] font-semibold text-[#B7B09F]">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#B7B09F]/40 text-[#B7B09F]">
                        <Check
                          size={15}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="text-[16px] font-semibold tracking-[-0.025em] text-[#D8D2C8] transition-transform duration-300 group-hover:translate-x-1 sm:text-[17px]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-[550px] text-[12.5px] leading-7 text-[#D8D2C8]/65">
                      {item.description}
                    </p>
                  </div>
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
                  Let&apos;s Work Together
                </p>
              </div>

              <h2 className="max-w-[750px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                Your challenge.

                <span className="mt-2 block text-[#625C51]">
                  Our next solution.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[350px] text-[13px] leading-7 text-[#181818]/75">
                Tell us about your business needs.
                We&apos;ll help you identify the right
                technology approach and next steps.
              </p>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Project

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
          EXISTING INQUIRY MODAL
      =================================== */}

      <ServiceInquiryModal
        serviceTitle="Solutions Consultation"
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
