import type { Metadata } from "next";

type BlogPreview = {
  category: string;
  title: string;
  description: string;
};

const BLOG_PREVIEWS: BlogPreview[] = [
  {
    category: "Pedagogy",
    title: "Why fundamentals matter more than shortcuts",
    description:
      "A note on helping students slow down, understand the idea, and then perform with speed when the exam demands it.",
  },
  {
    category: "Confidence",
    title: "Turning test anxiety into a preparation system",
    description:
      "Reflections on replacing panic with routines students can repeat before, during, and after assessments.",
  },
  {
    category: "Leadership",
    title: "What education teaches about enterprise",
    description:
      "Lessons from classrooms that apply just as strongly to teams, institutions, and long-term decision making.",
  },
];

export const metadata: Metadata = {
  title: "Blogs | Abhimanyu Tuteja",
  description:
    "Reflections from Abhimanyu Tuteja on teaching, student confidence, ethics, and education-led leadership.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-4xl bg-panel px-5 py-8 shadow-sm ring-1 ring-border-soft sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Insights & Blogs
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Notes on learning, confidence, and principled growth.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          A home for short essays and reflections on what helps students learn
          deeply, prepare calmly, and build habits that last beyond one exam.
        </p>
      </section>

      <section className="grid gap-5">
        {BLOG_PREVIEWS.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {post.category}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
              {post.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">
              {post.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
