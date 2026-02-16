"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 bg-linear-to-tr from-accent-blue/10 via-transparent to-accent-teal/10" />
      </div>

      <div className="relative z-10 h-full flex items-end pb-24 lg:pb-32">
        <div className="container-systems w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="max-w-4xl"
          >
            <h1 className="text-hero text-white mb-6">
              Scaling the Future with <br />
              AI and DevOps
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed">
              Cloudlem helps businesses grow with intelligent automation,
              high-performance web solutions, and cloud-native delivery systems
              built for scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-10 py-4 bg-white text-brand-dark font-bold rounded-md hover:bg-white/90 transition-all text-sm uppercase tracking-[0.15em]"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 border border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-all text-sm uppercase tracking-[0.15em]"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
