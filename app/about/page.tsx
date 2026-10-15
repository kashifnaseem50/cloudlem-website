
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Globe2,
  Handshake,
  Lightbulb,
  Rocket,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM CORE VALUES
// ==========================================

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We constantly explore and apply modern technology to create better outcomes.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "We deliver dependable systems, clear processes, and consistent execution.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Client Growth",
    description:
      "We align every initiative with measurable business growth and impact.",
    icon: TrendingUp,
  },
];

// ==========================================
// HOW WE DELIVER OUR MISSION
// ==========================================

const missionCapabilities = [
  {
    title: "Cloud Architecture",
    description:
      "Delivering secure and scalable cloud architectures.",
    icon: Cloud,
  },
  {
    title: "Intelligent Systems",
    description:
      "Building intelligent AI-driven systems.",
    icon: Bot,
  },
  {
    title: "DevOps & Automation",
    description:
      "Automating infrastructure with DevOps best practices.",
    icon: Workflow,
  },
  {
    title: "Security & Reliability",
    description:
      "Prioritizing cybersecurity, compliance, and reliability.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description:
      "Fostering innovation, mentorship, and global collaboration.",
    icon: Users,
  },
  {
    title: "Long-Term Value",
    description:
      "Building systems that create long-term value and growth.",
    icon: Globe2,
  },
];

// ==========================================
// WHAT MOTIVATES CLOUDLEM
// ==========================================

const motivations = [
  {
    number: "01",
    title: "Purpose-Driven Impact",
    description:
      "We are motivated by the tangible impact our work has on businesses. Solving complex technical challenges to unlock real-world value is what gets us out of bed.",
    icon: Target,
  },
  {
    number: "02",
    title: "Relentless Curiosity",
    description:
      "Technology never stops evolving, and neither do we. Our passion for learning ensures we're always bringing the most advanced and effective solutions to the table.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Partnership Success",
    description:
      "Your win is our win. We are driven by building long-term partnerships where we become an integral part of your growth story, not just a service provider.",
    icon: Handshake,
  },
];

// ==========================================
// SHARED ANIMATION
// ==========================================

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

// ==========================================
// ABOUT PAGE
// ==========================================

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
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
                  Who We Are
                </p>
              </div>

              <h1 className="max-w-[760px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                About
                <span className="block text-[#B7B09F]">
                  Cloudlem.
                </span>
              </h1>
            </motion.div>

            {/* Description */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.65,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-[470px] text-[16px] font-medium leading-8 text-[#D8D2C8]">
                People do business with people.
              </p>

              <p className="mt-4 max-w-[470px] text-[13px] leading-8 text-[#D8D2C8]/75">
                We combine technology, creativity,
                and strategy to help businesses grow.
                Our approach brings together practical
                engineering and business-focused thinking.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-[#D8D2C8]/20 pt-5">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#B7B09F]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B7B09F]">
                  Technology. Creativity. Strategy.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background typography */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[7rem] font-bold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[10rem] lg:text-[14rem]">
            ABOUT CLOUDLEM
          </p>
        </div>
      </section>

      {/* ===================================
          COMPANY INTRO — STONE BEIGE
      =================================== */}

      <section className="border-b border-[#181818]/15 bg-[#B7B09F] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20"
          >
            {/* Introduction heading */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/80">
                  The Cloudlem Approach
                </p>
              </div>

              <h2 className="max-w-[500px] text-[32px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[43px]">
                Built on expertise.

                <span className="block">
                  Driven by purpose.
                </span>
              </h2>

              <div className="mt-7 h-[2px] w-12 bg-[#181818]" />
            </div>

            {/* Introduction text */}

            <div>
              <p className="max-w-[590px] text-[15px] font-medium leading-8 text-[#181818]">
                At Cloudlem, we believe technology
                should solve meaningful problems,
                simplify operations, and support
                long-term business growth.
              </p>

              <p className="mt-5 max-w-[590px] text-[13px] leading-8 text-[#181818]/75">
                We bring together cloud infrastructure,
                DevOps, AI and automation, digital
                development, and complementary business
                capabilities to help organizations
                move forward with confidence.
              </p>

              {/* Principles */}

              <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#181818]/20 pt-7">
                {[
                  "Technology",
                  "Creativity",
                  "Strategy",
                ].map((item, index) => (
                  <div key={item}>
                    <p className="mb-3 text-[11px] font-bold text-[#181818]/60">
                      0{index + 1}
                    </p>

                    <p className="break-words text-[11px] font-semibold text-[#181818] sm:text-[14px]">
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
          VISION & MISSION — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">

          {/* Section heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-12"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#181818]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                Our Direction
              </p>
            </div>

            <h2 className="text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
              Vision & Mission
            </h2>
          </motion.div>

          {/* Vision and mission cards */}

          <div className="grid gap-5 lg:grid-cols-2">

            {/* VISION */}

            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={revealTransition}
              className="group relative flex h-full flex-col border border-[#181818]/20 bg-[#B7B09F] p-7 transition-all duration-300 hover:border-[#181818]/60 sm:p-10"
            >
              <div className="mb-9 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                  <Rocket
                    size={24}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[11px] font-bold text-[#181818]/70">
                  01 / Vision
                </span>
              </div>

              <h3 className="max-w-[540px] text-[26px] font-semibold leading-[1.16] tracking-[-0.05em] text-[#181818] sm:text-[33px]">
                To become a globally trusted{" "}
                <span className="underline decoration-[#181818]/40 underline-offset-4">
                  cloud and AI innovation
                </span>{" "}
                company.
              </h3>

              <div className="mt-7 h-[2px] w-12 bg-[#181818]" />

              <p className="mt-7 text-[13px] leading-8 text-[#181818]/85">
                We envision a world where advanced
                cloud infrastructure, DevOps automation,
                and AI systems are accessible, scalable,
                and designed to create meaningful impact
                for organizations of all sizes.
              </p>

              <p className="mt-5 text-[12.5px] leading-8 text-[#181818]/70">
                Our vision is to empower businesses,
                communities, and future leaders through
                secure, ethical, and intelligent technology
                that drives sustainable growth and innovation.
              </p>
            </motion.article>

            {/* MISSION */}

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={revealTransition}
              className="group relative flex h-full flex-col border border-[#181818]/20 bg-[#181818] p-7 text-[#D8D2C8] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(24,24,24,0.14)] sm:p-10"
            >
              <div className="mb-9 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-[#B7B09F] bg-[#B7B09F] text-[#181818]">
                  <Target
                    size={24}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[11px] font-bold text-[#B7B09F]">
                  02 / Mission
                </span>
              </div>

              <h3 className="max-w-[540px] text-[26px] font-semibold leading-[1.16] tracking-[-0.05em] text-[#D8D2C8] sm:text-[33px]">
                Design, secure, and optimize{" "}
                <span className="text-[#B7B09F]">
                  cloud-native and AI-powered
                </span>{" "}
                solutions.
              </h3>

              <div className="mt-7 h-[2px] w-12 bg-[#B7B09F]" />

              <p className="mt-7 text-[13px] leading-8 text-[#D8D2C8]/85">
                Cloudlem&apos;s mission is to help
                businesses scale with confidence
                through secure, intelligent, and
                automated infrastructure solutions.
              </p>

              <p className="mt-5 text-[12.5px] leading-8 text-[#D8D2C8]/70">
                Our goal is not just to deploy
                technology, but to build systems
                that create long-term value,
                stability, and growth.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ===================================
          MISSION CAPABILITIES — STONE
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Our Capabilities
                </p>
              </div>

              <h2 className="max-w-[530px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
                Turning purpose

                <span className="block">
                  into action.
                </span>
              </h2>
            </div>

            <p className="max-w-[490px] text-[13px] leading-8 text-[#181818]/80 lg:justify-self-end">
              We combine practical engineering,
              automation, security, and collaboration
              to deliver solutions that support
              real operational needs.
            </p>
          </motion.div>

          {/* Capabilities grid */}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {missionCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.06,
                  }}
                  className="group flex h-full flex-col border border-[#181818]/20 bg-[#D8D2C8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#181818]/50 hover:shadow-[0_15px_35px_rgba(24,24,24,0.10)] sm:p-8"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[11px] font-bold text-[#181818]/50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-semibold tracking-[-0.035em] text-[#181818]">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-[2px] w-9 bg-[#181818]" />

                  <p className="mt-5 text-[12.5px] leading-7 text-[#181818]/75">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          CORE VALUES — CHARCOAL
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-24">
        <div className="container-systems">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-12"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B7B09F]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                What We Believe
              </p>
            </div>

            <h2 className="text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#D8D2C8] sm:text-[44px]">
              Our Core

              <span className="block text-[#B7B09F]">
                Values.
              </span>
            </h2>

            <p className="mt-6 max-w-[540px] text-[13px] leading-8 text-[#D8D2C8]/70">
              The principles that shape how we think,
              collaborate, and deliver meaningful results.
            </p>
          </motion.div>

          {/* Values grid */}

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative flex h-full flex-col border border-[#B7B09F]/25 bg-[#B7B09F] p-7 text-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8D2C8] sm:p-9"
                >
                  <div className="mb-9 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[11px] font-bold text-[#181818]/60">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="text-[26px] font-semibold tracking-[-0.045em] text-[#181818]">
                    {value.title}
                  </h3>

                  <div className="mt-6 h-[2px] w-11 bg-[#181818]" />

                  <p className="mt-6 text-[13px] leading-8 text-[#181818]/80">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          OUR MOTIVATION — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Introduction */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={revealTransition}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Our Motivation
                </p>
              </div>

              <h2 className="max-w-[470px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
                What fuels

                <span className="block text-[#625C51]">
                  our passion.
                </span>
              </h2>

              <p className="mt-7 max-w-[410px] text-[13px] leading-8 text-[#181818]/75">
                The driving forces behind our commitment
                to delivering exceptional results
                for every client.
              </p>
            </motion.div>

            {/* Motivations list */}

            <div className="border-t border-[#181818]/20">
              {motivations.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
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
                    className="group grid grid-cols-[42px_1fr] gap-5 border-b border-[#181818]/20 py-8 sm:grid-cols-[55px_1fr]"
                  >
                    {/* Number */}

                    <span className="pt-1 text-[11px] font-bold text-[#181818]/60">
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                          <Icon
                            size={19}
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                        </span>

                        <h3 className="text-[18px] font-semibold tracking-[-0.035em] text-[#181818] transition-transform duration-300 group-hover:translate-x-1 sm:text-[20px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-5 max-w-[640px] text-[13px] leading-8 text-[#181818]/75">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          FINAL CTA — STONE BEIGE
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16"
          >
            {/* CTA heading */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Work With Cloudlem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[35px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                Let&apos;s build

                <span className="mt-2 block text-[#514C43]">
                  something meaningful.
                </span>
              </h2>
            </div>

            {/* CTA content */}

            <div className="lg:justify-self-end">
              <p className="max-w-[365px] text-[13px] leading-8 text-[#181818]/80">
                Whether you&apos;re exploring a new
                idea or improving existing systems,
                we&apos;re ready to discuss your
                technology and business challenges.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">

                {/* Working inquiry modal */}

                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInquiryOpen(true)}
                  className="group inline-flex min-h-12 items-center justify-between gap-5 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
                >
                  Start a Conversation

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </motion.button>

                {/* Services link */}

                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 border border-[#181818]/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:border-[#181818] hover:bg-[#181818]/[0.06]"
                >
                  Explore Services

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EXISTING SUPABASE INQUIRY MODAL
          FUNCTIONALITY PRESERVED
      =================================== */}

      <ServiceInquiryModal
        serviceTitle="About Cloudlem - General Inquiry"
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
