
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

import {
  saveBlogDraft,
  publishBlogPost,
} from "../actions";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{
    error?: string | string[];
  }>;
};

export default async function NewBlogPage({
  searchParams,
}: PageProps) {
  // Protect this page.
  await requireAdmin();

  const params = await searchParams;

  const errorCode = Array.isArray(params.error)
    ? params.error[0]
    : params.error;

  const errorMessages: Record<string, string> = {
    invalid:
      "Please check your title, description, and article content.",
    image:
      "Please enter a valid HTTPS image URL.",
    duplicate:
      "An article with this title already exists. Please use another title.",
    database:
      "Unable to save the article. Please try again.",
  };

  const errorMessage = errorCode
    ? errorMessages[errorCode]
    : null;

  return (
    <main className="min-h-screen bg-[#0B0D0C] px-5 pb-24 pt-28 text-[#F3F1EC]">
      <div className="mx-auto max-w-[1000px]">

        {/* BACK BUTTON */}
        <Link
          href="/admin/blogs"
          className="mb-8 inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to Blog Posts
        </Link>

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 border-b border-white/[0.10] pb-8 sm:flex-row sm:items-end sm:justify-between">
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
              Create Blog Post
            </h1>

            <p className="mt-3 max-w-[540px] text-[13px] leading-6 text-white/55">
              Write a new article for Cloudlem. Save it as a
              draft or publish it when you're ready.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-white/50">
            <ShieldCheck
              size={15}
              className="text-[#B5C7A7]"
            />
            Administrator Access
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-7 rounded-[5px] border border-red-400/25 bg-red-400/[0.07] px-5 py-4 text-[12px] text-red-200"
          >
            {errorMessage}
          </div>
        )}

        {/* ARTICLE FORM */}
        <form className="space-y-6">

          {/* ARTICLE DETAILS */}
          <section className="rounded-[6px] border border-white/[0.09] bg-[#171917] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3 border-b border-white/[0.08] pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                <FileText
                  size={19}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <h2 className="text-[18px] font-semibold">
                  Article Information
                </h2>

                <p className="mt-1 text-[11px] text-white/45">
                  Basic details about your blog post
                </p>
              </div>
            </div>

            {/* TITLE */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="mb-2 block text-[12px] font-semibold text-white/85"
              >
                Article Title *
              </label>

              <input
                id="title"
                name="title"
                type="text"
                required
                maxLength={160}
                placeholder="e.g. How AI Automation Is Transforming Businesses"
                className="h-12 w-full rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
              />

              <p className="mt-2 text-[10px] text-white/40">
                The article URL will be generated automatically
                from this title.
              </p>
            </div>

            {/* EXCERPT */}
            <div>
              <label
                htmlFor="excerpt"
                className="mb-2 block text-[12px] font-semibold text-white/85"
              >
                Short Description
              </label>

              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                maxLength={500}
                placeholder="Write a brief summary of the article..."
                className="w-full resize-y rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 py-3 text-[13px] leading-6 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
              />

              <p className="mt-2 text-[10px] text-white/40">
                This description can appear on blog cards and
                article previews.
              </p>
            </div>
          </section>

          {/* ARTICLE CONTENT */}
          <section className="rounded-[6px] border border-white/[0.09] bg-[#171917] p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-[18px] font-semibold">
                Article Content
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-white/45">
                Write your full article below.
              </p>
            </div>

            <label
              htmlFor="content"
              className="mb-2 block text-[12px] font-semibold text-white/85"
            >
              Blog Content
            </label>

            <textarea
              id="content"
              name="content"
              rows={18}
              maxLength={100000}
              placeholder={`Start writing your article...

Introduction

Explain the topic to your readers.

Key Points

Share useful information and insights.

Conclusion

Summarize the article and its key takeaways.`}
              className="min-h-[350px] w-full resize-y rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 py-4 font-mono text-[13px] leading-7 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
            />

            <p className="mt-3 text-[10px] leading-5 text-white/40">
              This first version saves plain text. We'll add
              headings, formatting, links, and image insertion
              through a rich-text editor in a later step.
            </p>
          </section>

          {/* COVER IMAGE */}
          <section className="rounded-[6px] border border-white/[0.09] bg-[#171917] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#C97A4A]/25 bg-[#C97A4A]/[0.06] text-[#D8B08B]">
                <ImageIcon
                  size={19}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <h2 className="text-[18px] font-semibold">
                  Cover Image
                </h2>

                <p className="mt-1 text-[11px] text-white/45">
                  Optional featured image for your article
                </p>
              </div>
            </div>

            <label
              htmlFor="cover_image_url"
              className="mb-2 block text-[12px] font-semibold text-white/85"
            >
              Image URL
            </label>

            <input
              id="cover_image_url"
              name="cover_image_url"
              type="url"
              placeholder="https://example.com/article-image.jpg"
              className="h-12 w-full rounded-[4px] border border-white/[0.12] bg-[#0D0F0D] px-4 text-[13px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C97A4A]"
            />

            <p className="mt-3 text-[10px] leading-5 text-white/40">
              For now, use a direct HTTPS image URL.
              We'll add image uploads through Supabase
              Storage later.
            </p>
          </section>

          {/* PUBLISH ACTIONS */}
          <section className="rounded-[6px] border border-white/[0.09] bg-[#171917] p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-[18px] font-semibold">
                Publishing
              </h2>

              <p className="mt-2 text-[11px] leading-6 text-white/50">
                Save the article privately as a draft, or
                publish it to the blog database.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* SAVE DRAFT */}
              <button
                type="submit"
                formAction={saveBlogDraft}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-white/[0.16] bg-[#242624] px-6 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#303330]"
              >
                <Save size={16} />
                Save Draft
              </button>

              {/* PUBLISH */}
              <button
                type="submit"
                formAction={publishBlogPost}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] bg-[#D8D2C8] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#151515] transition-colors hover:bg-[#F3F1EC]"
              >
                <Send size={15} />
                Publish Article
              </button>

              <Link
                href="/admin/blogs"
                className="inline-flex min-h-12 items-center justify-center px-4 text-[11px] text-white/50 transition-colors hover:text-white sm:ml-auto"
              >
                Cancel
              </Link>
            </div>
          </section>
        </form>

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
