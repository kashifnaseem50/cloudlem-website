'use client';

import { ArrowUpRight, MapPin } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  level: string;
  description: string;
  tags: string[];
  gradient: string;
}

const JobCard = ({ title, location, type, level, description, tags, gradient }: JobCardProps) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-accent-blue transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
               <span className="flex items-center gap-1">
                 <MapPin size={14} /> {location}
               </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
              {type}
            </span>
            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-xs font-medium text-white`}>
              {level}
            </span>
          </div>
        </div>

        <p className="text-gray-500 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full bg-gray-50 text-xs text-gray-500 border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-brand-dark font-bold group-hover:text-accent-blue transition-colors uppercase text-sm tracking-wider">
          Apply Now <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
