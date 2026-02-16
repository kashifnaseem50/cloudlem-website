'use client';

import { ArrowRight, Brain, Code2, Workflow, Palette, TrendingUp, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI & Machine Learning',
    desc: 'Transform your business with intelligent automation and predictive analytics. Custom ML models tailored to your specific needs.',
    icon: Brain,
    features: ['Predictive Analytics', 'AI Workflow Automation', 'Custom Model Development', 'Data Pipeline Integration'],
    gradient: 'from-purple-500 to-pink-500',
    stats: '40% efficiency gain',
  },
  {
    title: 'Web Development',
    desc: 'Lightning-fast, scalable web applications built with cutting-edge frameworks. Optimized for performance and growth.',
    icon: Code2,
    features: ['React & Next.js', 'Performance Optimization', 'API Development', 'Progressive Web Apps'],
    gradient: 'from-blue-500 to-cyan-500',
    stats: '3x faster load times',
  },
  {
    title: 'DevOps & Cloud',
    desc: 'Automate deployments and scale infrastructure with confidence. CI/CD pipelines that deliver faster, more reliable releases.',
    icon: Workflow,
    features: ['CI/CD Pipelines', 'Cloud Architecture', 'Kubernetes & Docker', 'Infrastructure as Code'],
    gradient: 'from-emerald-500 to-teal-500',
    stats: '99.9% uptime',
  },
  {
    title: 'Design & Branding',
    desc: 'Create memorable brand experiences with sophisticated design systems. From visual identity to marketing campaigns.',
    icon: Palette,
    features: ['Brand Identity', 'UI/UX Design', 'Design Systems', 'Marketing Campaigns'],
    gradient: 'from-orange-500 to-red-500',
    stats: '2x engagement',
  },
  {
    title: 'Business Growth',
    desc: 'Strategic roadmaps to scale your operations and enter new markets. Data-driven insights that fuel sustainable growth.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Growth Strategy', 'Partnership Development', 'Revenue Optimization'],
    gradient: 'from-indigo-500 to-purple-500',
    stats: '5x ROI potential',
  },
];

const Services = () => {
  return (
    <section className="py-[120px] bg-linear-to-b from-white via-gray-50/50 to-white text-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container-systems relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-accent-blue/10 to-accent-teal/10 rounded-full mb-6">
            <Sparkles size={16} className="text-accent-blue" />
            <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">Enterprise Solutions</span>
          </div>
          
          <h2 className="text-[3.6rem] lg:text-[4.8rem] font-bold leading-[0.95] tracking-tighter mb-6">
            Services Built for <br />
            <span className="text-gradient-vibrant">Scale & Performance</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-brand-dark/60 leading-relaxed mb-8">
            Enterprise-grade solutions trusted by forward-thinking teams. 
            From intelligent automation to cloud-native infrastructure.
          </p>

          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-all hover:gap-3 group"
          >
            View All Services 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <Link href="/services" className="block h-full">
                <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200/60 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Hover background effect */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={26} className="text-white" strokeWidth={2.5} />
                    </div>

                    {/* Title & Stats */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-brand-dark group-hover:to-gray-600 transition-all">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Zap size={14} className={`text-transparent bg-clip-text bg-linear-to-r ${service.gradient}`} />
                        <span className={`text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r ${service.gradient}`}>
                          {service.stats}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                          <Shield size={14} className="text-gray-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-brand-dark font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More 
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-linear-to-r from-brand-dark to-gray-900 rounded-2xl text-white">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-white/70">Let's discuss your specific requirements and build something exceptional.</p>
            </div>
            <Link 
              href="/contact" 
              className="shrink-0 px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
