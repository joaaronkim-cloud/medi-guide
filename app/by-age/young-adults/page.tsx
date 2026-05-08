import type { Metadata } from "next";
import Link from "next/link";
import { PrintSummary, type PrintBenefit } from "@/components/PrintSummary";

export const metadata: Metadata = {
  title: "Young Adults (18-29) | MediGuide.health",
  description:
    "Plain-English California health benefits for young adults, including parent's plans, Medi-Cal, Covered California, student coverage, immigration issues, reproductive health, and gig work.",
};

const benefitCards = [
  {
    id: "parents-plan",
    title: "Parent's Plan Until 26",
    who: "Young adults whose parent has a plan that allows dependent coverage.",
    bullets: [
      "You can usually stay on the plan until age 26 even if you are married, not in school, or not living at home.",
      "This can give you time to keep steady coverage while you work, study, or figure out your next insurance option.",
      "The biggest risk is waiting too long to plan for what happens when that coverage ends.",
    ],
    action:
      "Compare Medi-Cal and Covered California about 60 days before the parent plan ends so you do not get stuck uninsured.",
  },
  {
    id: "medi-cal",
    title: "Medi-Cal for Young Adults",
    who: "Adults 19-64 with low enough income, including many part-time workers, students, and people who live with family.",
    bullets: [
      "Medi-Cal can cover doctor visits, hospital care, prescriptions, dental, vision, and mental health care.",
      "Many young adults qualify even when they work part time or live with parents.",
      "This can be the lowest-cost option for many people in this age group.",
    ],
    action: "Apply instead of guessing, because many people qualify when they think they do not.",
  },
  {
    id: "covered-ca",
    title: "Covered California Young Adult Options",
    who: "Young adults who make too much for Medi-Cal and need individual coverage.",
    bullets: [
      "You may qualify for premium tax credits that lower the monthly price.",
      "Some people can save money with Silver plans that come with extra help on deductibles and copays.",
      "People under 30 may also see catastrophic coverage, which has a lower monthly cost but higher use costs.",
    ],
    action:
      "Compare total yearly cost, not just the monthly premium, before choosing a plan.",
  },
  {
    id: "students",
    title: "College Student Coverage",
    who: "College students choosing between campus plans, Medi-Cal, and Covered California.",
    bullets: [
      "Campus plans can be convenient because they often work well with on-campus care.",
      "Medi-Cal can be the cheapest option if you can use providers where you live and study.",
      "Covered California can be a good middle option if you do not qualify for Medi-Cal.",
    ],
    action:
      "Check where you will actually get care this semester before waiving any campus coverage.",
  },
  {
    id: "immigration",
    title: "Undocumented Young Adults",
    who: "Young adults with DACA or no lawful status.",
    bullets: [
      "In 2026, many adults 19 and older without satisfactory immigration status can no longer newly enroll in full-scope Medi-Cal.",
      "DACA recipients also cannot use Covered California right now.",
      "If you already have Medi-Cal, protecting that coverage is often the most important step.",
    ],
    action:
      "Renew on time if you already have Medi-Cal so you do not lose coverage you may still keep.",
  },
  {
    id: "reproductive-health",
    title: "Reproductive Health for Young Adults",
    who: "Young adults who need birth control, STI testing, abortion care, or related services.",
    bullets: [
      "California plans generally cover contraception and abortion care.",
      "Some people can get no-cost reproductive care through Family PACT even without full insurance.",
      "This can be one of the fastest ways to get care when cost is the biggest barrier.",
    ],
    action:
      "Go straight to a Family PACT provider if cost is the main barrier to getting care.",
  },
  {
    id: "gig-work",
    title: "Gig and Freelance Workers",
    who: "People with unstable income and no employer benefits.",
    bullets: [
      "You may qualify for Medi-Cal if your income is low enough.",
      "If your income is higher, Covered California may offer subsidies based on what you expect to earn this year.",
      "When your income changes a lot, keeping your estimate updated can save you money later.",
    ],
    action:
      "Update your income when work changes so you do not overpay or owe money back later.",
  },
] as const;

const printBenefits: PrintBenefit[] = [
  {
    name: "Parent's Plan (Until 26)",
    description: "Stay on a parent's employer plan until age 26 — even if married, not in school, or living away. Plan 60 days ahead for what comes next.",
    applyUrl: "Contact parent's employer/HR",
  },
  {
    name: "Medi-Cal",
    description: "Free or low-cost coverage for income-qualifying adults 19–64. Covers medical, dental, vision, and mental health. Many qualify without realizing it.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
  {
    name: "Covered California",
    description: "Subsidized marketplace plans. Under-30 catastrophic plans available. Compare total yearly cost, not just the monthly premium.",
    applyUrl: "coveredca.com/apply",
    phone: "1-800-300-1506",
  },
  {
    name: "Student Coverage",
    description: "Campus plans are convenient; Medi-Cal may be cheaper if providers are nearby. Compare both before waiving campus coverage each semester.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
  {
    name: "Family PACT",
    description: "Free birth control, STI testing, and reproductive health care for income-qualifying Californians regardless of coverage status.",
    applyUrl: "familypact.org",
    phone: "1-800-942-1054",
  },
  {
    name: "Gig / Freelance",
    description: "Use Covered California subsidies based on estimated annual net income. Update income estimate when work changes to avoid owing money back.",
    applyUrl: "coveredca.com/apply",
    phone: "1-800-300-1506",
  },
  {
    name: "Undocumented",
    description: "Emergency Medi-Cal available to all regardless of status. If already enrolled in full-scope Medi-Cal, renew on time to protect coverage.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
];

const eligibilitySummary =
  "California young adults ages 18–29. You may qualify for free Medi-Cal, subsidized Covered California plans, or stay on a parent's plan until age 26. Some programs are available regardless of immigration status.";

const relatedLinks = [
  {
    title: "Find My Benefits",
    description: "Answer a few questions and see which California coverage paths may fit your situation.",
    href: "/find-my-benefits",
  },
  {
    title: "By Situation",
    description: "Help for pregnancy, job loss, disability, immigration, and other special cases.",
    href: "/by-situation",
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
    <span
      className="cursor-help underline decoration-dotted underline-offset-4"
      title={definition}
    >
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

export default function YoungAdultsPage() {
  return (
    <>
    <main className="print:hidden min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Age</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Health Benefits for Young Adults (18-29)
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
            This page covers the main California health benefits for young adults, including staying
            on a parent&apos;s plan, Medi-Cal, Covered California, student coverage, immigration-related
            limits, reproductive health, and gig-work income changes.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to section</p>
            <nav aria-label="Jump to section" className="mt-3 flex flex-wrap gap-3">
              <a href="#parents-plan" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Parent&apos;s Plan
              </a>
              <a href="#medi-cal" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Medi-Cal
              </a>
              <a href="#covered-ca" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Covered CA
              </a>
              <a href="#students" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Students
              </a>
              <a href="#immigration" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Immigration
              </a>
              <a href="#reproductive-health" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Reproductive Health
              </a>
              <a href="#gig-work" className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink">
                Gig Work
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
              term="DACA"
              definition="A federal program that gave some undocumented immigrants temporary protections, but does not make someone eligible for every health program."
            />
            ,{" "}
            <TooltipTerm
              term="Family PACT"
              definition="A California program that can help eligible people get no-cost reproductive health care."
            />
            , or catastrophic coverage on official websites. If you are unsure, use the program page as a
            starting point, then compare your options before enrolling.
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
      pageTitle="Health Benefits for Young Adults (18–29)"
      eligibilitySummary={eligibilitySummary}
      benefits={printBenefits}
    />
    </>
  );
}
