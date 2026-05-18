import { HighlightCard } from "./components/HighlightCard";

type Highlight = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Teaching Method",
    description:
      "A diagnostic, concept-first approach that rebuilds confidence before chasing marks.",
    actionLabel: "See Method",
    href: "#approach",
  },
  {
    title: "Student Outcomes",
    description:
      "Experience, exam breadth, and the practical gains families notice beyond report cards.",
    actionLabel: "View Outcomes",
    href: "#outcomes",
  },
  {
    title: "Coaching Fit",
    description:
      "A simple starting path for families who want structure, honesty, and consistency.",
    actionLabel: "Start Here",
    href: "#start",
  },
];

export function HighlightsSection() {
  return (
    <section className="mt-12 rounded-2xl bg-dark-bg px-5 py-8 sm:px-7 sm:py-10 lg:mt-14">
      <div className="grid gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((highlight) => (
          <HighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </section>
  );
}
