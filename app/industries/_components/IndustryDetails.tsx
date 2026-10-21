"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CornerDownRight, Sparkles } from "lucide-react";
import { industries, type Industry } from "../_data/industries";
import Reveal from "./Reveal";

function Detail({ industry, index }: { industry: Industry; index: number }) {
  const { id, name, number, eyebrow, icon: Icon, description, focus, challenges, opportunities, services } = industry;
  const flip = index % 2 === 1;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`scroll-mt-24 overflow-hidden border-t border-[#EBE3F2] py-20 sm:py-24 lg:py-28 ${flip ? "bg-[#F8F4FC]" : "bg-[#FDFBFF]"}`}>
      <div className="container-systems mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Reveal className={flip ? "lg:order-2" : ""}>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-[19px] border border-[#DBC7EC] bg-white text-[#75449B] shadow-[0_9px_30px_rgba(117,68,155,0.06)]"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.19em] text-[#936BAC]">{number} / 08 — {eyebrow}</span>
            </div>
            <h2 id={`${id}-heading`} className="mt-8 max-w-[680px] text-[clamp(2.2rem,4.1vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291936]">{name}<span className="text-[#AA80C9]">.</span></h2>
            <p className="mt-7 max-w-[625px] text-[14px] leading-[2] text-[#655A70] sm:text-[15px]">{description}</p>
            <div className="mt-8 rounded-r-2xl border-l-[3px] border-[#9A6CB9] bg-[#F0E7F8]/70 px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#956AB0]">Where we focus</p>
              <p className="mt-2 text-[16px] font-medium leading-7 tracking-[-0.02em] text-[#493257]">{focus}</p>
            </div>
            <h3 className="mt-9 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7C6390]">Relevant Cloudlem services</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group inline-flex items-center gap-2 rounded-full border border-[#DAC8E9] bg-white px-4 py-2.5 text-[11px] font-semibold text-[#5B3975] transition hover:border-[#75449B] hover:bg-[#F1E8FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]">
                  {service.label}<ArrowUpRight size={13} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href={`/contact?industry=${encodeURIComponent(id)}`} className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#75449B] px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-[#60357F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]">Discuss your needs <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></Link>
              <a href="#industry-overview" className="text-[12px] font-semibold text-[#75449B] underline decoration-[#BBA0CF] underline-offset-4 hover:decoration-[#75449B]">All industries</a>
            </div>
          </Reveal>

          <Reveal delay={0.09}>
            <div className="relative overflow-hidden rounded-[27px] border border-[#E3D5EF] bg-white p-5 shadow-[0_30px_80px_rgba(71,41,96,0.08)] sm:p-7 lg:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#EADBFA]/70 blur-3xl" />
              <div className="relative flex items-center justify-between gap-3 border-b border-[#ECE4F2] pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#9C7CB2]">Industry perspective</p>
                  <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.04em] text-[#2C1B3B]">From priorities to possibilities</h3>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEE3F8] text-[#75449B]"><Sparkles size={20} strokeWidth={1.6} aria-hidden="true" /></span>
              </div>
              <div className="relative mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[20px] border border-[#EAE2F1] bg-[#FCFAFD] p-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#806A91]"><span className="h-2 w-2 rounded-full bg-[#BDA4D0]" aria-hidden="true" />Common challenges</div>
                  <ul className="mt-5 space-y-5">
                    {challenges.map((item) => <li key={item} className="flex items-start gap-2.5 text-[12px] leading-6 text-[#605369]"><span aria-hidden="true" className="mt-1 shrink-0 text-[#A77FC3]"><CornerDownRight size={15} /></span><span>{item}</span></li>)}
                  </ul>
                </div>
                <div className="rounded-[20px] border border-[#DCC7ED] bg-[#F2EAF9] p-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#75449B]"><span className="h-2 w-2 rounded-full bg-[#75449B]" aria-hidden="true" />Areas we can help</div>
                  <ul className="mt-5 space-y-5">
                    {opportunities.map((item) => <li key={item} className="flex items-start gap-2.5 text-[12px] leading-6 text-[#4E3D5C]"><span aria-hidden="true" className="mt-1 shrink-0 text-[#75449B]"><Check size={15} strokeWidth={2} /></span><span>{item}</span></li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#E7DDF0] bg-[#FBF8FD] px-5 py-4">
                <span className="h-px w-6 shrink-0 bg-[#9064B1]" aria-hidden="true" />
                <p className="text-[11px] leading-5 text-[#756581]">Every engagement begins with your actual needs, systems, and goals.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function IndustryDetails() {
  return <>{industries.map((industry, index) => <Detail key={industry.id} industry={industry} index={index} />)}</>;
}
