
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/require-admin";

type PostStatus = "draft" | "published";

// Generate a URL-friendly slug from the article title.
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Main function for creating blog posts.
async function createBlogPost(
  formData: FormData,
  status: PostStatus
) {
  // Step 1: Verify administrator access.
  const { supabase } = await requireAdmin();

  // Step 2: Read submitted form data.
  const titleValue = formData.get("title");
  const excerptValue = formData.get("excerpt");
  const contentValue = formData.get("content");
  const imageValue = formData.get("cover_image_url");

  // Step 3: Validate field types.
  if (
    typeof titleValue !== "string" ||
    typeof excerptValue !== "string" ||
    typeof contentValue !== "string" ||
    (imageValue !== null && typeof imageValue !== "string")
  ) {
    redirect("/admin/blogs/new?error=invalid");
  }

  // Step 4: Clean the submitted data.
  const title = titleValue.trim();
  const excerpt = excerptValue.trim();
  const content = contentValue.trim();
  const coverImage = (imageValue ?? "").trim();

  // Step 5: Validate content lengths.
  if (
    !title ||
    title.length > 160 ||
    excerpt.length > 500 ||
    content.length > 100000 ||
    (status === "published" && !content)
  ) {
    redirect("/admin/blogs/new?error=invalid");
  }

  // Step 6: Validate optional cover image URL.
  if (coverImage) {
    let validImageUrl = false;

    try {
      const url = new URL(coverImage);

      validImageUrl =
        url.protocol === "https:" &&
        !url.username &&
        !url.password;
    } catch {
      validImageUrl = false;
    }

    if (!validImageUrl) {
      redirect("/admin/blogs/new?error=image");
    }
  }

  // Step 7: Generate the article slug.
  const slug = createSlug(title);

  if (!slug || slug.length > 180) {
    redirect("/admin/blogs/new?error=invalid");
  }

  // Step 8: Save the article in Supabase.
  const { error } = await supabase
    .from("blog_posts")
    .insert({
      title,
      slug,
      excerpt,
      content,
      cover_image_url: coverImage || null,
      status,
      published_at:
        status === "published"
          ? new Date().toISOString()
          : null,
    });

  // Step 9: Handle database errors.
  if (error) {
    console.error("Blog creation failed:", error.code);

    // Duplicate slug or title.
    if (error.code === "23505") {
      redirect("/admin/blogs/new?error=duplicate");
    }

    redirect("/admin/blogs/new?error=database");
  }

  // Step 10: Refresh blog pages.
  revalidatePath("/admin/blogs");
  revalidatePath("/blog");

  // Step 11: Return to the blog dashboard.
  redirect("/admin/blogs?success=created");
}

// Save an article as a draft.
export async function saveBlogDraft(
  formData: FormData
) {
  await createBlogPost(formData, "draft");
}

// Publish an article.
export async function publishBlogPost(
  formData: FormData
) {
  await createBlogPost(formData, "published");
}
