"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, BookOpen, FileText, Sparkles } from "lucide-react";

import BlogCard from "./BlogCard";

// Keep this shape aligned with the Supabase posts returned by the blog loader.
type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
};

type BlogListingProps = {
  posts: BlogPost[];
};

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

function formatDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogListing({ posts }: BlogListingProps) {
  const reduceMotion = useReducedMotion();
  const initialUp = reduceMotion ? false : { opacity: 0, y: 22 };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9FE] text-[#30213D]">
      {/* HERO — LIGHT, EDITORIAL, AND CONSISTENT WITH CLOUDLEM */}
      <section className="relative isolate overflow-hidden border-b border-[#E9E0F0] bg-[linear-gradient(115deg,#FFFFFF_0%,#FBF8FE_54%,#F2EAF9_100%)] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[460px] w-[460px] rounded-full bg-[#E8D8F4]/55 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-[360px] w-[360px] rounded-full bg-[#F0E7FA] blur-[85px]"
        />

        <div className="container-systems relative z-10">
          <div className="grid items-center gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={initialUp}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E3D3EE] bg-white/90 px-4 py-2 shadow-[0_8px_25px_rgba(76,45,110,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#75449B]" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                  Insights &amp; Resources
                </span>
              </div>

              <h1 className="mt-7 max-w-[780px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#30213D]">
                Cloudlem
                <span className="block text-[#75449B]">Blog &amp; Insights.</span>
              </h1>

              <p className="mt-7 max-w-[590px] text-[14px] leading-[1.9] text-[#70647A] sm:text-[16px]">
                Explore perspectives on cloud technology, DevOps, artificial
                intelligence, and business growth. Practical ideas to support
                better technology decisions.
              </p>

              <a
                href="#latest-articles"
                className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(117,68,155,0.18)] transition-[background-color,box-shadow,transform] hover:bg-[#633784] hover:shadow-[0_15px_30px_rgba(117,68,155,0.24)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Explore articles
                <ArrowDown size={17} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={initialUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.12 }}
              className="max-w-[510px] lg:ml-auto lg:w-full"
            >
              <div className="relative overflow-hidden rounded-[26px] border border-[#E7DCEE] bg-white/85 p-7 shadow-[0_20px_65px_rgba(58,35,84,0.07)] backdrop-blur-sm sm:p-9">
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7D9F0] bg-[#F3EBFA] text-[#75449B]">
                  <BookOpen size={23} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E6BA7]">
                  The Cloudlem Journal
                </p>
                <h2 className="mt-3 text-[25px] font-semibold leading-[1.2] tracking-[-0.045em] text-[#30213D] sm:text-[30px]">
                  Ideas worth exploring.
                </h2>
                <p className="mt-4 text-[13px] leading-[1.85] text-[#72677C]">
                  Insights and technical perspectives on the practices shaping
                  modern businesses—from infrastructure and security to AI and
                  digital innovation.
                </p>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-[#EEE6F3] pt-6">
                  {[
                    "Cloud & DevOps",
                    "Artificial Intelligence",
                    "Cybersecurity",
                    "Digital Innovation",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[#E6DAEF] bg-[#F9F5FC] px-3 py-2 text-[11px] font-medium text-[#684B7D]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      <section className="border-b border-[#EEE6F3] bg-white py-16 lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#B58ACA]" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                  The Cloudlem Journal
                </p>
              </div>
              <h2 className="max-w-[590px] text-[clamp(2rem,3.7vw,3rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#30213D]">
                Knowledge that inspires <span className="text-[#75449B]">progress.</span>
              </h2>
            </div>
            <p className="max-w-[510px] text-[13px] leading-[1.9] text-[#71667B] sm:text-[14px] lg:justify-self-end">
              Discover articles, insights, and technical perspectives from
              Cloudlem on the technologies and practices shaping modern
              businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUPABASE PUBLISHED ARTICLES */}
      <section id="latest-articles" className="scroll-mt-24 bg-[#FBF9FE] py-16 lg:py-24">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="mb-10 flex flex-col justify-between gap-6 border-b border-[#E7DBEE] pb-7 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#75449B]">
                Explore Our Articles
              </p>
              <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#30213D]">
                Latest Articles
              </h2>
            </div>
            <div className="inline-flex self-start items-center gap-2.5 rounded-full border border-[#E3D5EE] bg-white px-4 py-2.5 text-[#75449B] sm:self-auto">
              <FileText size={16} strokeWidth={1.7} aria-hidden="true" />
              <span className="text-[12px] font-semibold">
                {posts.length} {posts.length === 1 ? "Article" : "Articles"}
              </span>
            </div>
          </motion.div>

          {posts.length === 0 ? (
            <motion.div
              initial={initialUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={revealTransition}
              className="flex min-h-[370px] flex-col items-center justify-center rounded-[26px] border border-[#E8DDF1] bg-white px-6 py-14 text-center shadow-[0_12px_40px_rgba(75,43,105,0.04)] sm:px-10"
            >
              <div className="mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-[#E4D5EE] bg-[#F2EAF9] text-[#75449B]">
                <BookOpen size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                Cloudlem Insights
              </p>
              <h3 className="max-w-[520px] text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.05em] text-[#30213D]">
                Insights coming soon.
              </h3>
              <p className="mt-5 max-w-[480px] text-[13px] leading-[1.9] text-[#776C80] sm:text-[14px]">
                We&apos;re preparing new articles about cloud technology, AI,
                DevOps, and modern software engineering. Check back for our
                latest perspectives.
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              variants={containerVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {posts.map((post) => (
                <motion.div key={post.id} variants={itemVariants} className="h-full min-w-0">
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={formatDate(post.published_at ?? post.created_at)}
                    category="Insights"
                    gradient="from-accent-teal to-accent-blue"
                    icon={<BookOpen size={24} />}
                    href={`/blog/${post.slug}`}
                    coverImageUrl={post.cover_image_url}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {posts.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DBEE] pt-7">
              <p className="text-[12px] leading-6 text-[#786C82]">
                Practical insights for modern technology and business.
              </p>
              <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#75449B]">
                Cloudlem Journal
                <Sparkles size={16} aria-hidden="true" />
              </span>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="border-t border-[#E8DCF0] bg-[linear-gradient(115deg,#F1E8F9_0%,#FAF7FE_66%,#FFFFFF_100%)] py-16 lg:py-20">
        <div className="container-systems">
          <motion.div
            initial={initialUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16"
          >
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.19em] text-[#75449B]">
                Work With Cloudlem
              </p>
              <h2 className="max-w-[740px] text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.12] tracking-[-0.055em] text-[#30213D]">
                From insight <span className="text-[#75449B]">to implementation.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-[410px] text-[13px] leading-[1.9] text-[#70647A] sm:text-[14px]">
                Looking to turn an idea into a practical technology solution?
                Let&apos;s discuss your business requirements.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_12px_26px_rgba(117,68,155,0.16)] transition-[background-color,transform] hover:bg-[#633784] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
              >
                Discuss your project
                <ArrowRight size={17} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
