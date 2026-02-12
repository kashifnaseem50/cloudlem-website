'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero - Professional corporate design
 * 
 * Clean, minimal hero with subtle gradient and professional typography.
 */
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Professional gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle tech-inspired gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0A1628] to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-teal/5" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 194, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 194, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Professional vignette for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/60" />
      </div>

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 h-full flex items-end pb-24 lg:pb-32">
        <div className="container-systems w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' as const }}
            className="max-w-4xl"
          >
            <h1 className="text-hero text-white mb-6">
              Personalization at the <br />
              pace of your thoughts
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed">
              Experience the future of intelligent cloud solutions, designed to adapt and evolve with your business needs.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-brand-dark font-bold rounded-md hover:bg-white/90 transition-all text-sm uppercase tracking-[0.15em]"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



