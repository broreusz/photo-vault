import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: string }) {
    const idAsNumber = Number(props.id);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    const image = await getImage(idAsNumber);

    const userInfo = await (await clerkClient()).users.getUser(image.userId);

    return (
        <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
            <div className="flex-shrink flex-grow flex justify-center items-center">
                <img src={image.url} className=" object-contain" alt={image.name} />
            </div>
            <div className="flex min-h-full w-56 flex-shrink-0 flex-col">
                <div className="border-b p-2 text-center text-xl">{image.name}</div>

                <div className="p-2">
                    <div>Uploaded By:</div>
                    <div>{userInfo.fullName}</div>
                </div>

                <div className="p-2">
                    <div>Created On:</div>
                    <div>{image.createdAt.toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
}