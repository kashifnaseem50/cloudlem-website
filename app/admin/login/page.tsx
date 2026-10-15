
import Image from "next/image";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";
import { login } from "./actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string | string[];
  }>;
};

export default async function AdminLoginPage({
  searchParams,
}: LoginPageProps) {
  const params = await searchParams;

  const errorCode = Array.isArray(params.error)
    ? params.error[0]
    : params.error;

  const errorMessage =
    errorCode === "unauthorized"
      ? "This account does not have administrator access."
      : errorCode === "temporary"
        ? "Unable to verify permissions. Please try again."
        : errorCode === "invalid"
          ? "Invalid email or password. Please try again."
          : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0D0C] px-5 pb-16 pt-28 text-[#F3F1EC]">
      <div className="w-full max-w-[420px]">
        {/* BRAND */}
        <div className="mb-9 flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[8px] bg-[#F3F1EC]">
            <Image
              src="/images/backgrounds/logo.jpeg"
              alt="Cloudlem logo"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C97A4A]">
            Cloudlem
          </p>

          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.05em] text-[#F3F1EC]">
            Admin Portal
          </h1>

          <p className="mt-3 max-w-[320px] text-[12px] leading-6 text-white/55">
            Sign in to manage Cloudlem website content,
            insights, and services.
          </p>
        </div>

        {/* LOGIN FORM */}
        <div className="rounded-[6px] border border-white/[0.10] bg-[#161816] p-7 sm:p-9">
          <div className="mb-7 flex items-center gap-3 border-b border-white/[0.08] pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#C97A4A]/30 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
              <LockKeyhole size={18} strokeWidth={1.6} />
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-[#F3F1EC]">
                Administrator Login
              </h2>

              <p className="mt-1 text-[10px] text-white/45">
                Authorized access only
              </p>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <div
              role="alert"
              className="mb-5 rounded-[4px] border border-red-400/25 bg-red-400/[0.07] px-4 py-3 text-[12px] leading-5 text-red-200"
            >
              {errorMessage}
            </div>
          )}

          <form action={login} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[11px] font-medium text-white/80"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="admin@cloudlem.com"
                required
                maxLength={254}
                className="h-12 w-full rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-medium text-white/80"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="h-12 w-full rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-[4px] bg-[#D8D2C8] text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515] transition-colors hover:bg-[#F3F1EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B]"
            >
              Sign In to Dashboard

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        {/* SECURITY NOTE */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center">
          <ShieldCheck
            size={14}
            className="text-[#C97A4A]"
          />

          <p className="text-[10px] text-white/40">
            Secure administrator authentication
          </p>
        </div>

        <p className="mt-6 text-center text-[10px] text-white/30">
          © {new Date().getFullYear()} Cloudlem Pvt Ltd.
          All rights reserved.
        </p>
      </div>
    </main>
  );
}
