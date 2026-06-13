import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Valuintcorp",
    template: "%s | Valuintcorp",
  },
  description:
    "Bookkeeping dan advisory keuangan untuk UMKM yang ingin tumbuh lebih tertata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans bg-background text-on-surface antialiased flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <a
          aria-label="Chat dengan Valuintcorp"
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-xl shadow-emerald-900/20 transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8 md:h-16 md:w-16"
          href="/kontak"
          title="Chat dengan Valuintcorp"
        >
          <svg
            aria-hidden="true"
            className="h-7 w-7 md:h-8 md:w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-surface-container-highest px-3 py-1.5 text-sm font-medium text-on-surface opacity-0 shadow-md transition-opacity group-hover:opacity-100 md:block">
            Chat dengan Valuintcorp
          </span>
        </a>
      </body>
    </html>
  );
}
