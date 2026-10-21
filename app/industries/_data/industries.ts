import {
  BriefcaseBusiness,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type ServiceLink = {
  label: string;
  href: string;
};

export type Industry = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  icon: LucideIcon;
  overview: string;
  description: string;
  focus: string;
  challenges: [string, string, string];
  opportunities: [string, string, string];
  services: ServiceLink[];
};

// The service destinations below follow the supplied Cloudlem Services.tsx
// and the existing /bookkeeping route. Keep this map centralized if routes change.
export const serviceRoutes = {
  strategy: { label: "Digital Consulting & Strategy", href: "/services/digital-consulting-strategy" },
  commerce: { label: "Digital Commerce", href: "/services/digital-commerce" },
  applications: { label: "Business Applications", href: "/services/business-applications" },
  modernization: { label: "Data Modernization", href: "/services/data-modernization" },
  analytics: { label: "Advanced Analytics", href: "/services/advanced-analytics" },
  intelligence: { label: "Connected Intelligence", href: "/services/connected-intelligence" },
  management: { label: "Data Management", href: "/services/data-management" },
  generativeAI: { label: "Generative AI", href: "/services/generative-ai" },
  cloudOps: { label: "Cloud Operations & Migration", href: "/services/cloud-operations-migration" },
  cloudApps: { label: "Cloud Application Development & Integration", href: "/services/cloud-application-development-integration" },
  managed: { label: "Managed Services", href: "/services/managed-services" },
  infrastructure: { label: "Digital Infrastructure Services", href: "/services/digital-infrastructure-services" },
  security: { label: "Security", href: "/services/security" },
  bookkeeping: { label: "Bookkeeping", href: "/bookkeeping" },
} satisfies Record<string, ServiceLink>;

export const industries: Industry[] = [
  {
    id: "healthcare",
    number: "01",
    name: "Healthcare",
    eyebrow: "Care & operations",
    icon: HeartPulse,
    overview: "Connected care operations, supported by dependable technology.",
    description:
      "Healthcare organizations balance complex workflows, sensitive information, and the need for reliable access to systems. We help teams assess opportunities for modern platforms, secure infrastructure, data organization, and practical automation.",
    focus: "Technology that supports the people behind patient care.",
    challenges: ["Fragmented administrative systems", "Sensitive information and access requirements", "Operational reliability across teams"],
    opportunities: ["Modernize administrative and internal applications", "Organize and govern operational data", "Plan resilient cloud and security foundations"],
    services: [serviceRoutes.applications, serviceRoutes.management, serviceRoutes.security, serviceRoutes.infrastructure],
  },
  {
    id: "education",
    number: "02",
    name: "Education",
    eyebrow: "Learning & administration",
    icon: GraduationCap,
    overview: "Better digital experiences for learners and educators.",
    description:
      "Education and training providers need platforms that are accessible, manageable, and ready to evolve. Cloudlem can help connect learning-related workflows, simplify administration, and build reliable cloud-supported digital experiences.",
    focus: "Technology that gives teams more time to focus on learning.",
    challenges: ["Disconnected learning and admin tools", "Manual enrollment and reporting workflows", "Changing requirements as programs grow"],
    opportunities: ["Develop and integrate digital platforms", "Explore responsible workflow automation", "Improve application support and scalability"],
    services: [serviceRoutes.cloudApps, serviceRoutes.applications, serviceRoutes.generativeAI, serviceRoutes.managed],
  },
  {
    id: "retail",
    number: "03",
    name: "Retail & E-commerce",
    eyebrow: "Commerce & customer experience",
    icon: ShoppingBag,
    overview: "Connected commerce, from customer journey to operations.",
    description:
      "Retail organizations navigate evolving buying habits, fulfillment processes, and customer expectations. We bring together digital commerce, operational applications, connected information, and analytics to help businesses create more cohesive experiences.",
    focus: "Turn separate touchpoints into a more connected commerce journey.",
    challenges: ["Disconnected storefront and back-office systems", "Limited visibility into customer and order data", "Time-consuming everyday workflows"],
    opportunities: ["Improve digital storefront experiences", "Connect business and commerce systems", "Support decisions with meaningful analytics"],
    services: [serviceRoutes.commerce, serviceRoutes.applications, serviceRoutes.analytics, serviceRoutes.intelligence],
  },
  {
    id: "professional-services",
    number: "04",
    name: "Professional Services",
    eyebrow: "People & business operations",
    icon: BriefcaseBusiness,
    overview: "A more organized foundation for client-focused businesses.",
    description:
      "Professional firms depend on clear client communication, dependable records, and efficient internal processes. We can support bookkeeping needs, connect business tools, and streamline repetitive tasks so teams can focus on delivering their work.",
    focus: "Clear records and connected workflows for growing practices.",
    challenges: ["Manual client onboarding and follow-ups", "Time spent organizing financial records", "Tools that do not communicate well"],
    opportunities: ["Keep bookkeeping organized and tax-ready", "Improve business applications and integrations", "Automate appropriate internal workflows"],
    services: [serviceRoutes.bookkeeping, serviceRoutes.applications, serviceRoutes.generativeAI, serviceRoutes.strategy],
  },
  {
    id: "financial-services",
    number: "05",
    name: "Financial Services",
    eyebrow: "Data & risk awareness",
    icon: Landmark,
    overview: "Reliable digital foundations for information-intensive work.",
    description:
      "Financial organizations work with complex information, evolving processes, and heightened expectations for security. We help explore modern data foundations, analytical tools, application improvements, and risk-aware infrastructure design.",
    focus: "Clarity and control across data-rich business processes.",
    challenges: ["Complex reporting and data silos", "Sensitive systems and access considerations", "Legacy workflow and application dependencies"],
    opportunities: ["Modernize and organize data platforms", "Strengthen security-oriented architecture", "Develop useful reporting and operational insights"],
    services: [serviceRoutes.modernization, serviceRoutes.security, serviceRoutes.analytics, serviceRoutes.intelligence],
  },
  {
    id: "real-estate",
    number: "06",
    name: "Real Estate & Property Management",
    eyebrow: "Properties & portfolios",
    icon: Building2,
    overview: "Keep property operations and financial information connected.",
    description:
      "From independent property businesses to expanding management teams, real estate operations require visibility into transactions, properties, and client communications. We can help organize bookkeeping and introduce digital workflows suited to day-to-day operations.",
    focus: "Less time chasing records. More visibility across operations.",
    challenges: ["Property-level income and expense tracking", "Fragmented tenant and vendor workflows", "Manual coordination and reporting"],
    opportunities: ["Organize bookkeeping and reconciliations", "Create or connect operational applications", "Surface useful portfolio and activity insights"],
    services: [serviceRoutes.bookkeeping, serviceRoutes.applications, serviceRoutes.analytics, serviceRoutes.cloudApps],
  },
  {
    id: "manufacturing-logistics",
    number: "07",
    name: "Manufacturing & Logistics",
    eyebrow: "Operations & visibility",
    icon: Factory,
    overview: "More connected processes across complex operations.",
    description:
      "Manufacturing and logistics teams need dependable information as work moves between people, systems, and locations. Cloudlem can help connect operational applications, improve data flows, and design infrastructure that supports dependable digital operations.",
    focus: "Improve operational visibility without adding unnecessary complexity.",
    challenges: ["Information spread across different systems", "Manual coordination and status reporting", "Scaling operational tools reliably"],
    opportunities: ["Connect data and operational workflows", "Develop fit-for-purpose business applications", "Modernize cloud and data foundations"],
    services: [serviceRoutes.intelligence, serviceRoutes.applications, serviceRoutes.modernization, serviceRoutes.cloudOps],
  },
  {
    id: "technology-saas",
    number: "08",
    name: "Technology & SaaS",
    eyebrow: "Product & platform engineering",
    icon: Cpu,
    overview: "Build, operate, and improve digital products with confidence.",
    description:
      "Software businesses need to ship useful features while keeping platforms stable, scalable, and secure. We can support cloud application development, deployment workflows, infrastructure operations, and ongoing technical improvements throughout the product lifecycle.",
    focus: "Product delivery supported by practical cloud engineering.",
    challenges: ["Growing infrastructure and deployment complexity", "Integration and platform reliability needs", "Balancing new development with maintenance"],
    opportunities: ["Develop and integrate cloud-native applications", "Improve cloud operations and delivery workflows", "Plan security and ongoing platform support"],
    services: [serviceRoutes.cloudApps, serviceRoutes.cloudOps, serviceRoutes.security, serviceRoutes.managed],
  },
];
