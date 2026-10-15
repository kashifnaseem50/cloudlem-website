"use client";

import {

  useRef,

  useState,

} from "react";

import Image from "next/image";

import Link from "next/link";

import {

  motion,

  useReducedMotion,

} from "framer-motion";

import {

  ArrowRight,

  ArrowUpRight,

  RotateCw,

  Undo2,

  BookOpen,

} from "lucide-react";

import { insights } from "../../data/insights";

// ==========================================

// CLOUDLEM — PREMIUM FEATURED INSIGHTS

//

// FEATURES:

// - Staggered scroll entrance

// - 3D hover flip

// - Mobile tap-to-flip

// - Pop-out hover effect

// - Image zoom

// - Animated CTA arrows

// - Keyboard accessible links

// - Reduced motion support

// ==========================================

type Insight = (typeof insights)[number];

// ==========================================

// INDIVIDUAL ANIMATED INSIGHT CARD

// ==========================================

function InsightCard({

  insight,

  index,

}: {

  insight: Insight;

  index: number;

}) {

  const reduceMotion = useReducedMotion();

  const frontLinkRef =

    useRef<HTMLAnchorElement>(null);

  const backLinkRef =

    useRef<HTMLAnchorElement>(null);

  // ========================================

  // FLIP STATES

  // ========================================

  const [isHovered, setIsHovered] =

    useState(false);

  const [manualFlipped, setManualFlipped] =

    useState(false);

  const [ignoreHover, setIgnoreHover] =

    useState(false);

  const isFlipped =

    manualFlipped ||

    (isHovered && !ignoreHover);

  const articleHref =

    `/insights/${insight.slug}`;

  // ========================================

  // HOVER BEHAVIOR

  // ========================================

  const handlePointerEnter = (

    event: React.PointerEvent<HTMLElement>

  ) => {

    if (event.pointerType === "mouse") {

      setIsHovered(true);

      setIgnoreHover(false);

      if (

        document.activeElement ===

        frontLinkRef.current

      ) {

        requestAnimationFrame(() => {

          backLinkRef.current?.focus();

        });

      }

    }

  };

  const handlePointerLeave = (

    event: React.PointerEvent<HTMLElement>

  ) => {

    if (event.pointerType === "mouse") {

      setIsHovered(false);

      setManualFlipped(false);

      setIgnoreHover(false);

    }

  };

  // ========================================

  // MANUAL FLIP FOR TOUCH / KEYBOARD

  // ========================================

  const showBack = () => {

    setManualFlipped(true);

    setIgnoreHover(false);

    requestAnimationFrame(() => {

      backLinkRef.current?.focus();

    });

  };

  const showFront = () => {

    setManualFlipped(false);

    setIgnoreHover(true);

    requestAnimationFrame(() => {

      frontLinkRef.current?.focus();

    });

  };

  return (

    <motion.article

      initial={

        reduceMotion

          ? false

          : {

              opacity: 0,

              y: 25,

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

      whileHover={

        reduceMotion

          ? undefined

          : {

              y: -8,

              scale: 1.018,

            }

      }

      transition={{

        duration: reduceMotion

          ? 0

          : 0.55,

        delay: reduceMotion

          ? 0

          : (index % 4) * 0.075,

        ease: [0.22, 1, 0.36, 1],

      }}

      onPointerEnter={handlePointerEnter}

      onPointerLeave={handlePointerLeave}

      className="group relative h-[445px] min-w-0 rounded-[16px] [perspective:1200px] hover:z-20 focus-within:z-20 sm:h-[435px] lg:h-[445px] xl:h-[455px]"

    >

      {/* ======================================

          ANIMATED 3D FLIP CONTAINER

      ====================================== */}

      <div

        className="relative h-full w-full rounded-[16px] shadow-[0_5px_20px_rgba(20,10,30,0.07)] transition-[transform,box-shadow] group-hover:shadow-[0_24px_55px_rgba(80,38,109,0.22)] group-focus-within:shadow-[0_15px_40px_rgba(80,38,109,0.16)]"

        style={{

          transformStyle: "preserve-3d",

          transform: isFlipped

            ? "rotateY(180deg)"

            : "rotateY(0deg)",

          transitionDuration: reduceMotion

            ? "0ms"

            : "650ms",

          transitionTimingFunction:

            "cubic-bezier(0.22, 1, 0.36, 1)",

        }}

      >

        {/* ==================================

            FRONT FACE

        ================================== */}

        <div

          aria-hidden={isFlipped}

          className="absolute inset-0 overflow-hidden rounded-[16px] bg-[#F5EDF9]"

          style={{

            backfaceVisibility: "hidden",

            WebkitBackfaceVisibility: "hidden",

            pointerEvents: isFlipped

              ? "none"

              : "auto",

          }}

        >

          {/* FULL ARTICLE LINK */}

          <Link

            ref={frontLinkRef}

            href={articleHref}

            tabIndex={isFlipped ? -1 : 0}

            aria-label={`Read ${insight.title}`}

            className="flex h-full w-full flex-col focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#CC9AE8]"

          >

            {/* ==============================

                ARTICLE IMAGE

            ============================== */}

            <div className="relative h-[210px] w-full shrink-0 overflow-hidden bg-[#281B33] sm:h-[205px] lg:h-[195px] xl:h-[220px]">

              <Image

                src={insight.image}

                alt={insight.imageAlt}

                fill

                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"

                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07] group-focus-within:scale-[1.04] motion-reduce:transform-none"

              />

              {/* SUBTLE IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21152E]/15 via-transparent to-transparent" />

            </div>

            {/* ==============================

                CHARCOAL CONTENT PANEL

            ============================== */}

            <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-br from-[#F8F3FC] to-[#EEE2F6] px-5 pb-6 pt-5 xl:px-6">

              {/* ARTICLE CATEGORY */}

              <p className="text-[10px] font-bold uppercase leading-[1.5] tracking-[0.16em] text-[#8852AE] transition-colors duration-300 group-hover:text-[#6C348F]">

                {insight.category}

              </p>

              {/* ARTICLE TITLE */}

              <h3 className="mt-3 line-clamp-4 text-[18px] font-semibold leading-[1.36] tracking-[-0.03em] text-[#291D35] xl:text-[19px]">

                {insight.title}

              </h3>

              {/* READ ARTICLE FOOTER */}

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#D9C8E5] pt-4">

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#77469A] transition-colors duration-300 group-hover:text-[#442657]">

                  Read Insight

                </span>

                <ArrowUpRight

                  size={19}

                  strokeWidth={1.7}

                  className="text-[#77469A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"

                  aria-hidden="true"

                />

              </div>

            </div>

          </Link>

          {/* ==============================

              MOBILE / KEYBOARD FLIP BUTTON

          ============================== */}

          <button

            type="button"

            onClick={showBack}

            tabIndex={isFlipped ? -1 : 0}

            aria-label={`Flip ${insight.title} card to see article details`}

            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#20152E]/75 text-white backdrop-blur-md transition-colors hover:bg-[#754B98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

          >

            <RotateCw

              size={16}

              strokeWidth={1.8}

              aria-hidden="true"

            />

          </button>

        </div>

        {/* ==================================

            BACK FACE

        ================================== */}

        <div

          aria-hidden={!isFlipped}

          className="absolute inset-0 overflow-hidden rounded-[16px] bg-gradient-to-br from-[#261831] via-[#432856] to-[#6C4387] text-white"

          style={{

            transform: "rotateY(180deg)",

            backfaceVisibility: "hidden",

            WebkitBackfaceVisibility: "hidden",

            pointerEvents: isFlipped

              ? "auto"

              : "none",

          }}

        >

          {/* DECORATIVE GLOW */}

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -right-16 -top-16 h-[240px] w-[240px] rounded-full bg-[#B982E4]/25 blur-[65px]"

          />

          {/* CIRCLE DECORATION */}

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -bottom-16 -left-16 h-[210px] w-[210px] rounded-full border border-white/10"

          />

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -bottom-7 -left-7 h-[155px] w-[155px] rounded-full border border-white/10"

          />

          {/* BACK CONTENT */}

          <div className="relative z-10 flex h-full flex-col p-6 xl:p-7">

            {/* BACK HEADER */}

            <div className="flex items-start justify-between gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/10">

                <BookOpen

                  size={21}

                  strokeWidth={1.6}

                  className="text-[#E8C8FA]"

                  aria-hidden="true"

                />

              </div>

              {/* RETURN BUTTON */}

              <button

                type="button"

                onClick={showFront}

                tabIndex={isFlipped ? 0 : -1}

                aria-label={`Flip ${insight.title} card back to preview`}

                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

              >

                <Undo2

                  size={17}

                  strokeWidth={1.7}

                  aria-hidden="true"

                />

              </button>

            </div>

            {/* CATEGORY */}

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8AFE9]">

              {insight.category}

            </p>

            {/* TITLE */}

            <h3 className="mt-3 line-clamp-4 text-[clamp(1.3rem,1.7vw,1.65rem)] font-semibold leading-[1.25] tracking-[-0.035em] text-white">

              {insight.title}

            </h3>

            {/* DESCRIPTION */}

            <p className="mt-4 line-clamp-3 text-[13px] leading-[1.75] text-[#E0D0E8]">

              Explore the complete article and

              discover ideas, perspectives, and

              practical takeaways for modern

              businesses.

            </p>

            {/* ==============================

                READ FULL ARTICLE BUTTON

            ============================== */}

            <Link

              ref={backLinkRef}

              href={articleHref}

              tabIndex={isFlipped ? 0 : -1}

              className="group/link mt-auto inline-flex min-h-[46px] w-full items-center justify-between gap-3 rounded-[6px] bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#32203F] transition-[background-color,box-shadow] duration-300 hover:bg-[#F0DEF9] hover:shadow-[0_8px_24px_rgba(15,6,24,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

            >

              Read Full Insight

              <ArrowRight

                size={17}

                strokeWidth={1.8}

                className="transition-transform duration-300 group-hover/link:translate-x-1"

                aria-hidden="true"

              />

            </Link>

          </div>

        </div>

      </div>

    </motion.article>

  );

}

// ==========================================

// FEATURED INSIGHTS SECTION

// ==========================================

export default function Insights() {

  const reduceMotion = useReducedMotion();

  return (

    <section

      id="insights"

      aria-labelledby="featured-insights-heading"

      className="relative w-full overflow-x-clip bg-white py-16 text-[#171717] sm:py-20 lg:py-24"

    >

      <div className="container-systems">

        {/* ==================================

            SECTION HEADING

        ================================== */}

        <motion.div

          initial={

            reduceMotion

              ? false

              : {

                  opacity: 0,

                  y: 18,

                }

          }

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.4,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.55,

            ease: [0.22, 1, 0.36, 1],

          }}

          className="mb-10 sm:mb-11"

        >

          {/* EYEBROW */}

          <div className="mb-4 flex items-center gap-3">

            <span

              aria-hidden="true"

              className="h-px w-8 bg-[#A66BCC]"

            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8752AA]">

              Ideas & Perspectives

            </p>

          </div>

          {/* MAIN HEADING */}

          <h2

            id="featured-insights-heading"

            className="text-[clamp(2.2rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-[#171717]"

          >

            Featured insights

          </h2>

          {/* DESCRIPTION */}

          <p className="mt-4 max-w-[650px] text-[14px] leading-[1.85] text-[#69616F] sm:text-[15px]">

            Explore our perspectives on emerging

            technologies, digital transformation,

            cloud innovation, and the ideas

            shaping modern business.

          </p>

        </motion.div>

        {/* ==================================

            RESPONSIVE INSIGHT CARD GRID

        ================================== */}

        <div className="grid grid-cols-1 items-stretch gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">

          {insights.map((insight, index) => (

            <InsightCard

              key={insight.slug}

              insight={insight}

              index={index}

            />

          ))}

        </div>

      </div>

    </section>

  );

}
