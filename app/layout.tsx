import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { GlobalFooter } from "@/components/GlobalFooter";
import { GlobalNav } from "@/components/GlobalNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediGuide.health",
  description: "A simple California healthcare benefits guide for Medi-Cal, Medicare, and related options.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <GlobalNav />
          <div className="flex-1">{children}</div>
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
