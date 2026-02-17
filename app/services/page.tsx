'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import ServiceInquiryModal from '../components/services/ServiceInquiryModal';
import { Brain, Globe, ServerCog, Palette, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions and data models for automation, prediction, and business intelligence.',
    icon: Brain,
    gradient: 'from-accent-purple to-accent-magenta',
    features: ['Predictive Analytics', 'AI Workflow Automation', 'Recommendation Engines', 'Model Deployment Pipelines'],
  },
  {
    title: 'Web Development',
    description: 'High-performance, scalable websites and applications engineered for speed and reliability.',
    icon: Globe,
    gradient: 'from-accent-teal to-accent-blue',
    features: ['Custom Web Platforms', 'Performance Optimization', 'Scalable Architecture', 'SEO-Ready Development'],
  },
  {
    title: 'DevOps',
    description: 'End-to-end deployment automation and cloud infrastructure streamlining for faster delivery.',
    icon: ServerCog,
    gradient: 'from-accent-yellow to-orange-500',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Cloud Monitoring', 'Kubernetes Operations'],
  },
  {
    title: 'Graphic Design & Brand Promotion',
    description: 'Visual identity design and campaign execution including email marketing systems.',
    icon: Palette,
    gradient: 'from-red-500 to-accent-magenta',
    features: ['Brand Identity', 'Campaign Creatives', 'Email Marketing Design', 'Marketing Collateral'],
  },
  {
    title: 'Business Development',
    description: 'Growth-focused strategy to scale your business, open markets, and improve conversion systems.',
    icon: TrendingUp,
    gradient: 'from-green-500 to-accent-teal',
    features: ['Growth Strategy', 'Market Expansion', 'Partnership Development', 'Revenue Optimization'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <section className="relative bg-brand-black pt-32 pb-24">
        <div className="absolute inset-0 bg-linear-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-linear-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
              <Sparkles size={16} className="text-accent-cyan" />
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-hero text-white mb-6">
              Our <span className="text-gradient-vibrant">Services</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-3xl mx-auto font-light"
          >
            Enterprise-grade solutions trusted by forward-thinking teams. Click any service to learn more and get started.
          </motion.p>
        </div>
      </section>

      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-24">
        <div className="container-systems">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard {...service} onLearnMore={setSelectedService} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceInquiryModal
        serviceTitle={selectedService || ''}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
