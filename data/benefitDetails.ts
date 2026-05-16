/**
 * data/benefitDetails.ts
 *
 * Extended detail content for every quiz result card.
 * Keyed by the `key` field used in FindMyBenefitsQuiz.tsx.
 *
 * Each entry contains:
 *   longDescription – fuller explanation of the program beyond the one-liner
 *   documents.required – documents you must provide (or attempt to provide)
 *   documents.helpful  – useful but not strictly required
 *   documents.notes    – important caveats (e.g. "you can start without all docs")
 *   howToApply.steps   – ordered action steps
 *   howToApply.phone   – primary contact number
 *   howToApply.timeframe – realistic processing window
 *   goodToKnow         – extra facts that change the experience
 *
 * Sources: DHCS, Covered California, VA.gov, SSA.gov, CDSS, CHCF — verified May 2026.
 */

export type BenefitDetail = {
  longDescription: string;
  documents: {
    required: string[];
    helpful?: string[];
    notes?: string;
  };
  howToApply: {
    steps: string[];
    phone?: string;
    timeframe?: string;
  };
  goodToKnow?: string[];
};

export const BENEFIT_DETAILS: Record<string, BenefitDetail> = {

  // ── Medi-Cal (income-driven card) ─────────────────────────────────────────

  "medi-cal-income": {
    longDescription:
      "Medi-Cal is California's free health insurance program for people with low income. In 2026, a single adult qualifies if household income is at or below $22,025 per year (138% of the federal poverty level). Larger households qualify at higher incomes — a family of 4 can earn up to approximately $55,500 and still qualify. There is no monthly premium, no deductible for most services, and no cost to apply. Coverage is comprehensive: doctor visits, hospital care, mental health, prescriptions, dental, vision, lab work, and preventive care are all included. You can apply any day of the year — Medi-Cal has no open enrollment window. Most applications are processed within 45 days, but Presumptive Eligibility can give you same-day temporary coverage when you walk into a participating clinic.",
    documents: {
      required: [
        "Government-issued photo ID — driver's license, state ID card, or passport. If you have none, a birth certificate plus a second document (utility bill, bank statement) can substitute.",
        "Proof of California residency — a utility bill, lease or rental agreement, bank statement, or a dated letter from a shelter or someone you're staying with, all showing a California address.",
        "Social Security Number (SSN) — your Social Security card, a W-2, or a pay stub showing your full SSN. If you don't have an SSN, you can still apply; SSN is not required for all eligibility categories.",
        "Proof of current income — last two pay stubs, your most recent W-2, or a letter from your employer showing your wage. If self-employed, a profit and loss statement or bank records work. If you have no income, a signed self-declaration is accepted.",
      ],
      helpful: [
        "Immigration documents (green card, visa, Employment Authorization Document) if you have them and are not a U.S. citizen — speeds up verification.",
        "Birth certificates for any children in your household you are applying for.",
        "Any existing health insurance cards — Medi-Cal coordinates with other coverage.",
      ],
      notes:
        "You can start your BenefitsCal application without every document. Submit what you have and you will be given time to provide the rest. Do not wait to apply just because you don't have everything ready.",
    },
    howToApply: {
      steps: [
        "Go to BenefitsCal.com and create a free account, or start a guest application — no account is required to begin.",
        "Select 'Medi-Cal' when asked which programs you're applying for.",
        "Complete the online application (about 20–30 minutes). You can save your progress and return.",
        "Upload or mail any required documents BenefitsCal requests after submission.",
        "Watch for a letter from your county with your eligibility decision — typically within 45 days.",
        "Once approved, you will receive a Medi-Cal ID card and information about choosing a managed care health plan in your county.",
      ],
      phone: "BenefitsCal help line: 1-877-847-3663 (Monday–Friday)",
      timeframe:
        "Up to 45 days for a decision. Emergency or presumptive coverage can start the same day at a participating provider.",
    },
    goodToKnow: [
      "You cannot be denied Medi-Cal for not having a permanent home address. A shelter address, a friend's address, or a statement that you are in California and intend to stay is enough.",
      "Medi-Cal is retroactive — if you are approved, your coverage can go back to the first day of the month you applied, so your existing bills from that period may be covered.",
      "Applying for Medi-Cal does NOT negatively affect your immigration case for the vast majority of applicants. Emergency Medi-Cal and programs for children are completely excluded from public charge rules.",
    ],
  },

  // ── Covered California — subsidies available ───────────────────────────────

  "covered-ca-subsidy": {
    longDescription:
      "Covered California is California's health insurance marketplace where you can compare and enroll in private health plans from major insurers. If your income is between 138% and 400% of the federal poverty level ($22,025–$63,840 for a single adult in 2026), you are likely eligible for federal Premium Tax Credits that lower your monthly premium. California state subsidies are also available for incomes up to 165% FPL (approximately $26,300 for one person). Plans are grouped into metal tiers — Bronze, Silver, Gold, and Platinum — with different premium and out-of-pocket cost tradeoffs. Lower income levels qualify for Silver plans with enhanced Cost-Sharing Reductions that dramatically lower deductibles and copays. Important for 2026: the enhanced IRA/ARPA subsidies that were in place 2021–2025 have expired, so premiums are higher on average than in recent years. Use the Shop and Compare tool before enrolling to see your actual estimated monthly cost with subsidies applied.",
    documents: {
      required: [
        "Government-issued photo ID for each person applying — driver's license, state ID, or passport.",
        "Social Security Number for each household member applying. Members who are not applying (e.g., undocumented household members) do not need to provide an SSN.",
        "Proof of California residency — utility bill, bank statement, lease agreement, or government mail with your name and address.",
        "Proof of household income — your most recent federal tax return (Form 1040) is ideal. Also acceptable: recent W-2 and 1099 forms, last 2 pay stubs, or a letter from your employer on company letterhead. If self-employed: recent profit/loss records or Schedule C from your tax return.",
      ],
      helpful: [
        "Information about any employer health coverage currently offered to you — Covered California needs to know if affordable employer coverage is available, which affects subsidy eligibility.",
        "Immigration documents for non-citizens (green card, visa, Employment Authorization Document) — needed to confirm lawful presence.",
        "Current health insurance information if you are ending another plan.",
      ],
      notes:
        "Covered California typically verifies income electronically using IRS data. Documents are only requested if there is a discrepancy. You have 90 days after enrollment to submit any requested documents.",
    },
    howToApply: {
      steps: [
        "Go to CoveredCA.com and click 'Apply Now,' or call 1-800-300-1506 to apply by phone.",
        "Create a Covered California account to save your application.",
        "Enter your household information and income. The system will automatically calculate your estimated subsidies.",
        "Use the Shop and Compare tool to browse plans and see your subsidized monthly premium before you commit.",
        "Select a plan and complete enrollment. Note your effective date — coverage usually starts the first of the following month.",
        "Pay your first monthly premium directly to the insurance company to activate coverage.",
      ],
      phone: "Covered California: 1-800-300-1506 (Spanish available). Free certified enrollment counselors: find one at CoveredCA.com.",
      timeframe:
        "Open enrollment: November 1 – January 31 each year. Outside open enrollment, you need a qualifying life event for a 60-day Special Enrollment Period. Coverage starts the 1st of the month after enrollment.",
    },
    goodToKnow: [
      "If Covered California determines your income qualifies for Medi-Cal, it will automatically route your application to Medi-Cal — you don't have to start over.",
      "If your income is between $20,000 and $22,025 (near the Medi-Cal cutoff), you may actually qualify for free Medi-Cal instead of Covered CA. Apply at BenefitsCal.com to check — Medi-Cal is $0 premium vs. a monthly payment.",
      "Free certified enrollment counselors (also called Navigators) can help you compare plans and enroll at no charge to you. Find one at CoveredCA.com or call the main line.",
      "Cost-Sharing Reductions (CSR) are only available on Silver plans — if your income is between 138% and 250% FPL, choose a Silver plan to get dramatically lower deductibles and copays.",
    ],
  },

  // ── Covered California — above subsidy cliff ───────────────────────────────

  "covered-ca-cliff": {
    longDescription:
      "Covered California marketplace plans are available to all Californians regardless of income, but federal Premium Tax Credits end at 400% of the federal poverty level — approximately $63,840 per year for a single adult in 2026. Larger households qualify at higher incomes because the poverty level scales with family size (e.g., a family of 4 can earn up to about $131,000 before hitting the 400% FPL limit). Above this threshold, you pay the full unsubsidized premium directly. Unsubsidized Covered California plans can still be competitive with employer or individual market plans because of California's consumer protections and the breadth of the statewide network. Use the Shop and Compare tool to compare unsubsidized costs across plans and tiers before deciding whether a marketplace plan, an employer plan, or a private plan makes the most sense for your household.",
    documents: {
      required: [
        "Government-issued photo ID for each person applying.",
        "Social Security Number for each household member applying.",
        "Proof of California residency — utility bill, bank statement, lease, or government mail.",
        "Proof of household income — tax return (Form 1040), W-2s and 1099s, or recent pay stubs. At this income level, income verification is still required to confirm subsidy ineligibility.",
      ],
      helpful: [
        "Information about any employer-sponsored health coverage available to you.",
        "Current health insurance policy information if you are switching plans.",
      ],
      notes:
        "Even without subsidies, you can still apply through Covered California or directly through any California-licensed insurer. Covered California offers guaranteed coverage — insurers cannot deny you based on a pre-existing condition.",
    },
    howToApply: {
      steps: [
        "Go to CoveredCA.com/shop-and-compare to browse plans and their full unsubsidized costs by county and age.",
        "Apply directly at CoveredCA.com or call 1-800-300-1506 to confirm your subsidy status before enrolling.",
        "Alternatively, contact a licensed health insurance broker — many specialize in Covered California plans at no extra cost to you.",
        "Compare Covered California's unsubsidized plans against your employer's plan (if available) using the same out-of-pocket cost framework.",
        "Select your plan and pay the first premium to activate coverage.",
      ],
      phone: "Covered California: 1-800-300-1506. Free licensed brokers: find one at CoveredCA.com.",
      timeframe: "Open enrollment: November 1 – January 31. Special enrollment with a qualifying event: 60 days.",
    },
    goodToKnow: [
      "Families may still qualify for subsidies at much higher incomes than a single adult, because 400% FPL scales up with household size.",
      "The subsidy cliff is a hard cutoff — earning $1 over 400% FPL eliminates all federal subsidies. If your income fluctuates near this threshold, talk to a certified enrollment counselor about how to handle that.",
      "Children in households that earn above the adult Medi-Cal limit may still qualify for Medi-Cal or CHIP at much higher income thresholds. Apply for children separately at BenefitsCal.com.",
    ],
  },

  // ── Age: Kids and Teens ────────────────────────────────────────────────────

  "age-kids": {
    longDescription:
      "California provides comprehensive health coverage for children and teenagers through Medi-Cal and the Children's Health Insurance Program (CHIP). Children qualify at much higher income levels than adults — a family of 4 earning up to approximately $78,000 per year may still qualify their children for free or low-cost coverage. Coverage is comprehensive: well-child visits, immunizations, dental, vision, mental health, specialty care, and prescriptions. Most importantly, children can be enrolled regardless of immigration status — the child's citizenship or documentation status does not matter. Newborns born to a Medi-Cal parent are automatically enrolled for their first year. If a child does not qualify for Medi-Cal, they may qualify for the County Children's Health Initiative Program (C-CHIP) in select counties, or for a subsidized Covered California family plan.",
    documents: {
      required: [
        "Child's birth certificate or proof of age (hospital discharge record, baptismal record, or school record are also accepted).",
        "Parent or guardian's government-issued photo ID.",
        "Proof of California residency for the household — utility bill, lease, bank statement, or government mail.",
        "Proof of household income — last two pay stubs, most recent W-2, or employer letter. If self-employed, a profit/loss statement.",
      ],
      helpful: [
        "Child's Social Security Number if the child has one (not required for undocumented children).",
        "Legal guardianship documents if the applicant is not the child's parent (court order, power of attorney).",
        "Any existing health insurance cards for the child.",
      ],
      notes:
        "You can apply for your child without providing the child's SSN if the child doesn't have one. Coverage cannot be denied based on the child's immigration status.",
    },
    howToApply: {
      steps: [
        "Apply online at BenefitsCal.com — select Medi-Cal and include all children in your household on the application.",
        "Or apply through CoveredCA.com — if a child qualifies for Medi-Cal, the system will automatically route them there.",
        "Or call 1-877-847-3663 to apply by phone.",
        "Once approved, your child will receive a Medi-Cal ID card and information about choosing a managed care plan.",
        "For dental: enroll your child with a Denti-Cal provider. For vision: contact your child's managed care plan.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe: "Applications processed within 45 days. Children may qualify for immediate Presumptive Eligibility at a participating clinic.",
    },
    goodToKnow: [
      "Children who are enrolled in Medi-Cal automatically receive dental coverage through Denti-Cal — make sure to find a Denti-Cal dentist near you.",
      "Foster youth are covered by Medi-Cal through age 26, regardless of income or any other factor.",
      "If your child is enrolled in Medi-Cal, you may also qualify for CalFresh food benefits. Ask about it when you apply.",
    ],
  },

  // ── Age: Young Adults ──────────────────────────────────────────────────────

  "age-young-adults": {
    longDescription:
      "Young adults ages 18–29 have several coverage options in California depending on income, situation, and immigration status. If your income is at or below $22,025 per year (single person, 2026), you likely qualify for free Medi-Cal. If you earn more, Covered California plans with subsidies may be available. If you are a student, check whether your school offers a student health plan — some UC and CSU plans are competitive with marketplace options. If you are on a parent's plan and turning 26, you have a 60-day Special Enrollment Period with Covered California or Medi-Cal after aging off. Former foster youth are covered by Medi-Cal through age 26 regardless of income. Undocumented young adults who are not already enrolled in Medi-Cal should note the January 2026 enrollment freeze for new applicants — seek guidance from a certified enrollment counselor.",
    documents: {
      required: [
        "Government-issued photo ID — driver's license, state ID, or passport. If you just turned 18 and don't have one yet, a birth certificate plus one additional document works.",
        "Social Security Number — your Social Security card, a W-2, or a pay stub showing your full SSN.",
        "Proof of California residency — utility bill, lease, bank statement, dorm assignment letter, or a dated letter from someone you live with.",
        "Proof of income — pay stubs, W-2, tax return, employer letter, financial aid award letter (for students), or a self-signed statement if you have no income.",
      ],
      helpful: [
        "Student enrollment verification or financial aid documents if you are a college student.",
        "Documentation of aging off a parent's plan (required for Covered CA Special Enrollment Period after turning 26).",
        "Immigration documents if you are not a U.S. citizen.",
      ],
      notes:
        "If you have no income or are between jobs, you still qualify for Medi-Cal — a self-signed statement of no income is accepted at BenefitsCal.",
    },
    howToApply: {
      steps: [
        "Check your income first: at or below $22,025/year → apply for Medi-Cal at BenefitsCal.com. Above that → compare Covered California plans.",
        "For Medi-Cal: go to BenefitsCal.com or call 1-877-847-3663.",
        "For Covered California: go to CoveredCA.com or call 1-800-300-1506.",
        "If you are a student: check your school's student health insurance plan and compare it against Medi-Cal or Covered CA costs before choosing.",
        "If you are aging off a parent's plan at 26: act within 60 days of your birthday — that is your Special Enrollment Period window.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe: "Medi-Cal: up to 45 days. Covered CA: coverage starts first of the month after enrollment.",
    },
    goodToKnow: [
      "Former foster youth qualify for Medi-Cal through age 26 with no income or documentation requirement — if this applies to you, apply immediately.",
      "Gig workers, freelancers, and self-employed young adults qualify for the same programs — gig income counts as earned income for both Medi-Cal and Covered CA calculations.",
      "If you are between jobs or just graduated, apply for Medi-Cal right away — you can switch to Covered CA or employer coverage later without penalty.",
    ],
  },

  // ── Age: Adults (30–64) ────────────────────────────────────────────────────

  "age-adults": {
    longDescription:
      "California adults ages 30–64 have the widest range of coverage options. Medi-Cal is free for those earning up to $22,025 per year (single adult, 2026); a family of 4 qualifies at up to about $55,500. Covered California marketplace plans with federal Premium Tax Credits are available for incomes up to $63,840 (single adult, 400% FPL). Adults who lost employer coverage have a 60-day Special Enrollment Period at Covered California. Self-employed and gig workers can use Covered California and deduct premiums. Adults with disabilities may qualify for Medi-Cal at higher income levels through specific disability pathways. Adults who are undocumented should note the January 2026 enrollment freeze — new undocumented adults 19+ can no longer enroll in full-scope Medi-Cal.",
    documents: {
      required: [
        "Government-issued photo ID — driver's license, California state ID, or passport.",
        "Social Security Number — card, W-2, or pay stub with full SSN.",
        "Proof of California residency — utility bill, bank statement, lease agreement, or government mail with your name and California address.",
        "Proof of income — last two pay stubs, most recent W-2 or 1099, or tax return. If self-employed: profit/loss statement or Schedule C. If no income: a self-signed statement.",
      ],
      helpful: [
        "Immigration documents if you are not a U.S. citizen.",
        "Employer letter if you are offered job-based insurance (needed to determine Covered CA subsidy eligibility).",
        "Medical records or disability documentation if you believe you qualify through a disability pathway.",
      ],
      notes:
        "You can apply for Medi-Cal without all documents. Start at BenefitsCal.com and submit what you have — you'll be given time to provide the rest.",
    },
    howToApply: {
      steps: [
        "If income is at or below $22,025/year: apply for Medi-Cal at BenefitsCal.com.",
        "If income is above that: go to CoveredCA.com to compare plans with subsidies.",
        "If you recently lost a job: apply for Medi-Cal first (income may have dropped below the threshold), or enroll in Covered CA within your 60-day Special Enrollment Period.",
        "If self-employed: report your net business income (after deductions) — this may be significantly lower than gross revenue.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506.",
      timeframe: "Medi-Cal: up to 45 days. Covered CA: first of the month after enrollment.",
    },
    goodToKnow: [
      "If you are denied Medi-Cal, you have the right to appeal (State Fair Hearing) within 90 days. Many people who were incorrectly denied win on appeal.",
      "Adult Medi-Cal dental coverage (Denti-Cal) is available to enrolled adults — it includes exams, cleanings, fillings, extractions, and dentures.",
      "If you and your spouse have different income levels, each of you may qualify for different programs. Apply together and the system will determine the best program for each person.",
    ],
  },

  // ── Age: Seniors (65+) ────────────────────────────────────────────────────

  "age-seniors": {
    longDescription:
      "Most people become eligible for Medicare at age 65. Medicare is federal health insurance administered by the Social Security Administration (SSA). Part A covers hospital stays (most people pay no premium for Part A). Part B covers doctor visits and outpatient care (monthly premium in 2026 is $185). Part D covers prescription drugs (separate plan with its own monthly premium). Many California seniors also qualify for Medi-Cal on top of Medicare — this is called being 'dual eligible.' Medi-Cal can pay for Medicare premiums, deductibles, and copays, making coverage effectively free. HICAP (Health Insurance Counseling and Advocacy Program) offers free one-on-one Medicare counseling to all California residents.",
    documents: {
      required: [
        "Birth certificate or proof of age — passport, hospital birth record, or religious record of birth. If you were born outside the U.S., a naturalization certificate or permanent resident card works.",
        "Social Security card or proof of Social Security Number.",
        "Proof of U.S. citizenship or lawful presence — birth certificate, U.S. passport, naturalization certificate, or green card.",
        "If applying for Medicare Savings Programs (to help pay Medicare costs): proof of income (Social Security award letter, pay stubs, bank statements) and proof of resources.",
      ],
      helpful: [
        "Medicare card (if you already have Part A and are adding Part B).",
        "Current employer health insurance information (if you have employer coverage and want to delay Part B without penalty).",
        "Any VA benefits information if you are a veteran.",
      ],
      notes:
        "If you are already receiving Social Security retirement benefits when you turn 65, you will be automatically enrolled in Medicare Parts A and B — your Medicare card will arrive in the mail. You only need to actively apply if you are NOT already receiving Social Security.",
    },
    howToApply: {
      steps: [
        "For Medicare: apply at SSA.gov, call 1-800-772-1213, or visit your local Social Security office. Apply during your 7-month Initial Enrollment Period (starts 3 months before your 65th birthday).",
        "For Medicare Savings Programs and/or Medi-Cal: apply at BenefitsCal.com or call 1-877-847-3663 — these programs can cover your Medicare premiums and cost-sharing.",
        "For free Medicare counseling: call HICAP at 1-800-434-0222 or find a local counselor at aging.ca.gov/HICAP.",
        "For prescription drug coverage (Part D): enroll in a Medicare drug plan at Medicare.gov/plan-compare during your Initial Enrollment Period.",
      ],
      phone: "SSA/Medicare: 1-800-772-1213. HICAP (free counseling): 1-800-434-0222. BenefitsCal: 1-877-847-3663.",
      timeframe:
        "Apply during the 7-month Initial Enrollment Period around your 65th birthday. Late enrollment may result in permanent premium penalties for Part B and Part D.",
    },
    goodToKnow: [
      "Missing your Medicare Initial Enrollment Period can result in a permanent late-enrollment penalty added to your Part B premium for the rest of your life. Don't wait.",
      "If you have Medi-Cal and Medicare, Medi-Cal may pay your Part B premium ($185/month in 2026) through Medicare Savings Programs — apply even if you think you earn too much.",
      "HICAP counselors are free, unbiased, and available in every California county. They can compare Medicare Advantage vs. Original Medicare for your specific health needs.",
      "Extra Help / Low Income Subsidy (LIS) for drug costs is automatic if you have both Medi-Cal and Medicare. Copays are capped at $12.65 (brand-name) and $5.10 (generic) in 2026.",
    ],
  },

  // ── Pregnancy and New Parent Help ─────────────────────────────────────────

  "pregnancy": {
    longDescription:
      "California offers pregnancy-specific Medi-Cal coverage with a much higher income limit than standard adult Medi-Cal — up to 213% of the federal poverty level, or approximately $34,000 per year for one person in 2026. Coverage includes all prenatal care, lab work, ultrasounds, labor and delivery, and 12 months of postpartum care. It is available to pregnant people regardless of immigration status. Presumptive Eligibility for Pregnant People (PE4PP) allows a participating provider to enroll you in immediate temporary Medi-Cal on your first prenatal visit — before your full application is even processed. WIC (Women, Infants, and Children) provides free food benefits, nutrition counseling, and breastfeeding support for pregnant and postpartum people and children under 5. Newborns born to Medi-Cal parents are automatically enrolled for their first year — report the birth to your plan quickly.",
    documents: {
      required: [
        "Proof of pregnancy — a positive pregnancy test result, a letter from a doctor or midwife, a prenatal care record, or a hospital confirmation. If you don't have documentation yet, a self-statement is often accepted to start the process.",
        "Any form of photo ID — driver's license, state ID, passport, or a Matricula Consular. Requirements are flexible for pregnancy coverage.",
        "Proof of California residency — utility bill, lease, bank statement, or a signed letter from someone you live with.",
        "Proof of income — pay stubs, a W-2, employer letter, or a self-signed statement. The income limit for pregnancy Medi-Cal is higher than standard Medi-Cal, so many middle-income people qualify.",
      ],
      helpful: [
        "Expected due date — helps the county prioritize and fast-track your application.",
        "Social Security Number if you have one (not required for pregnancy Medi-Cal — immigration status does not affect eligibility).",
      ],
      notes:
        "Immigration status does NOT affect eligibility for pregnancy Medi-Cal or WIC. You do not need an SSN to apply. County offices are required to process pregnancy applications on an expedited basis.",
    },
    howToApply: {
      steps: [
        "Go to BenefitsCal.com and apply for Medi-Cal — indicate that you are pregnant. This flags your application for expedited processing.",
        "OR: Walk into any participating prenatal clinic, OB-GYN office, or FQHC and ask about Presumptive Eligibility. A trained provider can enroll you in temporary Medi-Cal the same day.",
        "For WIC: Call 1-888-942-9675 or visit your county WIC office. You can apply at any point during pregnancy and up to 6 months after birth.",
        "Once full Medi-Cal is approved, select a managed care plan that includes OB-GYN and prenatal services.",
        "After your baby is born: report the birth to your Medi-Cal managed care plan within 30 days so the newborn is enrolled automatically.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. WIC: 1-888-942-9675. Covered California: 1-800-300-1506.",
      timeframe:
        "Presumptive Eligibility can start the same day at a participating clinic. Full Medi-Cal approval within 45 days; pregnancy applications are usually prioritized.",
    },
    goodToKnow: [
      "You can access WIC regardless of your Medi-Cal or immigration status. WIC provides monthly food benefits and nutrition support for up to 5 years for your child.",
      "Postpartum Medi-Cal now covers 12 full months after delivery in California — you don't lose coverage the day after birth.",
      "Family PACT provides free birth control and family planning services for people not currently pregnant, including all forms of contraception, at no cost regardless of income.",
      "If you give birth and your income later makes you ineligible for Medi-Cal, your baby can still stay enrolled in Medi-Cal for the first year regardless.",
    ],
  },

  // ── Disability and Chronic Condition Support ───────────────────────────────

  "disability": {
    longDescription:
      "California has multiple overlapping programs for people with disabilities. Medi-Cal can be available at higher income levels through disability-specific pathways, including the Working Disabled Program for people who work and earn too much for standard Medi-Cal. IHSS (In-Home Supportive Services) is a Medi-Cal benefit that funds a paid caregiver — which can be a family member — to assist with daily tasks like cooking, cleaning, bathing, medication management, and mobility. SSI (Supplemental Security Income) provides a monthly cash payment to low-income people with a qualifying disability, and automatically enrolls recipients in Medi-Cal in California. Regional Centers serve people with developmental disabilities (autism, Down syndrome, cerebral palsy, and similar conditions) with services, housing support, and care coordination.",
    documents: {
      required: [
        "For Medi-Cal: standard Medi-Cal documents — photo ID, proof of California residency, proof of income, and Social Security Number.",
        "Medical documentation of your disability — a letter from a licensed physician, psychiatrist, or other treating provider describing your diagnosis, functional limitations, and need for care. This is essential for disability-specific Medi-Cal pathways and IHSS.",
        "For IHSS specifically: SOC 873 form (Health Care Certification) — this form must be completed and signed by a licensed medical professional within 45 days of your IHSS application.",
        "For SSI: birth certificate or proof of age, Social Security card, medical records documenting the disability, and financial records (income and assets).",
      ],
      helpful: [
        "Work history records (for SSI disability determination — the SSA reviews your work history as part of the process).",
        "All medical records related to your condition: doctor notes, test results, hospitalization records, therapy notes.",
        "Proof of housing situation (lease, mortgage statement) — relevant for IHSS home-based care eligibility.",
      ],
      notes:
        "You must be enrolled in Medi-Cal before you can apply for IHSS. Apply for Medi-Cal first at BenefitsCal.com, then contact your county IHSS office. SSI and IHSS are separate applications.",
    },
    howToApply: {
      steps: [
        "Step 1 — Apply for Medi-Cal at BenefitsCal.com. Indicate your disability so the county can evaluate disability-specific pathways.",
        "Step 2 — For IHSS: once you have Medi-Cal, contact your county IHSS office (find it at cdss.ca.gov/IHSS) or call your county social services office and ask to start an IHSS application. A social worker will visit your home to assess your needs.",
        "Step 3 — For SSI: apply at SSA.gov, call 1-800-772-1213, or visit your local Social Security office. SSI approvals can take 3–6 months; a decision may be expedited if your condition is severe.",
        "For Regional Center services: contact your regional center at dds.ca.gov/rc or call the DDS at 1-916-654-1897.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. SSA/SSI: 1-800-772-1213. IHSS Info: 1-916-654-2240. DDS Regional Centers: 1-916-654-1897.",
      timeframe:
        "Medi-Cal: up to 45 days. IHSS assessment: 30–45 days after application. SSI: 3–6 months (can be faster for terminal or severe conditions).",
    },
    goodToKnow: [
      "The IHSS caregiver can be a family member — including a spouse in some situations. The family member is paid directly by the state at the county wage rate.",
      "The Working Disabled Program allows people with disabilities to keep their Medi-Cal even when their wages would normally disqualify them — it charges a small monthly premium based on income.",
      "If your SSI application is denied, appeal within 60 days. The majority of successful SSI claims go through at least one appeal. Consider requesting a hearing.",
      "Medi-Cal covers behavioral health services including therapy, psychiatry, and substance use treatment under the same enrollment — no separate application needed for mental health.",
    ],
  },

  // ── Undocumented and Mixed-Status Help ────────────────────────────────────

  "immigration": {
    longDescription:
      "California's Medi-Cal landscape changed significantly on January 1, 2026. New undocumented adults ages 19 and older who were not enrolled in full-scope Medi-Cal before that date can no longer enroll in full-scope coverage. They can still access Emergency Medi-Cal, which covers emergency hospital care, labor and delivery, emergency kidney dialysis, and similar acute services. Pregnant people of any immigration status are still fully covered for prenatal care, labor and delivery, and 12 months of postpartum care. Children under age 19 are still fully covered regardless of any immigration status. People who were already enrolled in Medi-Cal before January 1, 2026 can keep their coverage as long as they renew on time. Mixed-status families — where some members are citizens or legal residents and others are not — should apply for each eligible member separately. The ineligible member's presence in the household does not disqualify eligible members.",
    documents: {
      required: [
        "For Emergency Medi-Cal: No documents are required to receive emergency care at any hospital. Emergency rooms cannot turn you away for lacking documentation.",
        "For children (under 19): the child's birth certificate or proof of age; proof of California residency; household income documentation. No documentation of immigration status is needed for the child.",
        "For pregnant people: proof of pregnancy (any prenatal record, positive test, or doctor's letter); California residency; income information. No immigration documents required.",
        "For mixed-status households applying for eligible members: standard Medi-Cal documents for the eligible members only — ID, residency, income. Undocumented household members do not need to provide any documentation.",
      ],
      helpful: [
        "Any immigration documents you do have (green card, visa, Employment Authorization Document, DACA approval, etc.) — these can expand eligibility options.",
        "If you are currently enrolled in Medi-Cal, your renewal notice and current Medi-Cal member ID.",
      ],
      notes:
        "Applying for Medi-Cal for eligible family members does NOT put undocumented household members at immigration risk. Emergency Medi-Cal and programs for children and pregnant people are excluded from public charge rules. For guidance on your specific situation, contact a legal aid organization.",
    },
    howToApply: {
      steps: [
        "For children and pregnant people: apply at BenefitsCal.com — indicate the child's or pregnant person's information; undocumented household members can be excluded from the application.",
        "For Emergency Medi-Cal: go to any emergency room in California. Hospitals will file for Emergency Medi-Cal on your behalf after treatment.",
        "For people currently enrolled in Medi-Cal: complete your annual renewal when you receive the notice — do not ignore it. Keep your address updated so you receive the renewal letter.",
        "For legal guidance: contact a legal aid organization such as Bay Area Legal Aid, Bet Tzedek, or CHIRLA. Call 2-1-1 for a local referral.",
      ],
      phone: "BenefitsCal: 1-877-847-3663 (Spanish available). Health Consumer Alliance: 1-888-804-3536. CHIRLA: 1-888-624-4752.",
      timeframe: "Emergency care: immediate. Children and pregnancy applications: standard 45-day Medi-Cal processing.",
    },
    goodToKnow: [
      "The January 2026 enrollment freeze affects NEW applicants only. Anyone already enrolled before January 1, 2026 can keep their coverage.",
      "Starting July 1, 2026, dental benefits for currently enrolled undocumented adults will transition to emergency-only care.",
      "Starting July 1, 2027, a $30/month premium will be required for full-scope coverage for certain undocumented members who are already enrolled.",
      "If you are renewing existing Medi-Cal, renewing on time is critical — losing coverage and reapplying is no longer an option under the 2026 rules.",
    ],
  },

  // ── Veteran Coverage Help ──────────────────────────────────────────────────

  "veteran": {
    longDescription:
      "Veterans who served in the U.S. military may be eligible for VA health care through the Department of Veterans Affairs, regardless of whether they have a service-connected disability. VA health care covers primary care, specialty care, mental health services (including PTSD and substance use treatment), prescription drugs, and hospital care. Veterans are assigned a Priority Group (1–8) based on service history, disability rating, and income — Priority Groups 1–6 generally receive care at no cost. Veterans with a service-connected disability rating of 50% or more receive free care for all conditions. VA health care can work alongside Medi-Cal and Medicare — having VA benefits does not disqualify you from other programs. CalVet provides California-specific veteran services including financial assistance, housing support, and education benefits.",
    documents: {
      required: [
        "DD-214 (Certificate of Release or Discharge from Active Duty) — the single most important document. If you've lost yours, request a replacement at mil.connect.osd.mil (formerly eBenefits) or call the National Archives at 1-314-801-0800.",
        "Social Security card or proof of Social Security Number.",
        "Government-issued photo ID — driver's license, state ID, or military ID.",
        "Financial information for the previous year — income from all sources, to determine your Priority Group and any copay requirements.",
      ],
      helpful: [
        "Medical records documenting any service-connected conditions or injuries — letters from treating providers, military medical records.",
        "Insurance cards for any other coverage you have (Medicare, Medi-Cal, private insurance) — VA coordinates with other payers.",
        "Marriage certificate if you are applying for benefits that include dependents.",
      ],
      notes:
        "If you do not have your DD-214, you can still initiate enrollment. The VA will help you request your records. Do not let a missing DD-214 stop you from starting the process.",
    },
    howToApply: {
      steps: [
        "Apply online at VA.gov/health-care/apply — complete VA Form 10-10EZ. This typically takes about 30 minutes.",
        "Or call 1-800-827-1000 (Monday–Friday, 8 a.m. – 9 p.m. ET) to apply by phone.",
        "Or visit your nearest VA medical center or community-based outpatient clinic (CBOC) and apply in person.",
        "For California-specific help: call CalVet at 1-844-CAL-VETS (1-844-225-8387).",
        "After applying, you will receive a Priority Group assignment and information about your local VA facility.",
      ],
      phone: "VA: 1-800-827-1000. CalVet: 1-844-CAL-VETS. National Archives (DD-214): 1-314-801-0800.",
      timeframe:
        "Most applications are processed within 1 week if all documents are provided. Priority Group 1 (100% service-connected) applications are processed fastest.",
    },
    goodToKnow: [
      "Even if you received a less-than-honorable discharge, you may still qualify for certain VA benefits — eligibility is determined case by case. Don't assume you're disqualified without checking.",
      "VA mental health services are available to all veterans who served on active duty, even those with less than 2 years of service, for up to 5 years after discharge, at no cost.",
      "Veterans can receive both VA health care AND Medi-Cal or Medicare — having one does not affect your right to the others. They can cover different services or share costs.",
      "CalVet Home Loans, CalVet College Fee Waiver, and other California benefits are separate from VA health care — ask CalVet about the full range of state benefits you may be entitled to.",
    ],
  },

  // ── Housing Instability and Health Support ────────────────────────────────

  "homelessness": {
    longDescription:
      "California law explicitly states that a person experiencing homelessness is a state resident if they are present in California and intend to remain — you do not need a home address to qualify for Medi-Cal. You can use a shelter address, a P.O. box, a social service agency address, a friend's address, or a self-declaration of your situation. Medi-Cal membership opens access to CalAIM (California Advancing and Innovating Medi-Cal), which provides Enhanced Care Management for people with complex health needs — including care coordination, housing navigation assistance, recuperative care after hospitalization, and connection to community resources. Community health workers and enrollment assistors in every California county are experienced with helping unhoused individuals apply.",
    documents: {
      required: [
        "Identity — any form of ID works: driver's license, state ID, passport, Matricula Consular, birth certificate, or a tribal enrollment card. If you have no ID, a county social worker or community health worker can help you obtain a California ID for free.",
        "Proof of California residency (minimal requirement) — a signed letter from a shelter, transitional housing program, or nonprofit; a letter from someone you are staying with; OR a written self-declaration that you are currently in California and intend to stay.",
        "Social Security Number if you have it — your card, a W-2, or any document showing your full SSN. Not required if you don't have one.",
        "Proof of income — pay stubs, benefit award letters, or a signed self-declaration that you have no income. There is no requirement to prove income if you have none.",
      ],
      helpful: [
        "Any medical records you can access — prior hospital records, prescriptions, or a letter from a doctor. These help establish continuity of care.",
        "Referral letter from a shelter, outreach worker, or case manager — can speed up the application process.",
      ],
      notes:
        "You cannot be denied Medi-Cal because you lack a permanent address. If a county worker tells you otherwise, ask to speak to a supervisor and contact the Health Consumer Alliance at 1-888-804-3536.",
    },
    howToApply: {
      steps: [
        "The easiest entry point is through an outreach worker, community health worker, or shelter staff member — they can help you apply on-site.",
        "Apply online at BenefitsCal.com. Under address, enter a shelter address, case manager's address, or a friend's address.",
        "Or walk into your county Department of Social Services office — they are required to accept your application and help you through the process.",
        "For immediate help locating services and enrollment assistors: call 2-1-1 or text your zip code to 898-211.",
        "Once enrolled in Medi-Cal, ask your plan about Enhanced Care Management (ECM) services — these are specifically designed for people with housing instability.",
      ],
      phone: "2-1-1 (local referrals, available 24/7). BenefitsCal: 1-877-847-3663. Health Consumer Alliance: 1-888-804-3536.",
      timeframe: "Standard Medi-Cal processing: up to 45 days. Many outreach programs can help expedite or access presumptive eligibility.",
    },
    goodToKnow: [
      "CalAIM provides housing navigation services, connection to shelters and transitional housing, and recovery support — all through your Medi-Cal managed care plan. Ask your plan about these services explicitly.",
      "Recuperative care (also called 'medical respite') lets you recover from a hospital stay in a safe, supervised setting instead of returning to the street — ask your hospital social worker about this before discharge.",
      "If you are receiving Medi-Cal, you may also qualify for CalFresh food benefits. These can be added to your existing Medi-Cal case — call BenefitsCal or visit your county office.",
      "Getting a California state ID is free if you are experiencing homelessness — ask a social worker or visit your local DMV with proof of California residency (a letter from a shelter works).",
    ],
  },

  // ── Mental Health Support ─────────────────────────────────────────────────

  "mental-health": {
    longDescription:
      "Mental health care is covered under Medi-Cal — no separate insurance or application is needed if you are already enrolled. Medi-Cal behavioral health covers individual and group therapy, psychiatric services, crisis intervention, substance use treatment, and medication. The 988 Suicide and Crisis Lifeline is free, available 24/7 to anyone, and requires no insurance, no appointment, and no identifying information. For non-emergency mental health care without insurance, Federally Qualified Health Centers (FQHCs) provide sliding-scale mental health services based on ability to pay. University training clinics often provide low-cost therapy. The California Department of Mental Health funds county mental health departments in every county — they are required to serve people regardless of insurance status for crisis situations.",
    documents: {
      required: [
        "For the 988 Lifeline: no documents needed whatsoever. Just call or text 988.",
        "For Medi-Cal behavioral health services: you only need your Medi-Cal enrollment. If you don't have Medi-Cal yet, apply at BenefitsCal.com (standard Medi-Cal documents: photo ID, proof of residency, income, and SSN).",
        "For county mental health services: a referral from your Medi-Cal managed care plan, or you can contact your county mental health department directly — they conduct an eligibility determination.",
      ],
      helpful: [
        "Any prior mental health records or diagnoses — helps your provider understand your history and qualify you for specific services faster.",
        "Medication list if you are currently taking any psychiatric medications.",
      ],
      notes:
        "You cannot be required to show immigration documents to access emergency mental health services or the 988 Lifeline. Crisis care is available to everyone.",
    },
    howToApply: {
      steps: [
        "For a mental health crisis right now: call or text 988. Available 24/7 in English and Spanish.",
        "For ongoing Medi-Cal mental health coverage: enroll in Medi-Cal at BenefitsCal.com if you haven't already, then contact your Medi-Cal managed care plan to request a behavioral health provider.",
        "For county mental health services: look up '[your county] behavioral health' to find your county mental health department — they accept Medi-Cal and often serve uninsured clients in crisis.",
        "For low-cost therapy without insurance: search for FQHCs at findahealthcenter.hrsa.gov, which offer sliding-scale fees.",
      ],
      phone: "988 (call or text, 24/7). BenefitsCal: 1-877-847-3663. NAMI California helpline: 1-800-950-6264.",
      timeframe: "988: immediate. Medi-Cal behavioral health: provider appointments vary by area; some plans have urgent appointment requirements within 48 hours for urgent needs.",
    },
    goodToKnow: [
      "Medi-Cal covers mental health services with no lifetime limit and no requirement to try cheaper options first — you have the right to appropriate care.",
      "Substance use disorder treatment is covered under Medi-Cal as a medical condition — no judgment, no barriers beyond enrollment.",
      "If your Medi-Cal managed care plan denies a mental health service, you have the right to appeal and request an independent medical review.",
      "School-based mental health services are available in many California school districts at no cost to students — ask your school counselor.",
    ],
  },

  // ── Dental and Vision Help ────────────────────────────────────────────────

  "dental-vision": {
    longDescription:
      "Medi-Cal includes dental coverage for adults through Denti-Cal, which covers preventive care (cleanings, X-rays), basic restorative care (fillings), oral surgery (extractions, including wisdom teeth), root canals, dentures, and emergency dental services. You must find a dentist who accepts Denti-Cal — not all dentists do. Vision care under Medi-Cal covers one eye exam per year and prescription eyeglasses (one pair per year). Children on Medi-Cal have comprehensive dental and vision coverage. Seniors with low income may also qualify for dental and vision through Medi-Cal or Medicare Advantage plans. Note: the July 2026 changes to Medi-Cal will affect dental coverage for certain enrollees — see the 2026 Changes note below.",
    documents: {
      required: [
        "Medi-Cal enrollment — dental and vision are included with your Medi-Cal membership. No separate application is needed.",
        "Your Medi-Cal member ID card — bring this to every dental and vision appointment.",
        "If you are not yet enrolled in Medi-Cal: photo ID, proof of California residency, Social Security Number, and proof of income. Apply at BenefitsCal.com.",
      ],
      helpful: [
        "Any prior dental records — X-rays, treatment records — which your new provider can request from a previous dentist.",
        "Any prescription for glasses from a previous eye exam (helps if you're replacing glasses quickly).",
      ],
      notes:
        "You do not need a separate application for dental or vision — they are part of Medi-Cal. Your only action is to find a provider who accepts Medi-Cal.",
    },
    howToApply: {
      steps: [
        "If not yet enrolled in Medi-Cal: apply at BenefitsCal.com first.",
        "For dental: find a Denti-Cal provider at smilecalifornia.org or call 1-800-322-6384. Or ask your county dental society for Medi-Cal-accepting dentists.",
        "For vision: contact your Medi-Cal managed care plan to confirm vision coverage and find an in-network provider. Or visit any VSP or Eyemed-participating provider that accepts Medi-Cal.",
        "Bring your Medi-Cal member ID card to every appointment. If you don't have your card yet, call your plan or BenefitsCal.",
      ],
      phone: "Denti-Cal: 1-800-322-6384. BenefitsCal: 1-877-847-3663. Your Medi-Cal managed care plan (number on your member ID card).",
      timeframe: "Immediate once enrolled in Medi-Cal. Allow time to find an accepting provider — in some counties, dental provider availability is limited.",
    },
    goodToKnow: [
      "Denti-Cal has a provider shortage in many rural and suburban areas. If you can't find a provider near you, call 1-800-322-6384 and they will help locate one.",
      "Emergency dental care (severe pain, infection) must be covered even if you can't find a regular Denti-Cal dentist — go to a dental school or emergency dental clinic.",
      "Starting July 1, 2026, dental benefits for currently enrolled undocumented adults on Medi-Cal will change to emergency-only coverage. If this may apply to you, seek dental care before that date.",
      "Children's dental care under Medi-Cal (through age 21) is more comprehensive than adult Denti-Cal — it includes orthodontics if medically necessary.",
    ],
  },

  // ── Prescription Cost Help ─────────────────────────────────────────────────

  "prescription": {
    longDescription:
      "Prescription drug costs can be dramatically reduced or eliminated through several California programs. Medi-Cal covers a broad formulary of medications with little or no copay for enrolled members. For Medicare beneficiaries, Extra Help (also called Low Income Subsidy, or LIS) is a federal program that reduces Part D drug costs — in 2026, copays are capped at $12.65 per brand-name drug and $5.10 for generics. People who have both Medi-Cal and Medicare (dual eligible) are automatically enrolled in Extra Help. Medicare Savings Programs can also pay your Part D premium entirely. For people without insurance, GoodRx, NeedyMeds, and pharmaceutical manufacturer patient assistance programs can provide significant discounts on specific drugs — these are not income-based and are available to anyone.",
    documents: {
      required: [
        "For Medi-Cal prescription coverage: only your Medi-Cal member ID. No separate application.",
        "For Medicare Extra Help/LIS (if applying separately from Medi-Cal): Social Security Number, proof of income (Social Security award letter, pay stubs, bank statements), and information about any financial resources (bank accounts, investments). Apply using SSA Form i1020.",
        "For manufacturer patient assistance programs: vary by manufacturer — typically require proof of income (recent tax return or W-2), proof of insurance status, and a letter from your prescribing doctor.",
      ],
      helpful: [
        "Your current prescription list — drug names, dosages, and prescribing provider information.",
        "Medicare Part D plan information if you have Part D (you may be overpaying if you haven't checked for Extra Help).",
      ],
      notes:
        "If you have Medi-Cal AND Medicare, you are dual eligible and automatically receive Extra Help at no additional application. GoodRx discounts can be used by anyone regardless of insurance status.",
    },
    howToApply: {
      steps: [
        "If on Medi-Cal: simply present your Medi-Cal member ID at any pharmacy that accepts Medi-Cal. Most major pharmacy chains participate.",
        "For Medicare Extra Help: apply at SSA.gov, call 1-800-772-1213, or visit a Social Security office. Dual eligible members (Medi-Cal + Medicare) are enrolled automatically.",
        "For GoodRx: go to GoodRx.com or download the app, search your medication, show the coupon at the pharmacy. No sign-up required.",
        "For manufacturer assistance programs: search '[drug name] patient assistance program' or go to NeedyMeds.org for a directory.",
        "For HICAP (Medicare counseling including Part D): call 1-800-434-0222 for free help comparing Part D plans.",
      ],
      phone: "SSA (Extra Help): 1-800-772-1213. HICAP: 1-800-434-0222. BenefitsCal: 1-877-847-3663. NeedyMeds: needymeds.org.",
      timeframe: "Medi-Cal: immediate at pharmacy. Extra Help: 3–6 weeks for SSA determination. GoodRx: immediate, no application.",
    },
    goodToKnow: [
      "If a drug is not on your Medi-Cal plan's formulary, you can request a medical exception — your doctor must document that the excluded drug is medically necessary.",
      "GoodRx is often cheaper than your insurance copay for generic drugs. Always compare — show both your insurance card and your GoodRx coupon and ask the pharmacist which is cheaper.",
      "In 2026, Medicare Part D has a $2,000 annual out-of-pocket maximum — once you reach it, your drugs are free for the rest of the year.",
      "340B pharmacies (often at FQHCs and community health centers) offer prescription drugs at dramatically reduced cost to qualifying patients.",
    ],
  },

  // ── Already on Medi-Cal ────────────────────────────────────────────────────

  "current-medi-cal": {
    longDescription:
      "If you are already enrolled in Medi-Cal, you may be missing supplemental benefits that are included in your coverage at no extra cost, or that you can add with a simple separate application. Medi-Cal dental (Denti-Cal) covers cleanings, fillings, extractions, and dentures — you just need to find a Denti-Cal dentist. Medi-Cal vision covers an annual eye exam and one pair of prescription glasses. Non-emergency medical transportation is available to Medi-Cal members who need help getting to medical appointments. If you need help with daily tasks at home due to a disability, you may qualify for IHSS (In-Home Supportive Services). CalFresh (food stamps) requires a separate application but many Medi-Cal members qualify and haven't applied. If you also have Medicare, Extra Help automatically reduces your drug costs.",
    documents: {
      required: [
        "Your current Medi-Cal member ID card — needed for all supplemental services.",
        "For IHSS: Medi-Cal enrollment (already have it), plus a completed SOC 873 (Health Care Certification) from your doctor, and your county's IHSS application.",
        "For CalFresh: your Medi-Cal information may streamline the application, but CalFresh requires its own application at BenefitsCal.com — you'll need proof of identity, residency, and income.",
      ],
      helpful: [
        "Your Medi-Cal managed care plan's member handbook — it lists all benefits included in your specific plan.",
        "A list of any current health needs — dental, vision, transportation, home care — so you can ask your plan or social worker about each one.",
      ],
      notes:
        "Many supplemental benefits require you to actively enroll or request them. Your Medi-Cal managed care plan is required to tell you what you qualify for — call the member services number on your card and ask specifically.",
    },
    howToApply: {
      steps: [
        "Call the member services number on your Medi-Cal ID card and ask specifically: 'What dental, vision, transportation, and home care benefits am I entitled to?'",
        "For dental: find a Denti-Cal provider at smilecalifornia.org or call 1-800-322-6384.",
        "For IHSS: contact your county IHSS office — find it at cdss.ca.gov/IHSS or call your county social services office.",
        "For CalFresh food benefits: apply at BenefitsCal.com — select CalFresh. Having Medi-Cal doesn't automatically enroll you in CalFresh.",
        "For Extra Help with Medicare drug costs: if you have Medicare and Medi-Cal, you should already be enrolled — check with your Part D plan or call 1-800-MEDICARE.",
      ],
      phone: "Member services: on your Medi-Cal ID card. Denti-Cal: 1-800-322-6384. IHSS: your county office. BenefitsCal: 1-877-847-3663.",
      timeframe: "Most supplemental benefits activate quickly once you locate a provider. IHSS assessments take 30–45 days.",
    },
    goodToKnow: [
      "Your Medi-Cal managed care plan is legally required to inform you of all your covered benefits. If you feel your plan is not telling you what you qualify for, contact the Department of Managed Health Care at 1-888-466-2219.",
      "CalFresh provides an average of $200+ per month in food benefits per person — it is worth applying even if you think you earn too much. Many working Medi-Cal members qualify.",
      "If you have Medi-Cal, you can also access free dental care at FQHC dental clinics, dental schools (often lower cost and high quality), and Denti-Cal-accepting providers.",
    ],
  },

  // ── Job Loss / Coverage Gap ────────────────────────────────────────────────

  "job-loss": {
    longDescription:
      "Losing employer-sponsored health insurance is a Qualifying Life Event (QLE) that gives you a 60-day Special Enrollment Period at Covered California — you can enroll in a marketplace plan even though it's not open enrollment season. The 60-day clock starts on the date your employer coverage ends, not the date you lost your job. Separately, Medi-Cal is available year-round with no enrollment window — if your income has dropped significantly after job loss, you may now qualify for free Medi-Cal (single adult threshold: $22,025/year in 2026). COBRA lets you continue your former employer's plan for up to 18 months, but you pay the full group premium (employer's share + your share), which is typically much more expensive than Medi-Cal or a subsidized Covered CA plan. Compare all three options before deciding.",
    documents: {
      required: [
        "Proof of job loss and coverage termination (for Covered CA Special Enrollment): your employer's termination of benefits letter, COBRA election notice, or benefits termination notice. This must be dated — most plans send this automatically within a few weeks of job loss.",
        "Government-issued photo ID.",
        "Social Security Number.",
        "Proof of California residency — utility bill, bank statement, lease, or government mail.",
        "Proof of current income — this should reflect your income AFTER job loss. If you are collecting unemployment, provide your EDD award letter. If you have no income, a self-signed statement is accepted.",
      ],
      helpful: [
        "Your previous employer's COBRA election notice — even if you don't plan to use COBRA, this document proves your coverage loss date for the Covered CA SEP.",
        "Your most recent W-2 or tax return (for income history, even if current income is different).",
      ],
      notes:
        "The 60-day Covered CA Special Enrollment Period clock starts on the day your employer coverage ends — not the day you were laid off. These can be different dates. Check your benefits termination date carefully.",
    },
    howToApply: {
      steps: [
        "Step 1 — Check if your income (after job loss) now qualifies you for free Medi-Cal: single person at or below $22,025/year. If yes, apply at BenefitsCal.com — this is the best option financially.",
        "Step 2 — If you don't qualify for Medi-Cal: go to CoveredCA.com and apply using your Qualifying Life Event (job loss). You have 60 days from your benefits end date.",
        "Step 3 — Get your COBRA notice from your former employer (required within 14 days of coverage loss). Review the monthly cost — it's usually much higher than Medi-Cal or a subsidized Covered CA plan.",
        "Step 4 — Compare: Medi-Cal ($0) vs. Covered CA with subsidy (varies) vs. COBRA (usually $400–$800+/month for one person).",
        "Step 5 — Enroll in your chosen option before the 60-day window closes.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506. Free enrollment counselors: find at CoveredCA.com.",
      timeframe:
        "Act within 60 days of your coverage end date. Medi-Cal has no deadline. Covered CA SEP coverage usually starts the first of the month after enrollment.",
    },
    goodToKnow: [
      "You can switch from COBRA to Medi-Cal or Covered CA at any time — losing or dropping COBRA coverage is itself a qualifying life event for Covered CA.",
      "Unemployment benefits from EDD count as income for Medi-Cal and Covered CA calculations — report them. But unemployment income may still leave you below the Medi-Cal threshold.",
      "If you were on an HMO through your employer, your primary care doctor may participate in a Medi-Cal or Covered CA plan — ask before assuming you'll lose your doctor.",
      "If you need coverage immediately, ask about Presumptive Eligibility at a participating clinic (for Medi-Cal) — you may be able to get temporary coverage the same day.",
    ],
  },

  // ── How to Apply (navigation card) ────────────────────────────────────────

  "how-to-apply": {
    longDescription:
      "California's health coverage system has a 'no wrong door' policy — you can start your application through any portal (BenefitsCal, Covered California, or your county office) and the system will help route you to the right program. Medi-Cal is available year-round with no open enrollment window. Covered California requires open enrollment (November 1 – January 31) unless you have a qualifying life event. Medicare enrollment is tied to your 65th birthday window. Free Certified Enrollment Counselors and Navigators are available in every county to help you apply at no cost. You do not need a broker or paid service to enroll in any California health coverage program.",
    documents: {
      required: [
        "Government-issued photo ID — driver's license, state ID, or passport.",
        "Social Security Number — your card, a W-2, or a pay stub showing your full SSN.",
        "Proof of California residency — utility bill, bank statement, lease, or government mail showing your name and California address.",
        "Proof of current household income — last two pay stubs, W-2, 1099, tax return, employer letter, or self-signed declaration if you have no income.",
      ],
      helpful: [
        "Immigration documents if you are not a U.S. citizen.",
        "Birth certificates for all household members you are applying for.",
        "Any existing health insurance information.",
      ],
      notes:
        "You can start any application without having every document. Submit what you have and provide the rest later. Applying without all documents is always better than not applying at all.",
    },
    howToApply: {
      steps: [
        "For Medi-Cal: BenefitsCal.com or call 1-877-847-3663.",
        "For Covered California: CoveredCA.com or call 1-800-300-1506.",
        "For Medicare: SSA.gov or call 1-800-772-1213.",
        "For free in-person help: find a certified enrollment counselor at CoveredCA.com or call 2-1-1 for local referrals.",
        "Visit MediGuide.health/help for step-by-step guides for each program.",
      ],
      phone: "BenefitsCal: 1-877-847-3663. Covered California: 1-800-300-1506. SSA/Medicare: 1-800-772-1213. 2-1-1 (local help).",
      timeframe: "Medi-Cal: up to 45 days. Covered CA: first of month after enrollment. Medicare: check your birthday window.",
    },
    goodToKnow: [
      "Free certified enrollment counselors can compare all your options and help you apply — they are paid by the state, not by any insurance company, so their advice is unbiased.",
      "2-1-1 connects you to local health, food, housing, and social service referrals in most California counties. Available 24/7 by phone and chat.",
    ],
  },

  // ── Hidden Benefits ────────────────────────────────────────────────────────

  "hidden-benefits": {
    longDescription:
      "Medi-Cal and related California programs include many benefits that enrollees often don't know to ask for. Dental care (Denti-Cal) is available to all adult Medi-Cal members. Vision coverage includes annual eye exams and prescription glasses. Non-emergency medical transportation can take you to appointments at no cost if you have Medi-Cal. IHSS provides a paid caregiver at home for members with disabilities. CalFresh (SNAP food stamps) is a separate program that many Medi-Cal members qualify for but haven't applied to. The Extra Help program through Medicare eliminates or drastically reduces prescription drug costs for dual-eligible members. Community health workers and care coordinators available through Medi-Cal's CalAIM program can connect you to housing, food, and social services. All of these benefits require you to ask for them — they are not automatically activated.",
    documents: {
      required: [
        "For most supplemental Medi-Cal benefits (dental, vision, transportation): only your Medi-Cal member ID. No additional application needed.",
        "For CalFresh: apply separately at BenefitsCal.com — you will need your ID, proof of residency, and income documentation.",
        "For IHSS: Medi-Cal enrollment plus a completed Health Care Certification (SOC 873) from your doctor and your county's IHSS application.",
      ],
      helpful: [
        "Your Medi-Cal managed care plan's member handbook — lists all included benefits.",
        "Your current Medi-Cal member ID and plan name — needed to find in-network providers for dental, vision, and transportation.",
      ],
      notes:
        "Call the member services number on your Medi-Cal ID card and ask specifically about each supplemental benefit you want — dental, vision, transportation, IHSS, and care coordination. Plans are required to tell you what you qualify for.",
    },
    howToApply: {
      steps: [
        "Call your Medi-Cal managed care plan (number on member ID card) and ask about dental, vision, transportation, and other supplemental benefits.",
        "For dental: find a Denti-Cal provider at smilecalifornia.org.",
        "For IHSS: contact your county IHSS office — find it at cdss.ca.gov/IHSS.",
        "For CalFresh: apply at BenefitsCal.com.",
        "For Extra Help with Medicare drug costs: contact your Part D plan or call 1-800-MEDICARE.",
        "Visit MediGuide.health/hidden-benefits for the full list.",
      ],
      phone: "Member services: on your Medi-Cal ID card. Denti-Cal: 1-800-322-6384. BenefitsCal: 1-877-847-3663. 2-1-1 (local referrals).",
      timeframe: "Dental and vision: immediate once you find a provider. IHSS: 30–45 days for assessment. CalFresh: up to 30 days for decision.",
    },
    goodToKnow: [
      "CalFresh (food stamps) provides an average of $200+ per month per person in food benefits — it is worth applying even if you think your income is too high.",
      "Non-emergency medical transportation (NEMT) is a Medi-Cal benefit — your plan will arrange a ride to medical appointments. Call the member services number on your ID card to request it.",
      "Your plan is legally required to inform you of all your covered benefits. If you feel you are not getting the information you need, contact the DMHC Help Center at 1-888-466-2219.",
    ],
  },
};
