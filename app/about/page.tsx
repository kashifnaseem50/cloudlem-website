'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Target, Rocket, Shield, Users, Zap, Globe2 } from 'lucide-react';

const values = [
  {
    title: "Innovation",
    desc: "We constantly explore and apply modern technology to create better outcomes.",
  },
  {
    title: "Reliability",
    desc: "We deliver dependable systems, clear processes, and consistent execution.",
  },
  {
    title: "Client Growth",
    desc: "We align every initiative with measurable business growth and impact.",
  },
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
            People do business with people. We combine technology, creativity,
            and strategy to help businesses grow.
          </motion.p>
        </div>
      </section>

      <section className="bg-linear-to-b from-white via-gray-50/50 to-white py-32">
        <div className="container-systems">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-accent-purple/10 to-accent-magenta/10 rounded-full mb-6">
                <Rocket size={16} className="text-accent-purple" />
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">
                  Our Vision
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight max-w-4xl mx-auto">
                To become a globally trusted{" "}
                <span className="text-gradient-vibrant">cloud and AI innovation</span> company
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We envision a world where <strong>advanced cloud infrastructure, DevOps automation, and AI systems</strong> are accessible, scalable, and designed to create meaningful impact for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to empower businesses, communities, and future leaders through <strong>secure, ethical, and intelligent technology</strong> that drives sustainable growth and innovation.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-accent-blue/10 to-accent-cyan/10 rounded-full mb-6">
                <Target size={16} className="text-accent-blue" />
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight max-w-4xl mx-auto">
                Design, secure, and optimize{" "}
                <span className="text-gradient-vibrant">cloud-native and AI-powered solutions</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Cloudlem's mission is to help businesses scale with confidence through secure, intelligent, and automated infrastructure solutions.
                </p>

                <h3 className="text-2xl font-bold text-brand-dark mb-6">We achieve this by:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, text: "Delivering secure and scalable cloud architectures", gradient: "from-emerald-500 to-teal-500" },
                    { icon: Zap, text: "Building intelligent AI-driven systems", gradient: "from-purple-500 to-pink-500" },
                    { icon: Rocket, text: "Automating infrastructure with DevOps best practices", gradient: "from-blue-500 to-cyan-500" },
                    { icon: CheckCircle, text: "Prioritizing cybersecurity, compliance, and reliability", gradient: "from-orange-500 to-red-500" },
                    { icon: Users, text: "Fostering innovation, mentorship, and global collaboration", gradient: "from-indigo-500 to-purple-500" },
                    { icon: Globe2, text: "Building systems that create long-term value and growth", gradient: "from-teal-500 to-emerald-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
                    >
                      <div className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="bg-linear-to-r from-brand-dark to-gray-900 rounded-2xl p-8 text-center text-white"
              >
                <p className="text-xl font-semibold mb-2">Our goal is not just to deploy technology —</p>
                <p className="text-2xl font-bold">but to build systems that create long-term value, stability, and growth.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent-teal rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">
                  Core Values
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                What drives us <span className="text-gradient-vibrant">forward</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-linear-to-br from-accent-teal to-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                    <CheckCircle
                      className="text-white"
                      size={28}
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-accent-blue/10 to-accent-purple/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-brand-dark/70 uppercase tracking-wider">
                  Our Motivation
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                What fuels our{" "}
                <span className="text-gradient-vibrant">Passion</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The driving forces behind our commitment to delivering
                exceptional results for every client.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Purpose-Driven Impact",
                  desc: "We are motivated by the tangible impact our work has on businesses. Solving complex technical challenges to unlock real-world value is what gets us out of bed.",
                  gradient: "from-accent-teal to-accent-blue",
                },
                {
                  title: "Relentless Curiosity",
                  desc: "Technology never stops evolving, and neither do we. Our passion for learning ensures we're always bringing the most advanced and effective solutions to the table.",
                  gradient: "from-accent-purple to-accent-magenta",
                },
                {
                  title: "Partnership Success",
                  desc: "Your win is our win. We are driven by building long-term partnerships where we become an integral part of your growth story, not just a service provider.",
                  gradient: "from-accent-yellow to-orange-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all h-full"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r ${item.gradient}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
