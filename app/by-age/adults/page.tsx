import type { Metadata } from "next";
import Link from "next/link";
import { PrintSummary, type PrintBenefit } from "@/components/PrintSummary";

export const metadata: Metadata = {
  title: "Adults (30-64) | MediGuide.health",
  description:
    "Plain-English California health benefits for adults, including Medi-Cal, Covered California, COBRA, income changes, self-employment, and adult dental coverage.",
};

const benefitCards = [
  {
    id: "medi-cal",
    title: "Medi-Cal for Adults",
    who: "Low-income California adults ages 19-64.",
    bullets: [
      "For most Medi-Cal pathways, savings are less likely to block you than people think because California removed the asset test in many cases.",
      "Coverage can include broad medical, behavioral health, dental, and vision benefits.",
      "This can still be worth checking even if you were denied years ago.",
    ],
    action: "Apply even if you were denied in the past, because the rules may be better for you now.",
  },
  {
    id: "covered-ca",
    title: "Covered California Metal Tiers",
    who: "Adults who do not qualify for Medi-Cal and need an individual plan.",
    bullets: [
      "Bronze plans usually cost less each month but more when you actually use care.",
      "Gold and Platinum plans usually cost more each month and less when you go to the doctor.",
      "Silver often gives the best overall value for lower-income shoppers because extra savings attach there.",
    ],
    action: "Compare Silver carefully before choosing Bronze just because it looks cheaper each month.",
  },
  {
    id: "cobra",
    title: "COBRA After Job Loss",
    who: "People losing employer coverage who want to keep the same plan for a while.",
    bullets: [
      "COBRA lets you stay on the old job plan for a limited time.",
      "You usually have to pay the full premium yourself, which can make it much more expensive.",
      "For many people, Medi-Cal or Covered California may cost less than keeping the old plan.",
    ],
    action: "Compare COBRA, Medi-Cal, and Covered California before you elect COBRA.",
  },
  {
    id: "income-changes",
    title: "Coverage Just Above Medi-Cal Income",
    who: "Adults who earn a little too much for Medi-Cal but still struggle to afford insurance.",
    bullets: [
      "Covered California can still lower costs with subsidies and extra Silver-plan savings.",
      "That means being just above the Medi-Cal line does not always mean coverage will be unaffordable.",
      "The marketplace may still offer a realistic low-cost option when Medi-Cal says no.",
    ],
    action: "Check the marketplace right after a Medi-Cal denial instead of giving up on coverage.",
  },
  {
    id: "self-employed",
    title: "Self-Employed Coverage",
    who: "Freelancers, contractors, and small-business owners without employer plans.",
    bullets: [
      "You can use Covered California subsidies based on your estimated net income for the year.",
      "Some people may also deduct eligible premiums on their taxes.",
      "Your best option may change if your business income rises or falls during the year.",
    ],
    action: "Estimate your yearly income honestly and keep updating it when your business changes.",
  },
  {
    id: "dental",
    title: "Adult Dental Through Medi-Cal",
    who: "Adults on Medi-Cal.",
    bullets: [
      "California's adult dental benefit is much broader than many people realize.",
      "It can include exams, X-rays, cleanings, fillings, crowns, root canals, dentures, and more.",
      "There may also be extra room for medically necessary dental work in some cases.",
    ],
    action: "Find a Medi-Cal Dental provider before pain turns into an emergency.",
  },
] as const;

const printBenefits: PrintBenefit[] = [
  {
    name: "Medi-Cal",
    description: "Free or low-cost coverage for low-income adults 19–64. Includes medical, dental, vision, and behavioral health.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
  {
    name: "Covered California",
    description: "Subsidized marketplace plans. Silver plans often offer the best value with income-based cost-sharing savings.",
    applyUrl: "coveredca.com/apply",
    phone: "1-800-300-1506",
  },
  {
    name: "COBRA",
    description: "Continue your employer's plan up to 18 months after job loss. You pay the full premium — compare to Medi-Cal and Covered CA first.",
    applyUrl: "Contact your HR/plan administrator",
  },
  {
    name: "Coverage Just Above Medi-Cal",
    description: "If income is just above Medi-Cal limits, Covered California subsidies and Silver cost-sharing reductions may still make coverage affordable.",
    applyUrl: "coveredca.com/apply",
    phone: "1-800-300-1506",
  },
  {
    name: "Self-Employed Coverage",
    description: "Freelancers and contractors can use Covered California subsidies based on estimated net annual income. Update when income changes.",
    applyUrl: "coveredca.com/apply",
    phone: "1-800-300-1506",
  },
  {
    name: "Adult Dental (Medi-Cal)",
    description: "Comprehensive dental restored in 2022: cleanings, fillings, root canals, dentures, and more at no or low cost for Medi-Cal members.",
    applyUrl: "benefitscal.com",
    phone: "Denti-Cal: 1-800-322-6384",
  },
];

const eligibilitySummary =
  "California adults ages 30–64. Depending on income, you may qualify for free Medi-Cal, subsidized Covered California plans, or COBRA continuation if you recently lost employer coverage. Rules and income limits change — confirm eligibility directly with each program.";

const relatedLinks = [
  {
    title: "Find My Benefits",
    description: "Answer a few questions and see which California coverage paths may fit your situation.",
    href: "/find-my-benefits",
  },
  {
    title: "Young Adults",
    description: "See the age 18-29 page if you are helping someone younger or aging out of a parent's plan.",
    href: "/by-age/young-adults",
  },
  {
    title: "Help and How to Apply",
    description: "Step-by-step guides for applying to Medi-Cal, Covered California, and more. Plus free help resources.",
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

      <p className="mt-5 text-xs text-slate-400">Last reviewed: April 2026</p>
    </section>
  );
}

export default function AdultsAgePage() {
  return (
    <>
    <main className="print:hidden min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Age</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Health Benefits for Adults (30-64)
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
            This page covers the main California health benefits for adults, including Medi-Cal,
            Covered California, COBRA after job loss, income changes, self-employment, and adult dental care.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to section</p>
            <nav aria-label="Jump to section" className="mt-3 flex flex-wrap gap-3">
              <a href="#medi-cal" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Medi-Cal
              </a>
              <a href="#covered-ca" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Covered CA
              </a>
              <a href="#cobra" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                COBRA
              </a>
              <a href="#income-changes" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Income Changes
              </a>
              <a href="#self-employed" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Self-Employed
              </a>
              <a href="#dental" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Dental
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
            <TooltipTerm
              term="COBRA"
              definition="A temporary option that lets you stay on your old job-based health plan after leaving a job, usually by paying the full price yourself."
            />
            ,{" "}
            <TooltipTerm
              term="Medi-Cal"
              definition="California's public health coverage program for people who qualify."
            />
            , or Covered California on official websites. If you are unsure, compare the price and the
            coverage before you enroll.
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
    <PrintSummary
      pageTitle="Health Benefits for Adults (30–64)"
      eligibilitySummary={eligibilitySummary}
      benefits={printBenefits}
    />
    </>
  );
}
