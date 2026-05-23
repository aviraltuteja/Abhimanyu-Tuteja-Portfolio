import type { Metadata } from "next";
import Link from "next/link";
import {
  getPhotosByYear,
  PHOTO_YEARS,
  PHOTOS,
} from "@/app/data/photos";
import { PhotoPlaceholder } from "@/app/components/PhotoGallery/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Photo Gallery | Abhimanyu Tuteja",
  description:
    "A year-wise photo gallery for Abhimanyu Tuteja's portfolio.",
};

export default function PhotoGalleryPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-4xl bg-panel px-5 py-8 shadow-sm ring-1 ring-border-soft sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
          Photo Gallery
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Moments collected by year.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          Placeholder photos are grouped by year for now. Open any photo to see
          its title and caption in context.
        </p>
      </section>

      {PHOTO_YEARS.map((year) => (
        <section key={year} className="flex flex-col gap-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              {year}
            </h2>
            <span className="text-sm font-medium text-text-muted">
              {getPhotosByYear(year).length} photos
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getPhotosByYear(year).map((photo, index) => (
              <Link
                key={photo.id}
                href={`/photo/${photo.id}`}
                aria-label={`Open photo ${index + 1} from ${year}`}
                className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
              >
                <PhotoPlaceholder
                  photo={photo}
                  className="aspect-4/3 shadow-lg shadow-slate-200/80 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-slate-300/70"
                />
              </Link>
            ))}
          </div>
        </section>
      ))}

      <p className="text-sm text-text-muted">
        Showing {PHOTOS.length} placeholder photos. Real images can replace the
        generated placeholders without changing the route structure.
      </p>
    </div>
  );
}
