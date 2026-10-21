"use client";

import { ArrowUpRight } from "lucide-react";
import { industries } from "../_data/industries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function IndustryExplorer() {
  return (
    <section id="industry-overview" aria-labelledby="industry-overview-heading" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-systems mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Explore the sectors"
            title={<span id="industry-overview-heading">Different industries. <span className="text-[#75449B]">Thoughtful solutions.</span></span>}
            description="Discover how our capabilities connect to the needs of different teams and business models. Choose an industry to explore its challenges, opportunities, and relevant Cloudlem services."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {industries.map(({ id, number, name, eyebrow, icon: Icon, overview }, index) => (
            <Reveal key={id} delay={Math.min(index, 3) * 0.055} className="h-full">
              <a href={`#${id}`} aria-label={`Explore ${name}`} className="group flex h-full min-h-[290px] flex-col rounded-[22px] border border-[#E8E0F0] bg-[#FCFAFE] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CDB4E2] hover:bg-[#F7F0FC] hover:shadow-[0_24px_55px_rgba(72,43,96,0.10)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#EDE1F8] text-[#75449B] transition-colors group-hover:bg-[#75449B] group-hover:text-white"><Icon size={24} strokeWidth={1.65} aria-hidden="true" /></span>
                  <span className="text-[12px] font-medium text-[#AC9CB9]">{number} / 08</span>
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.17em] text-[#916AAB]">{eyebrow}</p>
                <h3 className="mt-2 text-[21px] font-semibold leading-[1.2] tracking-[-0.045em] text-[#2A1B39]">{name}</h3>
                <p className="mt-3 grow text-[12px] leading-[1.8] text-[#6D6278]">{overview}</p>
                <div className="mt-7 flex items-center justify-between border-t border-[#E4D9EE] pt-4 text-[11px] font-semibold text-[#75449B]">
                  <span>Explore industry</span>
                  <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
