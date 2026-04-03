import { ProgramContent } from "@/data/programs";

type ProgramCardProps = {
  program: ProgramContent;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <h3 className="text-2xl font-bold text-ink">{program.name}</h3>
      <p className="mt-3 text-lg leading-8 text-slate-700">{program.description}</p>
      <a
        href={program.nextStepHref}
        className="focus-ring mt-6 inline-flex rounded-full bg-brand-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
      >
        {program.nextStepLabel}
      </a>
    </article>
  );
}
