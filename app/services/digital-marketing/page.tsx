
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Compass,
  Megaphone,
  MessageSquare,
  PenLine,
  Search,
  Target,
} from "lucide-react";
import ServiceInquiryModal from "../../components/services/ServiceInquiryModal";

const SERVICE_TITLE = "Digital Marketing";
const SERVICE_IMAGE = "/images/services/design-branding.webp";

const capabilities = [
  {
    icon: Compass,
    number: "01",
    title: "Digital Marketing Strategy",
    description:
      "Develop focused marketing plans that connect business objectives with audience needs, digital channels, and measurable priorities.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Digital Campaigns",
    description:
      "Plan and coordinate campaigns with consistent messaging, clear objectives, and a structured approach to audience engagement.",
  },
  {
    icon: PenLine,
    number: "03",
    title: "Content Strategy",
    description:
      "Organize content around relevant topics, customer questions, and communication goals to help businesses share meaningful messages.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "Brand Communication",
    description:
      "Support a recognizable brand voice through coordinated messaging and consistent communication across digital touchpoints.",
  },
  {
    icon: Search,
    number: "05",
    title: "Digital Visibility",
    description:
      "Explore opportunities to improve how customers discover relevant content, information, and business offerings online.",
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Performance Insights",
    description:
      "Review campaign activity and engagement patterns to better understand what is working and where marketing efforts can improve.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business goals, target audience, current marketing activities, and communication challenges.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Create a focused approach to messaging, content, channel selection, and campaign priorities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Coordinate marketing activities and content delivery with attention to consistency and audience relevance.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Review available performance insights and refine marketing activities based on observations and feedback.",
  },
];

const priorities = [
  {
    number: "01",
    title: "Audience Understanding",
    description:
      "Focus communication on the people you want to reach, their interests, and the information they need.",
  },
  {
    number: "02",
    title: "Message Consistency",
    description:
      "Create a more connected brand experience by aligning communication across campaigns and digital channels.",
  },
  {
    number: "03",
    title: "Purposeful Content",
    description:
      "Build content around relevant messages that explain value and encourage meaningful interactions.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    description:
      "Use available insights to guide improvements rather than relying on assumptions alone.",
  },
];

const benefits = [
  "Audience-focused communication",
  "Coordinated campaign activities",
  "Consistent brand messaging",
  "Structured content planning",
  "Performance-focused improvements",
  "Adaptable digital strategies",
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
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

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#EADCF3]" : "text-[#8150A0]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-[6px] w-[6px] rounded-full ${
          light ? "bg-[#F2DFFB]" : "bg-[#9E71BA]"
        }`}
      />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div
      className={
        center ? "mx-auto max-w-[750px] text-center" : "max-w-[720px]"
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-5 text-[32px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#30243B] sm:text-[42px] lg:text-[48px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[15px] leading-[1.85] text-[#706679] sm:text-[16px]">
          {description}
        </p>
      )}
    </div>
  );
}

const cardStyle =
  "group flex h-full flex-col rounded-[20px] border border-[#E9DFF0] bg-white p-6 shadow-[0_12px_36px_rgba(75,38,103,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#D4BCE3] hover:shadow-[0_24px_48px_rgba(75,38,103,0.11)] motion-safe:hover:-translate-y-1 sm:p-8";

export default function DigitalMarketingPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const openInquiry = () => setInquiryOpen(true);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#30243B]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#FCFAFE_36%,#F3EBF8_100%)] pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-20 h-[470px] w-[470px] rounded-full bg-[#D8BDEB]/25 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 bottom-0 h-[330px] w-[330px] rounded-full bg-[#EEE1F6]/70 blur-[100px]"
        />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <Reveal>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#81748A] transition-colors hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Services
                <ChevronRight size={13} aria-hidden="true" />
                <span className="text-[#75449B]">
                  Digital Marketing
                </span>
              </Link>

              <div className="mt-10">
                <Eyebrow>Business Process Services</Eyebrow>
              </div>

              <h1 className="mt-6 max-w-[670px] text-[43px] font-semibold leading-[1.08] tracking-[-0.055em] text-[#30243B] sm:text-[58px] lg:text-[66px]">
                Meaningful marketing.
                <span className="mt-1 block bg-gradient-to-r from-[#75449B] via-[#9464B4] to-[#BA97D1] bg-clip-text text-transparent">
                  Stronger connections.
                </span>
              </h1>

              <p className="mt-7 max-w-[590px] text-[16px] leading-[1.9] text-[#706679] sm:text-[17px]">
                Connect with the right audiences through digital
                campaigns, content strategies, brand communication,
                and performance-focused marketing initiatives.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openInquiry}
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-[9px] bg-[#75449B] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(117,68,155,0.23)] transition-[background-color,box-shadow,transform] hover:bg-[#603781] hover:shadow-[0_16px_34px_rgba(117,68,155,0.3)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#75449B]"
                >
                  Discuss Your Marketing Goals
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </button>

                <a
                  href="#capabilities"
                  className="group inline-flex min-h-13 items-center gap-2 text-[13px] font-semibold text-[#604D6D] transition-colors hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#75449B]"
                >
                  Explore Capabilities
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform motion-safe:group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E9DFF0] pt-6">
                {[
                  "Audience-focused",
                  "Brand-consistent",
                  "Insight-driven",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[12px] font-medium text-[#73667D]"
                  >
                    <Check
                      size={15}
                      className="text-[#8D5CAC]"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[590px] lg:max-w-none">
                <div className="relative aspect-[5/5.2] overflow-hidden rounded-[24px] border-[7px] border-white bg-[#EEE4F4] shadow-[0_35px_80px_rgba(68,36,87,0.15)] sm:aspect-[6/5.4]">
                  <Image
                    src={SERVICE_IMAGE}
                    alt="Digital Marketing service illustration"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#34213E]/60 via-transparent to-[#9C73B4]/10"
                  />

                  <div className="absolute bottom-6 left-6 right-6 rounded-[14px] border border-white/25 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#8962A1]">
                      Digital Marketing Services
                    </p>

                    <p className="mt-2 text-[19px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#342641] sm:text-[22px]">
                      Connecting brands, audiences, and meaningful experiences.
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-[24px] bg-[#E9D9F3]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Service Overview"
                title="Make every digital interaction more purposeful."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-[650px] space-y-5 lg:pt-8">
                <p className="text-[17px] leading-[1.95] text-[#5F5668]">
                  Digital marketing is about more than being visible
                  online. It is about understanding your audience,
                  communicating with purpose, and creating a connected
                  experience across the channels where your customers
                  engage.
                </p>

                <p className="text-[15px] leading-[1.95] text-[#766B7F]">
                  Cloudlem&apos;s Digital Marketing service focuses on
                  practical marketing planning, organized campaigns,
                  content strategies, and coordinated brand
                  communication. The approach brings together creative
                  thinking and performance awareness to support
                  evolving business goals.
                </p>

                <div className="grid gap-3 pt-3 sm:grid-cols-2">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[10px] bg-[#F8F4FB] px-4 py-3.5"
                    >
                      <Check
                        size={16}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#8655A6]"
                      />

                      <span className="text-[12px] font-medium leading-6 text-[#5E5269]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="scroll-mt-24 bg-[#F8F5FC] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-systems">
          <Reveal>
            <SectionHeading
              eyebrow="Our Capabilities"
              title="The right message. The right audience. The right approach."
              description="From marketing strategy to content and performance insights, our focus is on helping businesses approach digital communication with greater clarity and consistency."
              center
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal
                  key={capability.title}
                  delay={(index % 3) * 0.07}
                >
                  <div className={cardStyle}>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[15px] border border-[#E6D5F0] bg-[#F5ECFA] text-[#8450A5] transition-colors group-hover:bg-[#EBDAF4]">
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="text-[12px] font-semibold text-[#B7A5C3]">
                        {capability.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[19px] font-semibold leading-[1.4] tracking-[-0.025em] text-[#342641]">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.85] text-[#786E80]">
                      {capability.description}
                    </p>

                    <div className="mt-auto border-t border-[#EFE7F3] pt-6">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.09em] text-[#8B61A6]">
                        Digital Marketing
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKETING FEATURE */}
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#4B2C65_0%,#75449B_55%,#9767B8_100%)] py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-36 h-[450px] w-[450px] rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-20 h-[330px] w-[330px] rounded-full border border-white/10"
        />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <Eyebrow light>
                Connected Marketing
              </Eyebrow>

              <h2 className="mt-6 max-w-[630px] text-[34px] font-semibold leading-[1.15] tracking-[-0.045em] sm:text-[45px] lg:text-[51px]">
                Great communication starts with understanding your audience.
              </h2>

              <p className="mt-6 max-w-[590px] text-[15px] leading-[1.9] text-[#EDE0F3]">
                A strong digital presence comes from bringing strategy,
                content, and brand communication together. By creating
                clearer connections between these activities, businesses
                can communicate more consistently and make more
                informed marketing decisions.
              </p>

              <button
                type="button"
                onClick={openInquiry}
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-[8px] bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.09em] text-[#623D80] transition-[background-color,transform] hover:bg-[#F5EBFA] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Explore Your Opportunities
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </button>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {priorities.map((priority, index) => (
                  <div
                    key={priority.title}
                    className={`rounded-[17px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-7 ${
                      index % 2 === 1
                        ? "sm:translate-y-5"
                        : ""
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#DCC6EC]">
                      {priority.number}
                    </span>

                    <h3 className="mt-5 text-[19px] font-semibold text-white">
                      {priority.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.85] text-[#ECE0F3]">
                      {priority.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="A clear process from ideas to improvements."
              description="Our proposed process connects business understanding with structured planning, marketing activities, and ongoing refinement."
              center
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {approach.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.07}
              >
                <div className="h-full rounded-[19px] border border-[#E9DFF0] bg-[#FCFAFD] p-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#D6BFE4] hover:bg-white hover:shadow-[0_18px_40px_rgba(75,38,103,0.07)] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE1F6] text-[14px] font-bold text-[#75449B]">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-[20px] font-semibold tracking-[-0.025em] text-[#342641]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.85] text-[#766C7D]">
                    {step.description}
                  </p>

                  {index < approach.length - 1 && (
                    <div className="mt-6 text-[#AA87BD]">
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS-ALIGNED MARKETING */}
      <section className="bg-[#F8F5FC] py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>
                Built Around Your Business
              </Eyebrow>

              <h2 className="mt-5 max-w-[600px] text-[32px] font-semibold leading-[1.14] tracking-[-0.045em] text-[#30243B] sm:text-[44px]">
                Marketing should support your business, not complicate it.
              </h2>

              <p className="mt-6 max-w-[600px] text-[15px] leading-[1.9] text-[#706679]">
                Different businesses serve different audiences, work
                within different budgets, and communicate through
                different channels. A practical marketing approach
                should reflect those differences.
              </p>

              <p className="mt-4 max-w-[600px] text-[15px] leading-[1.9] text-[#706679]">
                We focus on helping businesses identify relevant
                opportunities, coordinate communication, and work
                toward marketing activities that align with their
                goals and available resources.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[22px] border border-[#E6D8EE] bg-white p-6 shadow-[0_24px_65px_rgba(80,42,103,0.07)] sm:p-9">
                <div className="flex items-center gap-4 border-b border-[#EEE7F2] pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EEE1F6] text-[#8250A1]">
                    <Target
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9A76AF]">
                      Strategic Priorities
                    </p>

                    <h3 className="mt-1 text-[20px] font-semibold text-[#342641]">
                      Purpose-led marketing
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-5">
                  {[
                    {
                      title: "Start with clear objectives",
                      description:
                        "Define what your marketing efforts should support before choosing activities or channels.",
                    },
                    {
                      title: "Communicate consistently",
                      description:
                        "Create alignment between your audience, messaging, and brand across digital touchpoints.",
                    },
                    {
                      title: "Learn and adapt",
                      description:
                        "Review engagement and available performance insights to guide future priorities.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6EDFA] text-[11px] font-bold text-[#8454A3]">
                        0{index + 1}
                      </div>

                      <div>
                        <h4 className="text-[14px] font-semibold text-[#392D44]">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-[12px] leading-[1.75] text-[#7A7080]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="container-systems">
          <Reveal>
            <div className="relative overflow-hidden rounded-[25px] bg-[linear-gradient(115deg,#533170_0%,#75449B_55%,#9869B6_100%)] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 -top-40 h-[400px] w-[400px] rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-44 -right-20 h-[450px] w-[450px] rounded-full bg-white/5"
              />

              <div className="relative z-10 mx-auto max-w-[730px]">
                <Eyebrow light>
                  Let&apos;s Connect
                </Eyebrow>

                <h2 className="mt-6 text-[34px] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-[47px] lg:text-[52px]">
                  Let&apos;s make your digital marketing more meaningful.
                </h2>

                <p className="mx-auto mt-6 max-w-[580px] text-[15px] leading-[1.9] text-[#EDDEF3]">
                  Tell us about your marketing objectives,
                  communication challenges, and the audiences you
                  want to reach. Let&apos;s explore how a more
                  focused digital marketing approach could support
                  your business.
                </p>

                <button
                  type="button"
                  onClick={openInquiry}
                  className="group mt-9 inline-flex min-h-13 items-center justify-center gap-3 rounded-[9px] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.09em] text-[#633D82] shadow-[0_12px_28px_rgba(36,16,50,0.14)] transition-[background-color,transform] hover:bg-[#F5ECFA] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  Talk to Our Team
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceInquiryModal
        serviceTitle={SERVICE_TITLE}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
