import FullImageView from "~/components/full-image-view";

export const dynamic = "force-dynamic"; // to avoid caching of the page as we are fetching data from the database

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