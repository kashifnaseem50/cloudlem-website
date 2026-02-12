'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  onLearnMore: (serviceTitle: string) => void;
}

const ServiceCard = ({ title, description, features, icon: Icon, gradient, onLearnMore }: ServiceCardProps) => {
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
            <Icon size={22} />
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight">{title}</h3>

        <p className="text-gray-500 mb-8 leading-relaxed text-sm">{description}</p>

        <ul className="space-y-3 mt-auto border-t border-gray-100 pt-6 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 shrink-0`} />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => onLearnMore(title)} className="link-learn-more">
          Learn More <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
