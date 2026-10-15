
"use client";

import { motion } from "framer-motion";

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

// EXISTING CLOUDLEM SOCIAL LINKS
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
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D0C]">

      {/* =====================================
          CONTACT HERO
      ===================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#0B0D0C] pb-16 pt-32 text-white lg:pb-20 lg:pt-36">
        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* HERO HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#C97A4A]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C97A4A]">
                  Get In Touch
                </p>
              </div>

              <h1 className="max-w-[760px] text-[3.1rem] font-semibold leading-[0.97] tracking-[-0.06em] text-[#F3F1EC] sm:text-[4.3rem] lg:text-[5rem]">
                Let&apos;s Start a
                <span className="block text-[#D8B08B]">
                  Conversation.
                </span>
              </h1>
            </motion.div>

            {/* HERO DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...revealTransition,
                delay: 0.12,
              }}
            >
              <p className="max-w-[460px] text-[13px] leading-7 text-white/65">
                Have a project in mind or a business
                challenge to solve? Connect with
                Cloudlem to explore practical cloud,
                AI, DevOps, and digital solutions.
              </p>

              <a
                href="#contact-details"
                className="group mt-7 inline-flex min-h-12 items-center gap-5 border border-[#C97A4A]/45 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D8B08B] transition-colors hover:border-[#D8B08B] hover:bg-[#C97A4A]/[0.06]"
              >
                Contact Our Team

                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* BACKGROUND TYPOGRAPHY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-35px] overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[10rem] lg:text-[13rem]">
            CONTACT
          </p>
        </div>
      </section>

      {/* =====================================
          CONTACT INFORMATION + FORM
      ===================================== */}
      <section
        id="contact-details"
        className="scroll-mt-24 bg-[#0B0D0C] py-16 text-white lg:py-24"
      >
        <div className="container-systems">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* =================================
                LEFT COLUMN
            ================================= */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={revealTransition}
            >
              {/* SECTION INTRO */}
              <div className="mb-10">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C97A4A]">
                  Connect With Cloudlem
                </p>

                <h2 className="max-w-[500px] text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#F3F1EC] sm:text-[42px]">
                  Your next project
                  <span className="block text-[#D8B08B]">
                    starts here.
                  </span>
                </h2>

                <p className="mt-6 max-w-[465px] text-[12px] leading-7 text-white/55">
                  Whether you&apos;re planning a cloud
                  migration, improving infrastructure,
                  building a digital product, or exploring
                  automation, we&apos;re ready to hear
                  about your goals.
                </p>
              </div>

              {/* CONTACT METHODS */}
              <div className="border-t border-white/[0.10]">

                {/* EMAIL */}
                <div className="group flex items-start gap-5 border-b border-white/[0.10] py-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C97A4A]/30 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                    <Mail
                      size={20}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97A4A]">
                      Email Address
                    </p>

                    <a
                      href="mailto:info@cloudlem.com"
                      className="inline-flex max-w-full items-center gap-2 break-all text-[15px] font-medium text-[#F3F1EC] transition-colors hover:text-[#D8B08B]"
                    >
                      info@cloudlem.com

                      <ArrowUpRight
                        size={15}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                    </a>

                    <p className="mt-2 text-[11px] text-white/40">
                      Send us your questions or project details.
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="group flex items-start gap-5 border-b border-white/[0.10] py-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C97A4A]/30 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                    <Phone
                      size={20}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97A4A]">
                      Phone Number
                    </p>

                    <a
                      href="tel:+923554502615"
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[#F3F1EC] transition-colors hover:text-[#D8B08B]"
                    >
                      +92 355 4502615

                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    </a>

                    <p className="mt-2 text-[11px] text-white/40">
                      Reach out to discuss your requirements.
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5 border-b border-white/[0.10] py-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C97A4A]/30 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                    <MapPin
                      size={20}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97A4A]">
                      Our Location
                    </p>

                    <p className="text-[15px] font-medium text-[#F3F1EC]">
                      Gilgit, Pakistan
                    </p>

                    <p className="mt-2 text-[11px] text-white/40">
                      Cloudlem&apos;s listed business location.
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-10">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C97A4A]">
                  Follow & Connect
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Cloudlem on ${item.label}`}
                        title={item.label}
                        className="group flex h-11 w-11 items-center justify-center border border-white/[0.13] bg-white/[0.03] text-white/60 transition-colors duration-200 hover:border-[#C97A4A]/50 hover:bg-[#C97A4A]/[0.07] hover:text-[#D8B08B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8B08B]"
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* SUPPORTING NOTE */}
              <div className="mt-12 border-l-2 border-[#C97A4A] bg-white/[0.025] px-5 py-5">
                <div className="flex items-start gap-3">
                  <MessageSquare
                    size={18}
                    strokeWidth={1.6}
                    className="mt-0.5 shrink-0 text-[#D8B08B]"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-[12px] font-semibold text-[#F3F1EC]">
                      Let&apos;s discuss your ideas.
                    </p>

                    <p className="mt-2 text-[11px] leading-6 text-white/50">
                      Tell us about the work you have
                      in mind. Sharing your objectives
                      and requirements helps us
                      understand how we can assist.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================
                RIGHT COLUMN - CONTACT FORM
            ================================= */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                ...revealTransition,
                delay: 0.1,
              }}
              className="min-w-0"
            >
              {/* EXISTING SUPABASE-CONNECTED FORM */}
              <ContactFormSimple />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL INFORMATION SECTION
      ===================================== */}
      <section className="border-t border-white/[0.08] bg-[#151515] py-16 text-white lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20"
          >

            {/* HEADING */}
            <div>
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C97A4A]">
                Working Together
              </p>

              <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#F3F1EC] sm:text-[40px]">
                Every great solution
                <span className="block text-[#D8B08B]">
                  begins with understanding.
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p className="max-w-[530px] text-[12px] leading-7 text-white/60">
                We believe strong partnerships begin
                with clear communication and a shared
                understanding of business challenges.
                Our team focuses on practical
                technology decisions, thoughtful
                execution, and sustainable outcomes.
              </p>

              <a
                href="#contact-details"
                className="group mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D8B08B] transition-colors hover:text-[#F3F1EC]"
              >
                Share Your Requirements

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
