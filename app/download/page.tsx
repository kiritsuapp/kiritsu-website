type Asset = { name: string; browser_download_url: string };
type Release = { tag_name: string; html_url: string; assets: Asset[] };

const releasesUrl = "https://github.com/kiritsuapp/kiritsu-releases/releases";

async function latestRelease(): Promise<Release | undefined> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/kiritsuapp/kiritsu-releases/releases/latest",
      { next: { revalidate: 900 } },
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
        <h1>Kiritsu for desktop.</h1>
        <p>
          {release
            ? `Latest release ${release.tag_name} · Free forever.`
            : "Free desktop installers published through the official Kiritsu release channel."}
        </p>
      </header>

      <section className="platform-install featured-install">
        <div className="platform-copy">
          <span className="platform-label">Windows</span>
          <h2>Install with WinGet.</h2>
          <p>
            The easiest path for Windows 10 and 11. The package enters the
            community catalog after Microsoft accepts its initial manifest.
          </p>
          <Command>winget install KiritsuApp.Kiritsu</Command>
          <a
            className="button"
            href={find(assets, "x64-setup.exe") || fallback}
          >
            Download x64 setup directly
          </a>
        </div>
        <div className="platform-status">
          <span>WinGet catalog</span>
          <strong>Submission prepared</strong>
          <small>
            Microsoft Store support is planned for a future release.
          </small>
        </div>
      </section>

      <section className="platform-install">
        <div className="platform-copy">
          <span className="platform-label">Linux</span>
          <h2>Native packages, your choice.</h2>
          <p>
            Official APT and RPM repositories are in preparation. Direct Debian
            and AppImage packages remain available today.
          </p>
          <div className="command-grid">
            <div>
              <small>Debian / Ubuntu</small>
              <Command>sudo apt install kiritsu</Command>
            </div>
            <div>
              <small>Fedora / RHEL</small>
              <Command>sudo dnf install kiritsu</Command>
            </div>
          </div>
          <div className="download-actions">
            <a
              className="button primary"
              href={find(assets, "amd64.deb") || fallback}
            >
              Download .deb
            </a>
            <a
              className="button"
              href={find(assets, "amd64.AppImage") || fallback}
            >
              Download AppImage
            </a>
          </div>
        </div>
        <div className="platform-status">
          <span>Package repositories</span>
          <strong>Coming next</strong>
          <small>
            Repository setup instructions will appear here when live.
          </small>
        </div>
      </section>

      <section className="platform-install">
        <div className="platform-copy">
          <span className="platform-label">macOS</span>
          <h2>Choose your Mac.</h2>
          <p>Direct disk images for both modern and Intel-based Macs.</p>
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
        <h2>Updates stay trustworthy.</h2>
        <p>
          Kiritsu verifies signed update artifacts before installation. The
          application only contacts GitHub when you explicitly check for updates
          or enable automatic checks.
        </p>
        <a href={releasesUrl}>Checksums, signatures, and every release →</a>
      </section>
    </main>
  );
}
