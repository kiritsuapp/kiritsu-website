# Kiritsu website

Public website, documentation, release downloads, and donation entry point for [Kiritsu](https://github.com/kiritsuapp/kiritsu).

## Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin and `NEXT_PUBLIC_STRIPE_DONATION_URL` to the Stripe-hosted customer-chooses-price Payment Link. No Stripe secret is used by this repository.

## Deployment

Import this repository into Vercel, use the default Next.js settings, add both environment variables, and attach the custom domain. Pushes to `main` deploy to production; pull requests receive preview deployments.
