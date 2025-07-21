import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
    const user = await auth()

    if (!user.userId) {
        throw new Error("Unauthorized");
    }

    return await db.query.images.findMany({
        where: (images, { eq }) => eq(images.userId, user.userId),
        orderBy: (images, { desc }) => [desc(images.createdAt)],
    });
}