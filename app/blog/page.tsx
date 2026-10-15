
import type { Metadata } from "next";

import BlogListing from "../components/blog/BlogListing";

import { getPublishedBlogPosts } from "@/lib/blog/get-published-posts";

// Fetch fresh published articles on each request.
export const dynamic = "force-dynamic";

// Public Blog SEO metadata.
export const metadata: Metadata = {
  title: "Blog | Cloudlem",
  description:
    "Explore expert insights from Cloudlem on cloud computing, DevOps, artificial intelligence, cybersecurity, and modern software engineering.",
};

export default async function BlogPage() {
  // Fetch only published articles from Supabase.
  const posts = await getPublishedBlogPosts();

  // Display articles using the existing Cloudlem Blog design.
  return <BlogListing posts={posts} />;
}
