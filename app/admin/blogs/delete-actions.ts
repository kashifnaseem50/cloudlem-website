
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/require-admin";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function deleteBlogPost(formData: FormData) {
  // Verify authentication and administrator role.
  const { supabase, role } = await requireAdmin();

  // Only the Owner can permanently delete articles.
  if (role !== "owner") {
    redirect("/admin/blogs?error=forbidden");
  }

  const idValue = formData.get("id");
  const confirmationValue = formData.get("confirmation");

  // Validate the submitted fields.
  if (
    typeof idValue !== "string" ||
    !uuidPattern.test(idValue) ||
    typeof confirmationValue !== "string"
  ) {
    redirect("/admin/blogs?error=invalid");
  }

  const id = idValue;

  // Retrieve the article before deleting it.
  const { data: post, error: fetchError } = await supabase
    .from("blog_posts")
    .select("id, title, slug")
    .eq("id", id)
    .maybeSingle();

  if (fetchError) {
    console.error("Unable to verify blog:", fetchError.code);
    redirect("/admin/blogs?error=database");
  }

  if (!post) {
    redirect("/admin/blogs?error=notfound");
  }

  // The administrator must type the exact article title.
  if (confirmationValue !== post.title) {
    redirect(
      `/admin/blogs/${id}/delete?error=confirmation`
    );
  }

  // Delete only the selected article.
  // Supabase RLS also enforces Owner-only deletion.
  const { data: deleted, error: deleteError } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (deleteError || !deleted) {
    console.error(
      "Blog deletion failed:",
      deleteError?.code ?? "No row deleted"
    );

    redirect(
      `/admin/blogs/${id}/delete?error=database`
    );
  }

  // Refresh the admin and public website routes.
  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/");

  redirect("/admin/blogs?success=deleted");
}
