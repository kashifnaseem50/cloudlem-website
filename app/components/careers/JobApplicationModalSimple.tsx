'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Briefcase } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplicationModalSimple = ({ isOpen, onClose, jobTitle }: JobApplicationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xaqdbdvv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          form.reset();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (submitStatus === 'success') {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3">Application Submitted!</h3>
            <p className="text-gray-600">
              Thank you for applying. We'll review your application and get back to you soon.
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl w-full max-w-2xl shadow-2xl my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent-blue to-accent-teal flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Apply for Position</h2>
                <p className="text-gray-500 text-sm">{jobTitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <input type="hidden" name="job_title" value={jobTitle} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">LinkedIn Profile URL</label>
              <input
                type="url"
                name="linkedin"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Resume / CV *</label>
              <input
                type="file"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-brand-dark file:text-white file:px-4 file:py-2 file:text-sm file:font-semibold"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload your resume as a PDF or DOC/DOCX file (max 5MB).
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Cover Letter *</label>
              <textarea
                name="cover_letter"
                required
                rows={5}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                placeholder="Tell us why you'd be a great fit for this position..."
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

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-linear-to-r from-accent-blue to-accent-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JobApplicationModalSimple;
