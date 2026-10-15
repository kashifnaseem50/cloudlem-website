"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Category =
  | "All Services"
  | "Digital"
  | "Data & Analytics"
  | "Cloud"
  | "Infrastructure & Security"
  | "Emerging Technologies"
  | "Business Process Services";

type Service = {
  title: string;
  category: Exclude<Category, "All Services">;
  description: string;
  image: string;
  href: string;
  comingSoon?: boolean;
};

const categories: Category[] = [
  "All Services",
  "Digital",
  "Data & Analytics",
  "Cloud",
  "Infrastructure & Security",
  "Emerging Technologies",
  "Business Process Services",
];

// All 20 existing services, descriptions and destinations are preserved.
const services: Service[] = [
  {
    title: "Digital Consulting & Strategy",
    category: "Digital",
    description: "Align technology with your business goals through expert digital consulting, transformation roadmaps, and strategies that create meaningful long-term value.",
    image: "/images/services/business-growth.webp",
    href: "/services/digital-consulting-strategy",
  },
  {
    title: "Digital Commerce",
    category: "Digital",
    description: "Create connected commerce experiences that bring together modern platforms, intuitive customer journeys, and reliable technology to support digital growth.",
    image: "/images/services/web-development.webp",
    href: "/services/digital-commerce",
  },
  {
    title: "Business Applications",
    category: "Digital",
    description: "Modernize business operations through connected applications, integrated workflows, and scalable digital solutions designed around your organization.",
    image: "/images/services/design-branding.webp",
    href: "/services/business-applications",
  },
  {
    title: "Data Modernization",
    category: "Data & Analytics",
    description: "Transform disconnected data into a modern, reliable foundation that improves accessibility, strengthens governance, and enables smarter business decisions.",
    image: "/images/services/cloud-devops.webp",
    href: "/services/data-modernization",
  },
  {
    title: "Advanced Analytics",
    category: "Data & Analytics",
    description: "Unlock deeper business intelligence through advanced reporting, predictive insights, and analytical solutions that turn complex data into actionable information.",
    image: "/images/services/ai-automation.webp",
    href: "/services/advanced-analytics",
  },
  {
    title: "Connected Intelligence",
    category: "Data & Analytics",
    description: "Connect people, systems, and information to improve visibility, accelerate decision-making, and build more intelligent business operations.",
    image: "/images/services/business-growth.webp",
    href: "/services/connected-intelligence",
  },
  {
    title: "Data Management",
    category: "Data & Analytics",
    description: "Build trusted information foundations with data integration, quality management, governance, and secure processes for business-critical information.",
    image: "/images/services/cloud-devops.webp",
    href: "/services/data-management",
  },
  {
    title: "Generative AI",
    category: "Data & Analytics",
    description: "Explore new possibilities with generative AI, intelligent assistants, automated workflows, and practical AI solutions built for real business challenges.",
    image: "/images/services/ai-automation.webp",
    href: "/services/generative-ai",
  },
  {
    title: "Cloud Operations & Migration",
    category: "Cloud",
    description: "Move to the cloud with confidence through secure migration strategies, reliable infrastructure, continuous monitoring, and operational optimization.",
    image: "/images/services/cloud-devops.webp",
    href: "/services/cloud-operations-migration",
  },
  {
    title: "Cloud Application Development & Integration",
    category: "Cloud",
    description: "Develop modern cloud-native applications and connect business systems through scalable architectures, secure integrations, and efficient engineering practices.",
    image: "/images/services/web-development.webp",
    href: "/services/cloud-application-development-integration",
  },
  {
    title: "Managed Services",
    category: "Cloud",
    description: "Keep technology running smoothly with infrastructure management, monitoring, ongoing support, performance optimization, and proactive operational care.",
    image: "/images/services/business-growth.webp",
    href: "/services/managed-services",
  },
  {
    title: "Digital Infrastructure Services",
    category: "Infrastructure & Security",
    description: "Build dependable technology foundations with infrastructure engineering, modern networking, system integration, and reliable operational environments.",
    image: "/images/services/cloud-devops.webp",
    href: "/services/digital-infrastructure-services",
  },
  {
    title: "Security",
    category: "Infrastructure & Security",
    description: "Strengthen your digital environment through security assessments, practical safeguards, risk reduction, and resilient infrastructure practices.",
    image: "/images/services/ai-automation.webp",
    href: "/services/security",
  },
  {
    title: "Emerging Technologies",
    category: "Emerging Technologies",
    description: "Explore the next generation of technology through emerging digital capabilities, intelligent solutions, and innovation-focused business transformation.",
    image: "/images/services/design-branding.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Contact Center",
    category: "Business Process Services",
    description: "Improve customer communication with responsive support workflows, organized service operations, and scalable customer engagement processes.",
    image: "/images/services/business-growth.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Digital Marketing",
    category: "Business Process Services",
    description: "Connect with the right audiences through digital campaigns, content strategies, brand communication, and performance-focused marketing initiatives.",
    image: "/images/services/design-branding.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Finance & Accounting",
    category: "Business Process Services",
    description: "Simplify financial operations with organized accounting processes, bookkeeping support, accurate records, and dependable financial reporting.",
    image: "/images/services/bookkeeping.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Staff Augmentation",
    category: "Business Process Services",
    description: "Extend your team's capabilities with specialized professionals, flexible staffing support, and resources aligned with changing business needs.",
    image: "/images/services/business-growth.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Legal Process Outsourcing",
    category: "Business Process Services",
    description: "Support legal operations with organized documentation, administrative assistance, structured workflows, and efficient process coordination.",
    image: "/images/services/bookkeeping.webp",
    href: "/services",
    comingSoon: true,
  },
  {
    title: "Recruitment Process Outsourcing",
    category: "Business Process Services",
    description: "Streamline recruitment processes with candidate coordination, hiring workflow support, talent sourcing assistance, and organized recruitment operations.",
    image: "/images/services/business-growth.webp",
    href: "/services",
    comingSoon: true,
  },
];

const AUTOPLAY_INTERVAL_MS = 3500;
const MANUAL_PAUSE_MS = 5000;

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);
  const manualPauseUntilRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<Category>("All Services");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const pauseAfterInteraction = () => {
    manualPauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
  };

  const updateCarouselState = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-service-card]");
    if (!card) {
      setActiveIndex(0);
      setVisibleCount(1);
      setCanPrevious(false);
      setCanNext(false);
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 20;
    const step = card.offsetWidth + gap;
    const index = step > 0 ? Math.round(carousel.scrollLeft / step) : 0;
    const count = Math.max(1, Math.floor((carousel.clientWidth + gap) / step + 0.001));
    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);

    setActiveIndex(index);
    setVisibleCount(count);
    setCanPrevious(carousel.scrollLeft > 4);
    setCanNext(carousel.scrollLeft < maxScroll - 4);
  }, []);

  // Observe the whole section so off-screen carousels do not keep moving.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Reset the carousel when a filter is selected; keep responsive arrow state.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollLeft = 0;
    directionRef.current = 1;
    manualPauseUntilRef.current = Date.now() + 3500;

    const frame = requestAnimationFrame(updateCarouselState);
    window.addEventListener("resize", updateCarouselState);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, [activeCategory, updateCarouselState]);

  // Gentle auto-scroll. At the end, travel back through cards instead of jumping.
  useEffect(() => {
    if (!autoplayEnabled || !inView || hovered || focused || touching || prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() < manualPauseUntilRef.current) return;

      const carousel = carouselRef.current;
      const card = carousel?.querySelector<HTMLElement>("[data-service-card]");
      if (!carousel || !card) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (maxScroll <= 4) return;

      const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 20;
      const step = card.offsetWidth + gap;

      if (carousel.scrollLeft >= maxScroll - 5) directionRef.current = -1;
      if (carousel.scrollLeft <= 5) directionRef.current = 1;

      carousel.scrollBy({ left: step * directionRef.current, behavior: "smooth" });
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [activeCategory, autoplayEnabled, inView, hovered, focused, touching, prefersReducedMotion]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("[data-service-card]");
    if (!carousel || !card) return;

    pauseAfterInteraction();
    directionRef.current = direction;
    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 20;
    carousel.scrollBy({
      left: (card.offsetWidth + gap) * direction,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const selectCategory = (category: Category) => {
    pauseAfterInteraction();
    setActiveCategory(category);
    setActiveIndex(0);
    setCanPrevious(false);
  };

  const displayStart = filteredServices.length ? Math.min(activeIndex + 1, filteredServices.length) : 0;
  const displayEnd = Math.min(activeIndex + visibleCount, filteredServices.length);
  const progress = filteredServices.length ? (displayEnd / filteredServices.length) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#F7F1F8] py-20 text-[#171717] sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F4E7F5_30%,#E5CEE9_65%,#FCF9FD_100%)]"
      />

      <div className="container-systems">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[760px]">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8D4BB0]">
              Technology &amp; Business Expertise
            </p>
            <h2
              id="services-heading"
              className="text-[clamp(2.7rem,4.5vw,4.5rem)] font-semibold leading-[1.07] tracking-[-0.06em] text-[#141414]"
            >
              Our services
            </h2>
            <p className="mt-4 max-w-[630px] text-[15px] leading-[1.8] text-[#5E5263]">
              Explore our technology, data, cloud, infrastructure, and business process
              services designed to support modern organizations.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-3 text-[12px] font-bold uppercase tracking-[0.035em] text-[#211828] transition-colors hover:text-[#7C38A1]"
          >
            Discover our full capabilities
            <ArrowRight
              size={21}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div aria-label="Filter services by category" className="mb-7 flex flex-wrap gap-2">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return (
              <motion.button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => selectCategory(category)}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                className={`rounded-full border px-4 py-2.5 text-[12px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#813AA5] ${
                  selected
                    ? "border-[#34213E] bg-[#34213E] text-white shadow-[0_6px_18px_rgba(78,35,107,0.16)]"
                    : "border-[#DCCBDF] bg-white/65 text-[#594C5F] hover:border-[#B990CB] hover:bg-white"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12px] text-[#76657D]">
            {autoplayEnabled && !prefersReducedMotion
              ? "Browse the cards or let them glide automatically."
              : "Browse services using the arrows or swipe."}
          </p>
          {prefersReducedMotion ? (
            <span className="text-[11px] text-[#6E3C89]">Automatic motion disabled in your device settings</span>
          ) : (
            <button
              type="button"
              onClick={() => setAutoplayEnabled((value) => !value)}
              aria-pressed={!autoplayEnabled}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCCBDF] bg-white/70 px-3.5 py-2 text-[11px] font-semibold text-[#6E3C89] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#813AA5]"
            >
              {autoplayEnabled ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
              {autoplayEnabled ? "Pause auto-scroll" : "Resume auto-scroll"}
            </button>
          )}
        </div>

        <div
          ref={carouselRef}
          onScroll={updateCarouselState}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setFocused(false);
            }
          }}
          onTouchStart={() => { setTouching(true); pauseAfterInteraction(); }}
          onTouchEnd={() => setTouching(false)}
          onTouchCancel={() => setTouching(false)}
          onWheel={pauseAfterInteraction}
          onKeyDown={(event) => {
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) pauseAfterInteraction();
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${activeCategory} service cards`}
          tabIndex={0}
          className={`flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            filteredServices.length < 4 ? "lg:justify-center" : ""
          }`}
        >
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.title}
              data-service-card
              aria-label={`${service.title}, service ${index + 1} of ${filteredServices.length}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 26, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.48, delay: (index % 4) * 0.065, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-0 h-[570px] min-w-0 basis-[86%] shrink-0 snap-start hover:z-20 focus-within:z-20 sm:h-[550px] sm:basis-[calc(50%-10px)] lg:basis-[calc(25%-15px)]"
            >
              <motion.div
                className="h-full w-full"
                whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 270, damping: 21 }}
              >
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.title}`}
                  className={`group relative flex h-full w-full flex-col overflow-hidden rounded-[15px] border border-white/80 p-6 shadow-[0_5px_18px_rgba(85,41,104,0.055)] transition-[box-shadow,border-color] duration-300 hover:border-[#C7A2DD] hover:shadow-[0_24px_55px_rgba(85,41,104,0.24)] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8645AE] sm:p-7 ${
                    index % 4 === 1 ? "bg-[#F4EBF8]" : "bg-white"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#DDB8F5]/0 blur-[40px] transition-colors duration-500 group-hover:bg-[#DDB8F5]/30"
                  />

                  <p className="relative z-10 mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8D64A2]">
                    {service.category}
                  </p>
                  <h3 className="relative z-10 text-[clamp(1.5rem,2vw,2.05rem)] font-semibold leading-[1.14] tracking-[-0.045em] text-[#18151B]">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-5 text-[14px] leading-[1.65] text-[#514A56]">
                    {service.description}
                  </p>

                  <span className="relative z-10 mt-5 inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[#201A24] transition-colors group-hover:text-[#813DA8]">
                    {service.comingSoon ? "View service overview" : "Learn more"}
                    <ArrowRight
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[185px] overflow-hidden sm:h-[195px]"
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 86vw"
                      className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.12] motion-reduce:transform-none"
                    />
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <p aria-live="polite" className="text-[12px] font-medium text-[#6D5775]">
            Showing {displayStart}–{displayEnd} of {filteredServices.length} services
          </p>

          <div
            aria-hidden="true"
            className="hidden h-[3px] max-w-[220px] flex-1 overflow-hidden rounded-full bg-[#D7C6E1] sm:block"
          >
            <div
              className="h-full rounded-full bg-[#863EAA] transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              disabled={!canPrevious}
              aria-label="Previous services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5BBDD] bg-white/70 text-[#753A97] transition-[background-color,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#9B66B6] hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8645AE]"
            >
              <ChevronLeft size={21} strokeWidth={1.7} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              disabled={!canNext}
              aria-label="Next services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5BBDD] bg-white/70 text-[#753A97] transition-[background-color,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#9B66B6] hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8645AE]"
            >
              <ChevronRight size={21} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
