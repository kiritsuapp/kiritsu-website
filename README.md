# Kiritsu website

Public website, documentation, release downloads, and donation entry point for [Kiritsu](https://github.com/kiritsuapp/kiritsu-releases).

## Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin and
`NEXT_PUBLIC_STRIPE_DONATION_URL` to the Stripe-hosted customer-chooses-price
Payment Link. No Stripe secret is used by this repository. When the donation
URL is absent, the site renders an unavailable state instead of a dead link.

## Deployment

Import this repository into Vercel, use the default Next.js settings, add both
environment variables, and attach the custom domain. Pushes to `main` deploy to
production; pull requests receive preview deployments.

### Production cutover

1. Build and inspect a Vercel preview deployment.
2. Add `NEXT_PUBLIC_SITE_URL=https://kiritsu.app` for Production, Preview, and
   Development.
3. Add the live Stripe Payment Link to `NEXT_PUBLIC_STRIPE_DONATION_URL` for
   Production and Preview.
4. Detach `kiritsu.app` and `www.kiritsu.app` from the legacy Vercel project.
5. Attach both domains to this project and make `kiritsu.app` canonical.
6. Verify `/`, `/docs`, `/download`, `/donate`, `/robots.txt`, and
   `/sitemap.xml` over HTTPS.
7. Archive the legacy project only after the new production deployment passes.
