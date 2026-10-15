
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
// ==========================================

const SERVICE_TITLE = "Advanced Analytics";

// EXISTING CLOUDLEM IMAGES
// Replace with dedicated analytics photography
// during the final visual review.

const images = {
  hero: "/images/backgrounds/section-3-2.jpg",
  predictive: "/images/backgrounds/section-2-2.jpg",
  intelligence: "/images/backgrounds/section-1-4.jpg",
  operational: "/images/backgrounds/section-3-1.jpg",
  feature: "/images/backgrounds/section-1-3.jpg",
};

// ==========================================
// ANIMATIONS
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
// OUR APPROACH
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
// MAIN ADVANCED ANALYTICS PAGE
// ==========================================

export default function AdvancedAnalyticsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO
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
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                Data & Analytics / Advanced Analytics
              </p>
            </div>

            <h1 className="max-w-[850px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">
              Discover insights.

              <span className="block text-[#B7B09F]">
                Anticipate what
              </span>

              comes next.
            </h1>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.8] sm:text-[17px]">
              Turn complex business data into meaningful
              intelligence. Explore predictive analytics,
              machine learning, and optimization to
              understand patterns, support decisions,
              and improve operational performance.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Analytics Project
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
                  Our Analytics Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Go beyond reporting.

                <span className="block text-[#625C51]">
                  Make data work harder.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">
              <p className="text-[17px] font-semibold leading-[1.75]">
                Advanced analytics helps organizations
                move from understanding past activity
                toward exploring future possibilities
                and better-informed decisions.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  Traditional reports and dashboards
                  help organizations track performance,
                  but more complex business questions
                  often require statistical analysis,
                  machine learning, and deeper
                  examination of operational data.
                </p>

                <p>
                  Predictive models can help estimate
                  future outcomes, identify unusual
                  patterns, and reveal relationships
                  that might not be visible through
                  standard reporting. Optimization
                  methods can support decisions
                  involving resources, scheduling,
                  and competing priorities.
                </p>

                <p>
                  Cloudlem approaches advanced analytics
                  by connecting technical methods with
                  practical business objectives.
                  Data readiness, trustworthy evaluation,
                  understandable results, and responsible
                  deployment are central to creating
                  meaningful analytical solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EDITORIAL SECTIONS
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
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                          pIndex === 0 ? "font-medium" : ""
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

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reverse ? -18 : 18,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
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
          <motion.div {...reveal} className="max-w-[830px]">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
              Intelligence That Supports Action
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Move from information

              <span className="block text-[#B7B09F]">
                to informed decisions.
              </span>
            </h2>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.8]">
              Analytical tools are most valuable when
              their results can be understood, trusted,
              and applied to practical business problems.
              Combine useful data, appropriate models,
              and clear decision processes to support
              better operational outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          ADVANCED ANALYTICS CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Advanced Analytics Offerings
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Analytics and AI

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From forecasting and machine learning
              to operational optimization and model
              deployment, these analytical capabilities
              address different stages of a data-driven
              business initiative.
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
          ANALYTICS ENGAGEMENT AREAS
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div {...reveal} className="mb-9 max-w-[800px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
              Solutions & Advisory
            </p>

            <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Different approaches.

              <span className="block text-[#625C51]">
                One business objective.
              </span>
            </h2>

            <p className="mt-5 max-w-[690px] text-[16px] leading-[1.8]">
              Advanced analytics initiatives vary
              in complexity and maturity. An organization
              may need strategic guidance, a specific
              predictive model, integration of an
              existing AI capability, or ongoing
              support for analytical workflows.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {engagementAreas.map((item) => (
              <article
                key={item.number}
                className="border border-[#181818]/20 bg-[#B7B09F]/30 p-6 sm:p-7"
              >
                <span className="text-[12px] font-bold text-[#625C51]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================
          INDUSTRY APPLICATION EXAMPLES
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Industry Applications
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Analytics for

                <span className="block text-[#514C43]">
                  real-world challenges.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] lg:justify-self-end">
              Different industries face different
              analytical questions. These examples
              illustrate potential applications,
              not claims of completed Cloudlem projects
              or guaranteed business outcomes.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="flex flex-col border border-[#181818]/20 bg-[#D8D2C8] p-6 sm:p-7"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.13em] text-[#625C51]">
                    {industry.category}
                  </p>

                  <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.04em]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.8]">
                    {industry.description}
                  </p>

                  <div className="mt-6 border-t border-[#181818]/20 pt-5">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.13em]">
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
          ANALYTICS LIFECYCLE
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">
          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Analytics Lifecycle
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                From data

                <span className="block text-[#B7B09F]">
                  to measurable learning.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              Reliable analytics requires a repeatable
              process. The focus should remain on the
              business question, available evidence,
              model limitations, and how results
              will be used.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {analyticsLifecycle.map((stage) => (
              <div
                key={stage.number}
                className="flex flex-col border border-[#B7B09F]/35 p-5"
              >
                <span className="text-[12px] font-bold text-[#B7B09F]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.25]">
                  {stage.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-[#D8D2C8]/85">
                  {stage.description}
                </p>

                <ArrowRight
                  size={19}
                  className="mt-5 text-[#B7B09F]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 border border-[#B7B09F]/30 px-5 py-4">
              <Database size={20} aria-hidden="true" />
              <span className="text-[14px] font-medium">
                Data Quality & Readiness
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 px-5 py-4">
              <SearchCheck size={20} aria-hidden="true" />
              <span className="text-[14px] font-medium">
                Model Validation
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#B7B09F]/30 px-5 py-4">
              <ShieldCheck size={20} aria-hidden="true" />
              <span className="text-[14px] font-medium">
                Responsible AI & Governance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          OUR IMPLEMENTATION APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <motion.div {...reveal}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Practical analytics.

                <span className="block text-[#625C51]">
                  Thoughtful implementation.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Advanced analytics should begin with
                a relevant business question and
                realistic expectations. Our approach
                combines data assessment, analytical
                development, careful validation,
                and implementation planning.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <BrainCircuit
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Analytical outputs should support
                  human understanding and responsible
                  decisions, with limitations clearly
                  considered.
                </p>
              </div>
            </motion.div>

            <div className="border-t border-[#181818]/20">
              {approach.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[38px_1fr] gap-4 border-b border-[#181818]/20 py-5"
                >
                  <span className="pt-1 text-[12px] font-bold text-[#625C51]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.03em] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-[15px] leading-[1.75]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          FINAL CTA
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to discover

                <span className="block text-[#514C43]">
                  more from your data?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your data, business
                questions, forecasting challenges,
                or AI ideas. We can discuss your
                requirements and explore a practical
                analytics approach for your organization.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Analytics Project

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
          EXISTING INQUIRY MODAL
      =================================== */}

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
