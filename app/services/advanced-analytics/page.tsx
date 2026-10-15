
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Database,
  Factory,
  FileSearch,
  HeartPulse,
  Landmark,
  LineChart,
  Network,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — ADVANCED ANALYTICS
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Advanced Analytics";

// Original Cloudlem image paths preserved.

const images = {
  hero: "/images/backgrounds/section-3-2.jpg",
  predictive: "/images/backgrounds/section-2-2.jpg",
  intelligence: "/images/backgrounds/section-1-4.jpg",
  operational: "/images/backgrounds/section-3-1.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// EDITORIAL CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Predictive & Prescriptive Analytics",
    title: "Understand patterns.",
    highlight: "Prepare for what comes next.",
    image: images.predictive,
    alt: "Technology infrastructure representing predictive analytics",
    paragraphs: [
      "Organizations collect information through transactions, customer interactions, operational systems, and digital applications. This historical information can reveal important patterns, but conventional reporting does not always explain what may happen next or which actions deserve attention.",
      "Advanced analytics combines statistical methods, data science, and machine learning to explore relationships within data. Forecasting models can estimate future demand, customer behavior, resource requirements, or other measurable outcomes, while optimization techniques can help evaluate competing business decisions.",
      "Cloudlem approaches predictive analytics by first identifying the business problem, available data, and practical value of a proposed model. Appropriate methods, careful validation, and clear explanations are essential to making analytical results useful rather than simply technically impressive.",
    ],
    points: [
      "Demand, revenue, and operational forecasting",
      "Predictive modeling and scenario analysis",
      "Optimization and decision-support models",
    ],
  },
  {
    number: "02",
    eyebrow: "AI & Machine Learning",
    title: "Find intelligence",
    highlight: "within complex information.",
    image: images.intelligence,
    alt: "Digital systems representing intelligent information processing",
    paragraphs: [
      "Valuable business information does not always arrive in neat tables. Organizations work with documents, messages, sensor readings, customer feedback, logs, and other complex data that can be difficult to analyze through traditional reporting alone.",
      "Machine learning and natural language processing can help identify meaningful patterns, classify information, recognize anomalies, and extract relevant details from large collections of data. Depending on the use case, these methods may support document analysis, customer segmentation, information retrieval, or operational monitoring.",
      "We evaluate potential AI applications in the context of data availability, expected accuracy, privacy requirements, implementation cost, and human oversight. The objective is to identify realistic opportunities where analytical methods can support better business workflows and decisions.",
    ],
    points: [
      "Machine learning and pattern recognition",
      "Document analysis and information extraction",
      "Anomaly detection and intelligent classification",
    ],
  },
  {
    number: "03",
    eyebrow: "Operational Analytics & MLOps",
    title: "Turn analytical models",
    highlight: "into practical business tools.",
    image: images.operational,
    alt: "Cloud technology illustrating operational analytics and model deployment",
    paragraphs: [
      "A successful analytical initiative does not end when a model is trained. Models must be connected to appropriate business processes, tested against relevant data, and monitored as conditions change. Without these steps, promising prototypes may never become dependable operational tools.",
      "Model deployment can involve APIs, scheduled prediction pipelines, application integrations, monitoring systems, and repeatable release processes. The appropriate approach depends on business criticality, response-time requirements, data availability, and infrastructure constraints.",
      "Cloudlem considers the full analytical lifecycle, including evaluation, integration, versioning, performance monitoring, and model maintenance. This helps organizations establish a responsible path from experimentation to operational use while retaining appropriate human review and control.",
    ],
    points: [
      "Model deployment and API integration",
      "MLOps pipelines and model monitoring",
      "Model evaluation, maintenance, and governance",
    ],
  },
];

// ==========================================
// ADVANCED ANALYTICS CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Predictive Analytics",
    description:
      "Explore historical and operational data to develop forecasting models for measurable business outcomes, with appropriate evaluation and uncertainty considerations.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Machine Learning Solutions",
    description:
      "Develop and assess supervised or unsupervised learning approaches for classification, prediction, segmentation, anomaly detection, and other suitable applications.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Supply Chain Forecasting",
    description:
      "Analyze patterns in sales, inventory, purchasing, and operational data to support demand planning, inventory decisions, and supply chain visibility.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Optimization & Simulation",
    description:
      "Use analytical methods, mathematical constraints, and scenario modeling to explore scheduling, resource allocation, and operational trade-offs.",
    icon: Settings2,
  },
  {
    number: "05",
    title: "Text & Document Analytics",
    description:
      "Evaluate natural language processing and information retrieval methods for extracting insights from documents, feedback, and other text-based sources.",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Industrial & Sensor Analytics",
    description:
      "Analyze equipment, telemetry, and sensor data to investigate performance patterns, unusual behavior, and potential maintenance or operational insights.",
    icon: Network,
  },
  {
    number: "07",
    title: "MLOps & Model Monitoring",
    description:
      "Plan repeatable model deployment, versioning, evaluation, monitoring, and maintenance workflows to support responsible operational use.",
    icon: Workflow,
  },
  {
    number: "08",
    title: "Analytics Strategy & AI Advisory",
    description:
      "Assess analytical maturity, data readiness, technology requirements, and potential AI use cases before prioritizing appropriate initiatives.",
    icon: Target,
  },
  {
    number: "09",
    title: "Customer & Business Intelligence",
    description:
      "Combine customer, product, and operational information to support segmentation, performance measurement, decision-making, and analytical reporting.",
    icon: BarChart3,
  },
];

// ==========================================
// ANALYTICS ENGAGEMENT AREAS
// ==========================================

const engagementAreas = [
  {
    number: "01",
    title: "Analytics Consulting",
    description:
      "Review existing analytical capabilities, identify valuable use cases, and establish a realistic data science or AI adoption roadmap.",
  },
  {
    number: "02",
    title: "Custom Model Development",
    description:
      "Explore models designed for specific business questions when available solutions do not adequately address operational requirements.",
  },
  {
    number: "03",
    title: "AI Model Integration",
    description:
      "Evaluate suitable existing AI services and models, including API-based integration and customization where appropriate.",
  },
  {
    number: "04",
    title: "Model Lifecycle Support",
    description:
      "Plan monitoring, review procedures, technical maintenance, and improvements needed to keep analytical solutions useful over time.",
  },
];

// ==========================================
// INDUSTRY APPLICATION EXAMPLES
// ==========================================

const industries = [
  {
    title: "Financial Services",
    category: "Risk, Operations & Customer Intelligence",
    icon: Landmark,
    description:
      "Financial organizations can explore analytics for transaction patterns, operational reconciliation, customer segmentation, service demand, and risk-related reporting.",
    examples: [
      "Transaction anomaly investigation",
      "Customer behavior and retention modeling",
      "Revenue and operational forecasting",
    ],
  },
  {
    title: "Retail & Supply Chain",
    category: "Demand, Inventory & Commercial Performance",
    icon: Factory,
    description:
      "Retailers and supply chain teams can use analytical approaches to better understand demand, product performance, inventory movement, and resource requirements.",
    examples: [
      "Product demand forecasting",
      "Inventory and assortment analysis",
      "Pricing and promotion scenario modeling",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    category: "Operational & Research Analytics",
    icon: HeartPulse,
    description:
      "Subject to appropriate privacy, regulatory, and professional oversight, analytical tools can support administrative planning, research workflows, and operational understanding.",
    examples: [
      "Operational capacity and resource planning",
      "Research data pattern analysis",
      "Documentation and information retrieval",
    ],
  },
];

// ==========================================
// ANALYTICS LIFECYCLE
// ==========================================

const analyticsLifecycle = [
  {
    number: "01",
    title: "Define the Problem",
    description:
      "Identify a measurable business question and establish useful success criteria.",
  },
  {
    number: "02",
    title: "Prepare the Data",
    description:
      "Assess data quality, access, relevance, completeness, and processing needs.",
  },
  {
    number: "03",
    title: "Develop & Evaluate",
    description:
      "Test analytical approaches against suitable baselines and validation data.",
  },
  {
    number: "04",
    title: "Integrate the Results",
    description:
      "Connect appropriate outputs to reports, applications, or decision workflows.",
  },
  {
    number: "05",
    title: "Monitor & Improve",
    description:
      "Review outcomes, changing data patterns, limitations, and model performance.",
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business & Analytics Discovery",
    description:
      "Understand the business objective, current decision-making process, available data sources, operational constraints, and expected value of an analytical solution.",
  },
  {
    number: "02",
    title: "Data Readiness Assessment",
    description:
      "Examine data availability, definitions, quality, permissions, historical coverage, and any limitations that could affect analytical results.",
  },
  {
    number: "03",
    title: "Modeling & Validation",
    description:
      "Select suitable statistical or machine learning methods, establish baseline comparisons, and evaluate results using appropriate validation techniques.",
  },
  {
    number: "04",
    title: "Integration & Operationalization",
    description:
      "Plan how analytical results can support applications or business workflows, with attention to reliability, access controls, and human oversight.",
  },
  {
    number: "05",
    title: "Monitoring & Continuous Improvement",
    description:
      "Review analytical performance, model drift, changing requirements, and opportunities to improve data quality or operational effectiveness.",
  },
];

// ==========================================
// REUSABLE ANIMATED REVEAL
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
              y: direction === "up" ? 22 : 0,
              x:
                direction === "left"
                  ? -22
                  : direction === "right"
                    ? 22
                    : 0,
            }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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

// ==========================================
// SHARED SECTION EYEBROW
// ==========================================

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

// ==========================================
// REUSABLE SECTION HEADER
// ==========================================

function SectionHeader({
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
          className="text-[clamp(2.35rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
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
// SHARED PREMIUM CARD STYLES
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN ADVANCED ANALYTICS PAGE
// ==========================================

export default function AdvancedAnalyticsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="analytics-title"
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

          {/* HERO CONTENT */}

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
              Data &amp; Analytics / Advanced Analytics
            </Eyebrow>

            <h1
              id="analytics-title"
              className="max-w-[770px] text-[clamp(2.65rem,5.1vw,5.35rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Discover insights.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Anticipate what
              </span>

              comes next.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Turn complex business data into meaningful
              intelligence. Explore predictive analytics,
              machine learning, and optimization to understand
              patterns, support decisions, and improve
              operational performance.
            </p>

            {/* HERO ACTIONS */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Analytics Project

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="#capabilities"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] border border-[#D8C7E5] bg-white/80 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6B3C8E] transition-colors duration-300 hover:border-[#A879C4] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Explore Capabilities

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>

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

              {/* IMAGE LABEL */}

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[320px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Advanced Analytics
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Patterns. Predictions. Progress.
                </p>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — ANALYTICS PERSPECTIVE
      ====================================== */}

      <section
        aria-labelledby="analytics-intro"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Analytics Perspective
            </Eyebrow>

            <h2
              id="analytics-intro"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Go beyond reporting.

              <span className="block text-[#8B58AC]">
                Make data work harder.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />

          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Advanced analytics helps organizations move
              from understanding past activity toward
              exploring future possibilities and
              better-informed decisions.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Traditional reports and dashboards help
                organizations track performance, but more
                complex business questions often require
                statistical analysis, machine learning,
                and deeper examination of operational data.
              </p>

              <p>
                Predictive models can help estimate future
                outcomes, identify unusual patterns, and
                reveal relationships that might not be visible
                through standard reporting. Optimization
                methods can support decisions involving
                resources, scheduling, and competing priorities.
              </p>

              <p>
                Cloudlem approaches advanced analytics by
                connecting technical methods with practical
                business objectives. Data readiness,
                trustworthy evaluation, understandable
                results, and responsible deployment are
                central to creating meaningful analytical
                solutions.
              </p>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — THREE EDITORIAL SERVICE AREAS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`analytics-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
          >

            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* TEXT COLUMN */}

              <Reveal
                className={`min-w-0 ${
                  reversed ? "lg:order-2" : ""
                }`}
                direction={reversed ? "right" : "left"}
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
                  id={`analytics-pillar-${section.number}`}
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

                {/* ORIGINAL EXPLANATORY CONTENT */}

                <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#645B6A] sm:text-[16px]">

                  {section.paragraphs.map((paragraph, paragraphIndex) => (
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
                  ))}

                </div>

                {/* FOCUS AREAS */}

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

              {/* IMAGE COLUMN */}

              <Reveal
                className={`min-w-0 ${
                  reversed ? "lg:order-1" : ""
                }`}
                direction={reversed ? "left" : "right"}
                delay={0.08}
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
        aria-labelledby="analytics-feature"
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
              Intelligence That Supports Action
            </p>

            <h2
              id="analytics-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Move from information

              <span className="block text-[#DDB8F1]">
                to informed decisions.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Analytical tools are most valuable when
              their results can be understood, trusted,
              and applied to practical business problems.
              Combine useful data, appropriate models,
              and clear decision processes to support
              better operational outcomes.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — ADVANCED ANALYTICS CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="analytics-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="analytics-capabilities"
            eyebrow="Our Advanced Analytics Offerings"
            title="Analytics and AI"
            highlight="capabilities."
            description="From forecasting and machine learning to operational optimization and model deployment, these analytical capabilities address different stages of a data-driven business initiative."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.06}
                  className="h-full"
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
          08 — ANALYTICS ENGAGEMENT AREAS
      ====================================== */}

      <section
        aria-labelledby="analytics-engagements"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <Reveal className="mb-10 max-w-[800px]">

            <Eyebrow>
              Solutions &amp; Advisory
            </Eyebrow>

            <h2
              id="analytics-engagements"
              className="text-[clamp(2.35rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Different approaches.

              <span className="block text-[#8855A9]">
                One business objective.
              </span>
            </h2>

            <p className="mt-6 max-w-[690px] text-[16px] leading-[1.85] text-[#665A70]">
              Advanced analytics initiatives vary in
              complexity and maturity. An organization
              may need strategic guidance, a specific
              predictive model, integration of an existing
              AI capability, or ongoing support for
              analytical workflows.
            </p>

          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {engagementAreas.map((item, index) => (
              <Reveal
                key={item.number}
                delay={(index % 2) * 0.07}
                className="h-full"
              >

                <article
                  className={`${cardStyle} min-h-[220px] bg-[#FCFAFE]`}
                >

                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#9867B7]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.035em] text-[#30213B]">
                    {item.title}
                  </h3>

                  <div
                    aria-hidden="true"
                    className="mt-4 h-0.5 w-10 rounded-full bg-[#B489CD]"
                  />

                  <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">
                    {item.description}
                  </p>

                </article>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================
          09 — INDUSTRY APPLICATION EXAMPLES
      ====================================== */}

      <section
        aria-labelledby="analytics-industries"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="analytics-industries"
            eyebrow="Industry Applications"
            title="Analytics for"
            highlight="real-world challenges."
            description="Different industries face different analytical questions. These examples illustrate potential applications, not claims of completed Cloudlem projects or guaranteed business outcomes."
          />

          <div className="grid gap-5 lg:grid-cols-3">

            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Reveal
                  key={industry.title}
                  delay={index * 0.07}
                  className="h-full"
                >

                  <article
                    className={`${cardStyle} min-h-[455px]`}
                  >

                    <span className={iconStyle}>
                      <Icon
                        size={27}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8755A6]">
                      {industry.category}
                    </p>

                    <h3 className="mt-3 text-[23px] font-semibold leading-[1.28] tracking-[-0.035em] text-[#30213B]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.8] text-[#665A70]">
                      {industry.description}
                    </p>

                    <div className="mt-6 border-t border-[#E9DDF1] pt-5">

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#80519F]">
                        Example Applications
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
                              className="mt-0.5 shrink-0 text-[#8755A6]"
                              aria-hidden="true"
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
          10 — ANALYTICS LIFECYCLE
      ====================================== */}

      <section
        aria-labelledby="analytics-lifecycle"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems">

          <SectionHeader
            id="analytics-lifecycle"
            eyebrow="Analytics Lifecycle"
            title="From data"
            highlight="to measurable learning."
            description="Reliable analytics requires a repeatable process. The focus should remain on the business question, available evidence, model limitations, and how results will be used."
          />

          {/* FIVE-STAGE LIFECYCLE */}

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {analyticsLifecycle.map((stage, index) => (
              <li
                key={stage.number}
                className="min-w-0"
              >

                <Reveal
                  delay={(index % 5) * 0.045}
                  className="h-full"
                >

                  <div className="flex h-full min-h-[245px] flex-col rounded-[16px] border border-[#E1D1EA] bg-[#FCFAFE] p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                    <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                      STAGE {stage.number}
                    </span>

                    <span className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5F8] text-[#8250A4]">

                      {index === analyticsLifecycle.length - 1 ? (
                        <Check
                          size={19}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowRight
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      )}

                    </span>

                    <h3 className="mt-5 text-[18px] font-semibold leading-[1.3] text-[#32223E]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.75] text-[#665A70]">
                      {stage.description}
                    </p>

                  </div>

                </Reveal>

              </li>
            ))}

          </ol>

          {/* CROSS-CUTTING CONSIDERATIONS */}

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Data Quality & Readiness",
                icon: Database,
              },
              {
                label: "Model Validation",
                icon: SearchCheck,
              },
              {
                label: "Responsible AI & Governance",
                icon: ShieldCheck,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E3D4ED] bg-[#FCFAFE] px-5 py-4 text-[#493456]"
                >

                  <Icon
                    size={21}
                    className="shrink-0 text-[#8755A6]"
                    aria-hidden="true"
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
          11 — IMPLEMENTATION APPROACH
      ====================================== */}

      <section
        aria-labelledby="analytics-approach"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Our Approach
            </Eyebrow>

            <h2
              id="analytics-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Practical analytics.

              <span className="block text-[#8B57AB]">
                Thoughtful implementation.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Advanced analytics should begin with
              a relevant business question and realistic
              expectations. Our approach combines data
              assessment, analytical development,
              careful validation, and implementation planning.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-white p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <BrainCircuit
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Analytical outputs should support human
                understanding and responsible decisions,
                with limitations clearly considered.
              </p>

            </div>

          </Reveal>

          {/* FIVE-STEP IMPLEMENTATION TIMELINE */}

          <ol className="relative border-l border-[#E6D8EF] pl-7 sm:pl-9">

            {approach.map((step, index) => (
              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >

                <span
                  aria-hidden="true"
                  className="absolute -left-[39px] top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[5px] border-[#F7F2FB] bg-[#A56EC3] shadow-[0_0_0_1px_#DDC8EA] sm:-left-[47px]"
                />

                <Reveal delay={(index % 3) * 0.04}>

                  <div className="rounded-[14px] border border-[#E8DBF0] bg-white p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#FCFAFE] motion-safe:hover:translate-x-1 sm:p-6">

                    <p className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#9867B7]">
                      STEP {step.number}
                    </p>

                    <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#32223E] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.8] text-[#665A70] sm:text-[15px]">
                      {step.description}
                    </p>

                  </div>

                </Reveal>

              </li>
            ))}

          </ol>

        </div>
      </section>

      {/* ======================================
          12 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="analytics-cta"
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
              id="analytics-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to discover

              <span className="block text-[#F0D9FA]">
                more from your data?
              </span>
            </h2>

          </Reveal>

          {/* CTA DESCRIPTION AND BUTTON */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your data, business questions,
              forecasting challenges, or AI ideas. We can
              discuss your requirements and explore a
              practical analytics approach for your organization.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Analytics Project

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
          PRESERVED
      ====================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />

    </main>
  );
}
