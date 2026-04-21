import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | MediGuide.health",
  description:
    "Report inaccurate information, suggest a new page, or reach the MediGuide.health team. We cannot process applications or appeals.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Contact</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Contact</h1>
            </div>
            <Link
              href="/"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Homepage
            </Link>
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            Use this page to report an error, suggest a new topic, or share feedback about the site.
          </p>
        </header>

        {/* Important note */}
        <section className="mt-6 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Before you contact us</h2>
          <p className="mt-4 text-lg leading-8 text-amber-900">
            MediGuide.health is an informational guide — we are not a government agency and we are not
            able to help with applications, renewals, denials, or appeals. If you need that kind of help,
            use the resources below.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                label: "Apply for Medi-Cal or CalFresh",
                detail: "BenefitsCal: 1-877-847-3663",
              },
              {
                label: "Enroll in Covered California",
                detail: "Covered CA: 1-800-300-1506",
              },
              {
                label: "Medicare questions or enrollment",
                detail: "HICAP (free counseling): 1-800-434-0222",
              },
              {
                label: "Current Medi-Cal plan questions",
                detail: "Medi-Cal Member Help Center: 1-800-541-5555",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.25rem] bg-white p-4">
                <p className="text-base font-semibold text-ink">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you can contact us for */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What we can help with</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We welcome feedback that helps improve the accuracy and usefulness of this guide.
          </p>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-brand-700">✓</span>
              <span>
                <strong>Report incorrect or outdated information</strong> — if a program rule or phone
                number has changed, let us know so we can fix it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-brand-700">✓</span>
              <span>
                <strong>Suggest a missing topic</strong> — if you looked for something on this site
                and couldn't find it, tell us what it was.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-brand-700">✓</span>
              <span>
                <strong>Share feedback on plain-language clarity</strong> — if something is confusing
                or hard to understand, we want to fix it.
              </span>
            </li>
          </ul>
        </section>

        {/* How to reach us */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">How to reach us</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The best way to share a correction or suggestion is through our GitHub repository, where we
            track site improvements in the open.
          </p>

          <div className="mt-5 rounded-[1.5rem] border border-brand-100 bg-brand-50 p-5">
            <p className="text-base font-semibold text-ink">Report an issue or suggest a change</p>
            <p className="mt-2 text-base leading-7 text-slate-700">
              Open an issue in the MediGuide.health GitHub repository. Include the page URL, what you
              think is wrong, and (if you have it) a link to an official source with the correct
              information.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              GitHub: github.com/mediguide-health
            </p>
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Please note that we are a small volunteer project. We read all feedback but may not be
            able to respond to every message individually.
          </p>
        </section>
      </div>
    </main>
  );
}
