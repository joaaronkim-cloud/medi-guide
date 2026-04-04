"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Find My Benefits", href: "/find-my-benefits" },
  { label: "By Age", href: "/by-age" },
  { label: "By Situation", href: "/by-situation" },
  { label: "Hidden Benefits", href: "/hidden-benefits" },
  { label: "About", href: "/about" },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4">
          <Link href="/" className="focus-ring rounded-md text-2xl font-bold tracking-tight text-ink">
            MediGuide
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`focus-ring rounded-full px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-brand-50 text-brand-900"
                      : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/help"
              className="focus-ring inline-flex rounded-full bg-teal-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-teal-800"
            >
              Get Help
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3 text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="block h-0.5 rounded-full bg-current" />
              <span className="block h-0.5 rounded-full bg-current" />
              <span className="block h-0.5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-nav" className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`focus-ring rounded-2xl px-4 py-4 text-base font-semibold transition ${
                      isActive
                        ? "bg-brand-50 text-brand-900"
                        : "bg-white text-slate-700 hover:bg-slate-50 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/help"
                className="focus-ring mt-2 inline-flex rounded-2xl bg-teal-700 px-4 py-4 text-base font-semibold text-white transition hover:bg-teal-800"
              >
                Get Help
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
