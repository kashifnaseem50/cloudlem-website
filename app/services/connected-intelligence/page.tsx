
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
// ==========================================

const SERVICE_TITLE = "Connected Intelligence";

// EXISTING VERIFIED CLOUDLEM IMAGES

const images = {
  hero: "/images/backgrounds/section-1-4.jpg",
  customer: "/images/backgrounds/section-3-2.jpg",
  operations: "/images/backgrounds/section-2-2.jpg",
  applications: "/images/backgrounds/section-1-3.jpg",
  feature: "/images/backgrounds/section-3-1.jpg",
};

// ==========================================
// ANIMATION CONFIGURATION
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
// INTELLIGENCE FLOW
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
// RELEVANT BUSINESS NEEDS
// ==========================================

const audiences = [
  "Organizations with customer data spread across commerce, CRM, marketing, and service applications.",
  "Retail businesses seeking stronger visibility into products, customer behavior, and inventory performance.",
  "Insurance and financial operations teams working with disconnected reporting or portfolio information.",
  "Businesses aiming to embed analytics and decision support into existing applications and workflows.",
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

export default function ConnectedIntelligencePage() {
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

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                Data & Analytics / Connected Intelligence
              </p>
            </div>

            <h1 className="max-w-[880px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em]">
              Connect your data.

              <span className="block text-[#B7B09F]">
                Empower smarter
              </span>

              decisions.
            </h1>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.8] sm:text-[17px]">
              Bring business systems, customer
              information, and advanced analytics
              together. Build connected intelligence
              that provides clearer operational
              visibility and helps teams act
              on meaningful insights.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Connected Intelligence

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
                  Our Connected Intelligence Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                One connected view.

                <span className="block text-[#625C51]">
                  Better business understanding.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">

              <p className="text-[17px] font-semibold leading-[1.75]">
                Connected intelligence brings
                information, analytics, and
                business processes together
                to make insights easier
                to understand and use.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">

                <p>
                  Organizations depend on many
                  applications to manage customers,
                  products, operations, finance,
                  and digital services. Each system
                  contains valuable information,
                  but separate datasets can create
                  incomplete views and inconsistent
                  reporting.
                </p>

                <p>
                  Connected intelligence helps
                  organizations explore how
                  information from these systems
                  can be combined, interpreted,
                  and delivered to the teams
                  that need it. Modern integration,
                  business intelligence, and
                  appropriate analytical techniques
                  can help make disconnected
                  information more useful.
                </p>

                <p>
                  Cloudlem approaches connected
                  intelligence by examining the
                  relationship between data,
                  people, and business decisions.
                  We focus on dependable integration,
                  meaningful analysis, responsible
                  information handling, and practical
                  applications that support
                  everyday business activities.
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          THREE EDITORIAL SECTIONS
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

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                          paragraphIndex === 0 ? "font-medium" : ""
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
              Intelligence Across Your Business
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Bring data together.

              <span className="block text-[#B7B09F]">
                Put insight into action.
              </span>
            </h2>

            <p className="mt-6 max-w-[690px] text-[16px] leading-[1.8]">
              Connected intelligence helps
              organizations move beyond isolated
              dashboards by combining relevant
              information and placing useful
              insights closer to the decisions
              that matter.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ===================================
          CONNECTED INTELLIGENCE CAPABILITIES
      =================================== */}

      <section className="bg-[#181818] py-16 text-[#D8D2C8] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7B09F]">
                Our Areas of Focus
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Connected intelligence

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              Bring together customer data,
              supply chain information, digital
              interactions, and business analytics
              to support more consistent and
              informed operational decisions.
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
          INDUSTRY USE CASES
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Practical Applications
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Connected insights

                <span className="block text-[#625C51]">
                  across industries.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] lg:justify-self-end">
              Different organizations use
              intelligence in different ways.
              These examples illustrate possible
              applications based on business
              requirements and available data.
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">

            {industryUseCases.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.number}
                  className="flex flex-col border border-[#181818]/20 bg-[#B7B09F]/35 p-6 sm:p-7"
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
          CONNECTED INTELLIGENCE FRAMEWORK
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end"
          >

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">
                Connected Intelligence Framework
              </p>

              <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                From disconnected

                <span className="block text-[#514C43]">
                  systems to connected action.
                </span>
              </h2>
            </div>

            <p className="max-w-[550px] text-[16px] leading-[1.8] lg:justify-self-end">
              A practical intelligence
              framework connects information
              sources, establishes common
              definitions, and delivers
              relevant analytical results
              where teams can use them.
            </p>
          </motion.div>

          {/* RESPONSIVE FIVE-STAGE FRAMEWORK */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {intelligenceFlow.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="flex flex-col border border-[#181818]/20 bg-[#D8D2C8] p-5"
                >

                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span className="text-[12px] font-bold text-[#625C51]">
                      {stage.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.03em]">
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
              );
            })}

          </div>

          {/* CROSS-CUTTING REQUIREMENTS */}

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <ShieldCheck size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Privacy & Access Controls
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Layers3 size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Data Quality & Governance
              </span>
            </div>

            <div className="flex items-center gap-3 border border-[#181818]/25 p-4">
              <Check size={21} className="shrink-0" />
              <span className="text-[14px] font-semibold">
                Reliable Integration & Review
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          DELIVERY APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <motion.div {...reveal}>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  Our Implementation Approach
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Connecting the right

                <span className="block text-[#625C51]">
                  data with real needs.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Connected intelligence should
                be designed around business
                objectives and practical use
                cases. We consider the existing
                technology environment, the
                information people need, and
                how intelligence can become
                part of everyday operations.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">

                <GitMerge
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  Connected data only creates
                  value when it is understandable,
                  dependable, appropriately
                  governed, and relevant to
                  a real decision.
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
          WHO THIS SERVICE IS FOR
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Who We Help
              </p>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Intelligence for

                <span className="block text-[#514C43]">
                  connected organizations.
                </span>
              </h2>
            </div>

            <div>

              <p className="text-[17px] font-medium leading-[1.75]">
                Connected Intelligence is
                particularly relevant when
                useful information exists
                across different departments,
                systems, and customer touchpoints.
              </p>

              <div className="mt-5 space-y-3">

                {audiences.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-[#181818]/20 pb-3"
                  >
                    <Check
                      size={19}
                      className="mt-1 shrink-0"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <p className="text-[15px] leading-[1.75]">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          FINAL CALL TO ACTION
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to connect

                <span className="block text-[#625C51]">
                  your business intelligence?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">

              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your existing
                business systems, customer
                data, operational reporting,
                and intelligence goals.
                We can discuss your needs
                and explore a practical
                approach for your organization.
              </p>

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Project

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
