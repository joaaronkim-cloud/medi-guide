import Link from "next/link";

type PlaceholderRouteProps = {
  title: string;
  description: string;
};

export function PlaceholderRoute({ title, description }: PlaceholderRouteProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_50%,_#fffaf2_100%)] px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/92 p-8 shadow-card sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">MediGuide.health</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{description}</p>

        <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            [TODO: Build this page with the California content brief]
          </p>
          <p className="mt-3 text-base leading-7 text-slate-600">
            This placeholder is here so the homepage links work cleanly while the deeper content pages are still
            being built.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="focus-ring inline-flex rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to Homepage
          </Link>
          <Link
            href="/find-my-benefits"
            className="focus-ring inline-flex rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
          >
            Find My Benefits &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
