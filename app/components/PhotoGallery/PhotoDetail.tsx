import type { Photo } from "@/app/data/photos";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type PhotoDetailProps = {
  photo: Photo;
  framed?: boolean;
};

export function PhotoDetail({ photo, framed = false }: PhotoDetailProps) {
  return (
    <article
      className={
        framed
          ? "overflow-hidden rounded-[2rem] border border-border-soft bg-panel shadow-2xl shadow-slate-200/80"
          : ""
      }
    >
      <PhotoPlaceholder
        photo={photo}
        className="aspect-[4/3] w-full rounded-none sm:aspect-[16/10]"
      />
      <div className={framed ? "px-5 py-5 sm:px-7 sm:py-6" : "pt-6"}>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          {photo.year}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {photo.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
          {photo.caption}
        </p>
      </div>
    </article>
  );
}
