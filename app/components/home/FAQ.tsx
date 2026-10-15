import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Cloudlem offer?",
    answer:
      "Cloudlem provides AI and automation, cloud and DevOps, web development, bookkeeping and accounting, design and branding, and business growth support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope and complexity. Smaller engagements can take days or weeks, while larger implementations are delivered in clearly defined stages.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Cloudlem is based in Gilgit, Pakistan and works remotely with businesses across different markets.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope, timeline, and support requirements. We define the work first and provide a clear estimate before delivery begins.",
  },
];

const FAQ = () => {
  return (
    <section className="border-y border-black/[0.06] bg-[#D8D2C8] py-4 text-[#171717] lg:py-5">
      <div className="container-systems">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.35fr_0.42fr] lg:items-start lg:gap-8">
          {/* Left content */}
          <div className="pt-1">
            <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#7A624F]">
              Frequently Asked Questions
            </p>

            <h2 className="max-w-[330px] text-[22px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-[24px]">
              Everything You Need to Know
            </h2>

            <p className="mt-2.5 max-w-[280px] text-[10.5px] leading-[1.55] text-[#4F4A44]">
              Quick answers to common questions about our services, process,
              and working with us.
            </p>
          </div>

          {/* FAQ list */}
          <div className="space-y-[6px]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-[999px] border border-black/[0.10] bg-[#181818]"
              >
                <summary className="flex min-h-[29px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-[7px] text-[10.5px] font-medium leading-none text-white marker:content-none">
                  <span>{faq.question}</span>

                  <Plus
                    size={12}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#D9D0C4] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>

                <div className="border-t border-white/[0.08] px-4 pb-3 pt-2">
                  <p className="max-w-[620px] text-[10px] leading-5 text-white/80">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-[29px] w-fit items-center gap-2 rounded-[3px] border border-[#171717]/25 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.11em] text-[#171717] transition-colors duration-200 hover:border-[#B8794F] hover:text-[#9C633E]"
            >
              View All FAQs

              <ArrowRight
                size={10}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;