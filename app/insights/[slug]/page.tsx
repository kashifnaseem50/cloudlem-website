
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";

import {
  insights,
  getInsightBySlug,
} from "../../data/insights";

// ==========================================
// TYPES
// ==========================================

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ==========================================
// GENERATE STATIC ARTICLE ROUTES
// ==========================================

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

// ==========================================
// DYNAMIC ARTICLE SEO
// ==========================================

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;

  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight Not Found | Cloudlem",
    };
  }

  return {
    title: `${insight.title} | Cloudlem Insights`,

    description: insight.excerpt,

    alternates: {
      canonical: `/insights/${insight.slug}`,
    },

    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url: `https://cloudlem.com/insights/${insight.slug}`,
      type: "article",
      images: [
        {
          url: insight.image,
          alt: insight.imageAlt,
        },
      ],
    },
  };
}

// ==========================================
// DEDICATED INSIGHT ARTICLE PAGE
// ==========================================

export default async function InsightPage({
  params,
}: InsightPageProps) {
  const { slug } = await params;

  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  // Get two different related articles
  const currentIndex = insights.findIndex(
    (item) => item.slug === insight.slug
  );

  const relatedInsights = [
    insights[(currentIndex + 1) % insights.length],
    insights[(currentIndex + 2) % insights.length],
  ];

  return (
    <main className="min-h-screen bg-white text-[#181818]">

      {/* ======================================
          01 — FULL WIDTH FEATURED IMAGE
      ====================================== */}

      <section
        aria-label={`Featured image for ${insight.title}`}
        className="relative h-[52svh] min-h-[360px] max-h-[700px] overflow-hidden bg-[#160A24] sm:h-[65svh]"
      >
        <Image
          src={insight.image}
          alt={insight.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* TOP GRADIENT FOR NAVBAR */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        {/* SUBTLE BOTTOM GRADIENT */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />

      </section>

      {/* ======================================
          02 — ARTICLE SECTION
      ====================================== */}

      <section className="bg-white pb-20 pt-12 sm:pt-16 lg:pb-28">

        <div className="container-systems">

          {/* ==================================
              BREADCRUMB NAVIGATION
          ================================== */}

          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-[12px] text-[#777777] lg:mb-14"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#181818]"
            >
              Home
            </Link>

            <ChevronRight
              size={14}
              aria-hidden="true"
            />

            <Link
              href="/#insights"
              className="transition-colors hover:text-[#181818]"
            >
              Insights
            </Link>

            <ChevronRight
              size={14}
              aria-hidden="true"
            />

            <span className="font-medium text-[#7B4A9A]">
              {insight.category}
            </span>
          </nav>

          {/* ==================================
              EDITORIAL ARTICLE GRID

              Left: Article information
              Middle: Main content
              Right: Related articles
          ================================== */}

          <div className="grid gap-10 lg:grid-cols-[140px_minmax(0,1fr)_240px] lg:gap-10 xl:grid-cols-[160px_minmax(0,1fr)_260px] xl:gap-16">

            {/* ==================================
                LEFT SIDEBAR
            ================================== */}

            <aside className="min-w-0">

              <div className="lg:sticky lg:top-28">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#777777]">
                  Cloudlem Insights
                </p>

                <div className="mt-4 h-[2px] w-10 bg-[#9C67B7]" />

                <p className="mt-5 text-[12px] font-medium leading-6 text-[#777777]">
                  {insight.category}
                </p>

                <Link
                  href="/#insights"
                  className="group mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#754B91] transition-colors hover:text-[#181818]"
                >
                  <ArrowLeft
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />

                  All insights
                </Link>

              </div>

            </aside>

            {/* ==================================
                MAIN ARTICLE CONTENT
            ================================== */}

            <article className="min-w-0">

              {/* ARTICLE CATEGORY */}

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8652A6]">
                {insight.category}
              </p>

              {/* ARTICLE HEADING */}

              <h1 className="max-w-[850px] text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818]">
                {insight.title}
              </h1>

              {/* ARTICLE EXCERPT */}

              <p className="mt-6 text-[17px] font-medium leading-[1.8] text-[#68636B]">
                {insight.excerpt}
              </p>

              {/* SEPARATOR */}

              <div className="my-9 h-px w-full bg-[#E6E6E6]" />

              {/* INTRODUCTION */}

              <p className="border-l-[3px] border-[#A46AC5] pl-5 text-[17px] leading-[1.9] text-[#484848]">
                {insight.introduction}
              </p>

              {/* ==================================
                  ARTICLE BODY
              ================================== */}

              <div className="mt-12 space-y-12">

                {insight.sections.map((section, index) => (

                  <section
                    key={section.heading}
                    id={`section-${index + 1}`}
                    className="scroll-mt-28"
                  >

                    <h2 className="text-[24px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#202020] sm:text-[27px]">
                      {section.heading}
                    </h2>

                    <p className="mt-5 text-[16px] leading-[1.95] text-[#4F4F4F]">
                      {section.body}
                    </p>

                  </section>

                ))}

              </div>

              {/* ==================================
                  KEY TAKEAWAYS
              ================================== */}

              <section className="mt-14 border-y border-[#E5E5E5] py-10">

                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8555A0]">
                  Key Takeaways
                </p>

                <h2 className="mb-7 text-[25px] font-semibold tracking-[-0.04em] text-[#181818]">
                  What businesses should consider
                </h2>

                <ul className="space-y-5">

                  {insight.takeaways.map((takeaway) => (

                    <li
                      key={takeaway}
                      className="flex items-start gap-4"
                    >

                      {/* CHECK ICON */}

                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0E7F5] text-[#8850AA]">

                        <Check
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                        />

                      </span>

                      {/* TAKEAWAY TEXT */}

                      <span className="text-[15px] leading-[1.85] text-[#4F4F4F]">
                        {takeaway}
                      </span>

                    </li>

                  ))}

                </ul>

              </section>

              {/* ==================================
                  ARTICLE CONCLUSION
              ================================== */}

              <div className="mt-11">

                <h2 className="text-[24px] font-semibold tracking-[-0.035em] text-[#181818]">
                  Moving Forward
                </h2>

                <p className="mt-5 text-[16px] leading-[1.95] text-[#4F4F4F]">
                  Every organization has different
                  operational challenges and technology
                  requirements. A clear strategy,
                  practical implementation, and
                  continuous improvement help turn
                  technology investments into lasting
                  business value.
                </p>

                {/* CONTACT LINK */}

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex min-h-10 items-center gap-3 border-b border-[#71468C] pb-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#67407F] transition-colors hover:border-[#181818] hover:text-[#181818]"
                >
                  Discuss Your Project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />

                </Link>

              </div>

            </article>

            {/* ==================================
                RIGHT SIDEBAR
                RELATED INSIGHTS
            ================================== */}

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

                      {/* RELATED IMAGE */}

                      <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-[#21112B]">

                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 260px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                      </div>

                      {/* RELATED CATEGORY */}

                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8B619F]">
                        {related.category}
                      </p>

                      {/* RELATED TITLE */}

                      <h3 className="mt-2 text-[15px] font-semibold leading-[1.5] text-[#262626] transition-colors duration-200 group-hover:text-[#7D48A0]">
                        {related.title}
                      </h3>

                      {/* READ MORE */}

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

      {/* ======================================
          03 — BOTTOM CONTACT SECTION
      ====================================== */}

      <section className="border-t border-[#E9E9E9] bg-[#F8F7F9] py-20 sm:py-24">

        <div className="container-systems text-center">

          {/* EYEBROW */}

          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8958A5]">
            Let's Move Forward
          </p>

          {/* MAIN HEADING */}

          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#181818]">
            How can we help you?
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-[1.85] text-[#676767]">
            Explore how Cloudlem can help your business
            solve operational challenges and develop
            practical technology solutions.
          </p>

          {/* CONTACT CTA */}

          <Link
            href="/contact"
            className="group mt-9 inline-flex min-h-[52px] items-center gap-4 rounded-[3px] bg-[#211B2B] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#71459B] hover:shadow-[0_12px_30px_rgba(0,0,0,0.13)]"
          >
            Let's Work Together

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
