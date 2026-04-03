import { Language, QuestionnaireAnswers } from "@/data/programs";

export type QuestionOption<T extends string> = {
  value: T;
  label: string;
};

export type QuestionDefinition = {
  key: keyof QuestionnaireAnswers;
  title: string;
  options: QuestionOption<string>[];
};

export const QUESTION_SETS: Record<Language, QuestionDefinition[]> = {
  en: [
    {
      key: "ageGroup",
      title: "What is your age group?",
      options: [
        { value: "under-18", label: "Under 18" },
        { value: "18-25", label: "18 to 25" },
        { value: "26-64", label: "26 to 64" },
        { value: "65-plus", label: "65 or older" },
      ],
    },
    {
      key: "incomeRange",
      title: "What best describes your household income?",
      options: [
        { value: "very-low", label: "Very low" },
        { value: "low", label: "Low" },
        { value: "moderate", label: "Moderate" },
        { value: "higher", label: "Higher" },
      ],
    },
    {
      key: "employmentStatus",
      title: "What is your employment status?",
      options: [
        { value: "employed", label: "Employed full-time" },
        { value: "part-time", label: "Employed part-time" },
        { value: "unemployed", label: "Not working right now" },
        { value: "retired", label: "Retired" },
      ],
    },
    {
      key: "studentStatus",
      title: "Are you currently a student?",
      options: [
        { value: "student", label: "Yes" },
        { value: "not-student", label: "No" },
      ],
    },
    {
      key: "householdSize",
      title: "How many people are in your household?",
      options: [
        { value: "1", label: "1 person" },
        { value: "2", label: "2 people" },
        { value: "3-4", label: "3 to 4 people" },
        { value: "5-plus", label: "5 or more people" },
      ],
    },
    {
      key: "languagePreference",
      title: "Which language do you prefer for health information?",
      options: [
        { value: "en", label: "English" },
        { value: "es", label: "Spanish" },
      ],
    },
  ],
  es: [
    {
      key: "ageGroup",
      title: "Cual es su grupo de edad?",
      options: [
        { value: "under-18", label: "Menor de 18" },
        { value: "18-25", label: "18 a 25" },
        { value: "26-64", label: "26 a 64" },
        { value: "65-plus", label: "65 o mas" },
      ],
    },
    {
      key: "incomeRange",
      title: "Cual opcion describe mejor el ingreso de su hogar?",
      options: [
        { value: "very-low", label: "Muy bajo" },
        { value: "low", label: "Bajo" },
        { value: "moderate", label: "Moderado" },
        { value: "higher", label: "Mas alto" },
      ],
    },
    {
      key: "employmentStatus",
      title: "Cual es su situacion laboral?",
      options: [
        { value: "employed", label: "Trabajo de tiempo completo" },
        { value: "part-time", label: "Trabajo de medio tiempo" },
        { value: "unemployed", label: "No trabajo actualmente" },
        { value: "retired", label: "Jubilado" },
      ],
    },
    {
      key: "studentStatus",
      title: "Es estudiante actualmente?",
      options: [
        { value: "student", label: "Si" },
        { value: "not-student", label: "No" },
      ],
    },
    {
      key: "householdSize",
      title: "Cuantas personas viven en su hogar?",
      options: [
        { value: "1", label: "1 persona" },
        { value: "2", label: "2 personas" },
        { value: "3-4", label: "3 a 4 personas" },
        { value: "5-plus", label: "5 o mas personas" },
      ],
    },
    {
      key: "languagePreference",
      title: "Que idioma prefiere para informacion de salud?",
      options: [
        { value: "en", label: "Ingles" },
        { value: "es", label: "Espanol" },
      ],
    },
  ],
};
