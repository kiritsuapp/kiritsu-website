import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to organize, focus, review, and protect your data with Kiritsu.",
  alternates: { canonical: "/docs" },
};

const navigation = [
  ["Start here", "start"],
  ["Library and topics", "library"],
  ["Workflow", "workflow"],
  ["Focus Space", "focus"],
  ["Reviews", "reviews"],
  ["Activity and analytics", "activity"],
  ["Backups and migration", "data"],
  ["Settings and shortcuts", "settings"],
];

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="doc-step">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function Docs() {
  return (
    <main className="document-page">
      <header>
        <p className="eyebrow">Documentation</p>
        <h1>Build a study system you understand.</h1>
        <p>
          Everything Kiritsu records stays connected: your library defines the
          work, Focus Space captures effort, and the activity history drives
          progress, reviews, and analytics.
        </p>
      </header>

      <div className="docs-layout">
        <aside aria-label="Documentation sections">
          <b>On this page</b>
          {navigation.map(([title, id]) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </aside>

        <article className="docs-content">
          <section id="start">
            <span>01 · Start here</span>
            <h2>Your first session</h2>
            <p>
              Kiritsu works without an account. On first launch it creates a
              local SQLite workspace in your operating system’s application-data
              directory.
            </p>
            <div className="doc-steps">
              <Step number="1" title="Add a material">
                <p>
                  Open <b>Library</b>, create a book, course, article, video, or
                  custom material, then describe its unit range when useful.
                </p>
              </Step>
              <Step number="2" title="Give it structure">
                <p>
                  Add sections and nest them to match the real source. A section
                  may use a different unit kind from its material.
                </p>
              </Step>
              <Step number="3" title="Connect a topic">
                <p>
                  Create a topic and link it to the sections that teach or
                  practice that concept.
                </p>
              </Step>
              <Step number="4" title="Record the work">
                <p>
                  Start from Focus Space or add a manual activity. Progress and
                  analytics update from the activity history.
                </p>
              </Step>
            </div>
            <div className="callout">
              <b>Local-first means local responsibility.</b>
              <p>
                Create a backup before making large changes or moving to another
                computer.
              </p>
            </div>
          </section>

          <section id="library">
            <span>02 · Library and topics</span>
            <h2>Model the material, not the app.</h2>
            <p>
              A material is the source you are studying. Sections form an
              arbitrarily deep tree, so a textbook can contain parts, chapters,
              lessons, exercises, or any structure you need.
            </p>
            <h3>Units and progress</h3>
            <p>
              Set a start and end unit when progress can be measured as a span.
              The start must not exceed the end. Overlapping sibling spans are
              allowed because real materials overlap, but Kiritsu warns you
              before saving.
            </p>
            <p>
              Progress is derived from logged activity rather than typed into a
              percentage field. Reordering or nesting sections changes
              presentation without falsifying the history.
            </p>
            <h3>Topics</h3>
            <p>
              Topics connect the same concept across different sections. When
              you choose a linked section while logging or focusing, Kiritsu
              preselects its topic when possible. A section may link to more
              than one topic.
            </p>
            <h3>Quick actions</h3>
            <p>
              Right-click materials, sections, and topics for common actions.
              Sections can also be dragged to reorder, nested onto another
              section, or dropped at the tree root to become standalone again.
            </p>
          </section>

          <section id="workflow">
            <span>03 · Workflow</span>
            <h2>Turn intention into a visible queue.</h2>
            <p>
              Workflow cards represent concrete study tasks. Create your own
              columns, reorder cards vertically, and drag cards between columns.
              Each column scrolls independently so the board remains within the
              window.
            </p>
            <h3>Completing a card</h3>
            <p>
              Moving a card into the completion column can register the
              completed work in the activity log. Moving it back out prompts
              before reversing that completion-derived progress, protecting the
              activity history from accidental edits.
            </p>
            <h3>Focus groups</h3>
            <p>
              Use focus groups to collect the cards you want available in Focus
              Space. The right-click menu provides the same movements when drag
              and drop is inconvenient.
            </p>
          </section>

          <section id="focus">
            <span>04 · Focus Space</span>
            <h2>Keep the timer attached to the work.</h2>
            <p>
              Choose a material, section, topic, or workflow card before
              starting. Use standard Pomodoro, a custom focus-and-break cycle,
              or a freeform stopwatch.
            </p>
            <ul>
              <li>
                <b>Pomodoro:</b> structured focus and break intervals.
              </li>
              <li>
                <b>Custom Pomodoro:</b> choose your own focus and break
                duration.
              </li>
              <li>
                <b>Freeform:</b> count upward until the work is finished.
              </li>
            </ul>
            <p>
              The timer continues in the background and while Kiritsu is
              minimized to the tray. Sounds and desktop notifications can
              announce focus and break transitions. Closing can minimize to tray
              when enabled; use <b>Exit</b> from the tray menu to quit fully.
            </p>
            <h3>Practice sessions</h3>
            <p>
              Finishing normal or review practice always opens a result modal
              for attempted and correct counts. These values feed accuracy and
              review history, so enter them before completing the session.
            </p>
            <h3>Interruptions</h3>
            <p>
              <b>Interruption +1</b> increments the session’s interruption count
              without stopping the timer. It is an honest annotation for later
              reflection, not a punishment or a change to the session duration.
            </p>
          </section>

          <section id="reviews">
            <span>05 · Reviews</span>
            <h2>Review real study and practice.</h2>
            <p>
              Kiritsu schedules two independent tracks: <b>Study</b> for
              understanding and exposure, and <b>Practice</b> for retrieval or
              application. Reviews are derived by replaying relevant activity
              history, so editing an activity deterministically updates what
              comes next.
            </p>
            <h3>Working the queue</h3>
            <p>
              Open the review queue, select a due item, complete the work, then
              record the outcome. Optional daily limits help keep the queue
              realistic; they are strongly recommended when spaced repetition is
              central to your routine.
            </p>
            <p>
              Use the rating that describes the result, not the effort you hoped
              to give. Practice accuracy is recorded separately through
              attempted and correct counts.
            </p>
          </section>

          <section id="activity">
            <span>06 · Activity and analytics</span>
            <h2>The activity log is the source of truth.</h2>
            <p>
              Manual sessions and Focus Space completions become append-friendly
              activity records. Existing records retain edit tracking so
              corrections remain distinguishable from original history.
            </p>
            <h3>Correcting history</h3>
            <p>
              Edit an activity when its duration, association, or practice
              result is wrong. Delete only when the event did not happen.
              Derived progress, schedules, and analytics are recalculated from
              the corrected history.
            </p>
            <h3>Reading analytics</h3>
            <p>
              Use the 7-day view for daily rhythm, 30 and 90 days for trends,
              and the yearly view for long-term consistency. Study-time groups
              follow calendar periods so dense timelines remain readable at
              every window size.
            </p>
          </section>

          <section id="data">
            <span>07 · Backups and migration</span>
            <h2>Your data should be portable.</h2>
            <h3>Full backup</h3>
            <p>
              Use <b>Settings → Data safety → Create backup</b> for the most
              complete restorable snapshot. To move computers, install Kiritsu
              on the new machine and choose <b>Restore backup</b>.
            </p>
            <h3>JSON export and import</h3>
            <p>
              JSON is the readable, portable representation of your library,
              topics, workflow, activities, and related settings. Export it for
              inspection or migration, and import through Data safety. Kiritsu
              validates the file before replacing data.
            </p>
            <h3>Start fresh</h3>
            <p>
              <b>Erase workspace and start fresh</b> permanently removes current
              study data after a confirmation modal. Create and verify a backup
              first. Appearance and application preferences may be managed
              separately from study records.
            </p>
            <div className="callout">
              <b>Recommended routine</b>
              <p>
                Keep at least two backup copies, with one outside the computer
                running Kiritsu. Test restoration occasionally.
              </p>
            </div>
          </section>

          <section id="settings">
            <span>08 · Settings and shortcuts</span>
            <h2>Make Kiritsu fit the way you work.</h2>
            <p>
              Choose light, dark, or system appearance; control timer sounds and
              notifications; enable automatic update checks; and decide whether
              closing the window minimizes to the tray.
            </p>
            <h3>Command palette</h3>
            <p>
              Open the command palette for fast navigation and common actions.
              Type to filter, use the arrow keys to move, press <kbd>Enter</kbd>{" "}
              to run, and <kbd>Esc</kbd> to close.
            </p>
            <h3>Updates and privacy</h3>
            <p>
              Kiritsu makes no network requests for accounts, telemetry,
              advertising, or study synchronization. The only exception is the
              user-controlled GitHub update check. Signed updates are verified
              before installation.
            </p>
          </section>
        </article>
      </div>

      <div className="docs-help">
        <div>
          <p className="eyebrow">Still stuck?</p>
          <h2>Report a reproducible problem.</h2>
          <p>
            Include your operating system, Kiritsu version, what you expected,
            and the steps that reproduce it. Never attach a backup containing
            private study data.
          </p>
        </div>
        <div className="download-actions">
          <a
            className="button"
            href="https://github.com/kiritsuapp/kiritsu-releases/issues"
            target="_blank"
            rel="noreferrer"
          >
            Open support tracker
          </a>
          <Link className="button primary" href="/download">
            Download Kiritsu
          </Link>
        </div>
      </div>
    </main>
  );
}
