'use client';

import { LucideIcon, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
    <div className="group relative bg-white border border-gray-200/60 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full">
      
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Hover background effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`} />

      <div className="relative z-10 p-8 flex flex-col grow">
        {/* Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon size={26} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-linear-to-r from-accent-blue/10 to-accent-purple/10 rounded-full">
            <Sparkles size={12} className="text-accent-blue" />
            <span className="text-xs font-semibold text-brand-dark/70">Recommended</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8 grow pb-6 border-b border-gray-100">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
              <CheckCircle2 size={16} className={`text-transparent bg-clip-text bg-linear-to-r ${gradient} shrink-0`} strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="group/btn flex items-center gap-2 mt-auto px-8 py-4 rounded-lg bg-brand-dark text-white font-semibold text-sm hover:bg-brand-dark/90 transition-all w-full justify-center hover:gap-3">
          {cta}
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
