import { HeroActions } from "./components/HeroActions";
import { HeroPortraitCard } from "./components/HeroPortraitCard";
import { HeroStats } from "./components/HeroStats";

const EXAM_BOARDS = ["SAT", "CBSE", "ICSE", "GCSE", "A-Level", "AP", "ATAR", "OSSD"];

export function HeroSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {EXAM_BOARDS.map((label) => (
              <span
                key={label}
                className="inline-flex rounded-full bg-highlight px-3 py-1 text-sm font-semibold text-brand-primary"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Personalised Maths coaching that turns{" "}
              <span className="text-brand-primary">confusion</span> into{" "}
              <span className="italic">confidence</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-text-secondary">
              Get calm, concept-first coaching with an exam-focused plan. With
              30+ years of teaching experience, I&apos;m committed to helping
              students build confidence, strengthen fundamentals, and perform at
              their best—whether they&apos;re preparing for school boards or
              international entrance tests.
            </p>
          </div>
          <HeroActions />
          <HeroStats />
        </div>
        <HeroPortraitCard />
      </div>
    </section>
  );
}
