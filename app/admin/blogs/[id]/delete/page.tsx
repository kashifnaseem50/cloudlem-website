
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  AlertTriangle,
  ArrowLeft,
  ShieldAlert,
  Trash2,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";
import { deleteBlogPost } from "../../delete-actions";

export const dynamic = "force-dynamic";

type DeleteBlogPageProps = {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    error?: string | string[];
  }>;
};

export default async function DeleteBlogPage({
  params,
  searchParams,
}: DeleteBlogPageProps) {
  // Verify administrator authentication.
  const { supabase, role } = await requireAdmin();

  // Only the Owner can delete articles.
  if (role !== "owner") {
    notFound();
  }

  const { id } = await params;
  const query = await searchParams;

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(id)) {
    notFound();
  }

  // Fetch the selected article.
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, status")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to load article for deletion:",
      error.code
    );

    throw new Error("Unable to load this article.");
  }

  if (!post) {
    notFound();
  }

  const errorCode = Array.isArray(query.error)
    ? query.error[0]
    : query.error;

  const errorMessage =
    errorCode === "confirmation"
      ? "The article title does not match. Please enter the exact title."
      : errorCode === "database"
        ? "Unable to delete this article. Please try again."
        : null;

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-5 pb-24 pt-28 text-[#F3F1EC]">
      <div className="mx-auto max-w-[760px]">

        {/* BACK NAVIGATION */}
        <Link
          href="/admin/blogs"
          className="mb-8 inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to Blog Posts
        </Link>

        {/* PAGE HEADER */}
        <div className="mb-8 border-b border-white/[0.10] pb-8">
          <div className="mb-3 flex items-center gap-2 text-[#D8B08B]">
            <ShieldAlert size={16} />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
              Content Management
            </span>
          </div>

          <h1 className="text-[34px] font-semibold tracking-[-0.05em] sm:text-[44px]">
            Delete Blog Post
          </h1>

          <p className="mt-3 text-[13px] leading-6 text-white/55">
            Review the article carefully before proceeding.
          </p>
        </div>

        {/* WARNING */}
        <div className="mb-7 flex items-start gap-4 rounded-[6px] border border-red-400/20 bg-red-400/[0.06] p-5">
          <AlertTriangle
            size={22}
            className="mt-0.5 shrink-0 text-red-300"
          />

          <div>
            <h2 className="text-[15px] font-semibold text-red-200">
              Permanent Deletion
            </h2>

            <p className="mt-2 text-[12px] leading-6 text-red-100/70">
              This action permanently removes the article
              from Supabase. It cannot be undone using
              this dashboard.
            </p>
          </div>
        </div>

        {/* ARTICLE DETAILS */}
        <section className="mb-6 rounded-[6px] border border-white/[0.10] bg-[#171917] p-6 sm:p-8">
          <h2 className="mb-6 text-[18px] font-semibold">
            Article to Delete
          </h2>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-[11px] text-white/45">
                Article Title
              </p>

              <p className="break-words text-[17px] font-semibold text-white">
                {post.title}
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] text-white/45">
                Article URL
              </p>

              <p className="break-all text-[12px] text-white/70">
                /blog/{post.slug}
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] text-white/45">
                Current Status
              </p>

              <span
                className={`inline-flex rounded-[3px] border px-3 py-1.5 text-[10px] font-semibold capitalize ${
                  post.status === "published"
                    ? "border-green-400/20 bg-green-400/[0.07] text-green-300"
                    : "border-[#D8B08B]/25 bg-[#D8B08B]/[0.06] text-[#D8B08B]"
                }`}
              >
                {post.status}
              </span>
            </div>
          </div>
        </section>

        {/* CONFIRMATION FORM */}
        <section className="rounded-[6px] border border-white/[0.10] bg-[#171917] p-6 sm:p-8">
          <h2 className="text-[18px] font-semibold">
            Confirm Deletion
          </h2>

          <p className="mt-3 text-[12px] leading-6 text-white/55">
            To confirm, type the exact article title shown
            below. The confirmation is case-sensitive.
          </p>

          <div className="mt-5 rounded-[4px] border border-white/[0.10] bg-[#0D0F0D] px-4 py-3">
            <p className="break-words text-[13px] font-semibold text-[#D8B08B]">
              {post.title}
            </p>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="mt-5 rounded-[4px] border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-[12px] text-red-200"
            >
              {errorMessage}
            </div>
          )}

          <form
            action={deleteBlogPost}
            className="mt-6 space-y-6"
          >
            <input
              type="hidden"
              name="id"
              value={post.id}
            />

            <div>
              <label
                htmlFor="confirmation"
                className="mb-2 block text-[12px] font-semibold text-white/85"
              >
                Article Title *
              </label>

              <input
                id="confirmation"
                name="confirmation"
                type="text"
                required
                autoComplete="off"
                spellCheck={false}
                placeholder="Enter the exact article title"
                className="h-12 w-full rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-red-400/60"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/admin/blogs"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-[4px] border border-white/[0.14] px-6 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-[4px] bg-red-700 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-red-600"
              >
                <Trash2 size={16} />
                Permanently Delete
              </button>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <div className="mt-8 border-t border-white/[0.09] pt-5">
          <p className="text-[10px] text-white/35">
            Cloudlem Content Management System
          </p>
        </div>
      </div>
    </main>
  );
}
