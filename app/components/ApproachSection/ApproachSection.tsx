type ApproachPillar = {
  eyebrow: string;
  title: string;
  description: string;
};

const APPROACH_PILLARS: ApproachPillar[] = [
  {
    eyebrow: "Diagnose",
    title: "Find the exact gap first",
    description:
      "Every student starts with a clear read of concepts, exam temperament, school expectations, and the mistakes that keep repeating.",
  },
  {
    eyebrow: "Rebuild",
    title: "Teach the idea, not the shortcut",
    description:
      "Lessons move from first principles to exam patterns, so students know why a method works before they are asked to perform under time pressure.",
  },
  {
    eyebrow: "Rehearse",
    title: "Turn preparation into confidence",
    description:
      "Timed practice, review loops, and calm feedback help students walk into tests with a plan instead of relying on last-minute memory.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-24 py-6">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
            How coaching works
          </p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Calm, rigorous Maths coaching built around the student in front of
            me.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-text-secondary">
            Parents usually arrive with a score problem. The real opportunity is
            almost always deeper: restore fundamentals, reduce fear, and give
            the student a repeatable way to think.
          </p>
        </div>

        <div className="rounded-3xl border border-border-soft bg-panel p-4 shadow-sm sm:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            {APPROACH_PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl bg-page-bg px-5 py-6">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-highlight text-sm font-bold text-brand-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
