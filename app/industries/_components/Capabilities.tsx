"use client";

import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Cloud, Database, Layers3, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    index: "01",
    title: "Digital & applications",
    description: "Thoughtfully designed platforms, connected systems, and digital experiences that support everyday work.",
    icon: Layers3,
    href: "/services/business-applications",
    linkLabel: "Business Applications",
  },
  {
    index: "02",
    title: "Cloud & infrastructure",
    description: "Cloud architecture, application delivery, and operational foundations built with reliability in mind.",
    icon: Cloud,
    href: "/services/cloud-operations-migration",
    linkLabel: "Cloud Operations & Migration",
  },
  {
    index: "03",
    title: "Data & intelligence",
    description: "Connected data, clearer reporting, and analytics that help teams understand what matters.",
    icon: Database,
    href: "/services/data-modernization",
    linkLabel: "Data Modernization",
  },
  {
    index: "04",
    title: "AI & automation",
    description: "Targeted, practical use of intelligent tools to reduce repetitive work and support decision-making.",
    icon: BrainCircuit,
    href: "/services/generative-ai",
    linkLabel: "Generative AI",
  },
  {
    index: "05",
    title: "Security & managed care",
    description: "Risk-aware engineering, responsible access practices, and continued attention to operational needs.",
    icon: ShieldCheck,
    href: "/services/security",
    linkLabel: "Security",
  },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#F3ECFA] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#E2D2EF]" />
      <div className="container-systems relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end lg:gap-12">
            <SectionHeading eyebrow="One connected approach" title={<>Expertise that works <span className="text-[#75449B]">across industries.</span></>} description="Most business challenges cross more than one technical discipline. We combine relevant capabilities instead of treating every need as an isolated service." />
            <Link href="/services" className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-[#A77DC3] pb-2 text-[12px] font-semibold text-[#75449B] hover:border-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]">Explore all services <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map(({ index, title, description, icon: Icon, href, linkLabel }, i) => (
            <Reveal key={index} delay={Math.min(i, 3) * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-[23px] border border-[#E3D5EF] bg-white/95 p-6 shadow-[0_14px_40px_rgba(68,42,87,0.04)] transition hover:border-[#CBB0E2] hover:shadow-[0_20px_45px_rgba(68,42,87,0.09)]">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEE4F8] text-[#75449B]"><Icon size={22} strokeWidth={1.65} aria-hidden="true" /></span>
                  <span className="text-[12px] text-[#B29CC2]">{index}</span>
                </div>
                <h3 className="mt-8 text-[19px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#2B1A3A]">{title}</h3>
                <p className="mt-4 grow text-[12px] leading-[1.9] text-[#6A5E73]">{description}</p>
                <Link href={href} className="group mt-8 inline-flex items-center gap-2 border-t border-[#E9E0F1] pt-4 text-[11px] font-semibold leading-5 text-[#75449B] hover:text-[#502B6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]">{linkLabel} <ArrowUpRight size={15} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
