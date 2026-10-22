import Link from "next/link";

import {
  ArrowLeft,
  BookOpen,
  FileText,
  ImageIcon,
  Save,
  Send,
  ShieldCheck,
} from "lucide-react";

import { requireAdmin } from "@/lib/admin/require-admin";
import { saveBlogDraft, publishBlogPost } from "../actions";
import BlogMarkdownEditor from "@/app/components/blog/BlogMarkdownEditor";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ error?: string | string[] }>;
};

const fieldClass =
  "w-full rounded-xl border border-[#E4D8EE] bg-[#FCFAFE] px-4 py-3 " +
  "text-[13px] text-[#30213D] outline-none transition-colors " +
  "placeholder:text-[#A69AAD] focus:border-[#75449B] focus:ring-4 focus:ring-[#75449B]/10";

const labelClass = "mb-2.5 block text-[12px] font-semibold text-[#41344D]";

export default async function NewBlogPage({ searchParams }: PageProps) {
  // Keep authorization on the server. Never move this page to "use client".
  await requireAdmin();
  const params = await searchParams;
  const errorCode = Array.isArray(params.error) ? params.error[0] : params.error;

  const errorMessages: Record<string, string> = {
    invalid: "Please check your title, description, and article content.",
    image: "Please enter a valid HTTPS image URL.",
    duplicate: "An article with this title already exists. Please use another title.",
    database: "Unable to save the article. Please try again.",
  };
  const errorMessage = errorCode ? errorMessages[errorCode] : null;

  return (
    <main className="min-h-screen bg-[#FBF9FE] px-4 pb-24 pt-28 text-[#30213D] sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1050px]">
        <Link
          href="/admin/blogs"
          className="mb-7 inline-flex min-h-10 items-center gap-2 text-[12px] font-medium text-[#75449B] transition-colors hover:text-[#533071]"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Blog Posts
        </Link>

        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#E8DDF1] pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E4D5EF] bg-white px-4 py-2 text-[#75449B]">
              <BookOpen size={16} aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">Cloudlem Journal</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.3rem)] font-semibold leading-tight tracking-[-0.055em]">
              Create an <span className="text-[#75449B]">Insight.</span>
            </h1>
            <p className="mt-3 max-w-[650px] text-[13px] leading-7 text-[#786C82]">
              Write a polished Cloudlem article, preview its formatting, then save a draft or publish.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#E3D7ED] bg-white px-4 py-2.5 text-[11px] font-medium text-[#806890]">
            <ShieldCheck size={16} className="text-[#75449B]" aria-hidden="true" />
            Administrator Access
          </div>
        </div>

        {errorMessage && (
          <div role="alert" className="mb-7 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-[12px] text-red-700">
            {errorMessage}
          </div>
        )}

        {/* Existing Server Actions and FormData field names stay exactly the same. */}
        <form className="space-y-7">
          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <div className="mb-7 flex items-center gap-3 border-b border-[#EEE7F4] pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EAF9] text-[#75449B]">
                <FileText size={20} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-[19px] font-semibold">Article Information</h2>
                <p className="mt-1 text-[11px] text-[#8B7D96]">The headline and summary readers see first.</p>
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
                placeholder="How Cloud Infrastructure Creates Business Value"
                className={`${fieldClass} min-h-12`}
              />
              <p className="mt-2 text-[11px] leading-5 text-[#93869C]">
                Your article URL is generated automatically from the title.
              </p>
            </div>

            <div>
              <label htmlFor="excerpt" className={labelClass}>Short Description</label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                maxLength={500}
                placeholder="A compelling summary for article cards and search results..."
                className={`${fieldClass} resize-y leading-6`}
              />
              <p className="mt-2 text-[11px] leading-5 text-[#93869C]">
                Appears on blog cards, the article introduction, and search previews.
              </p>
            </div>
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <div className="mb-6">
              <h2 className="text-[19px] font-semibold">Write Your Article</h2>
              <p className="mt-2 max-w-[710px] text-[12px] leading-6 text-[#84768E]">
                Use the formatting toolbar for headings, bold text, lists, quotes, links, images, and key takeaways.
                The Preview tab uses the same article styling as the public blog page.
              </p>
            </div>
            <BlogMarkdownEditor />
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2EAF9] text-[#75449B]">
                <ImageIcon size={20} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-[19px] font-semibold">Cover Image</h2>
                <p className="mt-1 text-[11px] text-[#8B7D96]">Optional featured image displayed above the article.</p>
              </div>
            </div>
            <label htmlFor="cover_image_url" className={labelClass}>HTTPS Image URL</label>
            <input
              id="cover_image_url"
              name="cover_image_url"
              type="url"
              placeholder="https://example.com/article-image.jpg"
              className={`${fieldClass} min-h-12`}
            />
            <p className="mt-3 text-[11px] leading-5 text-[#93869C]">
              Use a direct HTTPS image URL. Image uploads still require a separate Supabase Storage integration.
            </p>
          </section>

          <section className="rounded-[22px] border border-[#E8DDF1] bg-white p-5 shadow-[0_12px_38px_rgba(75,43,105,0.035)] sm:p-8">
            <h2 className="text-[19px] font-semibold">Publishing</h2>
            <p className="mt-2 text-[12px] leading-6 text-[#84768E]">
              Save the article privately as a draft, or publish it to the existing blog database.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                formAction={saveBlogDraft}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-[#DCC9E9] bg-[#F4ECFA] px-6 py-3 text-[12px] font-semibold text-[#65417D] transition-colors hover:bg-[#EDE0F6]"
              >
                <Save size={17} aria-hidden="true" /> Save Draft
              </button>
              <button
                type="submit"
                formAction={publishBlogPost}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#75449B] px-7 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#623682]"
              >
                <Send size={17} aria-hidden="true" /> Publish Article
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
