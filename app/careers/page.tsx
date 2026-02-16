'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import JobCard from '../components/careers/JobCard';
import JobApplicationModal from '../components/careers/JobApplicationModal';

const jobs = [
  {
    title: 'Senior DevOps Engineer',
    location: 'Gilgit, Pakistan / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'We\'re looking for an experienced DevOps Engineer to design and implement CI/CD pipelines, infrastructure as code, and cloud automation solutions for our clients.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD'],
    gradient: 'from-accent-teal to-accent-blue' 
  },
  {
    title: 'Cloud Solutions Architect',
    location: 'Gilgit, Pakistan / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Join our team as a Cloud Solutions Architect to design and implement cloud infrastructure solutions for enterprise clients across multiple cloud platforms.',
    tags: ['AWS', 'Azure', 'GCP', 'Architecture', 'Solutions'],
    gradient: 'from-accent-purple to-accent-magenta'
  },
  {
    title: 'AI/ML Engineer',
    location: 'Gilgit, Pakistan / Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'We\'re seeking an AI/ML Engineer to develop and deploy machine learning models and build MLOps pipelines for our clients across various industries.',
    tags: ['Python', 'TensorFlow', 'MLOps', 'AWS SageMaker', 'Data Engineering'],
    gradient: 'from-accent-yellow to-orange-500'
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

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

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
               Join Our <span className="text-gradient-vibrant">Team</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-lg text-white/70 max-w-2xl mx-auto font-light"
             >
               Build the future of cloud technology with us
             </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="container-systems">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Work at Cloudlem?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Cloudlem, we are building the next generation of cloud solutions while fostering a culture of innovation, collaboration, and continuous learning. Join us to work on challenging projects with cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {jobs.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <JobCard {...job} onApply={() => setSelectedJob(job.title)} />
            </motion.div>
          ))}
        </motion.div>

        </div>
      </section>

      <JobApplicationModal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ''}
      />
    </main>
  );
}
