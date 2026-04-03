export type Language = "en" | "es";

export type QuestionnaireAnswers = {
  ageGroup: "under-18" | "18-25" | "26-64" | "65-plus";
  incomeRange: "very-low" | "low" | "moderate" | "higher";
  employmentStatus: "employed" | "part-time" | "unemployed" | "retired";
  studentStatus: "student" | "not-student";
  householdSize: "1" | "2" | "3-4" | "5-plus";
  languagePreference: Language;
};

export type ProgramKey = "medi-cal" | "medicare" | "covered-california";

export type ProgramContent = {
  name: string;
  description: string;
  nextStepLabel: string;
  nextStepHref: string;
};

export const PROGRAM_CONTENT: Record<Language, Record<ProgramKey, ProgramContent>> = {
  en: {
    "medi-cal": {
      name: "Medi-Cal",
      description:
        "California's Medicaid program can help with doctor visits, prescriptions, hospital care, and more for people with lower incomes.",
      nextStepLabel: "Start a Medi-Cal application",
      nextStepHref: "#apply-medi-cal",
    },
    medicare: {
      name: "Medicare",
      description:
        "Medicare is federal health coverage mostly for people age 65 or older, and for some younger people with qualifying conditions.",
      nextStepLabel: "Review Medicare enrollment steps",
      nextStepHref: "#apply-medicare",
    },
    "covered-california": {
      name: "Covered California",
      description:
        "Covered California offers private health plans and financial help for some Californians who do not qualify for other programs.",
      nextStepLabel: "Explore Covered California plans",
      nextStepHref: "#apply-covered-california",
    },
  },
  es: {
    "medi-cal": {
      name: "Medi-Cal",
      description:
        "El programa Medicaid de California puede ayudar con consultas, medicinas, atencion hospitalaria y mas para personas con ingresos bajos.",
      nextStepLabel: "Comenzar una solicitud de Medi-Cal",
      nextStepHref: "#apply-medi-cal",
    },
    medicare: {
      name: "Medicare",
      description:
        "Medicare es una cobertura federal de salud principalmente para personas de 65 anos o mas, y para algunas personas mas jovenes con condiciones calificadas.",
      nextStepLabel: "Revisar pasos de inscripcion en Medicare",
      nextStepHref: "#apply-medicare",
    },
    "covered-california": {
      name: "Covered California",
      description:
        "Covered California ofrece planes privados y ayuda financiera para algunas personas en California que no califican para otros programas.",
      nextStepLabel: "Explorar planes de Covered California",
      nextStepHref: "#apply-covered-california",
    },
  },
};

export function getProgramMatches(answers: QuestionnaireAnswers): ProgramKey[] {
  const matches = new Set<ProgramKey>();

  if (answers.ageGroup === "65-plus" || answers.employmentStatus === "retired") {
    matches.add("medicare");
  }

  const incomeSuggestsMediCal =
    answers.incomeRange === "very-low" ||
    answers.incomeRange === "low" ||
    answers.employmentStatus === "unemployed" ||
    (answers.studentStatus === "student" && answers.incomeRange !== "higher");

  if (incomeSuggestsMediCal) {
    matches.add("medi-cal");
  }

  const couldUseMarketplace =
    answers.ageGroup !== "under-18" &&
    !matches.has("medi-cal") &&
    answers.incomeRange !== "very-low";

  if (couldUseMarketplace || answers.incomeRange === "moderate" || answers.incomeRange === "higher") {
    matches.add("covered-california");
  }

  if (matches.size === 0) {
    matches.add("covered-california");
  }

  return Array.from(matches);
}
