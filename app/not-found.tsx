import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page isn’t part of the plan.</h1>
      <p>
        The link may be outdated, but your next study session does not have to
        be.
      </p>
      <Link className="button primary" href="/">
        Return home
      </Link>
    </main>
  );
}
