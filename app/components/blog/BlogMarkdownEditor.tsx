"use client";

import { useRef, useState } from "react";
import {
  Bold,
  Eye,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Quote,
  SquarePen,
  Sparkles,
} from "lucide-react";

import BlogMarkdownContent from "./BlogMarkdownContent";

type BlogMarkdownEditorProps = {
  initialValue?: string;
};

const MAX_CONTENT = 100000;

export default function BlogMarkdownEditor({ initialValue = "" }: BlogMarkdownEditorProps) {
  const [content, setContent] = useState(initialValue);
  const [mode, setMode] = useState<"write" | "preview">("write");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function insertSnippet(prefix: string, suffix: string, example: string) {
    const input = textareaRef.current;
    if (!input) return;

    const start = input.selectionStart;
    const end = input.selectionEnd;
    const selected = content.slice(start, end) || example;
    const replacement = `${prefix}${selected}${suffix}`;
    const updated = content.slice(0, start) + replacement + content.slice(end);
    if (updated.length > MAX_CONTENT) return;

    setContent(updated);
    setMode("write");
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    });
  }

  function insertBlock(snippet: string) {
    const input = textareaRef.current;
    if (!input) return;
    const start = input.selectionStart;
    const updated = content.slice(0, start) + snippet + content.slice(input.selectionEnd);
    if (updated.length > MAX_CONTENT) return;
    setContent(updated);
    setMode("write");
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + snippet.length, start + snippet.length);
    });
  }

  const tools = [
    { title: "Section heading", icon: Heading2, action: () => insertBlock("\n\n## Section heading\n\n") },
    { title: "Subheading", icon: Heading3, action: () => insertBlock("\n\n### Subheading\n\n") },
    { title: "Bold", icon: Bold, action: () => insertSnippet("**", "**", "important text") },
    { title: "Italic", icon: Italic, action: () => insertSnippet("*", "*", "emphasized text") },
    { title: "Bullet list", icon: List, action: () => insertBlock("\n- First point\n- Second point\n") },
    { title: "Numbered list", icon: ListOrdered, action: () => insertBlock("\n1. First step\n2. Second step\n") },
    { title: "Quote", icon: Quote, action: () => insertBlock("\n> Insight or quotation\n") },
    { title: "Link", icon: Link2, action: () => insertSnippet("[", "](https://example.com)", "link text") },
    { title: "Image URL", icon: ImagePlus, action: () => insertBlock("\n\n![Image description](https://example.com/image.jpg)\n\n") },
    { title: "Key takeaways", icon: Sparkles, action: () => insertBlock("\n\n## Key Takeaways\n\n- First key takeaway\n- Second key takeaway\n\n") },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E4D8EE] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E9E0F0] bg-[#F9F5FC] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMode("write")}
            aria-pressed={mode === "write"}
            className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-4 text-xs font-semibold transition-colors ${
              mode === "write" ? "bg-[#75449B] text-white" : "text-[#6C567D] hover:bg-[#ECE1F5]"
            }`}
          >
            <SquarePen size={15} /> Write
          </button>
          <button
            type="button"
            onClick={() => setMode("preview")}
            aria-pressed={mode === "preview"}
            className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-4 text-xs font-semibold transition-colors ${
              mode === "preview" ? "bg-[#75449B] text-white" : "text-[#6C567D] hover:bg-[#ECE1F5]"
            }`}
          >
            <Eye size={15} /> Preview
          </button>
        </div>
        <span className="text-[11px] font-medium text-[#94849F]">Markdown writing</span>
      </div>

      <div className="flex flex-wrap gap-1.5 border-b border-[#E9E0F0] bg-white p-3 sm:p-4" role="toolbar" aria-label="Article formatting">
        {tools.map(({ title, icon: Icon, action }) => (
          <button
            key={title}
            type="button"
            title={title}
            aria-label={title}
            onClick={action}
            disabled={mode === "preview"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E7DDEF] bg-[#FCFAFE] text-[#704D86] transition-colors hover:border-[#CEB5E0] hover:bg-[#F1E8F8] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon size={17} />
          </button>
        ))}
      </div>

      <label htmlFor="content" className="sr-only">Article content</label>
      <textarea
        ref={textareaRef}
        id="content"
        name="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        required={mode === "write"}
        maxLength={MAX_CONTENT}
        rows={20}
        placeholder={"Start with an introduction...\n\n## What readers will learn\n\nWrite your article here.\n\n## Key Takeaways\n\n- First insight\n- Second insight"}
        className={`min-h-[390px] w-full resize-y bg-white p-5 font-mono text-[13px] leading-7 text-[#392A47] outline-none placeholder:text-[#A99BB3] focus:bg-[#FFFEFF] sm:p-7 ${mode === "preview" ? "hidden" : "block"}`}
      />

      {mode === "preview" && (
        <div className="min-h-[390px] bg-white p-5 sm:p-7" aria-live="polite">
          {content.trim() ? (
            <BlogMarkdownContent content={content} />
          ) : (
            <p className="text-sm italic text-[#92829F]">Write some article content to see the formatted preview.</p>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EEE5F4] bg-[#FCFAFE] px-5 py-3 text-[11px] text-[#887893]">
        <span>Use headings, lists, quotes, links and HTTPS image URLs.</span>
        <span className="tabular-nums">{content.length.toLocaleString()} / {MAX_CONTENT.toLocaleString()}</span>
      </div>
    </div>
  );
}
