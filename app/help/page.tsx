import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help and How to Apply | MediGuide.health",
  description:
    "How to apply for Medi-Cal, Covered California, and Medicare in California. Free help resources, answers to common questions, and your patient rights.",
};

const applyCards = [
  {
    id: "medi-cal",
    title: "Medi-Cal",
    subtitle: "Free or low-cost coverage for income-qualifying Californians",
    steps: [
      "Apply online at BenefitsCal.com — the fastest way to start.",
      "You can also apply through Covered California and the system will automatically check your Medi-Cal eligibility.",
      "Or visit your county DPSS (Department of Public Social Services) office in person.",
      "For most adults ages 19–64, you may qualify if your income is below roughly 138% of the federal poverty level (about $22,025 per year for one person in 2026).",
      "Processing usually takes up to 45 days, but many applicants are approved faster. You do not have to wait to see a doctor — ask your provider about presumptive eligibility.",
    ],
    contact: "BenefitsCal: benefitscal.com or 1-877-847-3663",
    note: "You can start an application without having all your documents. Gather what you have and submit the rest later.",
  },
  {
    id: "covered-california",
    title: "Covered California",
    subtitle: "Marketplace insurance plans, often with significant financial help",
    steps: [
      "Open enrollment runs November 1 through January 31 each year.",
      "If you lose coverage or have a qualifying life event — job loss, a move, a new baby, marriage — you have 60 days to enroll outside open enrollment.",
      "Apply at CoveredCA.com or call 1-800-300-1506.",
      "Free certified enrollment assisters are available across California to help you compare plans at no cost — find one at CoveredCA.com.",
      "Many Californians who earn too much for Medi-Cal still qualify for significant monthly premium savings through premium tax credits.",
    ],
    contact: "Covered California: coveredca.com or 1-800-300-1506",
    note: "Use the Shop and Compare tool on CoveredCA.com to estimate your monthly costs before you formally enroll.",
  },
  {
    id: "medicare",
    title: "Medicare",
    subtitle: "Federal health coverage for people 65 and older, and some younger people with disabilities",
    steps: [
      "Apply through the Social Security Administration at SSA.gov or by calling 1-800-772-1213.",
      "Your Initial Enrollment Period starts 3 months before your 65th birthday and ends 3 months after.",
      "If you have employer coverage, check whether you should delay Medicare Part B — enrolling while you still have employer coverage may let you avoid a late enrollment penalty later.",
      "For prescription drug coverage, enroll in a Medicare Part D plan at the same time you enroll in Medicare.",
      "HICAP (Health Insurance Counseling and Advocacy Program) offers free, unbiased Medicare counseling for California residents at any stage.",
    ],
    contact: "HICAP (free Medicare counseling): 1-800-434-0222",
    note: "Missing your Initial Enrollment Period without qualifying coverage can result in permanent late penalties that last the rest of your life.",
  },
] as const;

const helpResources = [
  {
    name: "HICAP — Free Medicare Counseling",
    description:
      "One-on-one help comparing Medicare plans, understanding your options, and navigating appeals. Unbiased and available statewide.",
    contact: "1-800-434-0222",
  },
  {
    name: "BenefitsCal",
    description:
      "California's online portal to apply for Medi-Cal, CalFresh, and other public benefit programs.",
    contact: "benefitscal.com or 1-877-847-3663",
  },
  {
    name: "Covered California",
    description:
      "Enroll in marketplace health insurance plans. Find certified enrollment helpers near you.",
    contact: "coveredca.com or 1-800-300-1506",
  },
  {
    name: "Medi-Cal Member Help Center",
    description:
      "Questions about your current Medi-Cal coverage, plan, or benefits.",
    contact: "1-800-541-5555",
  },
  {
    name: "2-1-1 — Local Referrals",
    description:
      "Local health and social service referrals in most California counties. Available in multiple languages.",
    contact: "Dial 2-1-1",
  },
  {
    name: "988 — Mental Health and Crisis Line",
    description:
      "Free, confidential mental health support and crisis help, available 24/7 by call or text. California connects to local crisis centers.",
    contact: "Call or text 988",
  },
] as const;

const faqItems = [
  {
    question: "What if I earn too much for Medi-Cal but can't afford private insurance?",
    answer:
      "Covered California may still help you through premium tax credits. Federal subsidies are available for income up to 400% of the federal poverty level — about $63,840 per year for a single person in 2026. Note: the enhanced subsidies from 2021–2025 (IRA/ARPA) expired at the end of 2025, so 2026 premiums are higher on average. Use CoveredCA.com's Shop and Compare tool to see your actual estimated cost.",
  },
  {
    question: "What if I applied but got denied?",
    answer:
      "You have the right to appeal. For Medi-Cal, you can request a State Fair Hearing within 90 days of your denial notice. For Covered California, you can appeal directly with them. Eligibility errors happen. Many people qualify after an appeal, so do not give up after one denial.",
  },
  {
    question: "What documents do I need to apply for Medi-Cal?",
    answer:
      "Generally you will need proof of California residency, Social Security numbers for U.S. citizens in your household, and income information. You can start an application at BenefitsCal.com without having all your documents — you can upload or submit them after you start.",
  },
  {
    question: "Do I need to renew my Medi-Cal coverage every year?",
    answer:
      "Yes, every 12 months. You will receive a renewal notice by mail. Keep your address current with your county so you do not miss it. If you do not respond to the renewal notice, your coverage may end even if you still qualify.",
  },
  {
    question: "Can I have both Medi-Cal and Medicare at the same time?",
    answer:
      "Yes. This is called being \"dual eligible.\" Medicare pays first, and Medi-Cal can help cover Medicare premiums, deductibles, copays, and some services Medicare does not cover. If you qualify for both, apply for both — they work well together.",
  },
  {
    question: "Will applying for Medi-Cal affect my immigration case?",
    answer:
      "Emergency Medi-Cal is available to everyone regardless of immigration status. Important 2026 update: as of January 1, 2026, new undocumented adults (19+) can no longer enroll in full-scope Medi-Cal — only Emergency Medi-Cal and pregnancy coverage remain available for new adult applicants in this group. Children under 19, pregnant people, and former foster youth under 26 are still fully covered regardless of status. If you are already enrolled in Medi-Cal, you can keep your coverage as long as you renew on time. A legal aid organization can give you guidance specific to your situation.",
  },
  {
    question: "What is the income limit for Medi-Cal?",
    answer:
      "For most adults ages 19–64, the limit is about 138% of the federal poverty level — roughly $22,025 per year for a single person in 2026. For a family of 4, the limit is approximately $55,500. Children and pregnant people qualify at much higher income levels. These amounts are updated each year when HHS publishes new federal poverty guidelines.",
  },
] as const;

const rightsItems = [
  "The right to receive care without discrimination based on race, color, national origin, disability, age, sex, religion, or sexual orientation.",
  "The right to receive a clear explanation of your diagnosis and treatment options in a language you understand.",
  "The right to appeal or file a grievance when your health plan denies a service or claim.",
  "The right to request and receive copies of your medical records.",
  "The right to choose your own primary care doctor within your health plan's network.",
  "The right to emergency care at any time, regardless of your health plan or prior authorization.",
] as const;

const jumpLinks = [
  { label: "How to Apply", href: "#how-to-apply" },
  { label: "Free Help Resources", href: "#free-help-resources" },
  { label: "Common Questions", href: "#common-questions" },
  { label: "Your Rights", href: "#your-rights" },
] as const;

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Help</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Help and How to Apply
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
            How to apply for California health coverage, where to get free one-on-one help, answers to
            common questions, and your rights as a patient.
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

        {/* How to Apply */}
        <section id="how-to-apply" className="mt-8 scroll-mt-24">
          <div className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">How to Apply</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Applying step by step
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              In California there is no "wrong door" — you can start your application through any of the
              paths below and the system will help sort out which programs you qualify for.
            </p>
          </div>

          <div className="mt-5 space-y-5">
            {applyCards.map((card) => (
              <section
                key={card.id}
                id={card.id}
                className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
              >
                <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{card.title}</h3>
                <p className="mt-1 text-base font-semibold text-slate-500">{card.subtitle}</p>

                <div className="mt-5">
                  <p className="text-base font-semibold text-ink">Steps:</p>
                  <ol className="mt-3 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
                    {card.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-brand-100 bg-brand-50 px-5 py-3">
                  <p className="text-base font-semibold text-brand-900">{card.contact}</p>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  <strong>Good to know:</strong> {card.note}
                </p>
              </section>
            ))}
          </div>
        </section>

        {/* Free Help Resources */}
        <section
          id="free-help-resources"
          className="mt-8 scroll-mt-24 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Free Help</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Get free help from real people
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            You do not have to figure this out alone. These are trusted, free resources available to
            California residents.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {helpResources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-5"
              >
                <p className="text-lg font-bold text-ink">{resource.name}</p>
                <p className="mt-2 text-base leading-7 text-slate-700">{resource.description}</p>
                <p className="mt-3 text-base font-semibold text-brand-700">{resource.contact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Questions */}
        <section
          id="common-questions"
          className="mt-8 scroll-mt-24 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Common Questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions we hear all the time
          </h2>

          <div className="mt-8 space-y-4">
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
        </section>

        {/* Your Rights */}
        <section
          id="your-rights"
          className="mt-8 scroll-mt-24 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Your Rights</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Know your rights as a patient
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            California gives health plan members strong legal protections. Here are your key rights.
          </p>

          <ul className="mt-6 space-y-4">
            {rightsItems.map((right) => (
              <li key={right} className="flex items-start gap-4">
                <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                  ✓
                </span>
                <p className="text-lg leading-8 text-slate-700">{right}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            <strong>Reminder:</strong> MediGuide.health is a free, non-commercial informational guide.
            We are not a government agency and cannot process applications or appeals. For official
            help, use the resources listed above.
          </p>
        </section>
      </div>
    </main>
  );
}
