'use client';

import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import { Server, Brain, Shield } from 'lucide-react';

const blogPosts = [
  {
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Learn how to optimize your Kubernetes clusters for production workloads with these proven strategies.',
    category: 'DevOps',
    date: 'May 15, 2023',
    gradient: 'from-accent-teal to-accent-blue',
    icon: <Server size={24} />
  },
  {
    title: 'Implementing MLOps with AWS SageMaker',
    excerpt: 'A comprehensive guide to building machine learning pipelines with AWS SageMaker and DevOps principles.',
    category: 'AI/ML',
    date: 'April 28, 2023',
    gradient: 'from-accent-purple to-accent-magenta',
    icon: <Brain size={24} />
  },
  {
    title: 'Cloud Security Best Practices',
    excerpt: 'Essential security measures every organization should implement when moving to the cloud.',
    category: 'Security',
    date: 'April 12, 2023',
    gradient: 'from-accent-yellow to-orange-500',
    icon: <Shield size={24} />
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

export default function Blog() {
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
               Cloudlem <span className="text-gradient-cyan">Blog</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-2xl mx-auto font-light"
             >
               Insights, tutorials, and updates on DevOps, Cloud, and AI technologies
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
          animate="visible"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
    </main>
  );
}
