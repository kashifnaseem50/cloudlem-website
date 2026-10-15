
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  BrainCircuit,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  HeartPulse,
  Landmark,
  LockKeyhole,
  MessagesSquare,
  RadioTower,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — GENERATIVE AI
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Generative AI";

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  knowledge: "/images/backgrounds/section-3-2.jpg",
  automation: "/images/backgrounds/section-2-2.jpg",
  engineering: "/images/backgrounds/section-1-4.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ==========================================
// EDITORIAL SERVICE CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Enterprise Knowledge & AI Assistants",
    title: "Unlock knowledge",
    highlight: "through intelligent AI.",
    image: images.knowledge,
    alt: "Technology environment representing connected AI knowledge systems",
    paragraphs: [
      "Organizations manage large volumes of information through documents, knowledge bases, policies, technical manuals, internal applications, and customer support records. Finding the right information can require searching across multiple systems and reviewing lengthy content manually.",
      "Generative AI can provide a more conversational way to interact with organizational knowledge. Retrieval-Augmented Generation, commonly known as RAG, can connect a language model with approved information sources so its responses draw on relevant retrieved content rather than relying only on the model's general training.",
      "Cloudlem approaches enterprise AI assistants by considering knowledge quality, document processing, retrieval accuracy, access permissions, and response evaluation. The aim is to make authorized information easier to discover and use while maintaining appropriate controls and acknowledging that AI-generated responses require verification.",
    ],
    points: [
      "Enterprise knowledge assistants and AI search",
      "Retrieval-Augmented Generation (RAG) solutions",
      "Document retrieval, citations, and access controls",
    ],
  },
  {
    number: "02",
    eyebrow: "Intelligent Automation & Experiences",
    title: "Make workflows",
    highlight: "more intelligent.",
    image: images.automation,
    alt: "Connected digital systems supporting business workflow automation",
    paragraphs: [
      "Many business processes involve repetitive communication, document review, information entry, summarization, and coordination between applications. These activities can consume valuable time, particularly when information must be interpreted before the next action can be taken.",
      "Generative AI can assist with selected parts of these workflows by drafting responses, summarizing information, classifying requests, extracting structured details, or guiding users through complex procedures. When integrated with approved applications and APIs, AI-assisted processes can present useful suggestions or initiate carefully controlled actions.",
      "We focus on identifying tasks where generative AI is appropriate and where conventional software, deterministic rules, or human judgment remain the better choice. Reliable workflow design includes permissions, validation, error handling, escalation, and human approval for consequential actions.",
    ],
    points: [
      "AI-assisted customer and employee workflows",
      "Document summarization and information extraction",
      "Controlled AI integrations and human approval",
    ],
  },
  {
    number: "03",
    eyebrow: "AI-Accelerated Software Engineering",
    title: "Apply generative AI",
    highlight: "to digital development.",
    image: images.engineering,
    alt: "Abstract technology systems representing software engineering",
    paragraphs: [
      "Software development teams work across requirements, application code, technical documentation, testing, deployment, and maintenance. Generative AI offers opportunities to support some of these activities, particularly when used as an assistant within an established engineering process.",
      "Potential applications include drafting test scenarios, explaining unfamiliar code, preparing technical documentation, supporting code migration analysis, and helping developers explore implementation options. These uses require suitable development tools, clear context, and verification before generated material is incorporated into production systems.",
      "Cloudlem considers AI-assisted development within the broader software delivery lifecycle. We emphasize code review, automated testing, security checks, protection of confidential source material, and accountability for every production change. The objective is to improve engineering workflows without treating AI output as automatically correct.",
    ],
    points: [
      "AI-assisted coding and technical documentation",
      "Test-case generation and software review support",
      "Application modernization and developer workflows",
    ],
  },
];

// ==========================================
// GENERATIVE AI CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Generative AI Consulting",
    description:
      "Assess organizational readiness, identify appropriate AI use cases, evaluate technology choices, and establish a realistic roadmap for responsible adoption.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Design conversational experiences that help users access approved information, navigate services, complete supported tasks, or request human assistance.",
    icon: MessagesSquare,
  },
  {
    number: "03",
    title: "RAG & Enterprise Knowledge Systems",
    description:
      "Develop retrieval-based AI applications that search authorized knowledge sources and generate contextual responses with appropriate grounding and permissions.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Document Intelligence",
    description:
      "Explore generative AI for summarization, document classification, relevant information extraction, and assisted review of text-intensive workflows.",
    icon: FileText,
  },
  {
    number: "05",
    title: "AI Workflow Automation",
    description:
      "Integrate language-model capabilities with approved business processes while maintaining validation, access controls, monitoring, and human oversight.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "LLM & API Integration",
    description:
      "Connect suitable language-model services with applications, internal systems, and enterprise knowledge using secure and maintainable integration patterns.",
    icon: GitBranch,
  },
  {
    number: "07",
    title: "AI-Assisted Software Development",
    description:
      "Evaluate ways AI tools can support documentation, testing, code understanding, migration planning, and other engineering activities under human review.",
    icon: Code2,
  },
  {
    number: "08",
    title: "LLM Evaluation & Monitoring",
    description:
      "Establish practical evaluation methods for answer quality, groundedness, latency, usage costs, failure patterns, and changes in application behavior.",
    icon: SearchCheck,
  },
  {
    number: "09",
    title: "Responsible AI & Governance",
    description:
      "Plan appropriate safeguards for sensitive information, prompt injection, access permissions, human review, output validation, and organizational policies.",
    icon: ShieldCheck,
  },
];

// ==========================================
// INDUSTRY APPLICATIONS
// ==========================================

const industries = [
  {
    number: "01",
    title: "Telecommunications",
    label: "Customer Experience & IT Operations",
    icon: RadioTower,
    description:
      "Generative AI may assist telecommunications teams with service knowledge, customer inquiries, technical documentation, and selected engineering workflows.",
    examples: [
      "Customer service knowledge assistants",
      "Network and technical incident summaries",
      "Code explanation and test documentation",
    ],
  },
  {
    number: "02",
    title: "Banking & Financial Services",
    label: "Knowledge, Service & Documentation",
    icon: Landmark,
    description:
      "Financial organizations can evaluate tightly governed AI tools for internal knowledge retrieval, document review, operational support, and customer service workflows.",
    examples: [
      "Policy and procedure knowledge search",
      "Document summarization and case support",
      "Employee assistance for approved workflows",
    ],
  },
  {
    number: "03",
    title: "Retail & Consumer Goods",
    label: "Commerce & Customer Engagement",
    icon: ShoppingBag,
    description:
      "Retailers can explore AI-assisted shopping experiences, product information enrichment, service support, and content workflows aligned with brand requirements.",
    examples: [
      "Product discovery and shopping assistants",
      "Catalog content and description drafting",
      "Customer service response assistance",
    ],
  },
  {
    number: "04",
    title: "Healthcare & Life Sciences",
    label: "Research & Administrative Support",
    icon: HeartPulse,
    description:
      "With appropriate privacy controls and professional oversight, generative AI can be assessed for research assistance, literature review, and administrative documentation.",
    examples: [
      "Scientific literature summarization",
      "Research document search and retrieval",
      "Administrative knowledge assistance",
    ],
  },
  {
    number: "05",
    title: "Public Sector",
    label: "Information Access & Citizen Services",
    icon: Users,
    description:
      "Public organizations can evaluate AI-assisted information services, document workflows, and employee knowledge tools with attention to accessibility, accountability, and privacy.",
    examples: [
      "Public information navigation assistants",
      "Policy and internal document search",
      "Administrative workflow assistance",
    ],
  },
];

// ==========================================
// THREE-STAGE ADOPTION FRAMEWORK
// ==========================================

const adoptionPhases = [
  {
    number: "01",
    title: "Prepare & Plan",
    subtitle: "Understand the opportunity",
    icon: ClipboardCheck,
    description:
      "Establish business objectives, evaluate organizational readiness, and identify realistic use cases before choosing technologies.",
    points: [
      "Business and AI readiness assessment",
      "Use-case prioritization and feasibility",
      "Data, security, and governance requirements",
      "Adoption roadmap and success measures",
    ],
  },
  {
    number: "02",
    title: "Design & Build",
    subtitle: "Validate the solution",
    icon: Settings2,
    description:
      "Develop and evaluate an appropriate solution using approved data, suitable models, and clearly defined technical and operational requirements.",
    points: [
      "Model and architecture evaluation",
      "Proof of concept and application design",
      "Grounding, integration, and testing",
      "Risk assessment and response evaluation",
    ],
  },
  {
    number: "03",
    title: "Implement & Operate",
    subtitle: "Support responsible adoption",
    icon: Cloud,
    description:
      "Integrate validated capabilities into business workflows and establish the controls needed for ongoing operation, review, and improvement.",
    points: [
      "Application and workflow integration",
      "Employee enablement and human oversight",
      "Performance, security, and cost monitoring",
      "Governance and continuous improvement",
    ],
  },
];

// ==========================================
// RESPONSIBLE AI FOUNDATIONS
// ==========================================

const responsibleAI = [
  {
    title: "Data Privacy",
    description:
      "Define which information AI applications may process, how it is transmitted or stored, and what protections are needed for sensitive data.",
    icon: LockKeyhole,
  },
  {
    title: "Grounded Responses",
    description:
      "Use appropriate retrieval and verification techniques to help reduce unsupported answers and improve the traceability of generated information.",
    icon: BookOpen,
  },
  {
    title: "Human Oversight",
    description:
      "Keep meaningful review and approval mechanisms for sensitive, high-impact, or irreversible decisions and actions.",
    icon: Users,
  },
  {
    title: "Security & Permissions",
    description:
      "Protect system integrations against unauthorized access, prompt injection, unsafe tool execution, and inappropriate data disclosure.",
    icon: ShieldCheck,
  },
  {
    title: "Evaluation & Testing",
    description:
      "Assess responses against representative use cases, test failure scenarios, and review accuracy, relevance, safety, and application behavior.",
    icon: SearchCheck,
  },
  {
    title: "Cost & Performance",
    description:
      "Consider latency, model usage, infrastructure costs, scaling requirements, and monitoring before expanding an AI application.",
    icon: Database,
  },
];

// ==========================================
// IMPLEMENTATION LIFECYCLE
// ==========================================

const lifecycle = [
  {
    number: "01",
    title: "Discover",
    description:
      "Identify the business problem, users, and intended AI outcomes.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Review the data, permissions, systems, and technical requirements.",
  },
  {
    number: "03",
    title: "Prototype",
    description:
      "Build a focused solution and test its behavior with representative cases.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect validated AI features with approved business applications.",
  },
  {
    number: "05",
    title: "Operate",
    description:
      "Monitor quality, security, costs, user feedback, and changing needs.",
  },
];

// ==========================================
// COMPONENT HELPERS
// ==========================================

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x:
                direction === "left"
                  ? -24
                  : direction === "right"
                    ? 24
                    : 0,
              y: direction === "up" ? 24 : 0,
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-[#A477C0]"
      />

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#80519F]">
        {children}
      </p>
    </div>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2
          id={id}
          className="text-[clamp(2.3rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30243B]"
        >
          {title}

          <span className="block text-[#8855A9]">
            {highlight}
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70]">
          {description}
        </p>
      </Reveal>
    </div>
  );
}

// ==========================================
// SHARED CARD STYLING
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN GENERATIVE AI PAGE
// ==========================================

export default function GenerativeAIPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="generative-ai-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#DDC9ED]/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">

          {/* HERO TEXT */}

          <Reveal className="min-w-0">
            <Link
              href="/services"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#80519F] transition-colors hover:text-[#4B2B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80519F]"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-x-1"
              />

              All Services
            </Link>

            <Eyebrow>
              Data &amp; Analytics / Generative AI
            </Eyebrow>

            <h1
              id="generative-ai-title"
              className="max-w-[760px] text-[clamp(2.8rem,5.1vw,5.35rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Reimagine work.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Build with
              </span>

              intelligent AI.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Explore practical generative AI solutions
              that connect knowledge, applications,
              and people. Build intelligent assistants,
              simplify information workflows, and
              introduce AI responsibly into business
              operations.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your AI Project

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#capabilities"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-[border-color,background-color] duration-300 hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Explore Capabilities

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* FOCUS TAGS */}

            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Generative AI focus areas"
            >
              {[
                "Enterprise Knowledge",
                "Intelligent Workflows",
                "AI Engineering",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#E2D2ED] bg-white/65 px-3 py-2 text-[11px] font-semibold text-[#80569B]"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          {/* HERO IMAGE */}

          <Reveal
            direction="right"
            delay={0.12}
            className="relative min-w-0 lg:pl-4"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[36px] bg-[#DCC5EC]/35 blur-2xl"
            />

            <div className="group relative h-[360px] overflow-hidden rounded-[22px] border-[6px] border-white bg-[#E9DEF1] shadow-[0_30px_70px_rgba(75,40,98,0.16)] sm:h-[465px] lg:h-[555px]">

              <Image
                src={images.hero}
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover transition-transform duration-1000 motion-safe:group-hover:scale-[1.04]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#251531]/55 via-transparent to-transparent"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[320px]">

                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">

                  <Sparkles
                    size={14}
                    aria-hidden="true"
                  />

                  Generative AI
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Knowledge. Automation. Innovation.
                </p>

              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================
          02 — INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="genai-introduction"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Our Generative AI Perspective
            </Eyebrow>

            <h2
              id="genai-introduction"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Intelligent technology

              <span className="block text-[#8B58AC]">
                with a clear purpose.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Generative AI creates new opportunities
              for organizations to work with information,
              build digital experiences, and assist
              people in complex tasks.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Unlike traditional software that follows
                only predefined rules, generative AI
                models can produce responses, summaries,
                explanations, text, and other outputs
                based on the information and instructions
                they receive.
              </p>

              <p>
                These capabilities can support business
                knowledge retrieval, customer assistance,
                document workflows, software engineering,
                and selected forms of automation. However,
                useful implementation requires more than
                access to a language model.
              </p>

              <p>
                Cloudlem approaches generative AI through
                business-focused planning, appropriate data
                integration, practical engineering,
                evaluation, and responsible operation.
                We help organizations explore where AI is
                useful, how it can fit existing systems,
                and which controls are necessary before
                deployment.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — THREE EDITORIAL PILLARS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`genai-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL TEXT */}

              <Reveal
                direction={reversed ? "right" : "left"}
                className={`min-w-0 ${
                  reversed ? "lg:order-2" : ""
                }`}
              >
                <div className="mb-5 flex items-center gap-4">

                  <span className="text-[13px] font-bold tabular-nums text-[#AD86C6]">
                    {section.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[#AA80C4]"
                  />

                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8552A6]">
                    {section.eyebrow}
                  </p>
                </div>

                <h2
                  id={`genai-pillar-${section.number}`}
                  className="max-w-[630px] text-[clamp(2.25rem,3.2vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.05em] text-[#2C2037]"
                >
                  {section.title}

                  <span className="block text-[#8A55AA]">
                    {section.highlight}
                  </span>
                </h2>

                <div
                  aria-hidden="true"
                  className="mt-6 h-1 w-12 rounded-full bg-[#A879C5]"
                />

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={
                          paragraphIndex === 0
                            ? "font-medium text-[#43354D]"
                            : ""
                        }
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                </div>

                {/* FOCUS AREA CARD */}

                <div className="mt-7 rounded-[15px] border border-[#E7DCEF] bg-white/85 p-5 shadow-[0_9px_28px_rgba(83,48,112,0.035)] sm:p-6">

                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8150A0]">
                    Key Focus Areas
                  </p>

                  <ul className="space-y-3">

                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F0E3F7] text-[#7B479D]">
                          <Check
                            size={13}
                            strokeWidth={2.3}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="text-[14px] font-medium leading-6 text-[#4E405B]">
                          {point}
                        </span>
                      </li>
                    ))}

                  </ul>
                </div>

              </Reveal>

              {/* EDITORIAL IMAGE */}

              <Reveal
                direction={reversed ? "left" : "right"}
                delay={0.08}
                className={`min-w-0 ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                <div className="group relative h-[340px] overflow-hidden rounded-[20px] bg-[#E5DAED] shadow-[0_20px_55px_rgba(60,28,87,0.12)] sm:h-[450px] lg:h-[550px]">

                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover transition-transform duration-1000 motion-safe:group-hover:scale-[1.045]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21142D]/35 via-transparent to-transparent"
                  />

                  <div className="absolute bottom-6 left-6 right-6 flex w-fit max-w-[calc(100%-3rem)] items-center gap-3 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#653D82] backdrop-blur-md">

                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#A572C3]" />

                    <span>{section.eyebrow}</span>
                  </div>

                </div>
              </Reveal>

            </div>
          </section>
        );
      })}

      {/* ======================================
          06 — PHOTOGRAPHIC FEATURE
      ====================================== */}

      <section
        aria-labelledby="genai-feature"
        className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#352142] py-24 text-white lg:min-h-[540px]"
      >
        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(37,21,52,0.94)_0%,rgba(46,27,62,0.80)_56%,rgba(65,40,77,0.45)_100%)]"
        />

        <div className="container-systems relative z-20">

          <Reveal className="max-w-[870px]">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              Business-Focused Generative AI
            </p>

            <h2
              id="genai-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              From AI potential

              <span className="block text-[#DDB8F1]">
                to practical solutions.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Effective AI adoption starts with a
              relevant business problem. Thoughtful
              engineering, trusted information,
              clear evaluation, and human oversight
              help move promising ideas toward
              useful business applications.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — GENERATIVE AI CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="genai-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="genai-capabilities"
            eyebrow="Our Generative AI Offerings"
            title="Generative AI"
            highlight="capabilities."
            description="From AI strategy and knowledge assistants to intelligent workflows and LLM integration, these capabilities address different stages of responsible generative AI adoption."
          />

          {/* NINE CAPABILITY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  className="h-full"
                  delay={(index % 3) * 0.06}
                >
                  <article className={`${cardStyle} min-h-[285px]`}>

                    <div className="mb-7 flex items-start justify-between">

                      <span className={iconStyle}>
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="mt-4 h-0.5 w-10 rounded-full bg-[#B489CD]"
                    />

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {item.description}
                    </p>

                  </article>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          08 — INDUSTRY APPLICATIONS
      ====================================== */}

      <section
        aria-labelledby="genai-industries"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="genai-industries"
            eyebrow="Industry Applications"
            title="Generative AI for"
            highlight="diverse business needs."
            description="Generative AI can support different tasks across industries. The examples below describe possible applications, not completed Cloudlem projects or guaranteed outcomes."
          />

          {/* FIVE INDUSTRY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Reveal
                  key={industry.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >
                  <article className={`${cardStyle} min-h-[450px]`}>

                    <div className="flex items-start justify-between">

                      <span className={iconStyle}>
                        <Icon
                          size={26}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {industry.number}
                      </span>

                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {industry.label}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.26] tracking-[-0.035em] text-[#30213B]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {industry.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Potential Use Cases
                      </p>

                      <ul className="space-y-3">

                        {industry.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={17}
                              strokeWidth={2}
                              aria-hidden="true"
                              className="mt-0.5 shrink-0 text-[#8755A6]"
                            />

                            <span className="text-[14px] leading-[1.7] text-[#51465C]">
                              {example}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>

                  </article>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          09 — THREE-STAGE ADOPTION FRAMEWORK
      ====================================== */}

      <section
        aria-labelledby="genai-adoption"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="genai-adoption"
            eyebrow="Our Generative AI Approach"
            title="A practical path"
            highlight="from concept to adoption."
            description="Successful AI adoption combines strategic planning, solution engineering, business integration, and ongoing governance. We organize this work into three connected phases."
          />

          {/* THREE ADOPTION PHASES */}

          <div className="grid gap-5 lg:grid-cols-3">

            {adoptionPhases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <Reveal
                  key={phase.number}
                  className="h-full"
                  delay={index * 0.07}
                >
                  <article className={`${cardStyle} min-h-[480px]`}>

                    <div className="flex items-start justify-between">

                      <span className={iconStyle}>
                        <Icon
                          size={27}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-[11px] font-bold tabular-nums text-[#B394C7]">
                        {phase.number}
                      </span>

                    </div>

                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8755A6]">
                      {phase.subtitle}
                    </p>

                    <h3 className="mt-3 text-[25px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#30213B]">
                      {phase.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {phase.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-[#E9DDF1] pt-5">

                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <Check
                            size={17}
                            strokeWidth={2}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[#8755A6]"
                          />

                          <span className="text-[14px] leading-[1.7] text-[#51465C]">
                            {point}
                          </span>
                        </li>
                      ))}

                    </ul>

                  </article>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          10 — RESPONSIBLE AI FOUNDATIONS
      ====================================== */}

      <section
        aria-labelledby="genai-responsible"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="genai-responsible"
            eyebrow="Responsible Generative AI"
            title="Innovation built"
            highlight="on trust and control."
            description="AI-generated content can contain mistakes, unsupported claims, or sensitive information. Responsible design considers these limitations throughout development and operation."
          />

          {/* SIX RESPONSIBLE AI CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {responsibleAI.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={(index % 3) * 0.06}
                  className="h-full"
                >
                  <article
                    className={`${cardStyle} min-h-[250px] bg-[#FCFAFE]`}
                  >
                    <span className={iconStyle}>
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#30213B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {item.description}
                    </p>

                  </article>
                </Reveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          11 — AI IMPLEMENTATION LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="genai-lifecycle"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="genai-lifecycle"
            eyebrow="Implementation Lifecycle"
            title="Move from experimentation"
            highlight="toward practical delivery."
            description="Each phase should have clear success criteria and appropriate review. A prototype should only progress when its quality, risks, and intended purpose are sufficiently understood."
          />

          {/* FIVE-STAGE LIFECYCLE */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {lifecycle.map((stage, index) => (
              <li key={stage.number} className="min-w-0">

                <Reveal
                  delay={(index % 5) * 0.045}
                  className="h-full"
                >
                  <div className="flex h-full min-h-[225px] flex-col rounded-[16px] border border-[#E1D1EA] bg-white p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                    <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                      STAGE {stage.number}
                    </span>

                    <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5F8] text-[#8250A4]">

                      {index < lifecycle.length - 1 ? (
                        <ArrowRight
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      ) : (
                        <Check
                          size={19}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}

                    </div>

                    <h3 className="mt-5 text-[19px] font-semibold leading-[1.3] text-[#32223E]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-[#665A70]">
                      {stage.description}
                    </p>

                  </div>
                </Reveal>

              </li>
            ))}

          </ol>

          {/* SUPPORTING REQUIREMENTS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Business Value & Usability",
                icon: Sparkles,
              },
              {
                label: "Security & Responsible AI",
                icon: ShieldCheck,
              },
              {
                label: "Quality & Human Oversight",
                icon: Bot,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E3D4ED] bg-white px-5 py-4 text-[#493456]"
                >
                  <Icon
                    size={21}
                    aria-hidden="true"
                    className="shrink-0 text-[#8755A6]"
                  />

                  <span className="text-[14px] font-semibold">
                    {item.label}
                  </span>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ======================================
          12 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="genai-cta"
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#553173_0%,#76459C_52%,#9668B5_100%)] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[470px] w-[470px] rounded-full border border-white/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-[350px] w-[350px] rounded-full border border-white/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-60 w-96 rounded-full bg-[#CFA7EA]/15 blur-[90px]"
        />

        <div className="container-systems relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <Reveal>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="genai-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to explore

              <span className="block text-[#F0D9FA]">
                generative AI?
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >
            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your business challenges,
              AI ideas, existing applications, and
              information workflows. We can discuss
              your requirements and explore a practical,
              responsible direction for your project.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your AI Project

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              />
            </button>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          EXISTING SUPABASE INQUIRY MODAL
      ====================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
