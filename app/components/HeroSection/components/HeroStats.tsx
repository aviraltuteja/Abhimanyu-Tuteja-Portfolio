type HeroStat = {
  value: string;
  label: string;
};

const HERO_STATS: HeroStat[] = [
  { value: "30+", label: "Years Experience" },
  { value: "15+", label: "Local Initiatives" },
  { value: "5k+", label: "Students Mentored" },
];

export function HeroStats() {
  return (
    <div className="grid max-w-2xl grid-cols-1 gap-6 border-t border-border-soft pt-7 sm:grid-cols-3">
      {HERO_STATS.map((stat) => (
        <article key={stat.label} className="space-y-1.5">
          <p className="text-4xl font-semibold tracking-tight text-text-primary">
            {stat.value}
          </p>
          <p className="text-sm font-medium text-text-muted">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
