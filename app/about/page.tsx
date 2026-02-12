'use client';

import { motion } from 'framer-motion';
import { Rocket, CheckCircle } from 'lucide-react';

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

const values = [
  {
    title: 'Innovation',
    desc: 'Constantly exploring new technologies and methodologies.',
    color: 'text-accent-teal'
  },
  {
    title: 'Excellence',
    desc: 'Delivering high-quality solutions that exceed expectations.',
    color: 'text-accent-magenta'
  },
  {
    title: 'Collaboration',
    desc: 'Working closely with clients as strategic partners.',
    color: 'text-accent-purple'
  },
  {
    title: 'Integrity',
    desc: 'Maintaining transparency and ethical practices.',
    color: 'text-accent-yellow'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="relative bg-brand-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10">
          <div className="text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ duration: 0.8 }}
               className="text-hero text-white mb-6"
             >
               About <span className="text-gradient-vibrant">Cloudlem</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-3xl mx-auto font-light"
             >
               Driving digital transformation through DevOps, AI, and Cloud expertise
             </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="container-systems">

        {/* Story & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="relative"
           >
             <div className="aspect-video bg-white border border-gray-100 rounded-xl relative z-10 p-12 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-accent-teal/10 flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-accent-teal" />
                </div>
                <h3 className="text-3xl font-bold text-brand-dark mb-2">Since 2022</h3>
                <p className="text-gray-500">Embarking on a journey of innovation</p>
             </div>
           </motion.div>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, margin: "-100px" }}
           >
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded in 2022, Cloudlem emerged from a vision to bridge the gap between cutting-edge cloud technologies and businesses seeking digital transformation. Our team of DevOps engineers, cloud architects, and AI specialists came together with a shared mission: to make advanced cloud technologies accessible and beneficial for organizations of all sizes.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To simplify cloud transformation and empower businesses through modern, automated, and intelligent solutions across AWS, Azure, GCP, and hybrid environments.
                </p>
              </motion.div>
           </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center text-brand-dark mb-16"
          >
            Our <span className="text-gradient-vibrant">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CheckCircle className={`shrink-0 ${val.color}`} />
                <div>
                  <strong className="text-brand-dark block text-lg mb-1">{val.title}</strong>
                  <span className="text-gray-500">{val.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        </div>
      </section>

      {/* Projects Section - Dark Background */}
      <section className="bg-[#0F1629] py-24">
        <div className="container-systems">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
               <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">Featured Projects</motion.h2>
               <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="group cursor-pointer rounded-xl overflow-hidden relative bg-gradient-to-br from-brand-dark via-[#0A1628] to-brand-black border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/10"
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
