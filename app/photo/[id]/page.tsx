import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoDetail } from "@/app/components/PhotoGallery/PhotoDetail";
import { getPhotoById, PHOTOS } from "@/app/data/photos";

type PhotoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return PHOTOS.map((photo) => ({
    id: photo.id,
  }));
}

export async function generateMetadata({
  params,
}: PhotoPageProps): Promise<Metadata> {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    return {
      title: "Photo Not Found | Abhimanyu Tuteja",
    };
  }

  return {
    title: `${photo.title} | Abhimanyu Tuteja`,
    description: photo.caption,
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <Link
        href="/photo-gallery"
        className="w-fit text-sm font-semibold text-brand-primary transition hover:text-brand-primary-hover"
      >
        Back to gallery
      </Link>
      <PhotoDetail photo={photo} framed />
    </div>
  );
}
