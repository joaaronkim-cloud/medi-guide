"use client";

import { Language } from "@/data/programs";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export function LanguageToggle({ language, onChange, label }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <span className="px-3 text-sm font-semibold text-slate-600">{label}</span>
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={language === "en"}
        className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
          language === "en" ? "bg-brand-700 text-white" : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange("es")}
        aria-pressed={language === "es"}
        className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
          language === "es" ? "bg-brand-700 text-white" : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        ES
      </button>
    </div>
  );
}
