type HighlightCardProps = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

export function HighlightCard({
  title,
  description,
  actionLabel,
  href,
}: HighlightCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-dark-card p-6 text-white">
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-primary text-sm font-semibold">
        {title.charAt(0)}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-white/70">{description}</p>
      <a
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-[#a5beff] transition hover:text-white"
      >
        {actionLabel} →
      </a>
    </article>
  );
}
