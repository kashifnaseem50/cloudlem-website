import Link from "next/link";
import { notFound } from "next/navigation";

import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  FileText,
  ImageIcon,
  Save,
  Send,
  ShieldCheck,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";
import BlogMarkdownEditor from "@/app/components/blog/BlogMarkdownEditor";
import {
  saveBlogChanges,
  publishBlogChanges,
} from "../../edit-actions";

export const dynamic = "force-dynamic";

type EditBlogPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string | string[] }>;
};

const fieldClass =
  "w-full rounded-xl border border-[#E4D8EE] bg-[#FCFAFE] px-4 py-3 " +
  "text-[13px] text-[#30213D] outline-none transition-colors " +
  "placeholder:text-[#A69AAD] focus:border-[#75449B] " +
  "focus:ring-4 focus:ring-[#75449B]/10";

const labelClass = "mb-2.5 block text-[12px] font-semibold text-[#41344D]";

export default async function EditBlogPage({
  params,
  searchParams,
}: EditBlogPageProps) {
  // Keep administrator checks and database access on the server.
  const { supabase } = await requireAdmin();

  const { id } = await params;
  const query = await searchParams;
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(id)) {
    notFound();
  }

  // Load the current post; its UUID and public slug must be preserved.
  const { data: post, error: fetchError } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, content, cover_image_url, status, published_at")
    .eq("id", id)
    .maybeSingle();

  if (fetchError) {
    console.error("Unable to load article:", fetchError.message);
    throw new Error("Unable to load this blog post.");
  }

  if (!post) {
    notFound();
  }

  const errorCode = Array.isArray(query.error) ? query.error[0] : query.error;
  const errorMessages: Record<string, string> = {
    invalid: "Please check the title, description, and article content.",
    image: "Please enter a valid HTTPS cover image URL.",
    database: "Unable to update the article. Please try again.",
  };
  const errorMessage = errorCode ? errorMessages[errorCode] : null;
  const isPublished = post.status === "published";

  return (
    <main className="min-h-screen bg-[#FBF9FE] px-4 pb-24 pt-28 text-[#30213D] sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1050px]">
        <Link
          href="/admin/blogs"
          className="mb-7 inline-flex min-h-10 items-center gap-2 text-[12px] font-medium text-[#75449B] transition-colors hover:text-[#533071]"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Blog Posts
        </Link>

        <header className="mb-8 flex flex-col justify-between gap-5 border-b border-[#E8DDF1] pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E4D5EF] bg-white px-4 py-2 text-[#75449B]">
              <BookOpen size={16} aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Cloudlem Journal
              </span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.3rem)] font-semibold leading-tight tracking-[-0.055em]">
              Edit your <span className="text-[#75449B]">Insight.</span>
            </h1>
            <p className="mt-3 max-w-[660px] text-[13px] leading-7 text-[#786C82]">
              Refine your article, preview its formatting, and manage its publishing status.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start sm:self-end">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#806890]">
              <ShieldCheck size={16} className="text-[#75449B]" aria-hidden="true" />
              Administrator Access
            </span>
            <span
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${
                isPublished
                  ? "border-[#BFE7D0] bg-[#F0FBF5] text-[#23774B]"
                  : "border-[#E5D5EE] bg-[#F5ECFB] text-[#75449B]"
              }`}
            >
              {isPublished ? "Published" : "Draft"}
            </span>
          </div>
        </header>

        {errorMessage && (
          <div
            role="alert"
            className="mb-7 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-[12px] text-red-700"
          >
            {errorMessage}
          </div>
        )}

        {/* The existing action functions receive the unchanged FormData keys. */}
        <form className="space-y-7">
          <input type="hidden" name="id" value={post.id} />

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <div className="mb-7 flex items-center gap-3 border-b border-[#EEE7F4] pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EAF9] text-[#75449B]">
                <FileText size={20} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-[19px] font-semibold">Article Information</h2>
                <p className="mt-1 text-[11px] text-[#8B7D96]">
                  Update the title and article summary.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="title" className={labelClass}>Article Title *</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                maxLength={160}
                defaultValue={post.title}
                className={`${fieldClass} min-h-12`}
              />
            </div>

            <div className="mb-6">
              <p className={labelClass}>Existing Article URL</p>
              <div className="break-all rounded-xl border border-[#EBE2F2] bg-[#F6F0FA] px-4 py-3 text-[12px] text-[#6A527D]">
                /blog/{post.slug}
              </div>
              <p className="mt-2 text-[11px] leading-5 text-[#93869C]">
                Your URL stays unchanged when the title is edited, protecting existing links.
              </p>
            </div>

            <div>
              <label htmlFor="excerpt" className={labelClass}>Short Description</label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                maxLength={500}
                defaultValue={post.excerpt ?? ""}
                className={`${fieldClass} resize-y leading-6`}
              />
              <p className="mt-2 text-[11px] leading-5 text-[#93869C]">
                This summary may appear on article cards and search previews.
              </p>
            </div>
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <h2 className="text-[19px] font-semibold">Edit Article Content</h2>
            <p className="mb-6 mt-2 max-w-[720px] text-[12px] leading-6 text-[#84768E]">
              Add headings, lists, quotations, links, images, and key takeaways. The Preview
              tab uses the same renderer as your public article page.
            </p>
            <BlogMarkdownEditor key={post.id} initialValue={post.content ?? ""} />
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EAF9] text-[#75449B]">
                <ImageIcon size={20} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-[19px] font-semibold">Cover Image</h2>
                <p className="mt-1 text-[11px] text-[#8B7D96]">
                  Optional featured image for this article.
                </p>
              </div>
            </div>
            <label htmlFor="cover_image_url" className={labelClass}>HTTPS Image URL</label>
            <input
              id="cover_image_url"
              name="cover_image_url"
              type="url"
              defaultValue={post.cover_image_url ?? ""}
              placeholder="https://example.com/article-image.jpg"
              className={`${fieldClass} min-h-12`}
            />
            <p className="mt-3 text-[11px] leading-5 text-[#93869C]">
              Direct HTTPS image URLs are supported. Image uploads require a separate storage integration.
            </p>
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <h2 className="text-[19px] font-semibold">Save Your Changes</h2>
            <p className="mt-2 text-[12px] leading-6 text-[#84768E]">
              Save a private draft or publish your updated article using the existing Supabase workflow.
            </p>

            {isPublished && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#E8D2AC] bg-[#FFF8EB] px-4 py-4">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#976619]" aria-hidden="true" />
                <p className="text-[12px] leading-6 text-[#7B541E]">
                  <strong>Save as Draft</strong> will unpublish this article. Choose
                  <strong> Publish Changes</strong> to keep it publicly available.
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                formAction={saveBlogChanges}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-[#DCC9E9] bg-[#F4ECFA] px-6 py-3 text-[12px] font-semibold text-[#65417D] transition-colors hover:bg-[#EDE0F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]"
              >
                <Save size={17} aria-hidden="true" />
                {isPublished ? "Save as Draft (Unpublish)" : "Save Draft Changes"}
              </button>
              <button
                type="submit"
                formAction={publishBlogChanges}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#623682] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75449B]"
              >
                <Send size={17} aria-hidden="true" />
                {isPublished ? "Publish Changes" : "Publish Article"}
              </button>
              <Link
                href="/admin/blogs"
                className="inline-flex min-h-11 items-center justify-center px-4 text-[12px] text-[#8A7A95] transition-colors hover:text-[#75449B] sm:ml-auto"
              >
                Cancel
              </Link>
            </div>
          </section>
        </form>

        <p className="mt-8 border-t border-[#EAE0F2] pt-5 text-[11px] text-[#95899D]">
          Cloudlem Content Management System · Markdown article editor
        </p>
      </div>
    </main>
  );
}
