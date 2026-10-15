
import "server-only";

import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  const supabase = await createClient();

  // Verify the logged-in user with Supabase Auth.
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  // Not logged in: redirect to admin login.
  if (authError || !user) {
    redirect("/admin/login");
  }

  // Check the user's administrator role.
  const { data: admin, error: roleError } = await supabase
    .from("admin_users")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (roleError) {
    console.error("Admin permission check failed:", roleError.message);
    throw new Error("Unable to verify administrator permissions.");
  }

  // Authenticated users without an admin role are denied.
  if (
    !admin ||
    !["owner", "editor"].includes(admin.role)
  ) {
    notFound();
  }

  return {
    supabase,
    user,
    role: admin.role as "owner" | "editor",
  };
}
