
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Lightbulb,
  Users,
} from "lucide-react";

import JobCard from "../components/careers/JobCard";
import JobApplicationModalSimple from "../components/careers/JobApplicationModalSimple";

// ==========================================
// CLOUDLEM CAREER POSITIONS
// ==========================================

// Confirm these vacancies are genuinely open
// before publishing the Careers page in production.

const jobs = [
  {
    title: "Senior DevOps Engineer",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "We're looking for an experienced DevOps Engineer to design and implement CI/CD pipelines, infrastructure as code, and cloud automation solutions for our clients.",
    tags: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Join our team as a Cloud Solutions Architect to design and implement cloud infrastructure solutions for enterprise clients across multiple cloud platforms.",
    tags: [
      "AWS",
      "Azure",
      "GCP",
      "Architecture",
      "Solutions",
    ],
  },
  {
    title: "AI/ML Engineer",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Mid-level",
    description:
      "We're seeking an AI/ML Engineer to develop and deploy machine learning models and build MLOps pipelines for our clients across various industries.",
    tags: [
      "Python",
      "TensorFlow",
      "MLOps",
      "AWS SageMaker",
      "Data Engineering",
    ],
  },
];

// ==========================================
// CLOUDLEM WORK CULTURE
// ==========================================

const culture = [
  {
    number: "01",
    title: "Engineering & Innovation",
    description:
      "We value practical problem-solving, technical curiosity, and the thoughtful application of modern technologies.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Our approach emphasizes learning, sharing knowledge, and developing the skills needed for evolving technology challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Collaborative Thinking",
    description:
      "We believe strong outcomes come from clear communication, shared responsibility, and working together.",
    icon: Users,
  },
];

// ==========================================
// ANIMATIONS
// ==========================================

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

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
    y: 24,
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
// CAREERS PAGE
// ==========================================

export default function CareersPage() {
  const [selectedJob, setSelectedJob] =
    useState<string | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* HERO HEADING */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
                  Careers at Cloudlem
                </p>
              </div>

              <h1 className="max-w-[770px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                Build Your

                <span className="block text-[#B7B09F]">
                  Future
                </span>

                With Us.
              </h1>
            </motion.div>

            {/* HERO DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.65,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-[470px] text-[14px] leading-8 text-[#D8D2C8]/80">
                Explore opportunities in cloud
                engineering, DevOps, AI, and software
                development. Bring your curiosity,
                technical expertise, and passion
                for solving meaningful challenges.
              </p>

              <motion.a
                href="#opportunities"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 inline-flex min-h-12 items-center gap-7 border border-[#B7B09F] bg-[#B7B09F] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#181818] transition-colors hover:bg-[#D8D2C8]"
              >
                Explore Positions

                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </motion.a>

              <div className="mt-8 flex items-center gap-3 border-t border-[#D8D2C8]/20 pt-5">
                <BriefcaseBusiness
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#B7B09F]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B7B09F]">
                  Discover Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BACKGROUND TYPOGRAPHY */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[8rem] font-bold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[11rem] lg:text-[15rem]">
            CAREERS
          </p>
        </div>
      </section>

      {/* ===================================
          WHY CLOUDLEM — STONE BEIGE
      =================================== */}

      <section className="border-b border-[#181818]/15 bg-[#B7B09F] py-16 text-[#181818] lg:py-24">
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
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20"
          >
            {/* SECTION HEADING */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Our Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
                Work that

                <span className="block">
                  makes an impact.
                </span>
              </h2>

              <div className="mt-7 h-[2px] w-12 bg-[#181818]" />
            </div>

            {/* SECTION DESCRIPTION */}

            <div>
              <p className="max-w-[580px] text-[15px] font-medium leading-8 text-[#181818]">
                At Cloudlem, we believe meaningful
                technology work starts with curiosity,
                collaboration, and a commitment to
                solving real problems.
              </p>

              <p className="mt-5 max-w-[580px] text-[13px] leading-8 text-[#181818]/75">
                Our work spans cloud infrastructure,
                automation, intelligent systems,
                and digital engineering. We value
                thoughtful solutions, technical
                excellence, and continuous improvement.
              </p>

              <div className="mt-9 flex items-center gap-3 border-t border-[#181818]/20 pt-6">
                <Globe2
                  size={18}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#181818]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#181818]/75">
                  Engineering. Collaboration. Growth.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          WORK CULTURE — CHARCOAL
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-24">
        <div className="container-systems">

          {/* SECTION HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-12"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B7B09F]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                What We Value
              </p>
            </div>

            <h2 className="max-w-[750px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#D8D2C8] sm:text-[44px]">
              A Mindset for

              <span className="block text-[#B7B09F]">
                Better Engineering.
              </span>
            </h2>

            <p className="mt-6 max-w-[550px] text-[13px] leading-8 text-[#D8D2C8]/70">
              The principles that influence how we
              work, solve problems, and grow together.
            </p>
          </motion.div>

          {/* CULTURE CARDS */}

          <div className="grid gap-5 md:grid-cols-3">
            {culture.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
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
                  className="group relative flex h-full flex-col border border-[#B7B09F]/30 bg-[#B7B09F] p-7 text-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#D8D2C8] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:p-9"
                >
                  {/* ICON AND NUMBER */}

                  <div className="mb-9 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[11px] font-bold text-[#181818]/65">
                      {item.number}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#181818]">
                    {item.title}
                  </h3>

                  <div className="mt-6 h-[2px] w-11 bg-[#181818]" />

                  {/* DESCRIPTION */}

                  <p className="mt-6 text-[13px] leading-8 text-[#181818]/80">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================
          CAREER OPPORTUNITIES — CREAM
      =================================== */}

      <section
        id="opportunities"
        className="scroll-mt-24 bg-[#D8D2C8] py-16 text-[#181818] lg:py-24"
      >
        <div className="container-systems">

          {/* SECTION INTRODUCTION */}

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
            className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Career Opportunities
                </p>
              </div>

              <h2 className="max-w-[580px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
                Find Your

                <span className="block text-[#625C51]">
                  Next Opportunity.
                </span>
              </h2>
            </div>

            <p className="max-w-[460px] text-[13px] leading-8 text-[#181818]/75 lg:justify-self-end">
              Explore roles across infrastructure,
              cloud architecture, and AI engineering.
              Select a position to review its
              requirements and submit an application.
            </p>
          </motion.div>

          {/* JOB LISTING HEADER */}

          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#181818]/20 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                <BriefcaseBusiness
                  size={17}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>

              <span className="text-[12px] font-semibold text-[#181818]">
                Positions
              </span>
            </div>

            <span className="text-[11px] font-medium text-[#181818]/65">
              {jobs.length} Listed Roles
            </span>
          </div>

          {/* EXISTING JOB CARDS */}

          <motion.div
            className="grid grid-cols-1 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
          >
            {jobs.map((job) => (
              <motion.div
                key={job.title}
                variants={itemVariants}
              >
                <JobCard
                  {...job}
                  onApply={() =>
                    setSelectedJob(job.title)
                  }
                />
              </motion.div>
            ))}
          </motion.div>

          {/* BOTTOM NOTE */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#181818]/20 pt-6">
            <p className="text-[12px] text-[#181818]/75">
              Explore opportunities to contribute
              to meaningful technology projects.
            </p>

            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#181818]">
              Cloudlem Careers

              <ArrowRight
                size={15}
                aria-hidden="true"
              />
            </span>
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
            {/* CTA HEADING */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Connect With Cloudlem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[35px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                The next chapter

                <span className="mt-2 block text-[#514C43]">
                  starts with a conversation.
                </span>
              </h2>
            </div>

            {/* CTA CONTENT */}

            <div className="lg:justify-self-end">
              <p className="max-w-[370px] text-[13px] leading-8 text-[#181818]/80">
                Interested in learning more about
                Cloudlem? Get in touch with our team
                to start a conversation.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Contact Cloudlem

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EXISTING JOB APPLICATION MODAL
          FUNCTIONALITY PRESERVED
      =================================== */}

      <JobApplicationModalSimple
        isOpen={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob ?? ""}
      />
    </main>
  );
}
