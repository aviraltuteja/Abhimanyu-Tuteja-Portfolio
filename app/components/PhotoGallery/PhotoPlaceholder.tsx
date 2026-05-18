import type { Photo } from "@/app/data/photos";

type PhotoPlaceholderProps = {
  photo: Photo;
  className?: string;
};

export function PhotoPlaceholder({ photo, className = "" }: PhotoPlaceholderProps) {
  const [from, via, to] = photo.colors;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${via} 52%, ${to})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.32),transparent_28%),radial-gradient(circle_at_72%_65%,rgba(255,255,255,0.2),transparent_32%)]" />
      <div className="absolute inset-x-6 bottom-6 h-px bg-white/35" />
      <div className="absolute bottom-8 left-6 h-16 w-16 rounded-full border border-white/35 bg-white/15 backdrop-blur-sm" />
      <div className="absolute right-6 top-6 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white/85">
        {photo.year}
      </div>
    </div>
  );
}
