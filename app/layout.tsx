import type { Metadata } from "next";
import "../public/globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hey Chat",
  description: "Hey is a personnel chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-screen ">
        <header className="px-10 py-5 bg-gray-200">
          <div className="flex space-x-3 items-center">
            <Image src="/HeyChat.svg" alt="HeyChat" width={30} height={30} />
            <h2 className="text-lg font-bold opacity-60">Hey Chat</h2>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
