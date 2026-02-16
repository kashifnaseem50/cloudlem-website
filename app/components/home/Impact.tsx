'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe2, Target } from 'lucide-react';

const Impact = () => {
  const stats = [
    { 
      label: 'Projects Delivered', 
      value: '50+',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Successfully delivered solutions'
    },
    { 
      label: 'Global Partners', 
      value: '15+',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Trusted enterprise clients'
    },
    { 
      label: 'Continents', 
      value: '3',
      icon: Globe2,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Global reach and impact'
    },
    { 
      label: 'Client Satisfaction', 
      value: '100%',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      description: '5-star client reviews'
    }
  ];

  return (
    <section className="py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container-systems relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">Our Impact</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.1] mb-6">
              Translating technology into{' '}
              <span className="text-gradient-vibrant">measurable results</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our enterprise-grade solutions deliver proven outcomes. From Fortune 500 companies to innovative startups, we help businesses achieve their digital transformation goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-700">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-700">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={22} className="text-white" strokeWidth={2.5} />
                </div>

                {/* Value */}
                <div className={`text-4xl lg:text-5xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-linear-to-r ${stat.gradient}`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-brand-dark font-semibold text-sm mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-500 text-xs">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
