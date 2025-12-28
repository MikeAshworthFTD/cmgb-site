import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean My Gutters Bend | Gutter Cleaning in Bend, OR",
  description:
    "Professional residential gutter cleaning in Bend, Oregon. Hand-cleaned debris removal, downspout flushing, and clean job sites. Call or text for a free estimate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="border-b">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Clean My Gutters Bend
            </Link>

            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/service-areas" className="hover:underline">
              Service Areas
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-600 flex flex-col gap-2">
            <p>
              © {new Date().getFullYear()} Clean My Gutters Bend. Bend, Oregon.
            </p>
            <p>
              Call/Text:{" "}
              <a className="underline" href="tel:+15038901595">
                (503) 890-1595
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
