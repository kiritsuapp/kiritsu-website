import Link from "next/link";

const guides = [
  ["Getting started", "Install Kiritsu, create your first workspace, and log a study session."],
  ["Workspaces", "Separate Japanese, university preparation, or any other goal into isolated databases."],
  ["Library and topics", "Model materials as trees and connect sections to the concepts they teach."],
  ["Reviews", "Understand Study and Practice tracks, ratings, due queues, and daily caps."],
  ["Focus Space", "Use Pomodoro, custom cycles, freeform timing, sounds, notifications, and tray behavior."],
  ["Data safety", "Back up, restore, import, export, migrate computers, and start fresh safely."],
];

export default function Docs() { return <main className="document-page"><header><p className="eyebrow">Documentation</p><h1>Learn Kiritsu.</h1><p>Concise guides for building a study system that remains understandable as it grows.</p></header><div className="docs-layout"><aside><b>On this page</b>{guides.map(([title])=><a key={title} href={`#${title.toLowerCase().replaceAll(" ","-")}`}>{title}</a>)}</aside><article>{guides.map(([title,copy], index)=><section id={title.toLowerCase().replaceAll(" ","-")} key={title}><span>Guide {index+1}</span><h2>{title}</h2><p>{copy}</p><p className="docs-placeholder">The complete illustrated guide will be added during the 1.0 documentation pass. Until then, the app’s contextual controls and onboarding cover this workflow.</p></section>)}</article></div><div className="docs-help"><h2>Need a hand?</h2><p>Open a discussion or report a reproducible problem on GitHub.</p><a className="button" href="https://github.com/kiritsuapp/kiritsu/issues">Visit GitHub issues</a> <Link className="button primary" href="/download">Download</Link></div></main>; }
