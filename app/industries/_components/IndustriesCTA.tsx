"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function IndustriesCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#281938] py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_84%_20%,rgba(170,120,211,0.28),transparent_45%),radial-gradient(ellipse_at_6%_92%,rgba(135,76,178,0.22),transparent_42%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[550px] w-[550px] rounded-full border border-white/10" />
      <div className="container-systems mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3"><span className="h-px w-8 bg-[#C59ADD]" /><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E4C8F1]">Your next step</p></div>
              <h2 className="max-w-[830px] text-[clamp(2.5rem,5.3vw,5rem)] font-semibold leading-[1.06] tracking-[-0.065em]">Let's talk about what <span className="text-[#D3ADEA]">your business needs.</span></h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-[430px] text-[14px] leading-[1.95] text-[#E5DAED]/85">Tell us where you are today and what you want to improve. We'll explore which Cloudlem capabilities might be relevant, and what a sensible next step could look like.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] font-semibold text-[#4D2E63] transition hover:bg-[#EEDFF8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><Mail size={16} aria-hidden="true" />Contact Cloudlem <MoveUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <Link href="/services" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-[12px] font-semibold text-white transition hover:border-white/80 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Browse services <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
