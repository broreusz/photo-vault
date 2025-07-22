import { Modal } from "./modal";
import FullImageView from "~/components/full-image-view";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;

  return (
    <Modal>
      <FullImageView id={photoId} />
    </Modal>
  );
}