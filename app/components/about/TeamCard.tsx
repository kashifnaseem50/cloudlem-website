'use client';

import { motion } from 'framer-motion';
import { Users, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  gradient: string;
  github?: string;
}

const TeamCard = ({ name, role, description, gradient, github }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col items-center text-center p-8"
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Hover background effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`} />

      {/* Profile Icon */}
      <div className="mb-6 relative mt-2">
         <div className={`relative z-10 w-28 h-28 flex items-center justify-center rounded-2xl bg-linear-to-br ${gradient} p-[3px] shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
               <Users size={48} className="text-gray-300" strokeWidth={1.5} />
            </div>
         </div>
         {/* Decorative ring */}
         <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-brand-dark mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all">
          {name}
        </h3>
        
        <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-linear-to-r ${gradient} bg-opacity-10`}>
          <span className={`text-transparent bg-clip-text bg-linear-to-r ${gradient}`}>
            {role}
          </span>
        </span>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mt-auto">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-dark hover:text-white transition-all group/social"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-dark hover:text-white transition-all group/social"
          >
            <Twitter size={16} />
          </a>
          {github ? (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-dark hover:text-white transition-all group/social"
            >
              <Github size={16} />
            </a>
          ) : (
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-dark hover:text-white transition-all group/social"
            >
              <Github size={16} />
            </a>
          )}
        </div>

        {/* View Profile Link */}
        <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-brand-dark transition-colors mx-auto group-hover:gap-3">
          View Profile
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default TeamCard;
