'use client';

import { FormEvent, useMemo, useState } from 'react';
import { X } from 'lucide-react';

interface ServiceInquiryModalProps {
  serviceTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_EMAIL = 'info@cloudlem.com';

const ServiceInquiryModal = ({ serviceTitle, isOpen, onClose }: ServiceInquiryModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const subject = useMemo(() => `Service Inquiry: ${serviceTitle}`, [serviceTitle]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const company = String(formData.get('company') || '');
    const details = String(formData.get('details') || '');

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Service: ${serviceTitle}`,
      '',
      'Project details:',
      details,
    ].join('\n');

    window.location.href = `mailto:${SERVICE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button type="button" aria-label="Close modal" onClick={onClose} className="absolute inset-0 bg-brand-black/70" />

      <div className="relative z-10 w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl border border-gray-100">
        <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-brand-dark">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Get Started with {serviceTitle}</h3>
            <p className="text-gray-500 mb-6">Share your requirement and our team will get in touch shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue"
              />
              <input
                name="company"
                placeholder="Company name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue"
              />
              <textarea
                name="details"
                required
                rows={4}
                placeholder="Tell us about your goals"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark/90"
              >
                Submit Inquiry
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Thank you</h3>
            <p className="text-gray-500 mb-6">Your inquiry was prepared successfully. We will contact you soon.</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceInquiryModal;
