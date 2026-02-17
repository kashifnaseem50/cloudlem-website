'use client';

import { motion } from 'framer-motion';
import SolutionCard from '../components/solutions/SolutionCard';
import { Zap, Building2, Bot, Target } from 'lucide-react';

const solutions = [
  {
    title: 'Startups',
    description: 'Accelerate your growth with scalable infrastructure, automated deployments, and cost-optimized cloud solutions.',
    icon: Zap,
    gradient: 'from-accent-teal to-accent-blue',
    cta: 'Get Started',
    features: [
      'Scalable CI/CD Pipelines',
      'Kubernetes for Rapid Scaling',
      'Cloud Cost Optimization',
      'MVP Development Support'
    ]
  },
  {
    title: 'Enterprises',
    description: 'Modernize legacy systems, implement automation, and ensure compliance with enterprise-grade cloud solutions.',
    icon: Building2,
    gradient: 'from-accent-purple to-accent-magenta',
    cta: 'Learn More',
    features: [
      'Legacy System Modernization',
      'Enterprise Automation',
      'Compliance & Security',
      'Multi-Cloud Strategy'
    ]
  },
  {
    title: 'AI Companies',
    description: 'Build, train, and deploy AI models at scale with our MLOps expertise and cloud infrastructure.',
    icon: Bot,
    gradient: 'from-accent-yellow to-orange-500',
    cta: 'Explore AI Solutions',
    features: [
      'Model Serving Infrastructure',
      'MLOps Implementation',
      'Vector Databases',
      'Data Pipeline Automation'
    ]
  }
];

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

export default function Solutions() {
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
                 <Target size={16} className="text-accent-cyan" />
                 <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Industry Solutions</span>
               </div>
               
               <h1 className="text-hero text-white mb-6">
                 Tailored <span className="text-gradient-vibrant">Solutions</span>
               </h1>
             </motion.div>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-2xl mx-auto font-light"
             >
               Cloud-native and AI-powered solutions designed for your specific industry challenges and growth goals.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-24">
        <div className="container-systems">

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SolutionCard {...solution} />
            </motion.div>
          ))}
        </motion.div>

        </div>
      </section>
    </main>
  );
}
