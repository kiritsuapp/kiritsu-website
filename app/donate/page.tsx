import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Kiritsu and help keep it free forever.",
  alternates: { canonical: "/donate" },
};

const donationUrl = process.env.NEXT_PUBLIC_STRIPE_DONATION_URL;

export default function Donate() {
  return (
    <main className="donate-page">
      <section>
        <p className="eyebrow">Support Kiritsu</p>
        <h1>Help careful software stay free.</h1>
        <p>
          Kiritsu has no ads, subscriptions, accounts, or telemetry. If it helps
          you study, a contribution supports development, distribution, and the
          time required to keep it dependable.
        </p>
        <div className="donation-card">
          <span>One-time contribution</span>
          <b>Name your price</b>
          <p>
            Payment is securely handled by Stripe. Kiritsu never receives or
            stores your card details.
          </p>
          {donationUrl ? (
            <a
              className="button primary"
              href={donationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Continue securely to Stripe
            </a>
          ) : (
            <p className="configuration-note" role="status">
              <b>Donations are temporarily unavailable.</b>
              <br />
              The Stripe payment link has not been configured for this
              deployment.
            </p>
          )}
        </div>
        <p className="donate-note">
          Can’t donate? Using Kiritsu, sharing it, and reporting clear bugs all
          help. Donors may optionally be thanked in the Hall of Contributors
          when it launches.
        </p>
      </section>
    </main>
  );
}
