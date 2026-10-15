
"use client";

import { useState, type ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  FolderOpen,
} from "lucide-react";

// ==========================================
// BLOG CARD PROPERTIES
// ==========================================

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;

  // Existing properties retained
  // for compatibility.
  category?: string;
  gradient?: string;
  icon?: ReactNode;

  // Supabase article properties.
  href?: string;
  coverImageUrl?: string | null;
  readTime?: string;
}

// ==========================================
// VALIDATE ARTICLE IMAGE URL
// ==========================================

// Accept supported local paths and HTTP(S) URLs.
// Missing or malformed URLs use the fallback.

function getValidImageUrl(
  value: string | null | undefined
): string | null {
  if (!value || !value.trim()) {
    return null;
  }

  const url = value.trim();

  if (
    url.startsWith("/") &&
    !url.startsWith("//")
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
// CLOUDLEM BLOG CARD
// Warm Cream / Stone Beige / Charcoal
// ==========================================

export default function BlogCard({
  title,
  excerpt,
  date,
  category = "Insights",
  icon,
  href,
  coverImageUrl = null,
  readTime,
}: BlogCardProps) {
  const [failedImageUrl, setFailedImageUrl] =
    useState<string | null>(null);

  const imageUrl = getValidImageUrl(coverImageUrl);

  // Failed images display the fallback.
  // If the URL changes, the new image
  // can still be attempted.

  const showCoverImage =
    imageUrl !== null &&
    imageUrl !== failedImageUrl;

  const articleHref =
    typeof href === "string" &&
    href.trim().length > 0
      ? href
      : null;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-[#181818]/20 bg-[#B7B09F] text-[#181818] transition-[border-color,box-shadow] duration-300 hover:border-[#181818]/65 hover:shadow-[0_20px_45px_rgba(24,24,24,0.12)]"
    >

      {/* ===================================
          TOP ACCENT
      =================================== */}

      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-[#181818]" />

      {/* ===================================
          COVER IMAGE / FALLBACK
      =================================== */}

      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-[#181818]/20 bg-[#181818]">

        {showCoverImage && imageUrl ? (

          /* EXISTING SUPABASE COVER IMAGE */

          <Image
            src={imageUrl}
            alt={`Cover image for ${title}`}
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              setFailedImageUrl(imageUrl);
            }}
          />

        ) : (

          /* ===================================
              CLOUDLEM IMAGE FALLBACK
          =================================== */

          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#181818]">

            {/* DECORATIVE BACKGROUND */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 border border-[#B7B09F]/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -left-14 h-44 w-44 border border-[#B7B09F]/15"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#D8D2C8]/[0.05]"
            />

            <div className="relative z-10 flex flex-col items-center">

              {/* FALLBACK ICON */}

              <div className="flex h-16 w-16 items-center justify-center border border-[#B7B09F]/50 bg-[#B7B09F]/10 text-[#D8D2C8] transition-colors duration-300 group-hover:bg-[#B7B09F]/20">
                {icon ?? (
                  <BookOpen
                    size={27}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* BRAND */}

              <span className="mt-5 text-[12px] font-bold uppercase tracking-[0.26em] text-[#D8D2C8]">
                Cloudlem
              </span>

              <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B7B09F]">
                Insights & Resources
              </span>
            </div>
          </div>
        )}

        {/* ===================================
            ARTICLE CATEGORY BADGE
        =================================== */}

        <div className="absolute bottom-4 left-4 z-10">
          <span className="inline-flex items-center gap-2 border border-[#B7B09F]/50 bg-[#181818]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#D8D2C8]">
            <FolderOpen
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            {category}
          </span>
        </div>
      </div>

      {/* ===================================
          ARTICLE CONTENT
      =================================== */}

      <div className="flex grow flex-col p-6 sm:p-8">

        {/* ===================================
            ARTICLE LABEL
        =================================== */}

        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#181818]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#181818]/75">
            Cloudlem Journal
          </span>
        </div>

        {/* ===================================
            ARTICLE TITLE
        =================================== */}

        <h3 className="break-words text-[25px] font-semibold leading-[1.14] tracking-[-0.05em] text-[#181818] sm:text-[28px]">
          {title}
        </h3>

        {/* DECORATIVE ACCENT */}

        <div className="mt-6 h-[2px] w-11 bg-[#181818]" />

        {/* ===================================
            ARTICLE EXCERPT
        =================================== */}

        <p className="mt-6 grow break-words text-[13px] leading-8 text-[#181818]/80">
          {excerpt}
        </p>

        {/* ===================================
            ARTICLE METADATA
        =================================== */}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#181818]/20 pt-6">

          {/* PUBLISHED DATE */}

          {date && (
            <div className="flex items-center gap-2.5">
              <CalendarDays
                size={16}
                strokeWidth={1.7}
                className="shrink-0 text-[#181818]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-medium text-[#181818]/75">
                {date}
              </span>
            </div>
          )}

          {/* OPTIONAL READING TIME */}

          {readTime && (
            <div className="flex items-center gap-2.5">
              <Clock3
                size={16}
                strokeWidth={1.7}
                className="shrink-0 text-[#181818]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-medium text-[#181818]/75">
                {readTime}
              </span>
            </div>
          )}
        </div>

        {/* ===================================
            READ ARTICLE CTA
        =================================== */}

        <div className="mt-auto pt-8">

          {articleHref ? (

            <Link
              href={articleHref}
              aria-label={`Read article: ${title}`}
              className="group/btn flex min-h-12 w-full items-center justify-between gap-5 border border-[#181818] bg-[#181818] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#D8D2C8] transition-colors duration-200 hover:bg-[#33312D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181818]"
            >
              Read Article

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>

          ) : (

            /* ARTICLE UNAVAILABLE */

            <div className="flex min-h-12 items-center justify-center border border-[#181818]/30 bg-[#181818]/[0.05] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#181818]/60">
              Article Unavailable
            </div>
          )}
        </div>
      </div>

      {/* ===================================
          DECORATIVE BOTTOM HOVER LINE
      =================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#181818] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
