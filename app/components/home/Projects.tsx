'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Zap, Shield, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'AWS Migration for E-commerce',
    category: 'Cloud Migration',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Migrated a legacy e-commerce platform serving 1M+ customers to AWS, achieving 99.9% uptime and 40% infrastructure cost reduction.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Redis'],
    results: [
      { label: '40%', desc: 'Cost reduction' },
      { label: '99.9%', desc: 'Uptime achieved' },
      { label: '15min', desc: 'Deployment time' }
    ],
    highlight: 'Featured Case Study'
  },
  {
    title: 'GCP AI Platform for Healthcare',
    category: 'AI/ML',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Built a predictive analytics platform on GCP for processing healthcare data and optimizing insights for patient care optimization.',
    tags: ['GCP', 'AI/ML', 'BigQuery', 'TensorFlow'],
    results: [
      { label: '85%', desc: 'Prediction accuracy' },
      { label: '10x', desc: 'Faster processing' },
      { label: 'HIPAA', desc: 'Compliant' }
    ],
    highlight: 'Award Winner'
  },
  {
    title: 'Azure DevOps for Financial Services',
    category: 'DevOps & CI/CD',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Implemented Azure DevOps pipelines for a financial services company, enabling faster and more reliable software deployments.',
    tags: ['Azure', 'DevOps', 'CI/CD', 'Docker'],
    results: [
      { label: '70%', desc: 'Faster deployments' },
      { label: '0', desc: 'Downtime' },
      { label: '100%', desc: 'Compliant' }
    ],
    highlight: 'Enterprise Solution'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-[120px] bg-linear-to-b from-brand-black via-[#0F1629] to-brand-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container-systems relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <TrendingUp size={16} className="text-accent-cyan" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Success Stories</span>
          </div>

          <h2 className="text-[3.6rem] lg:text-[4.8rem] font-bold leading-[0.95] tracking-tighter mb-6">
            Featured <span className="text-gradient-vibrant">Case Studies</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real-world results from enterprise clients. See how we deliver measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="relative h-full bg-linear-to-br from-white/5 via-white/2 to-transparent rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-cyan/10 overflow-hidden">
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Badge & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon size={26} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-accent-cyan font-bold text-xs uppercase tracking-widest px-3 py-1 bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-white/50 font-semibold text-xs uppercase tracking-widest mb-3 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-accent-cyan transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-white/5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/70 border border-white/10 hover:border-white/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold mb-1 text-transparent bg-clip-text bg-linear-to-r ${project.gradient}`}>
                          {result.label}
                        </div>
                        <div className="text-white/50 text-xs">
                          {result.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
