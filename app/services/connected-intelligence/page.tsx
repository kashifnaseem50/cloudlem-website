
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
  Building2,
  Check,
  Database,
  GitMerge,
  Layers3,
  MousePointerClick,
  Network,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

// ==========================================
// CLOUDLEM — CONNECTED INTELLIGENCE
// Premium Soft Lavender & White
// ==========================================

const SERVICE_TITLE = "Connected Intelligence";

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  customer: "/images/backgrounds/section-3-2.jpg",
  operations: "/images/backgrounds/section-2-2.jpg",
  applications: "/images/backgrounds/section-1-3.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ==========================================
// EDITORIAL CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Unified Customer Intelligence",
    title: "Understand customers",
    highlight: "across every interaction.",
    image: images.customer,
    alt: "Connected digital systems representing customer intelligence",
    paragraphs: [
      "Customer information often exists across websites, commerce platforms, customer relationship management systems, service applications, and marketing tools. When this information remains disconnected, organizations can struggle to understand the complete customer journey or provide consistent experiences.",

      "Connected intelligence brings relevant information together to create a more useful view of customer interactions, preferences, and behavior. A Customer Data Platform, or CDP, may help organize permitted customer data from multiple sources and make it available for appropriate analytical or engagement use cases.",

      "Cloudlem approaches customer intelligence by considering data sources, identity matching, integration requirements, privacy, consent, and business objectives. The aim is to help organizations use trustworthy information to understand customers and improve how their digital services respond to customer needs.",
    ],
    points: [
      "Customer 360 and unified customer profiles",
      "Customer Data Platform planning and integration",
      "Segmentation, engagement, and journey analytics",
    ],
  },
  {
    number: "02",
    eyebrow: "Connected Operational Intelligence",
    title: "Create visibility",
    highlight: "across your operations.",
    image: images.operations,
    alt: "Cloud and infrastructure technology representing connected operations",
    paragraphs: [
      "Operational decisions depend on information flowing between people, applications, and business functions. Sales, procurement, inventory, logistics, and finance teams may all rely on different systems, which can make it difficult to identify problems or coordinate activities using consistent information.",

      "A connected approach combines relevant operational data and analytical methods to improve visibility across processes. For example, demand forecasts can be examined alongside inventory movement, delivery performance, and supply constraints to support more informed planning.",

      "Cloudlem helps organizations evaluate opportunities for integrated reporting, supply chain analytics, operational forecasting, and cross-system visibility. We focus on establishing dependable data connections and analytical processes that support real business questions.",
    ],
    points: [
      "Supply chain and inventory visibility",
      "Demand forecasting and operational analysis",
      "Cross-functional performance reporting",
    ],
  },
  {
    number: "03",
    eyebrow: "Intelligent Applications",
    title: "Bring insights",
    highlight: "into everyday decisions.",
    image: images.applications,
    alt: "Digital infrastructure representing intelligent business applications",
    paragraphs: [
      "Business intelligence becomes more useful when people can act on it within the applications and workflows they already use. Dashboards are valuable, but not every decision should require employees to search through multiple reports before taking action.",

      "Intelligent applications can present relevant information, predictions, alerts, recommendations, or contextual analysis directly within business processes. This may involve connecting analytical services with internal applications, APIs, customer platforms, or operational management tools.",

      "Cloudlem considers usability, data reliability, integration design, explainability, security, and human oversight when planning intelligence-enabled applications. The objective is to make relevant information available at the point where it can support better business decisions.",
    ],
    points: [
      "Analytics-enabled applications and portals",
      "Contextual insights, alerts, and recommendations",
      "API integration and decision-support workflows",
    ],
  },
];

// ==========================================
// CONNECTED INTELLIGENCE CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "Supply Chain Analytics",
    description:
      "Connect supply, demand, inventory, and operational information to support forecasting, visibility, performance analysis, and more informed supply chain planning.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Customer Data Platforms",
    description:
      "Evaluate and integrate customer data platforms that organize permitted customer information from multiple touchpoints into more consistent and usable profiles.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Retail Intelligence",
    description:
      "Analyze sales, products, purchasing patterns, and customer activity to support merchandising, inventory decisions, and commercial performance visibility.",
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Insurance & Portfolio Analytics",
    description:
      "Explore policy, customer, channel, operational, and portfolio information to support reporting, trend analysis, and appropriate risk-related decision processes.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "AI-Assisted Forecasting",
    description:
      "Examine historical and relevant external information to develop and evaluate forecasts for demand, revenue, capacity, or other measurable outcomes.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Digital Experience Analytics",
    description:
      "Bring together website and application interaction data to understand digital journeys, engagement patterns, campaign performance, and conversion opportunities.",
    icon: MousePointerClick,
  },
  {
    number: "07",
    title: "Intelligent Business Applications",
    description:
      "Plan the integration of analytics, predictions, and contextual information into applications so users can access relevant intelligence within their workflows.",
    icon: BrainCircuit,
  },
  {
    number: "08",
    title: "Enterprise Data Connectivity",
    description:
      "Evaluate APIs, connectors, and integration pipelines that help business applications share relevant information across departments and digital platforms.",
    icon: Network,
  },
  {
    number: "09",
    title: "Connected Reporting & Dashboards",
    description:
      "Organize information from different business functions into consistent performance indicators, dashboards, and operational reporting experiences.",
    icon: BarChart3,
  },
];

// ==========================================
// INDUSTRY-FOCUSED USE CASES
// ==========================================

const industryUseCases = [
  {
    number: "01",
    title: "Retail & Commerce",
    label: "Customer and Product Intelligence",
    icon: ShoppingCart,
    description:
      "Connect sales, customer, product, and digital interaction data to better understand commercial performance and shopping behavior.",
    examples: [
      "Customer segmentation and engagement patterns",
      "Product and category performance analysis",
      "Inventory and demand visibility",
    ],
  },
  {
    number: "02",
    title: "Insurance & Financial Operations",
    label: "Portfolio and Operational Insights",
    icon: Building2,
    description:
      "Organize relevant business information to support portfolio reporting, service performance, customer analysis, and responsible risk assessment.",
    examples: [
      "Portfolio and channel reporting",
      "Customer service and retention insights",
      "Operational trends and anomaly investigation",
    ],
  },
  {
    number: "03",
    title: "Supply Chain & Logistics",
    label: "Operational Intelligence",
    icon: Truck,
    description:
      "Combine information across orders, inventory, procurement, and distribution systems to improve visibility into operational activity.",
    examples: [
      "Demand and inventory forecasting",
      "Delivery and fulfillment performance",
      "Supply chain exception monitoring",
    ],
  },
];

// ==========================================
// CONNECTED INTELLIGENCE FRAMEWORK
// ==========================================

const intelligenceFlow = [
  {
    number: "01",
    title: "Connect",
    description:
      "Bring together relevant information from business systems, applications, and digital channels.",
    icon: GitMerge,
  },
  {
    number: "02",
    title: "Unify",
    description:
      "Organize data into consistent, documented views with appropriate quality controls.",
    icon: Database,
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Apply business rules, reporting, statistics, or analytical models to understand patterns.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Activate",
    description:
      "Deliver insights through dashboards, applications, APIs, alerts, or business processes.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review business outcomes and refine information quality, integrations, and analytical methods.",
    icon: TrendingUp,
  },
];

// ==========================================
// IMPLEMENTATION APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business & Use-Case Discovery",
    description:
      "Understand business processes, existing decision-making challenges, available information, and where better-connected intelligence could provide practical value.",
  },
  {
    number: "02",
    title: "Data & Systems Assessment",
    description:
      "Review current business applications, data sources, integration capabilities, quality concerns, access permissions, and relevant governance requirements.",
  },
  {
    number: "03",
    title: "Intelligence Architecture",
    description:
      "Define a suitable approach for data connectivity, unified information models, analytics, application integration, and ongoing operational requirements.",
  },
  {
    number: "04",
    title: "Integration & Intelligence Delivery",
    description:
      "Develop selected connections, reporting workflows, analytical components, or intelligence-enabled application features and validate their behavior.",
  },
  {
    number: "05",
    title: "Monitoring & Continuous Improvement",
    description:
      "Review data quality, analytical relevance, system reliability, user feedback, and changing business needs to identify opportunities for refinement.",
  },
];

// ==========================================
// AUDIENCES
// ==========================================

const audiences = [
  "Organizations with customer data spread across commerce, CRM, marketing, and service applications.",
  "Retail businesses seeking stronger visibility into products, customer behavior, and inventory performance.",
  "Insurance and financial operations teams working with disconnected reporting or portfolio information.",
  "Businesses aiming to embed analytics and decision support into existing applications and workflows.",
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
// SECTION EYEBROW
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
// REUSABLE SECTION HEADING
// ==========================================

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
          className="text-[clamp(2.35rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30243B]"
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
// SHARED CARD STYLES
// ==========================================

const cardStyle =
  "group flex h-full flex-col rounded-[18px] border border-[#E8DDEF] bg-white p-6 shadow-[0_10px_30px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D0B3E1] hover:shadow-[0_22px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-7";

const iconStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#E7D6F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EBDBF5] motion-safe:group-hover:scale-105";

// ==========================================
// MAIN CONNECTED INTELLIGENCE PAGE
// ==========================================

export default function ConnectedIntelligencePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">

      {/* ======================================
          01 — PREMIUM LAVENDER HERO
      ====================================== */}

      <section
        aria-labelledby="connected-title"
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
              Data &amp; Analytics / Connected Intelligence
            </Eyebrow>

            <h1
              id="connected-title"
              className="max-w-[760px] text-[clamp(2.5rem,5.1vw,5.35rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]"
            >
              Connect your data.

              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                Empower smarter
              </span>

              decisions.
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Bring business systems, customer information,
              and advanced analytics together. Build
              connected intelligence that provides clearer
              operational visibility and helps teams act
              on meaningful insights.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Connected Intelligence
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

          </Reveal>

          {/* HERO IMAGE */}

          <Reveal
            className="relative min-w-0 lg:pl-4"
            direction="right"
            delay={0.12}
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

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Connected Intelligence
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Connected data. Better decisions.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — CONNECTED INTELLIGENCE INTRODUCTION
      ====================================== */}

      <section
        aria-labelledby="connected-intro"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Our Connected Intelligence Perspective
            </Eyebrow>

            <h2
              id="connected-intro"
              className="max-w-[570px] text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              One connected view.

              <span className="block text-[#8B58AC]">
                Better business understanding.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
            />
          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Connected intelligence brings information,
              analytics, and business processes together
              to make insights easier to understand and use.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Organizations depend on many applications
                to manage customers, products, operations,
                finance, and digital services. Each system
                contains valuable information, but separate
                datasets can create incomplete views and
                inconsistent reporting.
              </p>

              <p>
                Connected intelligence helps organizations
                explore how information from these systems
                can be combined, interpreted, and delivered
                to the teams that need it. Modern integration,
                business intelligence, and appropriate analytical
                techniques can help make disconnected information
                more useful.
              </p>

              <p>
                Cloudlem approaches connected intelligence
                by examining the relationship between data,
                people, and business decisions. We focus on
                dependable integration, meaningful analysis,
                responsible information handling, and practical
                applications that support everyday business activities.
              </p>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          03–05 — EDITORIAL SERVICE SECTIONS
      ====================================== */}

      {editorialSections.map((section, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={section.number}
            aria-labelledby={`connected-pillar-${section.number}`}
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0 ? "bg-[#F7F2FB]" : "bg-white"
            }`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* TEXT COLUMN */}

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
                  id={`connected-pillar-${section.number}`}
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

                {/* KEY FOCUS AREAS */}

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
        aria-labelledby="connected-feature"
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
              Intelligence Across Your Business
            </p>

            <h2
              id="connected-feature"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Bring data together.

              <span className="block text-[#DDB8F1]">
                Put insight into action.
              </span>
            </h2>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Connected intelligence helps organizations
              move beyond isolated dashboards by combining
              relevant information and placing useful insights
              closer to the decisions that matter.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — CONNECTED INTELLIGENCE CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        aria-labelledby="connected-capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="connected-capabilities"
            eyebrow="Our Areas of Focus"
            title="Connected intelligence"
            highlight="capabilities."
            description="Bring together customer data, supply chain information, digital interactions, and business analytics to support more consistent and informed operational decisions."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  className="h-full"
                  delay={(index % 3) * 0.06}
                >

                  <article className={`${cardStyle} min-h-[290px]`}>

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
          08 — INDUSTRY USE CASES
      ====================================== */}

      <section
        aria-labelledby="connected-industries"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="connected-industries"
            eyebrow="Practical Applications"
            title="Connected insights"
            highlight="across industries."
            description="Different organizations use intelligence in different ways. These examples illustrate possible applications based on business requirements and available data."
          />

          <div className="grid gap-5 lg:grid-cols-3">

            {industryUseCases.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Reveal
                  key={industry.number}
                  delay={index * 0.06}
                  className="h-full"
                >

                  <article className={`${cardStyle} min-h-[480px]`}>

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
                        Example Use Cases
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
          09 — FIVE-STAGE INTELLIGENCE FRAMEWORK
      ====================================== */}

      <section
        aria-labelledby="connected-framework"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">

          <SectionHeading
            id="connected-framework"
            eyebrow="Connected Intelligence Framework"
            title="From disconnected"
            highlight="systems to connected action."
            description="A practical intelligence framework connects information sources, establishes common definitions, and delivers relevant analytical results where teams can use them."
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {intelligenceFlow.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <li key={stage.number} className="min-w-0">

                  <Reveal
                    className="h-full"
                    delay={(index % 5) * 0.045}
                  >

                    <div className="flex h-full min-h-[245px] flex-col rounded-[16px] border border-[#E1D1EA] bg-white p-5 shadow-[0_8px_24px_rgba(75,38,103,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#C8A6DC] hover:shadow-[0_14px_32px_rgba(75,38,103,0.09)] motion-safe:hover:-translate-y-1">

                      <span className="text-[11px] font-bold tracking-[0.13em] text-[#9464B3]">
                        STAGE {stage.number}
                      </span>

                      <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#F1E5F8] text-[#8250A4]">

                        <Icon
                          size={22}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                      </div>

                      <h3 className="mt-5 text-[19px] font-semibold leading-[1.3] text-[#32223E]">
                        {stage.title}
                      </h3>

                      <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-[#665A70]">
                        {stage.description}
                      </p>

                      {index < intelligenceFlow.length - 1 && (
                        <ArrowRight
                          size={17}
                          aria-hidden="true"
                          className="mt-5 text-[#A277C1]"
                        />
                      )}

                    </div>

                  </Reveal>

                </li>
              );
            })}

          </ol>

          {/* CROSS-CUTTING REQUIREMENTS */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Privacy & Access Controls",
                icon: ShieldCheck,
              },
              {
                label: "Data Quality & Governance",
                icon: Layers3,
              },
              {
                label: "Reliable Integration & Review",
                icon: Check,
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
          10 — IMPLEMENTATION APPROACH
      ====================================== */}

      <section
        aria-labelledby="connected-approach"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Our Implementation Approach
            </Eyebrow>

            <h2
              id="connected-approach"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              Connecting the right

              <span className="block text-[#8B57AB]">
                data with real needs.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Connected intelligence should be designed
              around business objectives and practical
              use cases. We consider the existing technology
              environment, the information people need,
              and how intelligence can become part of
              everyday operations.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <GitMerge
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                Connected data only creates value when
                it is understandable, dependable,
                appropriately governed, and relevant
                to a real decision.
              </p>

            </div>

          </Reveal>

          {/* IMPLEMENTATION TIMELINE */}

          <ol className="relative border-l border-[#E6D8EF] pl-7 sm:pl-9">

            {approach.map((step, index) => (

              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >

                <span
                  aria-hidden="true"
                  className="absolute -left-[39px] top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[5px] border-white bg-[#A56EC3] shadow-[0_0_0_1px_#DDC8EA] sm:-left-[47px]"
                />

                <Reveal delay={(index % 3) * 0.04}>

                  <div className="rounded-[14px] border border-[#ECE2F2] bg-[#FBF9FD] p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#F7F0FC] motion-safe:hover:translate-x-1 sm:p-6">

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
          11 — WHO WE HELP
      ====================================== */}

      <section
        aria-labelledby="connected-audiences"
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="connected-audiences"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Intelligence for

              <span className="block text-[#8B57AB]">
                connected organizations.
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Connected Intelligence is particularly
              relevant when useful information exists
              across different departments, systems,
              and customer touchpoints.
            </p>

          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">

            {audiences.map((item, index) => (

              <Reveal
                key={item}
                className="h-full"
                delay={(index % 2) * 0.07}
              >

                <div className="group flex h-full min-h-[168px] flex-col rounded-[15px] border border-[#E8DCF0] bg-white p-6 shadow-[0_8px_22px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#CBA9DF] hover:shadow-[0_16px_36px_rgba(70,34,99,0.08)] motion-safe:hover:-translate-y-1">

                  <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#EFE3F7] text-[#8251A0]">

                    <Check
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                  </span>

                  <p className="text-[15px] font-medium leading-[1.7] text-[#44374F]">
                    {item}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================
          12 — FINAL CALL TO ACTION
      ====================================== */}

      <section
        aria-labelledby="connected-cta"
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
              id="connected-cta"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to connect

              <span className="block text-[#F0D9FA]">
                your business intelligence?
              </span>
            </h2>

          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your existing business systems,
              customer data, operational reporting, and
              intelligence goals. We can discuss your needs
              and explore a practical approach for your
              organization.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-5 rounded-[9px] border border-white bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5C347D] shadow-[0_10px_30px_rgba(35,14,55,0.14)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#FCF6FF] hover:shadow-[0_16px_36px_rgba(35,14,55,0.2)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discuss Your Project

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
