import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, center = false }: Props) {
  return (
    <div className={center ? "mx-auto max-w-[740px] text-center" : "max-w-[740px]"}>
      <div className={`mb-6 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-[#75449B]" aria-hidden="true" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#75449B]">{eyebrow}</p>
      </div>
      <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#24172F]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[680px] text-[14px] leading-[1.95] text-[#655B70] sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
