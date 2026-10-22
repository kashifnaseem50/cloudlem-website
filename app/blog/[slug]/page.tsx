import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { insights } from "../../data/insights";
import BlogMarkdownContent from "../../components/blog/BlogMarkdownContent";

// Keep the blog's existing live Supabase data and published-only protection.
// This remains a Server Component. Do not add "use client".
export const dynamic = "force-dynamic";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

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
    console.error("Unable to load blog article:", error.code);
    throw new Error("Unable to load the article.");
  }

  return data;
}

// Validate a supplied blog cover before passing it to next/image.
function validCoverUrl(value: string | null): string | null {
  if (!value?.trim()) return null;
  const url = value.trim();

  if (url.startsWith("/") && !url.startsWith("//") && !url.startsWith("/\\")) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (
      (parsed.protocol === "https:" || parsed.protocol === "http:") &&
      !parsed.username &&
      !parsed.password
    ) {
      return url;
    }
  } catch {
    return null;
  }

  return null;
}

// When no custom blog cover has been supplied, choose an existing Cloudlem
// Insights visual according to the blog's topic. This does not change the
// article content or store a new image in Supabase.
function findMatchingInsight(title: string) {
  if (insights.length === 0) return null;

  const words = title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3)
    .filter((word) => !new Set([
      "with", "from", "that", "this", "into", "your", "about", "modern",
      "business", "businesses", "what", "when", "where", "their", "through",
      "transforming", "growth", "future", "cloudlem", "technology",
    ]).has(word));

  let winner = insights[0];
  let highestScore = -1;

  for (const insight of insights) {
    const haystack = `${insight.title} ${insight.category} ${insight.slug}`.toLowerCase();
    const score = words.reduce(
      (total, word) => total + (haystack.includes(word) ? 1 : 0),
      0
    );
    if (score > highestScore) {
      highestScore = score;
      winner = insight;
    }
  }

  return winner;
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticle(slug);

  if (!post) return { title: "Article Not Found | Cloudlem" };

  const cover = validCoverUrl(post.cover_image_url);

  return {
    title: `${post.title} | Cloudlem Journal`,
    description: post.excerpt || `Read ${post.title} on Cloudlem.`,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.published_at ?? post.created_at,
      ...(cover ? { images: [{ url: cover, alt: post.title }] } : {}),
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getArticle(slug);

  // Keep drafts and nonexistent posts private.
  if (!post) notFound();

  const matchingInsight = findMatchingInsight(post.title);
  const customCover = validCoverUrl(post.cover_image_url);
  const featuredImage = customCover ?? matchingInsight?.image ?? null;
  const featuredAlt = customCover
    ? `Featured image for ${post.title}`
    : matchingInsight?.imageAlt ?? `Cloudlem editorial illustration for ${post.title}`;

  // Use the same genuine Insights stories and images as the reference page.
  // This also avoids displaying unpublished or test Supabase posts as recommendations.
  const matchingIndex = insights.findIndex(
    (item) => item.slug === matchingInsight?.slug
  );
  const relatedInsights = insights.length > 1
    ? [1, 2]
        .map((offset) => insights[(Math.max(0, matchingIndex) + offset) % insights.length])
        .filter((item, index, items) =>
          item.slug !== matchingInsight?.slug &&
          items.findIndex((candidate) => candidate.slug === item.slug) === index
        )
    : [];

  return (
    <main className="min-h-screen bg-white text-[#181818]">
      {/* 01 — FULL-WIDTH FEATURED IMAGE: EXACT INSIGHTS GEOMETRY */}
      <section
        aria-label={`Featured image for ${post.title}`}
        className="relative h-[52svh] min-h-[360px] max-h-[700px] overflow-hidden bg-[#160A24] sm:h-[65svh]"
      >
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={featuredAlt}
            fill
            priority
            unoptimized={Boolean(customCover)}
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(130deg,#1B0D2C,#67328E_55%,#AA78D8)]"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
      </section>

      {/* 02 — SAME WHITE EDITORIAL LAYOUT AS app/insights/[slug]/page.tsx */}
      <section className="bg-white pb-20 pt-12 sm:pt-16 lg:pb-28">
        <div className="container-systems">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[12px] text-[#777777] lg:mb-14"
          >
            <Link href="/" className="transition-colors hover:text-[#181818]">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/blog" className="transition-colors hover:text-[#181818]">
              Blog &amp; Insights
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="font-medium text-[#7B4A9A]">Cloudlem Journal</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[140px_minmax(0,1fr)_240px] lg:gap-10 xl:grid-cols-[160px_minmax(0,1fr)_260px] xl:gap-16">
            {/* LEFT SIDEBAR — same spacing, type and sticky position */}
            <aside className="min-w-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#777777]">
                  Cloudlem Insights
                </p>
                <div className="mt-4 h-[2px] w-10 bg-[#9C67B7]" />
                <p className="mt-5 text-[12px] font-medium leading-6 text-[#777777]">
                  Cloud &amp; Digital Innovation
                </p>
                <Link
                  href="/blog"
                  className="group mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#754B91] transition-colors hover:text-[#181818]"
                >
                  <ArrowLeft
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  All articles
                </Link>
              </div>
            </aside>

            {/* ARTICLE — NO BOXED CONTAINER */}
            <article className="min-w-0">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8652A6]">
                Cloudlem Journal
              </p>

              <h1 className="max-w-[850px] break-words text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818]">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="mt-6 text-[17px] font-medium leading-[1.8] text-[#68636B]">
                  {post.excerpt}
                </p>
              )}

              <div className="my-9 h-px w-full bg-[#E6E6E6]" />

              {/* Same safe Markdown renderer used by the admin preview. */}
              <div className="min-w-0">
                <BlogMarkdownContent content={post.content ?? ""} />
              </div>

              <div className="mt-14 border-t border-[#E5E5E5] pt-8">
                <Link
                  href="/blog"
                  className="group inline-flex min-h-10 items-center gap-3 border-b border-[#71468C] pb-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#67407F] transition-colors hover:border-[#181818] hover:text-[#181818]"
                >
                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* RIGHT SIDEBAR — genuine pre-existing Insights assets */}
            <aside className="min-w-0">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-[17px] font-semibold tracking-[-0.02em] text-[#181818]">
                  You may also like
                </h2>

                <div className="mt-6 space-y-6">
                  {relatedInsights.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/insights/${related.slug}`}
                      className="group block border-b border-[#E5E5E5] pb-6"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-[#21112B]">
                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 260px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8B619F]">
                        {related.category}
                      </p>
                      <h3 className="mt-2 text-[15px] font-semibold leading-[1.5] text-[#262626] transition-colors duration-200 group-hover:text-[#7D48A0]">
                        {related.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#8554A3]">
                        Read More
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 03 — SAME FINAL CONTACT SECTION AS INSIGHTS */}
      <section className="border-t border-[#E9E9E9] bg-[#F8F7F9] py-20 sm:py-24">
        <div className="container-systems text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8958A5]">
            Let&apos;s Move Forward
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818]">
            How can we help you?
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-[1.85] text-[#676767]">
            Explore how Cloudlem can help your business solve operational challenges and develop practical technology solutions.
          </p>
          <Link
            href="/contact"
            className="group mt-9 inline-flex min-h-[52px] items-center gap-4 rounded-[3px] bg-[#211B2B] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#71459B] hover:shadow-[0_12px_30px_rgba(0,0,0,0.13)]"
          >
            Let&apos;s Work Together
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
