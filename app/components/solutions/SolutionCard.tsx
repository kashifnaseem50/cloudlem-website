'use client';

import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  cta: string;
}

const SolutionCard = ({ title, description, features, icon: Icon, gradient, cta }: SolutionCardProps) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Top Gradient Bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="relative z-10 p-8 flex flex-col flex-grow">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-md`}>
          <Icon size={28} className="text-white" />
        </div>

        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="mt-auto px-6 py-3 rounded-md bg-brand-dark text-white font-bold text-sm hover:bg-brand-dark/90 transition-all w-fit uppercase tracking-wider">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
