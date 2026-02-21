import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Research Copilot",
  description: "Citation-aware AI research assistant",

  icons: {
    icon: "/logo.png",      // favicon
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* TOP HEADER */}
        <header className="flex items-center gap-3 px-6 py-3 border-b bg-white">

          <Image
            src="/logo.png"
            alt="AI Research Copilot"
            width={32}
            height={32}
            priority
          />

          <h1 className="font-semibold text-lg">
            AI Research Copilot
          </h1>

        </header>

        {children}

      </body>
    </html>
  );
}