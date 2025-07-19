import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // to avoid caching of the page as we are fetching data from the database

export default async function HomePage() {
  const photos = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="w-48">
            <img src={photo.url} alt={photo.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
