# BeardGloss — DTC eCommerce MVP

A premium, dark-themed Astro + Tailwind storefront for a single hero product, with
guest checkout (no account required) and a placeholder-ready PayFast integration point.

## Tech stack

- [Astro](https://astro.build) (static site generation)
- [Tailwind CSS](https://tailwindcss.com)
- Vanilla JS cart (localStorage) — no framework/runtime dependency, ships fast
- Deploys as a static site to Vercel

## Folder structure

```
beardgloss/
├── public/
│   ├── images/
│   │   ├── favicon.svg
│   │   └── og-cover.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BottleArt.astro        # signature SVG product illustration
│   │   ├── FeaturedProduct.astro
│   │   ├── FinalCTA.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Testimonials.astro
│   │   ├── ValueProps.astro
│   │   └── WhatsAppButton.astro
│   ├── data/
│   │   └── product.js             # sample product, testimonials, value props
│   ├── layouts/
│   │   └── BaseLayout.astro       # SEO meta, fonts, nav/footer shell
│   ├── pages/
│   │   ├── about.astro
│   │   ├── cart.astro
│   │   ├── checkout.astro
│   │   ├── guides.astro
│   │   ├── index.astro
│   │   ├── success.astro
│   │   └── product/
│   │       └── beard-gloss.astro
│   ├── scripts/
│   │   ├── cart.js                # localStorage cart store
│   │   ├── order.js               # sessionStorage order handoff to /success
│   │   └── reveal.js              # scroll-reveal animation utility
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── vercel.json
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Astro; `vercel.json` in this repo pins the
build command and output directory explicitly.

**Option B — Git + Vercel dashboard**

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard, "Add New Project" → import the repo.
3. Framework preset: Astro (auto-detected). Build command `npm run build`,
   output directory `dist` (already set in `vercel.json`).
4. Deploy.

## Guest checkout

Checkout requires **no login or signup**. `/checkout` collects only:

- Full Name
- Email
- Phone Number
- Delivery Address

On submit, the form validates these fields client-side, stores the order in
`sessionStorage`, clears the cart, and redirects to `/success`, where an
**optional** "Create an account to track your orders" prompt is shown —
never a gate before purchase.

## Cart logic

The cart is a small vanilla JS store (`src/scripts/cart.js`) backed by
`localStorage`, so it works with Astro's static output without a backend or
extra JS framework. It's intentionally simple to swap for a real cart/session
API later — every function (`addToCart`, `updateQuantity`, `removeFromCart`,
`getCartTotal`) is a plain, isolated export.

## PayFast integration (placeholder)

This MVP ships a **payment-ready structure**, not a live PayFast integration,
because PayFast requires server-side signature generation with your Merchant
ID, Merchant Key and passphrase — that can't be done securely from a static
front end. To go live:

1. Add a backend endpoint (Vercel Serverless Function, e.g. `api/payfast/create.ts`)
   that:
   - Accepts the order payload from `/checkout`.
   - Builds the PayFast parameter set (`merchant_id`, `merchant_key`,
     `amount`, `item_name`, `return_url`, `cancel_url`, `notify_url`, etc.).
   - Generates the MD5 signature server-side using your passphrase.
   - Returns the PayFast redirect URL (`https://www.payfast.co.za/eng/process`
     for live, `https://sandbox.payfast.co.za/eng/process` for testing).
2. In `src/pages/checkout.astro`, replace the `saveOrder(order); clearCart();
   window.location.href = '/success';` block with a `fetch()` call to that
   endpoint, then redirect to the returned URL. The exact spot is marked with
   a `PayFast integration point` comment in the file.
3. Add an ITN (Instant Transaction Notification) webhook endpoint that
   PayFast calls after payment, to confirm the order server-side before you
   treat it as paid.
4. Store PayFast credentials as environment variables in Vercel
   (`PAYFAST_MERCHANT_ID`, `PAYFAST_MERCHANT_KEY`, `PAYFAST_PASSPHRASE`) —
   never in client code.

Until that backend exists, submitting checkout in this MVP simulates a
successful order so the full guest-checkout flow (cart → checkout → success)
can be demoed end-to-end.

## Design tokens

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0C0B0A` | Page background |
| `charcoal` | `#17140F` | Section/card background |
| `gold` | `#B8944F` | Primary accent |
| `gold-bright` | `#D9B872` | Hover/highlight accent |
| `bronze` | `#7A5C36` | Secondary accent, gradients |
| `bone` | `#F3EEE4` | Primary text |
| `stone` | `#9C948A` | Secondary/muted text |

Typography: **Fraunces** (display/headlines), **Inter** (body), **Space Mono**
(labels, prices, step numbers).

## Notes / next steps for production

- Replace `BottleArt.astro` (illustrated SVG) with real product photography.
- Wire the PayFast backend as described above.
- Replace the WhatsApp number placeholder in `WhatsAppButton.astro`.
- Add a sitemap generator (`@astrojs/sitemap`) once the domain is final.
- Consider persisting orders to a real database/CMS instead of `sessionStorage`.
