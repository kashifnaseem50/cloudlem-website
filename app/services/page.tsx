'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import { Settings, Cloud, Brain, Shield, Box, Gauge } from 'lucide-react';

const services = [
  {
    title: 'DevOps Consulting & Automation',
    description: 'End-to-end DevOps implementation including CI/CD pipelines, infrastructure as code, and automation strategies.',
    icon: Settings,
    gradient: 'from-accent-purple to-accent-magenta',
    features: [
      'CI/CD Pipeline Development',
      'Infrastructure as Code',
      'Containerization & Orchestration',
      'Monitoring & Observability'
    ]
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Design, implement, and manage scalable cloud infrastructure across AWS, Azure, and Google Cloud Platform.',
    icon: Cloud,
    gradient: 'from-accent-teal to-accent-blue',
    features: [
      'Cloud Migration & Modernization',
      'Multi-Cloud Strategy',
      'Serverless Architecture',
      'Cost Optimization'
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Build and deploy intelligent solutions with our AI/ML expertise, from data pipelines to production models.',
    icon: Brain,
    gradient: 'from-accent-yellow to-orange-500',
    features: [
      'MLOps Implementation',
      'Predictive Analytics',
      'Computer Vision Solutions',
      'Natural Language Processing'
    ]
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Implement robust security frameworks and ensure compliance with industry standards and regulations.',
    icon: Shield,
    gradient: 'from-red-500 to-accent-magenta',
    features: [
      'Security Architecture Design',
      'Compliance Auditing',
      'Identity & Access Management',
      'Threat Detection & Response'
    ]
  },
  {
    title: 'Kubernetes & Containerization',
    description: 'Containerize your applications and manage them at scale with Kubernetes and cloud-native technologies.',
    icon: Box,
    gradient: 'from-accent-purple to-indigo-500',
    features: [
      'Kubernetes Cluster Setup',
      'Helm Chart Development',
      'Service Mesh Implementation',
      'Auto-scaling Solutions'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your applications and infrastructure for maximum performance, scalability, and cost-efficiency.',
    icon: Gauge,
    gradient: 'from-green-500 to-accent-teal',
    features: [
      'Application Performance Tuning',
      'Database Optimization',
      'CDN Implementation',
      'Load Testing & Analysis'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="relative bg-brand-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10">
          <div className="text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ duration: 0.8 }}
               className="text-hero text-white mb-6"
             >
               Our <span className="text-gradient-vibrant">Services</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-3xl mx-auto font-light"
             >
               Comprehensive DevOps, Cloud, and AI solutions to accelerate your digital transformation
             </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="container-systems">

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard 
                  {...service} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
