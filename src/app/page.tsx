import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"; // to avoid caching of the page as we are fetching data from the database

export async function Images() {
  const photos = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="w-48">
          <img src={photo.url} alt={photo.name} />
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Welcome to the Photo Vault</h1>
          <p className="text-lg">Please sign in to view the gallery</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
