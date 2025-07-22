import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: string }) {
    const idAsNumber = parseInt(props.id);

    if (isNaN(idAsNumber)) {
        return <div>Invalid image ID</div>;
    }

    const image = await getImage(idAsNumber);

    return (
        <div className="w-full h-full max-h-full flex">
            <div className="flex justify-center items-center flex-shrink max-h-full">
                <img src={image.url} alt={image.name} className="max-h-full object-contain" />
            </div>
            <div className="w-48 flex flex-shrink-0 flex-col gap-2">
                <div className="text-xl font-bold">
                    {image.name}
                </div>
            </div>
        </div>
    );
}