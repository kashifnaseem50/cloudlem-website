"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Lightbulb,
  Users,
} from "lucide-react";

import JobCard from "../components/careers/JobCard";
import JobApplicationModalSimple from "../components/careers/JobApplicationModalSimple";

// These are the positions from the existing page.
// Confirm that vacancies are genuinely open before publishing in production.
const jobs = [
  {
    title: "Senior DevOps Engineer",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "We're looking for an experienced DevOps Engineer to design and implement CI/CD pipelines, infrastructure as code, and cloud automation solutions for our clients.",
    tags: ["AWS", "Kubernetes", "Terraform", "Docker", "CI/CD"],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Join our team as a Cloud Solutions Architect to design and implement cloud infrastructure solutions for enterprise clients across multiple cloud platforms.",
    tags: ["AWS", "Azure", "GCP", "Architecture", "Solutions"],
  },
  {
    title: "AI/ML Engineer",
    location: "Gilgit, Pakistan / Remote",
    type: "Full-time",
    level: "Mid-level",
    description:
      "We're seeking an AI/ML Engineer to develop and deploy machine learning models and build MLOps pipelines for our clients across various industries.",
    tags: ["Python", "TensorFlow", "MLOps", "AWS SageMaker", "Data Engineering"],
  },
];

const culture = [
  {
    number: "01",
    title: "Engineering & Innovation",
    description:
      "We value practical problem-solving, technical curiosity, and the thoughtful application of modern technologies.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Our approach emphasizes learning, sharing knowledge, and developing the skills needed for evolving technology challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Collaborative Thinking",
    description:
      "We believe strong outcomes come from clear communication, shared responsibility, and working together.",
    icon: Users,
  },
];

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const initialUp = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9FE] text-[#30213D]">
      {/* HERO — soft lavender and white */}
      <section className="relative isolate overflow-hidden border-b border-[#EAE0F2] bg-[linear-gradient(115deg,#FFFFFF_0%,#FBF8FE_50%,#F0E8F9_100%)] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[460px] w-[460px] rounded-full bg-[#DAC9ED]/45 blur-[90px] sm:h-[600px] sm:w-[600px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[350px] w-[350px] rounded-full bg-[#EADCF7]/70 blur-[90px]" />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div initial={initialUp} animate={{ opacity: 1, y: 0 }} transition={revealTransition}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E3D5EE] bg-white/80 px-4 py-2 shadow-[0_8px_28px_rgba(78,45,111,0.04)]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#75449B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                  Careers at Cloudlem
                </span>
              </div>

              <h1 className="mt-7 max-w-[850px] text-[clamp(3rem,6vw,5.65rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[#30213D]">
                Build your <span className="block text-[#30213D]">future</span> with us.
              </h1>

              <p className="mt-7 max-w-[570px] text-[14px] leading-[1.9] text-[#70647A] sm:text-[16px]">
                Explore opportunities in cloud engineering, DevOps, AI, and software development.
                Bring your curiosity, technical expertise, and passion for solving meaningful challenges.
              </p>

              <a
                href="#opportunities"
                className="group mt-9 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_14px_30px_rgba(117,68,155,0.18)] transition-[background-color,box-shadow,transform] hover:bg-[#613680] hover:shadow-[0_17px_34px_rgba(117,68,155,0.24)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Explore positions
                <ArrowDown size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={initialUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
            >
              <div className="rounded-[26px] border border-[#E5D8EE] bg-white/85 p-6 shadow-[0_22px_70px_rgba(64,35,91,0.08)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E7F8] text-[#75449B]">
                    <BriefcaseBusiness size={23} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9478AB]">Discover opportunities</span>
                </div>
                <h2 className="mt-7 text-[25px] font-semibold leading-tight tracking-[-0.045em] text-[#30213D] sm:text-[30px]">
                  Meaningful work. Thoughtful engineering.
                </h2>
                <p className="mt-4 text-[13px] leading-7 text-[#73667D]">
                  Our work brings together cloud infrastructure, automation, intelligent systems, and digital engineering.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[#ECE4F3] pt-6">
                  {["Cloud & DevOps", "AI Engineering", "Collaboration", "Continuous Learning"].map((item) => (
                    <div key={item} className="rounded-xl border border-[#E9E0F1] bg-[#F9F5FD] px-3 py-3 text-center text-[11px] font-medium text-[#674D7F]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-10 overflow-hidden">
          <p className="select-none whitespace-nowrap text-center text-[7rem] font-semibold leading-none tracking-[-0.08em] text-[#75449B]/[0.035] sm:text-[10rem] lg:text-[13rem]">
            CAREERS
          </p>
        </div>
      </section>

      {/* WHY CLOUDLEM */}
      <section className="border-b border-[#ECE3F3] bg-white py-16 lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Our approach</p>
              <h2 className="mt-5 max-w-[550px] text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30213D]">
                Work that <span className="text-[#75449B]">makes an impact.</span>
              </h2>
              <div aria-hidden="true" className="mt-7 h-[3px] w-12 rounded-full bg-[#A878C7]" />
            </div>
            <div>
              <p className="max-w-[590px] text-[15px] font-medium leading-[1.85] text-[#3F3250]">
                At Cloudlem, we believe meaningful technology work starts with curiosity,
                collaboration, and a commitment to solving real problems.
              </p>
              <p className="mt-5 max-w-[590px] text-[13px] leading-[1.9] text-[#72667C] sm:text-[14px]">
                Our work spans cloud infrastructure, automation, intelligent systems, and digital engineering.
                We value thoughtful solutions, technical excellence, and continuous improvement.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#EDE5F3] pt-6">
                <Globe2 size={18} strokeWidth={1.6} className="shrink-0 text-[#75449B]" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#75449B]">Engineering. Collaboration. Growth.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-[#F6F1FB] py-16 lg:py-24">
        <div className="container-systems">
          <motion.div initial={initialUp} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={revealTransition} className="mb-11">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">What we value</p>
            <h2 className="mt-4 max-w-[770px] text-[clamp(2rem,3.7vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30213D]">
              A mindset for <span className="text-[#75449B]">better engineering.</span>
            </h2>
            <p className="mt-5 max-w-[570px] text-[13px] leading-[1.9] text-[#776A80] sm:text-[14px]">
              The principles that influence how we work, solve problems, and grow together.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {culture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.number}
                  initial={initialUp}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ ...revealTransition, delay: index * 0.07 }}
                  className="group flex h-full flex-col rounded-[22px] border border-[#E6DCEE] bg-white p-7 shadow-[0_12px_35px_rgba(75,43,105,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[#CCB4DF] hover:shadow-[0_22px_50px_rgba(75,43,105,0.09)] motion-safe:hover:-translate-y-1 sm:p-8"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8DDF2] bg-[#F1E9F9] text-[#75449B]">
                      <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <span className="pt-2 text-[11px] font-bold text-[#A78DB7]">{item.number}</span>
                  </div>
                  <h3 className="text-[21px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#30213D]">{item.title}</h3>
                  <div aria-hidden="true" className="mt-6 h-[3px] w-10 rounded-full bg-[#B08BC9] transition-[width] duration-300 group-hover:w-14" />
                  <p className="mt-5 text-[13px] leading-[1.85] text-[#74677E]">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOB OPPORTUNITIES: original JobCard and modal preserved */}
      <section id="opportunities" className="scroll-mt-24 bg-[#FBF9FE] py-16 lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="mb-11 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Career opportunities</p>
              <h2 className="mt-4 max-w-[580px] text-[clamp(2rem,3.7vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30213D]">
                Find your <span className="text-[#75449B]">next opportunity.</span>
              </h2>
            </div>
            <p className="max-w-[480px] text-[13px] leading-[1.9] text-[#74677E] sm:text-[14px] lg:justify-self-end">
              Explore roles across infrastructure, cloud architecture, and AI engineering.
              Select a position to review its requirements and submit an application.
            </p>
          </motion.div>

          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E9DEF1] bg-white px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFE5F7] text-[#75449B]">
                <BriefcaseBusiness size={18} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-semibold text-[#30213D]">Positions</span>
            </div>
            <span className="rounded-full border border-[#E6D8EF] bg-[#F8F2FC] px-3 py-1.5 text-[11px] font-semibold text-[#75449B]">
              {jobs.length} Listed Roles
            </span>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-5"
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {jobs.map((job) => (
              <motion.div key={job.title} variants={reduceMotion ? undefined : itemVariants}>
                <JobCard {...job} onApply={() => setSelectedJob(job.title)} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DCEF] pt-6">
            <p className="text-[12px] leading-6 text-[#776B80]">Explore opportunities to contribute to meaningful technology projects.</p>
            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#75449B]">
              Cloudlem Careers <ArrowRight size={15} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#E8DDF1] bg-[linear-gradient(115deg,#F0E7F9_0%,#F9F5FD_60%,#FFFFFF_100%)] py-16 lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">Connect with Cloudlem</p>
              <h2 className="mt-4 max-w-[730px] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#30213D]">
                The next chapter <span className="text-[#75449B]">starts with a conversation.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-[400px] text-[13px] leading-[1.9] text-[#71647A] sm:text-[14px]">
                Interested in learning more about Cloudlem? Get in touch with our team to start a conversation.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-[50px] items-center justify-between gap-5 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.17)] transition-[background-color,box-shadow] hover:bg-[#623682] hover:shadow-[0_17px_32px_rgba(117,68,155,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Contact Cloudlem
                <ArrowRight size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXISTING JOB APPLICATION MODAL — unchanged behavior */}
      <JobApplicationModalSimple
        isOpen={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob ?? ""}
      />
    </main>
  );
}
