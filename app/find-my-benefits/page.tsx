import type { Metadata } from "next";
import { FindMyBenefitsQuiz } from "@/components/FindMyBenefitsQuiz";

export const metadata: Metadata = {
  title: "Find My Benefits | MediGuide.health",
  description:
    "A simple 3-question guide to help Californians explore which health benefits and support pages may fit their situation.",
};

export default function FindMyBenefitsPage() {
  return <FindMyBenefitsQuiz />;
}
