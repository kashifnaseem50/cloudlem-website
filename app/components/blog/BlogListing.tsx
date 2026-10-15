
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  FileText,
} from "lucide-react";

import BlogCard from "./BlogCard";

// ==========================================
// EXISTING SUPABASE BLOG POST STRUCTURE
// ==========================================

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

// ==========================================
// ANIMATIONS
// ==========================================

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ==========================================
// FORMAT SUPABASE ARTICLE DATES
// ==========================================

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

// ==========================================
// BLOG LISTING PAGE
// ==========================================

export default function BlogListing({
  posts,
}: BlogListingProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          BLOG HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">

        <div className="container-systems relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">

            {/* HERO TITLE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={revealTransition}
            >
              <div className="mb-6 flex items-center gap-4">

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 35 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18,
                  }}
                  className="h-px bg-[#B7B09F]"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#B7B09F]">
                  Insights & Resources
                </p>
              </div>

              <h1 className="max-w-[770px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.065em] text-[#D8D2C8] sm:text-[4.5rem] lg:text-[5.5rem]">
                Cloudlem

                <span className="block text-[#B7B09F]">
                  Blog & Insights.
                </span>
              </h1>
            </motion.div>

            {/* HERO DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.65,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-[480px] text-[14px] leading-8 text-[#D8D2C8]/80">
                Explore perspectives on cloud
                technology, DevOps, artificial
                intelligence, and business growth.
                Practical ideas to support better
                technology decisions.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-[#D8D2C8]/20 pt-5">
                <BookOpen
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#B7B09F]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B7B09F]">
                  Knowledge. Engineering. Innovation.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BACKGROUND TYPOGRAPHY */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-12 overflow-hidden"
        >
          <p className="select-none whitespace-nowrap text-center text-[8rem] font-bold leading-none tracking-[-0.08em] text-[#D8D2C8]/[0.035] sm:text-[11rem] lg:text-[15rem]">
            INSIGHTS
          </p>
        </div>
      </section>

      {/* ===================================
          BLOG INTRO — STONE BEIGE
      =================================== */}

      <section className="border-b border-[#181818]/15 bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16"
          >
            {/* SECTION HEADING */}

            <div>
              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  The Cloudlem Journal
                </p>
              </div>

              <h2 className="max-w-[560px] text-[34px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[44px]">
                Ideas worth

                <span className="block">
                  exploring.
                </span>
              </h2>

              <div className="mt-7 h-[2px] w-12 bg-[#181818]" />
            </div>

            {/* SECTION DESCRIPTION */}

            <p className="max-w-[480px] text-[13px] leading-8 text-[#181818]/80 lg:justify-self-end">
              Discover articles, insights, and
              technical perspectives from Cloudlem
              on the technologies and practices
              shaping modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          PUBLISHED ARTICLES — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-16 text-[#181818] lg:py-24">
        <div className="container-systems">

          {/* ARTICLES HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
            }}
            className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-[#181818]/20 pb-7"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Explore Our Articles
                </p>
              </div>

              <h2 className="text-[27px] font-semibold leading-[1.1] tracking-[-0.045em] text-[#181818] sm:text-[34px]">
                Latest Articles
              </h2>
            </div>

            {/* ARTICLE COUNTER */}

            <div className="flex items-center gap-3 border border-[#181818]/25 px-4 py-3">
              <FileText
                size={17}
                strokeWidth={1.7}
                className="text-[#181818]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-semibold text-[#181818]">
                {posts.length}{" "}
                {posts.length === 1
                  ? "Article"
                  : "Articles"}
              </span>
            </div>
          </motion.div>

          {/* ===================================
              EMPTY STATE
          =================================== */}

          {posts.length === 0 ? (

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="flex min-h-[390px] flex-col items-center justify-center border border-[#181818]/20 bg-[#B7B09F] px-6 py-16 text-center sm:px-10"
            >
              {/* ICON */}

              <div className="mb-8 flex h-17 w-17 items-center justify-center border border-[#181818] bg-[#181818] text-[#D8D2C8]">
                <BookOpen
                  size={30}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* LABEL */}

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#181818]/75">
                  Cloudlem Insights
                </p>

                <span className="h-px w-6 bg-[#181818]" />
              </div>

              {/* TITLE */}

              <h3 className="max-w-[530px] text-[30px] font-semibold leading-[1.12] tracking-[-0.05em] text-[#181818] sm:text-[38px]">
                Insights Coming Soon.
              </h3>

              <div className="my-7 h-[2px] w-12 bg-[#181818]" />

              {/* DESCRIPTION */}

              <p className="max-w-[480px] text-[13px] leading-8 text-[#181818]/80">
                We&apos;re preparing new articles
                about cloud technology, AI,
                DevOps, and modern software
                engineering. Check back for
                our latest perspectives.
              </p>
            </motion.div>

          ) : (

            /* ===================================
                SUPABASE PUBLISHED BLOG POSTS
            =================================== */

            <motion.div
              className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-60px",
              }}
            >
              {posts.map((post) => (

                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="h-full min-w-0"
                >
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={formatDate(
                      post.published_at ??
                        post.created_at
                    )}
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

          {/* BOTTOM SECTION DETAIL */}

          {posts.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#181818]/20 pt-7">

              <p className="text-[12px] text-[#181818]/75">
                Practical insights for modern
                technology and business.
              </p>

              <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#181818]">
                Cloudlem Journal

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ===================================
          FINAL CTA — STONE BEIGE
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">
        <div className="container-systems">

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={revealTransition}
            className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16"
          >

            {/* CTA HEADING */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Work With Cloudlem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[35px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                From insight

                <span className="mt-2 block text-[#514C43]">
                  to implementation.
                </span>
              </h2>
            </div>

            {/* CTA DESCRIPTION */}

            <div className="lg:justify-self-end">

              <p className="max-w-[370px] text-[13px] leading-8 text-[#181818]/80">
                Looking to turn an idea into
                a practical technology solution?
                Let&apos;s discuss your
                business requirements.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Discuss Your Project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
