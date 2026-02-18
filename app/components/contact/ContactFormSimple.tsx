"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactFormSimple = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xvzbqbla', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white border border-gray-100 rounded-xl p-12 text-center h-full flex flex-col items-center justify-center shadow-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle size={40} className="text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-bold text-brand-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-6 px-6 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-white transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-10 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
          >
            <option value="">Select a service</option>
            <option value="AI & Machine Learning">AI & Machine Learning</option>
            <option value="Web Development">Web Development</option>
            <option value="DevOps">DevOps</option>
            <option value="Design Systems">Design Systems</option>
            <option value="Business Development">Business Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center gap-3">
            <AlertCircle size={20} />
            <span className="text-sm">
              Something went wrong. Please try again.
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-linear-to-r from-accent-blue to-accent-teal text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSimple;
