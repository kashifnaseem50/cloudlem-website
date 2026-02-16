'use client';

import { ArrowUpRight, MapPin, Clock, Briefcase, Zap } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  level: string;
  description: string;
  tags: string[];
  gradient: string;
  onApply?: () => void;
}

const JobCard = ({ title, location, type, level, description, tags, gradient, onApply }: JobCardProps) => {
  return (
    <div className="group relative bg-white border border-gray-200/60 rounded-2xl p-8 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />
      
      {/* Hover background effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-2xl`} />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="grow">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r from-accent-blue/10 to-accent-purple/10 rounded-full mb-3">
              <Zap size={12} className="text-accent-blue" />
              <span className="text-xs font-semibold text-brand-dark/70">Hiring Now</span>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all">
              {title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
               <span className="flex items-center gap-2">
                 <MapPin size={16} className="text-gray-400" /> 
                 <span className="font-medium">{location}</span>
               </span>
               <span className="flex items-center gap-2">
                 <Clock size={16} className="text-gray-400" /> 
                 <span className="font-medium">{type}</span>
               </span>
               <span className="flex items-center gap-2">
                 <Briefcase size={16} className="text-gray-400" /> 
                 <span className="font-medium">{level}</span>
               </span>
            </div>
          </div>
          
          <div className={`shrink-0 px-4 py-2 rounded-lg bg-linear-to-r ${gradient} text-white shadow-lg`}>
            <span className="text-xs font-bold uppercase tracking-wider">
              {level}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-100">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 rounded-lg bg-gray-50 text-xs text-gray-600 border border-gray-200 font-medium hover:border-gray-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <button 
          onClick={onApply}
          className="group/btn flex items-center gap-2 text-brand-dark font-bold hover:text-white bg-white hover:bg-brand-dark border-2 border-brand-dark px-8 py-3 rounded-lg transition-all uppercase text-sm tracking-wider hover:gap-3"
        >
          Apply Now 
          <ArrowUpRight size={18} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
