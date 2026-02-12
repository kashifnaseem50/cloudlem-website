'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI & Machine Learning',
    desc: 'Intelligent solutions and data models that improve decision-making and efficiency.',
  },
  {
    title: 'Web Development',
    desc: 'High-performance, scalable websites and web applications designed for growth.',
  },
  {
    title: 'DevOps',
    desc: 'Streamlined deployment pipelines and cloud infrastructure automation.',
  },
  {
    title: 'Graphic Design & Brand Promotion',
    desc: 'Visual identity, campaign assets, and email marketing that strengthen brand presence.',
  },
  {
    title: 'Business Development',
    desc: 'Strategic planning to scale operations, enter new markets, and drive revenue.',
  },
];

const Services = () => {
  return (
    <section className="py-[100px] bg-white text-brand-dark relative">
      <div className="container-systems">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[3.6rem] lg:text-[4.2rem] font-bold leading-[0.95] tracking-tighter mb-6">
              Our <span className="text-gradient-vibrant">Services</span>
            </h2>
            <h3 className="text-[1.8rem] lg:text-[2.2rem] font-bold leading-[1.15] tracking-tight text-brand-dark/80 mb-8">
              Five strategic pillars designed to help your business scale confidently.
            </h3>
            <Link href="/services" className="link-learn-more text-brand-dark">
              Explore Services <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.12 }}
                className="py-8 border-b border-gray-200 first:pt-0 last:border-b-0"
              >
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                <Link href="/services" className="link-learn-more">
                  Learn More <ArrowRight size={14} />
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
