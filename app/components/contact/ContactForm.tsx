"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  // Contact form using Formspree
  const [state, handleSubmit] = useForm("xvzbqbla");

  if (state.succeeded) {
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
          onClick={() => window.location.reload()}
          className="mt-8 text-accent-blue hover:underline font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">
        Send us a message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
            placeholder="John Doe"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
            placeholder="john@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              name="inquiry_type"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all appearance-none cursor-pointer"
            >
              <option>Select an option</option>
              <option>DevOps Consulting</option>
              <option>Cloud Infrastructure</option>
              <option>AI & Machine Learning</option>
              <option>Cloud Security</option>
              <option>Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none placeholder:text-gray-400"
            placeholder="Tell us about your project..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={state.submitting}
          className="w-full py-4 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-dark/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
        >
          {state.submitting ? "Sending..." : "Send Message"}
          {!state.submitting && <Send size={16} />}
        </motion.button>

        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-50 p-3 rounded-md">
            <AlertCircle size={16} />
            <span>Something went wrong. Please try again.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
