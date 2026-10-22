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

// Keep the existing interface for BlogListing and other consumers.
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  gradient?: string;
  icon?: ReactNode;
  href?: string;
  coverImageUrl?: string | null;
  readTime?: string;
}

// Accept local public assets and HTTP(S) images, exactly as before.
function getValidImageUrl(value: string | null | undefined): string | null {
  if (!value || !value.trim()) return null;
  const url = value.trim();

  if (url.startsWith("/") && !url.startsWith("//")) return url;

  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return url;
    }
  } catch {
    return null;
  }

  return null;
}

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
  // Store the failed URL, not just a boolean: a new URL can be attempted.
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null);
  const imageUrl = getValidImageUrl(coverImageUrl);
  const showCoverImage = imageUrl !== null && imageUrl !== failedImageUrl;
  const articleHref =
    typeof href === "string" && href.trim().length > 0 ? href : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#E8DDF1] bg-white text-[#30213D] shadow-[0_12px_40px_rgba(75,43,105,0.045)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#CFB4E1] hover:shadow-[0_22px_55px_rgba(91,50,130,0.11)] motion-safe:hover:-translate-y-1"
    >
      {/* Brand accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-[#C6A4DC] via-[#75449B] to-[#EADCF4]"
      />

      {/* Existing Supabase cover-image behavior, with a light fallback */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-[#EEE6F4] bg-[#F2EAF9]">
        {showCoverImage && imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Cover image for ${title}`}
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            onError={() => setFailedImageUrl(imageUrl)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#FBF8FE_0%,#EEE4F7_55%,#E8D7F3_100%)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border border-[#CFB6E2]/65 bg-white/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-14 h-60 w-60 rounded-full border border-[#CFB6E2]/50 bg-white/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-1/2 h-px bg-[#B68DCE]/20"
            />

            <div className="relative z-10 flex flex-col items-center px-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D9C5E8] bg-white/80 text-[#75449B] shadow-[0_10px_25px_rgba(103,61,141,0.07)] transition-[transform,background-color] duration-300 group-hover:bg-white motion-safe:group-hover:-translate-y-1">
                {icon ?? (
                  <BookOpen size={27} strokeWidth={1.6} aria-hidden="true" />
                )}
              </div>
              <span className="mt-5 text-[12px] font-bold uppercase tracking-[0.24em] text-[#4D3462]">
                Cloudlem
              </span>
              <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8662A0]">
                Insights &amp; Resources
              </span>
            </div>
          </div>
        )}

        {/* Category is readable on either a photo or a fallback */}
        <div className="absolute bottom-4 left-4 z-10 max-w-[calc(100%-2rem)]">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#75449B] shadow-[0_5px_20px_rgba(36,22,48,0.09)] backdrop-blur-sm">
            <FolderOpen size={13} strokeWidth={1.7} aria-hidden="true" className="shrink-0" />
            <span className="truncate">{category}</span>
          </span>
        </div>
      </div>

      <div className="flex grow flex-col p-6 sm:p-7 lg:p-8">
        {/* Editorial eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-7 bg-[#B78DCE]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8D68A7]">
            Cloudlem Journal
          </span>
        </div>

        <h3 className="break-words text-[24px] font-semibold leading-[1.16] tracking-[-0.05em] text-[#30213D] sm:text-[27px]">
          {title}
        </h3>

        <div
          aria-hidden="true"
          className="mt-5 h-[3px] w-11 rounded-full bg-[#AC7AC8] transition-[width,background-color] duration-300 group-hover:w-16 group-hover:bg-[#75449B]"
        />

        <p className="mt-5 grow break-words text-[13px] leading-[1.85] text-[#756980] sm:text-[14px]">
          {excerpt}
        </p>

        {/* Keep published date and optional reading time */}
        {(date || readTime) && (
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#EEE6F4] pt-5">
            {date && (
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#906BAA]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium text-[#766984]">
                  {date}
                </span>
              </div>
            )}

            {readTime && (
              <div className="flex items-center gap-2">
                <Clock3
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#906BAA]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium text-[#766984]">
                  {readTime}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Keep the exact existing article-link / unavailable behavior */}
        <div className="mt-auto pt-7">
          {articleHref ? (
            <Link
              href={articleHref}
              aria-label={`Read article: ${title}`}
              className="group/btn flex min-h-[52px] w-full items-center justify-between gap-5 rounded-xl bg-[#75449B] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.11em] text-white shadow-[0_10px_24px_rgba(117,68,155,0.16)] transition-[background-color,box-shadow] duration-300 hover:bg-[#623682] hover:shadow-[0_14px_30px_rgba(117,68,155,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
            >
              <span>Read Article</span>
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-300 motion-safe:group-hover/btn:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <div className="flex min-h-[52px] items-center justify-center rounded-xl border border-[#E3D7ED] bg-[#F5F0F9] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#8D7A9B]">
              Article Unavailable
            </div>
          )}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#75449B] transition-[width] duration-500 group-hover:w-full"
      />
    </motion.article>
  );
}
