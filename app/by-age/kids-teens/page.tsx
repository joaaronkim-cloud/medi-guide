import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids and Teens (0-17) | MediGuide.health",
  description:
    "Plain-English California health benefits for kids and teens, including Medi-Cal, child coverage, dental, vision, newborn coverage, and school-based services.",
};

const benefitCards = [
  {
    id: "medi-cal-kids",
    title: "Medi-Cal for Kids",
    who: "California children and teens under 19 in low- to moderate-income households. Kids can qualify at much higher income levels than adults, and California covers children under 19 regardless of immigration status if they meet the other rules.",
    bullets: [
      "Full coverage usually includes checkups, vaccines, doctor visits, hospital care, and prescriptions.",
      "Many children also get dental, vision, and mental health care through the same coverage.",
      "This can be a strong all-in-one option for everyday care and bigger medical needs.",
    ],
    action:
      "Apply through BenefitsCal.com — one application covers all California programs. The system will match your child to the right one based on your family's situation.",
  },
  {
    id: "cchip",
    title: "CHIP / CCHIP for Some Bay Area Children",
    who: "Some children in San Francisco, San Mateo, and Santa Clara counties whose family income is too high for regular child Medi-Cal but still within California's child expansion range.",
    bullets: [
      "Children can still get broad health coverage even when they make too much for regular child Medi-Cal.",
      "Some families may pay a small monthly premium instead of getting fully free coverage.",
      "This can still be much cheaper than paying full price for a private family plan.",
    ],
    action:
      "If California offers this to your child, it's worth taking — it's almost always more affordable than a private plan and coverage is comparable.",
  },
  {
    id: "covered-california-children",
    title: "Covered California for Children",
    who: "Kids whose families earn too much for child Medi-Cal or CCHIP.",
    bullets: [
      "Families can buy marketplace coverage, and many may still get financial help.",
      "Child plans include pediatric dental and vision benefits.",
      "Covered California lets families compare plan choices and monthly costs in one place.",
    ],
    action:
      "Use Covered California's Shop and Compare tool before buying any child coverage off-marketplace.",
  },
  {
    id: "dental-vision",
    title: "Children's Dental and Vision",
    who: "Kids on Medi-Cal or Covered California family plans.",
    bullets: [
      "Children often get free or very low-cost cleanings, exams, fillings, eye exams, and glasses.",
      "These visits can catch problems early before they become painful or harder to manage.",
      "The value of this benefit depends on choosing the right in-network providers.",
    ],
    action:
      "Choose in-network dental and vision providers right after enrollment and book the preventive visits early.",
  },
  {
    id: "newborn-coverage",
    title: "Newborn Coverage",
    who: "Babies in their first weeks of life, especially when a parent already has Medi-Cal, MCAP, or private coverage.",
    bullets: [
      "Newborns often have automatic or temporary protection right after birth.",
      "Coverage can continue if the birth is reported and the baby is added on time.",
      "Fast follow-up helps avoid gaps in checkups, hospital care, and early newborn visits.",
    ],
    action:
      "Handle enrollment within the first 30 days and do not assume the hospital finished every part for you.",
  },
  {
    id: "foster-youth",
    title: "Foster Youth Coverage",
    who: "Children in foster care and former foster youth.",
    bullets: [
      "Children in foster care can usually get Medi-Cal while they are in care.",
      "Many former foster youth can keep Medi-Cal until age 26 regardless of income.",
      "This protection helps young people avoid losing coverage during a major life transition.",
    ],
    action: "Make sure the county has properly recorded the youth's foster care status before they turn 18 — this is what keeps their Medi-Cal active. Errors here are common and worth checking on.",
  },
  {
    id: "special-needs",
    title: "Special-Needs Child Supports",
    who: "Children with major medical, developmental, or disability-related needs.",
    bullets: [
      "Families may be able to combine waiver-based Medi-Cal, regional center services, and California Children's Services.",
      "These programs may help with therapies, case management, home-based care, and specialty treatment.",
      "Using more than one support path at the same time can save families weeks or months of delay.",
    ],
    action:
      "Don't wait for one application to finish before starting the next — apply to all three programs at the same time to avoid months of delays.",
  },
  {
    id: "school-services",
    title: "School-Based Health Services",
    who: "Public-school students, especially those who need mental health, speech, nursing, or screening services.",
    bullets: [
      "California schools can connect students to free or school-linked mental health care and screenings.",
      "Some children may also get help with speech, nursing, or other school-based supports.",
      "For some families, school is the fastest place to start getting help during the school year.",
    ],
    action:
      "Ask the school, in writing, what health and mental-health services are available on campus or through school partners.",
  },
] as const;

const relatedLinks = [
  {
    title: "Find My Benefits",
    description: "Answer a few questions and see which California coverage paths may fit your family.",
    href: "/find-my-benefits",
  },
  {
    title: "By Situation",
    description: "Help for pregnancy, disability, immigration, homelessness, veterans, and other special cases.",
    href: "/by-situation",
  },
  {
    title: "Help and How to Apply",
    description: "Step-by-step guides for applying to Medi-Cal, Covered California, and more. Plus free help resources.",
    href: "/help",
  },
] as const;

function BenefitCard({
  title,
  who,
  bullets,
  action,
}: {
  title: string;
  who: string;
  bullets: readonly string[];
  action: string;
}) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>

      <div className="mt-5">
        <p className="text-base font-semibold text-ink">Who this is for:</p>
        <p className="mt-2 text-lg leading-8 text-slate-700">{who}</p>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-ink">What you get:</p>
        <ul className="mt-3 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-ink">What to do right now:</p>
        <p className="mt-2 text-lg leading-8 text-slate-700">{action}</p>
      </div>

      <div className="mt-7">
        <Link
          href="/help"
          className="focus-ring inline-flex rounded-full bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
        >
          Learn how to apply &rarr;
        </Link>
      </div>
    </section>
  );
}

export default function KidsTeensPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Age</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Health Benefits for Kids and Teens (0-17)
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
            If you're a parent trying to figure out what your kids are covered for — or what they could be
            covered for — you're in the right place. California has more options for children than most
            families realize, and most of them are free or very low-cost.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to section</p>
            <nav aria-label="Jump to section" className="mt-3 flex flex-wrap gap-3">
              {benefitCards.map((benefit) => (
                <a
                  key={benefit.id}
                  href={`#${benefit.id}`}
                  className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink"
                >
                  {benefit.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-8 space-y-6">
          {benefitCards.map((benefit) => (
            <div key={benefit.id} id={benefit.id}>
              <BenefitCard
                title={benefit.title}
                who={benefit.who}
                bullets={benefit.bullets}
                action={benefit.action}
              />
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            <strong>Plain-English note:</strong> You'll see these names on official California websites — here's what they mean. Medi-Cal is California's main public health coverage program. CCHIP fills coverage gaps for some children in San Francisco, San Mateo, and Santa Clara counties. MCAP is a pregnancy coverage program — it matters for newborn enrollment because how a baby is enrolled at birth affects their first weeks of coverage.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink">What to do next:</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="focus-ring rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-5 transition hover:border-brand-100 hover:shadow-card"
              >
                <p className="text-lg font-semibold text-ink">{link.title}</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>

        </section>
      </div>
    </main>
  );
}
