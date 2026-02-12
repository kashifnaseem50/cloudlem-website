'use client';

import { motion } from 'framer-motion';
import { User, Linkedin, Twitter, Github } from 'lucide-react';

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
      className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center p-8"
    >
      {/* Top Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

      {/* Profile Icon */}
      <div className="mb-6 relative mt-2">
         <div className={`relative z-10 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} p-[2px]`}>
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
               <User size={40} className="text-gray-300" />
            </div>
         </div>
      </div>

      <h3 className="text-xl font-bold text-brand-dark mb-1 leading-tight">
        {name}
      </h3>
      
      <span className={`text-xs font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {role}
      </span>
      
      <p className="text-gray-500 mb-6 leading-relaxed text-sm">
        {description}
      </p>

      {/* Social Links */}
      <div className="flex bg-gray-50 rounded-full px-4 py-2 gap-4 mt-auto border border-gray-100">
        <Linkedin size={16} className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors" />
        <Twitter size={16} className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors" />
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
             <Github size={16} className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors" />
          </a>
        )}
        {!github && (
           <Github size={16} className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors" />
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
