"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Globe2, Target } from "lucide-react";
import { useState, useEffect } from "react";

const Slideshow = ({
  images,
  alt = "Background",
}: {
  images: string[];
  alt?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={images[currentIndex]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
};

const Impact = () => {
  const stats = [
    {
      label: "Projects Delivered",
      value: "50+",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      description: "Successfully delivered solutions",
    },
    {
      label: "Global Partners",
      value: "15+",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      description: "Trusted enterprise clients",
    },
    {
      label: "Continents",
      value: "3",
      icon: Globe2,
      gradient: "from-emerald-500 to-teal-500",
      description: "Global reach and impact",
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      description: "5-star client reviews",
    },
  ];

  return (
    <section className="py-32 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <Slideshow
          images={[
            "/images/backgrounds/section-1-1.jpg",
            "/images/backgrounds/section-1-2.jpg",
            "/images/backgrounds/section-1-3.jpg",
            "/images/backgrounds/section-1-4.jpg",
          ]}
          alt="Impact Section Background"
        />
        <div className="absolute inset-0 bg-brand-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-brand-black z-10" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
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
            className="bg-brand-black/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Our Impact
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Translating technology into{" "}
              <span className="text-gradient-vibrant">measurable results</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Our enterprise-grade solutions deliver proven outcomes. From
              Fortune 500 companies to innovative startups, we help businesses
              achieve their digital transformation goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold text-white/80">
                  99.9% Uptime SLA
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-semibold text-white/80">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm font-semibold text-white/80">
                  24/7 Support
                </span>
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
                className="group relative bg-white/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon
                    size={22}
                    className="text-white"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Value */}
                <div
                  className={`text-4xl lg:text-5xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-linear-to-r ${stat.gradient}`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-white/60 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
