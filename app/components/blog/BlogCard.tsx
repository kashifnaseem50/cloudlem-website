'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Folder, Clock, Sparkles } from 'lucide-react';
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
      className="group relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col"
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Hover background effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`} />

      <div className="relative z-10 p-8 grow flex flex-col">
        {/* Icon & Category Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r ${gradient} bg-opacity-10`}>
            <Folder size={12} className="text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 grow leading-relaxed text-[15px]">{excerpt}</p>

        {/* Date & Read Time */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-6 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-400" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gray-400" />
            <span className="font-medium">5 min read</span>
          </div>
        </div>

        {/* CTA */}
        <Link href="/contact" className="flex items-center gap-2 text-brand-dark font-semibold text-sm group-hover:gap-3 transition-all">
          Read Article
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
