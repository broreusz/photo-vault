import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // to avoid caching of the page as we are fetching data from the database

const mockedUrls = [
  "https://drmzzs0j0n.ufs.sh/f/VampSEkOiBfAeQZll4pFOdJwZPAskgrcV01fB8lCURqSIDGu",
  "https://drmzzs0j0n.ufs.sh/f/VampSEkOiBfAtx3eAFOhw8iE9LHDBdxfcQv5XUpaCgqrJjPS",
  "https://drmzzs0j0n.ufs.sh/f/VampSEkOiBfA2dAIz6MJVLyhOE4U9NWrC6o3uMI5ae7QBpFR",
  "https://drmzzs0j0n.ufs.sh/f/VampSEkOiBfAcFVX2rPYav0tLEfRlOCdWTyb3KmUws1hMpig",
]

const mockedPhotos = mockedUrls.map((url) => ({
  url,
  id: url.split("/").pop(),
}));

export default async function HomePage() {
  const photos = await db.query.posts.findMany();
  console.log(photos);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockedPhotos, ...mockedPhotos, ...mockedPhotos].map((photo, index) => (
          <div key={(photo.id || "mocked-") + index} className="w-48">
            <img src={photo.url} alt={"Image-" + photo.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
