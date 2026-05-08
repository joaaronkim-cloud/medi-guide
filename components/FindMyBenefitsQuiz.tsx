"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PrintSummary, type PrintBenefit } from "@/components/PrintSummary";

type AgeAnswer = "under-18" | "18-29" | "30-64" | "65-plus";
type NeedAnswer =
  | "coverage"
  | "mental-health"
  | "dental-vision"
  | "prescription-costs"
  | "not-sure";
type SituationAnswer =
  | "no-insurance"
  | "lost-job"
  | "pregnant-new-baby"
  | "disability"
  | "immigration"
  | "veteran"
  | "homelessness"
  | "on-medi-cal"
  | "none";

type ResultCard = {
  key: string;
  title: string;
  description: string;
  href: string;
  applyHref?: string;
  applyLabel?: string;
};

const QUESTION_COUNT = 3;

const AGE_OPTIONS: Array<{ label: string; value: AgeAnswer }> = [
  { label: "Under 18", value: "under-18" },
  { label: "18-29", value: "18-29" },
  { label: "30-64", value: "30-64" },
  { label: "65 or older", value: "65-plus" },
] as const;

const SITUATION_OPTIONS: Array<{ label: string; value: SituationAnswer }> = [
  { label: "I don't have health insurance", value: "no-insurance" },
  { label: "I lost my job recently", value: "lost-job" },
  { label: "I'm pregnant or just had a baby", value: "pregnant-new-baby" },
  { label: "I have a disability", value: "disability" },
  { label: "I'm undocumented or have mixed immigration status", value: "immigration" },
  { label: "I'm a veteran", value: "veteran" },
  { label: "I'm experiencing homelessness or unstable housing", value: "homelessness" },
  { label: "I'm currently on Medi-Cal", value: "on-medi-cal" },
  { label: "None of these apply", value: "none" },
] as const;

const NEED_OPTIONS: Array<{ label: string; value: NeedAnswer }> = [
  { label: "Finding health coverage", value: "coverage" },
  { label: "Mental health support", value: "mental-health" },
  { label: "Dental or vision", value: "dental-vision" },
  { label: "Prescription costs", value: "prescription-costs" },
  { label: "I don't know yet", value: "not-sure" },
] as const;

const AGE_RESULTS: Record<AgeAnswer, ResultCard> = {
  "under-18": {
    key: "age-kids",
    title: "Kids and Teens",
    description: "Coverage, dental, vision, and school health for children and teens — including foster youth support.",
    href: "/by-age/kids-teens",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "18-29": {
    key: "age-young-adults",
    title: "Young Adults",
    description: "Start here for parent plans, Medi-Cal, students, gig work, reproductive care, and immigration status questions.",
    href: "/by-age/young-adults",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "30-64": {
    key: "age-adults",
    title: "Adults",
    description: "Start here for Medi-Cal, Covered California, COBRA, self-employed coverage, and adult dental.",
    href: "/by-age/adults",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "65-plus": {
    key: "age-seniors",
    title: "Seniors",
    description: "Start here for Medicare, drug coverage, Medi-Cal help, PACE, and income-based senior benefits.",
    href: "/by-age/seniors",
    applyHref: "https://www.ssa.gov/medicare/sign-up",
    applyLabel: "Sign Up for Medicare",
  },
};

const EXTRA_RESULTS: Record<string, ResultCard> = {
  howToApply: {
    key: "how-to-apply",
    title: "How to Apply",
    description: "Step-by-step guides for applying to Medi-Cal, Covered California, and Medicare. Plus free help resources and your patient rights.",
    href: "/help",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  hiddenBenefits: {
    key: "hidden-benefits",
    title: "Hidden Benefits Most People Miss",
    description: "Dental, vision, transportation, food help, in-home care, prescription savings, and more — many Californians qualify but don't know it.",
    href: "/hidden-benefits",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  helpFaq: {
    key: "help-faq",
    title: "Help and Common Questions",
    description: "Answers to the most common questions about California health coverage, plus free resources to get real help.",
    href: "/help",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  pregnancy: {
    key: "pregnancy",
    title: "Pregnancy and New Parent Help",
    description: "Coverage options for pregnancy and newborns, including Medi-Cal for pregnant women, WIC, and Family PACT for family planning.",
    href: "/by-situation#pregnant",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  disability: {
    key: "disability",
    title: "Disability and Chronic Condition Support",
    description: "Medi-Cal pathways, IHSS in-home care support, and other California programs for people with disabilities or chronic conditions.",
    href: "/by-situation#disability",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  immigration: {
    key: "immigration",
    title: "Undocumented and Mixed-Status Help",
    description: "California coverage options for undocumented individuals and mixed-status families, including what triggers — and doesn't trigger — immigration concerns.",
    href: "/by-situation#immigration",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  veteran: {
    key: "veteran",
    title: "Veteran Coverage Help",
    description: "VA health care, CalVet navigation, and how Medi-Cal or Covered California can work alongside VA benefits.",
    href: "/by-situation#veteran",
    applyHref: "https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/",
    applyLabel: "Apply for VA Health Care",
  },
  homelessness: {
    key: "homelessness",
    title: "Housing Instability and Health Support",
    description: "Medi-Cal enrollment options for people without a stable address, plus care coordination support for people with complex needs.",
    href: "/by-situation#homelessness",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  mentalHealth: {
    key: "mental-health",
    title: "Mental Health Support",
    description: "Free mental health resources including the 988 crisis line, Medi-Cal behavioral health, and community mental health services.",
    href: "/hidden-benefits#mental-health",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  dentalVision: {
    key: "dental-vision",
    title: "Dental and Vision Help",
    description: "Adult Medi-Cal dental, Medi-Cal vision coverage, and how to find in-network providers near you.",
    href: "/hidden-benefits#dental-vision",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  prescription: {
    key: "prescription",
    title: "Prescription Cost Help",
    description: "Extra Help for Medicare Part D, Medi-Cal prescription coverage, and how to lower your drug costs.",
    href: "/hidden-benefits#prescription",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  currentMediCal: {
    key: "current-medi-cal",
    title: "Already on Medi-Cal? See What Else You Qualify For",
    description: "Many Medi-Cal members miss extra benefits — dental, vision, transportation, in-home care, and CalFresh food help.",
    href: "/hidden-benefits",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Check on BenefitsCal",
  },
  jobLoss: {
    key: "job-loss",
    title: "Coverage Gap After Job Loss",
    description: "Your options when you lose employer coverage: Covered California special enrollment (60-day window), Medi-Cal, and COBRA.",
    href: "/by-situation#job-loss",
    applyHref: "https://www.coveredca.com/apply/",
    applyLabel: "Apply on Covered CA",
  },
};

function getQuizResults({
  age,
  situations,
  need,
}: {
  age: AgeAnswer;
  situations: SituationAnswer[];
  need: NeedAnswer;
}) {
  const cards: ResultCard[] = [];
  const seen = new Set<string>();

  function addCard(card: ResultCard) {
    if (seen.has(card.key) || cards.length >= 5) {
      return;
    }

    seen.add(card.key);
    cards.push(card);
  }

  addCard(AGE_RESULTS[age]);

  if (situations.includes("no-insurance")) {
    addCard(EXTRA_RESULTS.howToApply);
  }

  if (situations.includes("lost-job")) {
    addCard(EXTRA_RESULTS.jobLoss);
  }

  if (situations.includes("pregnant-new-baby")) {
    addCard(EXTRA_RESULTS.pregnancy);
  }

  if (situations.includes("disability")) {
    addCard(EXTRA_RESULTS.disability);
  }

  if (situations.includes("immigration")) {
    addCard(EXTRA_RESULTS.immigration);
  }

  if (situations.includes("veteran")) {
    addCard(EXTRA_RESULTS.veteran);
  }

  if (situations.includes("homelessness")) {
    addCard(EXTRA_RESULTS.homelessness);
  }

  if (situations.includes("on-medi-cal")) {
    addCard(EXTRA_RESULTS.currentMediCal);
  }

  if (need === "coverage") {
    addCard(EXTRA_RESULTS.howToApply);
  }

  if (need === "mental-health") {
    addCard(EXTRA_RESULTS.mentalHealth);
  }

  if (need === "dental-vision") {
    if (age === "under-18") {
      addCard(AGE_RESULTS["under-18"]);
    } else {
      addCard(EXTRA_RESULTS.dentalVision);
    }
  }

  if (need === "prescription-costs") {
    if (age === "65-plus") {
      addCard(AGE_RESULTS["65-plus"]);
    }

    addCard(EXTRA_RESULTS.prescription);
  }

  if (need === "not-sure") {
    addCard(EXTRA_RESULTS.hiddenBenefits);
    addCard(EXTRA_RESULTS.howToApply);
  }

  if (cards.length < 3) {
    addCard(EXTRA_RESULTS.hiddenBenefits);
  }

  if (cards.length < 3) {
    addCard(EXTRA_RESULTS.helpFaq);
  }

  if (cards.length < 3) {
    addCard(EXTRA_RESULTS.howToApply);
  }

  return cards.slice(0, 5);
}

const AGE_LABELS: Record<AgeAnswer, string> = {
  "under-18": "under 18",
  "18-29": "18–29",
  "30-64": "30–64",
  "65-plus": "65 or older",
};

const SITUATION_LABELS: Record<SituationAnswer, string> = {
  "no-insurance": "no health insurance",
  "lost-job": "recently lost a job",
  "pregnant-new-baby": "pregnant or a new parent",
  disability: "living with a disability",
  immigration: "undocumented or mixed-status household",
  veteran: "a veteran or active-duty family member",
  homelessness: "experiencing homelessness or unstable housing",
  "on-medi-cal": "currently on Medi-Cal",
  none: "no specific situation listed",
};

const NEED_LABELS: Record<NeedAnswer, string> = {
  coverage: "finding health coverage",
  "mental-health": "mental health support",
  "dental-vision": "dental or vision help",
  "prescription-costs": "lowering prescription costs",
  "not-sure": "not sure yet",
};

function buildEligibilitySummary(
  age: AgeAnswer,
  situations: SituationAnswer[],
  need: NeedAnswer
): string {
  const situationText =
    situations.length === 1 && situations[0] === "none"
      ? ""
      : situations
          .filter((s) => s !== "none")
          .map((s) => SITUATION_LABELS[s])
          .join(", ");

  const parts = [`Age: ${AGE_LABELS[age]}`];
  if (situationText) parts.push(`Situation: ${situationText}`);
  parts.push(`Primary need: ${NEED_LABELS[need]}`);

  return (
    parts.join(" · ") +
    ". These are starting points only — actual eligibility depends on income and household. Confirm with each program before applying."
  );
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`focus-ring w-full rounded-[1.5rem] border px-5 py-5 text-left text-lg font-semibold transition sm:px-6 sm:py-6 ${
        selected
          ? "border-brand-700 bg-brand-50 text-ink ring-2 ring-brand-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-100 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

export function FindMyBenefitsQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [age, setAge] = useState<AgeAnswer | null>(null);
  const [situations, setSituations] = useState<SituationAnswer[]>([]);
  const [need, setNeed] = useState<NeedAnswer | null>(null);

  const isResultsStep = stepIndex >= QUESTION_COUNT;
  const progress = Math.round(((Math.min(stepIndex, QUESTION_COUNT - 1) + 1) / QUESTION_COUNT) * 100);

  const results = useMemo(() => {
    if (!age || !need || situations.length === 0) {
      return [];
    }

    return getQuizResults({ age, situations, need });
  }, [age, situations, need]);

  function toggleSituation(value: SituationAnswer) {
    setSituations((current) => {
      if (value === "none") {
        return ["none"];
      }

      const withoutNone = current.filter((item) => item !== "none");

      if (withoutNone.includes(value)) {
        return withoutNone.filter((item) => item !== value);
      }

      return [...withoutNone, value];
    });
  }

  function canGoNext() {
    if (stepIndex === 0) {
      return age !== null;
    }

    if (stepIndex === 1) {
      return situations.length > 0;
    }

    if (stepIndex === 2) {
      return need !== null;
    }

    return true;
  }

  function goNext() {
    if (!canGoNext()) {
      return;
    }

    setStepIndex((current) => Math.min(current + 1, QUESTION_COUNT));
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function resetQuiz() {
    setAge(null);
    setSituations([]);
    setNeed(null);
    setStepIndex(0);
  }

  const printBenefits: PrintBenefit[] = isResultsStep
    ? results.map((r) => ({
        name: r.title,
        description: r.description,
        applyUrl: r.applyHref ?? "mediguide.health/help",
        phone: r.applyLabel !== "Apply on BenefitsCal" && r.applyLabel !== "Apply on Covered CA"
          ? r.applyLabel
          : undefined,
      }))
    : [];

  const eligibilitySummary =
    isResultsStep && age && need
      ? buildEligibilitySummary(age, situations, need)
      : "";

  return (
    <>
    <div className="print:hidden min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Find My Benefits</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Let&apos;s find what you qualify for.
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
            Based on your answers, we'll show you the California health programs most likely to help your situation.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Three quick questions. No account. Nothing saved.
          </p>
        </header>

        <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          {!isResultsStep ? (
            <>
              <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-500">
                <span>Question {stepIndex + 1} of 3</span>
                <span>{progress}%</span>
              </div>

              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-brand-700 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {stepIndex === 0 ? (
                <div className="mt-8">
                  <h2 className="text-3xl font-bold tracking-tight text-ink">How old are you?</h2>
                  <div className="mt-6 grid gap-4">
                    {AGE_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.value}
                        label={option.label}
                        selected={age === option.value}
                        onClick={() => setAge(option.value)}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {stepIndex === 1 ? (
                <div className="mt-8">
                  <h2 className="text-3xl font-bold tracking-tight text-ink">
                    What is your situation right now?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
                    Pick all that apply.
                  </p>
                  <div className="mt-6 grid gap-4">
                    {SITUATION_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.value}
                        label={option.label}
                        selected={situations.includes(option.value)}
                        onClick={() => toggleSituation(option.value)}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {stepIndex === 2 ? (
                <div className="mt-8">
                  <h2 className="text-3xl font-bold tracking-tight text-ink">
                    What do you need help with most?
                  </h2>
                  <div className="mt-6 grid gap-4">
                    {NEED_OPTIONS.map((option) => (
                      <OptionButton
                        key={option.value}
                        label={option.label}
                        selected={need === option.value}
                        onClick={() => setNeed(option.value)}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="focus-ring rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canGoNext()}
                  className="focus-ring rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50 p-6">
                <h2 className="text-3xl font-bold tracking-tight text-ink">
                  Based on your answers, here&apos;s what you may qualify for:
                </h2>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  These are starting points only. Your actual eligibility depends on your income and household.
                  All resources listed are free.
                </p>
              </div>

              <div className="mt-6 grid gap-5">
                {results.map((result) => (
                  <article
                    key={result.key}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-ink">{result.title}</h3>
                    <p className="mt-3 text-lg leading-8 text-slate-700">{result.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {result.applyHref && (
                        <a
                          href={result.applyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex rounded-full bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
                        >
                          {result.applyLabel ?? "Apply Now"} &rarr;
                        </a>
                      )}
                      <Link
                        href={result.href}
                        className="focus-ring inline-flex rounded-full border border-brand-700 px-5 py-3 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
                      >
                        See your options &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={goBack}
                  className="focus-ring rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="focus-ring rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
                >
                  Start over
                </button>
              </div>
            </>
          )}
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            Your answers stay on your screen — nothing is saved, stored, or shared. For a more exact estimate, use the{" "}
            <a
              href="https://www.coveredca.com/shop-and-compare/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-2 hover:text-amber-700"
            >
              Covered California Shop and Compare tool
            </a>.
          </p>
        </section>
      </main>
    </div>
    {isResultsStep && age && need && printBenefits.length > 0 && (
      <PrintSummary
        pageTitle="Your Personalized Benefits Summary"
        eligibilitySummary={eligibilitySummary}
        benefits={printBenefits}
      />
    )}
    </>
  );
}
