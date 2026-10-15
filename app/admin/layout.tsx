
import type { Metadata } from "next";
import type { ReactNode } from "react";

// =====================================
// ADMIN SEO PROTECTION
// =====================================

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,

    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

// =====================================
// ADMIN LAYOUT
// =====================================

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
