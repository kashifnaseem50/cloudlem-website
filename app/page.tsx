
import type { Metadata } from "next";

// ==========================================
// CLOUDLEM HOMEPAGE COMPONENTS
// ==========================================

import Hero from "./components/home/Hero";
import Insights from "./components/home/Insights";
import Impact from "./components/home/Impact";
import TrustStrip from "./components/home/TrustStrip";
import Services from "./components/home/Services";
import Industries from "./components/home/Industries";
import Projects from "./components/home/Projects";
import Founder from "./components/home/Founder";
import FinalCTA from "./components/home/FinalCTA";

// ==========================================
// SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Technology, Operations & Financial Solutions",

  description:
    "Cloudlem helps growing businesses solve operational challenges through cloud engineering, automation, web development, bookkeeping, and growth-focused support.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Cloudlem | Technology, Operations & Financial Solutions",

    description:
      "Cloudlem provides cloud, DevOps, automation, web development, bookkeeping, and business growth solutions for growing businesses.",

    url: "https://cloudlem.com",
  },
};

// ==========================================
// CLOUDLEM HOMEPAGE
// ==========================================

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType:
      "Technology, Operations & Financial Services",

    provider: {
      "@type": "Organization",
      name: "Cloudlem",
      url: "https://cloudlem.com",
    },

    areaServed: "Worldwide",

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Cloudlem Services",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud & DevOps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Business Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bookkeeping & Accounting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Design & Branding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Growth",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#F7F7F9] text-[#181818]">

      {/* ======================================
          STRUCTURED DATA
      ====================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* ======================================
          01 — HERO
          Original Cloudlem video
      ====================================== */}

      <Hero />

      {/* ======================================
          02 — OUR SERVICES
          Interactive services carousel
      ====================================== */}

      <Services />

      {/* ======================================
          03 — BUSINESS IMPACT
          Statistics and company highlights
      ====================================== */}

      <Impact />

      {/* ======================================
          04 — FEATURED INSIGHTS
          Editorial articles and image cards
      ====================================== */}

      <Insights />

      {/* ======================================
          05 — INDUSTRIES WE SERVE
          Interactive industry selection
      ====================================== */}

      <Industries />

      {/* ======================================
          06 — TECHNOLOGIES & PLATFORMS
          Technology capabilities and logos
      ====================================== */}

      <TrustStrip />

      {/* ======================================
          07 — SELECTED PROJECTS
          Featured work
      ====================================== */}


      {/* ======================================
          08 — OUR FOUNDER
          Founder information
      ====================================== */}

      <Founder />

      {/* ======================================
          09 — CONTACT / FINAL CTA
      ====================================== */}

      <FinalCTA />

    </main>
  );
}
