
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
// ==========================================

const SERVICE_TITLE = "Generative AI";

// VERIFIED EXISTING CLOUDLEM IMAGES
// Service-specific imagery can be added
// during the final website visual review.

const images = {
  hero: "/images/backgrounds/section-1-3.jpg",
  knowledge: "/images/backgrounds/section-3-2.jpg",
  automation: "/images/backgrounds/section-2-2.jpg",
  engineering: "/images/backgrounds/section-1-4.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ==========================================
// ANIMATION SETTINGS
// ==========================================

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  },
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
// MAIN PAGE COMPONENT
// ==========================================

export default function GenerativeAIPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO SECTION
      =================================== */}

      <section className="relative flex min-h-[550px] items-center overflow-hidden bg-[#181818] py-28 text-[#D8D2C8] sm:min-h-[580px] lg:min-h-[640px] lg:py-32">

        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#181818]/95 via-[#181818]/85 to-[#181818]/50" />
        <div className="absolute inset-0 bg-linear-to-t from-[#181818]/65 to-transparent" />

        <div className="container-systems relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[900px]"
          >

            <Link
              href="/services"
              className="group mb-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:text-[#B7B09F]"
            >
              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              All Services
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B7B09F]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Data & Analytics / Generative AI
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">

              Reimagine work.

              <span className="block text-[#B7B09F]">
                Build with
              </span>

              intelligent AI.
            </h1>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.8] sm:text-[17px]">
              Explore practical generative AI
              solutions that connect knowledge,
              applications, and people. Build
              intelligent assistants, simplify
              information workflows, and introduce
              AI responsibly into business operations.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your AI Project

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </button>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          INTRODUCTION
      =================================== */}

      <section className="bg-[#D8D2C8] py-14 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                  Our Generative AI Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Intelligent technology

                <span className="block text-[#625C51]">
                  with a clear purpose.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Generative AI creates new opportunities
                for organizations to work with
                information, build digital experiences,
                and assist people in complex tasks.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  Unlike traditional software that
                  follows only predefined rules,
                  generative AI models can produce
                  responses, summaries, explanations,
                  text, and other outputs based
                  on the information and instructions
                  they receive.
                </p>

                <p>
                  These capabilities can support
                  business knowledge retrieval,
                  customer assistance, document
                  workflows, software engineering,
                  and selected forms of automation.
                  However, useful implementation
                  requires more than access to
                  a language model.
                </p>

                <p>
                  Cloudlem approaches generative AI
                  through business-focused planning,
                  appropriate data integration,
                  practical engineering, evaluation,
                  and responsible operation.
                  We help organizations explore
                  where AI is useful, how it can
                  fit existing systems, and which
                  controls are necessary before
                  deployment.
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EDITORIAL SERVICE SECTIONS
      =================================== */}

      {editorialSections.map((section, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            key={section.number}
            className={`py-14 text-[#181818] lg:py-[72px] ${
              index % 2 === 0
                ? "bg-[#B7B09F]"
                : "bg-[#D8D2C8]"
            }`}
          >
            <div className="container-systems">

              <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

                {/* TEXT */}

                <motion.div
                  {...reveal}
                  className={reverse ? "lg:order-2" : ""}
                >

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#181818]" />

                    <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                      {section.eyebrow}
                    </p>
                  </div>

                  <h2 className="max-w-[620px] text-[clamp(2.3rem,3.2vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                    {section.title}

                    <span className="block text-[#514C43]">
                      {section.highlight}
                    </span>
                  </h2>

                  <div className="mt-5 h-[2px] w-12 bg-[#181818]" />

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                          index === 0 ? "font-medium" : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                      Key Focus Areas
                    </p>

                    <ul className="space-y-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#181818] text-[#D8D2C8]">
                            <Check
                              size={12}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </span>

                          <span className="text-[14px] font-medium leading-6 sm:text-[15px]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* IMAGE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -18 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  className={`relative h-[300px] min-w-0 overflow-hidden bg-[#181818] sm:h-[380px] lg:h-[440px] ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ===================================
          WIDE PHOTOGRAPHIC FEATURE
      =================================== */}

      <section className="relative flex min-h-[410px] items-center overflow-hidden bg-[#181818] py-[72px] text-[#D8D2C8] lg:min-h-[480px]">

        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#181818]/85" />

        <div className="container-systems relative z-10">

          <motion.div
            {...reveal}
            className="max-w-[830px]"
          >

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              Business-Focused Generative AI
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">

              From AI potential

              <span className="block text-[#B7B09F]">
                to practical solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Effective AI adoption starts with
              a relevant business problem.
              Thoughtful engineering, trusted
              information, clear evaluation,
              and human oversight help move
              promising ideas toward useful
              business applications.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          GENERATIVE AI CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Generative AI Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Generative AI

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From AI strategy and knowledge
              assistants to intelligent workflows
              and LLM integration, these
              capabilities address different
              stages of responsible
              generative AI adoption.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.06,
                  }}
                  className="flex h-full flex-col border border-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="mb-6 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center border border-[#B7B09F]/45">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[11px] text-[#B7B09F]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-9 bg-[#B7B09F]" />

                  <p className="mt-4 text-[15px] leading-[1.75] text-[#D8D2C8]/85">
                    {item.description}
                  </p>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          INDUSTRY APPLICATIONS
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Industry Applications
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Generative AI for

                <span className="block text-[#625C51]">
                  diverse business needs.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] lg:justify-self-end">
              Generative AI can support
              different tasks across industries.
              The examples below describe
              possible applications, not
              completed Cloudlem projects
              or guaranteed outcomes.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.number}
                  className="flex flex-col border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {industry.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {industry.label}
                  </p>

                  <h3 className="mt-3 text-[23px] font-semibold leading-[1.25] tracking-[-0.035em]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {industry.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
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
                            className="mt-1 shrink-0"
                            aria-hidden="true"
                          />

                          <span className="text-[14px] leading-[1.7]">
                            {example}
                          </span>

                        </li>
                      ))}
                    </ul>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          THREE-STAGE GENERATIVE AI APPROACH
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Our Generative AI Approach
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                A practical path

                <span className="block text-[#514C43]">
                  from concept to adoption.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] lg:justify-self-end">
              Successful AI adoption combines
              strategic planning, solution
              engineering, business integration,
              and ongoing governance.
              We organize this work into
              three connected phases.
            </p>

          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">

            {adoptionPhases.map((phase) => {
              const Icon = phase.icon;

              return (
                <article
                  key={phase.number}
                  className="flex h-full flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >

                  <div className="flex items-center justify-between">
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {phase.number}
                    </span>
                  </div>

                  <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#625C51]">
                    {phase.subtitle}
                  </p>

                  <h3 className="mt-3 text-[25px] font-semibold tracking-[-0.04em]">
                    {phase.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.75]">
                    {phase.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">

                    <ul className="space-y-3">
                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <Check
                            size={17}
                            className="mt-1 shrink-0"
                            aria-hidden="true"
                          />

                          <span className="text-[14px] leading-[1.7]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          RESPONSIBLE AI FOUNDATIONS
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Responsible Generative AI
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Innovation built

                <span className="block text-[#B7B09F]">
                  on trust and control.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              AI-generated content can contain
              mistakes, unsupported claims,
              or sensitive information.
              Responsible design considers
              these limitations throughout
              development and operation.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {responsibleAI.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border border-[#B7B09F]/30 p-6"
                >

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.75] text-[#D8D2C8]/85">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ===================================
          AI IMPLEMENTATION LIFECYCLE
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Implementation Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">

                Move from experimentation

                <span className="block text-[#625C51]">
                  toward practical delivery.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              Each phase should have clear
              success criteria and appropriate
              review. A prototype should only
              progress when its quality,
              risks, and intended purpose
              are sufficiently understood.
            </p>

          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="flex flex-col border border-[#181818]/20 bg-[#B7B09F]/25 p-5"
              >

                <span className="text-[12px] font-bold text-[#625C51]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.03em]">
                  {stage.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-[1.75]">
                  {stage.description}
                </p>

                <ArrowRight
                  size={18}
                  className="mt-5 text-[#625C51]"
                  aria-hidden="true"
                />

              </article>
            ))}

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Sparkles size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Business Value & Usability
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <ShieldCheck size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Security & Responsible AI
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Bot size={21} className="shrink-0" />

              <span className="text-[14px] font-semibold">
                Quality & Human Oversight
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          FINAL CALL TO ACTION
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">

                Ready to explore

                <span className="block text-[#514C43]">
                  generative AI?
                </span>
              </h2>

            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your business
                challenges, AI ideas, existing
                applications, and information
                workflows. We can discuss
                your requirements and explore
                a practical, responsible
                direction for your project.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your AI Project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          EXISTING SUPABASE INQUIRY MODAL
      =================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
