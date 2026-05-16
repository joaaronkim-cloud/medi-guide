"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { PrintSummary, type PrintBenefit } from "@/components/PrintSummary";
import { BENEFIT_DETAILS } from "@/data/benefitDetails";

type AgeAnswer = "under-18" | "18-29" | "30-64" | "65-plus";
type IncomeAnswer = "under-20k" | "20k-40k" | "40k-70k" | "over-70k";
type NeedAnswer =
  | "coverage"
  | "mental-health"
  | "dental-vision"
  | "prescription-costs"
  | "not-sure";
type SituationAnswer =
  | "no-insurance"
  | "lost-job"
  | "pregnant-new-baby"
  | "disability"
  | "immigration"
  | "veteran"
  | "homelessness"
  | "on-medi-cal"
  | "none";
type Lang = "en" | "es";

type ResultCard = {
  key: string;
  title: string;
  description: string;
  href: string;
  applyHref?: string;
  applyLabel?: string;
};

const QUESTION_COUNT = 4;
const LANG_EVENT = "medi-lang-change";

// ── Option arrays (values are programmatic; labels are English source) ────────

const AGE_OPTIONS: Array<{ label: string; value: AgeAnswer }> = [
  { label: "Under 18", value: "under-18" },
  { label: "18-29", value: "18-29" },
  { label: "30-64", value: "30-64" },
  { label: "65 or older", value: "65-plus" },
] as const;

const SITUATION_OPTIONS: Array<{ label: string; value: SituationAnswer }> = [
  { label: "I don't have health insurance", value: "no-insurance" },
  { label: "I lost my job recently", value: "lost-job" },
  { label: "I'm pregnant or just had a baby", value: "pregnant-new-baby" },
  { label: "I have a disability", value: "disability" },
  { label: "I'm undocumented or have mixed immigration status", value: "immigration" },
  { label: "I'm a veteran", value: "veteran" },
  { label: "I'm experiencing homelessness or unstable housing", value: "homelessness" },
  { label: "I'm currently on Medi-Cal", value: "on-medi-cal" },
  { label: "None of these apply", value: "none" },
] as const;

const NEED_OPTIONS: Array<{ label: string; value: NeedAnswer }> = [
  { label: "Finding health coverage", value: "coverage" },
  { label: "Mental health support", value: "mental-health" },
  { label: "Dental or vision", value: "dental-vision" },
  { label: "Prescription costs", value: "prescription-costs" },
  { label: "I don't know yet", value: "not-sure" },
] as const;

const INCOME_OPTIONS: Array<{ label: string; value: IncomeAnswer }> = [
  { label: "Under $20k", value: "under-20k" },
  { label: "$20k – $40k", value: "20k-40k" },
  { label: "$40k – $70k", value: "40k-70k" },
  { label: "Over $70k", value: "over-70k" },
] as const;

// ── Result card definitions ────────────────────────────────────────────────────

const AGE_RESULTS: Record<AgeAnswer, ResultCard> = {
  "under-18": {
    key: "age-kids",
    title: "Kids and Teens",
    description: "Coverage, dental, vision, and school health for children and teens — including foster youth support.",
    href: "/by-age/kids-teens",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "18-29": {
    key: "age-young-adults",
    title: "Young Adults",
    description: "Start here for parent plans, Medi-Cal, students, gig work, reproductive care, and immigration status questions.",
    href: "/by-age/young-adults",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "30-64": {
    key: "age-adults",
    title: "Adults",
    description: "Start here for Medi-Cal, Covered California, COBRA, self-employed coverage, and adult dental.",
    href: "/by-age/adults",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  "65-plus": {
    key: "age-seniors",
    title: "Seniors",
    description: "Start here for Medicare, drug coverage, Medi-Cal help, PACE, and income-based senior benefits.",
    href: "/by-age/seniors",
    applyHref: "https://www.ssa.gov/medicare/sign-up",
    applyLabel: "Sign Up for Medicare",
  },
};

const EXTRA_RESULTS: Record<string, ResultCard> = {
  mediCalIncome: {
    key: "medi-cal-income",
    title: "Medi-Cal — Free Coverage You Likely Qualify For",
    description:
      "At this income level, you are very likely eligible for Medi-Cal, California's free health coverage program. In 2026, the income limit for a single adult is approximately $22,025/year (138% of the federal poverty level) — if you earn less than that, you qualify for free, comprehensive coverage with no monthly premium. Apply for free at BenefitsCal.com; the application confirms your eligibility and enrolls you automatically if you qualify.",
    href: "/by-age/adults",
    applyHref: "https://benefitscal.com/",
    applyLabel: "Apply on BenefitsCal",
  },
  coveredCaSubsidy: {
    key: "covered-ca-subsidy",
    title: "Covered California — Check Your Subsidy Options",
    description:
      "Federal Premium Tax Credits are available through Covered California for incomes up to 400% of the federal poverty level (~$63,840/year for a single person in 2026). Important 2026 change: the enhanced subsidies from 2021–2025 have expired, and 2026 premiums are higher on average as a result. California state subsidies now only apply up to 165% of the federal poverty level (~$26,300/year). If your income is close to $20,000–$22,000/year, you may qualify for free Medi-Cal instead — check BenefitsCal first. Use the Covered California Shop and Compare tool to see your actual estimated monthly cost.",
    href: "/by-age/adults",
    applyHref: "https://www.coveredca.com/shop-and-compare/",
    applyLabel: "Compare Plans on Covered CA",
  },
  coveredCaCliff: {
    key: "covered-ca-cliff",
    title: "Covered California — Above the 2026 Subsidy Limit",
    description:
      "In 2026, federal Premium Tax Credits end at 400% of the federal poverty level — approximately $63,840/year for a single adult. Larger households qualify at higher incomes because the poverty level scales with family size. California state subsidies are not available at this income level. Unsubsidized Covered California plans remain an option; use the Shop and Compare tool to review full-price marketplace plans and weigh them against employer or association plans.",
    href: "/by-age/adults",
    applyHref: "https://www.coveredca.com/shop-and-compare/",
    applyLabel: "Compare Plans on Covered CA",
  },
  howToApply: {
    key: "how-to-apply",
    title: "How to Apply",
    description: "Step-by-step guides for applying to Medi-Cal, Covered California, and Medicare. Plus free help resources and your patient rights.",
    href: "/help",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  hiddenBenefits: {
    key: "hidden-benefits",
    title: "Hidden Benefits Most People Miss",
    description: "Dental, vision, transportation, food help, in-home care, prescription savings, and more — many Californians qualify but don't know it.",
    href: "/hidden-benefits",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  helpFaq: {
    key: "help-faq",
    title: "Help and Common Questions",
    description: "Answers to the most common questions about California health coverage, plus free resources to get real help.",
    href: "/help",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  pregnancy: {
    key: "pregnancy",
    title: "Pregnancy and New Parent Help",
    description: "Coverage options for pregnancy and newborns, including Medi-Cal for pregnant women, WIC, and Family PACT for family planning.",
    href: "/by-situation#pregnant",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  disability: {
    key: "disability",
    title: "Disability and Chronic Condition Support",
    description: "Medi-Cal pathways, IHSS in-home care support, and other California programs for people with disabilities or chronic conditions.",
    href: "/by-situation#disability",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  immigration: {
    key: "immigration",
    title: "Undocumented and Mixed-Status Help — 2026 Changes",
    description:
      "2026 update: As of January 1, 2026, new undocumented adults (19+) can no longer enroll in full-scope Medi-Cal — only Emergency Medi-Cal and pregnancy-related Medi-Cal remain available for new adult applicants in this group. Children under 19, pregnant people, and former foster youth under 26 are still fully covered regardless of immigration status. Anyone already enrolled in Medi-Cal before January 1, 2026 can keep their coverage. Mixed-status families often have eligible members even if others are not — a certified enrollment counselor can help you understand your options.",
    href: "/by-situation#immigration",
    applyHref: "https://healthconsumer.org/medi-cal-changes-and-what-you-need-to-know/",
    applyLabel: "See 2026 Medi-Cal changes",
  },
  veteran: {
    key: "veteran",
    title: "Veteran Coverage Help",
    description: "VA health care, CalVet navigation, and how Medi-Cal or Covered California can work alongside VA benefits.",
    href: "/by-situation#veteran",
    applyHref: "https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/",
    applyLabel: "Apply for VA Health Care",
  },
  homelessness: {
    key: "homelessness",
    title: "Housing Instability and Health Support",
    description: "Medi-Cal enrollment options for people without a stable address, plus care coordination support for people with complex needs.",
    href: "/by-situation#homelessness",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  mentalHealth: {
    key: "mental-health",
    title: "Mental Health Support",
    description: "Free mental health resources including the 988 crisis line, Medi-Cal behavioral health, and community mental health services.",
    href: "/hidden-benefits#mental-health",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  dentalVision: {
    key: "dental-vision",
    title: "Dental and Vision Help",
    description: "Adult Medi-Cal dental, Medi-Cal vision coverage, and how to find in-network providers near you.",
    href: "/hidden-benefits#dental-vision",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  prescription: {
    key: "prescription",
    title: "Prescription Cost Help",
    description: "Extra Help for Medicare Part D, Medi-Cal prescription coverage, and how to lower your drug costs.",
    href: "/hidden-benefits#prescription",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Apply on BenefitsCal",
  },
  currentMediCal: {
    key: "current-medi-cal",
    title: "Already on Medi-Cal? See What Else You Qualify For",
    description: "Many Medi-Cal members miss extra benefits — dental, vision, transportation, in-home care, and CalFresh food help.",
    href: "/hidden-benefits",
    applyHref: "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
    applyLabel: "Check on BenefitsCal",
  },
  jobLoss: {
    key: "job-loss",
    title: "Coverage Gap After Job Loss",
    description: "Your options when you lose employer coverage: Covered California special enrollment (60-day window), Medi-Cal, and COBRA.",
    href: "/by-situation#job-loss",
    applyHref: "https://www.coveredca.com/apply/",
    applyLabel: "Apply on Covered CA",
  },
};

// ── Result assembly ────────────────────────────────────────────────────────────

function getQuizResults({
  age,
  situations,
  need,
  income,
}: {
  age: AgeAnswer;
  situations: SituationAnswer[];
  need: NeedAnswer;
  income: IncomeAnswer | null;
}) {
  const cards: ResultCard[] = [];
  const seen = new Set<string>();

  function addCard(card: ResultCard) {
    if (seen.has(card.key) || cards.length >= 5) return;
    seen.add(card.key);
    cards.push(card);
  }

  addCard(AGE_RESULTS[age]);

  const isWorkingAge = age === "18-29" || age === "30-64";
  if (income && isWorkingAge) {
    if (income === "under-20k") {
      addCard(EXTRA_RESULTS.mediCalIncome);
    } else if (income === "20k-40k" || income === "40k-70k") {
      addCard(EXTRA_RESULTS.coveredCaSubsidy);
    } else if (income === "over-70k") {
      addCard(EXTRA_RESULTS.coveredCaCliff);
    }
  }

  if (situations.includes("no-insurance")) addCard(EXTRA_RESULTS.howToApply);
  if (situations.includes("lost-job")) addCard(EXTRA_RESULTS.jobLoss);
  if (situations.includes("pregnant-new-baby")) addCard(EXTRA_RESULTS.pregnancy);
  if (situations.includes("disability")) addCard(EXTRA_RESULTS.disability);
  if (situations.includes("immigration")) addCard(EXTRA_RESULTS.immigration);
  if (situations.includes("veteran")) addCard(EXTRA_RESULTS.veteran);
  if (situations.includes("homelessness")) addCard(EXTRA_RESULTS.homelessness);
  if (situations.includes("on-medi-cal")) addCard(EXTRA_RESULTS.currentMediCal);

  if (need === "coverage") addCard(EXTRA_RESULTS.howToApply);
  if (need === "mental-health") addCard(EXTRA_RESULTS.mentalHealth);
  if (need === "dental-vision") {
    if (age === "under-18") addCard(AGE_RESULTS["under-18"]);
    else addCard(EXTRA_RESULTS.dentalVision);
  }
  if (need === "prescription-costs") {
    if (age === "65-plus") addCard(AGE_RESULTS["65-plus"]);
    addCard(EXTRA_RESULTS.prescription);
  }
  if (need === "not-sure") {
    addCard(EXTRA_RESULTS.hiddenBenefits);
    addCard(EXTRA_RESULTS.howToApply);
  }

  if (cards.length < 3) addCard(EXTRA_RESULTS.hiddenBenefits);
  if (cards.length < 3) addCard(EXTRA_RESULTS.helpFaq);
  if (cards.length < 3) addCard(EXTRA_RESULTS.howToApply);

  return cards.slice(0, 5);
}

// ── Label maps (for print summary — always English) ────────────────────────────

const AGE_LABELS: Record<AgeAnswer, string> = {
  "under-18": "under 18",
  "18-29": "18–29",
  "30-64": "30–64",
  "65-plus": "65 or older",
};

const INCOME_LABELS: Record<IncomeAnswer, string> = {
  "under-20k": "under $20,000/year",
  "20k-40k": "$20,000–$40,000/year",
  "40k-70k": "$40,000–$70,000/year",
  "over-70k": "over $70,000/year",
};

const SITUATION_LABELS: Record<SituationAnswer, string> = {
  "no-insurance": "no health insurance",
  "lost-job": "recently lost a job",
  "pregnant-new-baby": "pregnant or a new parent",
  disability: "living with a disability",
  immigration: "undocumented or mixed-status household",
  veteran: "a veteran or active-duty family member",
  homelessness: "experiencing homelessness or unstable housing",
  "on-medi-cal": "currently on Medi-Cal",
  none: "no specific situation listed",
};

const NEED_LABELS: Record<NeedAnswer, string> = {
  coverage: "finding health coverage",
  "mental-health": "mental health support",
  "dental-vision": "dental or vision help",
  "prescription-costs": "lowering prescription costs",
  "not-sure": "not sure yet",
};

// ── Spanish translations ───────────────────────────────────────────────────────

const AGE_LABELS_ES: Record<AgeAnswer, string> = {
  "under-18": "Menor de 18",
  "18-29": "18–29",
  "30-64": "30–64",
  "65-plus": "65 o más",
};

const SITUATION_LABELS_ES: Record<SituationAnswer, string> = {
  "no-insurance": "No tengo seguro médico",
  "lost-job": "Perdí mi trabajo recientemente",
  "pregnant-new-baby": "Estoy embarazada o acabo de tener un bebé",
  disability: "Tengo una discapacidad",
  immigration: "Soy indocumentado/a o tengo estatus migratorio mixto",
  veteran: "Soy veterano/a",
  homelessness: "Estoy sin hogar o en situación de vivienda inestable",
  "on-medi-cal": "Actualmente estoy en Medi-Cal",
  none: "Ninguna de estas aplica",
};

const NEED_LABELS_ES: Record<NeedAnswer, string> = {
  coverage: "Encontrar cobertura de salud",
  "mental-health": "Apoyo de salud mental",
  "dental-vision": "Dental o visión",
  "prescription-costs": "Costos de medicamentos",
  "not-sure": "Todavía no sé",
};

const INCOME_LABELS_ES: Record<IncomeAnswer, string> = {
  "under-20k": "Menos de $20,000",
  "20k-40k": "$20,000 – $40,000",
  "40k-70k": "$40,000 – $70,000",
  "over-70k": "Más de $70,000",
};

/** Spanish apply-button labels, keyed by English label */
const APPLY_LABEL_ES: Record<string, string> = {
  "Apply on BenefitsCal": "Solicitar en BenefitsCal",
  "Compare Plans on Covered CA": "Comparar Planes en Covered CA",
  "Apply on Covered CA": "Solicitar en Covered CA",
  "Check on BenefitsCal": "Verificar en BenefitsCal",
  "See 2026 Medi-Cal changes": "Ver cambios de Medi-Cal 2026",
  "Sign Up for Medicare": "Inscribirse en Medicare",
  "Apply for VA Health Care": "Solicitar Atención Médica del VA",
  "Apply Now": "Solicitar ahora",
};

/** Spanish titles and descriptions for every result card key */
const CARD_ES: Record<string, { title: string; description: string }> = {
  "age-kids": {
    title: "Niños y Adolescentes",
    description:
      "Cobertura, dental, visión y salud escolar para niños y adolescentes, incluyendo apoyo para jóvenes en el sistema de crianza temporal.",
  },
  "age-young-adults": {
    title: "Jóvenes Adultos",
    description:
      "Empieza aquí para planes de padres, Medi-Cal, estudiantes, trabajo independiente, atención reproductiva y preguntas sobre estatus migratorio.",
  },
  "age-adults": {
    title: "Adultos",
    description:
      "Empieza aquí para Medi-Cal, Covered California, COBRA, cobertura para trabajadores independientes y dental para adultos.",
  },
  "age-seniors": {
    title: "Adultos Mayores",
    description:
      "Empieza aquí para Medicare, cobertura de medicamentos, ayuda de Medi-Cal, PACE y beneficios para adultos mayores de bajos ingresos.",
  },
  "medi-cal-income": {
    title: "Medi-Cal — Cobertura Gratuita para la que Probablemente Calificas",
    description:
      "Con este nivel de ingresos, es muy probable que califiques para Medi-Cal, el programa de seguro médico gratuito de California. En 2026, el límite de ingresos para un adulto soltero es aproximadamente $22,025 al año (138% del nivel federal de pobreza) — si ganas menos de eso, calificas para cobertura gratuita y completa sin prima mensual. Solicita gratis en BenefitsCal.com.",
  },
  "covered-ca-subsidy": {
    title: "Covered California — Verifica tus Opciones de Subsidio",
    description:
      "Los Créditos Fiscales de Primas Federales están disponibles a través de Covered California para ingresos de hasta el 400% del nivel federal de pobreza (~$63,840 al año para una persona sola en 2026). Cambio importante en 2026: los subsidios mejorados de 2021–2025 han vencido. Los subsidios estatales de California ahora solo aplican hasta el 165% FPL (~$26,300 al año). Si tu ingreso está cerca de $20,000–$22,000 al año, podrías calificar para Medi-Cal gratuito.",
  },
  "covered-ca-cliff": {
    title: "Covered California — Por Encima del Límite de Subsidio 2026",
    description:
      "En 2026, los Créditos Fiscales de Primas federales terminan al 400% del nivel federal de pobreza — aproximadamente $63,840 al año para un adulto soltero. Los hogares más grandes califican con ingresos más altos. Los planes sin subsidio de Covered California siguen siendo una opción.",
  },
  "how-to-apply": {
    title: "Cómo Solicitar",
    description:
      "Guías paso a paso para solicitar Medi-Cal, Covered California y Medicare. Además de recursos de ayuda gratuita y tus derechos como paciente.",
  },
  "hidden-benefits": {
    title: "Beneficios Ocultos que la Mayoría Desconoce",
    description:
      "Dental, visión, transporte, ayuda con comida, cuidado en el hogar, ahorros en medicamentos y más — muchos californianos califican pero no lo saben.",
  },
  "help-faq": {
    title: "Ayuda y Preguntas Frecuentes",
    description:
      "Respuestas a las preguntas más comunes sobre la cobertura de salud de California, además de recursos gratuitos para obtener ayuda real.",
  },
  pregnancy: {
    title: "Ayuda para el Embarazo y Nuevos Padres",
    description:
      "Opciones de cobertura para el embarazo y recién nacidos, incluyendo Medi-Cal para mujeres embarazadas, WIC y Family PACT para planificación familiar.",
  },
  disability: {
    title: "Apoyo para Discapacidad y Condiciones Crónicas",
    description:
      "Opciones de Medi-Cal, apoyo de IHSS en el hogar y otros programas de California para personas con discapacidades o condiciones crónicas.",
  },
  immigration: {
    title: "Ayuda para Indocumentados y Familias Mixtas — Cambios 2026",
    description:
      "Actualización 2026: Desde el 1 de enero de 2026, los nuevos adultos indocumentados (19+) ya no pueden inscribirse en Medi-Cal completo — solo Emergency Medi-Cal y Medi-Cal de embarazo siguen disponibles. Los niños menores de 19, personas embarazadas y ex-jóvenes de crianza temporal menores de 26 siguen cubiertos sin importar su estatus. Las familias de estatus mixto frecuentemente tienen miembros elegibles.",
  },
  veteran: {
    title: "Ayuda de Cobertura para Veteranos",
    description:
      "Atención médica del VA, navegación con CalVet y cómo Medi-Cal o Covered California pueden trabajar junto a los beneficios del VA.",
  },
  homelessness: {
    title: "Inestabilidad de Vivienda y Apoyo de Salud",
    description:
      "Opciones de inscripción a Medi-Cal para personas sin dirección estable, además de apoyo de coordinación de atención para personas con necesidades complejas.",
  },
  "mental-health": {
    title: "Apoyo de Salud Mental",
    description:
      "Recursos gratuitos de salud mental incluyendo la línea de crisis 988, salud conductual de Medi-Cal y servicios de salud mental comunitarios.",
  },
  "dental-vision": {
    title: "Ayuda Dental y de Visión",
    description:
      "Dental para adultos de Medi-Cal, cobertura de visión de Medi-Cal y cómo encontrar proveedores en tu red cerca de ti.",
  },
  prescription: {
    title: "Ayuda con el Costo de Medicamentos",
    description:
      "Ayuda Extra para Medicare Parte D, cobertura de medicamentos de Medi-Cal y cómo reducir el costo de tus medicamentos.",
  },
  "current-medi-cal": {
    title: "¿Ya estás en Medi-Cal? Descubre para qué más Calificas",
    description:
      "Muchos miembros de Medi-Cal no aprovechan beneficios adicionales — dental, visión, transporte, cuidado en el hogar y ayuda con comida CalFresh.",
  },
  "job-loss": {
    title: "Período sin Cobertura Después de Perder el Empleo",
    description:
      "Tus opciones cuando pierdes cobertura del empleador: inscripción especial de Covered California (ventana de 60 días), Medi-Cal y COBRA.",
  },
};

/** All UI strings in both languages */
const UI = {
  en: {
    eyebrow: "Find My Benefits",
    pageTitle: "Let’s find what you qualify for.",
    pageSubtitle:
      "Based on your answers, we’ll show you the California health programs most likely to help your situation.",
    pageTagline: "Four quick questions. No account. Nothing saved.",
    backToHome: "Back to Homepage",
    questionOf: (n: number) => `Question ${n} of ${QUESTION_COUNT}`,
    ageQ: "How old are you?",
    situationQ: "What is your situation right now?",
    situationHint: "Pick all that apply.",
    needQ: "What do you need help with most?",
    incomeQ: "Roughly, what is your yearly household income?",
    incomeHint:
      "This helps us match you to the right programs. Your answer stays on your screen — nothing is stored or shared.",
    back: "Back",
    next: "Next",
    resultsHeading: "Based on your answers, here’s what you may qualify for:",
    resultsSub:
      "These are starting points only. Your actual eligibility depends on your income and household. All resources listed are free.",
    seeOptions: "See your options →",
    docsOpen: "What documents do I need?",
    docsClose: "Hide details",
    closePanel: "Close details ↑",
    startOver: "Start over",
    aboutProgram: "About this program",
    docsSection: "Documents to gather",
    alsoHelpful: "Also helpful — not strictly required:",
    howToApplySection: "How to apply — step by step",
    timeframe: "Timeframe:",
    goodToKnow: "Good to know",
    noteLabel: "Note:",
    disclaimerText:
      "Your answers stay on your screen — nothing is saved, stored, or shared. For a more exact estimate, use the",
    disclaimerLink: "Covered California Shop and Compare tool",
  },
  es: {
    eyebrow: "Encontrar Mis Beneficios",
    pageTitle: "Descubramos para qué calificas.",
    pageSubtitle:
      "Según tus respuestas, te mostraremos los programas de salud de California que probablemente más te ayuden.",
    pageTagline: "Cuatro preguntas rápidas. Sin cuenta. No se guarda nada.",
    backToHome: "Volver al Inicio",
    questionOf: (n: number) => `Pregunta ${n} de ${QUESTION_COUNT}`,
    ageQ: "¿Cuántos años tienes?",
    situationQ: "¿Cuál es tu situación actual?",
    situationHint: "Selecciona todas las que apliquen.",
    needQ: "¿Con qué necesitas más ayuda?",
    incomeQ: "¿Aproximadamente, cuál es el ingreso anual de tu hogar?",
    incomeHint:
      "Esto nos ayuda a encontrar los programas correctos para ti. Tu respuesta solo se muestra en tu pantalla — no se guarda ni comparte.",
    back: "Atrás",
    next: "Siguiente",
    resultsHeading: "Según tus respuestas, esto es para lo que podrías calificar:",
    resultsSub:
      "Estos son solo puntos de partida. Tu elegibilidad real depende de tus ingresos y tu hogar. Todos los recursos listados son gratuitos.",
    seeOptions: "Ver tus opciones →",
    docsOpen: "¿Qué documentos necesito?",
    docsClose: "Ocultar detalles",
    closePanel: "Cerrar detalles ↑",
    startOver: "Comenzar de nuevo",
    aboutProgram: "Sobre este programa",
    docsSection: "Documentos a reunir",
    alsoHelpful: "También útil — no estrictamente necesario:",
    howToApplySection: "Cómo solicitar — paso a paso",
    timeframe: "Tiempo de procesamiento:",
    goodToKnow: "Importante saber",
    noteLabel: "Nota:",
    disclaimerText:
      "Tus respuestas solo se muestran en tu pantalla — no se guardan, almacenan ni comparten. Para un estimado más preciso, usa la",
    disclaimerLink: "herramienta de Comparación de Covered California",
  },
} as const;

// ── Eligibility summary (print — always English) ───────────────────────────────

function buildEligibilitySummary(
  age: AgeAnswer,
  situations: SituationAnswer[],
  need: NeedAnswer,
  income: IncomeAnswer | null,
): string {
  const situationText =
    situations.length === 1 && situations[0] === "none"
      ? ""
      : situations
          .filter((s) => s !== "none")
          .map((s) => SITUATION_LABELS[s])
          .join(", ");

  const parts = [`Age: ${AGE_LABELS[age]}`];
  if (income) parts.push(`Household income: ${INCOME_LABELS[income]}`);
  if (situationText) parts.push(`Situation: ${situationText}`);
  parts.push(`Primary need: ${NEED_LABELS[need]}`);

  return (
    parts.join(" · ") +
    ". These are starting points only — actual eligibility depends on income and household size. Confirm with each program before applying."
  );
}

// ── Shared option button ───────────────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`focus-ring w-full rounded-[1.5rem] border px-5 py-5 text-left text-lg font-semibold transition sm:px-6 sm:py-6 ${
        selected
          ? "border-brand-700 bg-brand-50 text-ink ring-2 ring-brand-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-100 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

// ── Inline language toggle ─────────────────────────────────────────────────────

function LangPill({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (next: Lang) => void;
}) {
  return (
    <div
      className="flex overflow-hidden rounded-full border border-slate-200 text-sm font-semibold"
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => onChange("en")}
        className={`px-3 py-1.5 transition ${
          lang === "en" ? "bg-brand-700 text-white" : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={lang === "es"}
        onClick={() => onChange("es")}
        className={`px-3 py-1.5 transition ${
          lang === "es" ? "bg-brand-700 text-white" : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        ES
      </button>
    </div>
  );
}

// ── Quiz component ─────────────────────────────────────────────────────────────

export function FindMyBenefitsQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [age, setAge] = useState<AgeAnswer | null>(null);
  const [situations, setSituations] = useState<SituationAnswer[]>([]);
  const [need, setNeed] = useState<NeedAnswer | null>(null);
  const [income, setIncome] = useState<IncomeAnswer | null>(null);
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("en");

  // Sync language with nav toggle via localStorage + custom event
  useEffect(() => {
    const stored = localStorage.getItem("medi-lang") as Lang | null;
    if (stored === "es") setLang("es");

    function handleLangChange(e: Event) {
      setLang((e as CustomEvent<Lang>).detail);
    }
    window.addEventListener(LANG_EVENT, handleLangChange);
    return () => window.removeEventListener(LANG_EVENT, handleLangChange);
  }, []);

  function changeLang(next: Lang) {
    setLang(next);
    localStorage.setItem("medi-lang", next);
    window.dispatchEvent(new CustomEvent<Lang>(LANG_EVENT, { detail: next }));
  }

  const t = UI[lang];

  const isResultsStep = stepIndex >= QUESTION_COUNT;
  const progress = Math.round(((Math.min(stepIndex, QUESTION_COUNT - 1) + 1) / QUESTION_COUNT) * 100);

  const results = useMemo(() => {
    if (!age || !need || situations.length === 0) return [];
    return getQuizResults({ age, situations, need, income });
  }, [age, situations, need, income]);

  function toggleSituation(value: SituationAnswer) {
    setSituations((current) => {
      if (value === "none") return ["none"];
      const withoutNone = current.filter((item) => item !== "none");
      if (withoutNone.includes(value)) return withoutNone.filter((item) => item !== value);
      return [...withoutNone, value];
    });
  }

  function canGoNext() {
    if (stepIndex === 0) return age !== null;
    if (stepIndex === 1) return situations.length > 0;
    if (stepIndex === 2) return need !== null;
    if (stepIndex === 3) return income !== null;
    return true;
  }

  function goNext() {
    if (!canGoNext()) return;
    setStepIndex((current) => Math.min(current + 1, QUESTION_COUNT));
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function resetQuiz() {
    setAge(null);
    setSituations([]);
    setNeed(null);
    setIncome(null);
    setOpenDetail(null);
    setStepIndex(0);
  }

  const printBenefits: PrintBenefit[] = isResultsStep
    ? results.map((r) => ({
        name: r.title,
        description: r.description,
        applyUrl: r.applyHref ?? "mediguide.health/help",
        phone:
          r.applyLabel !== "Apply on BenefitsCal" && r.applyLabel !== "Apply on Covered CA"
            ? r.applyLabel
            : undefined,
      }))
    : [];

  const eligibilitySummary =
    isResultsStep && age && need
      ? buildEligibilitySummary(age, situations, need, income)
      : "";

  return (
    <>
      <div className="print:hidden min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,236,255,0.55),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#f7fbf8_52%,_#fffaf2_100%)]">
        <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
          <header className="rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {t.eyebrow}
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {t.pageTitle}
                </h1>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <LangPill lang={lang} onChange={changeLang} />
                <Link
                  href="/"
                  className="focus-ring inline-flex rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {t.backToHome}
                </Link>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              {t.pageSubtitle}
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {t.pageTagline}
            </p>
          </header>

          <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/92 p-6 shadow-card sm:p-10">
            {!isResultsStep ? (
              <>
                <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-500">
                  <span>{t.questionOf(stepIndex + 1)}</span>
                  <span>{progress}%</span>
                </div>

                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-brand-700 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step 0 — Age */}
                {stepIndex === 0 && (
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-ink">{t.ageQ}</h2>
                    <div className="mt-6 grid gap-4">
                      {AGE_OPTIONS.map((option) => (
                        <OptionButton
                          key={option.value}
                          label={lang === "es" ? AGE_LABELS_ES[option.value] : option.label}
                          selected={age === option.value}
                          onClick={() => setAge(option.value)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1 — Situation (multi-select) */}
                {stepIndex === 1 && (
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-ink">{t.situationQ}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{t.situationHint}</p>
                    <div className="mt-6 grid gap-4">
                      {SITUATION_OPTIONS.map((option) => (
                        <OptionButton
                          key={option.value}
                          label={lang === "es" ? SITUATION_LABELS_ES[option.value] : option.label}
                          selected={situations.includes(option.value)}
                          onClick={() => toggleSituation(option.value)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2 — Need */}
                {stepIndex === 2 && (
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-ink">{t.needQ}</h2>
                    <div className="mt-6 grid gap-4">
                      {NEED_OPTIONS.map((option) => (
                        <OptionButton
                          key={option.value}
                          label={lang === "es" ? NEED_LABELS_ES[option.value] : option.label}
                          selected={need === option.value}
                          onClick={() => setNeed(option.value)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3 — Income */}
                {stepIndex === 3 && (
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-ink">{t.incomeQ}</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{t.incomeHint}</p>
                    <div className="mt-6 grid gap-4">
                      {INCOME_OPTIONS.map((option) => (
                        <OptionButton
                          key={option.value}
                          label={lang === "es" ? INCOME_LABELS_ES[option.value] : option.label}
                          selected={income === option.value}
                          onClick={() => setIncome(option.value)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={stepIndex === 0}
                    className="focus-ring rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t.back}
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canGoNext()}
                    className="focus-ring rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t.next}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50 p-6">
                  <h2 className="text-3xl font-bold tracking-tight text-ink">{t.resultsHeading}</h2>
                  <p className="mt-3 text-lg leading-8 text-slate-700">{t.resultsSub}</p>
                </div>

                <div className="mt-6 grid gap-5">
                  {results.map((result) => {
                    const detail = BENEFIT_DETAILS[result.key];
                    const isOpen = openDetail === result.key;
                    const cardTitle = lang === "es" ? (CARD_ES[result.key]?.title ?? result.title) : result.title;
                    const cardDesc = lang === "es" ? (CARD_ES[result.key]?.description ?? result.description) : result.description;
                    const applyLabel = lang === "es"
                      ? (APPLY_LABEL_ES[result.applyLabel ?? ""] ?? result.applyLabel ?? "Apply Now")
                      : (result.applyLabel ?? "Apply Now");

                    return (
                      <article
                        key={result.key}
                        className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
                      >
                        <h3 className="text-2xl font-bold tracking-tight text-ink">{cardTitle}</h3>
                        <p className="mt-3 text-lg leading-8 text-slate-700">{cardDesc}</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {result.applyHref && (
                            <a
                              href={result.applyHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="focus-ring inline-flex rounded-full bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
                            >
                              {applyLabel} &rarr;
                            </a>
                          )}
                          <Link
                            href={result.href}
                            className="focus-ring inline-flex rounded-full border border-brand-700 px-5 py-3 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
                          >
                            {t.seeOptions}
                          </Link>
                          {detail && (
                            <button
                              type="button"
                              onClick={() => setOpenDetail(isOpen ? null : result.key)}
                              className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-900"
                            >
                              {isOpen ? t.docsClose : t.docsOpen}
                              <span aria-hidden="true" className="text-slate-300">
                                {isOpen ? "↑" : "↓"}
                              </span>
                            </button>
                          )}
                        </div>

                        {isOpen && detail && (
                          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,_#f8fafc_0%,_#f1f5f9_100%)] p-5 sm:p-6">
                            {/* About */}
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {t.aboutProgram}
                              </p>
                              <p className="mt-3 text-base leading-7 text-slate-700">{detail.longDescription}</p>
                            </div>

                            {/* Documents */}
                            <div className="mt-6 border-t border-slate-200 pt-6">
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {t.docsSection}
                              </p>
                              <ul className="mt-4 space-y-3">
                                {detail.documents.required.map((doc, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                                      {i + 1}
                                    </span>
                                    <span className="text-base leading-7 text-slate-700">{doc}</span>
                                  </li>
                                ))}
                              </ul>
                              {detail.documents.helpful && detail.documents.helpful.length > 0 && (
                                <div className="mt-5">
                                  <p className="text-sm font-semibold text-slate-500">{t.alsoHelpful}</p>
                                  <ul className="mt-2 space-y-2">
                                    {detail.documents.helpful.map((doc, i) => (
                                      <li key={i} className="flex items-start gap-3">
                                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                                        <span className="text-base leading-7 text-slate-600">{doc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {detail.documents.notes && (
                                <div className="mt-4 rounded-[1rem] border border-amber-200 bg-amber-50 px-4 py-3">
                                  <p className="text-sm leading-6 text-amber-900">
                                    <strong>{t.noteLabel} </strong>
                                    {detail.documents.notes}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* How to Apply */}
                            <div className="mt-6 border-t border-slate-200 pt-6">
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {t.howToApplySection}
                              </p>
                              <ol className="mt-4 space-y-3">
                                {detail.howToApply.steps.map((step, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                                      {i + 1}
                                    </span>
                                    <span className="text-base leading-7 text-slate-700">{step}</span>
                                  </li>
                                ))}
                              </ol>
                              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                                {detail.howToApply.phone && (
                                  <div className="rounded-[1rem] border border-brand-100 bg-brand-50 px-4 py-3">
                                    <p className="text-sm font-semibold text-brand-900">
                                      {detail.howToApply.phone}
                                    </p>
                                  </div>
                                )}
                                {detail.howToApply.timeframe && (
                                  <div className="rounded-[1rem] border border-slate-200 bg-white px-4 py-3">
                                    <p className="text-sm leading-6 text-slate-600">
                                      <strong>{t.timeframe} </strong>
                                      {detail.howToApply.timeframe}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Good to Know */}
                            {detail.goodToKnow && detail.goodToKnow.length > 0 && (
                              <div className="mt-6 border-t border-slate-200 pt-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                  {t.goodToKnow}
                                </p>
                                <ul className="mt-4 space-y-3">
                                  {detail.goodToKnow.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="mt-1 flex-shrink-0 text-sm font-bold text-brand-700">
                                        &#10003;
                                      </span>
                                      <span className="text-base leading-7 text-slate-600">{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="mt-5 flex justify-end">
                              <button
                                type="button"
                                onClick={() => setOpenDetail(null)}
                                className="focus-ring rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                              >
                                {t.closePanel}
                              </button>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={goBack}
                    className="focus-ring rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    {t.back}
                  </button>
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="focus-ring rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
                  >
                    {t.startOver}
                  </button>
                </div>
              </>
            )}
          </section>

          <section className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <p className="text-base leading-7 text-amber-900">
              {t.disclaimerText}{" "}
              <a
                href="https://www.coveredca.com/shop-and-compare/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-amber-700"
              >
                {t.disclaimerLink}
              </a>
              .
            </p>
          </section>
        </main>
      </div>
      {isResultsStep && age && need && printBenefits.length > 0 && (
        <PrintSummary
          pageTitle="Your Personalized Benefits Summary"
          eligibilitySummary={eligibilitySummary}
          benefits={printBenefits}
        />
      )}
    </>
  );
}
