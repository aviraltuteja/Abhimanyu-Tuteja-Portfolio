import type { Metadata } from "next";
import { ContactForm } from "@/app/components/ContactSection/ContactForm";

type ConsultationStep = {
  title: string;
  description: string;
};

const CONSULTATION_STEPS: ConsultationStep[] = [
  {
    title: "Share context",
    description:
      "Tell us about the student, current syllabus, recent performance, and the goals you have in mind.",
  },
  {
    title: "Review fit",
    description:
      "We look at confidence level, exam timeline, and whether a concept-first coaching plan is the right match.",
  },
  {
    title: "Plan next steps",
    description:
      "If it feels aligned, we outline a clear starting path before any long-term commitment.",
  },
];

export const metadata: Metadata = {
  title: "Contact | Abhimanyu Tuteja",
  description:
    "Schedule a consultation with Abhimanyu Tuteja for personalised Maths coaching and educational partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-4xl bg-panel px-5 py-8 shadow-sm ring-1 ring-border-soft sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Schedule a consultation with clarity and no pressure.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          Whether you are exploring Maths coaching for your child or a broader
          educational partnership, this is the place to start a thoughtful
          conversation.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <ContactForm />

        <div className="flex flex-col gap-5">
          <article className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Response time
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-text-primary">
              One to two business days
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              Enquiries are reviewed personally. You will receive a considered
              reply with suggested next steps rather than a generic auto-response.
            </p>
          </article>

          <div className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text-primary">
              What happens next
            </p>
            <div className="mt-5 grid gap-4">
              {CONSULTATION_STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-4 rounded-2xl bg-page-bg p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-text-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
