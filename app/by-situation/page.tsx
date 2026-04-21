import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "By Situation | MediGuide.health",
  description:
    "California health coverage options by life situation — pregnancy, job loss, disability, immigration status, veterans, homelessness, recovery, and more.",
};

const situations = [
  {
    id: "pregnant",
    title: "Pregnant or Just Had a Baby",
    who: "All pregnant Californians, including people with low income, immigrants of any status, and those who are uninsured.",
    programs: [
      {
        name: "Medi-Cal for Pregnant Women",
        detail:
          "Covers pregnancy, labor, delivery, and postpartum care for 60 days after birth. Income limit is about 213% of the federal poverty level — much higher than regular Medi-Cal for adults. Covers people regardless of immigration status.",
      },
      {
        name: "WIC",
        detail:
          "Free nutrition benefits, food support, and breastfeeding help for pregnant and postpartum people, and children under 5. Apply through your county WIC office or call 1-888-942-9675.",
      },
      {
        name: "Family PACT",
        detail:
          "Free birth control and family planning services for income-qualifying Californians regardless of coverage status.",
      },
      {
        name: "Newborn coverage",
        detail:
          "Babies born to parents with Medi-Cal can be automatically enrolled for their first year. Report the birth to your plan quickly — do not wait.",
      },
    ],
    action: "Apply for Medi-Cal immediately through BenefitsCal.com. Do not wait to see if you qualify — apply and let the system decide.",
  },
  {
    id: "job-loss",
    title: "Recently Lost a Job or Health Coverage",
    who: "People who lost employer-sponsored health insurance in the last 60 days.",
    programs: [
      {
        name: "Covered California Special Enrollment Period",
        detail:
          "Job loss is a qualifying life event that gives you 60 days to enroll in a Covered California marketplace plan. Financial help (premium tax credits) may be available.",
      },
      {
        name: "Medi-Cal",
        detail:
          "If your income dropped significantly after job loss, you may now qualify for free or low-cost Medi-Cal. You can apply at any time at BenefitsCal.com.",
      },
      {
        name: "COBRA",
        detail:
          "COBRA lets you continue your employer's plan for up to 18 months, but you pay the full premium — usually much more expensive than Medi-Cal or Covered California. You have 60 days to decide.",
      },
    ],
    action:
      "Compare Medi-Cal vs. Covered California first. If your income dropped below about 138% of the federal poverty level (~$20,120/year for one person), Medi-Cal may be free. Otherwise, use Covered California's 60-day special enrollment window.",
  },
  {
    id: "disability",
    title: "Living with a Disability or Chronic Condition",
    who: "Californians with a physical or mental disability, chronic illness, or long-term care needs.",
    programs: [
      {
        name: "Medi-Cal",
        detail:
          "Many people with disabilities qualify at higher income levels or through specific disability-related Medi-Cal pathways. Coverage includes medical care, behavioral health, and pharmacy.",
      },
      {
        name: "IHSS — In-Home Supportive Services",
        detail:
          "If you have Medi-Cal and need help with daily tasks like cooking, cleaning, bathing, or medication management, IHSS can fund a paid caregiver — including a family member — to assist you at home.",
      },
      {
        name: "SSI",
        detail:
          "Supplemental Security Income provides monthly payments to people with very low income and a disability. SSI often brings Medi-Cal automatically in California.",
      },
      {
        name: "Regional Center Services",
        detail:
          "For people with developmental disabilities, California's regional center system offers services, supports, and care coordination through local offices.",
      },
    ],
    action:
      "Start by applying for Medi-Cal at BenefitsCal.com. Then ask your county social services office specifically about IHSS eligibility if you need help with daily living.",
  },
  {
    id: "immigration",
    title: "Undocumented or Mixed-Status Household",
    who: "Individuals without legal immigration status, DACA holders, and families where some members have status and some do not.",
    programs: [
      {
        name: "Full-Scope Medi-Cal for Adults",
        detail:
          "As of January 2024, California expanded full-scope Medi-Cal to all income-eligible adults regardless of immigration status. You do not need legal residency to qualify.",
      },
      {
        name: "Medi-Cal for Children",
        detail:
          "Children under 19 qualify for Medi-Cal regardless of immigration status as long as they meet the income rules.",
      },
      {
        name: "Emergency Medi-Cal",
        detail:
          "Available to all California residents regardless of immigration status. Covers emergency care, pregnancy, dialysis, and certain other urgent services.",
      },
      {
        name: "Public charge note",
        detail:
          "Applying for Medi-Cal does NOT trigger a \"public charge\" concern for most people. Emergency Medi-Cal and pregnancy Medi-Cal are specifically excluded from public charge rules.",
      },
    ],
    action:
      "Apply at BenefitsCal.com. Each family member can apply separately based on their own eligibility — you do not need to list undocumented members if they are not applying.",
  },
  {
    id: "veteran",
    title: "Military Veteran or Active-Duty Family",
    who: "Veterans, retired military, active-duty service members, and their dependents.",
    programs: [
      {
        name: "VA Health Care",
        detail:
          "Eligible veterans can receive primary care, mental health, and specialty care through the VA. Not all veterans are automatically enrolled — you must apply at VA.gov or call 1-800-827-1000.",
      },
      {
        name: "Medi-Cal",
        detail:
          "Veterans and their families can use Medi-Cal if they qualify based on income, even if they also use VA services. VA care and Medi-Cal can work together.",
      },
      {
        name: "Covered California",
        detail:
          "Available for veterans and families who do not qualify for VA care or who need additional marketplace coverage options.",
      },
      {
        name: "CalVet",
        detail:
          "California's Department of Veterans Affairs can help veterans navigate benefits, applications, and resources. Call 1-844-SERV-CAL.",
      },
    ],
    action:
      "Start with VA enrollment at VA.gov or by calling 1-800-827-1000. Contact CalVet at 1-844-SERV-CAL for personalized help navigating your California and federal options.",
  },
  {
    id: "homelessness",
    title: "Homeless or in Unstable Housing",
    who: "People without a permanent address — including those in shelters, motels, or temporarily staying with others.",
    programs: [
      {
        name: "Medi-Cal",
        detail:
          "You do not need a permanent home address to apply for Medi-Cal. You can use a shelter address, a social services office address, or a P.O. box. Visit any county social services office for help enrolling.",
      },
      {
        name: "CalAIM Enhanced Care Management",
        detail:
          "A newer Medi-Cal program designed to help people with complex needs — including housing instability — by connecting them with a care manager who coordinates medical, behavioral health, and social services.",
      },
      {
        name: "2-1-1",
        detail:
          "Dial 2-1-1 for referrals to local shelters, food programs, health services, and other community support in most California counties.",
      },
    ],
    action:
      "Visit a county social services office, a community health clinic (FQHC), or a shelter and ask for help enrolling in Medi-Cal. No permanent address is required.",
  },
  {
    id: "recovery",
    title: "In Recovery from Substance Use",
    who: "People seeking or currently in treatment for alcohol or drug use.",
    programs: [
      {
        name: "Drug Medi-Cal Organized Delivery System (DMC-ODS)",
        detail:
          "Medi-Cal covers a full continuum of substance use disorder treatment, including withdrawal management, residential treatment, intensive outpatient, medication-assisted treatment (MAT), and recovery support.",
      },
      {
        name: "Medi-Cal",
        detail:
          "If you are not already enrolled, Medi-Cal is the first step. Once enrolled, you can access behavioral health and SUD services through your county.",
      },
      {
        name: "988 Crisis Line",
        detail:
          "Free, confidential support available 24/7 by call or text. Can help connect you to local treatment resources.",
      },
    ],
    action:
      "Apply for Medi-Cal at BenefitsCal.com, then contact your county Behavioral Health department to be connected with substance use disorder treatment services.",
  },
  {
    id: "domestic-violence",
    title: "Fleeing Domestic Violence or a Safety Concern",
    who: "People experiencing domestic violence, sexual assault, or other safety concerns.",
    programs: [
      {
        name: "National Domestic Violence Hotline",
        detail:
          "Free, confidential, 24/7 support: 1-800-799-7233 (SAFE) or text START to 88788. Can help with safety planning and local referrals.",
      },
      {
        name: "Safe at Home",
        detail:
          "California's address confidentiality program allows survivors to use a substitute address so abusers cannot track their location through public records.",
      },
      {
        name: "Medi-Cal",
        detail:
          "Health coverage is available and you do not need to document your situation. You can use a shelter address or a P.O. box when applying.",
      },
      {
        name: "CalWORKs",
        detail:
          "Cash assistance and employment support for qualifying California families, with specific protections for domestic violence survivors.",
      },
    ],
    action:
      "Your safety comes first. Call the National Domestic Violence Hotline (1-800-799-7233) for immediate safety planning and local shelter referrals.",
  },
  {
    id: "tribal",
    title: "California Tribal Member",
    who: "Enrolled members of federally recognized or California tribal nations.",
    programs: [
      {
        name: "Indian Health Service (IHS)",
        detail:
          "Federal health program for eligible American Indian and Alaska Native people. Not all services are available at every IHS facility.",
      },
      {
        name: "Tribal Health Programs",
        detail:
          "Many California tribes operate their own health clinics offering primary care, behavioral health, dental, and other services for tribal members.",
      },
      {
        name: "Medi-Cal",
        detail:
          "Tribal members may qualify for Medi-Cal, and IHS costs can sometimes be applied toward Medi-Cal thresholds. Medi-Cal and IHS can often be used together.",
      },
      {
        name: "Covered California",
        detail:
          "Tribal members have special enrollment rights in Covered California — you can enroll any time of year, not just during open enrollment.",
      },
    ],
    action:
      "Contact your tribal health program or local IHS facility first. For Medi-Cal enrollment, contact your county social services office.",
  },
] as const;

export default function BySituationPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12">
        <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">By Situation</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Find Help by Your Situation
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
            Sometimes your life situation is the best starting point — not your age. Find your situation
            below to see which California health coverage options may apply.
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Jump to situation</p>
            <nav aria-label="Jump to situation" className="mt-3 flex flex-wrap gap-3">
              {situations.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="focus-ring rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-ink"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-8 space-y-6">
          {situations.map((situation) => (
            <section
              key={situation.id}
              id={situation.id}
              className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
            >
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{situation.title}</h2>

              <div className="mt-4">
                <p className="text-base font-semibold text-ink">Who this covers:</p>
                <p className="mt-2 text-lg leading-8 text-slate-700">{situation.who}</p>
              </div>

              <div className="mt-5">
                <p className="text-base font-semibold text-ink">Key programs to know:</p>
                <div className="mt-3 space-y-3">
                  {situation.programs.map((program) => (
                    <div
                      key={program.name}
                      className="rounded-[1.25rem] border border-slate-100 bg-slate-50 px-5 py-4"
                    >
                      <p className="text-base font-semibold text-ink">{program.name}</p>
                      <p className="mt-1 text-base leading-7 text-slate-700">{program.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[1.25rem] border border-emerald-100 bg-emerald-50 px-5 py-4">
                <p className="text-base font-semibold text-emerald-900">Next step:</p>
                <p className="mt-1 text-base leading-7 text-emerald-900">{situation.action}</p>
              </div>
            </section>
          ))}
        </section>

        <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-base leading-7 text-amber-900">
            <strong>Reminder:</strong> This guide is a starting point only. Eligibility depends on your
            specific income, household, and situation. Use the resources listed on each section to confirm
            your eligibility and apply.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Not sure which situation fits?</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Answer three quick questions to get a personalized starting point.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/find-my-benefits"
              className="focus-ring inline-flex rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900"
            >
              Find My Benefits &rarr;
            </Link>
            <Link
              href="/help"
              className="focus-ring inline-flex rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Help and How to Apply
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
