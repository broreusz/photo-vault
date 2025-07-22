import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: string }) {
    const idAsNumber = parseInt(props.id);

    if (isNaN(idAsNumber)) {
        return <div>Invalid image ID</div>;
    }

    const image = await getImage(idAsNumber);

    return (
        <div className="flex justify-center items-center">
            <img src={image.url} alt={image.name} width={192} height={192} style={{ objectFit: "contain" }} />
        </div>
    );
}