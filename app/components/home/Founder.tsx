
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

// ==========================================
// CLOUDLEM — FOUNDER SECTION
// Premium White & Lavender Design
// ==========================================

const Founder = () => {
  return (
    <section
      id="founder"
      className="border-t border-[#E9E3ED] bg-[#F7F6F8] text-[#181818]"
    >
      <div className="container-systems py-8 lg:py-10">

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.78fr_1.12fr_0.78fr] lg:gap-8">

          {/* ======================================
              FOUNDER QUOTE
          ====================================== */}

          <div className="flex items-center">

            <blockquote className="relative w-full rounded-[8px] border border-[#E7DDEC] bg-white px-6 py-7 shadow-[0_6px_24px_rgba(53,30,67,0.035)] lg:px-7 lg:py-8">

              {/* QUOTE ICON */}

              <Quote
                size={24}
                strokeWidth={1.5}
                className="mb-5 text-[#8750AC]"
                aria-hidden="true"
              />

              {/* QUOTE TEXT */}

              <p className="text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-[#242027]">
                Technology should solve real business
                problems, not create more complexity.
              </p>

              {/* QUOTE FOOTER */}

              <div className="mt-5">

                <div className="h-px w-8 bg-[#A77BC5]" />

                <p className="mt-3 text-[10px] font-semibold text-[#756B7B]">
                  Kashif Naseem
                </p>

              </div>

            </blockquote>

          </div>

          {/* ======================================
              FOUNDER STORY
          ====================================== */}

          <div className="flex flex-col justify-center rounded-[8px] border border-[#E7DDEC] bg-[#F0E9F4] px-6 py-7 lg:px-7 lg:py-8">

            {/* SECTION LABEL */}

            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#8952AB]">
              Our Founder
            </p>

            {/* FOUNDER NAME */}

            <h2 className="text-[2rem] font-semibold leading-none tracking-[-0.045em] text-[#181818] sm:text-[2.25rem]">
              Kashif Naseem
            </h2>

            {/* POSITION */}

            <p className="mt-2 text-[11px] font-semibold text-[#8250A1]">
              Founder &amp; CEO, Cloudlem
            </p>

            {/* STORY */}

            <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-[#554C5C]">
              I started Cloudlem with a simple goal: to
              help businesses solve real problems with
              practical technology solutions. Our work
              brings together cloud engineering,
              automation, web development, bookkeeping,
              design, and growth support to help
              businesses operate more clearly and
              scale with confidence.
            </p>

            {/* ABOUT BUTTON */}

            <Link
              href="/about"
              className="group mt-6 inline-flex w-fit items-center gap-3 rounded-[4px] bg-[#36213F] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#7846A0] hover:shadow-[0_8px_24px_rgba(82,44,113,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8952AB]"
            >
              Meet Our Story

              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />

            </Link>

          </div>

          {/* ======================================
              FOUNDER PHOTOGRAPH
          ====================================== */}

          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] border border-[#E7DDEC] bg-[#E8DEED] lg:min-h-[350px]">

            <Image
              src="/images/backgrounds/1787845489206.jpeg"
              alt="Kashif Naseem, Founder and CEO of Cloudlem"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />

            {/* SUBTLE LAVENDER OVERLAY */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#261432]/20 via-transparent to-transparent" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Founder;
