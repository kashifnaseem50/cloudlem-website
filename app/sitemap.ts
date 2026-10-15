
import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

// Keep the sitemap updated when published
// articles are added to the CMS.
export const dynamic = "force-dynamic";

// =====================================
// WEBSITE CONFIGURATION
// =====================================

const BASE_URL = "https://cloudlem.com";

// =====================================
// STATIC PUBLIC PAGES
// =====================================

const staticPages: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/services`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/solutions`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/industries`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/blog`,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/careers`,
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/contact`,
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/privacy`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// =====================================
// DYNAMIC SITEMAP
// =====================================

export default async function sitemap():
  Promise<MetadataRoute.Sitemap> {

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  // Preserve static page discovery even if
  // Supabase configuration is unavailable.
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "Sitemap: Supabase configuration is missing."
    );

    return staticPages;
  }

  // Use the public client, not a service-role key.
  // RLS still applies to this request.
  const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  // =====================================
  // FETCH PUBLISHED ARTICLES
  // =====================================

  const publishedPosts: {
    slug: string;
  }[] = [];

  const pageSize = 500;

  // Pagination avoids Supabase's default
  // maximum row count for a single query.
  for (
    let offset = 0;
    ;
    offset += pageSize
  ) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("status", "published")
      .order("slug", {
        ascending: true,
      })
      .range(
        offset,
        offset + pageSize - 1
      );

    if (error) {
      console.error(
        "Sitemap: Unable to load published articles:",
        error.code
      );

      // The static URLs remain available.
      return staticPages;
    }

    if (!data || data.length === 0) {
      break;
    }

    for (const post of data) {
      if (
        typeof post.slug === "string" &&
        post.slug.trim().length > 0
      ) {
        publishedPosts.push({
          slug: post.slug,
        });
      }
    }

    if (data.length < pageSize) {
      break;
    }
  }

  // =====================================
  // GENERATE ARTICLE URLS
  // =====================================

  const articlePages: MetadataRoute.Sitemap =
    publishedPosts.map((post) => ({
      url:
        `${BASE_URL}/blog/` +
        encodeURIComponent(post.slug),

      changeFrequency: "monthly",
      priority: 0.6,
    }));

  // =====================================
  // FINAL SITEMAP
  // =====================================

  return [
    ...staticPages,
    ...articlePages,
  ];
}
