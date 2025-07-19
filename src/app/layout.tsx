import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Photo-Vault",
  description: "Web App to store your photos",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between border-b p-4 text-xl font-semibold ">
      <div className="flex items-center gap-2 ">
        Gallery
      </div>

      <div className="flex items-center gap-2">
        Sign In
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="flex flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
