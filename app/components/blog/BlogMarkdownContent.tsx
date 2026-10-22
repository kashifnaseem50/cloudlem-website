import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type BlogMarkdownContentProps = {
  content: string;
};

function allowedImageUrl(src?: string): string | null {
  if (!src) return null;
  const value = src.trim();
  if (/^https:\/\//i.test(value)) return value;
  if (value.startsWith("/") && !value.startsWith("//") && !value.startsWith("/\\")) {
    return value;
  }
  return null;
}

function allowedLinkUrl(href?: string): string | null {
  if (!href) return null;
  const value = href.trim();
  if (/^https?:\/\//i.test(value) || /^mailto:/i.test(value)) return value;
  if (value.startsWith("/") && !value.startsWith("//") && !value.startsWith("/\\")) {
    return value;
  }
  if (value.startsWith("#")) return value;
  return null;
}

// Used both by the admin Preview tab and the public article page.
// The design follows app/insights/[slug]/page.tsx: white editorial typography,
// substantial section spacing, restrained purple accents, and 16px body text.
// Raw HTML is deliberately not interpreted.
export default function BlogMarkdownContent({ content }: BlogMarkdownContentProps) {
  return (
    <div className="min-w-0 break-words text-[#4F4F4F] [&>h2:first-child+p]:border-l-[3px] [&>h2:first-child+p]:border-[#A46AC5] [&>h2:first-child+p]:pl-5">
      <Markdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={{
          h1: ({ children }) => (
            <h2 className="mb-5 mt-11 text-[25px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#202020] first:mt-0 sm:text-[27px]">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2 className="mb-5 mt-12 text-[24px] font-semibold leading-[1.3] tracking-[-0.035em] text-[#202020] first:mt-0 sm:text-[27px]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-4 mt-9 text-[20px] font-semibold leading-[1.4] tracking-[-0.035em] text-[#202020] sm:text-[22px]">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-3 mt-7 text-[18px] font-semibold text-[#242424]">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-5 whitespace-pre-wrap text-[16px] leading-[1.95] text-[#4F4F4F]">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#202020]">{children}</strong>
          ),
          em: ({ children }) => <em className="italic text-[#55505C]">{children}</em>,
          ul: ({ children }) => (
            <ul className="my-7 list-disc space-y-3 pl-6 text-[15px] leading-[1.85] marker:text-[#8850AA] sm:text-[16px]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-7 list-decimal space-y-3 pl-6 text-[15px] leading-[1.85] marker:font-semibold marker:text-[#8850AA] sm:text-[16px]">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1 text-[#4F4F4F]">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-10 border-l-[3px] border-[#A46AC5] bg-[#F8F3FA] px-6 py-3 text-[#4F4F4F] [&>p]:my-2">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            const safeHref = allowedLinkUrl(href);
            if (!safeHref) return <span>{children}</span>;
            const isExternal = /^https?:\/\//i.test(safeHref);
            return (
              <a
                href={safeHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="font-medium text-[#75449B] underline decoration-[#BFA0D2] underline-offset-4 transition-colors hover:text-[#563175]"
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => {
            // React Markdown can type `src` as Blob. next/image needs a string.
            const safeSrc = typeof src === "string" ? allowedImageUrl(src) : null;
            if (!safeSrc) return null;
            return (
              <Image
                src={safeSrc}
                alt={alt || "Article illustration"}
                width={1200}
                height={675}
                unoptimized
                className="my-9 h-auto max-h-[600px] w-full rounded-[5px] object-contain"
              />
            );
          },
          hr: () => <hr className="my-11 border-[#E5E5E5]" />,
          pre: ({ children }) => (
            <pre className="my-8 overflow-x-auto rounded-[5px] bg-[#211B2B] p-5 text-[13px] leading-7 text-white">
              {children}
            </pre>
          ),
          code: ({ children, className }) => (
            <code
              className={className ? "font-mono" : "rounded bg-[#F2EBF7] px-1.5 py-0.5 font-mono text-[0.9em] text-[#674282]"}
            >
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="my-9 w-full overflow-x-auto border border-[#E5E5E5]">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-[#E5E5E5] bg-[#F8F7F9] px-4 py-3 font-semibold text-[#262626]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-[#E5E5E5] px-4 py-3 text-[#4F4F4F]">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
