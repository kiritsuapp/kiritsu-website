import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiritsu.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kiritsu — Study with intention",
    template: "%s · Kiritsu",
  },
  description:
    "A private, local-first study companion for planning, focus, spaced repetition, and honest progress.",
  applicationName: "Kiritsu",
  keywords: [
    "study planner",
    "spaced repetition",
    "focus timer",
    "offline study app",
    "local-first",
  ],
  authors: [{ name: "Kiritsu", url: siteUrl }],
  creator: "Kiritsu",
  icons: { icon: "/kiritsu.png", apple: "/kiritsu.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kiritsu",
    description: "Your study system, calm and entirely yours.",
    type: "website",
    url: "/",
    siteName: "Kiritsu",
    images: [{ url: "/kiritsu.png", width: 512, height: 512, alt: "Kiritsu" }],
  },
  twitter: {
    card: "summary",
    title: "Kiritsu — Study with intention",
    description: "Your study system, calm and entirely yours.",
    images: ["/kiritsu.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="wordmark" href="/">
            <img src="/kiritsu.png" alt="" />
            <span>Kiritsu</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/docs">Docs</Link>
            <Link href="/download">Download</Link>
            <a
              href="https://github.com/kiritsuapp/kiritsu-releases/releases"
              target="_blank"
              rel="noreferrer"
            >
              Releases
            </a>
            <Link className="nav-donate" href="/donate">
              Donate
            </Link>
          </nav>
        </header>
        {children}
        <footer>
          <div>
            <Link className="wordmark" href="/">
              <img src="/kiritsu.png" alt="" />
              <span>Kiritsu</span>
            </Link>
            <p>Study with intention. Keep your data.</p>
          </div>
          <div className="footer-links">
            <Link href="/docs">Documentation</Link>
            <Link href="/download">Downloads</Link>
            <a
              href="https://github.com/kiritsuapp/kiritsu-releases/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              MIT License
            </a>
          </div>
          <p className="footer-meta">
            © {new Date().getFullYear()} Kiritsu · Free forever
          </p>
        </footer>
      </body>
    </html>
  );
}
