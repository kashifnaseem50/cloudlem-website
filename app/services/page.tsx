"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Database,
  Headphones,
  Layers,
  Megaphone,
  RefreshCw,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import ServiceInquiryModal from "../components/services/ServiceInquiryModal";

type Service = {
  title: string;
  href: string;
  description: string;
  capabilities: readonly string[];
  icon: LucideIcon;
};

// Every href below corresponds to an existing Cloudlem service route.
const technologyServices: readonly Service[] = [
  {
    title: "Digital Consulting & Strategy",
    href: "/services/digital-consulting-strategy",
    description:
      "Translate business priorities into a clear digital roadmap, from early discovery to practical execution.",
    capabilities: ["Technology strategy", "Digital roadmaps"],
    icon: Compass,
  },
  {
    title: "Digital Commerce",
    href: "/services/digital-commerce",
    description:
      "Create connected commerce experiences that make it easier for customers to discover, purchase, and return.",
    capabilities: ["Commerce platforms", "Customer experience"],
    icon: ShoppingBag,
  },
  {
    title: "Business Applications",
    href: "/services/business-applications",
    description:
      "Build and connect the business applications that support people, processes, and everyday operations.",
    capabilities: ["Business workflows", "App integration"],
    icon: Layers,
  },
  {
    title: "Data Modernization",
    href: "/services/data-modernization",
    description:
      "Move beyond fragmented data systems with a more flexible, reliable foundation for analytics and growth.",
    capabilities: ["Modern data platforms", "Data architecture"],
    icon: RefreshCw,
  },
  {
    title: "Data Management",
    href: "/services/data-management",
    description:
      "Improve how data is organized, governed, accessed, and maintained across your organization.",
    capabilities: ["Data governance", "Data quality"],
    icon: Database,
  },
  {
    title: "Advanced Analytics",
    href: "/services/advanced-analytics",
    description:
      "Turn complex information into useful insight for better decisions and measurable business outcomes.",
    capabilities: ["Business intelligence", "Predictive analytics"],
    icon: BarChart3,
  },
  {
    title: "Connected Intelligence",
    href: "/services/connected-intelligence",
    description:
      "Bring data, systems, and insights together so teams can act with greater clarity and confidence.",
    capabilities: ["Connected data", "Intelligent workflows"],
    icon: BrainCircuit,
  },
  {
    title: "Generative AI",
    href: "/services/generative-ai",
    description:
      "Explore useful AI experiences and automation designed around genuine business needs.",
    capabilities: ["AI applications", "Workflow automation"],
    icon: Sparkles,
  },
  {
    title: "Digital Infrastructure Services",
    href: "/services/digital-infrastructure-services",
    description:
      "Establish secure, dependable infrastructure that supports modern applications and operations.",
    capabilities: ["Infrastructure design", "Platform reliability"],
    icon: Server,
  },
  {
    title: "Cloud Application Development & Integration",
    href: "/services/cloud-application-development-integration",
    description:
      "Develop cloud-ready applications and connect services into a more cohesive digital ecosystem.",
    capabilities: ["Cloud-native apps", "API integration"],
    icon: Code2,
  },
  {
    title: "Cloud Operations & Migration",
    href: "/services/cloud-operations-migration",
    description:
      "Plan cloud transitions and keep workloads reliable, visible, and easier to manage after migration.",
    capabilities: ["Cloud migration", "DevOps operations"],
    icon: Cloud,
  },
  {
    title: "Managed Services",
    href: "/services/managed-services",
    description:
      "Support critical technology environments with ongoing oversight, maintenance, and improvement.",
    capabilities: ["Operational support", "Monitoring"],
    icon: Settings2,
  },
  {
    title: "Security",
    href: "/services/security",
    description:
      "Strengthen security practices across infrastructure, applications, and day-to-day operations.",
    capabilities: ["Cloud security", "Risk reduction"],
    icon: ShieldCheck,
  },
];

const businessProcessServices: readonly Service[] = [
  {
    title: "Contact Center",
    href: "/services/contact-center",
    description:
      "Support customer conversations with thoughtful processes and reliable service operations.",
    capabilities: ["Customer support", "Service operations"],
    icon: Headphones,
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Connect strategy, content, and digital channels to build stronger relationships with your audience.",
    capabilities: ["Digital campaigns", "Brand visibility"],
    icon: Megaphone,
  },
  {
    title: "Staff Augmentation",
    href: "/services/staff-augmentation",
    description:
      "Add specialized capacity to existing teams while keeping collaboration and delivery aligned.",
    capabilities: ["Specialist talent", "Team extension"],
    icon: Users,
  },
  {
    title: "Finance & Accounting",
    href: "/services/finance-accounting",
    description:
      "Create more organized financial workflows through bookkeeping, reporting, and operational support.",
    capabilities: ["Bookkeeping", "Financial reporting"],
    icon: Wallet,
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

function SectionHeading({
  label,
  number,
  title,
  description,
  count,
}: {
  label: string;
  number: string;
  title: string;
  description: string;
  count: number;
}) {
  return (
    <div className="mb-11 flex flex-col justify-between gap-7 lg:mb-14 lg:flex-row lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DECBEA] bg-[#F7F0FB] text-[10px] font-bold text-[#75449B]">
            {number}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
            {label}
          </span>
        </div>
        <h2 className="max-w-[740px] text-[clamp(2.2rem,4vw,3.65rem)] font-semibold leading-[1.09] tracking-[-0.055em] text-[#30213D]">
          {title}
        </h2>
        <p className="mt-5 max-w-[650px] text-[15px] leading-[1.9] text-[#6D6275]">
          {description}
        </p>
      </div>
      <p className="shrink-0 border-b border-[#DCCCE7] pb-3 text-[12px] font-semibold text-[#75449B] lg:mb-1">
        {String(count).padStart(2, "0")} services
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  onInquire,
}: {
  service: Service;
  index: number;
  onInquire: (title: string) => void;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: Math.min(index % 3, 2) * 0.07, ease: easing }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#EAE1F0] bg-white p-6 shadow-[0_12px_40px_rgba(61,31,84,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4B8E6] hover:shadow-[0_22px_60px_rgba(61,31,84,0.095)] sm:p-7"
    >
      <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#F6F0FA] opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-[#E9DDF0] bg-[#F8F3FB] text-[#75449B]">
          <Icon size={24} strokeWidth={1.55} aria-hidden="true" />
        </div>
        <span className="text-[11px] font-medium tabular-nums text-[#B5A3BF]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-7 min-h-[54px] text-[20px] font-semibold leading-[1.35] tracking-[-0.035em] text-[#30213D] sm:text-[21px]">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-[13px] leading-[1.85] text-[#716676]">
        {service.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {service.capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-[#EFE6F4] bg-[#FBF9FD] px-3 py-1.5 text-[10px] font-medium text-[#735C81]"
          >
            {capability}
          </span>
        ))}
      </div>

      <div className="relative mt-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-[#EEE8F1] pt-5">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-[12px] font-bold text-[#75449B] transition-colors hover:text-[#4F286E] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
        >
          Explore service
          <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <button
          type="button"
          onClick={() => onInquire(service.title)}
          className="text-[11px] font-semibold text-[#807489] underline decoration-[#C9B7D7] underline-offset-4 transition-colors hover:text-[#75449B] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
        >
          Inquire
        </button>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const totalServices = technologyServices.length + businessProcessServices.length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#30213D]">
      {/* HERO — soft lavender editorial treatment. Navbar is not modified. */}
      <section className="relative overflow-hidden border-b border-[#EAE1F0] bg-gradient-to-br from-[#FBF9FE] via-white to-[#F2EAF9] pb-20 pt-32 sm:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#DEC9EB]/35 blur-[100px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#F2E2FA]/50 blur-[80px]" />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E3D3EE] bg-white/85 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#9464B4]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                  Cloudlem Capabilities
                </span>
              </div>

              <h1 className="max-w-[790px] text-[clamp(3rem,5.25vw,5.7rem)] font-semibold leading-[1.045] tracking-[-0.07em] text-[#30213D]">
                Expertise that moves
                <span className="block text-[#75449B]">business forward.</span>
              </h1>
              <p className="mt-7 max-w-[620px] text-[16px] leading-[1.9] text-[#6F6278] sm:text-[17px]">
                From technology transformation to everyday business operations, we bring together practical services that help organizations build, improve, and grow.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#technology"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#75449B] px-6 text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(117,68,155,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#623682] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Explore our services
                  <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedService("Custom Engagement")}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#D8C6E5] bg-white px-6 text-[12px] font-bold text-[#604177] transition-colors hover:border-[#B78DD0] hover:bg-[#F7F1FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
                >
                  Talk to our team
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-12 flex flex-wrap gap-7 border-t border-[#E5D8EC] pt-6 sm:gap-12">
                <div>
                  <p className="text-[29px] font-semibold leading-none tracking-[-0.05em] text-[#30213D]">{totalServices.toString().padStart(2, "0")}</p>
                  <p className="mt-2 text-[11px] text-[#796B82]">Specialized services</p>
                </div>
                <div>
                  <p className="text-[29px] font-semibold leading-none tracking-[-0.05em] text-[#30213D]">13</p>
                  <p className="mt-2 text-[11px] text-[#796B82]">Technology services</p>
                </div>
                <div>
                  <p className="text-[29px] font-semibold leading-none tracking-[-0.05em] text-[#30213D]">04</p>
                  <p className="mt-2 text-[11px] text-[#796B82]">Business process services</p>
                </div>
              </div>
            </motion.div>

            {/* Existing local image, originally used by this Services page. */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easing }}
              className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
            >
              <div className="absolute -inset-4 rounded-[34px] border border-[#DCC9E9]/70 sm:-inset-6" />
              <div className="relative aspect-[4/4.35] overflow-hidden rounded-[26px] bg-[#31243B] shadow-[0_30px_85px_rgba(47,25,68,0.16)] sm:aspect-[5/5.25]">
                <Image
                  src="/images/backgrounds/section-2-2.png"
                  alt="Cloud infrastructure and modern digital operations"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23172E]/90 via-[#23172E]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-sm">
                    <Check size={23} aria-hidden="true" />
                  </div>
                  <p className="max-w-[360px] text-[23px] font-semibold leading-[1.25] tracking-[-0.045em] text-white sm:text-[28px]">
                    One connected approach. Multiple ways to help.
                  </p>
                  <p className="mt-3 text-[12px] leading-6 text-white/75">
                    Discover a service or start with a conversation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY NAVIGATION */}
      <nav aria-label="Service categories" className="border-b border-[#ECE4F0] bg-white">
        <div className="container-systems flex flex-wrap items-center justify-between gap-5 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#8B7C94]">
            Explore by category
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-7">
            <a href="#technology" className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#5E446E] transition-colors hover:text-[#75449B]">
              Technology Services <ChevronRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#business-process" className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#5E446E] transition-colors hover:text-[#75449B]">
              Business Process Services <ChevronRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* TECHNOLOGY SERVICES — 1 featured + 12 cards */}
      <section id="technology" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <SectionHeading
            number="01"
            label="Digital & Technology"
            title="Technology built around your ambitions."
            description="From strategy and modern applications to cloud, data, AI, and security — explore the expertise to make your technology work harder for your business."
            count={technologyServices.length}
          />

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: easing }}
            className="mb-6 overflow-hidden rounded-[26px] border border-[#E5D9ED] bg-[#F7F1FB] lg:mb-7"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
                <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#DFCCE9] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#75449B]">
                  <Compass size={14} aria-hidden="true" /> Featured capability
                </div>
                <h3 className="max-w-[620px] text-[clamp(2rem,3.25vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30213D]">
                  Digital Consulting & Strategy
                </h3>
                <p className="mt-5 max-w-[545px] text-[15px] leading-[1.85] text-[#6D6175]">
                  {technologyServices[0].description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {technologyServices[0].capabilities.map((capability) => (
                    <span key={capability} className="rounded-full border border-[#E3D2EC] bg-white/85 px-4 py-2 text-[11px] font-medium text-[#6A4C7B]">
                      {capability}
                    </span>
                  ))}
                </div>
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href={technologyServices[0].href}
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#75449B] px-6 text-[12px] font-bold text-white transition-colors hover:bg-[#613581]"
                  >
                    Explore service
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedService(technologyServices[0].title)}
                    className="text-[12px] font-semibold text-[#75449B] underline decoration-[#C7A9DC] underline-offset-4 hover:text-[#4A2864]"
                  >
                    Discuss this service
                  </button>
                </div>
              </div>
              <div className="relative min-h-[270px] bg-[#D3BEE3] lg:min-h-[410px]">
                <Image
                  src="/images/services/staff-augmentation.png"
                  alt="Digital strategy and connected technology systems"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3B234B]/10 to-[#3B234B]/35" />
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {technologyServices.slice(1).map((service, index) => (
              <ServiceCard
                key={service.href}
                service={service}
                index={index + 1}
                onInquire={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS PROCESS SERVICES */}
      <section id="business-process" className="scroll-mt-24 border-y border-[#EEE5F3] bg-[#FBF9FE] py-20 sm:py-24 lg:py-28">
        <div className="container-systems">
          <SectionHeading
            number="02"
            label="Business Process Services"
            title="People and processes, working better."
            description="Business growth needs more than technology. Our business process capabilities support the teams and operations behind the work."
            count={businessProcessServices.length}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
            {businessProcessServices.map((service, index) => (
              <ServiceCard
                key={service.href}
                service={service}
                index={index}
                onInquire={setSelectedService}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#EAE0F0] bg-white px-6 py-5">
            <p className="text-[13px] leading-6 text-[#675A71]">
              Looking specifically for bookkeeping support?
            </p>
            <Link href="/bookkeeping" className="group inline-flex items-center gap-2 text-[12px] font-bold text-[#75449B] hover:text-[#4A2864]">
              Explore Bookkeeping
              <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS — restrained editorial strip */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-systems">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                The Cloudlem Approach
              </p>
              <h2 className="max-w-[520px] text-[clamp(2.1rem,3.4vw,3.2rem)] font-semibold leading-[1.13] tracking-[-0.055em] text-[#30213D]">
                The right solution starts with the right conversation.
              </h2>
              <p className="mt-5 max-w-[520px] text-[14px] leading-[1.85] text-[#716677]">
                Whether your challenge sits in technology or operations, we focus on understanding what matters before defining the work.
              </p>
            </div>
            <div className="border-t border-[#EAE0EF]">
              {[
                ["01", "Understand the challenge", "Discuss your goals, current environment, and practical constraints."],
                ["02", "Shape the approach", "Identify the right capabilities and agree on clear priorities."],
                ["03", "Move into delivery", "Turn the agreed plan into actionable work and ongoing improvements."],
              ].map(([number, title, description]) => (
                <div key={number} className="grid gap-3 border-b border-[#EAE0EF] py-6 sm:grid-cols-[45px_1fr] sm:gap-5">
                  <span className="pt-1 text-[11px] font-bold text-[#956AAE]">{number}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.025em] text-[#30213D]">{title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.75] text-[#75697C]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#ECE3F2] bg-[#F7F1FB] py-20 sm:py-24">
        <div className="container-systems">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easing }}
            className="relative overflow-hidden rounded-[28px] border border-[#E3D3ED] bg-white px-7 py-14 text-center shadow-[0_20px_70px_rgba(75,34,101,0.055)] sm:px-12 sm:py-20"
          >
            <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full bg-[#EEDCF8]/65 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-[#E9D6F7]/60 blur-[70px]" />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                Let’s Work Together
              </p>
              <h2 className="mx-auto mt-5 max-w-[800px] text-[clamp(2.4rem,4.5vw,4.3rem)] font-semibold leading-[1.08] tracking-[-0.065em] text-[#30213D]">
                Have a challenge in mind?
                <span className="block text-[#75449B]">Let’s find a way forward.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[580px] text-[15px] leading-[1.85] text-[#73677B]">
                Tell us what you’re looking to improve. We’ll help you explore the services that fit your goals.
              </p>
              <button
                type="button"
                onClick={() => setSelectedService("Custom Engagement")}
                className="group mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-[#75449B] px-7 text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(117,68,155,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#623682] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Start a conversation
                <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Existing inquiry backend and modal remain unchanged. */}
      <ServiceInquiryModal
        serviceTitle={selectedService ?? ""}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
