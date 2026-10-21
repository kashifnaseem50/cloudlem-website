"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
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

// Existing Cloudlem content retained from the About page.
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

const missionCapabilities = [
  {
    title: "Cloud Architecture",
    description: "Delivering secure and scalable cloud architectures.",
    icon: Cloud,
  },
  {
    title: "Intelligent Systems",
    description: "Building intelligent AI-driven systems.",
    icon: Bot,
  },
  {
    title: "DevOps & Automation",
    description: "Automating infrastructure with DevOps best practices.",
    icon: Workflow,
  },
  {
    title: "Security & Reliability",
    description: "Prioritizing cybersecurity, compliance, and reliability.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "Fostering innovation, mentorship, and global collaboration.",
    icon: Users,
  },
  {
    title: "Long-Term Value",
    description: "Building systems that create long-term value and growth.",
    icon: Globe2,
  },
];

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

const principles = ["Technology", "Creativity", "Strategy"];

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
}) {
  const reduced = useReducedMotion();
  const offset =
    from === "left" ? { x: -20, y: 0 } :
    from === "right" ? { x: 20, y: 0 } :
    { x: 0, y: 22 };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-[#9868B8]" />
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9FE] text-[#2B2036]">
      {/* HERO — PREMIUM LAVENDER AND WHITE */}
      <section className="relative isolate overflow-hidden border-b border-[#E9DEF1] bg-[linear-gradient(120deg,#FFFFFF_0%,#FBF8FE_48%,#F1EAF9_100%)] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-20 z-0 h-[430px] w-[430px] rounded-full bg-[#DCC9EF]/45 blur-[95px] sm:h-[560px] sm:w-[560px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-32 z-0 h-[430px] w-[430px] rounded-full bg-[#F1E7FA] blur-[100px]" />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.07fr_0.93fr] lg:gap-20">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#DFD0EA] bg-white/85 px-4 py-2 shadow-[0_8px_25px_rgba(74,44,93,0.04)]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#75449B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">Who we are</span>
              </div>

              <h1 className="mt-8 max-w-[760px] text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-[#2C1E36]">
                About <span className="block text-[#75449B]">Cloudlem.</span>
              </h1>

              <p className="mt-7 max-w-[560px] text-[17px] font-medium leading-8 text-[#3F2F4C] sm:text-[19px]">
                People do business with people.
              </p>
              <p className="mt-3 max-w-[590px] text-[14px] leading-[1.9] text-[#695E73] sm:text-[16px]">
                We combine technology, creativity, and strategy to help businesses grow.
                Our approach brings together practical engineering and business-focused thinking.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#our-approach"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.18)] transition-all hover:bg-[#61367F] hover:shadow-[0_15px_30px_rgba(117,68,155,0.23)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Discover our approach
                  <ArrowDownRight size={17} className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#D8C4E7] bg-white px-6 py-3 text-[12px] font-semibold text-[#603F78] transition-colors hover:border-[#75449B] hover:bg-[#F6EFFB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Explore services
                  <ArrowUpRight size={16} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} from="right" className="min-w-0">
              <div className="relative mx-auto max-w-[540px] lg:ml-auto">
                <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#E8D9F3]/65 via-white/10 to-[#D8C0ED]/45 blur-2xl" />
                <div className="relative overflow-hidden rounded-[26px] border border-[#E4D8EF] bg-white/90 p-6 shadow-[0_25px_70px_rgba(73,39,100,0.09)] backdrop-blur-sm sm:p-9">
                  <div className="flex items-center justify-between gap-4 border-b border-[#EEE5F4] pb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#906FA9]">The Cloudlem approach</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E6F8] text-[#75449B]">
                      <Handshake size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>
                  <h2 className="mt-7 text-[clamp(1.45rem,2.8vw,2.2rem)] font-semibold leading-[1.2] tracking-[-0.05em] text-[#30203C]">
                    Built on expertise.<br />
                    <span className="text-[#75449B]">Driven by purpose.</span>
                  </h2>
                  <p className="mt-5 text-[13px] leading-7 text-[#746A7F]">
                    Technology should solve meaningful problems, simplify operations,
                    and support long-term business growth.
                  </p>
                  <div className="mt-7 grid grid-cols-3 gap-2 border-t border-[#EEE6F3] pt-6 sm:gap-3">
                    {principles.map((item, index) => (
                      <div key={item} className="rounded-xl border border-[#E9DFF1] bg-[#FBF8FE] px-2 py-4 text-center sm:px-3">
                        <p className="text-[10px] font-bold tabular-nums text-[#9C82B1]">0{index + 1}</p>
                        <p className="mt-2 break-words text-[11px] font-semibold text-[#4E355E] sm:text-[12px]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section id="our-approach" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal from="left">
              <SectionLabel>The Cloudlem approach</SectionLabel>
              <h2 className="mt-5 max-w-[525px] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.09] tracking-[-0.06em]">
                Built on expertise.<span className="mt-1 block text-[#75449B]">Driven by purpose.</span>
              </h2>
              <div className="mt-7 h-[2px] w-12 bg-[#75449B]" />
            </Reveal>
            <Reveal delay={0.08} from="right">
              <p className="max-w-[620px] text-[16px] font-medium leading-8 text-[#40324C]">
                At Cloudlem, we believe technology should solve meaningful problems,
                simplify operations, and support long-term business growth.
              </p>
              <p className="mt-5 max-w-[620px] text-[14px] leading-8 text-[#716779]">
                We bring together cloud infrastructure, DevOps, AI and automation,
                digital development, and complementary business capabilities to help
                organizations move forward with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {principles.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[#E5D8EF] bg-[#F8F3FC] px-4 py-2 text-[12px] font-semibold text-[#634479]">
                    <CheckCircle2 size={15} aria-hidden="true" className="text-[#75449B]" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-[#F7F3FC] py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <Reveal className="mb-11 sm:mb-14">
            <SectionLabel>Our direction</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.12] tracking-[-0.055em]">
              Vision <span className="text-[#75449B]">&amp; Mission</span>
            </h2>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <Reveal from="left" className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-[#E5D9EE] bg-white p-6 shadow-[0_16px_45px_rgba(65,37,84,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(65,37,84,0.085)] sm:p-9 lg:p-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1E7F9] text-[#75449B]"><Rocket size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="text-[11px] font-semibold text-[#9D85AF]">01 / Vision</span>
                </div>
                <h3 className="mt-9 max-w-[530px] text-[clamp(1.45rem,2.5vw,2.05rem)] font-semibold leading-[1.18] tracking-[-0.045em] text-[#30233D]">
                  To become a globally trusted <span className="text-[#75449B]">cloud and AI innovation</span> company.
                </h3>
                <div className="mt-7 h-[2px] w-11 bg-[#B38BCC]" />
                <p className="mt-6 text-[13px] leading-8 text-[#675C72]">
                  We envision a world where advanced cloud infrastructure, DevOps automation,
                  and AI systems are accessible, scalable, and designed to create meaningful
                  impact for organizations of all sizes.
                </p>
                <p className="mt-4 text-[13px] leading-8 text-[#776D7F]">
                  Our vision is to empower businesses, communities, and future leaders
                  through secure, ethical, and intelligent technology that drives
                  sustainable growth and innovation.
                </p>
              </article>
            </Reveal>

            <Reveal from="right" delay={0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-[#DDCBEC] bg-[#EDE2F7] p-6 shadow-[0_16px_45px_rgba(65,37,84,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(65,37,84,0.085)] sm:p-9 lg:p-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-[#75449B]"><Target size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="text-[11px] font-semibold text-[#806496]">02 / Mission</span>
                </div>
                <h3 className="mt-9 max-w-[530px] text-[clamp(1.45rem,2.5vw,2.05rem)] font-semibold leading-[1.18] tracking-[-0.045em] text-[#30233D]">
                  Design, secure, and optimize <span className="text-[#75449B]">cloud-native and AI-powered</span> solutions.
                </h3>
                <div className="mt-7 h-[2px] w-11 bg-[#75449B]" />
                <p className="mt-6 text-[13px] leading-8 text-[#5D5069]">
                  Cloudlem&apos;s mission is to help businesses scale with confidence
                  through secure, intelligent, and automated infrastructure solutions.
                </p>
                <p className="mt-4 text-[13px] leading-8 text-[#6A5B76]">
                  Our goal is not just to deploy technology, but to build systems
                  that create long-term value, stability, and growth.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION CAPABILITIES */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-14">
            <div>
              <SectionLabel>Our capabilities</SectionLabel>
              <h2 className="mt-5 max-w-[550px] text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Turning purpose <span className="block text-[#75449B]">into action.</span>
              </h2>
            </div>
            <p className="max-w-[530px] text-[14px] leading-8 text-[#716779] lg:justify-self-end">
              We combine practical engineering, automation, security, and collaboration
              to deliver solutions that support real operational needs.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missionCapabilities.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.05} className="h-full">
                <article className="group flex h-full flex-col rounded-[21px] border border-[#E8DFF1] bg-[#FBF9FE] p-6 transition-all duration-300 hover:border-[#CCAFDF] hover:bg-white hover:shadow-[0_17px_40px_rgba(79,45,104,0.08)] sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE5F8] text-[#75449B] transition-colors group-hover:bg-[#E8D7F5]"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
                    <span className="text-[11px] font-semibold tabular-nums text-[#AA93BA]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.035em] text-[#33233F]">{title}</h3>
                  <div className="mt-5 h-[2px] w-9 bg-[#C1A0D8]" />
                  <p className="mt-5 text-[13px] leading-7 text-[#716678]">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F8F4FC] py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <Reveal className="mb-12">
            <SectionLabel>What we believe</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Our Core <span className="text-[#75449B]">Values.</span>
            </h2>
            <p className="mt-5 max-w-[560px] text-[14px] leading-8 text-[#72667B]">
              The principles that shape how we think, collaborate, and deliver meaningful results.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
                <article className="group flex h-full flex-col rounded-[23px] border border-[#E6D8EF] bg-white p-7 shadow-[0_12px_35px_rgba(78,45,101,0.04)] transition-all duration-300 hover:border-[#CAA9DE] hover:shadow-[0_20px_45px_rgba(78,45,101,0.085)] sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFE3F8] text-[#75449B]"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                    <span className="text-[11px] font-semibold text-[#AC94BE]">{number}</span>
                  </div>
                  <h3 className="mt-9 text-[25px] font-semibold tracking-[-0.045em] text-[#30223D]">{title}</h3>
                  <div className="mt-6 h-[2px] w-11 bg-[#BC96D4]" />
                  <p className="mt-6 text-[13px] leading-8 text-[#6D6176]">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOTIVATION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal from="left">
              <SectionLabel>Our motivation</SectionLabel>
              <h2 className="mt-5 max-w-[500px] text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
                What fuels <span className="block text-[#75449B]">our passion.</span>
              </h2>
              <p className="mt-6 max-w-[430px] text-[14px] leading-8 text-[#716779]">
                The driving forces behind our commitment to delivering exceptional results for every client.
              </p>
            </Reveal>

            <div className="border-t border-[#E8DEEF]">
              {motivations.map(({ number, title, description, icon: Icon }, index) => (
                <Reveal key={title} from="right" delay={index * 0.06}>
                  <article className="grid grid-cols-[30px_minmax(0,1fr)] gap-4 border-b border-[#E8DEEF] py-8 sm:grid-cols-[43px_minmax(0,1fr)] sm:gap-6">
                    <span className="pt-2 text-[11px] font-semibold text-[#AA90BD]">{number}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E8F8] text-[#75449B]"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                        <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#33243F] sm:text-[20px]">{title}</h3>
                      </div>
                      <p className="mt-4 max-w-[640px] text-[13px] leading-8 text-[#716779]">{description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — SAME WORKING INQUIRY MODAL */}
      <section className="border-t border-[#E6D8EF] bg-[linear-gradient(120deg,#EFE4F8_0%,#F8F3FC_52%,#FFFFFF_100%)] py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <Reveal className="grid items-end gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <SectionLabel>Work with Cloudlem</SectionLabel>
              <h2 className="mt-5 max-w-[720px] text-[clamp(2.1rem,4.3vw,3.7rem)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#30213D]">
                Let&apos;s build <span className="block text-[#75449B]">something meaningful.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-[490px] text-[14px] leading-8 text-[#695D75]">
                Whether you&apos;re exploring a new idea or improving existing systems,
                we&apos;re ready to discuss your technology and business challenges.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  whileHover={reduced ? undefined : { y: -2 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  onClick={() => setInquiryOpen(true)}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#75449B] px-6 py-3 text-[12px] font-semibold text-white shadow-[0_12px_27px_rgba(117,68,155,0.2)] transition-colors hover:bg-[#61367F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Start a conversation
                  <ArrowRight size={16} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                </motion.button>
                <Link
                  href="/services"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#D3BEE2] bg-white/80 px-6 py-3 text-[12px] font-semibold text-[#5E4073] transition-colors hover:border-[#75449B] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Explore services
                  <ArrowRight size={16} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceInquiryModal
        serviceTitle="About Cloudlem - General Inquiry"
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
