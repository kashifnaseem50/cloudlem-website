
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Car,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  Hotel,
  Landmark,
  Pause,
  Play,
  RadioTower,
  ShoppingBag,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

// ==========================================
// CLOUDLEM — INDUSTRIES DATA
// ==========================================

const industries = [
  {
    name: "Public Sector",
    icon: Landmark,
    href: "/services/digital-infrastructure-services",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    href: "/services/data-management",
  },
  {
    name: "Retail & CPG",
    icon: ShoppingBag,
    href: "/services/digital-commerce",
  },
  {
    name: "Automotive",
    icon: Car,
    href: "/services/managed-services",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    href: "/services/digital-commerce",
  },
  {
    name: "Communications",
    icon: RadioTower,
    href: "/services/cloud-application-development-integration",
  },
] as const;

// ==========================================
// ANIMATION SETTINGS
// ==========================================

const ROTATION_INTERVAL_MS = 5000;
const REEL_ROW_DISTANCE = 69;

// Determine each industry's position
// relative to the selected industry.

function circularOffset(
  index: number,
  activeIndex: number,
  length: number
) {
  const forward =
    (index - activeIndex + length) % length;

  return forward > length / 2
    ? forward - length
    : forward;
}

// ==========================================
// MAIN INDUSTRIES COMPONENT
// ==========================================

export default function Industries() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Preserve Hospitality as the initial industry.
  const [activeIndex, setActiveIndex] =
    useState(4);

  // Manual and interaction controls.
  const [manualPause, setManualPause] =
    useState(false);

  const [pointerOver, setPointerOver] =
    useState(false);

  const [focusWithin, setFocusWithin] =
    useState(false);

  const [isInView, setIsInView] =
    useState(false);

  const [tabHidden, setTabHidden] =
    useState(false);

  const [announcement, setAnnouncement] =
    useState("");

  // ========================================
  // PAUSE WHEN SECTION IS OFFSCREEN
  // ========================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // ========================================
  // PAUSE WHEN BROWSER TAB IS HIDDEN
  // ========================================

  useEffect(() => {
    const updateVisibility = () => {
      setTabHidden(document.hidden);
    };

    updateVisibility();

    document.addEventListener(
      "visibilitychange",
      updateVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        updateVisibility
      );
    };
  }, []);

  // ========================================
  // AUTOMATIC ROTATION CONDITIONS
  // ========================================

  const canAutoRotate =
    !reduceMotion &&
    !manualPause &&
    !pointerOver &&
    !focusWithin &&
    isInView &&
    !tabHidden;

  useEffect(() => {
    if (!canAutoRotate) return;

    const timer = window.setInterval(() => {
      setActiveIndex(
        (index) =>
          (index + 1) % industries.length
      );
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [canAutoRotate]);

  // ========================================
  // MANUAL INDUSTRY SELECTION
  // ========================================

  const selectIndustry = (index: number) => {
    const nextIndex =
      (index + industries.length) %
      industries.length;

    setActiveIndex(nextIndex);

    // Keep manually selected industry visible
    // until the visitor resumes automatic rotation.
    setManualPause(true);

    setAnnouncement(
      `${industries[nextIndex].name} selected`
    );
  };

  const current = industries[activeIndex];
  const CurrentIcon = current.icon;

  // ========================================
  // VERTICAL REEL SPRING ANIMATION
  // ========================================

  const reelTransition = reduceMotion
    ? {
        duration: 0,
      }
    : {
        type: "spring" as const,
        stiffness: 190,
        damping: 26,
        mass: 0.9,
      };

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden bg-[#F7F5F9] py-16 text-[#211C26] sm:py-20 lg:py-24"
    >
      {/* ======================================
          PREMIUM LAVENDER BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_12%,rgba(255,255,255,0.98),transparent_62%),linear-gradient(160deg,#FBFAFC_0%,#F3EDF8_100%)]"
      />

      {/* ======================================
          MAIN TWO-COLUMN LAYOUT
      ====================================== */}

      <div className="container-systems">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">

          {/* ==================================
              LEFT CONTENT
          ================================== */}

          <div className="min-w-0 max-w-[650px]">

            {/* HEADING SCROLL REVEAL */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* SECTION LABEL */}

              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#A36BC5]"
                />

                <p className="text-[11px] font-semibold uppercase tracking-[0.19em] text-[#8952AE]">
                  Industries &amp; Solutions
                </p>
              </div>

              {/* TITLE */}

              <h2
                id="industries-heading"
                className="text-[clamp(2.2rem,4vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#201B24]"
              >
                Industries we serve
              </h2>

              {/* DESCRIPTION */}

              <p className="mt-5 max-w-[570px] text-[15px] leading-[1.85] text-[#615868] sm:text-[16px]">
                We help organizations across industries
                tackle operational challenges with practical
                technology, smarter processes, and solutions
                designed for sustainable growth.
              </p>
            </motion.div>

            {/* ==================================
                ANIMATED INDUSTRY SELECTOR
            ================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 26,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.1,
              }}
              className="mt-8 rounded-[18px] border border-[#E7DDED] bg-white/65 px-4 py-6 shadow-[0_12px_40px_rgba(67,38,87,0.04)] sm:mt-10 sm:px-7 sm:py-7"
              onPointerEnter={(event) => {
                if (
                  event.pointerType === "mouse" ||
                  event.pointerType === "pen"
                ) {
                  setPointerOver(true);
                }
              }}
              onPointerLeave={(event) => {
                if (
                  event.pointerType === "mouse" ||
                  event.pointerType === "pen"
                ) {
                  setPointerOver(false);
                }
              }}
              onFocusCapture={() => {
                setFocusWithin(true);
              }}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setFocusWithin(false);
                }
              }}
            >

              {/* SELECTOR HEADER */}

              <div className="mb-4 flex items-center justify-between gap-4">

                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#80668F]">
                  Explore by industry
                </p>

                <p className="text-[12px] font-semibold tabular-nums text-[#8663A1]">
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(industries.length).padStart(2, "0")}
                </p>

              </div>

              {/* ==================================
                  ICON AND REEL LAYOUT
              ================================== */}

              <div className="flex min-h-[208px] items-center gap-4 sm:gap-6">

                {/* ANIMATED ICON */}

                <div className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[16px] border border-[#DDC8EA] bg-gradient-to-br from-[#F4E7FA] to-[#E9D6F5] shadow-[0_10px_25px_rgba(111,58,148,0.10)] sm:h-[78px] sm:w-[78px]">

                  <AnimatePresence
                    initial={false}
                    mode="wait"
                  >
                    <motion.div
                      key={current.name}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 12,
                              scale: 0.86,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={
                        reduceMotion
                          ? {
                              opacity: 0,
                            }
                          : {
                              opacity: 0,
                              y: -12,
                              scale: 0.88,
                            }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <CurrentIcon
                        className="h-9 w-9 text-[#76449C] sm:h-11 sm:w-11"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* ==================================
                    VERTICAL ANIMATED TEXT REEL
                ================================== */}

                <div
                  role="group"
                  aria-label="Choose an industry"
                  aria-live="off"
                  className="relative h-[205px] min-w-0 flex-1 overflow-hidden"
                >

                  {/* TOP GRADIENT */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-9 bg-gradient-to-b from-white/70 to-transparent"
                  />

                  {/* BOTTOM GRADIENT */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-9 bg-gradient-to-t from-white/70 to-transparent"
                  />

                  {/* ==================================
                      ALL INDUSTRY ITEMS

                      Positions animate instead of
                      replacing the entire text block.
                  ================================== */}

                  {industries.map((industry, index) => {
                    const offset = circularOffset(
                      index,
                      activeIndex,
                      industries.length
                    );

                    const isCurrent = offset === 0;
                    const isNearby = Math.abs(offset) <= 1;

                    return (
                      <motion.button
                        key={industry.name}
                        type="button"
                        initial={false}
                        animate={{
                          y: offset * REEL_ROW_DISTANCE,
                          opacity: isCurrent
                            ? 1
                            : isNearby
                              ? 0.48
                              : 0,
                          scale: isCurrent ? 1 : 0.84,
                          color: isCurrent
                            ? "#342040"
                            : "#A593B4",
                        }}
                        transition={reelTransition}
                        style={{
                          top: "calc(50% - 27px)",
                          transformOrigin: "left center",
                          pointerEvents: isNearby
                            ? "auto"
                            : "none",
                        }}
                        onClick={() => {
                          selectIndustry(index);
                        }}
                        aria-pressed={isCurrent}
                        aria-hidden={!isNearby}
                        tabIndex={isNearby ? 0 : -1}
                        className={`absolute left-0 flex h-[54px] w-full items-center whitespace-nowrap text-left text-[clamp(1.35rem,2.6vw,2.25rem)] leading-none tracking-[-0.045em] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE] ${
                          isCurrent
                            ? "font-semibold"
                            : "font-medium"
                        }`}
                      >
                        {industry.name}
                      </motion.button>
                    );
                  })}

                </div>

              </div>

              {/* ==================================
                  CTA AND ANIMATION CONTROLS
              ================================== */}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E8DEED] pt-5">

                {/* RELATED SERVICE BUTTON */}

                <Link
                  href={current.href}
                  className="group inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[#34213F] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#754299] hover:shadow-[0_9px_25px_rgba(95,48,127,0.19)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE]"
                >
                  Explore Related Service

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </Link>

                {/* PREVIOUS / NEXT / PAUSE */}

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() => {
                      selectIndustry(activeIndex - 1);
                    }}
                    aria-label="Previous industry"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1E6] bg-white text-[#754299] transition-colors hover:border-[#AA78CA] hover:bg-[#F3EAF8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE]"
                  >
                    <ChevronUp
                      size={19}
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      selectIndustry(activeIndex + 1);
                    }}
                    aria-label="Next industry"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1E6] bg-white text-[#754299] transition-colors hover:border-[#AA78CA] hover:bg-[#F3EAF8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE]"
                  >
                    <ChevronDown
                      size={19}
                      aria-hidden="true"
                    />
                  </button>

                  {!reduceMotion && (
                    <button
                      type="button"
                      onClick={() => {
                        setManualPause(
                          (paused) => !paused
                        );
                      }}
                      aria-label={
                        manualPause
                          ? "Resume automatic industry rotation"
                          : "Pause automatic industry rotation"
                      }
                      aria-pressed={manualPause}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED1E6] bg-white text-[#754299] transition-colors hover:border-[#AA78CA] hover:bg-[#F3EAF8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE]"
                    >
                      {manualPause ? (
                        <Play
                          size={17}
                          aria-hidden="true"
                        />
                      ) : (
                        <Pause
                          size={17}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )}

                </div>

              </div>

              {/* ==================================
                  DIRECT SELECTION INDICATORS
              ================================== */}

              <div
                role="group"
                aria-label="Select industry directly"
                className="mt-5 flex items-center gap-2"
              >
                {industries.map((industry, index) => (
                  <button
                    key={industry.name}
                    type="button"
                    onClick={() => {
                      selectIndustry(index);
                    }}
                    aria-label={`Show ${industry.name}`}
                    aria-pressed={activeIndex === index}
                    className={`h-[5px] rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AE] ${
                      activeIndex === index
                        ? "w-9 bg-[#8B4EAE]"
                        : "w-5 bg-[#DFD2E7] hover:bg-[#B78CCA]"
                    }`}
                  />
                ))}
              </div>

            </motion.div>

            {/* ACCESSIBLE MANUAL ANNOUNCEMENTS */}

            <p
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              {announcement}
            </p>

          </div>

          {/* ==================================
              RIGHT PHOTOGRAPH
              EXISTING IMAGE PRESERVED
          ================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                    scale: 0.975,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative isolate min-h-[310px] overflow-hidden rounded-[18px] border border-white/70 bg-[#EAE0EE] shadow-[0_22px_65px_rgba(38,22,52,0.10)] sm:min-h-[400px] lg:h-[570px] lg:min-h-0 xl:h-[610px]"
          >

            <Image
              src="/images/industries/overview.jpg"
              alt="Modern office building and business environment"
              fill
              sizes="(min-width: 1280px) 43vw, (min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
            />

            {/* SUBTLE OVERLAY */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21132C]/25 via-transparent to-transparent"
            />

            {/* IMAGE CAPTION */}

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-[10px] border border-white/30 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[300px]">

              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#9A5DBD]"
              />

              <p className="text-[12px] font-medium leading-5 text-[#392846]">
                Practical technology for real-world challenges
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
