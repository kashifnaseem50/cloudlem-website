'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Transformation',
    desc: 'Unlock business value through generative AI and intelligent automation.',
  },
  {
    title: 'Cloud Engineering',
    desc: 'Scalable, secure, and resilient cloud architectures for the modern enterprise.',
  },
  {
    title: 'DevOps & Automation',
    desc: 'Accelerate delivery with CI/CD, Infrastructure as Code, and SRE best practices.',
  }
];

// Gradient colors for individual letters in heading — Systems Limited signature
const gradientLetters = [
  { letter: 'O', gradient: 'from-accent-purple to-accent-magenta' },
  { letter: 'S', gradient: 'from-accent-teal to-accent-blue' },
];

const Services = () => {
  return (
    <section className="py-[100px] bg-white text-brand-dark relative">
      <div className="container-systems">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column — Giant heading with gradient letter masking */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[4.5rem] lg:text-[5.5rem] font-bold leading-[0.95] tracking-tighter mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-purple to-accent-magenta">O</span>ur{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-teal to-accent-blue">S</span>ervices
            </h2>
            <h3 className="text-[2.5rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tighter text-brand-dark/80 mb-8">
              Redefining inn<span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-magenta to-accent-pink">o</span>vati<span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-yellow to-orange-500">o</span>n across{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-teal to-accent-cyan">the</span> globe
            </h3>
            <Link 
              href="/contact" 
              className="link-learn-more text-brand-dark"
            >
              GET IN TOUCH <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column — Stacked service list */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 }}
                className="py-8 border-b border-gray-200 first:pt-0 last:border-b-0 group"
              >
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                <Link href="/services" className="link-learn-more">
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
