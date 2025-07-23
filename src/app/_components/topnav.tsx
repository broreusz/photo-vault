import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import UploadButton from "./upload-button";

export default function TopNav() {

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
                    <UploadButton />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}