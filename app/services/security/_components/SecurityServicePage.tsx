"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import ServiceInquiryModal from "../../../components/services/ServiceInquiryModal";

export type SecurityServiceContent = {
  title: string;
  accent: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  outcomes: string[];
  problems: { title: string; description: string }[];
  capabilities: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  deliverables: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  related: { title: string; href: string }[];
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-[#A477C0]" />
      <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#80519F]">
        {children}
      </p>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <Reveal className="mb-12 grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#30243B]">
          {title} <span className="text-[#8855A9]">{accent}</span>
        </h2>
      </div>
      <p className="max-w-[550px] text-[15px] leading-[1.85] text-[#665A70] sm:text-[16px]">
        {description}
      </p>
    </Reveal>
  );
}

const capabilityIcons = [ShieldCheck, LockKeyhole, SearchCheck, ClipboardCheck];

export default function SecurityServicePage({
  content,
}: {
  content: SecurityServiceContent;
}) {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full bg-[#DCC6EA]/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl" />
        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.07fr_0.93fr] lg:gap-16">
          <Reveal>
            <Link
              href="/services/security"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#80519F] hover:text-[#4B2B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80519F]"
            >
              <ArrowLeft size={16} aria-hidden="true" className="transition-transform group-hover:-translate-x-1" />
              All Security Services
            </Link>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="max-w-[720px] text-[clamp(2.6rem,5vw,5.25rem)] font-semibold leading-[1.07] tracking-[-0.06em] text-[#291D34]">
              {content.title}
              <span className="mt-2 block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                {content.accent}
              </span>
            </h1>
            <p className="mt-7 max-w-[640px] text-[16px] leading-[1.9] text-[#62576C] sm:text-[17px]">
              {content.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-all hover:-translate-y-0.5 hover:bg-[#5D317F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Project
                <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="#capabilities"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Explore Capabilities <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className="relative lg:pl-4" delay={0.12}>
            <div aria-hidden="true" className="absolute -inset-5 rounded-[36px] bg-[#DCC5EC]/35 blur-2xl" />
            <div className="group relative h-[360px] overflow-hidden rounded-[22px] border-[6px] border-white bg-[#E9DEF1] shadow-[0_30px_70px_rgba(75,40,98,0.16)] sm:h-[465px] lg:h-[535px]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#251531]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[360px]">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">Cloudlem Security</span>
                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">Assess. Secure. Improve.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Engagement outcomes" className="border-b border-[#EEE4F4] bg-white py-8">
        <div className="container-systems grid gap-5 md:grid-cols-3">
          {content.outcomes.map((outcome) => (
            <div key={outcome} className="flex items-start gap-3 text-[14px] font-medium leading-6 text-[#473A52]">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#9162B1]" aria-hidden="true" />
              {outcome}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <SectionTitle
            eyebrow="The Challenge"
            title="Security should solve"
            accent="real operational risks."
            description="Effective security starts with understanding where exposure exists, why it matters, and which controls fit your systems and delivery model."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {content.problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 0.07} className="h-full">
                <article className="h-full rounded-[19px] border border-[#E9DFF0] bg-[#FCFAFD] p-7 sm:p-8">
                  <span className="text-[12px] font-bold tabular-nums tracking-[0.14em] text-[#AC87C4]">0{index + 1}</span>
                  <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.035em] text-[#30243B]">{problem.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.85] text-[#665A70]">{problem.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <SectionTitle
            eyebrow="What We Deliver"
            title="Practical controls."
            accent="Stronger foundations."
            description="Our work combines assessment, implementation planning, automation, and validation to make security improvements measurable and maintainable."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <Reveal key={capability.title} delay={(index % 3) * 0.07} className="h-full">
                  <article className="group flex h-full flex-col rounded-[19px] border border-[#E7DBEF] bg-white p-7 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-all hover:-translate-y-1 hover:border-[#CCB0DD] hover:shadow-[0_20px_40px_rgba(75,38,103,0.09)]">
                    <span className="flex h-13 w-13 items-center justify-center rounded-[14px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5]">
                      <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-[20px] font-semibold leading-snug tracking-[-0.035em] text-[#30213B]">{capability.title}</h3>
                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70]">{capability.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <SectionTitle
            eyebrow="How We Work"
            title="A clear path from"
            accent="assessment to action."
            description="We prioritize useful findings, documented recommendations, and secure changes that work with your existing teams and platforms."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.approach.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
                <div className="h-full border-t-2 border-[#BB91D2] pt-6">
                  <span className="text-[12px] font-bold tracking-[0.15em] text-[#915FB0]">STEP 0{index + 1}</span>
                  <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.85] text-[#665A70]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F6FC] py-20 sm:py-24 lg:py-28">
        <div className="container-systems grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Engagement Outputs</Eyebrow>
            <h2 className="text-[clamp(2.2rem,3.7vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Useful findings. <span className="block text-[#8855A9]">Actionable next steps.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {content.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-[15px] leading-[1.75] text-[#51445B]">
                  <Check size={18} className="mt-1 shrink-0 text-[#8750A7]" aria-hidden="true" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[22px] border border-[#E8DCEF] bg-white p-8 shadow-[0_16px_40px_rgba(75,38,103,0.05)] sm:p-10">
              <Eyebrow>Platforms & Practices</Eyebrow>
              <h3 className="text-[25px] font-semibold tracking-[-0.04em]">Technology-aware, not tool-dependent.</h3>
              <p className="mt-4 text-[14px] leading-[1.9] text-[#665A70]">
                We select controls and tools that fit your existing architecture, operational maturity, and approved technology stack.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {content.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-[#E5D8EC] bg-[#FBF7FD] px-4 py-2 text-[12px] font-medium text-[#714C89]">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="text-[clamp(2.2rem,3.7vw,3.55rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Questions before <span className="text-[#8855A9]">we begin?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-[#E9DFF0] border-y border-[#E9DFF0]">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-[17px] font-semibold leading-[1.5] text-[#342640] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]">
                    {faq.question}
                    <span aria-hidden="true" className="ml-2 inline-block text-[#8952A9] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-[1.9] text-[#665A70]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F8F3FB] py-16 sm:py-20">
        <div className="container-systems">
          <Eyebrow>Explore More Security Services</Eyebrow>
          <div className="grid gap-4 md:grid-cols-2">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-[17px] border border-[#E4D5ED] bg-white p-6 transition-colors hover:border-[#BA92D0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                <span className="text-[17px] font-semibold tracking-[-0.025em]">{item.title}</span>
                <ArrowUpRight size={21} className="shrink-0 text-[#8750A7] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#34203F_0%,#63377D_100%)] py-20 text-white sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="container-systems relative z-10 grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E4C5F6]">Start a Conversation</p>
            <h2 className="max-w-[740px] text-[clamp(2.4rem,4.3vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
              Let&apos;s strengthen your <span className="block text-[#DDC0EF]">security foundations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[465px] text-[15px] leading-[1.85] text-[#F1E7F6]">
              Tell us about your architecture, delivery process, and priorities. We&apos;ll discuss a practical engagement aligned with your environment.
            </p>
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center gap-5 rounded-[9px] bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] transition-all hover:-translate-y-0.5 hover:bg-[#FCF6FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a Security Consultation
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <ServiceInquiryModal
        serviceTitle={content.title + " " + content.accent}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
