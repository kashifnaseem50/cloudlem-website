"use client";

import { ArrowDownRight, ArrowRight, Compass, DraftingCompass, Headset, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Discover", icon: Compass, description: "Understand your industry context, current systems, business priorities, and the problems worth solving." },
  { n: "02", title: "Plan", icon: DraftingCompass, description: "Identify a sensible scope, practical technical options, dependencies, and a clear way to measure progress." },
  { n: "03", title: "Deliver", icon: Rocket, description: "Build, integrate, or improve the agreed solution with clear communication and review points." },
  { n: "04", title: "Support", icon: Headset, description: "Discuss documentation, handover, and ongoing support options that fit the engagement." },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-systems mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeading center eyebrow="Our working approach" title={<>Clear steps. <span className="text-[#75449B]">Practical progress.</span></>} description="The right solution starts with listening. Our approach gives each engagement room for the realities of your systems, team, and business goals." /></Reveal>
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, icon: Icon, description }, i) => (
            <Reveal key={n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[22px] border border-[#E7DCEC] bg-[#FCFAFE] p-7">
                <div className="mb-9 flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#DFCFEC] bg-white text-[#75449B]"><Icon size={24} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="text-[12px] font-medium text-[#AD95C0]">{n} / 04</span>
                </div>
                <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-[#2A1A38]">{title}</h3>
                <p className="mt-4 grow text-[13px] leading-[1.85] text-[#6B5F76]">{description}</p>
                <span aria-hidden="true" className="mt-6 flex items-center gap-2 text-[#AE8BC5]">{i === 3 ? <ArrowDownRight size={19} /> : <ArrowRight size={19} />} <span className="h-px w-10 bg-[#D7C1E7]" /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
