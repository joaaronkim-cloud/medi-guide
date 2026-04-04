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
