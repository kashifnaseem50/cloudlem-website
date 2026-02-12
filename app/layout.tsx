import type { Metadata } from 'next';
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudlem.com'),
  title: {
    default: 'Cloudlem | Cloud, AI & DevOps Consulting Services',
    template: '%s | Cloudlem'
  },
  description: 'Expert DevOps consulting, cloud migration, and AI implementation services. Transform your business with AWS, Azure, GCP solutions. 99.9% uptime guaranteed.',
  keywords: [
    'DevOps consulting',
    'cloud migration services',
    'AWS consulting',
    'Azure DevOps',
    'GCP cloud services',
    'Kubernetes consulting',
    'CI/CD pipeline',
    'cloud infrastructure',
    'AI implementation',
    'machine learning consulting',
    'cloud security',
    'infrastructure as code',
    'terraform consulting',
    'microservices architecture',
    'DevOps automation'
  ],
  authors: [{ name: 'Cloudlem' }],
  creator: 'Cloudlem',
  publisher: 'Cloudlem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudlem.com',
    title: 'Cloudlem | Cloud, AI & DevOps Consulting Services',
    description: 'Expert DevOps consulting, cloud migration, and AI implementation services. Transform your business with AWS, Azure, GCP solutions.',
    siteName: 'Cloudlem',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloudlem - Cloud & DevOps Consulting',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudlem | Cloud, AI & DevOps Consulting',
    description: 'Expert DevOps consulting, cloud migration, and AI implementation services.',
    creator: '@CloudlemOffical',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cloudlem",
    "alternateName": "Cloudlem Pvt. Ltd.",
    "url": "https://cloudlem.com",
    "logo": "https://cloudlem.com/logo.png",
    "description": "Expert DevOps consulting, cloud migration, and AI implementation services for enterprises.",
    "email": "info@cloudlem.com",
    "telephone": "+92-355-4502615",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gilgit",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.linkedin.com/company/cloudlem",
      "https://x.com/CloudlemOffical",
      "https://www.instagram.com/cloudlemoffical/",
      "https://github.com/kashifnaseem50",
      "https://www.youtube.com/@cloudlem"
    ],
    "foundingDate": "2022",
    "founders": [
      {
        "@type": "Person",
        "name": "Kashif Naseem"
      }
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "DevOps Consulting",
      "Cloud Migration",
      "AI Implementation",
      "Cloud Security",
      "Kubernetes Consulting"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
