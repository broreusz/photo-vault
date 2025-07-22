import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNumber = parseInt(photoId);

  if (isNaN(idAsNumber)) {
    return <div>Invalid image ID</div>;
  }

  const image = await getImage(idAsNumber);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={image.url} alt={image.name} width={192} height={192} style={{ objectFit: "contain" }} />
    </div>
  );
}