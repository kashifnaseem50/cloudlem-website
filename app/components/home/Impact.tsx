
"use client";

import { motion } from "framer-motion";

// ==========================================
// CLOUDLEM — BUSINESS IMPACT
// Reference-inspired editorial design
// ==========================================

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "15+",
    label: "Years of Experience",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative w-full overflow-hidden bg-white py-24 text-[#181818] sm:py-28 lg:py-36"
    >
      <div className="container-systems">

        {/* ======================================
            SECTION INTRODUCTION
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="max-w-[720px]"
        >

          {/* MAIN HEADING */}

          <h2
            id="impact-heading"
            className="max-w-[700px] text-[clamp(2.2rem,2.5vw,3.3rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#171717]"
          >
            From digital transformation to
            <br className="hidden sm:block" />
            {" "}AI-powered advantage
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-[500px] text-[15px] leading-[1.85] text-[#666666] sm:text-[16px]">
            Helping businesses move forward through
            technology, intelligent operations, and
            lasting partnerships.
          </p>

        </motion.div>

        {/* ======================================
            COMPANY IMPACT STATISTICS
        ====================================== */}

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 xl:gap-x-12">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group min-w-0"
            >

              {/* PURPLE HORIZONTAL RULE */}

              <div className="h-px w-full bg-[#B38AD2] transition-colors duration-300 group-hover:bg-[#7925AE]" />

              {/* STATISTIC VALUE */}

              <p className="mt-8 text-[clamp(3rem,4.2vw,4.5rem)] font-normal leading-none tracking-[-0.065em] text-[#7925AE] sm:mt-9">
                {stat.value}
              </p>

              {/* STATISTIC LABEL */}

              <p className="mt-4 text-[14px] font-medium leading-[1.5] tracking-[-0.015em] text-[#333333] sm:text-[15px]">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* ======================================
            SECTION BOTTOM SPACING
        ====================================== */}

        <div
          aria-hidden="true"
          className="h-4 sm:h-8"
        />

      </div>
    </section>
  );
}
