'use client';

import { motion } from 'framer-motion';

const Impact = () => {
  const stats = [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Global Partners', value: '15+' },
    { label: 'Continents', value: '3' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-systems relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left statement — like Systems Limited */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
              Translating technology into a{' '}
              <span className="text-gradient-vibrant">positive impact</span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg leading-relaxed">
              Our approach allows us to deliver exceptional experiences across every touchpoint.
            </p>
          </motion.div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="text-center lg:text-left border-l-2 border-gray-200 pl-6"
              >
                <div className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight text-brand-dark">{stat.value}</div>
                <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
