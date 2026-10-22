"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react";

import SolutionCard from "../components/solutions/SolutionCard";
import ServiceInquiryModal from "../components/services/ServiceInquiryModal";

// Existing Cloudlem solutions: copy and offerings preserved.
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

const ease = [0.22, 1, 0.36, 1] as const;

export default function SolutionsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const initialUp = reducedMotion ? false : { opacity: 0, y: 24 };
  const initialLeft = reducedMotion ? false : { opacity: 0, x: -18 };
  const initialRight = reducedMotion ? false : { opacity: 0, x: 18 };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9FE] text-[#30223D]">
      {/* HERO — LIGHT LAVENDER */}
      <section className="relative isolate overflow-hidden border-b border-[#E9E0F0] bg-[linear-gradient(120deg,#FFFFFF_0%,#FBF8FE_53%,#F1EAF9_100%)] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[470px] w-[470px] rounded-full bg-[#E6D8F3]/65 blur-[100px] sm:h-[620px] sm:w-[620px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-44 -left-44 -z-10 h-[420px] w-[420px] rounded-full bg-[#EDE4F9]/70 blur-[100px]"
        />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <motion.div
              initial={initialUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E2D3EF] bg-white/85 px-4 py-2 shadow-[0_8px_30px_rgba(80,45,108,0.04)]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#75449B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                  Who we help
                </span>
              </div>

              <h1 className="mt-7 max-w-[800px] text-[clamp(2.9rem,5.8vw,5.5rem)] font-semibold leading-[1.035] tracking-[-0.065em] text-[#30223D]">
                Solutions for
                <span className="block text-[#75449B]">every stage</span>
                of growth.
              </h1>

              <p className="mt-7 max-w-[590px] text-[14px] leading-[1.9] text-[#6B5E75] sm:text-[16px]">
                From ambitious startups to established enterprises and AI-driven
                companies, Cloudlem delivers technology solutions aligned with
                your business needs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#tailored-solutions"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.17)] transition-[background-color,box-shadow,transform] hover:bg-[#613681] hover:shadow-[0_16px_32px_rgba(117,68,155,0.24)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Explore solutions
                  <ArrowDownRight size={17} className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9C5E8] bg-white/75 px-6 py-3 text-[12px] font-semibold text-[#75449B] transition-colors hover:border-[#BE9CD6] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Discuss your project
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                </button>
              </div>

              <div className="mt-9 flex items-center gap-3 border-t border-[#E8DDF0] pt-6">
                <CheckCircle2 size={18} className="shrink-0 text-[#75449B]" aria-hidden="true" />
                <p className="text-[11px] font-semibold tracking-[0.06em] text-[#7A668B]">
                  Practical. Scalable. Reliable.
                </p>
              </div>
            </motion.div>

            {/* Decorative information panel; no unsupported numerical claims. */}
            <motion.div
              initial={initialUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
            >
              <div className="absolute -inset-3 rounded-[30px] border border-[#E9DEF2]/65" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[26px] border border-[#E4D9EE] bg-white/90 p-6 shadow-[0_24px_75px_rgba(62,38,86,0.09)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-[#EFE8F4] pb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9274A8]">Your growth partner</p>
                    <h2 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.04em] text-[#30223D] sm:text-[26px]">
                      One approach. Different ambitions.
                    </h2>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2E9F9] text-[#75449B]">
                    <Target size={23} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </div>

                <div className="divide-y divide-[#EEE6F4]">
                  {solutions.map(({ title, description, icon: Icon }, index) => (
                    <div key={title} className="flex items-start gap-4 py-5 last:pb-1">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4EDF9] text-[#75449B]">
                        <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-[14px] font-semibold text-[#352641]">{title}</h3>
                          <span className="text-[10px] font-semibold text-[#B3A1BE]">0{index + 1}</span>
                        </div>
                        <p className="mt-1 text-[12px] leading-6 text-[#817487]">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-[#EEE6F4] bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease }}
            className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Our approach</p>
              <h2 className="mt-5 max-w-[610px] text-[clamp(2.05rem,3.6vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30223D]">
                Technology that works <span className="text-[#75449B]">for your business.</span>
              </h2>
            </div>
            <p className="max-w-[535px] text-[13px] leading-[1.9] text-[#71667A] sm:text-[14px] lg:justify-self-end">
              Every organization faces different operational challenges. We combine
              the right technologies, engineering practices, and delivery expertise
              to help you move forward with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TAILORED SOLUTION CARDS — existing functional component retained */}
      <section id="tailored-solutions" className="scroll-mt-24 bg-[#FBF9FE] py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease }}
            className="mb-10 flex flex-col gap-5 border-b border-[#E8DFF0] pb-8 sm:mb-12 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Tailored solutions</p>
              <h2 className="mt-4 max-w-[660px] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30223D]">
                Built for the way <span className="text-[#75449B]">your business operates.</span>
              </h2>
            </div>
            <p className="max-w-[350px] text-[13px] leading-7 text-[#776B81]">
              Specialized solutions for organizations at different stages of
              growth, from early-stage businesses to established enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={initialUp}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-45px" }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08, ease }}
                className="h-full min-w-0"
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8DFF0] pt-6">
            <p className="text-[12px] text-[#807286]">
              Practical engineering for organizations of every size.
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#75449B]">
              Cloudlem solutions <ArrowRight size={16} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      {/* WHY CLOUDLEM */}
      <section className="border-y border-[#E9DEF1] bg-[#F4EDF9] py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial={initialLeft}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, ease }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Why Cloudlem</p>
              <h2 className="mt-5 max-w-[485px] text-[clamp(2.1rem,3.6vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30223D]">
                The right expertise. <span className="text-[#75449B]">The right solution.</span>
              </h2>
              <p className="mt-6 max-w-[455px] text-[13px] leading-[1.9] text-[#71667A] sm:text-[14px]">
                We focus on meaningful business outcomes, operational reliability,
                and solutions that remain useful as your organization evolves.
              </p>
              <div className="mt-8 hidden h-px w-24 bg-[#D1B5E3] lg:block" aria-hidden="true" />
            </motion.div>

            <div className="overflow-hidden rounded-[23px] border border-[#E6D9EF] bg-white/85 px-5 shadow-[0_16px_45px_rgba(78,44,103,0.035)] sm:px-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={initialRight}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.06, ease }}
                  className="group grid grid-cols-[35px_1fr] gap-4 border-b border-[#EEE6F4] py-7 last:border-b-0 sm:grid-cols-[50px_1fr] sm:gap-5 sm:py-8"
                >
                  <span className="pt-1 text-[12px] font-semibold text-[#A784BE]">{item.number}</span>
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1E8F8] text-[#75449B]">
                        <Check size={17} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="pt-1 text-[16px] font-semibold tracking-[-0.025em] text-[#352541] sm:text-[18px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="ml-11 mt-3 max-w-[540px] text-[13px] leading-[1.85] text-[#776C80]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#F1E9F9_0%,#FAF7FD_64%,#FFFFFF_100%)] py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[330px] w-[330px] rounded-full bg-[#E7D8F3]/60 blur-[90px]" />
        <div className="container-systems relative z-10">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease }}
            className="grid gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-16"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Let&apos;s work together</p>
              <h2 className="mt-5 max-w-[720px] text-[clamp(2.2rem,4vw,3.7rem)] font-semibold leading-[1.1] tracking-[-0.06em] text-[#30223D]">
                Your challenge. <span className="text-[#75449B]">Our next solution.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-[430px] text-[13px] leading-[1.9] text-[#71667A] sm:text-[14px]">
                Tell us about your business needs. We&apos;ll help you identify the
                right technology approach and next steps.
              </p>
              <motion.button
                type="button"
                whileHover={reducedMotion ? undefined : { y: -2 }}
                whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.17)] transition-colors hover:bg-[#613681] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Discuss your project
                <ArrowRight size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Existing Supabase inquiry modal; behavior preserved. */}
      <ServiceInquiryModal
        serviceTitle="Solutions Consultation"
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
