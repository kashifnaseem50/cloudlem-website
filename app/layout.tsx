
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// =====================================
// SITE CONFIGURATION
// =====================================

const SITE_URL = "https://cloudlem.com";

const SITE_NAME = "Cloudlem";

const SITE_TITLE =
  "Cloudlem | Technology, Operations & Financial Solutions";

const SITE_DESCRIPTION =
  "Cloudlem provides cloud and DevOps, AI automation, web development, bookkeeping, design, and business growth support.";

// =====================================
// GLOBAL WEBSITE METADATA
// =====================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Cloudlem",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "Cloudlem",
    "DevOps consulting",
    "cloud migration services",
    "AWS consulting",
    "Azure DevOps",
    "GCP cloud services",
    "Kubernetes consulting",
    "CI/CD pipelines",
    "cloud infrastructure",
    "AI implementation",
    "machine learning consulting",
    "cloud security",
    "infrastructure as code",
    "Terraform consulting",
    "microservices architecture",
    "DevOps automation",
    "business automation",
    "web development",
    "bookkeeping services",
    "design and branding",
    "business growth support",
  ],

  authors: [
    {
      name: "Cloudlem",
      url: SITE_URL,
    },
  ],

  creator: "Cloudlem",
  publisher: "Cloudlem (Private) Limited",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // =====================================
  // OPEN GRAPH
  // =====================================

  openGraph: {
    type: "website",
    locale: "en_US",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description:
      "Practical cloud, automation, web, bookkeeping, design, and growth support for growing businesses.",
  },

  // =====================================
  // SOCIAL SHARING
  // =====================================

  twitter: {
    card: "summary",

    title: SITE_TITLE,

    description:
      "Practical technology, operations, and financial support for growing businesses.",

    creator: "@CloudlemOffical",
  },

  // =====================================
  // SEARCH ENGINE DIRECTIVES
  // =====================================

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// =====================================
// COMPANY STRUCTURED DATA
// =====================================

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Cloudlem",

  legalName: "Cloudlem (Private) Limited",

  alternateName: "Cloudlem Pvt. Ltd.",

  url: SITE_URL,

  logo: `${SITE_URL}/images/logo.png`,

  description:
    "Technology, operations, and financial solutions for growing businesses.",

  foundingDate: "2022-04-20",

  identifier: {
    "@type": "PropertyValue",
    name: "SECP Corporate Unique Identification Number",
    value: "0200455",
  },

  email: "info@cloudlem.com",

  telephone: "+92-355-4502615",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Gilgit",
    addressCountry: "PK",
  },

  founder: {
    "@type": "Person",
    name: "Kashif Naseem",
  },

  sameAs: [
    "https://www.linkedin.com/company/cloudlem",
    "https://x.com/CloudlemOffical",
    "https://www.instagram.com/cloudlemoffical/",
    "https://www.youtube.com/@cloudlem",
  ],
};

// Escape characters that could terminate the script
// element if structured data changes in the future.
const structuredDataJson = JSON.stringify(
  structuredData
).replace(/</g, "\\u003c");

// =====================================
// ROOT LAYOUT
// =====================================

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* ORGANIZATION STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: structuredDataJson,
          }}
        />

        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* PAGE CONTENT */}
        {/* Individual public pages provide their own main element. */}
        {children}

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
