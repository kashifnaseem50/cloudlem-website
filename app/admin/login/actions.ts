
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const emailValue = formData.get("email");
  const passwordValue = formData.get("password");

  if (
    typeof emailValue !== "string" ||
    typeof passwordValue !== "string"
  ) {
    redirect("/admin/login?error=invalid");
  }

  const email = emailValue.trim();
  const password = passwordValue;

  if (
    !email ||
    email.length > 254 ||
    !password
  ) {
    redirect("/admin/login?error=invalid");
  }

  const supabase = await createClient();

  // Authenticate with Supabase.
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error || !data.user) {
    redirect("/admin/login?error=invalid");
  }

  // Check that this account is an authorized admin.
  const { data: admin, error: roleError } = await supabase
    .from("admin_users")
    .select("role")
    .eq("user_id", data.user.id)
    .maybeSingle();

  if (
    roleError ||
    !admin ||
    !["owner", "editor"].includes(admin.role)
  ) {
    await supabase.auth.signOut();

    redirect(
      roleError
        ? "/admin/login?error=temporary"
        : "/admin/login?error=unauthorized"
    );
  }

  // Refresh cached layouts after login.
  revalidatePath("/admin", "layout");

  // Open the protected dashboard.
  redirect("/admin");
}
