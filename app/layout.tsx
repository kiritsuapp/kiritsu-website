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
  icons: { icon: "/kiritsu.png" },
  openGraph: {
    title: "Kiritsu",
    description: "Your study system, calm and entirely yours.",
    type: "website",
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
            <a href="https://github.com/kiritsuapp/kiritsu-releases/releases">
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
            <a href="https://github.com/kiritsuapp/kiritsu-releases/blob/main/LICENSE">
              MIT License
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
