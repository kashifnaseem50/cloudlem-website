import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cloudlem',
  description: 'Comprehensive privacy policy detailing how Cloudlem collects, uses, shares, and protects your personal information. Learn about your rights, data security, and our commitment to privacy.',
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
          <p className="text-white/60 text-lg">Last updated: February 17, 2026</p>
        </div>
      </section>

      {/* Content section */}
      <section className="bg-white py-24">
        <div className="container-systems max-w-4xl">
          <div className="space-y-12 text-gray-600 leading-relaxed">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700">
                At Cloudlem, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website, use our services, or interact with us in any way.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">1. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">1.1 Information You Provide to Us</h3>
                  <p className="mb-3">We collect information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact us:</strong> Name, email address, phone number, company name, job title, and message content</li>
                    <li><strong>Request services:</strong> Project details, technical requirements, budget information, and timeline preferences</li>
                    <li><strong>Apply for positions:</strong> Resume/CV, cover letter, professional experience, education, and LinkedIn profile</li>
                    <li><strong>Subscribe to communications:</strong> Email address and communication preferences</li>
                    <li><strong>Participate in surveys or feedback:</strong> Responses, opinions, and suggestions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">1.2 Information Collected Automatically</h3>
                  <p className="mb-3">When you access our website, we automatically collect certain information, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring URLs, and navigation patterns</li>
                    <li><strong>Technical Data:</strong> Screen resolution, language preferences, time zone settings, and access times</li>
                    <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">1.3 Information from Third Parties</h3>
                  <p>
                    We may receive information about you from third-party sources, such as business partners, analytics providers, 
                    advertising networks, and publicly available sources like social media platforms when you interact with our 
                    content or authorize such sharing.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our cloud, DevOps, and AI services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send service updates, and provide customer support</li>
                <li><strong>Project Management:</strong> To understand your requirements, scope projects, and deliver solutions</li>
                <li><strong>Recruitment:</strong> To evaluate job applications and communicate with candidates</li>
                <li><strong>Marketing:</strong> To send newsletters, promotional materials, and information about our services (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze usage patterns, improve website functionality, and enhance user experience</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements</li>
                <li><strong>Business Operations:</strong> To conduct internal research, auditing, and business planning</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">3. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">If you are in the European Economic Area (EEA), our legal basis for processing your personal data includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose</li>
                <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you or to take steps before entering into a contract</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with legal and regulatory requirements</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, provided your rights and freedoms do not override those interests</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">4.1 Service Providers</h3>
                  <p>
                    We may share your data with trusted third-party service providers who assist us in operating our website, 
                    conducting our business, or serving our clients (e.g., hosting providers, email services, analytics tools, 
                    CRM platforms). These providers are bound by confidentiality obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">4.2 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may 
                    be transferred to the successor entity or third party involved in the transaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">4.3 Legal Requirements</h3>
                  <p>
                    We may disclose your information if required by law, court order, or governmental request, or to protect 
                    our rights, property, safety, or that of our users and the public.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">4.4 With Your Consent</h3>
                  <p>
                    We may share your information for any other purpose with your explicit consent or at your direction.
                  </p>
                </div>
              </div>

              <p className="mt-4 font-semibold text-brand-dark">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required or permitted by law. The retention period depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The nature of the information and why we collected it</li>
                <li>Legal, accounting, or regulatory requirements</li>
                <li>Our legitimate business interests</li>
                <li>The need to resolve disputes or enforce agreements</li>
              </ul>
              <p className="mt-4">
                When we no longer need your information, we will securely delete or anonymize it in accordance with our data 
                retention policies and applicable laws.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">6. Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to certain exceptions)</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications using the link in our emails</li>
              </ul>

              <p className="mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@cloudlem.com" className="text-accent-blue hover:underline font-semibold">
                  privacy@cloudlem.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing 
                activities and preferences. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance and user experience</li>
                <li>Deliver personalized content and advertisements</li>
                <li>Analyze traffic and usage patterns</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect the functionality 
                of our website. For more information, please refer to your browser's help documentation.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">8. Third-Party Services and Links</h2>
              <p>
                Our website may contain links to third-party websites, services, or applications that are not operated by us. 
                We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>
              <p className="mt-3">
                We may use third-party services such as Google Analytics, social media platforms, and cloud service providers. 
                These services may collect information about your use of our website in accordance with their own privacy policies.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to, stored, and processed in countries other than your own, where data 
                protection laws may differ. When we transfer data internationally, we ensure appropriate safeguards are in place, 
                such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Privacy Shield frameworks (where applicable)</li>
                <li>Binding corporate rules</li>
                <li>Other legally approved mechanisms</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">10. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure socket layer (SSL) technology</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
                protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us, and we will take steps to delete such information.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">12. California Privacy Rights (CCPA)</h2>
              <p className="mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by us</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal data)</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@cloudlem.com" className="text-accent-blue hover:underline font-semibold">
                  privacy@cloudlem.com
                </a>
                .
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal 
                requirements, or other factors. We will notify you of any material changes by posting the updated policy on 
                this page with a new "Last updated" date.
              </p>
              <p className="mt-3">
                We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes 
                are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">14. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong>{' '}
                  <a href="mailto:privacy@cloudlem.com" className="text-accent-blue hover:underline">
                    privacy@cloudlem.com
                  </a>
                </p>
                <p><strong>General Inquiries:</strong>{' '}
                  <a href="mailto:info@cloudlem.com" className="text-accent-blue hover:underline">
                    info@cloudlem.com
                  </a>
                </p>
                <p><strong>Company:</strong> Cloudlem</p>
                <p><strong>Address:</strong> Gilgit, Pakistan</p>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                We are committed to resolving complaints about our collection or use of your personal information. 
                If you have concerns, please contact us first so we can address them. If you are in the EEA and have 
                unresolved concerns, you have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
