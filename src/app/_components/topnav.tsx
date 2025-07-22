"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopNav() {
    const router = useRouter();

    return (
        <nav className="w-full flex items-center justify-between border-b p-4 text-xl font-semibold ">
            <div className="flex items-center gap-2 ">
                <Link href="/">
                    Gallery
                </Link>
            </div>

            <div className="flex items-center gap-2">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                        router.refresh();
                    }} />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}