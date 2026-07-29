type Asset = { name: string; browser_download_url: string };
type Release = { tag_name: string; html_url: string; assets: Asset[] };

async function latestRelease(): Promise<Release | undefined> {
  try {
    const response = await fetch("https://api.github.com/repos/kiritsuapp/kiritsu/releases/latest", { next: { revalidate: 900 } });
    if (!response.ok) return;
    return response.json();
  } catch { return; }
}

function find(assets: Asset[], suffix: string) { return assets.find((asset) => asset.name.endsWith(suffix))?.browser_download_url; }

export default async function Download() {
  const release = await latestRelease();
  const assets = release?.assets || [];
  const platforms = [
    ["Windows", "Windows 10 or newer · x64", find(assets,"x64-setup.exe"), "Download .exe"],
    ["macOS", "Apple Silicon", find(assets,"aarch64.dmg"), "Download .dmg"],
    ["macOS", "Intel", find(assets,"x64.dmg"), "Download .dmg"],
    ["Linux", "AppImage · x64", find(assets,"amd64.AppImage"), "Download AppImage"],
    ["Linux", "Debian / Ubuntu · x64", find(assets,"amd64.deb"), "Download .deb"],
  ];
  return <main className="document-page"><header><p className="eyebrow">Download</p><h1>Kiritsu for desktop.</h1><p>{release ? `Latest release ${release.tag_name}` : "Signed installers published through GitHub Releases."}</p></header><div className="download-grid">{platforms.map(([name,detail,url,label])=><article key={`${name}-${detail}`}><span>{name}</span><h2>{detail}</h2><a className={`button ${url ? "primary":""}`} href={url || release?.html_url || "https://github.com/kiritsuapp/kiritsu/releases"}>{url ? label : "View releases"}</a></article>)}</div><section className="install-note"><h2>Updates stay trustworthy.</h2><p>Kiritsu verifies signed update artifacts before installation. The application only contacts GitHub when you explicitly check for updates or enable automatic checks.</p><a href="https://github.com/kiritsuapp/kiritsu/releases">Checksums, signatures, and every release →</a></section></main>;
}
