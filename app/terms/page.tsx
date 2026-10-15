import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Cloudlem website.",
};

export default function TermsPage() {
  return (
    <section className="bg-white pb-24 pt-36 text-slate-950">
      <div className="container-systems max-w-4xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated October 6, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Website use</h2>
            <p className="mt-2">
              You may use this website for lawful informational and business
              purposes. Do not attempt to disrupt the site, access restricted
              systems, or misuse its content.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Service engagements</h2>
            <p className="mt-2">
              Website content is general information, not a binding service
              offer. Project scope, responsibilities, fees, and delivery terms
              are defined in a separate written agreement.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Content</h2>
            <p className="mt-2">
              Cloudlem owns or licenses the website content unless stated
              otherwise. You may not republish it commercially without written
              permission.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a className="text-sky-700 underline" href="mailto:info@cloudlem.com">
                info@cloudlem.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
