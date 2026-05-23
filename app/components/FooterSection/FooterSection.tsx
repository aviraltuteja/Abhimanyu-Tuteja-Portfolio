import Link from "next/link";
import { FooterMeta } from "./components/FooterMeta";
import { FooterNav } from "./components/FooterNav";

const FOCUS_AREAS = [
  "Personalised Maths coaching",
  "Concept-first exam preparation",
  "SAT, CBSE, ICSE, GCSE, A-Level, AP, ATAR, OSSD",
];

export function FooterSection() {
  return (
    <footer className="mt-auto border-t border-border-soft bg-panel">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.9fr] lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-text-primary"
            >
              Abhimanyu Tuteja
              <span className="text-brand-primary">.</span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-text-secondary">
              Maths educator and mentor helping students turn confusion into
              confidence through calm, rigorous, concept-first coaching.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-primary">
              Explore
            </h2>
            <div className="mt-4">
              <FooterNav />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-primary">
              Focus
            </h2>
            <ul className="mt-4 space-y-3">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-sm leading-6 text-text-secondary"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-text-primary">
              Connect
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Interested in coaching for your child or discussing a partnership?
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-hover"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6">
          <FooterMeta />
        </div>
      </div>
    </footer>
  );
}
