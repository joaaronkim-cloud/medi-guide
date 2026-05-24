import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | MediGuide.health",
  description:
    "What MediGuide.health is, who it is for, how it stays free, and why we write in plain English for Californians.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">About</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                About MediGuide.health
              </h1>
            </div>
            <Link
              href="/"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Homepage
            </Link>
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            A plain-English California health coverage guide — built for everyday people, not insurance professionals.
          </p>
        </header>

        {/* What This Is */}
        <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What MediGuide.health is</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            MediGuide.health is a free public resource that helps Californians understand their health
            coverage options. It does not sell anything, collect personal information, or earn a commission.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The site takes information from official government sources — Medi-Cal, Covered California,
            Medicare, the California Department of Aging, and others — and explains it in plain, direct
            language. The goal is to give people a clearer starting point before they call an agency or
            start an application.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            California has more health coverage options than most people realize. This guide helps people
            find the right starting point instead of guessing.
          </p>
        </section>

        {/* Who It Is For */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Who this guide is for</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            This site is for everyday Californians — parents, workers, seniors, students, and anyone
            else trying to navigate health coverage. It is not written for insurance professionals,
            lawyers, or people who already understand how health programs work.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            If you have ever felt overwhelmed by government websites, confused by program names like
            "Medi-Cal" and "Covered California," or unsure whether you even qualify for anything — this
            site is for you.
          </p>
        </section>

        {/* What It Is Not */}
        <section className="mt-5 rounded-[1.75rem] border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What this guide is not</h2>
          <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-amber-700">✕</span>
              <span>
                <strong>Not legal or medical advice.</strong> MediGuide explains programs in plain
                English. It does not advise you on what to do in your specific legal or medical situation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-amber-700">✕</span>
              <span>
                <strong>Not affiliated with any government agency.</strong> We are not part of DHCS,
                Covered California, Medicare, or any other agency.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-amber-700">✕</span>
              <span>
                <strong>Not an insurance broker or agent.</strong> We do not sell or recommend specific
                insurance plans.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 font-bold text-amber-700">✕</span>
              <span>
                <strong>Not a data collector.</strong> The quiz does not save or transmit anything you
                answer. We do not track personal information.
              </span>
            </li>
          </ul>
        </section>

        {/* Plain English Approach */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Our plain-English approach</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            California health programs come with a lot of jargon. Terms like "metal tiers," "cost
            sharing," "formulary," and "prior authorization" are used in official materials without much
            explanation. This can make it hard for people who are new to the system to understand what
            they are actually looking at.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            MediGuide tries to use everyday words. When a program term is unavoidable, we explain it.
            When a page gets too long, we cut it. Every page is written with someone in mind who is
            overwhelmed and needs to know what to do next — not someone who wants a full policy summary.
          </p>
        </section>

        {/* Sources */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Where the information comes from</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            All health program information on this site comes from official public sources, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
            <li>California Department of Health Care Services (DHCS) — dhcs.ca.gov</li>
            <li>Covered California — coveredca.com</li>
            <li>Medicare — medicare.gov</li>
            <li>California Department of Aging — aging.ca.gov</li>
            <li>BenefitsCal — benefitscal.com</li>
            <li>Social Security Administration — ssa.gov</li>
            <li>California Children's Services and other state program pages</li>
          </ul>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Health program rules change. If you spot something that looks outdated or inaccurate, please
            let us know through the{" "}
            <Link href="/contact" className="font-semibold text-brand-700 underline decoration-dotted underline-offset-2 hover:text-brand-900">
              Contact page
            </Link>
            .
          </p>
        </section>

        {/* Who built this */}
        <section className="mt-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Who built this</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            MediGuide was created by Aaron Kim, an undergraduate at UC Davis, after noticing a gap that
            rarely gets talked about: millions of Californians are technically eligible for health coverage
            but never receive it — not because they don&apos;t qualify, but because no one has ever explained
            what they qualify for in plain language. The programs exist. The funding exists. The gap is
            in knowing where to start.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            MediGuide is an independent project with no commercial ties, no advertising, and no data
            collection. If you have feedback, spot something inaccurate, or want to discuss bringing
            MediGuide into a clinical or community setting, you can reach Aaron directly at{" "}
            <a
              href="mailto:aarkim@ucdavis.edu"
              className="font-semibold text-brand-700 underline decoration-dotted underline-offset-2 hover:text-brand-900"
            >
              aarkim@ucdavis.edu
            </a>
            {" "}or through the feedback form below.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScCWoXsn5pytLf2iDjZYgr338nFz88nL7u1bhssUHOIh68l4w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex rounded-full bg-brand-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
            >
              Open Feedback Form &rarr;
            </a>
            <Link
              href="/contact"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Contact Page
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-brand-100 bg-brand-50 p-5 sm:p-6">
          <p className="text-lg font-bold text-ink">Ready to find your coverage options?</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            Answer three quick questions and see which California programs may fit your situation.
          </p>
          <div className="mt-4">
            <Link
              href="/find-my-benefits"
              className="focus-ring inline-flex rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
            >
              Find My Benefits &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
