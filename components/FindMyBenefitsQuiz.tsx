"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
    description: "Start with the child and teen page for coverage, dental, vision, school health, and foster youth support.",
    href: "/by-age/kids-teens",
  },
  "18-29": {
    key: "age-young-adults",
    title: "Young Adults",
    description: "Start here for parent plans, Medi-Cal, students, gig work, reproductive care, and immigration-related rules.",
    href: "/by-age/young-adults",
  },
  "30-64": {
    key: "age-adults",
    title: "Adults",
    description: "Start here for Medi-Cal, Covered California, COBRA, self-employed coverage, and adult dental.",
    href: "/by-age/adults",
  },
  "65-plus": {
    key: "age-seniors",
    title: "Seniors",
    description: "Start here for Medicare, drug coverage, Medi-Cal help, PACE, and income-based senior benefits.",
    href: "/by-age/seniors",
  },
};

const EXTRA_RESULTS: Record<string, ResultCard> = {
  howToApply: {
    key: "how-to-apply",
    title: "How to Apply [TODO]",
    description: "Use the help page for now until the full step-by-step application guide is built.",
    href: "/help",
  },
  hiddenBenefits: {
    key: "hidden-benefits",
    title: "Hidden Benefits Most People Miss [TODO]",
    description: "Use the help page for now until the hidden-benefits page is built.",
    href: "/help",
  },
  helpFaq: {
    key: "help-faq",
    title: "Help / FAQ",
    description: "Use this page if you need a simpler starting point or want help understanding the next step.",
    href: "/help",
  },
  pregnancy: {
    key: "pregnancy",
    title: "Pregnancy and New Parent Help [TODO]",
    description: "Use the Special Status page for now until a dedicated pregnancy page is built.",
    href: "/special-status",
  },
  disability: {
    key: "disability",
    title: "Disability Support [TODO]",
    description: "Use the Special Status page for now until a dedicated disability page is built.",
    href: "/special-status",
  },
  immigration: {
    key: "immigration",
    title: "Immigrant and Undocumented Help [TODO]",
    description: "Use the Special Status page for now until a dedicated immigration page is built.",
    href: "/special-status",
  },
  veteran: {
    key: "veteran",
    title: "Veteran Coverage Help [TODO]",
    description: "Use the Special Status page for now until a dedicated veteran page is built.",
    href: "/special-status",
  },
  homelessness: {
    key: "homelessness",
    title: "Housing and Health Support [TODO]",
    description: "Use the Special Status page for now until a dedicated homelessness or CalAIM page is built.",
    href: "/special-status",
  },
  mentalHealth: {
    key: "mental-health",
    title: "Mental Health Support [TODO]",
    description: "Use the help page for now until a dedicated mental health page is built.",
    href: "/help",
  },
  dentalVision: {
    key: "dental-vision",
    title: "Dental and Vision Help [TODO]",
    description: "Use the help page for now until a dedicated dental and vision page is built.",
    href: "/help",
  },
  prescription: {
    key: "prescription",
    title: "Prescription Cost Help [TODO]",
    description: "Use the help page for now until more detailed prescription-cost guidance is built.",
    href: "/help",
  },
  currentMediCal: {
    key: "current-medi-cal",
    title: "Medi-Cal Support and Extra Benefits [TODO]",
    description: "Use the help page for now until hidden-benefits and Medi-Cal support pages are built.",
    href: "/help",
  },
  jobLoss: {
    key: "job-loss",
    title: "Coverage Gap After Job Loss [TODO]",
    description: "Use the help page for now until a dedicated job-loss coverage page is built.",
    href: "/help",
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

    // [TODO: Add more detailed matching logic for prescription help.]
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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Find My Benefits</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Find My Benefits
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
            Answer 3 simple questions to see which California health benefits you may want to explore first.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            This is a simple guide. It does not save your information.
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
                    <Link
                      href={result.href}
                      className="focus-ring mt-6 inline-flex rounded-full bg-brand-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
                    >
                      Read more
                    </Link>
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
            <strong>Good to know:</strong> This quiz is only a starting point. It does not ask for income,
            and it does not save anything you click.{" "}
            {/* [TODO: Add income question in v2.] */}
            {/* [TODO: Link to Covered CA calculator.] */}
          </p>
        </section>
      </main>
    </div>
  );
}
