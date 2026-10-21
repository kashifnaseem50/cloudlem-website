"use client";

import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const questions = [
  {
    question: "Do you work with businesses outside these eight industries?",
    answer: "Yes. The industries listed are examples of where our capabilities may apply, not a complete limit on whom we can work with. Share your requirements and we'll discuss whether Cloudlem is a suitable fit.",
  },
  {
    question: "Can you combine several services in one project?",
    answer: "Yes. Many projects involve more than one area, such as business applications, cloud operations, data, and automation. We can discuss a joined-up scope based on your goals.",
  },
  {
    question: "Can you support an existing platform instead of building a new one?",
    answer: "Depending on the platform and access available, an engagement may focus on assessment, integration, improvement, migration, or ongoing technical support rather than a complete rebuild.",
  },
  {
    question: "How do you decide which technology is appropriate?",
    answer: "We start with your current processes, constraints, priorities, and desired outcomes. We then discuss options and trade-offs before recommending a direction or agreeing a project scope.",
  },
  {
    question: "Is bookkeeping available without a technology project?",
    answer: "Yes. Cloudlem's Bookkeeping page describes its dedicated monthly, year-end, and one-time bookkeeping options. Bookkeeping can be discussed independently of other technology services.",
  },
  {
    question: "How do we start working together?",
    answer: "Contact us with a brief overview of your organization, what you're trying to improve, and any relevant timelines. We can discuss the next steps and an appropriate scope from there.",
  },
];

export default function IndustriesFAQ() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-systems mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <Reveal><SectionHeading center eyebrow="Common questions" title={<>A few things you may <span className="text-[#75449B]">want to know.</span></>} description="Looking at an industry-specific project or exploring Cloudlem's broader services? Here are answers to common starting questions." /></Reveal>
        <div className="mx-auto mt-12 max-w-[920px] space-y-3">
          {questions.map(({ question, answer }, i) => (
            <Reveal key={question} delay={Math.min(i, 3) * 0.04}>
              <details className="group rounded-[18px] border border-[#E7DCEE] bg-[#FCFAFE] transition-colors open:border-[#D4BCE7] open:bg-[#F9F4FD]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left text-[14px] font-semibold leading-6 text-[#342340] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B] sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEE1F7] text-[#75449B] transition-transform group-open:rotate-45" aria-hidden="true"><Plus size={16} strokeWidth={1.8} /></span>
                </summary>
                <div className="px-5 pb-6 pr-12 text-[13px] leading-[1.9] text-[#6C6075] sm:px-7 sm:pr-16">{answer}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
