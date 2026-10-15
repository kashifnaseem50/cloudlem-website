"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Cloud & DevOps",
    title: "Scaled Infrastructure for 5x Growth",
    description:
      "Built a high-availability cloud infrastructure to support rapid growth and peak season demand.",
    image: "/images/backgrounds/section-2-21.jpg",
    alt: "Cloud infrastructure monitoring and operations",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "5x", label: "Traffic Growth" },
      { value: "60%", label: "Lower Infra Costs" },
    ],
  },
  {
    category: "AI & Automation",
    title: "Automated 200+ Hours of Manual Work Monthly",
    description:
      "Implemented custom automation workflows across multiple departments.",
    image: "/images/backgrounds/section-1-4.jpg",
    alt: "Business team working on workflow automation",
    stats: [
      { value: "200+", label: "Hours Saved" },
      { value: "80%", label: "Faster Processing" },
      { value: "3x", label: "Team Productivity" },
    ],
  },
  {
    category: "Web Development",
    title: "Modern Website for a Growing Brand",
    description:
      "Designed and developed a conversion-focused website with modern UX/UI.",
    image: "/images/backgrounds/section-1-3.jpg",
    alt: "Modern website design and development",
    stats: [
      { value: "3x", label: "Higher Conversions" },
      { value: "50%", label: "Lower Bounce Rate" },
      { value: "2x", label: "Revenue Growth" },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="bg-[#D8D2C8] py-11 text-[#181817] lg:py-14"
    >
      <div className="container-systems">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-12">
            <div className="shrink-0">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#6F4D34]">
                Real Businesses. Real Results.
              </p>

              <h2 className="text-[2.15rem] font-semibold leading-none tracking-[-0.045em] text-[#181817] sm:text-[2.35rem]">
                Selected Work
              </h2>
            </div>

            <p className="max-w-[440px] pb-1 text-[13px] leading-5 text-[#47443F]">
              A look at some of the businesses we&apos;ve helped transform.
            </p>
          </div>

          <Link
            href="/solutions"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#181817]/45 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#181817] transition-colors duration-200 hover:border-[#8B5E3C] hover:text-[#8B5E3C]"
          >
            View All Case Studies

            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative min-h-[400px] overflow-hidden rounded-[4px] bg-[#1A1A18]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Stronger cinematic fade for readability */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.05)_0%,rgba(10,10,9,0.16)_32%,rgba(15,15,13,0.82)_58%,rgba(12,12,11,0.99)_100%)]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[400px] flex-col justify-end p-5">
                {/* Category */}
                <span className="mb-3 w-fit border border-white/20 bg-black/35 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="max-w-[350px] text-[18px] font-semibold leading-[1.3] tracking-[-0.025em] text-white sm:text-[19px]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[380px] min-h-[42px] text-[12.5px] leading-[1.55] text-white/80">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/15 pt-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[20px] font-semibold leading-none tracking-[-0.03em] text-white transition-colors duration-200 group-hover:text-[#E3B48D]">
                        {stat.value}
                      </p>

                      <p className="mt-1.5 text-[9px] leading-3 text-white/65">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle hover line */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-[#A66F45] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;