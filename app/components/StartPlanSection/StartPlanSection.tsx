type StartStep = {
  title: string;
  description: string;
};

const START_STEPS: StartStep[] = [
  {
    title: "Understand the student",
    description:
      "We begin with the current syllabus, recent scores, confidence level, and the pressure points parents are seeing.",
  },
  {
    title: "Build the coaching map",
    description:
      "The plan identifies priority chapters, practice rhythm, target milestones, and the exam strategy that fits the timeline.",
  },
  {
    title: "Review, adjust, repeat",
    description:
      "Progress is tracked through class performance, test readiness, and the student's ability to explain the method back clearly.",
  },
];

export function StartPlanSection() {
  return (
    <section id="start" className="scroll-mt-24 py-6">
      <div className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
              Start with clarity
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              A simple first conversation can replace weeks of guesswork.
            </h2>
            <p className="text-base leading-8 text-text-secondary">
              The best fit is a family that wants thoughtful, consistent
              coaching instead of a rotating tutor or a one-size-fits-all
              worksheet plan.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-hover">
              Discuss coaching fit
            </a>
          </div>

          <div className="grid gap-4">
            {START_STEPS.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 rounded-2xl bg-page-bg p-5 sm:grid-cols-[auto_1fr]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-text-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
