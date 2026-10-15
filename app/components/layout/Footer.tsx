
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Building2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";

// ==========================================
// CLOUDLEM — REFINED CINEMATIC FOOTER
// Charcoal / Steel Blue / Warm Silver
// Server Component — no client-side JS needed
// ==========================================

const wordmarkStyle = {
  backgroundImage:
    "linear-gradient(100deg, #62C449 0%, #58BF4A 30%, #F47B2B 68%, #E6383C 100%)",
  backgroundClip: "text" as const,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
};

const serviceLinks = [
  { label: "Digital Consulting & Strategy", href: "/services/digital-consulting-strategy" },
  { label: "Data Modernization", href: "/services/data-modernization" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "Cloud Operations & Migration", href: "/services/cloud-operations-migration" },
  { label: "Managed Services", href: "/services/managed-services" },
  { label: "Security", href: "/services/security" },
];

const companyLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About Cloudlem", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cloudlem",
    icon: <Linkedin size={18} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    label: "X",
    href: "https://x.com/CloudlemOffical",
    icon: <span aria-hidden="true" className="text-[18px] font-bold leading-none">𝕏</span>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cloudlemoffical/",
    icon: <Instagram size={18} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@cloudlem",
    icon: <Youtube size={18} strokeWidth={1.7} aria-hidden="true" />,
  },
];

const footerLinkClass =
  "group inline-flex min-h-9 max-w-full items-center rounded-sm py-1 text-[13px] leading-6 text-[#C9D3D8] transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8D7DF]";

const focusClass =
  "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8D7DF]";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative isolate overflow-hidden border-t border-[#3C5661] bg-[#101A22] text-white"
    >
      {/* Background atmosphere: subtle, not fully black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_88%_0%,rgba(118,173,188,0.15),transparent_43%),radial-gradient(ellipse_at_0%_95%,rgba(218,189,147,0.055),transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#A8C7CE]/60 to-transparent"
      />

      <div className="container-systems relative z-10">
        {/* Main content */}
        <div className="grid gap-x-10 gap-y-12 border-b border-white/10 pb-12 pt-14 sm:grid-cols-2 lg:gap-y-14 lg:pb-16 lg:pt-20 xl:grid-cols-[1.55fr_1.2fr_0.95fr_0.85fr] xl:gap-x-12">
          {/* Brand & contact */}
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="Cloudlem homepage"
              className={`group inline-flex items-center gap-2 ${focusClass}`}
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-contain transition-transform duration-300 motion-safe:group-hover:scale-105"
              />
              <span
                style={wordmarkStyle}
                className="text-[25px] font-bold tracking-[-0.045em]"
              >
                Cloudlem
              </span>
            </Link>

            <p className="mt-5 max-w-[345px] text-[14px] leading-[1.85] text-[#C2CED4]">
              Technology, operations, and financial solutions for growing businesses.
              Helping organizations build, modernize, and operate with confidence.
            </p>

            <address className="mt-7 space-y-3 not-italic">
              <a
                href="mailto:info@cloudlem.com"
                className={`group flex w-fit max-w-full items-center gap-3 text-[13px] text-[#D0DBDF] transition-colors hover:text-white ${focusClass}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#537481]/55 bg-[#82ADBA]/10 text-[#C6E0E5] transition-[border-color,background-color,transform] duration-300 group-hover:border-[#9FC7D0] group-hover:bg-[#82ADBA]/20 motion-safe:group-hover:-translate-y-0.5">
                  <Mail size={17} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="min-w-0 break-all">info@cloudlem.com</span>
              </a>

              <a
                href="tel:+923554502615"
                className={`group flex w-fit items-center gap-3 text-[13px] text-[#D0DBDF] transition-colors hover:text-white ${focusClass}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#537481]/55 bg-[#82ADBA]/10 text-[#C6E0E5] transition-[border-color,background-color,transform] duration-300 group-hover:border-[#9FC7D0] group-hover:bg-[#82ADBA]/20 motion-safe:group-hover:-translate-y-0.5">
                  <Phone size={17} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span>+92 355 4502615</span>
              </a>

              <div className="flex items-center gap-3 text-[13px] text-[#D0DBDF]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#537481]/55 bg-[#82ADBA]/10 text-[#C6E0E5]">
                  <MapPin size={17} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span>Gilgit, Pakistan</span>
              </div>
            </address>
          </div>

          {/* Service navigation */}
          <nav aria-label="Footer services" className="min-w-0">
            <h2 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#E2D5BE]">
              Our Services
            </h2>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    <span className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className={`group mt-6 inline-flex items-center gap-2 border-b border-[#A6C6CF]/50 pb-2 text-[11px] font-bold uppercase tracking-[0.09em] text-[#D5E7EB] transition-colors hover:border-white hover:text-white ${focusClass}`}
            >
              Explore All Services
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
              />
            </Link>
          </nav>

          {/* Company navigation */}
          <nav aria-label="Footer company links" className="min-w-0">
            <h2 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#E2D5BE]">
              Explore
            </h2>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    <span className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal and CTA */}
          <nav aria-label="Footer legal links" className="min-w-0">
            <h2 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#E2D5BE]">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className={footerLinkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={footerLinkClass}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className={`group mt-8 inline-flex min-h-12 items-center gap-3 rounded-[8px] border border-[#8AB0BB]/55 bg-[#D6E4E7]/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#ECF4F5] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#B9D6DD] hover:bg-[#D6E4E7]/20 hover:shadow-[0_12px_28px_rgba(5,15,20,0.2)] ${focusClass}`}
            >
              Discuss a Project
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
              />
            </Link>
          </nav>
        </div>

        {/* Corporate credentials */}
        <section
          aria-labelledby="footer-credentials"
          className="border-b border-white/10 py-9 sm:py-11"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A4CAD3]">
                Corporate Information
              </p>
              <h2
                id="footer-credentials"
                className="text-[21px] font-semibold tracking-[-0.04em] text-white sm:text-[23px]"
              >
                Registration &amp; Memberships
              </h2>
            </div>
            <p className="text-[12px] text-[#B1C0C6]">
              Cloudlem (Private) Limited
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group flex items-start gap-4 rounded-[14px] border border-[#3D5964] bg-[#1A2B34]/90 p-5 shadow-[0_8px_26px_rgba(0,0,0,0.08)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-[#85AEBA] hover:bg-[#213640] hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] motion-safe:hover:-translate-y-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#648D99]/45 bg-[#9ABCC5]/10 text-[#C8E0E6] transition-transform duration-300 motion-safe:group-hover:scale-105">
                <ShieldCheck size={21} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-[14px] font-semibold text-white">
                    SECP Registered Company
                  </h3>
                  <span className="rounded-full border border-[#789EAA]/45 bg-[#A3C7D0]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#D5E8EC]">
                    SECP
                  </span>
                </div>
                <p className="mt-2 text-[12px] leading-6 text-[#CBD5D9]">
                  Incorporated 20 April 2022
                </p>
                <p className="text-[12px] leading-6 text-[#AFC0C7]">
                  Registration / CUIN: 0200455
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-[14px] border border-[#3D5964] bg-[#1A2B34]/90 p-5 shadow-[0_8px_26px_rgba(0,0,0,0.08)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-[#85AEBA] hover:bg-[#213640] hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] motion-safe:hover:-translate-y-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#648D99]/45 bg-[#9ABCC5]/10 text-[#C8E0E6] transition-transform duration-300 motion-safe:group-hover:scale-105">
                <Award size={21} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-[14px] font-semibold text-white">
                    P@SHA Associate Member
                  </h3>
                  <span className="rounded-full border border-[#789EAA]/45 bg-[#A3C7D0]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#D5E8EC]">
                    P@SHA
                  </span>
                </div>
                <p className="mt-2 text-[12px] leading-6 text-[#CBD5D9]">
                  1 April 2026 – 31 March 2027
                </p>
                <p className="text-[12px] leading-6 text-[#AFC0C7]">
                  Certificate: 2026_A1881
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom bar: copyright, social icons, and back to top */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[12px] leading-6 text-[#CBD4D8]">
              © {new Date().getFullYear()} Cloudlem (Private) Limited. All rights reserved.
            </p>
            <p className="mt-1 text-[11px] text-[#A6B7BF]">
              Registered in Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <nav
              aria-label="Cloudlem social media"
              className="flex flex-wrap items-center gap-2"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cloudlem on ${item.label} (opens in new tab)`}
                  title={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#53707B] bg-white/[0.05] text-[#D0E0E4] transition-[transform,border-color,background-color,color] duration-300 hover:border-[#A5CDD6] hover:bg-[#9ABBC5]/15 hover:text-white motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B8D7DF]"
                >
                  {item.icon}
                </a>
              ))}
            </nav>
            <span
              aria-hidden="true"
              className="mx-1 hidden h-6 w-px bg-white/20 sm:block"
            />
            <a
              href="#"
              aria-label="Back to top of page"
              className="group inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-[#53707B] bg-white/[0.05] px-4 text-[11px] font-bold uppercase tracking-[0.08em] text-[#E0EDF0] transition-[border-color,background-color,color] duration-300 hover:border-[#A5CDD6] hover:bg-[#9ABBC5]/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B8D7DF]"
            >
              Back to Top
              <ArrowUp
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Quiet signature */}
        <div className="flex flex-col items-center justify-center gap-3 pb-7 pt-6">
          <div
            aria-hidden="true"
            className="h-px w-20 bg-gradient-to-r from-transparent via-[#AAC8CF]/75 to-transparent"
          />
          <div className="inline-flex items-center gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B2C1C7]">
            <Building2
              size={14}
              aria-hidden="true"
              className="text-[#C0D9DF]"
            />
            Technology. Operations. Growth.
          </div>
        </div>
      </div>
    </footer>
  );
}
