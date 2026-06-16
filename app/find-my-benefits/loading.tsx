/**
 * app/find-my-benefits/loading.tsx
 *
 * Shown during client-side navigation to /find-my-benefits while the
 * FindMyBenefitsQuiz component hydrates. Mirrors the real quiz card
 * layout with calm animate-pulse shimmer bars — no jarring animations.
 */

export default function FindMyBenefitsLoading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        {/* Header card skeleton */}
        <div className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10 animate-pulse">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="h-9 w-64 rounded-full bg-slate-200" />
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="h-10 w-24 rounded-full bg-slate-200" />
              <div className="h-10 w-48 rounded-full bg-slate-200" />
              <div className="h-10 w-36 rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-4 w-full max-w-lg rounded-full bg-slate-200" />
            <div className="h-4 w-3/4 max-w-md rounded-full bg-slate-200" />
          </div>
        </div>

        {/* Quiz card skeleton */}
        <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10 animate-pulse">
          {/* Progress row */}
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded-full bg-slate-200" />
            <div className="h-4 w-10 rounded-full bg-slate-200" />
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-1/4 rounded-full bg-slate-200" />
          </div>

          {/* Question text */}
          <div className="mt-8 space-y-3">
            <div className="h-8 w-56 rounded-full bg-slate-200" />
          </div>

          {/* Answer options */}
          <div className="mt-6 grid gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-14 w-full rounded-[1.25rem] bg-slate-100"
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-24 rounded-full bg-slate-100" />
            <div className="h-12 w-28 rounded-full bg-slate-200" />
          </div>
        </div>
      </main>
    </div>
  );
}
