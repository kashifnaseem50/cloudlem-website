
"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import ContactFormSimple from "../components/contact/ContactFormSimple";

// Existing Cloudlem social links preserved.
const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/cloudlem",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/cloudlemoffical/",
  },
  {
    label: "X / Twitter",
    icon: Twitter,
    href: "https://x.com/CloudlemOffical",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/kashifnaseem50",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@cloudlem",
  },
];

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? false
    : { opacity: 0, y: 22 };

  const fadeLeft = reduceMotion
    ? false
    : { opacity: 0, x: -18 };

  const fadeRight = reduceMotion
    ? false
    : { opacity: 0, x: 18 };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9FE] text-[#281B35]">

      {/* CONTACT HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#E9E0F0] bg-[linear-gradient(120deg,#FFFFFF_0%,#FBF8FE_55%,#F1EAF9_100%)] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-0 -z-10 h-[440px] w-[440px] rounded-full bg-[#DED0EF]/45 blur-[95px] sm:h-[550px] sm:w-[550px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-[#EEE4F8]/80 blur-[90px]"
        />

        <div className="container-systems relative z-10">
          <div className="grid items-end gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

            {/* HERO HEADING */}
            <motion.div
              initial={fadeUp}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E2D3EF] bg-white/85 px-4 py-2 shadow-[0_8px_25px_rgba(80,45,108,0.04)]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#75449B]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#75449B]">
                  Get in touch
                </span>
              </div>

              <h1 className="mt-7 max-w-[770px] text-[clamp(2.85rem,5.8vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[#281B35]">
                Let&apos;s start a
                <span className="block text-[#75449B]">
                  conversation.
                </span>
              </h1>

              <p className="mt-7 max-w-[600px] text-[14px] leading-[1.9] text-[#655A70] sm:text-[16px]">
                Have a project in mind or a business challenge
                to solve? Connect with Cloudlem to explore
                practical cloud, AI, DevOps, digital, and
                business solutions shaped around your goals.
              </p>

              <a
                href="#contact-details"
                className="group mt-9 inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.18)] transition-[background-color,box-shadow,transform] hover:bg-[#633784] hover:shadow-[0_15px_30px_rgba(117,68,155,0.24)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Contact our team

                <ArrowDown
                  size={17}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* HERO INFORMATION CARD */}
            <motion.div
              initial={fadeUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...revealTransition,
                delay: 0.12,
              }}
              className="relative max-w-[550px] lg:ml-auto lg:w-full"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E7DCEE] bg-white/80 p-6 shadow-[0_20px_65px_rgba(58,35,84,0.07)] backdrop-blur-sm sm:p-8">

                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFE5F8] text-[#75449B]">
                    <MessageSquare
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B69A4]">
                    Start with your ideas
                  </span>
                </div>

                <h2 className="mt-6 text-[23px] font-semibold leading-tight tracking-[-0.045em] text-[#281B35] sm:text-[28px]">
                  Tell us what you&apos;re working on.
                </h2>

                <p className="mt-4 text-[13px] leading-7 text-[#6A6073]">
                  Whether you need a new digital platform,
                  cloud expertise, automation, or bookkeeping
                  support, sharing your requirements is
                  the first step.
                </p>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-[#EDE6F2] pt-6">
                  {[
                    "Cloud & DevOps",
                    "AI & Automation",
                    "Digital Solutions",
                    "Bookkeeping",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E4D7EF] bg-[#F8F4FC] px-3 py-2 text-[11px] font-medium text-[#65447F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION AND EXISTING FORM */}
      <section
        id="contact-details"
        className="scroll-mt-24 bg-[#FBF9FE] py-16 sm:py-20 lg:py-24"
      >
        <div className="container-systems">
          <div className="grid items-start gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 xl:gap-20">

            {/* LEFT CONTACT INFORMATION */}
            <motion.div
              initial={fadeLeft}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={revealTransition}
              className="min-w-0"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                Connect with Cloudlem
              </p>

              <h2 className="mt-4 max-w-[510px] text-[clamp(2rem,3.7vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.055em]">
                Your next project{" "}
                <span className="text-[#75449B]">
                  starts here.
                </span>
              </h2>

              <p className="mt-5 max-w-[490px] text-[13px] leading-[1.9] text-[#716779] sm:text-[14px]">
                Whether you&apos;re planning a cloud
                migration, improving infrastructure,
                building a digital product, or exploring
                automation, we&apos;re ready to hear
                about your goals.
              </p>

              {/* CONTACT DETAILS CARD */}
              <div className="mt-9 overflow-hidden rounded-[22px] border border-[#E7DDF0] bg-white shadow-[0_12px_40px_rgba(67,40,92,0.035)]">

                {/* EMAIL */}
                <div className="flex items-start gap-4 border-b border-[#EEE7F3] p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E9F9] text-[#75449B]">
                    <Mail
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#916DAA]">
                      Email address
                    </p>

                    <a
                      href="mailto:info@cloudlem.com"
                      className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-[15px] font-semibold text-[#30233D] transition-colors hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#75449B]"
                    >
                      info@cloudlem.com

                      <ArrowUpRight
                        size={15}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                    </a>

                    <p className="mt-1.5 text-[12px] leading-6 text-[#85798C]">
                      Send us your questions or project details.
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4 border-b border-[#EEE7F3] p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E9F9] text-[#75449B]">
                    <Phone
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#916DAA]">
                      Phone number
                    </p>

                    <a
                      href="tel:+923554502615"
                      className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[#30233D] transition-colors hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#75449B]"
                    >
                      +92 355 4502615

                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    </a>

                    <p className="mt-1.5 text-[12px] leading-6 text-[#85798C]">
                      Reach out to discuss your requirements.
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E9F9] text-[#75449B]">
                    <MapPin
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#916DAA]">
                      Our location
                    </p>

                    <p className="mt-2 text-[15px] font-semibold text-[#30233D]">
                      Gilgit, Pakistan
                    </p>

                    <p className="mt-1.5 text-[12px] leading-6 text-[#85798C]">
                      Cloudlem&apos;s listed business location.
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-9">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                  Follow & connect
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map(
                    ({ label, icon: Icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Cloudlem on ${label}`}
                        title={label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2D6EC] bg-white text-[#715985] transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-[#C6A7DE] hover:bg-[#F2E9F9] hover:text-[#75449B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#75449B]"
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* SUPPORTING NOTE */}
              <div className="mt-9 flex items-start gap-3 rounded-[18px] border border-[#E8DCF1] bg-[#F3EDF9] p-5 sm:p-6">
                <MessageSquare
                  size={19}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#75449B]"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[13px] font-semibold text-[#352243]">
                    Let&apos;s discuss your ideas.
                  </p>

                  <p className="mt-2 text-[12px] leading-6 text-[#71627B]">
                    Tell us about the work you have in mind.
                    Sharing your objectives and requirements
                    helps us understand how we can assist.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* EXISTING SUPABASE-CONNECTED FORM */}
            <motion.div
              initial={fadeRight}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                ...revealTransition,
                delay: 0.1,
              }}
              className="min-w-0"
            >
              <div className="rounded-[26px] border border-[#E5D9EF] bg-white p-4 shadow-[0_20px_65px_rgba(69,42,91,0.075)] sm:p-7 lg:p-8">
                <ContactFormSimple />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL INFORMATION SECTION */}
      <section className="border-t border-[#E9DEF1] bg-[linear-gradient(115deg,#F2EAF9_0%,#FBF8FE_65%,#FFFFFF_100%)] py-16 lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={fadeUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#75449B]">
                Working together
              </p>

              <h2 className="mt-4 max-w-[650px] text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#2D2038]">
                Every great solution{" "}
                <span className="text-[#75449B]">
                  begins with understanding.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[540px] text-[13px] leading-[1.9] text-[#6F6478] sm:text-[14px]">
                We believe strong partnerships begin
                with clear communication and a shared
                understanding of business challenges.
                Our team focuses on practical technology
                decisions, thoughtful execution, and
                sustainable outcomes.
              </p>

              <a
                href="#contact-details"
                className="group mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#B78DCE] pb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#75449B] transition-colors hover:text-[#563175] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Share your requirements

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
