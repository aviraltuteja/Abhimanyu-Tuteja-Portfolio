"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Photo } from "@/app/data/photos";
import { PhotoDetail } from "./PhotoDetail";

type PhotoModalProps = {
  photo: Photo;
};

export function PhotoModal({ photo }: PhotoModalProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.back();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
      onClick={() => router.back()}
    >
      <div
        className="relative max-h-full w-full max-w-4xl overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            type="button"
            onClick={() => window.location.assign(`/photo/${photo.id}`)}
            className="rounded-full border border-white/30 bg-slate-950/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-slate-900"
          >
            Full Page
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-full border border-white/30 bg-slate-950/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-slate-900"
          >
            Close
          </button>
        </div>
        <div id="photo-modal-title" className="sr-only">
          {photo.title}
        </div>
        <PhotoDetail photo={photo} framed />
      </div>
    </div>
  );
}
