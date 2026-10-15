import {
  ArrowRight,
  ClipboardCheck,
  PenTool,
  Rocket,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, challenges, goals, and what needs to change.",
    icon: ClipboardCheck,
    accent: "text-[#A8C59A]",
    iconClass:
      "text-[#A8C59A] border-[#A8C59A]/25 bg-[#A8C59A]/[0.07]",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right approach, priorities, responsibilities, and route forward.",
    icon: PenTool,
    accent: "text-[#D9D0C4]",
    iconClass:
      "text-[#D9D0C4] border-[#D9D0C4]/25 bg-[#D9D0C4]/[0.06]",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We build, implement, test, and launch the solution in clear stages.",
    icon: Rocket,
    accent: "text-[#D99A67]",
    iconClass:
      "text-[#D99A67] border-[#D99A67]/25 bg-[#D99A67]/[0.07]",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We review results, remove friction, and support the next improvement.",
    icon: RefreshCw,
    accent: "text-[#C6A7A1]",
    iconClass:
      "text-[#C6A7A1] border-[#C6A7A1]/25 bg-[#C6A7A1]/[0.07]",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#B7B09F] py-10 text-[#171717] lg:py-12">
      <div className="container-systems">
        {/* Heading */}
        <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-10">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[#6C513D]">
              A Simple, Transparent Process
            </p>

            <h2 className="text-[2.1rem] font-semibold leading-none tracking-[-0.045em] text-[#171717] sm:text-[2.4rem]">
              How We Work
            </h2>
          </div>

          <p className="max-w-[520px] pb-1 text-[13px] leading-5 text-[#3F3B35]">
            From understanding your needs to delivering practical results.
          </p>
        </div>

        {/* Process */}
        <div className="rounded-[5px] bg-[#1A1A18] px-5 py-6 text-white lg:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex gap-4 xl:pr-8"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${step.iconClass}`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold ${step.accent}`}
                      >
                        {step.number}
                      </span>

                      <h3 className="text-[15px] font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-[220px] text-[11px] leading-5 text-white/90">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-1 top-3 hidden text-white/35 xl:block">
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;