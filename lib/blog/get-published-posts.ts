
import "server-only";

import { createClient } from "@/lib/supabase/server";

export type PublishedBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
};

export async function getPublishedBlogPosts(): Promise<
  PublishedBlogPost[]
> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, cover_image_url, published_at, created_at"
    )
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
    })
    .limit(100);

  if (error) {
    console.error(
      "Failed to load published blog posts:",
      error.message
    );

    throw new Error(
      "Unable to load published blog posts."
    );
  }

  return data ?? [];
}
