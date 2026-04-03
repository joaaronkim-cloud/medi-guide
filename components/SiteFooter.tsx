type SiteFooterProps = {
  footerDisclaimer: string;
  sourceLabel: string;
  lastUpdatedLabel: string;
};

export function SiteFooter({ footerDisclaimer, sourceLabel, lastUpdatedLabel }: SiteFooterProps) {
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-base text-slate-600 sm:px-8">
        <p className="font-semibold text-ink">{footerDisclaimer}</p>
        <p className="mt-2">{sourceLabel}</p>
        <p className="mt-2">
          {lastUpdatedLabel}: {lastUpdated}
        </p>
      </div>
    </footer>
  );
}
