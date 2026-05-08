import type { Metadata } from "next";
import Link from "next/link";
import { PrintSummary, type PrintBenefit } from "@/components/PrintSummary";

export const metadata: Metadata = {
  title: "Hidden Benefits | MediGuide.health",
  description:
    "Free and low-cost California benefits many people don't know they have — dental, vision, transportation, food help, in-home care, prescription savings, and more.",
};

const benefitCards = [
  {
    id: "dental-vision",
    title: "Adult Medi-Cal Dental",
    tag: "Medi-Cal members",
    description:
      "California restored comprehensive dental coverage for adult Medi-Cal members in 2022. This includes preventive cleanings, fillings, extractions, root canals, and dentures — at no or low cost.",
    action:
      "If you have Medi-Cal, ask your plan for a list of in-network dental providers and book a preventive cleaning as soon as possible.",
    source: "Denti-Cal / DHCS",
  },
  {
    id: "medi-cal-vision",
    title: "Medi-Cal Vision Coverage",
    tag: "Medi-Cal members",
    description:
      "Most Medi-Cal managed care plans cover routine eye exams and one pair of eyeglasses per year. Many people with Medi-Cal do not realize this benefit exists.",
    action:
      "Contact your Medi-Cal managed care plan directly to confirm vision coverage and find an in-network optometrist.",
    source: "DHCS",
  },
  {
    id: "ihss",
    title: "IHSS — In-Home Supportive Services",
    tag: "Medi-Cal members with care needs",
    description:
      "If you have Medi-Cal and need help with bathing, cooking, cleaning, or other daily tasks because of a disability, injury, or age, IHSS can pay someone — including a family member — to assist you at home.",
    action:
      "Contact your county IHSS office or call your county social services department to request an assessment.",
    source: "California DHSS / CDSS",
  },
  {
    id: "nemt",
    title: "Free Rides to Medical Appointments (NEMT)",
    tag: "Medi-Cal members",
    description:
      "Medi-Cal covers non-emergency medical transportation (NEMT) — free rides to and from medical appointments when you have no other way to get there. This includes doctor visits, dialysis, mental health appointments, and more.",
    action:
      "Call your Medi-Cal managed care plan at least 2–3 business days before your appointment to schedule a ride. Do not wait until the day of.",
    source: "DHCS",
  },
  {
    id: "extra-help",
    title: "Extra Help for Medicare Prescription Costs",
    tag: "Medicare members with limited income",
    description:
      "If you are on Medicare and have limited income and resources, you may qualify for Extra Help (also called the Low Income Subsidy). This federal program can reduce your Medicare Part D drug costs to near zero — including premiums, deductibles, and copays.",
    action:
      "Apply at SSA.gov, call Social Security at 1-800-772-1213, or apply through your county when you apply for Medi-Cal — you may qualify for both automatically.",
    source: "Social Security Administration",
  },
  {
    id: "medicare-savings",
    title: "Medicare Savings Programs",
    tag: "Medicare members with limited income",
    description:
      "California offers programs (QMB, SLMB, QDWI) that help pay your Medicare Part B premiums if your income is limited — saving you hundreds of dollars per year. Some programs also help with Medicare Part A premiums, deductibles, and coinsurance.",
    action:
      "Apply through your county Medi-Cal office. Even if you were told you don't qualify for regular Medi-Cal, you may still qualify for one of these programs.",
    source: "DHCS / Medicare",
  },
  {
    id: "calfresh",
    title: "CalFresh — Monthly Food Benefits",
    tag: "Low-income Californians",
    description:
      "Many California households on Medi-Cal also qualify for CalFresh, California's food assistance program. CalFresh provides monthly benefits on an EBT card that can be used at most grocery stores. Many eligible households do not apply because they assume they won't qualify.",
    action:
      "Apply at BenefitsCal.com along with or after applying for Medi-Cal. You can check your eligibility and apply in one place.",
    source: "CDSS / BenefitsCal",
  },
  {
    id: "wic",
    title: "WIC — Nutrition Support for Pregnant Women and Young Children",
    tag: "Pregnant women, new mothers, children under 5",
    description:
      "WIC (Women, Infants, and Children) is a federal nutrition program available to income-qualifying pregnant women, breastfeeding mothers, and children under age 5. It provides free food benefits, nutritional counseling, and breastfeeding support.",
    action:
      "Contact your local WIC office or call 1-888-942-9675 (WIC INFO) to see if you qualify and schedule an appointment.",
    source: "CDPH / USDA",
  },
  {
    id: "mental-health",
    title: "988 — Free Mental Health and Crisis Support",
    tag: "All Californians",
    description:
      "The 988 Suicide and Crisis Lifeline is free and available 24/7 by call or text. In California, 988 connects callers to local crisis centers that can provide immediate support and referrals for ongoing mental health care.",
    action:
      "Call or text 988 at any time. Available in Spanish and English. No insurance needed.",
    source: "SAMHSA / CA DHCS",
  },
  {
    id: "prescription",
    title: "Covered California Subsidies You May Be Overlooking",
    tag: "People who think they earn too much",
    description:
      "Many Californians assume they earn too much to get help on Covered California. Federal Premium Tax Credits are available up to 400% of the federal poverty level — about $63,840 per year for a single person in 2026. Note: the enhanced federal subsidies that previously extended help above that income threshold expired at the end of 2025. California has a separate state subsidy program for lower incomes. Use the Covered California calculator to check your actual cost before assuming you can't afford coverage.",
    action:
      "Use the Covered California Shop and Compare tool at CoveredCA.com to see your actual estimated cost before assuming you can't afford marketplace coverage.",
    source: "Covered California",
  },
] as const;

const jumpLinks = benefitCards.map((card) => ({ label: card.title, href: `#${card.id}` }));

const printBenefits: PrintBenefit[] = [
  {
    name: "Adult Medi-Cal Dental",
    description: "Restored in 2022: cleanings, fillings, root canals, dentures, and more at no or low cost for Medi-Cal members.",
    applyUrl: "benefitscal.com",
    phone: "Denti-Cal: 1-800-322-6384",
  },
  {
    name: "Medi-Cal Vision",
    description: "Most Medi-Cal managed care plans cover one annual eye exam and one pair of eyeglasses. Many members don't know this exists.",
    applyUrl: "Contact your Medi-Cal plan",
  },
  {
    name: "IHSS (In-Home Care)",
    description: "Medi-Cal members needing help with bathing, cooking, or cleaning can get a paid caregiver — even a family member — through IHSS.",
    applyUrl: "Contact county IHSS office",
  },
  {
    name: "Free Medical Rides (NEMT)",
    description: "Medi-Cal covers free rides to doctor visits, dialysis, mental health appointments, and more. Call your plan 2–3 business days ahead.",
    applyUrl: "Call your Medi-Cal managed care plan",
  },
  {
    name: "Extra Help (Medicare Part D)",
    description: "Federal program that can reduce Medicare drug costs to near zero — premiums, deductibles, and copays — for limited-income enrollees.",
    applyUrl: "ssa.gov/medicare/part-d/extra-help",
    phone: "1-800-772-1213",
  },
  {
    name: "Medicare Savings Programs",
    description: "QMB, SLMB, or QDWI can help pay Medicare Part B premiums, saving hundreds per year. Apply at your county Medi-Cal office.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
  {
    name: "CalFresh (Food Benefits)",
    description: "Monthly EBT food benefits at most grocery stores. Many Medi-Cal households also qualify but haven't applied.",
    applyUrl: "benefitscal.com",
    phone: "1-877-847-3663",
  },
  {
    name: "WIC",
    description: "Free food benefits, nutrition counseling, and breastfeeding support for pregnant women, new mothers, and children under 5.",
    applyUrl: "wic.ca.gov",
    phone: "1-888-942-9675",
  },
  {
    name: "988 Crisis Line",
    description: "Free, confidential mental health and crisis support available 24/7 by call or text. No insurance required. English and Spanish.",
    applyUrl: "988 (call or text)",
  },
  {
    name: "Covered CA Subsidies",
    description: "Premium Tax Credits available up to 400% FPL (~$63,840/yr single in 2026). Use Shop and Compare to see your real monthly cost.",
    applyUrl: "coveredca.com/shop-and-compare",
    phone: "1-800-300-1506",
  },
];

const eligibilitySummary =
  "These benefits are available to many Californians who already have Medi-Cal or Medicare — but are commonly overlooked. Confirm details directly with your plan or county office before applying.";

export default function HiddenBenefitsPage() {
  return (
    <>
    <main className="print:hidden min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Hidden Benefits</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Benefits Most Californians Don&apos;t Know They Have
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
            Many Californians qualify for benefits beyond their main health coverage — but these extras
            are often not well advertised. This page covers the most commonly missed ones.
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to section</p>
            <nav aria-label="Jump to section" className="mt-3 flex flex-wrap gap-3">
              {jumpLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-8 space-y-6">
          {benefitCards.map((benefit) => (
            <section
              key={benefit.id}
              id={benefit.id}
              className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{benefit.title}</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                  {benefit.tag}
                </span>
              </div>

              <p className="mt-4 text-lg leading-8 text-slate-700">{benefit.description}</p>

              <div className="mt-5">
                <p className="text-base font-semibold text-ink">What to do right now:</p>
                <p className="mt-2 text-lg leading-8 text-slate-700">{benefit.action}</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-xs text-slate-400">Source: {benefit.source}</p>
                <span className="text-xs text-slate-300" aria-hidden="true">·</span>
                <p className="text-xs text-slate-400">Last reviewed: April 2026</p>
              </div>
            </section>
          ))}
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            <strong>Reminder:</strong> Eligibility rules and benefit details change over time. Always
            confirm current details directly with your Medi-Cal plan, your county social services office,
            or the program listed. The information on this page is based on publicly available official
            sources as of early 2026.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Not sure where to start?</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Answer three quick questions to see which California coverage paths may fit your situation.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/find-my-benefits"
              className="focus-ring inline-flex rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
            >
              Find My Benefits &rarr;
            </Link>
            <Link
              href="/help"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Help and How to Apply
            </Link>
          </div>
        </section>
      </div>
    </main>
    <PrintSummary
      pageTitle="Benefits Most Californians Don't Know They Have"
      eligibilitySummary={eligibilitySummary}
      benefits={printBenefits}
    />
    </>
  );
}
