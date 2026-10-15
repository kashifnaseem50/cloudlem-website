
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

// ==========================================
// CLOUDLEM — DIGITAL COMMERCE
// ==========================================

const SERVICE_TITLE = "Digital Commerce";

// EXISTING CLOUDLEM IMAGE ASSETS
// These are safe local image paths.
// Replace with dedicated commerce photography
// when the final images are selected.

const images = {
  hero: "/images/backgrounds/section-1-1.jpg",
  storefront: "/images/backgrounds/section-1-2.jpg",
  operations: "/images/backgrounds/section-3-1.jpg",
  experience: "/images/backgrounds/section-3-2.jpg",
  feature: "/images/backgrounds/section-2-2.jpg",
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
// DIGITAL COMMERCE PAGE
// ==========================================

export default function DigitalCommercePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          HERO — CHARCOAL
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
            className="max-w-[880px]"
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
                Digital / Digital Commerce
              </p>
            </div>

            <h1 className="max-w-[850px] text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#D8D2C8]">
              Commerce built

              <span className="block text-[#B7B09F]">
                around your
              </span>

              customers.
            </h1>

            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.8] text-[#D8D2C8] sm:text-[17px]">
              Create connected digital shopping
              experiences that bring together
              customers, products, payments, and
              business operations. Build a commerce
              platform designed for usability,
              reliability, and future growth.
            </p>

            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="group mt-8 inline-flex min-h-12 items-center justify-between gap-7 border border-[#D8D2C8] bg-[#D8D2C8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#181818] transition-colors hover:bg-[#B7B09F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8D2C8]"
            >
              Discuss Your Commerce Project

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
          SERVICE INTRODUCTION
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
                  Our Commerce Perspective
                </p>
              </div>

              <h2 className="max-w-[550px] text-[clamp(2.3rem,3.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Digital experiences

                <span className="block text-[#625C51]">
                  connected to business.
                </span>
              </h2>
            </div>

            <div className="lg:pt-3">
              <p className="text-[17px] font-semibold leading-[1.75]">
                Modern digital commerce should make
                shopping easier for customers and
                operations more manageable for
                businesses.
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#181818]/90">
                <p>
                  Online shopping experiences rely on
                  much more than a website. Product
                  information, customer interactions,
                  payment systems, inventory processes,
                  and order fulfillment must work
                  together to support the business.
                </p>

                <p>
                  When these processes are disconnected,
                  organizations may encounter repetitive
                  administration, inconsistent data,
                  and unnecessary complexity. A practical
                  commerce strategy considers the
                  complete customer journey alongside
                  the operational systems that support it.
                </p>

                <p>
                  Cloudlem approaches digital commerce
                  by combining application development,
                  user experience design, technology
                  integration, and process improvement.
                  Our objective is to help businesses
                  build manageable digital platforms
                  that can evolve with customer needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          EDITORIAL CONTENT SECTIONS
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

                {/* TEXT COLUMN */}

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
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={`text-[15px] leading-[1.8] text-[#181818]/90 sm:text-[16px] ${
                            paragraphIndex === 0
                              ? "font-medium"
                              : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* KEY FOCUS AREAS */}

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

                {/* IMAGE COLUMN */}

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

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[#181818]" />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ===================================
          WIDE IMAGE FEATURE
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
              Connected Commerce Experiences
            </p>

            <h2 className="text-[clamp(2.7rem,4.4vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">
              Connect the customer

              <span className="block text-[#B7B09F]">
                experience to operations.
              </span>
            </h2>

            <p className="mt-6 max-w-[670px] text-[16px] leading-[1.8] text-[#D8D2C8]">
              Digital commerce works best when
              customer-facing experiences and
              supporting business systems operate
              together. A connected approach can
              help businesses simplify workflows,
              improve information visibility, and
              prepare for changing demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          COMMERCE CAPABILITIES
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
                Digital commerce

                <span className="block text-[#B7B09F]">
                  capabilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[540px] text-[16px] leading-[1.8] text-[#D8D2C8]/85 lg:justify-self-end">
              From storefront development and payment
              integration to order workflows and
              commerce analytics, these capabilities
              address key parts of a digital
              shopping experience.
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
                    <div className="flex h-12 w-12 items-center justify-center border border-[#B7B09F]/45 text-[#D8D2C8]">
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

                  <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#D8D2C8]">
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
          OUR COMMERCE APPROACH
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <motion.div {...reveal}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  How We Approach Commerce
                </p>
              </div>

              <h2 className="max-w-[540px] text-[clamp(2.4rem,3.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                From storefront

                <span className="block text-[#625C51]">
                  to customer experience.
                </span>
              </h2>

              <p className="mt-6 max-w-[490px] text-[16px] leading-[1.8]">
                Building an effective digital commerce
                solution requires an understanding of
                customers, business workflows, platform
                requirements, and the technology that
                connects them.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#181818]/20 pt-5">
                <Users
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.75]">
                  The right commerce experience
                  balances customer convenience,
                  operational practicality, and
                  long-term maintainability.
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
                Built for

                <span className="block text-[#514C43]">
                  evolving commerce needs.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[17px] font-medium leading-[1.75]">
                Digital Commerce is relevant to
                organizations launching new online
                sales channels, improving customer
                experiences, or connecting existing
                business operations.
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
          FINAL CTA
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#625C51]">
                Work With Cloudlem
              </p>

              <h2 className="max-w-[730px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
                Ready to grow your

                <span className="block text-[#625C51]">
                  digital commerce?
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-[420px] text-[16px] leading-[1.8]">
                Tell us about your products, customer
                experience goals, and existing
                commerce challenges. We can discuss
                your requirements and explore a
                practical direction for your project.
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
