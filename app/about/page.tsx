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
        <div className="absolute inset-0 bg-linear-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-linear-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
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

      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-32">
        <div className="container-systems">
          {/* Mission & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                Building the future of <span className="text-gradient-vibrant">cloud technology</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Cloudlem started with a clear mission: make advanced AI, web, and DevOps capabilities practical for
                organizations that want to scale. We partner with clients to build systems that are efficient,
                reliable, and ready for growth.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-dark mb-1">2019</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-dark mb-1">50+</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-dark mb-1">15+</div>
                  <div className="text-sm text-gray-500">Countries Served</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-dark mb-1">100%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">Core Values</span>
              </div>
              
              <h2 className="text-4xl font-bold text-brand-dark mb-8">What drives us forward</h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div 
                    key={value.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-accent-teal to-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="text-white" size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-accent-blue/10 to-accent-purple/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">Our Team</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Meet the minds behind <span className="text-gradient-vibrant">Cloudlem</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A diverse team of engineers, designers, and strategists passionate about building exceptional solutions.
              </p>
            </motion.div>

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
