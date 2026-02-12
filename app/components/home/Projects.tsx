'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AWS Migration for E-commerce',
    category: 'Cloud Migration',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2232&auto=format&fit=crop',
    description: 'Migrated a legacy e-commerce platform serving 1M+ customers to AWS, achieving 99.9% uptime and 40% infrastructure cost reduction.',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Redis'],
    results: [
      '40% reduction in infrastructure costs',
      '99.9% uptime achieved',
      'Deployment time reduced from 4 hours to 15 minutes'
    ]
  },
  {
    title: 'GCP AI Platform for Healthcare',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2232&auto=format&fit=crop',
    description: 'Built a predictive analytics platform on GCP for processing healthcare data and optimizing insights for patient care optimization.',
    tags: ['GCP', 'AI/ML', 'BigQuery', 'TensorFlow'],
    results: [
      '85% accuracy in patient risk prediction',
      'Processing time reduced from days to hours',
      'HIPAA compliant architecture'
    ]
  },
  {
    title: 'Azure DevOps for Financial Services',
    category: 'DevOps & CI/CD',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2232&auto=format&fit=crop',
    description: 'Implemented Azure DevOps pipelines for a financial services company, enabling faster and more reliable software deployments.',
    tags: ['Azure', 'DevOps', 'CI/CD', 'Docker'],
    results: [
      'Deployment time reduced by 70%',
      'Zero downtime deployments achieved',
      'Compliance with financial regulations'
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-[100px] bg-[#0F1629] text-white">
      <div className="container-systems">
        {/* Centered section header — like Systems Limited "Featured Insights" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title-light">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer rounded-xl overflow-hidden relative bg-gradient-to-br from-brand-dark via-[#0A1628] to-brand-black border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="p-8 flex flex-col h-full min-h-[450px]">
                <span className="text-accent-cyan font-bold text-xs uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-md text-xs text-white/80 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Results */}
                {project.results && (
                  <div className="space-y-2 mt-auto">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Results:</p>
                    {project.results.map((result, i) => (
                      <p key={i} className="text-white/80 text-sm flex items-start gap-2">
                        <span className="text-accent-cyan mt-1">•</span>
                        <span>{result}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
