import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Projects from './components/home/Projects';
import Impact from './components/home/Impact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Cloudlem provides expert DevOps consulting, cloud migration (AWS, Azure, GCP), and AI implementation services. 50+ successful projects delivered with 99.9% uptime.',
  openGraph: {
    title: 'Cloudlem | Cloud, AI & DevOps Consulting Services',
    description: 'Transform your business with expert cloud migration, DevOps automation, and AI implementation.',
  },
};

export default function Home() {
  // Service offering structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "DevOps Consulting & Cloud Services",
    "provider": {
      "@type": "Organization",
      "name": "Cloudlem"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cloud & DevOps Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Consulting & Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure (AWS, Azure, GCP)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Implementation"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Impact />
      <Services />
      <Projects />
    </>
  );
}
