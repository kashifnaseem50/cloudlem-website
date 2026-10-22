import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FileText,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Cloudlem",
  description: "Terms for using the Cloudlem website.",
};

const sections = [
  {
    id: "website-use",
    number: "01",
    title: "Website use",
    body: "You may use this website for lawful informational and business purposes. Do not attempt to disrupt the site, access restricted systems, or misuse its content.",
  },
  {
    id: "service-engagements",
    number: "02",
    title: "Service engagements",
    body: "Website content is general information, not a binding service offer. Project scope, responsibilities, fees, and delivery terms are defined in a separate written agreement.",
  },
  {
    id: "content",
    number: "03",
    title: "Content",
    body: "Cloudlem owns or licenses the website content unless stated otherwise. You may not republish it commercially without written permission.",
  },
] as const;

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#30213D]">
      {/* INTRO / HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#E9E0EF] bg-[#FBF9FE] pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full bg-[#EADDF4]/55 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 left-[16%] h-[370px] w-[370px] rounded-full bg-[#F0E7F8]/65 blur-[85px]"
        />
        <div className="container-systems relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#84758E]"
          >
            <Link href="/" className="transition-colors hover:text-[#75449B]">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-[#75449B]">Terms of Use</span>
          </nav>

          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(270px,0.55fr)] lg:items-end lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#A073B9]" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#85549E]">
                  Cloudlem / Legal
                </p>
              </div>

              <h1 className="max-w-[780px] text-[clamp(2.9rem,6vw,5.6rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#30213D]">
                Terms <span className="text-[#8450A4]">of Use.</span>
              </h1>
              <p className="mt-7 max-w-[625px] text-[16px] leading-[1.9] text-[#72657B] sm:text-[17px]">
                Information about using the Cloudlem website, our content, and
                how service engagements are agreed.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex items-center gap-4 border-l-[2px] border-[#B58ACB] py-2 pl-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#8655A2] shadow-[0_5px_22px_rgba(73,39,96,0.07)]">
                  <FileText size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B88A5]">
                    Last updated
                  </p>
                  <p className="mt-1 text-[14px] font-semibold text-[#392845]">
                    October 6, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[225px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[255px_minmax(0,1fr)] xl:gap-24">
            {/* LEFT CONTENT NAVIGATION */}
            <aside className="min-w-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8F6BA4]">
                  On this page
                </p>
                <div className="mt-5 h-px w-full bg-[#EEE7F2]" />
                <nav aria-label="Terms sections" className="mt-5">
                  <ol className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#766B7E] transition-colors hover:bg-[#F6F0FA] hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]"
                        >
                          <span className="text-[10px] font-semibold text-[#AF8CC0]">
                            {section.number}
                          </span>
                          {section.title}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#contact"
                        className="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#766B7E] transition-colors hover:bg-[#F6F0FA] hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]"
                      >
                        <span className="text-[10px] font-semibold text-[#AF8CC0]">
                          04
                        </span>
                        Contact
                      </a>
                    </li>
                  </ol>
                </nav>

                <div className="mt-9 hidden rounded-2xl border border-[#EDE4F1] bg-[#FBF9FD] p-5 lg:block">
                  <p className="text-[12px] font-semibold text-[#392845]">
                    Your privacy matters
                  </p>
                  <p className="mt-2 text-[12px] leading-6 text-[#7A6F80]">
                    Read how Cloudlem handles personal information.
                  </p>
                  <Link
                    href="/privacy"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#75449B] transition-colors hover:text-[#30213D]"
                  >
                    Privacy Policy
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* LEGAL TEXT */}
            <article className="min-w-0 max-w-[850px]">
              <div className="mb-10 border-b border-[#EDE6F0] pb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9565AC]">
                  Website Terms
                </p>
                <h2 className="mt-4 text-[clamp(1.65rem,3vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.045em] text-[#30213D]">
                  Clear guidance for using our website.
                </h2>
              </div>

              <div className="divide-y divide-[#ECE5EF]">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32 py-9 first:pt-0 sm:py-11"
                    aria-labelledby={`${section.id}-heading`}
                  >
                    <div className="grid gap-4 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7D7EF] bg-[#F7F0FB] text-[11px] font-bold text-[#8250A0]">
                        {section.number}
                      </span>
                      <div>
                        <h3
                          id={`${section.id}-heading`}
                          className="text-[23px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#30213D] sm:text-[26px]"
                        >
                          {section.title}
                        </h3>
                        <p className="mt-4 max-w-[720px] text-[15px] leading-[1.95] text-[#6B6171] sm:text-[16px]">
                          {section.body}
                        </p>
                      </div>
                    </div>
                  </section>
                ))}

                <section
                  id="contact"
                  aria-labelledby="contact-heading"
                  className="scroll-mt-32 py-9 sm:py-11"
                >
                  <div className="grid gap-4 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7D7EF] bg-[#F7F0FB] text-[11px] font-bold text-[#8250A0]">
                      04
                    </span>
                    <div>
                      <h3
                        id="contact-heading"
                        className="text-[23px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#30213D] sm:text-[26px]"
                      >
                        Contact
                      </h3>
                      <p className="mt-4 max-w-[720px] text-[15px] leading-[1.95] text-[#6B6171] sm:text-[16px]">
                        Questions about these terms can be sent to{" "}
                        <a
                          href="mailto:info@cloudlem.com"
                          className="font-semibold text-[#75449B] underline decoration-[#CCB2DD] underline-offset-4 transition-colors hover:text-[#30213D]"
                        >
                          info@cloudlem.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#EBE0F1] bg-[#FBF9FE] px-6 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <Mail size={19} className="text-[#8754A4]" aria-hidden="true" />
                  <span className="text-[13px] font-medium text-[#63556D]">
                    Have a question about these terms?
                  </span>
                </div>
                <a
                  href="mailto:info@cloudlem.com"
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-[#75449B] transition-colors hover:text-[#30213D]"
                >
                  Contact us
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* RELEVANT POLICY */}
      <section className="border-t border-[#EDE6F0] bg-[#FBF9FE] py-16 sm:py-20">
        <div className="container-systems">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9565AC]">
                More information
              </p>
              <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#30213D] sm:text-[35px]">
                Looking for our Privacy Policy?
              </h2>
              <p className="mt-3 max-w-[600px] text-[14px] leading-7 text-[#75697D]">
                Learn more about how we collect, use, and protect personal information.
              </p>
            </div>
            <Link
              href="/privacy"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 self-start rounded-xl bg-[#75449B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.11em] text-white transition-colors hover:bg-[#60357E] sm:self-auto"
            >
              View Privacy Policy
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
