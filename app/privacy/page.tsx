import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FileText,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Cloudlem",
  description:
    "Comprehensive privacy policy detailing how Cloudlem collects, uses, shares, and protects your personal information. Learn about your rights, data security, and our commitment to privacy.",
};

const policyNavigation = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "data-sharing", label: "Data Sharing and Disclosure" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights and Choices" },
  { id: "cookies", label: "Cookies and Tracking" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "data-security", label: "Data Security" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "california-rights", label: "California Privacy Rights" },
  { id: "changes-to-policy", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-b border-[#EAE3EF] py-12 first:pt-0 sm:py-14"
    >
      <div className="mb-7 flex items-start gap-4 sm:gap-5">
        <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E6D9F0] bg-[#F5EEFA] text-[12px] font-semibold text-[#75449B]">
          {number}
        </span>
        <h2
          id={`${id}-heading`}
          className="max-w-3xl text-[clamp(1.45rem,2.7vw,2rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#30213D]"
        >
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-[15px] leading-[1.95] text-[#665C70] sm:text-[16px] [&_strong]:font-semibold [&_strong]:text-[#30213D] [&_a]:font-semibold [&_a]:text-[#75449B] [&_a]:underline-offset-4 hover:[&_a]:underline">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="!mt-8 !mb-3 text-[18px] font-semibold leading-[1.4] tracking-[-0.025em] text-[#3A2949] sm:text-[19px]">
      {children}
    </h3>
  );
}

function PolicyList({ children }: { children: ReactNode }) {
  return (
    <ul className="!mt-4 space-y-3 pl-0">
      {children}
    </ul>
  );
}

function PolicyItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#A879C7]"
      />
      <span className="min-w-0 flex-1">{children}</span>
    </li>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="min-h-screen bg-white text-[#30213D]">
      {/* Soft-lavender page header. Navbar/Footer come from the existing layout. */}
      <section className="relative isolate overflow-hidden border-b border-[#EAE3EF] bg-[#FBF9FE] pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[430px] w-[430px] rounded-full bg-[#E9D9F4]/65 blur-[90px] sm:h-[600px] sm:w-[600px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -left-36 h-[440px] w-[440px] rounded-full bg-[#F1E9FA] blur-[100px]"
        />
        <div className="container-systems relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#86778F]"
          >
            <Link href="/" className="transition-colors hover:text-[#75449B]">
              Home
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page" className="text-[#75449B]">
              Privacy Policy
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20">
            <div className="max-w-[820px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D5EF] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-[#75449B]">
                <ShieldCheck size={15} strokeWidth={1.8} aria-hidden="true" />
                Trust &amp; Transparency
              </div>
              <h1 className="text-[clamp(3.3rem,7vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-[#30213D]">
                Privacy <span className="text-[#8753A8]">Policy.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[#706477] sm:text-[18px]">
                Learn how Cloudlem collects, uses, discloses, and safeguards
                personal information when you interact with our website and services.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#E4D8EC] pt-6 text-[12px] text-[#776B7F] sm:text-[13px]">
                <span className="inline-flex items-center gap-2">
                  <FileText size={15} className="text-[#8753A8]" aria-hidden="true" />
                  Last updated: February 17, 2026
                </span>
                <span>14 policy sections</span>
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex" aria-hidden="true">
              <div className="absolute h-60 w-60 rounded-[54px] border border-[#D8C5E6] bg-white/50 rotate-[14deg]" />
              <div className="absolute h-48 w-48 rounded-[44px] border border-[#D8C5E6] bg-[#F1E8F8]/75 -rotate-[12deg]" />
              <ShieldCheck size={104} strokeWidth={0.85} className="relative text-[#9466B2]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-systems">
          <div className="grid items-start gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
            {/* In-page navigation */}
            <aside aria-label="Privacy policy sections" className="min-w-0 lg:sticky lg:top-28">
              <div className="rounded-[22px] border border-[#EDE5F3] bg-[#FBF9FE] p-5 sm:p-6 lg:p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#75449B]">
                    On this page
                  </p>
                  <span className="text-[11px] font-semibold text-[#9A87A5]">01 — 14</span>
                </div>
                <div className="mt-5 h-px bg-[#E8DEEE]" />
                <nav aria-label="Table of contents" className="mt-4">
                  <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                    {policyNavigation.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-3 rounded-lg px-2 py-2.5 text-[12px] leading-[1.6] text-[#726579] transition-colors hover:bg-white hover:text-[#75449B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]"
                        >
                          <span className="shrink-0 font-semibold tabular-nums text-[#A98BBB] group-hover:text-[#75449B]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
              <a
                href="#top"
                className="mt-5 hidden items-center gap-2 text-[12px] font-semibold text-[#75449B] hover:text-[#30213D] lg:inline-flex"
              >
                Back to top <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </aside>

            {/* Original policy wording retained */}
            <article className="min-w-0 max-w-[920px]">
              <div className="mb-5 border-l-[3px] border-[#A576C2] bg-[#FBF9FE] px-6 py-6 sm:px-8 sm:py-8">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8556A3]">
                  Our Commitment
                </p>
                <p className="text-[16px] leading-[1.9] text-[#51465B] sm:text-[17px]">
                  At Cloudlem, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website, use our services, or interact with us in any way.
                </p>
                <p className="mt-4 text-[15px] leading-[1.9] text-[#665C70] sm:text-[16px]">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                  If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              <PolicySection id="information-we-collect" number="01" title="Information We Collect">
                <Subheading>1.1 Information You Provide to Us</Subheading>
                <p>We collect information that you voluntarily provide to us when you:</p>
                <PolicyList>
                  <PolicyItem><strong>Contact us:</strong> Name, email address, phone number, company name, job title, and message content</PolicyItem>
                  <PolicyItem><strong>Request services:</strong> Project details, technical requirements, budget information, and timeline preferences</PolicyItem>
                  <PolicyItem><strong>Apply for positions:</strong> Resume/CV, cover letter, professional experience, education, and LinkedIn profile</PolicyItem>
                  <PolicyItem><strong>Subscribe to communications:</strong> Email address and communication preferences</PolicyItem>
                  <PolicyItem><strong>Participate in surveys or feedback:</strong> Responses, opinions, and suggestions</PolicyItem>
                </PolicyList>
                <Subheading>1.2 Information Collected Automatically</Subheading>
                <p>When you access our website, we automatically collect certain information, including:</p>
                <PolicyList>
                  <PolicyItem><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</PolicyItem>
                  <PolicyItem><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring URLs, and navigation patterns</PolicyItem>
                  <PolicyItem><strong>Technical Data:</strong> Screen resolution, language preferences, time zone settings, and access times</PolicyItem>
                  <PolicyItem><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</PolicyItem>
                </PolicyList>
                <Subheading>1.3 Information from Third Parties</Subheading>
                <p>
                  We may receive information about you from third-party sources, such as business partners, analytics providers,
                  advertising networks, and publicly available sources like social media platforms when you interact with our
                  content or authorize such sharing.
                </p>
              </PolicySection>

              <PolicySection id="how-we-use-information" number="02" title="How We Use Your Information">
                <p>We use the information we collect for various purposes, including:</p>
                <PolicyList>
                  <PolicyItem><strong>Service Delivery:</strong> To provide, maintain, and improve our cloud, DevOps, and AI services</PolicyItem>
                  <PolicyItem><strong>Communication:</strong> To respond to inquiries, send service updates, and provide customer support</PolicyItem>
                  <PolicyItem><strong>Project Management:</strong> To understand your requirements, scope projects, and deliver solutions</PolicyItem>
                  <PolicyItem><strong>Recruitment:</strong> To evaluate job applications and communicate with candidates</PolicyItem>
                  <PolicyItem><strong>Marketing:</strong> To send newsletters, promotional materials, and information about our services (with your consent)</PolicyItem>
                  <PolicyItem><strong>Analytics:</strong> To analyze usage patterns, improve website functionality, and enhance user experience</PolicyItem>
                  <PolicyItem><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</PolicyItem>
                  <PolicyItem><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements</PolicyItem>
                  <PolicyItem><strong>Business Operations:</strong> To conduct internal research, auditing, and business planning</PolicyItem>
                </PolicyList>
              </PolicySection>

              <PolicySection id="legal-basis" number="03" title="Legal Basis for Processing (GDPR)">
                <p>If you are in the European Economic Area (EEA), our legal basis for processing your personal data includes:</p>
                <PolicyList>
                  <PolicyItem><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose</PolicyItem>
                  <PolicyItem><strong>Contract:</strong> Processing is necessary to fulfill a contract with you or to take steps before entering into a contract</PolicyItem>
                  <PolicyItem><strong>Legal Obligation:</strong> Processing is necessary to comply with legal and regulatory requirements</PolicyItem>
                  <PolicyItem><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, provided your rights and freedoms do not override those interests</PolicyItem>
                </PolicyList>
              </PolicySection>

              <PolicySection id="data-sharing" number="04" title="Data Sharing and Disclosure">
                <p>We may share your information in the following circumstances:</p>
                <Subheading>4.1 Service Providers</Subheading>
                <p>
                  We may share your data with trusted third-party service providers who assist us in operating our website,
                  conducting our business, or serving our clients (e.g., hosting providers, email services, analytics tools,
                  CRM platforms). These providers are bound by confidentiality obligations.
                </p>
                <Subheading>4.2 Business Transfers</Subheading>
                <p>
                  In the event of a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may
                  be transferred to the successor entity or third party involved in the transaction.
                </p>
                <Subheading>4.3 Legal Requirements</Subheading>
                <p>
                  We may disclose your information if required by law, court order, or governmental request, or to protect
                  our rights, property, safety, or that of our users and the public.
                </p>
                <Subheading>4.4 With Your Consent</Subheading>
                <p>We may share your information for any other purpose with your explicit consent or at your direction.</p>
                <p className="!mt-6 rounded-xl border border-[#E9DDF0] bg-[#FBF9FE] px-5 py-4 font-semibold text-[#513265]">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </PolicySection>

              <PolicySection id="data-retention" number="05" title="Data Retention">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. The retention period depends on:
                </p>
                <PolicyList>
                  <PolicyItem>The nature of the information and why we collected it</PolicyItem>
                  <PolicyItem>Legal, accounting, or regulatory requirements</PolicyItem>
                  <PolicyItem>Our legitimate business interests</PolicyItem>
                  <PolicyItem>The need to resolve disputes or enforce agreements</PolicyItem>
                </PolicyList>
                <p>
                  When we no longer need your information, we will securely delete or anonymize it in accordance with our data
                  retention policies and applicable laws.
                </p>
              </PolicySection>

              <PolicySection id="your-rights" number="06" title="Your Rights and Choices">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <PolicyList>
                  <PolicyItem><strong>Access:</strong> Request a copy of the personal information we hold about you</PolicyItem>
                  <PolicyItem><strong>Correction:</strong> Request correction of inaccurate or incomplete information</PolicyItem>
                  <PolicyItem><strong>Deletion:</strong> Request deletion of your personal data (subject to certain exceptions)</PolicyItem>
                  <PolicyItem><strong>Restriction:</strong> Request restriction of processing in certain circumstances</PolicyItem>
                  <PolicyItem><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</PolicyItem>
                  <PolicyItem><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing</PolicyItem>
                  <PolicyItem><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</PolicyItem>
                  <PolicyItem><strong>Opt-Out:</strong> Unsubscribe from marketing communications using the link in our emails</PolicyItem>
                </PolicyList>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@cloudlem.com">privacy@cloudlem.com</a>. We will respond to your request within 30 days.
                </p>
              </PolicySection>

              <PolicySection id="cookies" number="07" title="Cookies and Tracking Technologies">
                <p>
                  We use cookies, web beacons, and similar tracking technologies to collect information about your browsing
                  activities and preferences. Cookies are small data files stored on your device that help us:
                </p>
                <PolicyList>
                  <PolicyItem>Remember your preferences and settings</PolicyItem>
                  <PolicyItem>Understand how you use our website</PolicyItem>
                  <PolicyItem>Improve website performance and user experience</PolicyItem>
                  <PolicyItem>Deliver personalized content and advertisements</PolicyItem>
                  <PolicyItem>Analyze traffic and usage patterns</PolicyItem>
                </PolicyList>
                <p>
                  You can control cookies through your browser settings. Note that disabling cookies may affect the functionality
                  of our website. For more information, please refer to your browser&apos;s help documentation.
                </p>
              </PolicySection>

              <PolicySection id="third-party-services" number="08" title="Third-Party Services and Links">
                <p>
                  Our website may contain links to third-party websites, services, or applications that are not operated by us.
                  We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
                <p>
                  We may use third-party services such as Google Analytics, social media platforms, and cloud service providers.
                  These services may collect information about your use of our website in accordance with their own privacy policies.
                </p>
              </PolicySection>

              <PolicySection id="international-transfers" number="09" title="International Data Transfers">
                <p>
                  Your information may be transferred to, stored, and processed in countries other than your own, where data
                  protection laws may differ. When we transfer data internationally, we ensure appropriate safeguards are in place,
                  such as:
                </p>
                <PolicyList>
                  <PolicyItem>Standard contractual clauses approved by the European Commission</PolicyItem>
                  <PolicyItem>Privacy Shield frameworks (where applicable)</PolicyItem>
                  <PolicyItem>Binding corporate rules</PolicyItem>
                  <PolicyItem>Other legally approved mechanisms</PolicyItem>
                </PolicyList>
              </PolicySection>

              <PolicySection id="data-security" number="10" title="Data Security">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <PolicyList>
                  <PolicyItem>Encryption of data in transit and at rest</PolicyItem>
                  <PolicyItem>Secure socket layer (SSL) technology</PolicyItem>
                  <PolicyItem>Regular security assessments and audits</PolicyItem>
                  <PolicyItem>Access controls and authentication mechanisms</PolicyItem>
                  <PolicyItem>Employee training on data protection and security</PolicyItem>
                  <PolicyItem>Incident response and breach notification procedures</PolicyItem>
                </PolicyList>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive
                  to protect your information, we cannot guarantee absolute security.
                </p>
              </PolicySection>

              <PolicySection id="childrens-privacy" number="11" title="Children&apos;s Privacy">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information
                  from children. If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us, and we will take steps to delete such information.
                </p>
              </PolicySection>

              <PolicySection id="california-rights" number="12" title="California Privacy Rights (CCPA)">
                <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                <PolicyList>
                  <PolicyItem>Right to know what personal information is collected, used, shared, or sold</PolicyItem>
                  <PolicyItem>Right to delete personal information held by us</PolicyItem>
                  <PolicyItem>Right to opt-out of the sale of personal information (we do not sell personal data)</PolicyItem>
                  <PolicyItem>Right to non-discrimination for exercising your CCPA rights</PolicyItem>
                </PolicyList>
                <p>To exercise these rights, contact us at <a href="mailto:privacy@cloudlem.com">privacy@cloudlem.com</a>.</p>
              </PolicySection>

              <PolicySection id="changes-to-policy" number="13" title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
                  requirements, or other factors. We will notify you of any material changes by posting the updated policy on
                  this page with a new &quot;Last updated&quot; date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes
                  are posted constitutes your acceptance of the updated policy.
                </p>
              </PolicySection>

              <PolicySection id="contact-us" number="14" title="Contact Us">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="!mt-6 rounded-2xl border border-[#E8DDF0] bg-[#FBF9FE] p-5 sm:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE4F7] text-[#75449B]">
                        <Mail size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#30213D]">Email</p>
                        <a href="mailto:privacy@cloudlem.com" className="break-all text-[14px]">privacy@cloudlem.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE4F7] text-[#75449B]">
                        <Mail size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#30213D]">General Inquiries</p>
                        <a href="mailto:info@cloudlem.com" className="break-all text-[14px]">info@cloudlem.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:col-span-2">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFE4F7] text-[#75449B]">
                        <MapPin size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#30213D]">Company</p>
                        <p className="text-[14px]">Cloudlem</p>
                        <p className="text-[14px]">Gilgit, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[14px]">
                  We are committed to resolving complaints about our collection or use of your personal information.
                  If you have concerns, please contact us first so we can address them. If you are in the EEA and have
                  unresolved concerns, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </PolicySection>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <a href="#top" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#75449B] hover:text-[#30213D]">
                  Back to top <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <Link href="/contact" className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#75449B] hover:text-[#30213D]">
                  Contact Cloudlem <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quiet legal-page footer CTA; global Footer remains untouched. */}
      <section className="border-t border-[#E9E2EF] bg-[#FBF9FE] py-16 sm:py-20">
        <div className="container-systems text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8753A8]">Need Assistance?</p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.15] tracking-[-0.05em] text-[#30213D]">
            Have a privacy question?
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-[15px] leading-[1.85] text-[#71657A]">
            Get in touch with our team for questions about this policy or your personal information.
          </p>
          <a
            href="mailto:privacy@cloudlem.com"
            className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-4 rounded-xl bg-[#75449B] px-7 py-3 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(117,68,155,0.16)] transition-colors hover:bg-[#5F367F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#75449B]"
          >
            Contact Privacy Team
            <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
