
import Link from "next/link";

import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Inbox,
  Mail,
  Save,
  ShieldCheck,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";
import { updateInquiryStatus } from "./actions";

export const dynamic = "force-dynamic";

type AdminInquiriesPageProps = {
  searchParams: Promise<{
    success?: string | string[];
    error?: string | string[];
  }>;
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminInquiriesPage({
  searchParams,
}: AdminInquiriesPageProps) {
  // Verify administrator permissions.
  const { supabase } = await requireAdmin();

  const query = await searchParams;

  // Fetch the latest customer inquiries.
  const { data: inquiries, error } = await supabase
    .from("service_inquiries")
    .select(
      "id, service_title, full_name, email, company, details, status, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error(
      "Failed to load service inquiries:",
      error.code
    );
  }

  // Inquiry counters.
  const total = inquiries?.length ?? 0;

  const newCount =
    inquiries?.filter(
      (item) => item.status === "new"
    ).length ?? 0;

  const contactedCount =
    inquiries?.filter(
      (item) => item.status === "contacted"
    ).length ?? 0;

  const closedCount =
    inquiries?.filter(
      (item) => item.status === "closed"
    ).length ?? 0;

  // Read feedback messages.
  const successCode = Array.isArray(query.success)
    ? query.success[0]
    : query.success;

  const errorCode = Array.isArray(query.error)
    ? query.error[0]
    : query.error;

  const successMessage =
    successCode === "updated"
      ? "Inquiry status updated successfully."
      : null;

  const errorMessages: Record<string, string> = {
    forbidden:
      "You do not have permission to update inquiries.",
    invalid:
      "Invalid inquiry information. Please try again.",
    database:
      "Unable to update the inquiry. Please try again.",
    notfound:
      "The selected inquiry could not be found.",
  };

  const errorMessage = errorCode
    ? errorMessages[errorCode]
    : null;

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-5 pb-24 pt-28 text-[#F3F1EC]">
      <div className="mx-auto max-w-[1200px]">

        {/* BACK NAVIGATION */}
        <Link
          href="/admin"
          className="mb-8 inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to Dashboard
        </Link>

        {/* PAGE HEADER */}
        <div className="mb-9 flex flex-col gap-5 border-b border-white/[0.10] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Inbox
                size={15}
                className="text-[#C97A4A]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C97A4A]">
                Customer Management
              </span>
            </div>

            <h1 className="text-[34px] font-semibold tracking-[-0.05em] sm:text-[44px]">
              Customer Inquiries
            </h1>

            <p className="mt-3 text-[13px] leading-6 text-white/55">
              View customer requests, manage inquiries,
              and track communication status.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-white/55">
            <ShieldCheck
              size={15}
              className="text-[#B5C7A7]"
            />
            Administrator Access
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div
            role="status"
            className="mb-7 flex items-center gap-3 rounded-[5px] border border-green-400/20 bg-green-400/[0.06] px-5 py-4 text-[12px] text-green-200"
          >
            <CheckCircle2
              size={17}
              className="shrink-0"
            />
            {successMessage}
          </div>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-7 rounded-[5px] border border-red-400/20 bg-red-400/[0.06] px-5 py-4 text-[12px] text-red-200"
          >
            {errorMessage}
          </div>
        )}

        {/* SUMMARY CARDS */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Recent Inquiries",
              value: total,
            },
            {
              label: "New",
              value: newCount,
            },
            {
              label: "Contacted",
              value: contactedCount,
            },
            {
              label: "Closed",
              value: closedCount,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[5px] border border-white/[0.09] bg-[#171917] p-5 transition-colors hover:border-white/[0.16]"
            >
              <p className="text-[11px] text-white/50">
                {item.label}
              </p>

              <p className="mt-3 text-[32px] font-semibold tracking-[-0.04em] text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* INQUIRIES LIST */}
        <section className="overflow-hidden rounded-[6px] border border-white/[0.10] bg-[#171917]">

          {/* LIST HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.09] px-6 py-5">
            <h2 className="text-[18px] font-semibold">
              Latest Inquiries
            </h2>

            <span className="text-[11px] text-white/45">
              Showing up to 100 latest requests
            </span>
          </div>

          {/* DATABASE ERROR */}
          {error ? (
            <div
              role="alert"
              className="px-6 py-14 text-center"
            >
              <p className="text-[14px] text-red-300">
                Unable to load customer inquiries.
              </p>

              <p className="mt-2 text-[12px] text-white/45">
                Please check your Supabase connection
                and administrator permissions.
              </p>
            </div>
          ) : !inquiries || inquiries.length === 0 ? (

            /* EMPTY STATE */
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[5px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                <ClipboardList size={24} />
              </div>

              <h3 className="mt-5 text-[20px] font-semibold">
                No inquiries yet
              </h3>

              <p className="mt-3 max-w-[400px] text-[12px] leading-6 text-white/50">
                Customer service inquiries will appear
                here after they are submitted through
                your website.
              </p>
            </div>
          ) : (

            /* CUSTOMER INQUIRIES */
            <div className="divide-y divide-white/[0.08]">
              {inquiries.map((inquiry) => (
                <article
                  key={inquiry.id}
                  className="px-6 py-6 transition-colors hover:bg-white/[0.02]"
                >

                  {/* CUSTOMER AND STATUS */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-[17px] font-semibold text-white">
                        {inquiry.full_name}
                      </h3>

                      <p className="mt-2 text-[12px] font-medium text-[#D8B08B]">
                        {inquiry.service_title}
                      </p>
                    </div>

                    {/* CURRENT STATUS BADGE */}
                    <span
                      className={`w-fit rounded-[4px] border px-3 py-1.5 text-[10px] font-semibold capitalize ${
                        inquiry.status === "new"
                          ? "border-green-400/20 bg-green-400/[0.07] text-green-300"
                          : inquiry.status === "contacted"
                            ? "border-[#D8B08B]/25 bg-[#D8B08B]/[0.06] text-[#D8B08B]"
                            : "border-white/10 bg-white/[0.05] text-white/60"
                      }`}
                    >
                      {inquiry.status}
                    </span>
                  </div>

                  {/* CONTACT INFORMATION */}
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="inline-flex items-center gap-2 break-all text-[12px] text-white/65 transition-colors hover:text-[#D8B08B]"
                    >
                      <Mail
                        size={14}
                        className="shrink-0 text-[#C97A4A]"
                      />
                      {inquiry.email}
                    </a>

                    {inquiry.company && (
                      <div className="flex items-center gap-2 text-[12px] text-white/55">
                        <Building2
                          size={14}
                          className="shrink-0 text-[#C97A4A]"
                        />
                        {inquiry.company}
                      </div>
                    )}
                  </div>

                  {/* PROJECT REQUIREMENTS */}
                  <div className="mt-5 rounded-[4px] border border-white/[0.07] bg-[#0D0F0D] px-5 py-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C97A4A]">
                      Project Requirements
                    </p>

                    <p className="whitespace-pre-wrap break-words text-[12px] leading-6 text-white/65">
                      {inquiry.details}
                    </p>
                  </div>

                  {/* SUBMISSION DATE */}
                  <div className="mt-4 flex items-center gap-2 text-[11px] text-white/40">
                    <CalendarDays size={13} />
                    Received {formatDate(inquiry.created_at)}
                  </div>

                  {/* STATUS MANAGEMENT */}
                  <div className="mt-6 border-t border-white/[0.09] pt-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                      {/* STATUS DESCRIPTION */}
                      <div>
                        <h4 className="text-[12px] font-semibold text-white">
                          Manage Inquiry
                        </h4>

                        <p className="mt-2 text-[11px] leading-5 text-white/45">
                          Update the inquiry status
                          as your team processes this request.
                        </p>
                      </div>

                      {/* STATUS UPDATE FORM */}
                      <form
                        action={updateInquiryStatus}
                        className="flex flex-col gap-3 sm:flex-row sm:items-end"
                      >

                        {/* HIDDEN INQUIRY ID */}
                        <input
                          type="hidden"
                          name="id"
                          value={inquiry.id}
                        />

                        {/* STATUS SELECTOR */}
                        <div>
                          <label
                            htmlFor={`status-${inquiry.id}`}
                            className="mb-2 block text-[11px] font-semibold text-white/65"
                          >
                            Inquiry Status
                          </label>

                          <select
                            id={`status-${inquiry.id}`}
                            name="status"
                            defaultValue={inquiry.status}
                            required
                            className="min-h-[42px] w-full min-w-[160px] rounded-[4px] border border-white/[0.14] bg-[#0D0F0D] px-4 py-2 text-[12px] text-white outline-none transition-colors focus:border-[#C97A4A] sm:w-auto"
                          >
                            <option value="new">
                              New
                            </option>

                            <option value="contacted">
                              Contacted
                            </option>

                            <option value="closed">
                              Closed
                            </option>
                          </select>
                        </div>

                        {/* UPDATE STATUS BUTTON */}
                        <button
                          type="submit"
                          className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[4px] bg-[#D8D2C8] px-5 py-3 text-[11px] font-bold text-[#151515] transition-colors hover:bg-[#F3F1EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B]"
                        >
                          <Save
                            size={14}
                            aria-hidden="true"
                          />
                          Update Status
                        </button>
                      </form>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER */}
        <div className="mt-10 border-t border-white/[0.09] pt-6">
          <p className="text-[11px] text-white/40">
            Cloudlem Customer Inquiry Management
          </p>
        </div>
      </div>
    </main>
  );
}
