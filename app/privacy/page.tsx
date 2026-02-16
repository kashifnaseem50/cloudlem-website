import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Cloudlem collects, uses, and protects personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Dark hero section so navbar looks consistent with other pages */}
      <section className="relative bg-brand-black pt-32 pb-20">
        <div className="absolute inset-0 bg-linear-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-linear-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10 max-w-4xl">
          <h1 className="text-hero text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: February 12, 2026</p>
        </div>
      </section>

      {/* Content section */}
      <section className="bg-white py-24">
        <div className="container-systems max-w-4xl">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Information We Collect</h2>
              <p>
                We collect information you provide directly, including name, email, company, and project details when
                you contact us or submit a service inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">How We Use Information</h2>
              <p>
                We use your data to respond to requests, deliver services, improve user experience, and communicate
                relevant updates about our offerings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Email and Lead Data</h2>
              <p>
                Email addresses captured through service inquiries are used only for communication related to your
                interest and project scope. We do not sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Data Security</h2>
              <p>
                We apply reasonable technical and organizational safeguards to protect personal information against
                unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Contact Us</h2>
              <p>
                For privacy-related questions, contact us at{' '}
                <a href="mailto:info@cloudlem.com" className="text-accent-blue hover:underline">
                  info@cloudlem.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
