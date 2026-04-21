import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seniors (65+) | MediGuide.health",
  description:
    "Plain-English California health benefits for seniors, including Medicare Parts A and B, Part D, Medicare Advantage, Medi-Cal, PACE, and SSI.",
};

const benefitCards = [
  {
    id: "medicare-a-b",
    title: "Medicare Parts A and B",
    who: "Most Californians 65 and older, and some younger people with disability.",
    bullets: [
      "Part A mainly covers hospital care, and Part B mainly covers doctor visits and outpatient care.",
      "Many people do not expect the deductibles, premiums, 20% cost share, and the gaps in dental, vision, hearing, and long-term care.",
      "This is the base of Medicare for many older adults, but it is usually not the whole picture by itself.",
    ],
    action:
      "List your doctors, medications, and likely care needs before choosing the rest of your Medicare setup.",
  },
  {
    id: "part-d",
    title: "Medicare Part D",
    who: "Medicare users who need prescription coverage.",
    bullets: [
      "Part D helps pay for medications through a drug plan.",
      "Extra Help can lower drug-plan costs for people with limited income.",
      "In 2026, the annual Part D out-of-pocket cap is $2,100.",
    ],
    action:
      "Enter your exact medications and pharmacy into Medicare Plan Compare before choosing a drug plan.",
  },
  {
    id: "medicare-advantage",
    title: "Medicare Advantage",
    who: "Medicare users who want a private all-in-one plan instead of Original Medicare alone.",
    bullets: [
      "These plans usually bundle hospital, doctor, and often drug coverage together.",
      "Many also add dental, vision, and hearing extras.",
      "They often use networks and plan rules, so your doctors and hospitals may matter a lot.",
    ],
    action:
      "Call your doctors and ask if they take that exact plan next year before you enroll.",
  },
  {
    id: "medicare-medi-cal",
    title: "Medicare + Medi-Cal Together",
    who: "Older adults who qualify for both programs.",
    bullets: [
      "Medicare usually pays first, and Medi-Cal can help with premiums, deductibles, and copays.",
      "Medi-Cal can also help cover some services Medicare does not fully cover.",
      "This can be one of the strongest benefit combinations in California for people with modest income.",
    ],
    action:
      "Apply for Medi-Cal or at least a Medicare Savings Program if your income is modest.",
  },
  {
    id: "pace",
    title: "PACE",
    who: "People 55+ who meet a nursing-home level of care but can still live safely in the community and live in a PACE service area.",
    bullets: [
      "PACE combines medical care, long-term supports, transportation, and care coordination in one system.",
      "It can work especially well for seniors with many health and support needs.",
      "Not every ZIP code has PACE, so location matters.",
    ],
    action:
      "Check whether your ZIP code is in a California PACE service area and call for a screening.",
  },
  {
    id: "ssi",
    title: "SSI for Seniors",
    who: "Older adults with very low income and limited resources.",
    bullets: [
      "In California, SSI payments are higher than the federal base.",
      "SSI often brings Medi-Cal automatically, which can help with both cash needs and health coverage.",
      "Many people do not realize SSI can matter for older adults even without a separate disability application path.",
    ],
    action:
      "Apply if your income is very low instead of assuming SSI is only for disability.",
  },
] as const;

const relatedLinks = [
  {
    title: "Find My Benefits",
    description: "Answer a few questions and see which California coverage paths may fit your situation.",
    href: "/find-my-benefits",
  },
  {
    title: "Adults",
    description: "See the 30-64 page if you are helping someone not yet on Medicare.",
    href: "/by-age/adults",
  },
  {
    title: "Help and How to Apply",
    description: "Free Medicare counseling (HICAP), step-by-step guides, and answers to common questions.",
    href: "/help",
  },
] as const;

function TooltipTerm({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <span className="cursor-help underline decoration-dotted underline-offset-4" title={definition}>
      {term}
    </span>
  );
}

function BenefitCard({
  title,
  who,
  bullets,
  action,
}: {
  title: string;
  who: string;
  bullets: readonly string[];
  action: string;
}) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>

      <div className="mt-5">
        <p className="text-base font-semibold text-ink">Who this is for:</p>
        <p className="mt-2 text-lg leading-8 text-slate-700">{who}</p>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-ink">What you get:</p>
        <ul className="mt-3 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-ink">What to do right now:</p>
        <p className="mt-2 text-lg leading-8 text-slate-700">{action}</p>
      </div>

      <div className="mt-7">
        <Link
          href="/help"
          className="focus-ring inline-flex rounded-full bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
        >
          Learn how to apply &rarr;
        </Link>
      </div>
    </section>
  );
}

export default function SeniorsAgePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Age</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Health Benefits for Seniors (65+)
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
            This page covers the main California health benefits for seniors, including Medicare,
            drug coverage, Medicare Advantage, Medi-Cal, PACE, and SSI.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to section</p>
            <nav aria-label="Jump to section" className="mt-3 flex flex-wrap gap-3">
              <a href="#medicare-a-b" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Medicare A+B
              </a>
              <a href="#part-d" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Part D
              </a>
              <a href="#medicare-advantage" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Medicare Advantage
              </a>
              <a href="#medicare-medi-cal" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Medicare + Medi-Cal
              </a>
              <a href="#pace" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                PACE
              </a>
              <a href="#ssi" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                SSI
              </a>
            </nav>
          </div>
        </header>

        <section className="mt-8 space-y-6">
          {benefitCards.map((benefit) => (
            <div key={benefit.id} id={benefit.id}>
              <BenefitCard
                title={benefit.title}
                who={benefit.who}
                bullets={benefit.bullets}
                action={benefit.action}
              />
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            <strong>Plain-English note:</strong> You may see terms like{" "}
            <TooltipTerm term="Medicare" definition="Federal health coverage mostly for people 65 and older." />
            , <TooltipTerm term="Part D" definition="The part of Medicare that helps pay for prescriptions." />,{" "}
            <TooltipTerm term="SSI" definition="A monthly payment program for people with very low income and limited resources." />,{" "}
            <TooltipTerm term="PACE" definition="A local care program for older adults with higher support needs." />, or{" "}
            <TooltipTerm term="Medi-Cal" definition="California's public health coverage program for people who qualify." /> on official websites.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink">You might also want to read:</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((link) => (
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

        </section>
      </div>
    </main>
  );
}
