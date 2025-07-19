import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
        <nav className="w-full flex items-center justify-between border-b p-4 text-xl font-semibold ">
            <div className="flex items-center gap-2 ">
                Gallery
            </div>

            <div className="flex items-center gap-2">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}