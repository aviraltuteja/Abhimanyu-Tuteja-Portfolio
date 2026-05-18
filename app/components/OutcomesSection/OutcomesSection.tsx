type OutcomeMetric = {
  value: string;
  label: string;
  detail: string;
};

type OutcomeSignal = {
  title: string;
  description: string;
};

const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    value: "5k+",
    label: "Students mentored",
    detail: "Across school boards, competitive exams, and international tracks.",
  },
  {
    value: "30+",
    label: "Years in classrooms",
    detail: "A long view of how students learn, stumble, recover, and excel.",
  },
  {
    value: "8",
    label: "Exam ecosystems",
    detail: "SAT, CBSE, ICSE, GCSE, A-Level, AP, ATAR, and OSSD support.",
  },
];

const OUTCOME_SIGNALS: OutcomeSignal[] = [
  {
    title: "From anxious to exam-ready",
    description:
      "Students learn how to approach unfamiliar questions without freezing or overthinking.",
  },
  {
    title: "Visible progress for parents",
    description:
      "The plan stays practical: what improved, what needs work, and what should happen before the next milestone.",
  },
  {
    title: "Fundamentals that travel",
    description:
      "The goal is not one test cycle. It is a stronger problem-solving base students carry into future subjects and careers.",
  },
];

export function OutcomesSection() {
  return (
    <section id="outcomes" className="scroll-mt-24 py-6">
      <div className="overflow-hidden rounded-3xl bg-dark-bg text-white">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
                Outcomes parents can feel
              </p>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                The promise is not noise. It is measurable confidence.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/72">
                The best tutoring pages lead with proof. For this portfolio,
                proof means experience, breadth, and the steady transformation
                families actually notice at home.
              </p>
            </div>

            <a
              href="#start"
              className="inline-flex w-fit rounded-xl bg-white px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-cyan-100">
              See how we start
            </a>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {OUTCOME_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <p className="text-4xl font-semibold tracking-tight text-cyan-200">
                    {metric.value}
                  </p>
                  <h3 className="mt-3 text-base font-semibold">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {metric.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-3">
              {OUTCOME_SIGNALS.map((signal) => (
                <article
                  key={signal.title}
                  className="rounded-2xl border border-white/10 bg-dark-card px-5 py-4">
                  <h3 className="text-base font-semibold text-white">
                    {signal.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/68">
                    {signal.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
