'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  onLearnMore: (serviceTitle: string) => void;
}

const ServiceCard = ({ title, description, features, icon: Icon, gradient, onLearnMore }: ServiceCardProps) => {
  // Generate a stat based on the service
  const stats = {
    'AI & Machine Learning': '40% efficiency gain',
    'Web Development': '3x faster load times',
    'DevOps': '99.9% uptime',
    'Graphic Design & Brand Promotion': '2x engagement',
    'Business Development': '5x ROI potential'
  };

  const stat = stats[title as keyof typeof stats] || 'Enterprise-grade';

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
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon size={26} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Title & Stats */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <Zap size={14} className={`text-transparent bg-clip-text bg-linear-to-r ${gradient}`} />
            <span className={`text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r ${gradient}`}>
              {stat}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6 pb-6 border-t border-gray-100 pt-6 grow">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className={`text-transparent bg-clip-text bg-linear-to-r ${gradient} shrink-0`} strokeWidth={2.5} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
          type="button" 
          onClick={() => onLearnMore(title)} 
          className="flex items-center gap-2 text-brand-dark font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
        >
          Learn More 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
