'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Folder } from 'lucide-react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  gradient: string;
  icon: React.ReactNode;
}

const BlogCard = ({ title, excerpt, category, date, gradient, icon }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="group relative h-full bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-6">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-md`}>
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-accent-blue transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-sm">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider mb-6 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Folder size={14} />
            <span>{category}</span>
          </div>
        </div>

        <Link href="/contact" className="link-learn-more">
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
