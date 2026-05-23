import type { Metadata } from "next";

type JourneyMilestone = {
  period: string;
  title: string;
  description: string;
};

const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Foundation",
    title: "A classroom-first beginning",
    description:
      "The work began with students, boards, and the daily discipline of explaining difficult ideas in simple language.",
  },
  {
    period: "Growth",
    title: "Building systems around learning",
    description:
      "Years of coaching shaped a method that balances fundamentals, exam readiness, and the confidence students need at home.",
  },
  {
    period: "Leadership",
    title: "Carrying education into enterprise",
    description:
      "The same principles now guide broader education and business efforts: clarity, trust, consistency, and measurable impact.",
  },
];

export const metadata: Metadata = {
  title: "Journey | Abhimanyu Tuteja",
  description:
    "The professional journey of Abhimanyu Tuteja across education, coaching, and enterprise leadership.",
};

export default function JourneyPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-4xl bg-panel px-5 py-8 shadow-sm ring-1 ring-border-soft sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          My Journey
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          From focused teaching to long-term educational leadership.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          A steady path shaped by classrooms, student outcomes, parent trust,
          and the belief that strong fundamentals can change how young people
          see themselves.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {JOURNEY_MILESTONES.map((milestone) => (
          <article
            key={milestone.title}
            className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {milestone.period}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
              {milestone.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {milestone.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
