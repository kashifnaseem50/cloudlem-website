import type { Metadata } from "next";
import IndustriesPageClient from "./_components/IndustriesPageClient";

// Metadata belongs in this Server Component. Interactive sections live in the client tree.
export const metadata: Metadata = {
  title: "Industries We Support | Cloudlem",
  description:
    "Explore Cloudlem's technology and business capabilities for healthcare, education, retail, professional services, finance, real estate, manufacturing, and SaaS.",
  alternates: { canonical: "https://www.cloudlem.com/industries" },
  openGraph: {
    title: "Industries We Support | Cloudlem",
    description:
      "Industry-aware digital solutions across cloud, data, applications, AI, security, and bookkeeping.",
    type: "website",
    url: "https://www.cloudlem.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
