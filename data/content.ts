import { Language } from "@/data/programs";

type ContentBundle = {
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  homeSectionTitle: string;
  homeSectionBody: string;
  homeSecondaryTitle: string;
  homeSecondaryBody: string;
  questionnaireTitle: string;
  questionnaireIntro: string;
  resultsTitle: string;
  disclaimer: string;
  trustHeading: string;
  trustBody: string;
  questionsSummaryTitle: string;
  questionsSummaryItems: string[];
  integrationTitle: string;
  integrationBody: string;
  footerDisclaimer: string;
  sourceLabel: string;
  lastUpdatedLabel: string;
  resetLabel: string;
  backLabel: string;
  nextLabel: string;
  languageLabel: string;
  spanishNote: string;
};

export const CONTENT: Record<Language, ContentBundle> = {
  en: {
    navLabel: "Medi-Guide",
    heroTitle: "Find your healthcare benefits in minutes",
    heroSubtitle: "Simple, free, and designed for Californians",
    heroCta: "Get Started",
    homeSectionTitle: "A simpler first step",
    homeSectionBody:
      "Medi-Guide gives a quick, easy-to-read starting point for understanding which health coverage programs may fit your situation.",
    homeSecondaryTitle: "Built for clarity",
    homeSecondaryBody:
      "Large text, straightforward questions, and calm design choices help people move through benefits information with less stress.",
    questionnaireTitle: "Check what programs may fit your situation",
    questionnaireIntro:
      "Answer a few simple questions. This tool gives general guidance only and is not an official benefits decision.",
    resultsTitle: "You may qualify for:",
    disclaimer:
      "This is not an official determination. Eligibility depends on full application details and current program rules.",
    trustHeading: "Trusted starting point",
    trustBody:
      "Information sourced from official programs such as Medi-Cal and Medicare. Replace placeholder links and policy rules with official data before launch.",
    questionsSummaryTitle: "What this tool asks",
    questionsSummaryItems: [
      "Age group",
      "Income range",
      "Employment status",
      "Student status",
      "Household size",
      "Language preference",
    ],
    integrationTitle: "How to integrate real data later",
    integrationBody:
      "Update the rules in data/programs.ts, replace placeholder links with official URLs, and connect a policy content source or CMS when legal review is complete.",
    footerDisclaimer: "This website is not affiliated with government agencies",
    sourceLabel: "Information sourced from official programs such as Medi-Cal and Medicare",
    lastUpdatedLabel: "Last updated",
    resetLabel: "Start over",
    backLabel: "Back",
    nextLabel: "Next",
    languageLabel: "Language",
    spanishNote: "Spanish content is a placeholder preview and should be reviewed by a qualified translator before launch.",
  },
  es: {
    navLabel: "Medi-Guide",
    heroTitle: "Encuentre sus beneficios de salud en minutos",
    heroSubtitle: "Simple, gratis y disenado para personas en California",
    heroCta: "Comenzar",
    homeSectionTitle: "Un primer paso mas simple",
    homeSectionBody:
      "Medi-Guide ofrece un punto de partida rapido y facil de leer para entender que programas de salud pueden ajustarse a su situacion.",
    homeSecondaryTitle: "Disenado para mayor claridad",
    homeSecondaryBody:
      "Texto grande, preguntas directas y un diseno calmado ayudan a revisar informacion de beneficios con menos estres.",
    questionnaireTitle: "Revise que programas pueden ajustarse a su situacion",
    questionnaireIntro:
      "Responda unas preguntas simples. Esta herramienta ofrece solo orientacion general y no es una decision oficial de beneficios.",
    resultsTitle: "Usted podria calificar para:",
    disclaimer:
      "Esto no es una determinacion oficial. La elegibilidad depende de los detalles completos de la solicitud y de las reglas vigentes.",
    trustHeading: "Punto de partida confiable",
    trustBody:
      "Informacion basada en programas oficiales como Medi-Cal y Medicare. Reemplace enlaces y reglas de ejemplo con datos oficiales antes del lanzamiento.",
    questionsSummaryTitle: "Lo que pregunta esta herramienta",
    questionsSummaryItems: [
      "Grupo de edad",
      "Nivel de ingresos",
      "Situacion laboral",
      "Situacion estudiantil",
      "Tamano del hogar",
      "Preferencia de idioma",
    ],
    integrationTitle: "Como integrar datos reales despues",
    integrationBody:
      "Actualice las reglas en data/programs.ts, reemplace los enlaces de ejemplo con URLs oficiales y conecte una fuente de contenido o CMS cuando termine la revision legal.",
    footerDisclaimer: "Este sitio web no esta afiliado con agencias del gobierno",
    sourceLabel: "Informacion basada en programas oficiales como Medi-Cal y Medicare",
    lastUpdatedLabel: "Ultima actualizacion",
    resetLabel: "Comenzar de nuevo",
    backLabel: "Atras",
    nextLabel: "Siguiente",
    languageLabel: "Idioma",
    spanishNote: "El contenido en espanol es un ejemplo provisional y debe ser revisado por una persona traductora calificada antes del lanzamiento.",
  },
};
