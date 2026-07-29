import Link from "next/link";

const pillars = [
  ["Shape the work", "Build materials as deep section trees, connect concepts across sources, and keep separate workspaces for separate goals."],
  ["Remember on purpose", "Two-track spaced repetition schedules study and practice sessions—not artificial flashcards."],
  ["Focus without friction", "Pomodoro, custom cycles, and freeform timing flow directly into an immutable activity history."],
  ["See honest progress", "Local analytics show time, accuracy, consistency, review adherence, and the workload ahead."],
];

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">Local-first study companion</p><h1>Your study system,<br/><em>calm and entirely yours.</em></h1><p className="lede">Kiritsu brings planning, deep focus, spaced repetition, and meaningful analytics into one private desktop app. No account. No telemetry. No cloud dependency.</p><div className="hero-actions"><Link className="button primary" href="/download">Download Kiritsu</Link><Link className="button" href="/docs">Read the docs</Link></div><small>Free and open source · Windows, macOS, and Linux</small></div>
      <div className="app-window" aria-label="Kiritsu interface preview"><div className="window-bar"><i/><i/><i/><span>Kiritsu</span></div><div className="mock-app"><aside><b>律 Kiritsu</b><span className="selected">Today</span><span>Focus Space</span><span>Workflow</span><span>Analytics</span><span>Library</span></aside><div className="mock-content"><p className="eyebrow">Your review horizon</p><h2>Good morning.</h2><div className="mock-stats"><article><small>Focused today</small><b>1h 25m</b></article><article><small>Due now</small><b>8</b></article><article><small>Current streak</small><b>12d</b></article></div><div className="mock-panel"><span>Japanese Foundations</span><b>Katakana recognition</b><div className="mock-progress"><i/></div><small>Practice review · due today</small></div></div></div></div>
    </section>
    <section className="principle"><p className="eyebrow">The principle</p><blockquote>“The activity log is truth.<br/>Everything else is a view.”</blockquote><p>Kiritsu derives schedules, progress, and analytics from your real study history. Edit something and the future is replayed deterministically.</p></section>
    <section className="feature-section"><div className="section-heading"><p className="eyebrow">One thoughtful system</p><h2>From intention to evidence.</h2></div><div className="feature-grid">{pillars.map(([title,copy], index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="privacy"><div><p className="eyebrow">Private by architecture</p><h2>Your work stays on your machine.</h2></div><div className="privacy-list"><p><b>Local SQLite</b><span>Every workspace is an independent, portable database.</span></p><p><b>Zero telemetry</b><span>Kiritsu does not collect usage, identity, or study data.</span></p><p><b>Offline forever</b><span>Only an explicit GitHub update check uses the network.</span></p></div></section>
    <section className="closing"><img src="/kiritsu.png" alt=""/><h2>Give your effort a shape.</h2><p>Kiritsu is free, open source, and ready for your next study session.</p><div className="hero-actions"><Link className="button primary" href="/download">Download Kiritsu</Link><Link className="button" href="/donate">Support the project</Link></div></section>
  </main>;
}
