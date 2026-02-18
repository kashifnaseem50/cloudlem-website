'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, MessageSquare } from 'lucide-react';

// Load ContactForm only on client side to avoid prerender issues
const ContactForm = dynamic(() => import('../components/contact/ContactForm'), {
  ssr: false,
  loading: () => (
    <div className="bg-white border border-gray-100 rounded-xl p-12 h-full flex items-center justify-center">
      <div className="text-gray-500">Loading form...</div>
    </div>
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cloudlem' },
  { icon: Instagram, href: 'https://www.instagram.com/cloudlemoffical/' },
  { icon: Twitter, href: 'https://x.com/CloudlemOffical' },
  { icon: Github, href: 'https://github.com/kashifnaseem50' },
  { icon: Youtube, href: 'https://www.youtube.com/@cloudlem' }
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="relative bg-brand-black pt-32 pb-24">
        <div className="absolute inset-0 bg-linear-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-linear-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10">
          <div className="text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ duration: 0.8 }}
             >
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
                 <MessageSquare size={16} className="text-accent-cyan" />
                 <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Get In Touch</span>
               </div>
               
               <h1 className="text-hero text-white mb-6">
                 Let's Start a <span className="text-gradient-vibrant">Conversation</span>
               </h1>
             </motion.div>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-2xl mx-auto font-light"
             >
               Ready to transform your business with cloud, AI, and DevOps? Our team is here to help you scale with confidence.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-24">
        <div className="container-systems">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-brand-dark mb-6">
              Let&apos;s Start a Conversation
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-12">
              Whether you&apos;re looking to migrate to the cloud, optimize your existing infrastructure, or implement AI solutions, our team is ready to help you achieve your goals.
            </motion.p>

            <div className="space-y-8 mb-12">
              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-magenta/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent-magenta" size={22} />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold mb-1">Email</h4>
                  <a href="mailto:info@cloudlem.com" className="text-gray-500 hover:text-accent-blue transition-colors">
                    info@cloudlem.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent-teal" size={22} />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold mb-1">Phone</h4>
                  <a href="tel:+923554502615" className="text-gray-500 hover:text-accent-blue transition-colors">
                    +92 355 4502615
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent-purple" size={22} />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold mb-1">Location</h4>
                  <p className="text-gray-500">
                    Gilgit, Pakistan
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3">
               {socialLinks.map((item, i) => (
                 <a 
                   key={i} 
                   href={item.href} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all"
                 >
                   <item.icon size={18} />
                 </a>
               ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
             transition={{ delay: 0.2, duration: 0.8 }}
          >
             <ContactForm />
          </motion.div>

        </div>

        </div>
      </section>
    </main>
  );
}
