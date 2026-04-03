"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTENT } from "@/data/content";
import { QUESTION_SETS } from "@/data/questions";
import { getProgramMatches, Language, PROGRAM_CONTENT, QuestionnaireAnswers } from "@/data/programs";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProgramCard } from "@/components/ProgramCard";
import { SiteFooter } from "@/components/SiteFooter";

const INITIAL_ANSWERS: QuestionnaireAnswers = {
  ageGroup: "26-64",
  incomeRange: "moderate",
  employmentStatus: "employed",
  studentStatus: "not-student",
  householdSize: "1",
  languagePreference: "en",
};

type EligibilityToolProps = {
  initialLanguage?: Language;
  showHero?: boolean;
};

export function EligibilityTool({ initialLanguage = "en", showHero = false }: EligibilityToolProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(INITIAL_ANSWERS);

  const content = CONTENT[language];
  const questions = QUESTION_SETS[language];
  const isComplete = stepIndex >= questions.length;
  const currentQuestion = questions[Math.min(stepIndex, questions.length - 1)];

  const matches = useMemo(() => getProgramMatches(answers), [answers]);

  function handleAnswer(value: string) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.key]: value,
    } as QuestionnaireAnswers;

    // Keep the site language aligned with the user's preferred language choice.
    if (currentQuestion.key === "languagePreference") {
      nextAnswers.languagePreference = value as Language;
      setLanguage(value as Language);
    }

    setAnswers(nextAnswers);
  }

  function goNext() {
    setStepIndex((current) => Math.min(current + 1, questions.length));
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function resetFlow() {
    setAnswers(INITIAL_ANSWERS);
    setLanguage(initialLanguage);
    setStepIndex(0);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link href="/" className="focus-ring rounded-md text-2xl font-bold text-ink">
            {content.navLabel}
          </Link>
          <LanguageToggle language={language} onChange={setLanguage} label={content.languageLabel} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
        {showHero ? (
          <>
            <section className="rounded-[2rem] border border-brand-100 bg-white px-6 py-12 shadow-card sm:px-10">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                  California Health Benefits
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                  {content.heroTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-700">{content.heroSubtitle}</p>
                <Link
                  href="/eligibility"
                  className="focus-ring mt-8 inline-flex rounded-full bg-brand-700 px-7 py-4 text-lg font-semibold text-white transition hover:bg-brand-900"
                >
                  {content.heroCta}
                </Link>
              </div>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold text-ink">{content.homeSectionTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">{content.homeSectionBody}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold text-ink">{content.homeSecondaryTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">{content.homeSecondaryBody}</p>
              </div>
            </section>
          </>
        ) : (
          <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-3xl font-bold text-ink">{content.questionnaireTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">{content.questionnaireIntro}</p>
            {language === "es" ? (
              <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-base text-amber-900">
                {content.spanishNote}
              </p>
            ) : null}

            {!isComplete ? (
              <div className="mt-8">
                <div className="mb-5 flex items-center justify-between text-sm font-semibold text-slate-500">
                  <span>
                    Step {stepIndex + 1} of {questions.length}
                  </span>
                  <span>{Math.round(((stepIndex + 1) / questions.length) * 100)}%</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-brand-700 transition-all"
                    style={{ width: `${((stepIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <fieldset className="mt-8">
                  <legend className="text-2xl font-semibold text-ink">{currentQuestion.title}</legend>
                  <div className="mt-5 grid gap-4">
                    {currentQuestion.options.map((option) => {
                      const selected = answers[currentQuestion.key] === option.value;

                      return (
                        <label
                          key={option.value}
                          className={`cursor-pointer rounded-2xl border p-5 transition ${
                            selected
                              ? "border-brand-700 bg-brand-50 ring-2 ring-brand-100"
                              : "border-slate-200 bg-white hover:border-brand-100 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            className="sr-only"
                            type="radio"
                            name={currentQuestion.key}
                            value={option.value}
                            checked={selected}
                            onChange={() => handleAnswer(option.value)}
                          />
                          <span className="text-lg font-semibold text-ink">{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={stepIndex === 0}
                    className="focus-ring rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {content.backLabel}
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="focus-ring rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
                  >
                    {content.nextLabel}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6">
                  <h3 className="text-3xl font-bold text-ink">{content.resultsTitle}</h3>
                  <p className="mt-3 text-lg leading-8 text-slate-700">{content.disclaimer}</p>
                </div>
                <div className="mt-6 grid gap-5">
                  {matches.map((programKey) => (
                    <ProgramCard key={programKey} program={PROGRAM_CONTENT[language][programKey]} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={resetFlow}
                  className="focus-ring mt-6 rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {content.resetLabel}
                </button>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-bold text-ink">{content.trustHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{content.trustBody}</p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-bold text-ink">{content.questionsSummaryTitle}</h2>
              <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-700">
                {content.questionsSummaryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-bold text-ink">{content.integrationTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{content.integrationBody}</p>
            </div>
          </aside>
        </section>
        )}
      </main>
      <SiteFooter
        footerDisclaimer={content.footerDisclaimer}
        sourceLabel={content.sourceLabel}
        lastUpdatedLabel={content.lastUpdatedLabel}
      />
    </div>
  );
}
