type TestimonialCardProps = {
  name: string;
  position: string;
  yearOfPassing: string;
  testimonial: string;
  imageUrl?: string;
};

export function TestimonialCard({
  name,
  position,
  yearOfPassing,
  testimonial,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="flex h-[240px] flex-col gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-5 py-4 shadow-xl shadow-blue-950/25 backdrop-blur-sm transition-colors hover:border-cyan-300/40">
      <div className="shrink-0">
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10">
          {imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageUrl}
              alt={`${name}'s portrait`}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-cyan-200">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <h3 className="text-sm font-semibold text-white">{name}</h3>
          <p className="text-xs font-medium text-cyan-200">
            {position}{" "}
            <span className="mx-1 font-normal text-slate-400">•</span>{" "}
            <span className="font-normal text-slate-300">
              Class of {yearOfPassing}
            </span>
          </p>
        </div>
        <p className="text-xs leading-relaxed text-slate-200/90 italic">
          &ldquo;{testimonial}&rdquo;
        </p>
      </div>
    </div>
  );
}
