'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Upload, Briefcase } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplicationModal = ({ isOpen, onClose, jobTitle }: JobApplicationModalProps) => {
  // REPLACE 'placeholder' WITH YOUR ACTUAL FORMSPREE ID
  // Create a separate form at formspree.io for job applications
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_JOB_ID || "placeholder");

  if (state.succeeded) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
              className="relative bg-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors"
              >
                <X size={24} />
              </button>

              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <CheckCircle size={40} className="text-green-500" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-2">
                Thank you for applying to the <span className="font-semibold">{jobTitle}</span> position.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                We'll review your application and get back to you within 5 business days.
              </p>
              
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-all"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors"
            >
              <X size={24} />
            </button>

              <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Apply for Position</h2>
                <p className="text-gray-600">{jobTitle}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden field for job title */}
              <input type="hidden" name="job_title" value={jobTitle} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    name="first_name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
                    placeholder="John"
                  />
                  <ValidationError prefix="First Name" field="first_name" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    name="last_name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
                    placeholder="Doe"
                  />
                  <ValidationError prefix="Last Name" field="last_name" errors={state.errors} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
                  placeholder="+1 (555) 000-0000"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">LinkedIn Profile URL</label>
                <input 
                  type="url" 
                  name="linkedin"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all placeholder:text-gray-400"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
                <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Resume / CV *</label>
                <div className="relative">
                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-brand-dark file:text-white file:px-4 file:py-2 file:text-sm file:font-semibold"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Upload your resume as a PDF or DOC/DOCX file (max 5MB).
                </p>
                <ValidationError prefix="Resume" field="resume" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Why do you want to join Cloudlem? *</label>
                <textarea 
                  name="cover_letter"
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about your experience and why you're interested in this role..."
                />
                <ValidationError prefix="Cover Letter" field="cover_letter" errors={state.errors} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={state.submitting}
                  className="flex-1 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Submitting...' : 'Submit Application'} 
                  {!state.submitting && <Send size={18} />}
                </motion.button>
              </div>
              
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JobApplicationModal;
