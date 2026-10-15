"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

// ==========================================
// CLOUDLEM — TECHNOLOGY ECOSYSTEM
// Animated marquee + accessible manual browsing
// ==========================================

type Platform = {
  name: string;
  logo: string;
  width: number;
};

const platforms: Platform[] = [
  { name: "Microsoft", logo: "/images/logos/microsoft.svg", width: 130 },
  { name: "Temenos", logo: "/images/logos/temenos.svg", width: 130 },
  { name: "SAP", logo: "/images/logos/sap.svg", width: 100 },
  { name: "IBM", logo: "/images/logos/ibm.svg", width: 112 },
  { name: "Salesforce", logo: "/images/logos/salesforce.svg", width: 108 },
  { name: "Oracle", logo: "/images/logos/oracle.svg", width: 130 },
  { name: "Red Hat", logo: "/images/logos/redhat.svg", width: 105 },
  { name: "ServiceNow", logo: "/images/logos/servicenow.svg", width: 130 },
  { name: "AWS", logo: "/images/logos/aws.svg", width: 95 },
  { name: "Microsoft Azure", logo: "/images/logos/azure.svg", width: 85 },
  { name: "Google Cloud", logo: "/images/logos/google-cloud.svg", width: 108 },
  { name: "QuickBooks", logo: "/images/logos/quickbooks.svg", width: 100 },
  { name: "Xero", logo: "/images/logos/xero.svg", width: 74 },
];

const MARQUEE_DURATION_SECONDS = 48;
// When a logo reaches the visual center, it rises and grows automatically.
const SPOTLIGHT_RISE_PX = 32;
const SPOTLIGHT_SCALE = 0.24;
const SPOTLIGHT_RADIUS_IN_CARDS = 1.6;


function PlatformCard({
  platform,
  eager = false,
}: {
  platform: Platform;
  eager?: boolean;
}) {
  return (
    <li className="cloudlem-platform-slot relative shrink-0 overflow-visible">
      <div className="cloudlem-platform-card group absolute inset-0 flex items-center justify-center rounded-[15px] border border-[#E4D7EC] bg-white px-5">
        <span
          aria-hidden="true"
          className="cloudlem-platform-glow pointer-events-none absolute inset-0 rounded-[inherit]"
        />
        <Image
          src={platform.logo}
          alt={`${platform.name} logo`}
          width={platform.width}
          height={55}
          loading={eager ? "eager" : "lazy"}
          unoptimized
          draggable={false}
          style={{ width: platform.width, height: "auto" }}
          className="cloudlem-platform-logo relative z-10 max-h-[58px] max-w-[140px] object-contain sm:max-w-[160px]"
        />
      </div>
    </li>
  );
}

/**
 * Directly adjust a few CSS variables rather than rerendering 26 React
 * cards every animation frame. The outer slot stays fixed in the flex row,
 * so magnifying the inner card never disturbs the seamless marquee.
 */
function setCardSpotlight(slot: HTMLElement, strength: number) {
  const eased = strength * strength * (3 - 2 * strength);
  if (eased < 0.001) {
    slot.style.removeProperty("--spotlight-y");
    slot.style.removeProperty("--spotlight-scale");
    slot.style.removeProperty("--spotlight-opacity");
    slot.style.zIndex = "0";
    return;
  }
  slot.style.setProperty("--spotlight-y", `${(-SPOTLIGHT_RISE_PX * eased).toFixed(2)}px`);
  slot.style.setProperty("--spotlight-scale", (1 + SPOTLIGHT_SCALE * eased).toFixed(4));
  slot.style.setProperty("--spotlight-opacity", eased.toFixed(3));
  slot.style.zIndex = String(Math.ceil(eased * 20));
}

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  const marqueeViewportRef = useRef<HTMLDivElement | null>(null);
  const manualRef = useRef<HTMLUListElement | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    scrollLeft: number;
  } | null>(null);
  const pendingManualScrollRef = useRef(0);

  const [inView, setInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Pause the marquee when the section is offscreen.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { rootMargin: "50px 0px 50px 0px", threshold: 0.01 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Pause the marquee while the browser tab is hidden.
  useEffect(() => {
    const updateVisibility = () => setTabHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  // Continuously track the moving row's center logo. We measure slot
  // positions only on mount/resize, then read a single track rectangle per
  // animation frame. No React state updates happen during the animation.
  useEffect(() => {
    const track = marqueeTrackRef.current;
    const viewport = marqueeViewportRef.current;
    if (!track || !viewport || !inView || tabHidden || userPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const slots = Array.from(
      track.querySelectorAll<HTMLElement>(".cloudlem-platform-slot")
    );
    let relativeCenters: number[] = [];
    let slotWidths: number[] = [];
    let raf = 0;
    let previousNear = new Set<number>();

    const measure = () => {
      const trackLeft = track.getBoundingClientRect().left;
      relativeCenters = slots.map((slot) => {
        const rect = slot.getBoundingClientRect();
        return rect.left - trackLeft + rect.width / 2;
      });
      slotWidths = slots.map((slot) => slot.getBoundingClientRect().width);
    };

    const tick = () => {
      const trackLeft = track.getBoundingClientRect().left;
      const viewportRect = viewport.getBoundingClientRect();
      const center = viewportRect.left + viewportRect.width / 2;
      const activeNow = new Set<number>();

      for (let index = 0; index < slots.length; index += 1) {
        const distance = Math.abs(trackLeft + relativeCenters[index] - center);
        const radius = slotWidths[index] * SPOTLIGHT_RADIUS_IN_CARDS;
        if (distance >= radius) continue;

        const strength = Math.max(0, 1 - distance / radius);
        setCardSpotlight(slots[index], strength);
        activeNow.add(index);
      }

      for (const index of previousNear) {
        if (!activeNow.has(index)) setCardSpotlight(slots[index], 0);
      }
      previousNear = activeNow;
      raf = window.requestAnimationFrame(tick);
    };

    measure();
    raf = window.requestAnimationFrame(tick);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      for (const slot of slots) setCardSpotlight(slot, 0);
    };
  }, [inView, tabHidden, userPaused]);

  // Manual browsing retains the same centered pop-out effect when visitors
  // drag, swipe, or use the arrow buttons.
  const syncManualSpotlight = useCallback(() => {
    const container = manualRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.left + containerRect.width / 2;
    const slots = container.querySelectorAll<HTMLElement>(".cloudlem-platform-slot");
    slots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      const radius = rect.width * SPOTLIGHT_RADIUS_IN_CARDS;
      setCardSpotlight(slot, Math.max(0, 1 - distance / radius));
    });
  }, []);

  const syncManualControls = useCallback(() => {
    const container = manualRef.current;
    if (!container) return;
    const end = Math.max(0, container.scrollWidth - container.clientWidth);
    setCanPrevious(container.scrollLeft > 3);
    setCanNext(container.scrollLeft < end - 3);
    syncManualSpotlight();
  }, [syncManualSpotlight]);

  // When the visitor clicks Pause, show a manually scrollable copy of
  // the logos, starting near the same logo visible in the animated row.
  useEffect(() => {
    if (!userPaused) return;
    const container = manualRef.current;
    if (!container) return;
    container.scrollLeft = Math.min(
      pendingManualScrollRef.current,
      Math.max(0, container.scrollWidth - container.clientWidth)
    );
    syncManualControls();
    window.requestAnimationFrame(syncManualControls);
    window.addEventListener("resize", syncManualControls);
    return () => window.removeEventListener("resize", syncManualControls);
  }, [userPaused, syncManualControls]);

  const pauseOrResume = () => {
    if (userPaused) {
      setUserPaused(false);
      return;
    }

    // Capture the current CSS animation position before swapping to
    // the native-scroll browsing mode. This avoids a big position jump.
    const track = marqueeTrackRef.current;
    if (track && typeof DOMMatrixReadOnly !== "undefined") {
      try {
        const transform = window.getComputedStyle(track).transform;
        pendingManualScrollRef.current = Math.max(
          0,
          -new DOMMatrixReadOnly(transform).m41
        );
      } catch {
        pendingManualScrollRef.current = 0;
      }
    } else {
      pendingManualScrollRef.current = 0;
    }

    setUserPaused(true);
  };

  const scrollManual = (direction: -1 | 1) => {
    const container = manualRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(
      ".cloudlem-platform-slot"
    );
    const gap = parseFloat(window.getComputedStyle(container).columnGap) || 16;
    const step = (card?.offsetWidth ?? 205) + gap;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    container.scrollBy({
      left: direction * step,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  const isAnimationPaused = userPaused || !inView || tabHidden;
  const trackStyle: CSSProperties = {
    animationDuration: `${MARQUEE_DURATION_SECONDS}s`,
    animationPlayState: isAnimationPaused ? "paused" : "running",
  };

  return (
    <section
      ref={sectionRef}
      id="technology-ecosystem"
      aria-labelledby="technology-heading"
      data-entered={hasEntered ? "true" : "false"}
      className="cloudlem-ecosystem relative isolate w-full overflow-hidden border-t border-[#EDE6F1] bg-[#F8F7FA] py-16 text-[#211C26] sm:py-20 lg:py-[84px]"
    >
      {/* Gentle brand-colored background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_4%,rgba(255,255,255,1),transparent_57%),linear-gradient(180deg,#FBFAFC_0%,#F6F2F9_100%)]"
      />

      <div className="container-systems">
        <div className="grid items-start gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div className="cloudlem-reveal cloudlem-reveal-one min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#A66BCB]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8852AE]">
                Our Technology Ecosystem
              </p>
            </div>
            <h2
              id="technology-heading"
              className="max-w-[690px] text-[clamp(2rem,3.1vw,2.8rem)] font-semibold leading-[1.13] tracking-[-0.045em] text-[#201A25]"
            >
              Powered by technology.
              <span className="block">Driven by expertise.</span>
            </h2>
          </div>

          <p className="cloudlem-reveal cloudlem-reveal-two max-w-[450px] text-[14px] leading-[1.85] text-[#605668] sm:text-[15px] lg:justify-self-end">
            We combine modern technologies, cloud platforms, and specialized
            expertise to help businesses build, operate, and grow with confidence.
          </p>
        </div>

        <div className="cloudlem-reveal cloudlem-reveal-three mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DFEB] pt-6 sm:mt-12">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#38313D]">
              Technologies We Work With
            </h3>
            <p className="mt-1 text-[12px] text-[#807587]">
              Enterprise platforms, cloud, and business systems
            </p>
          </div>

          <div className="cloudlem-motion-controls flex flex-wrap items-center gap-2">
            {userPaused && (
              <>
                <button
                  type="button"
                  onClick={() => scrollManual(-1)}
                  disabled={!canPrevious}
                  aria-label="Previous technology logos"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DACCE3] bg-white text-[#6E3F89] transition-colors hover:border-[#B48ACB] hover:bg-[#F4EAF9] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8852AE]"
                >
                  <ArrowLeft size={17} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollManual(1)}
                  disabled={!canNext}
                  aria-label="Next technology logos"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DACCE3] bg-white text-[#6E3F89] transition-colors hover:border-[#B48ACB] hover:bg-[#F4EAF9] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8852AE]"
                >
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={pauseOrResume}
              aria-pressed={userPaused}
              aria-label={
                userPaused
                  ? "Resume automatic technology logo scrolling"
                  : "Pause technology logo scrolling and browse manually"
              }
              className="cloudlem-motion-control inline-flex min-h-10 items-center gap-2 rounded-full border border-[#DACCE3] bg-white px-4 py-2 text-[12px] font-semibold text-[#68427E] shadow-[0_3px_12px_rgba(41,23,52,0.04)] transition-colors hover:border-[#B68CCB] hover:bg-[#F8F2FC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8852AE]"
            >
              {userPaused ? (
                <Play size={15} fill="currentColor" aria-hidden="true" />
              ) : (
                <Pause size={15} aria-hidden="true" />
              )}
              {userPaused ? "Resume" : "Pause & browse"}
            </button>
          </div>
        </div>
      </div>

      {/* AUTO MARQUEE — two equal groups create a seamless loop */}
      <div
        ref={marqueeViewportRef}
        className={`cloudlem-reveal cloudlem-reveal-four cloudlem-marquee-viewport relative w-full overflow-hidden py-16 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8852AE] ${userPaused ? "hidden" : "block"}`}
        role="region"
        aria-label="Animated technology platform logos"
        aria-hidden={userPaused ? true : undefined}
        tabIndex={userPaused ? -1 : 0}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-7 bg-gradient-to-r from-[#F7F5F9] to-transparent sm:w-16 lg:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-7 bg-gradient-to-l from-[#F7F5F9] to-transparent sm:w-16 lg:w-24"
        />
        <div
          ref={marqueeTrackRef}
          className="cloudlem-marquee-track flex w-max flex-nowrap items-center"
          style={trackStyle}
        >
          {[0, 1].map((copyIndex) => (
            <ul
              key={copyIndex}
              role="list"
              aria-hidden={copyIndex === 1 ? true : undefined}
              className="flex shrink-0 flex-nowrap items-center gap-4 pr-4"
            >
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={`${copyIndex}-${platform.name}`}
                  platform={platform}
                  eager={copyIndex === 0 && index < 6}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* MANUAL MODE — native scrolling, mouse drag, touch swipe and arrows */}
      {userPaused && (
        <div className="cloudlem-manual-mode relative w-full py-14">
          <ul
            ref={manualRef}
            role="list"
            onScroll={syncManualControls}
            aria-label="Browse technology logos manually. Use left and right arrow keys or the controls above."
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollManual(-1);
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollManual(1);
              }
            }}
            onPointerDown={(event) => {
              if (event.pointerType === "touch" || event.button !== 0) return;
              dragRef.current = {
                pointerId: event.pointerId,
                startX: event.clientX,
                scrollLeft: event.currentTarget.scrollLeft,
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const drag = dragRef.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              event.preventDefault();
              event.currentTarget.scrollLeft =
                drag.scrollLeft - (event.clientX - drag.startX);
            }}
            onPointerUp={() => {
              dragRef.current = null;
            }}
            onPointerCancel={() => {
              dragRef.current = null;
            }}
            onLostPointerCapture={() => {
              dragRef.current = null;
            }}
            className="flex cursor-grab select-none items-center gap-4 overflow-x-auto overscroll-x-contain px-4 pb-10 pt-9 outline-none [scrollbar-width:thin] active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8852AE] sm:px-8 lg:px-12"
          >
            {platforms.map((platform) => (
              <PlatformCard key={`manual-${platform.name}`} platform={platform} eager />
            ))}
          </ul>
          <p className="mt-1 text-center text-[11px] text-[#85768C]">
            Drag, swipe, or use the arrows to explore all 13 technologies.
          </p>
        </div>
      )}

      {/* Static, accessible layout for visitors who prefer reduced motion */}
      <div className="container-systems">
        <ul
          role="list"
          aria-label="Technology platforms"
          className="cloudlem-static-platforms grid-cols-2 gap-3 py-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {platforms.map((platform) => (
            <PlatformCard key={`static-${platform.name}`} platform={platform} />
          ))}
        </ul>
        <p className="cloudlem-reveal cloudlem-reveal-four mt-1 text-center text-[12px] leading-6 text-[#827789]">
          Technology choices shaped around your business needs.
        </p>
        <p aria-live="polite" className="cloudlem-motion-status sr-only">
          {userPaused
            ? "Automatic logo movement paused. Manual browsing enabled."
            : "Automatic logo movement enabled. Hover or focus to pause temporarily."}
        </p>
      </div>

      <style>{`
        @keyframes cloudlem-marquee-scroll {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }
        @keyframes cloudlem-entrance {
          from { opacity: 0; transform: translate3d(0,20px,0); }
          to { opacity: 1; transform: translate3d(0,0,0); }
        }
        .cloudlem-marquee-track {
          animation-name: cloudlem-marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        /* The slot never scales, only its child card does. This prevents
           flex gaps changing and keeps the -50% animation loop seamless. */
        .cloudlem-platform-slot { width: 174px; height: 104px; }
        .cloudlem-platform-card {
          background: linear-gradient(150deg,#FFFFFF 0%,#FBF7FE 100%);
          box-shadow: 0 7px 20px rgba(61, 34, 84, .09);
          transform: translate3d(0,var(--spotlight-y,0px),0)
            scale(var(--spotlight-scale,1));
          transform-origin: center center;
          border-color: #E4D7EC;
        }
        .cloudlem-platform-slot {
          --spotlight-opacity: 0;
        }
        .cloudlem-platform-glow {
          background: radial-gradient(circle at 50% 60%,
            rgba(183,119,233,.19),transparent 77%);
          box-shadow: 0 22px 52px rgba(100,54,139,.22),
            0 0 0 1px rgba(168,93,219,.28);
          opacity: var(--spotlight-opacity,0);
        }
        /* Always show the actual SVG colors, even without hovering.
           A logo embedded as gray in the SVG itself must be replaced at source. */
        .cloudlem-platform-logo {
          opacity: 1;
          filter: none;
          transform: translateZ(0);
        }
        .cloudlem-static-platforms { display: none; }

        .cloudlem-ecosystem[data-entered="true"] .cloudlem-reveal {
          animation: cloudlem-entrance 650ms cubic-bezier(.22,1,.36,1) both;
        }
        .cloudlem-ecosystem[data-entered="true"] .cloudlem-reveal-two { animation-delay: 100ms; }
        .cloudlem-ecosystem[data-entered="true"] .cloudlem-reveal-three { animation-delay: 190ms; }
        .cloudlem-ecosystem[data-entered="true"] .cloudlem-reveal-four { animation-delay: 275ms; }
        @media (min-width:640px) {
          .cloudlem-platform-slot { width:205px;height:112px; }
        }
        @media (hover:hover) and (pointer:fine) {
          .cloudlem-marquee-viewport:hover .cloudlem-marquee-track {
            animation-play-state: paused !important;
          }
          /* Any hovered moving card can also be examined in the paused row. */
          .cloudlem-marquee-viewport .cloudlem-platform-slot:hover .cloudlem-platform-card {
            transform: translate3d(0,-32px,0) scale(1.24);
            border-color: #B978D6;
            box-shadow: 0 24px 55px rgba(108,55,148,.22);
            transition: transform 280ms cubic-bezier(.22,1,.36,1),
              box-shadow 280ms ease,border-color 280ms ease;
          }
          /* When manually browsing, hover produces a small extra lift. */
          .cloudlem-manual-mode .cloudlem-platform-slot:hover .cloudlem-platform-card,
          .cloudlem-static-platforms .cloudlem-platform-slot:hover .cloudlem-platform-card {
            transform: translate3d(0,-12px,0) scale(1.09);
            border-color: #B978D6;
            box-shadow: 0 24px 45px rgba(108,55,148,.2);
          }
          .cloudlem-manual-mode .cloudlem-platform-card,
          .cloudlem-static-platforms .cloudlem-platform-card {
            transition: transform 350ms cubic-bezier(.22,1,.36,1),
              box-shadow 350ms ease,border-color 350ms ease;
          }
        }
        .cloudlem-marquee-viewport:focus-within .cloudlem-marquee-track,
        .cloudlem-ecosystem:focus-within .cloudlem-marquee-track {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion:reduce) {
          .cloudlem-marquee-viewport,.cloudlem-manual-mode,
          .cloudlem-motion-controls,.cloudlem-motion-status { display:none !important; }
          .cloudlem-static-platforms { display:grid; }
          .cloudlem-static-platforms .cloudlem-platform-slot {
            width:100%;height:108px;
          }
          .cloudlem-platform-card { transition:none !important; transform:none !important; }
          .cloudlem-platform-slot:hover .cloudlem-platform-card { transform:none !important; }
          .cloudlem-platform-glow { display:none; }
          .cloudlem-platform-logo { opacity:1;filter:none;transition:none; }
          .cloudlem-ecosystem[data-entered="true"] .cloudlem-reveal { animation:none; }
        }
      `}</style>
    </section>
  );
}
