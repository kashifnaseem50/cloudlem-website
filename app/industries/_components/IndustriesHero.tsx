"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  ChartNoAxesCombined,
  Check,
  DatabaseZap,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  { code: "01", label: "Digital experiences", icon: Blocks },
  { code: "02", label: "Cloud & platforms", icon: DatabaseZap },
  { code: "03", label: "Data & intelligence", icon: ChartNoAxesCombined },
  { code: "04", label: "Security & support", icon: ShieldCheck },
];

const advantages = [
  "Tailored approaches",
  "Connected capabilities",
  "Practical outcomes",
];

export default function IndustriesHero() {
  return (
    <section
      aria-labelledby="industries-hero-heading"
      className="relative isolate overflow-hidden bg-[#FBF9FE] text-[#281935]"
    >
      {/* Subtle background texture; decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_88%_15%,rgba(183,151,217,0.25),transparent_43%),radial-gradient(ellipse_at_6%_96%,rgba(232,215,247,0.60),transparent_44%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[51%] opacity-35 [background-image:linear-gradient(to_right,rgba(139,96,175,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,96,175,0.12)_1px,transparent_1px)] [background-size:56px_56px] lg:block"
      />

      <div className="container-systems mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-20">
          {/* Copy and calls to action. */}
          <Reveal className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#E2D5ED] bg-white/85 px-4 py-2.5 shadow-[0_7px_24px_rgba(81,44,112,0.045)]">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#75449B] shadow-[0_0_0_4px_rgba(117,68,155,0.09)]"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#71408F] sm:tracking-[0.2em]">
                Industries we support
              </span>
            </div>

            <h1
              id="industries-hero-heading"
              className="mt-8 max-w-[760px] text-balance text-[clamp(2.75rem,5.3vw,5.4rem)] font-semibold leading-[1.035] tracking-[-0.065em] text-[#281935] sm:leading-[1.02]"
            >
              Industry insight.
              <span className="mt-2 block bg-gradient-to-r from-[#633485] via-[#75449B] to-[#8858A8] bg-clip-text text-transparent">
                Technology that moves you forward.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-pretty text-[14px] leading-[1.9] text-[#62576C] sm:mt-8 sm:text-[16px] sm:leading-[1.85]">
              Every industry works differently. We bring digital strategy,
              cloud engineering, data, intelligent automation, and business
              services together to shape practical solutions around the way
              your organization operates.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#industry-overview"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-4 rounded-full bg-[#75449B] px-7 py-3 text-center text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.20)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#60357F] hover:shadow-[0_16px_32px_rgba(117,68,155,0.26)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                Explore industries
                <ArrowDownRight
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#D7C5E9] bg-white/90 px-7 py-3 text-center text-[12px] font-semibold text-[#513164] shadow-[0_5px_20px_rgba(62,34,83,0.035)] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#B797D3] hover:bg-[#F7F1FC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                Discuss your requirements
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E5D9EF] pt-6 sm:mt-12 sm:gap-x-8">
              {advantages.map((advantage) => (
                <li
                  key={advantage}
                  className="inline-flex items-center gap-2 text-[11px] font-medium text-[#71657C] sm:text-[12px]"
                >
                  <Check
                    aria-hidden="true"
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-[#75449B]"
                  />
                  {advantage}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Visual overview of the four service pillars. */}
          <Reveal
            delay={0.12}
            className="relative mx-auto w-full min-w-0 max-w-[590px] lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[38px] bg-gradient-to-br from-[#E8D9F5]/80 via-white/5 to-[#EEE5F8]/90 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[26px] border border-white/90 bg-white/80 p-4 shadow-[0_30px_85px_rgba(65,36,88,0.12)] backdrop-blur-sm sm:rounded-[30px] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ECE3F2] pb-5 sm:pb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8655A6]">
                    Cloudlem / Industries
                  </p>
                  <h2 className="mt-2 text-[19px] font-semibold tracking-[-0.045em] text-[#281935] sm:text-[22px]">
                    Capabilities, connected.
                  </h2>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] border border-[#E5D5F0] bg-[#F2E9FA] text-[#75449B]"
                >
                  <Blocks size={20} strokeWidth={1.7} />
                </span>
              </div>

              <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3.5">
                {pillars.map(({ code, label, icon: Icon }) => (
                  <li
                    key={code}
                    className="group flex min-h-[142px] min-w-0 flex-col justify-between rounded-[18px] border border-[#E9DFF1] bg-[#FCFAFE] p-3.5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#D5BCE8] hover:bg-[#F8F2FC] hover:shadow-[0_12px_28px_rgba(86,51,113,0.06)] motion-reduce:transition-none sm:min-h-[164px] sm:rounded-[20px] sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#EFE5F8] text-[#75449B] transition-colors duration-300 group-hover:bg-[#E8D8F5] motion-reduce:transition-none sm:h-11 sm:w-11">
                        <Icon size={21} strokeWidth={1.65} aria-hidden="true" />
                      </span>
                      <span className="pt-0.5 text-[10px] font-semibold tabular-nums text-[#9C85AE]">
                        {code}
                      </span>
                    </div>
                    <p className="mt-6 max-w-[160px] text-[12px] font-semibold leading-[1.5] text-[#3F2C4B] sm:text-[14px]">
                      {label}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-4 rounded-[18px] border border-[#E6D6F0] bg-gradient-to-r from-[#F3EAFB] to-[#F9F4FD] px-4 py-4 sm:mt-4 sm:px-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8655A6]">
                    One connected approach
                  </p>
                  <p className="mt-1 text-[12px] font-semibold text-[#3D2850] sm:text-[13px]">
                    From challenge to solution
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#CEB7E2]" />
                  <span className="h-px w-4 bg-[#AE87CB]" />
                  <span className="h-2 w-2 rounded-full bg-[#A47AC4]" />
                  <span className="h-px w-4 bg-[#AE87CB]" />
                  <span className="h-2 w-2 rounded-full bg-[#75449B]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
