'use client';

import { motion } from 'framer-motion';
import TeamCard from '../components/about/TeamCard';
import { CheckCircle } from 'lucide-react';

const team = [
  {
    name: 'Technical Excellence Team',
    role: 'Engineering & Architecture',
    description:
      'Experts in cloud platforms, DevOps automation, and AI system implementation.',
    gradient: 'from-accent-teal to-accent-blue',
  },
  {
    name: 'Creative & Brand Team',
    role: 'Design & Communication',
    description:
      'Focused on visual identity, brand promotion, and high-converting digital experiences.',
    gradient: 'from-accent-purple to-accent-magenta',
  },
  {
    name: 'Growth Strategy Team',
    role: 'Business Development',
    description:
      'Specialists in market expansion, partnerships, and scalable growth frameworks.',
    gradient: 'from-accent-yellow to-orange-500',
  },
];

const values = [
  { title: 'Innovation', desc: 'We constantly explore and apply modern technology to create better outcomes.' },
  { title: 'Reliability', desc: 'We deliver dependable systems, clear processes, and consistent execution.' },
  { title: 'Client Growth', desc: 'We align every initiative with measurable business growth and impact.' },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-brand-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        <div className="container-systems relative z-10 text-center">
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
            People do business with people. We combine technology, creativity, and strategy to help businesses grow.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-systems">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Cloudlem started with a clear mission: make advanced AI, web, and DevOps capabilities practical for
                organizations that want to scale. We partner with clients to build systems that are efficient,
                reliable, and ready for growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Core Values</h2>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-3 p-5 border border-gray-100 rounded-xl">
                    <CheckCircle className="text-accent-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
