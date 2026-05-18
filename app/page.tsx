import { HeroSection } from "./components/HeroSection/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection/HighlightsSection";
import { ApproachSection } from "./components/ApproachSection/ApproachSection";
import { OutcomesSection } from "./components/OutcomesSection/OutcomesSection";
import { StartPlanSection } from "./components/StartPlanSection/StartPlanSection";
import { TestimonialsSection } from "./components/TestimonialsSection/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <HighlightsSection />
      <ApproachSection />
      <OutcomesSection />
      <StartPlanSection />
      <TestimonialsSection />
    </div>
  );
}
