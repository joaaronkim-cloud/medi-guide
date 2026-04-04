import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "By Age | MediGuide.health",
  description:
    "Choose an age group to see the most common California health benefits for kids, young adults, adults, and seniors.",
};

const ageCards = [
  {
    title: "Kids and Teens (0-17)",
    description:
      "Coverage for children, teens, newborns, school health, dental, vision, and foster youth.",
    href: "/by-age/kids-teens",
  },
  {
    title: "Young Adults (18-29)",
    description:
      "Coverage for parent plans, Medi-Cal, students, gig workers, reproductive care, and immigration-related rules.",
    href: "/by-age/young-adults",
  },
  {
    title: "Adults (30-64)",
    description:
      "Coverage for Medi-Cal, Covered California, COBRA, self-employed workers, and adult dental.",
    href: "/by-age/adults",
  },
  {
    title: "Seniors (65+)",
    description:
      "Coverage for Medicare, drug plans, Medi-Cal help, PACE, and income-based senior benefits.",
    href: "/by-age/seniors",
  },
] as const;

const helperLinks = [
  {
    title: "Find My Benefits",
    description: "Answer a few questions and see which California coverage paths may fit your situation.",
    href: "/eligibility",
  },
  {
    title: "Help / FAQ",
    description: "Use this page for general guidance, common questions, and future step-by-step help.",
    href: "/help",
  },
  {
    title: "Hidden Benefits Most People Miss [TODO]",
    description: "Temporary link until the hidden-benefits page is built.",
    href: "/help",
  },
] as const;

function AgeCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="focus-ring group rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-6 shadow-card transition hover:border-brand-100 sm:p-8"
    >
      <div className="flex h-full flex-col">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
        <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">{description}</p>
        <p className="mt-6 inline-flex rounded-full bg-brand-700 px-5 py-3 text-base font-semibold text-white transition group-hover:bg-brand-900">
          Open this page &rarr;
        </p>
      </div>
    </Link>
  );
}

export default function ByAgePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Age</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Find Health Benefits by Age
              </h1>
            </div>

            <Link
              href="/"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Homepage
            </Link>
          </div>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl">
            Choose the age group that matches you or your family member to see the most common health
            benefits in California.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Not sure where to start? Pick the age group closest to the person who needs coverage.
          </p>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {ageCards.map((card) => (
            <AgeCard
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink">You might also need</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {helperLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="focus-ring rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-5 transition hover:border-brand-100 hover:shadow-card"
              >
                <p className="text-lg font-semibold text-ink">{link.title}</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            [TODO] Replace the hidden-benefits placeholder link when that page is built.
          </p>
        </section>
      </div>
    </main>
  );
}
