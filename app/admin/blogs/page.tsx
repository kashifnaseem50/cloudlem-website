
import Link from "next/link";

import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  FileText,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";

export const dynamic = "force-dynamic";

type AdminBlogsPageProps = {
  searchParams: Promise<{
    success?: string | string[];
    error?: string | string[];
  }>;
};

export default async function AdminBlogsPage({
  searchParams,
}: AdminBlogsPageProps) {
  // Verify administrator permissions.
  const { supabase, role } = await requireAdmin();

  const query = await searchParams;

  // Fetch blog posts from Supabase.
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, status, created_at, published_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load blog posts:", error.message);
  }

  const totalPosts = posts?.length ?? 0;

  const publishedPosts =
    posts?.filter((post) => post.status === "published")
      .length ?? 0;

  const draftPosts =
    posts?.filter((post) => post.status === "draft")
      .length ?? 0;

  // Only Owners can permanently delete articles.
  const isOwner = role === "owner";

  // Read action feedback.
  const successCode = Array.isArray(query.success)
    ? query.success[0]
    : query.success;

  const errorCode = Array.isArray(query.error)
    ? query.error[0]
    : query.error;

  const successMessage =
    successCode === "deleted"
      ? "The article was permanently deleted."
      : successCode === "updated"
        ? "Your article was updated successfully."
        : successCode === "created"
          ? "Your new article was saved successfully."
          : null;

  const errorMessages: Record<string, string> = {
    forbidden: "You do not have permission to delete articles.",
    invalid: "The submitted request was invalid.",
    notfound: "The requested article could not be found.",
    database: "The operation failed. Please try again.",
  };

  const errorMessage = errorCode
    ? errorMessages[errorCode]
    : null;

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-5 pb-20 pt-28 text-[#F3F1EC]">
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
              <BookOpen
                size={15}
                className="text-[#C97A4A]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C97A4A]">
                Content Management
              </span>
            </div>

            <h1 className="text-[34px] font-semibold tracking-[-0.05em] sm:text-[44px]">
              Blog Posts
            </h1>

            <p className="mt-3 text-[13px] leading-6 text-white/55">
              Create, edit, publish, and manage Cloudlem blog articles.
            </p>
          </div>

          {/* ADMIN STATUS AND CREATE BUTTON */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] text-white/55">
              <ShieldCheck
                size={15}
                className="text-[#B5C7A7]"
              />
              Administrator Access
            </div>

            <Link
              href="/admin/blogs/new"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-[4px] bg-[#D8D2C8] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#151515] transition-colors duration-200 hover:bg-[#F3F1EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B]"
            >
              <Plus
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:rotate-90"
                aria-hidden="true"
              />
              Create New Blog
            </Link>
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div
            role="status"
            className="mb-7 rounded-[5px] border border-green-400/20 bg-green-400/[0.06] px-5 py-4 text-[12px] text-green-200"
          >
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

        {/* SUMMARY */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Total Posts",
              value: totalPosts,
            },
            {
              label: "Published",
              value: publishedPosts,
            },
            {
              label: "Drafts",
              value: draftPosts,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[5px] border border-white/[0.09] bg-[#171917] p-5 transition-colors duration-200 hover:border-white/[0.16]"
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

        {/* POSTS LIST */}
        <section className="overflow-hidden rounded-[6px] border border-white/[0.10] bg-[#171917]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.09] px-6 py-5">
            <h2 className="text-[18px] font-semibold">
              All Articles
            </h2>

            <span className="text-[11px] text-white/45">
              {totalPosts}{" "}
              {totalPosts === 1 ? "article" : "articles"}
            </span>
          </div>

          {/* DATABASE ERROR */}
          {error ? (
            <div role="alert" className="px-6 py-12 text-center">
              <p className="text-[14px] text-red-300">
                Unable to load blog posts.
              </p>

              <p className="mt-2 text-[12px] text-white/50">
                Check your Supabase connection and database permissions.
              </p>
            </div>
          ) : !posts || posts.length === 0 ? (
            /* EMPTY STATE */
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[5px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                <FileText size={24} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-[20px] font-semibold">
                No blog posts yet
              </h3>

              <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-white/50">
                Create your first article and start building
                Cloudlem&apos;s blog content.
              </p>

              <Link
                href="/admin/blogs/new"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-[4px] bg-[#D8D2C8] px-5 py-3 text-[11px] font-bold text-[#151515] transition-colors hover:bg-[#F3F1EC]"
              >
                <Plus size={15} />
                Create First Blog
              </Link>
            </div>
          ) : (
            /* EXISTING ARTICLES */
            <div className="divide-y divide-white/[0.08]">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col gap-4 px-6 py-5 transition-colors duration-200 hover:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* ARTICLE DETAILS */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold text-white">
                      {post.title}
                    </h3>

                    <p className="mt-1 break-all text-[11px] text-white/45">
                      /blog/{post.slug}
                    </p>

                    {post.excerpt && (
                      <p className="mt-2 max-w-[550px] text-[12px] leading-5 text-white/55">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* STATUS AND ACTIONS */}
                  <div className="flex shrink-0 flex-wrap items-center gap-4 sm:justify-end">

                    {/* STATUS AND DATE */}
                    <div className="flex flex-col gap-3 sm:items-end">
                      <span
                        className={`w-fit rounded-[3px] border px-3 py-1.5 text-[10px] font-semibold capitalize ${
                          post.status === "published"
                            ? "border-green-400/20 bg-green-400/[0.07] text-green-300"
                            : "border-[#D8B08B]/25 bg-[#D8B08B]/[0.06] text-[#D8B08B]"
                        }`}
                      >
                        {post.status}
                      </span>

                      <div className="flex items-center gap-2 text-[10px] text-white/40">
                        <CalendarDays size={12} />

                        {new Date(
                          post.created_at
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-wrap items-center gap-2">

                      {/* EDIT BUTTON */}
                      <Link
                        href={`/admin/blogs/${post.id}/edit`}
                        aria-label={`Edit ${post.title}`}
                        className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-[4px] border border-white/[0.14] bg-[#242624] px-4 py-2.5 text-[11px] font-semibold text-white/80 transition-colors duration-200 hover:border-[#C97A4A]/50 hover:bg-[#30302D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B08B]"
                      >
                        <Pencil
                          size={13}
                          className="text-[#D8B08B]"
                          aria-hidden="true"
                        />
                        Edit
                      </Link>

                      {/* OWNER-ONLY DELETE BUTTON */}
                      {isOwner && (
                        <Link
                          href={`/admin/blogs/${post.id}/delete`}
                          aria-label={`Delete ${post.title}`}
                          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-[4px] border border-red-400/20 bg-red-400/[0.05] px-4 py-2.5 text-[11px] font-semibold text-red-300 transition-colors duration-200 hover:border-red-400/40 hover:bg-red-400/[0.10] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
                        >
                          <Trash2
                            size={13}
                            aria-hidden="true"
                          />
                          Delete
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

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
