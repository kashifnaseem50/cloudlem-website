'use client';

import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import { Brain, Server, Megaphone, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    title: 'Top AI Trends Businesses Should Watch in 2026',
    excerpt: 'A practical view of AI trends that can improve efficiency, reduce cost, and unlock new revenue.',
    category: 'AI',
    date: 'January 20, 2026',
    gradient: 'from-accent-purple to-accent-magenta',
    icon: <Brain size={24} />,
  },
  {
    title: 'DevOps Tips to Ship Faster with Confidence',
    excerpt: 'How strong CI/CD, monitoring, and infrastructure practices improve release speed and reliability.',
    category: 'DevOps',
    date: 'January 10, 2026',
    gradient: 'from-accent-teal to-accent-blue',
    icon: <Server size={24} />,
  },
  {
    title: 'Marketing Strategy for Technical Service Brands',
    excerpt: 'Actionable strategies for positioning, visual communication, and campaign performance.',
    category: 'Marketing',
    date: 'December 28, 2025',
    gradient: 'from-accent-yellow to-orange-500',
    icon: <Megaphone size={24} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Blog() {
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
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Insights & Resources</span>
            </div>
            
            <h1 className="text-hero text-white mb-6">
              Cloudlem <span className="text-gradient-vibrant">Blog</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto font-light"
          >
            Expert insights on AI, DevOps, and growth strategy to help leaders make better technology decisions.
          </motion.p>
        </div>
      </section>

      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-24">
        <div className="container-systems">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
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
