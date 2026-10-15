
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  MonitorSmartphone,
  Workflow,
  Users,
} from "lucide-react";

import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

const SERVICE_TITLE = "Digital Commerce";

// Existing Cloudlem image assets.
const images = {
  hero: "/images/backgrounds/section-1-1.jpg",
  storefront: "/images/backgrounds/section-1-2.jpg",
  operations: "/images/backgrounds/section-3-1.jpg",
  experience: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-2-2.jpg",
};

// ==========================================
// EDITORIAL CONTENT
// ==========================================

const editorialSections = [
  {
    number: "01",
    eyebrow: "Digital Storefront Development",
    title: "Build commerce",
    highlight: "experiences that convert.",
    image: images.storefront,
    alt: "Technology environment representing digital commerce",
    paragraphs: [
      "A successful digital storefront is more than a product catalog. It is an experience that helps customers discover products, evaluate their options, and complete purchases with confidence. Every interaction, from the first page visit to checkout, can influence how customers perceive a business.",
      "Cloudlem approaches digital commerce development by connecting customer experience with business functionality. We consider navigation, product organization, responsive design, accessibility, performance, and the operational requirements behind an online store.",
      "Whether a business is developing a new commerce platform or improving an existing experience, the objective is to create a digital environment that is practical to manage, easy for customers to use, and adaptable as business requirements evolve.",
    ],
    points: [
      "Responsive storefronts and product catalogs",
      "Product discovery and customer navigation",
      "Checkout experience and platform performance",
    ],
  },
  {
    number: "02",
    eyebrow: "Connected Commerce Operations",
    title: "Connect every",
    highlight: "step of your business.",
    image: images.operations,
    alt: "Digital infrastructure supporting connected operations",
    paragraphs: [
      "Managing online commerce often requires several systems to work together. Product information, inventory, orders, customer records, payment providers, and reporting tools all contribute to the everyday operation of a digital business.",
      "Disconnected applications and manual processes can introduce delays, duplicate work, and inconsistent information. An effective commerce strategy considers how data moves between systems and where integration or automation may simplify operations.",
      "Cloudlem helps businesses evaluate commerce workflows and plan connections between storefronts and supporting business applications. By improving how information moves through the organization, teams can establish more reliable and manageable commerce processes.",
    ],
    points: [
      "Order processing and operational workflows",
      "Inventory and business application integration",
      "Payment and transaction workflow planning",
    ],
  },
  {
    number: "03",
    eyebrow: "Customer-Centered Commerce",
    title: "Create shopping",
    highlight: "journeys that feel effortless.",
    image: images.experience,
    alt: "Connected digital technology representing customer experience",
    paragraphs: [
      "Customers expect digital shopping experiences to be straightforward, consistent, and accessible across devices. Complicated navigation, confusing product information, and unnecessary steps during checkout can create friction throughout the buying journey.",
      "A customer-centered approach examines how visitors interact with the storefront, how they find information, and what happens between initial product discovery and a completed order. These insights can inform improvements to interface design, content presentation, and conversion pathways.",
      "We focus on creating commerce experiences that align with customer needs while remaining manageable for the business. A thoughtful combination of usability, performance, and operational planning provides the foundation for continuous improvement.",
    ],
    points: [
      "Mobile-friendly shopping experiences",
      "Customer journey and usability improvements",
      "Commerce analytics and conversion planning",
    ],
  },
];

// ==========================================
// DIGITAL COMMERCE CAPABILITIES
// ==========================================

const capabilities = [
  {
    number: "01",
    title: "E-commerce Development",
    description:
      "Plan and develop online storefronts with responsive interfaces, clear product presentation, straightforward navigation, and functionality aligned with business requirements.",
    icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Payment Integration",
    description:
      "Evaluate and integrate suitable payment providers while considering transaction flows, customer experience, provider requirements, and secure implementation practices.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "Product & Order Management",
    description:
      "Support practical workflows for maintaining product information, organizing catalogs, processing orders, and coordinating relevant commerce operations.",
    icon: Package,
  },
  {
    number: "04",
    title: "Commerce Analytics",
    description:
      "Identify meaningful commerce metrics and reporting opportunities that help businesses understand customer behavior, sales activity, and operational performance.",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Responsive Commerce Experiences",
    description:
      "Design customer-facing shopping experiences that adapt to desktop, tablet, and mobile devices while emphasizing accessibility, usability, and consistent presentation.",
    icon: MonitorSmartphone,
  },
  {
    number: "06",
    title: "Commerce Automation",
    description:
      "Assess opportunities to reduce repetitive administrative tasks and connect order, inventory, notification, and reporting workflows where appropriate.",
    icon: Workflow,
  },
];

// ==========================================
// DELIVERY APPROACH
// ==========================================

const approach = [
  {
    number: "01",
    title: "Business & Customer Discovery",
    description:
      "We begin by understanding the products or services being offered, target customers, existing sales channels, operational processes, and the goals of the commerce initiative.",
  },
  {
    number: "02",
    title: "Commerce Architecture & Planning",
    description:
      "We evaluate platform options, required integrations, product structures, payment considerations, and the customer journey before defining an implementation approach.",
  },
  {
    number: "03",
    title: "Experience Design & Development",
    description:
      "We plan and implement storefront interfaces and relevant commerce functionality with attention to usability, responsiveness, and maintainable development practices.",
  },
  {
    number: "04",
    title: "Integration & Validation",
    description:
      "We review important customer and operational workflows, including navigation, checkout, relevant integrations, mobile behavior, and expected transaction handling.",
  },
  {
    number: "05",
    title: "Launch & Improvement",
    description:
      "We help establish appropriate launch considerations and identify opportunities to refine the customer experience and commerce operations as requirements change.",
  },
];

const audiences = [
  "Retail businesses creating or improving their online storefront.",
  "Growing brands seeking a more organized digital shopping experience.",
  "Businesses connecting sales channels with inventory and order workflows.",
  "Organizations modernizing existing commerce applications and customer journeys.",
];

// ==========================================
// REUSABLE SCROLL ANIMATION
// Respects reduced-motion preferences.
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
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: direction === "up" ? 24 : 0,
              x:
                direction === "left"
                  ? -24
                  : direction === "right"
                    ? 24
                    : 0,
            }
      }
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.68,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
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
        className="h-px w-8 shrink-0 bg-[#9460B6]"
      />
      <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#8151A2]">
        {children}
      </p>
    </div>
  );
}

// ==========================================
// DIGITAL COMMERCE PAGE
// ==========================================

export default function DigitalCommercePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#292131]">

      {/* ======================================
          01 — HERO
          Bright Lavender / White
      ====================================== */}

      <section className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#FFFEFF_0%,#FAF7FD_48%,#F0E8F7_100%)] pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">

        {/* Ambient lighting */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-[#DAC4EB]/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-[450px] w-[450px] rounded-full bg-white/70 blur-3xl"
        />

        <div className="container-systems relative z-10 grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">

          {/* HERO COPY */}

          <Reveal className="relative z-10 min-w-0">

            <Link
              href="/services"
              className="group mb-10 inline-flex min-h-8 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8151A2] transition-colors hover:text-[#45285B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8151A2]"
            >
              <ArrowLeft
                size={17}
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:-translate-x-1"
              />
              All Services
            </Link>

            <Eyebrow>
              Digital / Digital Commerce
            </Eyebrow>

            <h1 className="max-w-[750px] text-[clamp(2.9rem,5.3vw,5.5rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#291D34]">
              Commerce built
              <span className="block bg-[linear-gradient(100deg,#6F3E96,#A877C8)] bg-clip-text text-transparent">
                around your
              </span>
              customers.
            </h1>

            <p className="mt-7 max-w-[640px] text-[15px] leading-[1.85] text-[#62576C] sm:text-[17px]">
              Create connected digital shopping experiences
              that bring together customers, products,
              payments, and business operations. Build a
              commerce platform designed for usability,
              reliability, and future growth.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">

              {/* MAIN INQUIRY BUTTON */}

              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[9px] bg-[#713F96] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(113,63,150,0.19)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#5D317F] hover:shadow-[0_16px_33px_rgba(113,63,150,0.25)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713F96]"
              >
                Discuss Your Commerce Project

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>

              {/* SECONDARY ACTION */}

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

              {/* FLOATING EDITORIAL LABEL */}

              <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[310px]">

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B57A9]">
                  Digital Commerce
                </span>

                <p className="mt-1 text-[16px] font-semibold leading-snug text-[#32223F]">
                  Customers. Products. Operations.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ======================================
          02 — SERVICE INTRODUCTION
      ====================================== */}

      <section
        className="bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="commerce-intro-heading"
      >
        <div className="container-systems grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">

          <Reveal>
            <Eyebrow>
              Our Commerce Perspective
            </Eyebrow>

            <h2
              id="commerce-intro-heading"
              className="max-w-[760px] text-[clamp(2.45rem,3.8vw,4.3rem)] font-semibold leading-[1.17] tracking-[-0.035em] text-[#291D34]"
            >
              Digital experiences
              <span className="block text-[#8B58AC]">
                connected to business.
              </span>
            </h2>

            <div
              className="mt-7 h-1 w-14 rounded-full bg-[#AA7BC8]"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.1}>

            <p className="text-[18px] font-semibold leading-[1.75] text-[#382A45]">
              Modern digital commerce should make
              shopping easier for customers and
              operations more manageable for businesses.
            </p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-[#645A6C] sm:text-[16px]">

              <p>
                Online shopping experiences rely on much
                more than a website. Product information,
                customer interactions, payment systems,
                inventory processes, and order fulfillment
                must work together to support the business.
              </p>

              <p>
                When these processes are disconnected,
                organizations may encounter repetitive
                administration, inconsistent data, and
                unnecessary complexity. A practical commerce
                strategy considers the complete customer
                journey alongside the operational systems
                that support it.
              </p>

              <p>
                Cloudlem approaches digital commerce by
                combining application development, user
                experience design, technology integration,
                and process improvement. Our objective is
                to help businesses build manageable digital
                platforms that can evolve with customer needs.
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
            className={`py-20 sm:py-24 lg:py-28 ${
              index % 2 === 0
                ? "bg-[#F7F2FB]"
                : "bg-white"
            }`}
            aria-labelledby={`commerce-editorial-${section.number}`}
          >
            <div className="container-systems grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

              {/* EDITORIAL CONTENT */}

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
                  id={`commerce-editorial-${section.number}`}
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

                <div className="mt-7 rounded-[15px] border border-[#E7DCEF] bg-white/80 p-5 shadow-[0_9px_28px_rgba(83,48,112,0.035)] sm:p-6">

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

                  <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#653D82] backdrop-blur-md">

                    <span className="h-2 w-2 rounded-full bg-[#A572C3]" />

                    {section.eyebrow}

                  </div>

                </div>
              </Reveal>

            </div>
          </section>
        );
      })}

      {/* ======================================
          06 — IMMERSIVE IMAGE FEATURE
      ====================================== */}

      <section
        className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-[#352142] py-24 text-white lg:min-h-[540px]"
        aria-labelledby="commerce-feature-heading"
      >

        <Image
          src={images.feature}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(37,21,52,0.94)_0%,rgba(46,27,62,0.80)_56%,rgba(65,40,77,0.45)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_30%,rgba(217,181,237,0.18),transparent_60%)]"
        />

        <div className="container-systems relative z-10">

          <Reveal className="max-w-[870px]">

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC5F0]">
              Connected Commerce Experiences
            </p>

            <h2
              id="commerce-feature-heading"
              className="text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Connect the customer

              <span className="block text-[#DDB8F1]">
                experience to operations.
              </span>
            </h2>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.85] text-[#F0E7F6]">
              Digital commerce works best when
              customer-facing experiences and supporting
              business systems operate together. A
              connected approach can help businesses
              simplify workflows, improve information
              visibility, and prepare for changing demand.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ======================================
          07 — DIGITAL COMMERCE CAPABILITIES
      ====================================== */}

      <section
        id="capabilities"
        className="scroll-mt-24 bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
        aria-labelledby="commerce-capabilities-heading"
      >
        <div className="container-systems">

          {/* SECTION HEADER */}

          <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <Reveal>

              <Eyebrow>
                Our Areas of Focus
              </Eyebrow>

              <h2
                id="commerce-capabilities-heading"
                className="text-[clamp(2.4rem,3.6vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
              >
                Digital commerce

                <span className="block text-[#8855A9]">
                  capabilities.
                </span>
              </h2>

            </Reveal>

            <Reveal delay={0.08}>

              <p className="max-w-[550px] text-[16px] leading-[1.85] text-[#665A70] lg:justify-self-end">
                From storefront development and payment
                integration to order workflows and
                commerce analytics, these capabilities
                address key parts of a digital shopping
                experience.
              </p>

            </Reveal>

          </div>

          {/* CAPABILITY CARDS */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={(index % 3) * 0.07}
                  className="h-full"
                >

                  <article className="group flex h-full min-h-[300px] flex-col rounded-[17px] border border-[#E9DDF1] bg-white p-6 shadow-[0_10px_28px_rgba(70,34,99,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D3B8E4] hover:shadow-[0_20px_46px_rgba(70,34,99,0.105)] motion-safe:hover:-translate-y-1.5 sm:p-7">

                    <div className="mb-7 flex items-start justify-between">

                      <span className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-[#E6D5F0] bg-[#F5ECFA] text-[#8450A5] transition-[background-color,transform] duration-300 group-hover:bg-[#EEDDF7] motion-safe:group-hover:scale-105">

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

                    <div
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
          08 — OUR DELIVERY APPROACH
      ====================================== */}

      <section
        className="bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="commerce-approach-heading"
      >

        <div className="container-systems grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              How We Approach Commerce
            </Eyebrow>

            <h2
              id="commerce-approach-heading"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em]"
            >
              From storefront

              <span className="block text-[#8B57AB]">
                to customer experience.
              </span>

            </h2>

            <p className="mt-6 max-w-[490px] text-[16px] leading-[1.85] text-[#665A70]">
              Building an effective digital commerce
              solution requires an understanding of
              customers, business workflows, platform
              requirements, and the technology that
              connects them.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[15px] border border-[#E7DAEF] bg-[#F8F3FC] p-5">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#EDDEF6] text-[#8150A4]">

                <Users
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </span>

              <p className="text-[15px] leading-[1.75] text-[#55465F]">
                The right commerce experience balances
                customer convenience, operational
                practicality, and long-term maintainability.
              </p>

            </div>

          </Reveal>

          {/* DELIVERY TIMELINE */}

          <ol className="relative space-y-0 border-l border-[#E6D8EF] pl-7 sm:pl-9">

            {approach.map((step, index) => (

              <li
                key={step.number}
                className="relative pb-8 last:pb-0"
              >

                <span
                  aria-hidden="true"
                  className="absolute -left-[39px] top-0 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[5px] border-white bg-[#A56EC3] shadow-[0_0_0_1px_#DDC8EA] sm:-left-[47px]"
                />

                <Reveal
                  delay={(index % 3) * 0.04}
                >

                  <div className="rounded-[14px] border border-[#ECE2F2] bg-[#FBF9FD] p-5 transition-[border-color,background-color,transform] duration-300 hover:border-[#D7BCE6] hover:bg-[#F7F0FC] motion-safe:hover:translate-x-1 sm:p-6">

                    <div className="mb-2 text-[11px] font-bold tracking-[0.16em] text-[#9867B7]">
                      STEP {step.number}
                    </div>

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
          09 — WHO WE HELP
      ====================================== */}

      <section
        className="bg-[#F7F2FB] py-20 sm:py-24 lg:py-28"
        aria-labelledby="commerce-audiences-heading"
      >

        <div className="container-systems grid gap-10 lg:grid-cols-[0.87fr_1.13fr] lg:gap-20">

          {/* SECTION INTRODUCTION */}

          <Reveal>

            <Eyebrow>
              Who We Help
            </Eyebrow>

            <h2
              id="commerce-audiences-heading"
              className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              Built for

              <span className="block text-[#8B57AB]">
                evolving commerce needs.
              </span>

            </h2>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.85] text-[#665A70]">
              Digital Commerce is relevant to organizations
              launching new online sales channels,
              improving customer experiences, or
              connecting existing business operations.
            </p>

          </Reveal>

          {/* AUDIENCE CARDS */}

          <div className="grid gap-4 sm:grid-cols-2">

            {audiences.map((item, index) => (

              <Reveal
                key={item}
                delay={(index % 2) * 0.08}
                className="h-full"
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
          10 — FINAL PROJECT CTA
      ====================================== */}

      <section
        className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#553173_0%,#76459C_52%,#9668B5_100%)] py-20 text-white sm:py-24 lg:py-28"
        aria-labelledby="commerce-cta-heading"
      >

        {/* SOFT DECORATIVE LIGHTING */}

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
          className="pointer-events-none absolute left-0 bottom-0 h-60 w-96 rounded-full bg-[#CFA7EA]/15 blur-[90px]"
        />

        <div className="container-systems relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* CTA TITLE */}

          <Reveal>

            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7D1F3]">
              Work With Cloudlem
            </p>

            <h2
              id="commerce-cta-heading"
              className="max-w-[760px] text-[clamp(2.55rem,4vw,4.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]"
            >
              Ready to grow your

              <span className="block text-[#F0D9FA]">
                digital commerce?
              </span>

            </h2>

          </Reveal>

          {/* CTA DESCRIPTION AND BUTTON */}

          <Reveal
            delay={0.1}
            className="lg:justify-self-end"
          >

            <p className="max-w-[460px] text-[16px] leading-[1.85] text-[#F2EAF6]">
              Tell us about your products, customer
              experience goals, and existing commerce
              challenges. We can discuss your requirements
              and explore a practical direction for your
              project.
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
