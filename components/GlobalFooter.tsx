import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Find My Benefits", href: "/find-my-benefits" },
  { label: "By Age", href: "/by-age" },
  { label: "By Situation", href: "/by-situation" },
  { label: "Hidden Benefits", href: "/hidden-benefits" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function GlobalFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-2xl font-bold tracking-tight text-ink">MediGuide.health</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
              MediGuide is a free, independent guide for Californians. We're not affiliated with any insurer or government agency. Nothing here is legal or medical advice — we're here to help you understand your options and find your next step.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              &copy; 2026 MediGuide.health — Built for Californians
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">Quick Links</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="focus-ring rounded-xl px-3 py-2 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
          <strong className="font-semibold text-slate-700">El quiz está disponible en español.</strong> Our Benefits Quiz now supports Spanish — tap the <strong>ES</strong> button on the quiz page to switch. For bilingual enrollment help, call{" "}
          <a href="tel:18003001506" className="font-semibold text-brand-700 hover:text-brand-900 hover:underline">Covered California at 1-800-300-1506</a> or{" "}
          <a href="tel:18778473663" className="font-semibold text-brand-700 hover:text-brand-900 hover:underline">BenefitsCal at 1-877-847-3663</a>.
        </div>
      </div>
    </footer>
  );
}
