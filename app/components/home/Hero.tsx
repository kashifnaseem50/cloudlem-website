
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  TrendingUp,
  MoveDown,
} from "lucide-react";

// ==========================================
// CLOUDLEM — REFINED CINEMATIC HERO
//
// THEME:
// Graphite / Warm Silver / Steel Blue
//
// FEATURES:
// - Original color video
// - Balanced cinematic overlays
// - Responsive typography
// - Staggered entrance animations
// - Animated headline highlight
// - Premium hover buttons
// - Floating light-glass card
// - Smart video playback
// - Reduced-motion accessibility
// ==========================================

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // ========================================
  // SMART BACKGROUND VIDEO PLAYBACK
  // ========================================

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let isVisible = true;

    const syncPlayback = () => {
      const shouldPause =
        mediaQuery.matches ||
        document.hidden ||
        !isVisible;

      if (shouldPause) {
        video.pause();
        return;
      }

      const playPromise = video.play();

      if (playPromise) {
        void playPromise.catch(() => {
          // Autoplay may be restricted by the browser.
        });
      }
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;
              syncPlayback();
            },
            {
              threshold: 0.08,
            }
          )
        : null;

    observer?.observe(video);

    mediaQuery.addEventListener(
      "change",
      syncPlayback
    );

    document.addEventListener(
      "visibilitychange",
      syncPlayback
    );

    video.addEventListener(
      "canplay",
      syncPlayback
    );

    syncPlayback();

    return () => {
      observer?.disconnect();

      mediaQuery.removeEventListener(
        "change",
        syncPlayback
      );

      document.removeEventListener(
        "visibilitychange",
        syncPlayback
      );

      video.removeEventListener(
        "canplay",
        syncPlayback
      );
    };
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#14202A] text-white"
    >

      {/* ======================================
          BACKGROUND VIDEO AND LIGHTING
      ====================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >

        {/* FALLBACK GRADIENT */}

        <div className="absolute inset-0 bg-[linear-gradient(115deg,#121B24_0%,#293C47_56%,#536D74_100%)]" />

        {/* ORIGINAL VIDEO — NATURAL COLORS */}

        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] brightness-[1.07] saturate-[1.08] contrast-[1.03] motion-reduce:hidden sm:object-center"
        >
          <source
            src="/videos/hero-background.mp4"
            type="video/mp4"
          />
        </video>

        {/* SOFT CINEMATIC TINT */}

        <div className="absolute inset-0 bg-[#10202A]/10" />

        {/* LEFT READABILITY GRADIENT */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,24,0.93)_0%,rgba(13,23,31,0.86)_30%,rgba(23,34,43,0.58)_59%,rgba(31,43,48,0.14)_100%)]" />

        {/* COOL BLUE ATMOSPHERE */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_83%_36%,rgba(138,204,217,0.15),transparent_57%)]" />

        {/* SOFT WARM LIGHT */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_82%,rgba(232,191,145,0.10),transparent_45%)]" />

        {/* MOBILE TEXT PROTECTION */}

        <div className="absolute inset-0 bg-[#0D1720]/20 sm:hidden" />

        {/* BOTTOM FADE */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101923]/90 via-[#101923]/35 to-transparent" />

      </div>

      {/* ======================================
          DECORATIVE SIDE ACCENT
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-28 right-9 top-36 hidden w-px bg-gradient-to-b from-transparent via-[#E1E9EB]/20 to-transparent 2xl:block"
      />

      {/* ======================================
          HERO CONTENT CONTAINER
      ====================================== */}

      <div className="container-systems relative z-10 flex min-h-[100svh] items-center pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-36">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.34fr)_minmax(280px,0.66fr)] lg:gap-8 xl:gap-12">

          {/* ==================================
              LEFT CONTENT
          ================================== */}

          <div className="min-w-0 max-w-[800px]">

            {/* ==============================
                EYEBROW
            ============================== */}

            <div
              className="cloudlem-hero-reveal mb-7 flex flex-wrap items-center gap-3"
              style={{
                animationDelay: "80ms",
              }}
            >

              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-[#E4D1B5]"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.23em] text-[#E7E0D7] sm:text-[12px]">

                Automate

                <span className="mx-2 text-white/45">
                  ·
                </span>

                Anything

                <span className="mx-2 text-white/45">
                  ·
                </span>

                Anywhere

              </p>

            </div>

            {/* ==============================
                MAIN HEADLINE
            ============================== */}

            <h1
              id="hero-heading"
              className="cloudlem-hero-reveal max-w-[800px] text-[clamp(2.45rem,4.55vw,4.5rem)] font-semibold leading-[1.085] tracking-[-0.055em] text-[#FFFFFF]"
              style={{
                animationDelay: "170ms",
              }}
            >

              Technology, Operations &amp;
              Financial Solutions for{" "}

              <span className="cloudlem-hero-highlight inline-block pb-[0.12em] bg-[linear-gradient(110deg,#FFFFFF_0%,#E8E5DD_32%,#EBCFA7_75%,#C5E1E6_100%)] bg-clip-text text-transparent">

                Growing Businesses

              </span>

            </h1>

            {/* ==============================
                SUPPORTING DESCRIPTION
            ============================== */}

            <p
              className="cloudlem-hero-reveal mt-7 max-w-[625px] text-[15px] leading-[1.85] text-[#E1E5E7] sm:text-[17px]"
              style={{
                animationDelay: "290ms",
              }}
            >

              Cloudlem helps businesses tackle real
              challenges through cloud engineering,
              AI and automation, digital solutions,
              financial operations, and practical
              support for sustainable growth.

            </p>

            {/* ==============================
                ACTION BUTTONS
            ============================== */}

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">

              {/* PRIMARY CTA */}

              <div
                className="cloudlem-hero-reveal"
                style={{
                  animationDelay: "400ms",
                }}
              >

                <Link
                  href="/services"
                  className="group inline-flex min-h-[54px] w-full items-center justify-center gap-4 rounded-[7px] border border-[#F5F2EB] bg-[#F5F2EB] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#17242B] shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-white hover:shadow-[0_15px_36px_rgba(220,236,240,0.18)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >

                  Explore Services

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                  />

                </Link>

              </div>

              {/* SECONDARY CTA */}

              <div
                className="cloudlem-hero-reveal"
                style={{
                  animationDelay: "480ms",
                }}
              >

                <Link
                  href="#founder"
                  className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[7px] border border-white/35 bg-[#263640]/40 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-[background-color,border-color,transform] duration-300 hover:border-[#DDECEF]/80 hover:bg-[#607783]/30 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >

                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/55 transition-colors duration-300 group-hover:border-white">

                    <ArrowDown
                      size={12}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </span>

                  Meet Our Founder

                </Link>

              </div>

            </div>

            {/* ==============================
                CONTACT LINK
            ============================== */}

            <div
              className="cloudlem-hero-reveal mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] leading-6"
              style={{
                animationDelay: "570ms",
              }}
            >

              <span className="text-[#CFD6D9]">
                Have a project in mind?
              </span>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-sm font-semibold text-[#F8E7CE] underline decoration-[#E8C59A]/65 underline-offset-4 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >

                Let&apos;s discuss it

                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

          {/* ==================================
              RIGHT FLOATING INFORMATION CARD
          ================================== */}

          <div className="relative hidden min-h-[440px] items-center justify-end lg:flex">

            {/* AMBIENT LIGHT BEHIND CARD */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[360px] -translate-y-1/2 rounded-full bg-[#C1E1E8]/10 blur-[85px]"
            />

            {/* POSITION WRAPPER */}

            <div className="relative w-full max-w-[355px] -translate-y-5 xl:-translate-y-8">

              {/* ENTRANCE WRAPPER */}

              <div
                className="cloudlem-hero-reveal"
                style={{
                  animationDelay: "620ms",
                }}
              >

                {/* FLOAT WRAPPER */}

                <div className="cloudlem-hero-float">

                  {/* LIGHT GLASS CARD */}

                  <div className="group relative overflow-hidden rounded-[16px] border border-white/75 border-l-[4px] border-l-[#C5DDE3] bg-[#EDF2F3]/90 p-6 shadow-[0_24px_65px_rgba(8,19,28,0.25)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-500 hover:border-white hover:shadow-[0_30px_78px_rgba(8,19,28,0.33)] motion-safe:hover:-translate-y-1 sm:p-7">

                    {/* TOP GLASS HIGHLIGHT */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.90),transparent_60%)]"
                    />

                    {/* CONTENT */}

                    <div className="relative flex items-start gap-4">

                      {/* ICON BLOCK */}

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[11px] border border-[#C7D7DC] bg-[#DDE9ED] transition-[background-color,transform] duration-300 group-hover:bg-[#CFE5EA] motion-safe:group-hover:scale-105">

                        <TrendingUp
                          size={23}
                          strokeWidth={1.7}
                          className="text-[#365562]"
                          aria-hidden="true"
                        />

                      </span>

                      {/* CARD TEXT */}

                      <div className="min-w-0">

                        <p className="text-[17px] font-semibold leading-[1.4] tracking-[-0.03em] text-[#172830]">

                          From strategy to execution

                        </p>

                        <p className="mt-3 text-[13px] leading-[1.75] text-[#586A72]">

                          We&apos;re your technology and
                          operations partner.

                        </p>

                      </div>

                    </div>

                    {/* DIVIDER AND TAGLINE */}

                    <div className="relative mt-6 flex items-center gap-2.5 border-t border-[#B5CBD1]/65 pt-5">

                      <span
                        aria-hidden="true"
                        className="cloudlem-hero-pulse h-2 w-2 rounded-full bg-[#51879A]"
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#55717D]">

                        Build. Automate. Scale.

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          SCROLL INDICATOR
      ====================================== */}

      <Link
        href="#services"
        aria-label="Scroll to explore Cloudlem services"
        className="cloudlem-hero-scroll group absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-[#22323C]/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E9ECEB] backdrop-blur-md transition-colors duration-300 hover:border-white/50 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white lg:inline-flex"
      >

        Scroll to explore

        <MoveDown
          size={14}
          strokeWidth={1.7}
          className="cloudlem-hero-scroll-icon"
          aria-hidden="true"
        />

      </Link>

      {/* ======================================
          COMPONENT ANIMATIONS
      ====================================== */}

      <style>{`

        /* ENTRANCE REVEAL */

        @keyframes cloudlem-hero-reveal {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .cloudlem-hero-reveal {
          animation:
            cloudlem-hero-reveal 760ms
            cubic-bezier(.22,1,.36,1) both;
        }

        /* SOFT FLOATING CARD */

        @keyframes cloudlem-hero-floating {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        .cloudlem-hero-float {
          animation:
            cloudlem-hero-floating 6s
            ease-in-out infinite;
        }

        /* GRADIENT HIGHLIGHT ENTRANCE */

        @keyframes cloudlem-hero-highlight {
          from {
            background-position: 100% 50%;
          }

          to {
            background-position: 0% 50%;
          }
        }

        .cloudlem-hero-highlight {
          background-size: 155% 100%;

          animation:
            cloudlem-hero-highlight 1600ms
            ease-out 1 both;
        }

        /* SOFT STATUS DOT */

        @keyframes cloudlem-hero-dot {
          0%, 100% {
            opacity: 0.75;
            box-shadow:
              0 0 0 0 rgba(110,166,184,0.17);
          }

          50% {
            opacity: 1;
            box-shadow:
              0 0 0 7px rgba(110,166,184,0);
          }
        }

        .cloudlem-hero-pulse {
          animation:
            cloudlem-hero-dot 3.2s
            ease-in-out infinite;
        }

        /* SCROLL ICON */

        @keyframes cloudlem-hero-scroll-down {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(4px);
          }
        }

        .cloudlem-hero-scroll-icon {
          animation:
            cloudlem-hero-scroll-down 2.1s
            ease-in-out infinite;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          .cloudlem-hero-reveal,
          .cloudlem-hero-highlight,
          .cloudlem-hero-float,
          .cloudlem-hero-pulse,
          .cloudlem-hero-scroll-icon {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .cloudlem-hero-scroll,
          .cloudlem-hero-scroll-icon,
          .cloudlem-hero-float * {
            transition: none !important;
          }
        }

      `}</style>

    </section>
  );
}
