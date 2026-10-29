
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// ==========================================
// CLOUDLEM — REFINED CINEMATIC NAVBAR
//
// THEME:
// Charcoal / Steel Blue / Warm Silver
//
// FEATURES:
// - Transparent over homepage Hero
// - Dark glass navbar on scroll
// - Solid navbar on interior pages
// - Auto-hide on downward scrolling
// - Premium frosted mega menus
// - Hover and keyboard interactions
// - Animated mobile accordion
// - Original multicolor logo preserved
// - Standalone Bookkeeping navigation
// ==========================================

type MenuKey =
  | "services"
  | "industries"
  | "company";

type MenuLink = {
  label: string;
  href: string;
  description?: string;
};

type MenuGroup = {
  title: string;
  href?: string;
  links?: MenuLink[];
};

type MenuConfig = {
  eyebrow: string;
  heading: string;
  overview: {
    label: string;
    href: string;
  };
  columns: MenuGroup[][];
};

// ==========================================
// NAVIGATION DATA
// Service links aligned with existing Next.js routes.
// Security includes three dedicated service pages.
// ==========================================

const menus: Record<MenuKey, MenuConfig> = {
  services: {
    eyebrow: "Our Expertise",
    heading: "Technology & Business Services",
    overview: {
      label: "View All Services",
      href: "/services",
    },
    columns: [
      [
        {
          title: "Digital",
          links: [
            {
              label: "Digital Consulting & Strategy",
              href: "/services/digital-consulting-strategy",
            },
            {
              label: "Digital Commerce",
              href: "/services/digital-commerce",
            },
            {
              label: "Business Applications",
              href: "/services/business-applications",
            },
          ],
        },
        {
          title: "Data & Analytics",
          links: [
            {
              label: "Data Modernization",
              href: "/services/data-modernization",
            },
            {
              label: "Advanced Analytics",
              href: "/services/advanced-analytics",
            },
            {
              label: "Connected Intelligence",
              href: "/services/connected-intelligence",
            },
            {
              label: "Data Management",
              href: "/services/data-management",
            },
            {
              label: "Generative AI",
              href: "/services/generative-ai",
            },
          ],
        },
        {
          title: "Cloud",
          links: [
            {
              label: "Cloud Operations & Migration",
              href: "/services/cloud-operations-migration",
            },
            {
              label:
                "Cloud Application Development & Integration",
              href:
                "/services/cloud-application-development-integration",
            },
            {
              label: "Managed Services",
              href: "/services/managed-services",
            },
          ],
        },
      ],
      [
        {
          title: "Digital Infrastructure Services",
          href: "/services/digital-infrastructure-services",
        },
        {
          title: "Security",
          href: "/services/security",
          links: [
            {
              label: "DevSecOps & CI/CD Security",
              href: "/services/security/devsecops",
            },
            {
              label: "Cloud Security & Posture Management",
              href: "/services/security/cloud-security",
            },
            {
              label: "Kubernetes & Container Security",
              href: "/services/security/kubernetes-security",
            },
          ],
        },
        {
          title: "Business Process Services",
          links: [
            {
              label: "Contact Center",
              href: "/services/contact-center",
            },
            {
              label: "Digital Marketing",
              href: "/services/digital-marketing",
            },
            {
              label: "Staff Augmentation",
              href: "/services/staff-augmentation",
            },
            {
              label: "Finance & Accounting",
              href: "/services/finance-accounting",
            },
          ],
        },
        {
          title: "Explore Solutions",
          href: "/solutions",
        },
      ],
    ],
  },

  industries: {
    eyebrow: "Who We Serve",
    heading: "Industries We Work With",
    overview: {
      label: "View All Industries",
      href: "/industries",
    },
    columns: [
      [
        {
          title: "People & Communities",
          links: [
            {
              label: "Healthcare",
              href: "/industries",
              description:
                "Digital systems and operational workflows",
            },
            {
              label: "Education",
              href: "/industries",
              description:
                "Learning platforms and digital operations",
            },
          ],
        },
      ],
      [
        {
          title: "Business & Commerce",
          links: [
            {
              label: "Retail & E-commerce",
              href: "/industries",
              description:
                "Commerce platforms and customer experiences",
            },
            {
              label: "Professional Services",
              href: "/industries",
              description:
                "Business workflows, reporting and automation",
            },
          ],
        },
      ],
    ],
  },

  company: {
    eyebrow: "Discover Cloudlem",
    heading: "Company & Insights",
    overview: {
      label: "Contact Cloudlem",
      href: "/contact",
    },
    columns: [
      [
        {
          title: "Our Company",
          links: [
            {
              label: "About Cloudlem",
              href: "/about",
              description:
                "Our vision, mission and values",
            },
            {
              label: "Careers",
              href: "/careers",
              description:
                "Explore opportunities at Cloudlem",
            },
          ],
        },
      ],
      [
        {
          title: "Explore & Connect",
          links: [
            {
              label: "Blog & Insights",
              href: "/blog",
              description:
                "Engineering knowledge and perspectives",
            },
            {
              label: "Get in Touch",
              href: "/contact",
              description:
                "Start a conversation with our team",
            },
          ],
        },
      ],
    ],
  },
};

const labels: Record<MenuKey, string> = {
  services: "Services",
  industries: "Industries",
  company: "Company",
};

const menuKeys: MenuKey[] = [
  "services",
  "industries",
  "company",
];

// ==========================================
// PREMIUM DESKTOP MEGA MENU
// Existing design preserved
// ==========================================

function MegaMenu({
  menuKey,
  pathname,
  onNavigate,
}: {
  menuKey: MenuKey;
  pathname: string;
  onNavigate: () => void;
}) {
  const config = menus[menuKey];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id={`desktop-${menuKey}-menu`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: -10 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={
        reduceMotion
          ? undefined
          : { opacity: 0, y: -8 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.23,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-x-0 top-full z-20"
    >
      <div className="mx-auto max-h-[calc(100dvh-90px)] w-[calc(100%-32px)] max-w-[1190px] overflow-y-auto overscroll-contain rounded-b-[16px] border border-[#D5E0E2] bg-[#F6F8F8] text-[#17252D] shadow-[0_32px_75px_rgba(9,20,27,0.28)]">

        {/* MEGA MENU HEADER */}

        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#DBE4E5] px-7 py-6 sm:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#557786]">
              {config.eyebrow}
            </p>

            <p className="mt-2 text-[19px] font-semibold tracking-[-0.035em] text-[#17252D]">
              {config.heading}
            </p>
          </div>

          <Link
            href={config.overview.href}
            onClick={onNavigate}
            className="group inline-flex min-h-10 items-center gap-2 rounded-sm text-[11px] font-bold uppercase tracking-[0.08em] text-[#355969] hover:text-[#111C23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#537F93]"
          >
            {config.overview.label}

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MEGA MENU COLUMNS */}

        <div className="grid grid-cols-2 gap-x-12 px-7 py-8 sm:px-10 lg:gap-x-20">
          {config.columns.map((column, index) => (
            <div
              key={index}
              className="min-w-0 space-y-7"
            >
              {column.map((group) => (
                <section
                  key={group.title}
                  className="min-w-0"
                >
                  {/* CATEGORY */}

                  {group.href ? (
                    <Link
                      href={group.href}
                      onClick={onNavigate}
                      aria-current={pathname === group.href ? "page" : undefined}
                      className="group inline-flex items-start gap-2 rounded-sm text-[16px] font-semibold leading-6 tracking-[-0.02em] text-[#17252D] hover:text-[#46798B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#537F93]"
                    >
                      {group.title}

                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[#668C9B] transition-transform motion-safe:group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.02em] text-[#17252D]">
                      {group.title}
                    </h3>
                  )}

                  {/* CATEGORY LINKS */}

                  {group.links && (
                    <ul className="mt-3 space-y-1">
                      {group.links.map((link) => {
                        const active =
                          pathname === link.href;

                        return (
                          <li
                            key={`${group.title}-${link.label}`}
                          >
                            <Link
                              href={link.href}
                              onClick={onNavigate}
                              aria-current={
                                active
                                  ? "page"
                                  : undefined
                              }
                              className={`group inline-flex max-w-full items-start gap-2 rounded-sm py-1.5 text-[13px] leading-[1.65] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#537F93] ${
                                active
                                  ? "font-semibold text-[#356A7D]"
                                  : "text-[#53636B] hover:text-[#356A7D]"
                              }`}
                            >
                              <span className="min-w-0">
                                {link.label}

                                {link.description && (
                                  <span className="mt-0.5 block text-[11px] font-normal text-[#718089]">
                                    {link.description}
                                  </span>
                                )}
                              </span>

                              <ArrowRight
                                size={14}
                                aria-hidden="true"
                                className="mt-1 shrink-0 text-[#7194A0] transition-transform motion-safe:group-hover:translate-x-1"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM SIGNATURE */}

        <div className="border-t border-[#DFE7E8] bg-[#EAF0F1] px-7 py-4 sm:px-10">
          <p className="text-[11px] text-[#647680]">
            Cloudlem — Technology, Operations &amp;
            Financial Solutions
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN NAVBAR
// ==========================================

export default function Navbar() {
  const pathname = usePathname();

  const navRef =
    useRef<HTMLElement | null>(null);

  const lastY = useRef(0);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const desktopTriggerRefs =
    useRef<Partial<Record<MenuKey, HTMLButtonElement>>>({});

  const [scrolled, setScrolled] =
    useState(false);

  const [visible, setVisible] =
    useState(true);

  const [desktopMenu, setDesktopMenu] =
    useState<MenuKey | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState<MenuKey | null>(null);

  const reduceMotion = useReducedMotion();

  // ========================================
  // MENU MANAGEMENT
  // ========================================

  const closeMenus = () => {
    setDesktopMenu(null);
    setMobileOpen(false);
    setMobileMenu(null);
  };

  // ========================================
  // NAVBAR BACKGROUND
  //
  // Transparent only at homepage top.
  // Solid on all other pages.
  // ========================================

  const solid =
    pathname !== "/" ||
    scrolled ||
    desktopMenu !== null ||
    mobileOpen;

  // ========================================
  // ACTIVE ROUTE DETECTION
  // ========================================

  const activePath = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  const activeMenu = (key: MenuKey) =>
    key === "services"
      ? activePath("/services") ||
        activePath("/solutions")
      : key === "industries"
        ? activePath("/industries")
        : [
            "/about",
            "/careers",
            "/blog",
          ].some(activePath);

  // ========================================
  // SMART SCROLL BEHAVIOR
  // ========================================

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const y = Math.max(
        0,
        window.scrollY
      );

      setScrolled(y > 32);

      if (
        y < 110 ||
        desktopMenu ||
        mobileOpen ||
        navRef.current?.contains(
          document.activeElement
        )
      ) {
        setVisible(true);
        lastY.current = y;
        return;
      }

      // Hide on downward scrolling.

      if (
        y > 160 &&
        y - lastY.current > 8
      ) {
        setVisible(false);
        lastY.current = y;
      }

      // Show on upward scrolling.

      else if (
        lastY.current - y > 8
      ) {
        setVisible(true);
        lastY.current = y;
      }
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [desktopMenu, mobileOpen]);

  // ========================================
  // CLOSE MENUS WHEN ROUTE CHANGES
  // ========================================

  useEffect(() => {
    setDesktopMenu(null);
    setMobileMenu(null);
    setMobileOpen(false);
    setVisible(true);
  }, [pathname]);

  // ========================================
  // ESCAPE KEY SUPPORT
  // ========================================

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      if (mobileOpen) {
        menuButtonRef.current?.focus();
      } else if (desktopMenu) {
        desktopTriggerRefs.current[desktopMenu]?.focus();
      }

      closeMenus();
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileOpen, desktopMenu]);

  // Switch cleanly between mobile and desktop layouts when resizing.
  // In particular, release the body scroll lock if a mobile menu was open.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");

    const handleViewportChange = () => {
      setDesktopMenu(null);
      setMobileMenu(null);
      setMobileOpen(false);
      setVisible(true);
    };

    desktop.addEventListener("change", handleViewportChange);

    return () => {
      desktop.removeEventListener("change", handleViewportChange);
    };
  }, []);

  // ========================================
  // CLOSE DESKTOP MENU ON OUTSIDE CLICK
  // ========================================

  useEffect(() => {
    const handleOutside = (
      event: PointerEvent
    ) => {
      if (
        navRef.current &&
        !navRef.current.contains(
          event.target as Node
        )
      ) {
        setDesktopMenu(null);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutside
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutside
      );
    };
  }, []);

  // ========================================
  // LOCK PAGE SCROLL ON MOBILE
  // ========================================

  useEffect(() => {
    if (!mobileOpen) return;

    const previous =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previous;
    };
  }, [mobileOpen]);

  // ========================================
  // RENDER
  // ========================================

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      onMouseLeave={() => {
        setDesktopMenu(null);
      }}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setDesktopMenu(null);
        }
      }}
      className={`fixed inset-x-0 top-0 z-50 h-[76px] border-b text-white transition-[transform,background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
        visible
          ? "translate-y-0"
          : "-translate-y-full"
      } ${
        solid
          ? "border-white/15 bg-[#16242C]/95 shadow-[0_12px_35px_rgba(7,16,23,0.22)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      {/* ======================================
          NAVIGATION ROW
      ====================================== */}

      <div className="container-systems relative z-30 flex h-full items-center justify-between gap-2 sm:gap-4">

        {/* ==================================
            CLOUDLEM INFINITY LOGO
            Icon is the only image; wordmark and tagline remain editable text.
        ================================== */}

        <Link
          href="/"
          onClick={closeMenus}
          onMouseEnter={() => {
            setDesktopMenu(null);
          }}
          aria-label="Cloudlem home"
          className="flex min-w-0 shrink items-center gap-1.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E7EFF1] sm:shrink-0 sm:gap-2"
        >
          <Image
            src="/images/bigcloudlemlogo.png"
            alt=""
            width={235}
            height={251}
            priority
            className="h-[43px] w-[48px] shrink-0 object-contain sm:h-[70px] sm:w-[70px]"
          />

          <span className="flex min-w-0 flex-col justify-center">
            <span className="text-[19px] font-bold leading-[1.05] tracking-[-0.025em] text-white min-[380px]:text-[22px] sm:text-[24px]">
              Cloudlem
            </span>
            <span className="mt-1 whitespace-nowrap text-[8px] font-medium leading-[1.15] tracking-[0.012em] text-[#E4E9EB] min-[380px]:text-[9px] sm:text-[10px]">
              Automate anything anywhere
            </span>
          </span>
        </Link>

        {/* ==================================
            DESKTOP NAVIGATION
        ================================== */}

        <div className="hidden h-full items-center gap-1 xl:ml-auto xl:flex">

          {/* HOME */}

          <Link
            href="/"
            onClick={closeMenus}
            onMouseEnter={() => {
              setDesktopMenu(null);
            }}
            aria-current={
              activePath("/")
                ? "page"
                : undefined
            }
            className={`group relative flex h-full items-center px-4 text-[13px] font-medium focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#E8F0F2] ${
              activePath("/")
                ? "text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Home

            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#D9E7E9] transition-transform duration-300 ${
                activePath("/")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>

          {/* DROPDOWN TRIGGERS */}

          {menuKeys.map((key) => {
            const open =
              desktopMenu === key;

            const active =
              activeMenu(key);

            return (
              <div
                key={key}
                className="flex h-full items-center"
                onPointerEnter={(event) => {
                  if (
                    event.pointerType ===
                    "mouse"
                  ) {
                    setDesktopMenu(key);
                    setVisible(true);
                  }
                }}
              >
                <button
                  ref={(node) => {
                    if (node) {
                      desktopTriggerRefs.current[key] = node;
                    }
                  }}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open}
                  aria-controls={open ? `desktop-${key}-menu` : undefined}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setDesktopMenu(key);
                      setVisible(true);
                    }
                  }}
                  onClick={() => {
                    setDesktopMenu(
                      open ? null : key
                    );

                    setVisible(true);
                  }}
                  className={`group relative flex h-full items-center gap-1.5 px-4 text-[13px] font-medium focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#E8F0F2] ${
                    open || active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {labels[key]}

                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-300 motion-reduce:transition-none ${
                      open
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#D9E7E9] transition-transform duration-300 ${
                      open || active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </div>
            );
          })}

          {/* ==================================
              BOOKKEEPING TOP-LEVEL LINK
          ================================== */}

          <Link
            href="/bookkeeping"
            onClick={closeMenus}
            onMouseEnter={() => {
              setDesktopMenu(null);
            }}
            aria-current={
              activePath("/bookkeeping")
                ? "page"
                : undefined
            }
            className={`group relative flex h-full items-center px-4 text-[13px] font-medium focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#E8F0F2] ${
              activePath("/bookkeeping")
                ? "text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Bookkeeping

            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#D9E7E9] transition-transform duration-300 ${
                activePath("/bookkeeping")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </div>

        {/* ==================================
            DESKTOP CONTACT BUTTON
        ================================== */}

        <Link
          href="/contact"
          onClick={closeMenus}
          onMouseEnter={() => {
            setDesktopMenu(null);
          }}
          className="group hidden shrink-0 items-center gap-3 rounded-[6px] border border-[#F1F3F1] bg-[#F1F3F1] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B2A32] transition-[background-color,box-shadow,transform] duration-300 hover:bg-white hover:shadow-[0_10px_25px_rgba(214,231,235,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white xl:inline-flex"
        >
          Get in Touch

          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform motion-safe:group-hover:translate-x-1"
          />
        </Link>

        {/* ==================================
            MOBILE MENU BUTTON
        ================================== */}

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen(
              (open) => !open
            );

            setMobileMenu(null);
            setDesktopMenu(null);
            setVisible(true);
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[7px] border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white xl:hidden"
        >
          {mobileOpen ? (
            <X
              size={23}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={23}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* ======================================
          DESKTOP MEGA MENU
      ====================================== */}

      <div className="hidden xl:block">
        <AnimatePresence mode="wait">
          {desktopMenu && (
            <MegaMenu
              key={desktopMenu}
              menuKey={desktopMenu}
              pathname={pathname}
              onNavigate={closeMenus}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ======================================
          MOBILE AND TABLET NAVIGATION
      ====================================== */}

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-t border-white/15 bg-[#182832] shadow-[0_26px_65px_rgba(5,15,20,0.35)] xl:hidden"
        >
          <div className="container-systems pb-12 pt-5">

            {/* HOME LINK */}

            <Link
              href="/"
              onClick={closeMenus}
              className="flex min-h-14 items-center border-b border-white/10 py-4 text-[15px] font-medium text-white focus-visible:outline-2 focus-visible:outline-[#DDE9EC]"
            >
              Home
            </Link>

            {/* MOBILE ACCORDIONS */}

            {menuKeys.map((key) => {
              const open =
                mobileMenu === key;

              const config =
                menus[key];

              return (
                <div
                  key={key}
                  className="border-b border-white/10"
                >
                  {/* ACCORDION TRIGGER */}

                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={
                      open
                        ? `mobile-${key}-items`
                        : undefined
                    }
                    onClick={() => {
                      setMobileMenu(
                        open ? null : key
                      );
                    }}
                    className="flex min-h-14 w-full items-center justify-between py-4 text-left text-[15px] font-medium text-white focus-visible:outline-2 focus-visible:outline-[#DDE9EC]"
                  >
                    {labels[key]}

                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`text-[#B8D3D9] transition-transform duration-300 motion-reduce:transition-none ${
                        open
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* ANIMATED CONTENT */}

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`mobile-${key}-items`}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={
                          reduceMotion
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration:
                            reduceMotion
                              ? 0
                              : 0.26,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pb-7">

                          {/* OVERVIEW LINK */}

                          <Link
                            href={config.overview.href}
                            onClick={closeMenus}
                            className="flex min-h-11 items-center justify-between gap-3 border-b border-white/10 pb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#CBE0E4] focus-visible:outline-2 focus-visible:outline-[#DDE9EC]"
                          >
                            {config.overview.label}

                            <ArrowRight
                              size={16}
                              aria-hidden="true"
                            />
                          </Link>

                          {/* CATEGORY GROUPS */}

                          {config.columns
                            .flat()
                            .map((group) => (
                              <div key={group.title}>

                                {/* CATEGORY HEADING */}

                                {group.href ? (
                                  <Link
                                    href={group.href}
                                    onClick={closeMenus}
                                    aria-current={pathname === group.href ? "page" : undefined}
                                    className="mb-3 flex items-center gap-2 text-[15px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-[#DDE9EC]"
                                  >
                                    {group.title}

                                    <ArrowRight
                                      size={15}
                                      aria-hidden="true"
                                      className="text-[#A3C7D0]"
                                    />
                                  </Link>
                                ) : (
                                  <h3 className="mb-3 text-[15px] font-semibold text-white">
                                    {group.title}
                                  </h3>
                                )}

                                {/* CATEGORY LINKS */}

                                {group.links && (
                                  <ul className="space-y-1 border-l border-white/15 pl-4">
                                    {group.links.map(
                                      (link) => (
                                        <li
                                          key={`${group.title}-${link.label}`}
                                        >
                                          <Link
                                            href={link.href}
                                            onClick={closeMenus}
                                            aria-current={pathname === link.href ? "page" : undefined}
                                            className={`flex min-h-10 items-start justify-between gap-3 rounded-sm py-2 text-[13px] leading-6 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#DDE9EC] ${
                                              pathname === link.href
                                                ? "font-semibold text-white"
                                                : "text-white/75"
                                            }`}
                                          >
                                            <span className="min-w-0">
                                              {link.label}

                                              {link.description && (
                                                <span className="block text-[11px] text-white/50">
                                                  {link.description}
                                                </span>
                                              )}
                                            </span>

                                            <ArrowRight
                                              size={14}
                                              aria-hidden="true"
                                              className="mt-1 shrink-0 text-[#A3C7D0]"
                                            />
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* ==================================
                MOBILE BOOKKEEPING LINK
            ================================== */}

            <Link
              href="/bookkeeping"
              onClick={closeMenus}
              aria-current={
                activePath("/bookkeeping")
                  ? "page"
                  : undefined
              }
              className={`flex min-h-14 items-center border-b border-white/10 py-4 text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-[#DDE9EC] ${
                activePath("/bookkeeping")
                  ? "text-white"
                  : "text-white/85 hover:text-white"
              }`}
            >
              Bookkeeping
            </Link>

            {/* MOBILE CONTACT CTA */}

            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-8 flex min-h-12 items-center justify-between rounded-[6px] bg-[#F1F3F1] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B2A32] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Get in Touch

              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
