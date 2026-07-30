import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Kiritsu for Windows, macOS, and Linux. Free forever.",
  alternates: { canonical: "/download" },
};

type Asset = { name: string; browser_download_url: string };
type Release = {
  tag_name: string;
  html_url: string;
  published_at: string;
  assets: Asset[];
};

const releasesUrl = "https://github.com/kiritsuapp/kiritsu-releases/releases";

async function latestRelease(): Promise<Release | undefined> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/kiritsuapp/kiritsu-releases/releases/latest",
      {
        next: { revalidate: 900 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!response.ok) return;
    return response.json();
  } catch {
    return;
  }
}

function find(assets: Asset[], suffix: string) {
  return assets.find((asset) => asset.name.endsWith(suffix))
    ?.browser_download_url;
}

function Command({ children }: { children: string }) {
  return (
    <pre className="install-command">
      <code>{children}</code>
    </pre>
  );
}

export default async function Download() {
  const release = await latestRelease();
  const assets = release?.assets || [];
  const fallback = release?.html_url || releasesUrl;

  return (
    <main className="document-page download-page">
      <header>
        <p className="eyebrow">Download</p>
        <h1>Kiritsu for your desktop.</h1>
        <p>
          {release
            ? `Latest release ${release.tag_name} · Free forever.`
            : "Free installers from Kiritsu’s public release channel."}
        </p>
      </header>

      {!release && (
        <div className="release-warning" role="status">
          <b>Release information is temporarily unavailable.</b>
          <span>
            Downloads lead to the public release page until GitHub responds.
          </span>
        </div>
      )}

      <section className="platform-install featured-install">
        <div className="platform-copy">
          <span className="platform-label">Windows 10 and 11</span>
          <h2>Install Kiritsu for Windows.</h2>
          <p>
            The x64 setup is available now. WinGet and Chocolatey submissions
            are undergoing their first community-catalog reviews.
          </p>
          <div className="download-actions">
            <a
              className="button primary"
              href={find(assets, "x64-setup.exe") || fallback}
            >
              Download x64 setup
            </a>
            <a
              className="button"
              href={find(assets, "x64_en-US.msi") || fallback}
            >
              Download MSI
            </a>
          </div>
          <div className="pending-commands">
            <small>Available after catalog approval</small>
            <Command>winget install KiritsuApp.Kiritsu</Command>
            <Command>choco install kiritsu</Command>
          </div>
        </div>
        <div className="platform-status">
          <span>Package managers</span>
          <strong>In review</strong>
          <small>
            Direct installers are the supported path while catalog moderation
            completes.
          </small>
        </div>
      </section>

      <section className="platform-install">
        <div className="platform-copy">
          <span className="platform-label">Linux x86-64</span>
          <h2>Native packages, your choice.</h2>
          <p>
            Use a direct package or add the official signed repository for
            automatic updates through APT or DNF.
          </p>
          <div className="download-actions">
            <a
              className="button primary"
              href={find(assets, "amd64.deb") || fallback}
            >
              Download .deb
            </a>
            <a className="button" href={find(assets, "x86_64.rpm") || fallback}>
              Download .rpm
            </a>
            <a
              className="button"
              href={find(assets, "amd64.AppImage") || fallback}
            >
              Download AppImage
            </a>
          </div>
          <details className="repo-instructions">
            <summary>Signed repository setup</summary>
            <div>
              <small>Debian / Ubuntu</small>
              <Command>{`sudo install -d -m 0755 /etc/apt/keyrings
curl -fsSL https://kiritsuapp.github.io/kiritsu-packages/kiritsu-archive-keyring.asc | sudo tee /etc/apt/keyrings/kiritsu-archive-keyring.asc >/dev/null
curl -fsSL https://kiritsuapp.github.io/kiritsu-packages/kiritsu.sources | sudo tee /etc/apt/sources.list.d/kiritsu.sources >/dev/null
sudo apt update
sudo apt install kiritsu`}</Command>
            </div>
            <div>
              <small>Fedora / RPM</small>
              <Command>{`sudo curl -fsSL https://kiritsuapp.github.io/kiritsu-packages/kiritsu.repo -o /etc/yum.repos.d/kiritsu.repo
sudo dnf install kiritsu`}</Command>
            </div>
          </details>
        </div>
        <div className="platform-status">
          <span>Repository signing key</span>
          <strong>47E0 2959 … A5A5</strong>
          <small>
            Full fingerprint is published with the repository instructions.
          </small>
        </div>
      </section>

      <section className="platform-install">
        <div className="platform-copy">
          <span className="platform-label">macOS</span>
          <h2>Choose your Mac.</h2>
          <p>
            Direct disk images are available for Apple Silicon and Intel.
            Kiritsu is not currently notarized through a paid Apple Developer
            membership, so macOS may request manual confirmation on first
            launch.
          </p>
          <div className="download-actions">
            <a
              className="button primary"
              href={find(assets, "aarch64.dmg") || fallback}
            >
              Apple Silicon .dmg
            </a>
            <a className="button" href={find(assets, "x64.dmg") || fallback}>
              Intel .dmg
            </a>
          </div>
        </div>
        <div className="platform-status">
          <span>Architectures</span>
          <strong>Apple Silicon + Intel</strong>
          <small>No Mac App Store account is required.</small>
        </div>
      </section>

      <section className="install-note">
        <div>
          <p className="eyebrow">Trust and updates</p>
          <h2>Every update is signed.</h2>
          <p>
            Kiritsu verifies signed update artifacts before installation. It
            only contacts GitHub when you explicitly check for updates or enable
            automatic checks.
          </p>
        </div>
        <a href={releasesUrl} target="_blank" rel="noreferrer">
          Checksums, signatures, and release history →
        </a>
      </section>
    </main>
  );
}
