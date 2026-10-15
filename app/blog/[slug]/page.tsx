
import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

// ==========================================
// CLOUDLEM BLOG ARTICLE PAGE
// Warm Cream / Stone Beige / Charcoal
// ==========================================

export const dynamic = "force-dynamic";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ==========================================
// FETCH ONLY PUBLISHED ARTICLES
// ==========================================

async function getArticle(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, content, cover_image_url, published_at, created_at"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to fetch blog article:",
      error.code
    );

    throw new Error("Unable to load the article.");
  }

  return data;
}

// ==========================================
// FORMAT ARTICLE DATE
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
// VALIDATE OPTIONAL COVER IMAGE URL
// ==========================================

function getValidCoverUrl(
  value: string | null
): string | null {
  if (!value || !value.trim()) {
    return null;
  }

  const url = value.trim();

  if (
    url.startsWith("/") &&
    !url.startsWith("//") &&
    !url.startsWith("/\\")
  ) {
    return url;
  }

  try {
    const parsed = new URL(url);

    if (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:"
    ) {
      return url;
    }
  } catch {
    return null;
  }

  return null;
}

// ==========================================
// ARTICLE SEO METADATA
// ==========================================

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getArticle(slug);

  if (!post) {
    return {
      title: "Article Not Found | Cloudlem",
    };
  }

  return {
    title: `${post.title} | Cloudlem`,
    description:
      post.excerpt ||
      `Read ${post.title} on Cloudlem.`,

    openGraph: {
      title: post.title,
      description:
        post.excerpt || post.title,
      type: "article",
      publishedTime:
        post.published_at ??
        post.created_at,
    },
  };
}

// ==========================================
// PUBLIC BLOG ARTICLE PAGE
// ==========================================

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;

  const post = await getArticle(slug);

  // Draft and nonexistent articles return 404.
  if (!post) {
    notFound();
  }

  const articleDate = formatDate(
    post.published_at ?? post.created_at
  );

  const coverImageUrl = getValidCoverUrl(
    post.cover_image_url
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#D8D2C8]">

      {/* ===================================
          ARTICLE HERO — CHARCOAL
      =================================== */}

      <section className="relative overflow-hidden bg-[#181818] pb-20 pt-32 text-[#D8D2C8] lg:pb-24 lg:pt-40">
        <div className="container-systems relative z-10">

          <div className="mx-auto max-w-[900px]">

            {/* BACK TO BLOG */}

            <Link
              href="/blog"
              className="group mb-12 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#B7B09F] transition-colors hover:text-[#D8D2C8]"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-x-1.5"
                aria-hidden="true"
              />

              Back to Blog
            </Link>

            {/* ARTICLE CATEGORY */}

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-9 bg-[#B7B09F]" />

              <BookOpen
                size={17}
                strokeWidth={1.6}
                className="text-[#B7B09F]"
                aria-hidden="true"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B09F]">
                Cloudlem Insights
              </span>
            </div>

            {/* ARTICLE TITLE */}

            <h1 className="max-w-[880px] break-words text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#D8D2C8] sm:text-[3.6rem] lg:text-[4.5rem]">
              {post.title}
            </h1>

            {/* ACCENT */}

            <div className="mt-8 h-[2px] w-14 bg-[#B7B09F]" />

            {/* ARTICLE EXCERPT */}

            {post.excerpt && (
              <p className="mt-8 max-w-[770px] break-words text-[15px] leading-8 text-[#D8D2C8]/80 sm:text-[17px]">
                {post.excerpt}
              </p>
            )}

            {/* ARTICLE METADATA */}

            <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-[#D8D2C8]/20 pt-7">

              {/* DATE */}

              {articleDate && (
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#B7B09F]"
                    aria-hidden="true"
                  />

                  <span className="text-[12px] font-medium text-[#D8D2C8]/75">
                    {articleDate}
                  </span>
                </div>
              )}

              {/* ARTICLE TYPE */}

              <div className="flex items-center gap-3">
                <FileText
                  size={17}
                  strokeWidth={1.7}
                  className="text-[#B7B09F]"
                  aria-hidden="true"
                />

                <span className="text-[12px] font-medium text-[#D8D2C8]/75">
                  Cloudlem Journal
                </span>
              </div>
            </div>
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
          ARTICLE CONTENT — WARM CREAM
      =================================== */}

      <section className="bg-[#D8D2C8] py-14 text-[#181818] sm:py-16 lg:py-24">

        <div className="container-systems">
          <article className="mx-auto max-w-[900px]">

            {/* ===================================
                COVER IMAGE OR FALLBACK
            =================================== */}

            <div
              role="img"
              aria-label={`Article cover for ${post.title}`}
              className="relative mb-14 aspect-[16/9] w-full overflow-hidden border border-[#181818]/20 bg-[#181818] sm:mb-16"
              style={
                coverImageUrl
                  ? {
                      backgroundImage:
                        `linear-gradient(180deg, ` +
                        `rgba(24,24,24,0.05) 0%, ` +
                        `rgba(24,24,24,0.4) 100%), ` +
                        `url(${JSON.stringify(coverImageUrl)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : undefined
              }
            >

              {/* DECORATIVE CORNERS */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 border border-[#B7B09F]/20"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 border border-[#B7B09F]/20"
              />

              {/* BRANDED FALLBACK */}

              {!coverImageUrl && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">

                  <div className="flex h-17 w-17 items-center justify-center border border-[#B7B09F]/50 bg-[#B7B09F]/10 text-[#D8D2C8]">
                    <BookOpen
                      size={29}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.25em] text-[#D8D2C8]">
                    Cloudlem
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7B09F]">
                    Insights & Resources
                  </p>
                </div>
              )}

              {/* COVER IMAGE LABEL */}

              {coverImageUrl && (
                <div className="absolute bottom-5 left-5 border border-[#B7B09F]/45 bg-[#181818]/90 px-4 py-2.5 sm:bottom-7 sm:left-7">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8D2C8]">
                    Cloudlem Insights
                  </span>
                </div>
              )}

              {/* BOTTOM IMAGE ACCENT */}

              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#181818]" />
            </div>

            {/* ===================================
                ARTICLE BODY
            =================================== */}

            <div className="grid gap-10 lg:grid-cols-[155px_minmax(0,1fr)] lg:gap-14">

              {/* STICKY SIDE LABEL */}

              <aside className="hidden lg:block">
                <div className="sticky top-28">

                  <div className="mb-5 h-[2px] w-9 bg-[#181818]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#181818]">
                    The Article
                  </p>

                  <p className="mt-4 text-[11px] leading-6 text-[#181818]/65">
                    Cloudlem Insights
                  </p>

                  <div className="mt-7 border-t border-[#181818]/20 pt-5">
                    <BookOpen
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#181818]/70"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </aside>

              {/* ARTICLE CONTENT */}

              <div className="min-w-0">

                {/* MOBILE ARTICLE LABEL */}

                <div className="mb-9 flex items-center gap-3 lg:hidden">

                  <span className="h-px w-8 bg-[#181818]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]">
                    The Article
                  </span>
                </div>

                {/* ===================================
                    SAFE PLAIN-TEXT RENDERING

                    Preserves the current CMS
                    content display behavior.
                =================================== */}

                <div className="min-w-0 whitespace-pre-wrap break-words text-[15px] leading-[1.95] text-[#181818]/90 sm:text-[16px]">
                  {post.content}
                </div>

                {/* ARTICLE END MARKER */}

                <div className="mt-14 flex items-center gap-4">

                  <span className="h-[2px] w-12 bg-[#181818]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#181818]/60">
                    End of Article
                  </span>
                </div>
              </div>
            </div>

            {/* ===================================
                ARTICLE FOOTER
            =================================== */}

            <div className="mt-16 border-t border-[#181818]/20 pt-9 sm:mt-20">

              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#181818]" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#181818]/70">
                      Keep Exploring
                    </p>
                  </div>

                  <p className="text-[19px] font-semibold tracking-[-0.035em] text-[#181818]">
                    Cloudlem Insights
                  </p>

                  <p className="mt-3 max-w-[450px] text-[12.5px] leading-7 text-[#181818]/75">
                    Explore more perspectives on
                    cloud technology, AI, DevOps,
                    and modern engineering.
                  </p>
                </div>

                {/* MORE ARTICLES LINK */}

                <Link
                  href="/blog"
                  className="group inline-flex min-h-12 shrink-0 items-center justify-between gap-6 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
                >
                  More Articles

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===================================
          FINAL CTA — STONE BEIGE
      =================================== */}

      <section className="bg-[#B7B09F] py-16 text-[#181818] lg:py-20">

        <div className="container-systems">

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">

            {/* CTA HEADING */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#181818]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#181818]/75">
                  Work With Cloudlem
                </p>
              </div>

              <h2 className="max-w-[750px] text-[35px] font-semibold leading-[1.07] tracking-[-0.055em] text-[#181818] sm:text-[46px]">
                Have a technology

                <span className="mt-2 block text-[#514C43]">
                  challenge to solve?
                </span>
              </h2>
            </div>

            {/* CTA DESCRIPTION */}

            <div className="lg:justify-self-end">

              <p className="max-w-[370px] text-[13px] leading-8 text-[#181818]/80">
                Connect with Cloudlem to discuss
                how we can help your business
                build, modernize, and scale.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex min-h-12 items-center justify-between gap-7 border border-[#181818] bg-[#181818] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D8D2C8] transition-colors hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
              >
                Get In Touch

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
