
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/require-admin";

type PostStatus = "draft" | "published";

async function updateBlogPost(
  formData: FormData,
  status: PostStatus
) {
  const { supabase } = await requireAdmin();

  const id = formData.get("id");
  const title = formData.get("title");
  const excerpt = formData.get("excerpt");
  const content = formData.get("content");
  const image = formData.get("cover_image_url");

  // Validate submitted values.
  if (
    typeof id !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ||
    typeof title !== "string" ||
    typeof excerpt !== "string" ||
    typeof content !== "string" ||
    (image !== null && typeof image !== "string")
  ) {
    redirect("/admin/blogs?error=invalid");
  }

  const cleanTitle = title.trim();
  const cleanExcerpt = excerpt.trim();
  const cleanContent = content.trim();
  const cleanImage = (image ?? "").trim();

  const editUrl = `/admin/blogs/${id}/edit`;

  if (
    !cleanTitle ||
    cleanTitle.length > 160 ||
    cleanExcerpt.length > 500 ||
    cleanContent.length > 100000 ||
    (status === "published" && !cleanContent)
  ) {
    redirect(`${editUrl}?error=invalid`);
  }

  // Validate optional cover image.
  if (cleanImage) {
    let validImage = false;

    try {
      const url = new URL(cleanImage);
      validImage =
        url.protocol === "https:" &&
        !url.username &&
        !url.password;
    } catch {
      validImage = false;
    }

    if (!validImage) {
      redirect(`${editUrl}?error=image`);
    }
  }

  // Load the existing article.
  const { data: existing, error: fetchError } =
    await supabase
      .from("blog_posts")
      .select("id, slug, published_at")
      .eq("id", id)
      .maybeSingle();

  if (fetchError) {
    redirect(`${editUrl}?error=database`);
  }

  if (!existing) {
    redirect("/admin/blogs?error=notfound");
  }

  // Update only this article.
  const { data: updated, error } = await supabase
    .from("blog_posts")
    .update({
      title: cleanTitle,
      excerpt: cleanExcerpt,
      content: cleanContent,
      cover_image_url: cleanImage || null,
      status,
      published_at:
        status === "published"
          ? existing.published_at ?? new Date().toISOString()
          : null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error || !updated) {
    redirect(`${editUrl}?error=database`);
  }

  // Refresh content.
  revalidatePath("/admin/blogs");
  revalidatePath(editUrl);
  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);

  redirect("/admin/blogs?success=updated");
}

// Save or return an article to draft status.
export async function saveBlogChanges(
  formData: FormData
) {
  await updateBlogPost(formData, "draft");
}

// Publish an existing article.
export async function publishBlogChanges(
  formData: FormData
) {
  await updateBlogPost(formData, "published");
}
