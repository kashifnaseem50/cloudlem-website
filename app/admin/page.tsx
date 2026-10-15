
import Link from "next/link";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ArrowRight,
  BookOpen,
  FileText,
  Images,
  Inbox,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// DASHBOARD MODULES
const modules = [
  {
    title: "Blog Posts",
    description:
      "Create, edit, publish, and manage articles for your website.",
    icon: BookOpen,
    status: "Available",
    href: "/admin/blogs",
  },
  {
    title: "Customer Inquiries",
    description:
      "View customer requests, track enquiries, and manage follow-ups.",
    icon: Inbox,
    status: "Available",
    href: "/admin/inquiries",
  },
  {
    title: "Latest Insights",
    description:
      "Publish company updates, industry news, and insights.",
    icon: FileText,
    status: "Planned",
    href: null,
  },
  {
    title: "Services",
    description:
      "Add new services and manage existing offerings.",
    icon: TrendingUp,
    status: "Planned",
    href: null,
  },
  {
    title: "Media Library",
    description:
      "Manage images and other uploaded media.",
    icon: Images,
    status: "Planned",
    href: null,
  },
];

// SIGN OUT ACTION
async function signOutAction() {
  "use server";

  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/admin", "layout");

  redirect("/admin/login");
}

export default async function AdminDashboardPage() {
  // Verify administrator login and role.
  const { user, role, supabase } = await requireAdmin();

  // Count customer inquiries that need attention.
  const {
    count: newInquiryCount,
    error: countError,
  } = await supabase
    .from("service_inquiries")
    .select("id", {
      count: "exact",
      head: true,
    })
    .eq("status", "new");

  if (countError) {
    console.error(
      "Unable to count new inquiries:",
      countError.code
    );
  }

  const newCount = countError
    ? null
    : newInquiryCount;

  const activeModules = modules.filter(
    (module) => module.href !== null
  ).length;

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-5 pb-20 pt-28 text-[#F3F1EC]">
      <div className="mx-auto max-w-[1200px]">

        {/* DASHBOARD HEADER */}
        <div className="mb-10 flex flex-col gap-6 border-b border-white/[0.10] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LayoutDashboard
                size={15}
                className="text-[#C97A4A]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C97A4A]">
                Cloudlem Administration
              </span>
            </div>

            <h1 className="text-[34px] font-semibold tracking-[-0.05em] sm:text-[44px]">
              Admin Dashboard
            </h1>

            <p className="mt-3 max-w-[530px] text-[13px] leading-6 text-white/55">
              Manage your website content,
              customer inquiries, and digital
              presence from one place.
            </p>
          </div>

          {/* SIGN OUT */}
          <form action={signOutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.15] px-5 py-3 text-[11px] font-semibold text-white/75 transition-colors hover:border-[#C97A4A]/50 hover:text-white"
            >
              <LogOut size={15} />
              Sign Out
            </button>
          </form>
        </div>

        {/* WELCOME CARD */}
        <div className="mb-9 rounded-[6px] border border-white/[0.09] bg-[#171917] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* ADMIN INFORMATION */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C97A4A]">
                Welcome Back
              </p>

              <h2 className="mt-3 break-all text-[22px] font-semibold tracking-[-0.035em] sm:text-[26px]">
                {user.email ?? "Administrator"}
              </h2>

              <p className="mt-2 text-[12px] leading-6 text-white/55">
                Welcome to Cloudlem administration.
                Manage your content and customer requests
                securely from this dashboard.
              </p>
            </div>

            {/* ACCESS LEVEL */}
            <div className="flex items-center gap-3 rounded-[4px] border border-[#B5C7A7]/20 bg-[#B5C7A7]/[0.05] px-4 py-3">
              <ShieldCheck
                size={19}
                className="text-[#B5C7A7]"
              />

              <div>
                <p className="text-[10px] text-white/45">
                  Access Level
                </p>

                <p className="mt-1 text-[13px] font-semibold capitalize text-white">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NEW CUSTOMER INQUIRIES */}
        <Link
          href="/admin/inquiries"
          className="group mb-10 flex flex-col gap-4 rounded-[6px] border border-[#C97A4A]/20 bg-[#C97A4A]/[0.035] px-6 py-5 transition-colors hover:border-[#C97A4A]/45 hover:bg-[#C97A4A]/[0.06] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.07] text-[#D8B08B]">
              <Inbox
                size={21}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97A4A]">
                Customer Inquiries
              </p>

              <h3 className="mt-2 text-[17px] font-semibold text-white">
                {newCount === null
                  ? "Inquiry count unavailable"
                  : newCount === 0
                    ? "No new inquiries"
                    : `${newCount} New ${
                        newCount === 1
                          ? "Inquiry"
                          : "Inquiries"
                      }`}
              </h3>

              <p className="mt-2 text-[11px] text-white/50">
                Review customer requests and manage
                communication status.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-semibold text-[#D8B08B]">
            View Inquiries

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </Link>

        {/* CONTENT MANAGEMENT HEADER */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C97A4A]">
              Content & Customer Management
            </p>

            <h2 className="text-[24px] font-semibold tracking-[-0.04em] sm:text-[28px]">
              Manage Your Website
            </h2>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-white/45">
              {modules.length} Modules
            </p>

            <p className="mt-1 text-[10px] text-[#D8B08B]">
              {activeModules} Available
            </p>
          </div>
        </div>

        {/* DASHBOARD MODULE CARDS */}
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isAvailable = module.href !== null;

            const cardContent = (
              <>
                {/* ICON AND STATUS */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className={`text-[10px] ${
                      isAvailable
                        ? "text-[#D8B08B]"
                        : "text-white/40"
                    }`}
                  >
                    {module.status}
                  </span>
                </div>

                {/* MODULE TITLE */}
                <h3 className="text-[19px] font-semibold tracking-[-0.035em]">
                  {module.title}
                </h3>

                {/* MODULE DESCRIPTION */}
                <p className="mt-2 max-w-[360px] text-[12px] leading-6 text-white/55">
                  {module.description}
                </p>

                {/* NEW INQUIRY INDICATOR */}
                {module.title === "Customer Inquiries" && (
                  <p className="mt-4 text-[11px] font-medium text-[#D8B08B]">
                    {newCount === null
                      ? "Count currently unavailable"
                      : `${newCount} ${
                          newCount === 1
                            ? "new request"
                            : "new requests"
                        } awaiting review`}
                  </p>
                )}

                {/* NAVIGATION ARROW */}
                {isAvailable && (
                  <ArrowRight
                    size={16}
                    className="absolute bottom-6 right-6 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-[#D8B08B]"
                  />
                )}
              </>
            );

            // Working modules are clickable links.
            if (module.href) {
              return (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group relative block min-h-[190px] rounded-[6px] border border-white/[0.09] bg-[#181A18] p-6 pr-12 transition-colors hover:border-[#C97A4A]/40 hover:bg-[#1D201D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B]"
                >
                  {cardContent}
                </Link>
              );
            }

            // Planned modules are not clickable yet.
            return (
              <article
                key={module.title}
                className="relative min-h-[190px] rounded-[6px] border border-white/[0.07] bg-[#181A18] p-6 opacity-75"
              >
                {cardContent}
              </article>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.09] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/40">
            Cloudlem Content Management System
          </p>

          <p className="text-[10px] text-white/35">
            Secure administration powered by Supabase
          </p>
        </div>
      </div>
    </main>
  );
}
