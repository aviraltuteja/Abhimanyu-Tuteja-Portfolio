import { notFound } from "next/navigation";
import { PhotoModal } from "@/app/components/PhotoGallery/PhotoModal";
import { getPhotoById, PHOTOS } from "@/app/data/photos";

type PhotoModalPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return PHOTOS.map((photo) => ({
    id: photo.id,
  }));
}

export default async function PhotoModalPage({ params }: PhotoModalPageProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return <PhotoModal photo={photo} />;
}
