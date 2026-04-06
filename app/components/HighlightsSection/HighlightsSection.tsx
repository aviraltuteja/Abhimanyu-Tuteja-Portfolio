import { HighlightCard } from "./components/HighlightCard";

type Highlight = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "My Journey",
    description: "Tracing the path from local classroom to enterprise leadership.",
    actionLabel: "Explore Path",
    href: "#journey",
  },
  {
    title: "Visual Gallery",
    description: "A curated collection of community projects and milestones.",
    actionLabel: "View Gallery",
    href: "#gallery",
  },
  {
    title: "Insights & Blogs",
    description: "Reflections on pedagogy, ethics, and modern business.",
    actionLabel: "Read Blogs",
    href: "#blogs",
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
