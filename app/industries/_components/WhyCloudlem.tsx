"use client";

import { BadgeCheck, GitMerge, MessageSquareText, Route } from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  { icon: GitMerge, title: "Joined-up thinking", text: "Technology, data, operations, and business needs considered together." },
  { icon: Route, title: "Fit-for-purpose scope", text: "A practical approach shaped around the actual challenge—not a one-size-fits-all package." },
  { icon: MessageSquareText, title: "Clear collaboration", text: "Understandable communication, shared expectations, and meaningful review points." },
  { icon: BadgeCheck, title: "Responsible delivery", text: "Attention to reliability, access, quality, and sustainable operation from the outset." },
];

export default function WhyCloudlem() {
  return (
    <section className="bg-[#FCFAFE] py-20 sm:py-24 lg:py-28">
      <div className="container-systems mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#75449B]" /><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Why Cloudlem</p></div>
            <h2 className="text-[clamp(2.2rem,4vw,3.55rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#2B1B39]">A partner for the <span className="text-[#75449B]">bigger picture.</span></h2>
            <p className="mt-6 max-w-[480px] text-[14px] leading-[1.95] text-[#665C71]">Industry needs rarely fit neatly into one service category. We aim to connect the right disciplines around your goals, with a clear view of what's practical.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={Math.min(i, 2) * 0.065} className="h-full">
                <div className="h-full rounded-[21px] border border-[#E7DDEE] bg-white p-7 shadow-[0_10px_32px_rgba(64,34,85,0.035)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E6F9] text-[#75449B]"><Icon size={22} strokeWidth={1.65} aria-hidden="true" /></span>
                  <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.035em] text-[#301E40]">{title}</h3>
                  <p className="mt-3 text-[12px] leading-[1.9] text-[#6B6075]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
