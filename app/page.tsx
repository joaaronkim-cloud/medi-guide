import Link from "next/link";

const audienceCards = [
  {
    title: "I'm a parent",
    description: "Find coverage options for kids, teens, newborns, dental, vision, and school-based care.",
    href: "/by-age/kids-teens",
  },
  {
    title: "I'm between jobs",
    description: "See low-cost options if your work changed, your income dropped, or you lost insurance.",
    href: "/adults",
  },
  {
    title: "I'm turning 65",
    description: "Get a simpler starting point for Medicare, Medi-Cal, drug coverage, and next steps.",
    href: "/seniors",
  },
  {
    title: "I have a special situation",
    description: "Find help for pregnancy, disability, immigration issues, homelessness, recovery, and more.",
    href: "/special-status",
  },
] as const;

const howItWorksSteps = [
  {
    title: "Answer 3 quick questions",
    description: "We keep it short, plain, and easy to follow.",
  },
  {
    title: "See what you qualify for",
    description: "We show the programs that may fit your situation in California.",
  },
  {
    title: "Get a simple action plan",
    description: "You leave with the next step to take instead of a wall of confusing text.",
  },
] as const;

const faqItems = [
  {
    question: "Do I need to make an account to use MediGuide?",
    answer:
      "No. MediGuide is free to use, and the homepage quiz flow is designed to work without signup.",
  },
  {
    question: "Will this tell me if I qualify for Medi-Cal or Covered California?",
    answer:
      "Yes. We help you quickly see which California coverage paths may fit, then point you to the next action to take.",
  },
  {
    question: "What if I am undocumented or my family has mixed immigration status?",
    answer:
      "Some California programs still cover children, pregnant people, and other groups even when immigration rules are complicated. We explain those paths in plain English.",
  },
  {
    question: "I already have a problem right now. Can this still help me?",
    answer:
      "Yes. MediGuide is meant to be action-first. We aim to show what to do next, where to apply, and what programs to ask about.",
  },
  {
    question: "Is this official government advice?",
    answer:
      "No. This site is an informational guide built to make public program information easier to understand. It is not legal or medical advice.",
  },
] as const;

const homeQuickLinks = [
  { label: "Who It's For", href: "#who-its-for" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function HomePage() {
  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.65),_transparent_36%),linear-gradient(180deg,_#f9fcff_0%,_#f5f9f7_46%,_#fbf7ef_100%)]">
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <section className="mb-8 rounded-[1.5rem] border border-white/70 bg-white/85 p-4 shadow-card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">On this page</p>
              <p className="mt-1 text-base text-slate-600">
                Use these quick links if you want the fastest path through the homepage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {homeQuickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-ring rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-100 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 shadow-card">
          <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                California health coverage made simpler
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Find out what health coverage you actually qualify for, in plain English.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                We help Californians figure out what coverage paths may fit their real life without sending
                them through a maze of confusing websites.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/find-my-benefits"
                  className="focus-ring inline-flex rounded-full bg-brand-700 px-7 py-4 text-lg font-semibold text-white transition hover:bg-brand-900"
                >
                  Find My Benefits &rarr;
                </Link>
                <a
                  href="#how-it-works"
                  className="focus-ring inline-flex rounded-full border border-slate-300 px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  See How It Works
                </a>
              </div>

              <p className="mt-4 text-sm font-semibold tracking-wide text-slate-500">
                Free. No signup. Takes 2 minutes.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-brand-100 bg-[linear-gradient(180deg,_#f5fbff_0%,_#f7fbf8_100%)] p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                  Plain language
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                  California-focused
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                  Action-first
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
                  What we help you understand
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Medi-Cal — free or low-cost coverage",
                    "Covered California — marketplace plans with subsidies",
                    "Medicare — federal coverage starting at 65",
                    "Dental, vision, and mental health paths",
                    "Pregnancy, disability, job loss, and more",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 text-sm font-bold text-brand-700">✓</span>
                      <span className="text-base leading-7 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm leading-6 text-amber-900">
                  California has more coverage options than most people realize — including programs for people who think they earn too much to qualify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who is this for? */}
        <section id="who-its-for" className="mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-card sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Who is this for?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Start with the situation that sounds most like you.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              You should not have to learn every California program just to figure out your next step.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-6 transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-card"
              >
                <div className="flex h-full flex-col">
                  <h3 className="text-xl font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate-600">{card.description}</p>
                  <p className="mt-5 text-sm font-semibold text-brand-700 transition group-hover:text-brand-900">
                    Go to this page &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: How it works */}
        <section
          id="how-it-works"
          className="mt-8 rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(240,247,255,0.96))] p-6 shadow-card sm:p-10"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A calmer way to figure out what to do next.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              No giant forms. No confusing agency language. Just a short path toward the next best step.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-700">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Trust signal bar */}
        <section className="mt-8 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/85 px-6 py-5 text-center shadow-sm">
          <p className="text-base font-semibold text-emerald-900 sm:text-lg">
            MediGuide.health is a free, non-commercial guide for Californians. We don&apos;t sell your data. Ever.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section id="faq" className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Quick FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Answers to what people actually wonder.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                These cover the most common things Californians wonder about health coverage.
              </p>

              <div className="mt-6">
                <Link
                  href="/help"
                  className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  More help and how-to-apply guides &rarr;
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] p-5"
                >
                  <summary className="cursor-pointer list-none pr-8 text-left text-lg font-semibold text-ink">
                    <span>{item.question}</span>
                    <span className="ml-3 inline-block text-brand-700 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
