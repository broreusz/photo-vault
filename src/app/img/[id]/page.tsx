import FullImageView from "~/components/full-image-view";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;

  return (
    <FullImageView id={photoId} />
  );
}