"use client";

/**
 * app/find-my-benefits/error.tsx
 *
 * Next.js App Router file-based error boundary for the /find-my-benefits route.
 * Catches any unhandled runtime errors thrown inside FindMyBenefitsQuiz.
 * Must be a Client Component — required by Next.js.
 */

import Link from "next/link";
import { useEffect } from "react";

export default function QuizError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console in development; swap for an error monitoring service later
    console.error("[MediGuide quiz error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <div
          role="alert"
          className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-card sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Something went wrong
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The quiz couldn&apos;t load
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            We&apos;re sorry — something unexpected happened. Your answers were not saved or
            shared. You can try refreshing the quiz, or go back to the homepage and start
            again.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="focus-ring inline-flex rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
            >
              Try again &rarr;
            </button>
            <Link
              href="/"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Homepage
            </Link>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-700">
              Need help right away?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Call{" "}
              <a
                href="tel:18003001506"
                className="font-semibold text-brand-700 hover:text-brand-900 hover:underline"
              >
                Covered California at 1-800-300-1506
              </a>{" "}
              or{" "}
              <a
                href="tel:18778473663"
                className="font-semibold text-brand-700 hover:text-brand-900 hover:underline"
              >
                BenefitsCal at 1-877-847-3663
              </a>{" "}
              — both offer free bilingual enrollment help.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
