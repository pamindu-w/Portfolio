# Pamindu Welikada — Portfolio

A Next.js (App Router) + TypeScript + Tailwind CSS portfolio. Pure frontend,
no backend or database — ready to deploy straight to Vercel.

## Concept

The visual language borrows from logistics/route-planning (your FreshRoute
project): an animated route map in the hero, "shipment manifest" style
project cards, and status tags like `Deployed` / `In transit`. Colors are an
ink-navy base with a signal-orange accent and a teal secondary — no default
"AI purple" or generic SaaS card shadows.

Cooler-pass additions:
- Full-bleed portrait in the hero with a typewriter role line and social/CV buttons
- Education as a vertical timeline (fits the route theme naturally)
- Skills as an icon-tile grid using real brand icons (react-icons)
- Project cards with a status icon and a hover accent bar
- Contact section with an animated node-network diagram and a working
  contact form that opens a prefilled email in your own mail app (no
  backend — see note below)

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables
   needed. Click Deploy.

Or with the CLI: `npx vercel`.

## Structure

```
app/
  layout.tsx       Fonts (self-hosted via @fontsource) + metadata
  page.tsx          Assembles all sections
  globals.css       Theme tokens, grid backdrop, focus/reduced-motion rules
components/
  Nav.tsx           Sticky top nav
  Hero.tsx          Headline, portrait, quick facts
  RouteMap.tsx       Animated SVG route line (Framer Motion)
  About.tsx         Bio + operating principles
  Skills.tsx        Stack grouped by category
  Projects.tsx      FreshRoute / AI Expense Analyzer / AI Learning Companion
  Experience.tsx    Toastmasters + AIESEC, second portrait
  Education.tsx     University of Moratuwa + A/L record
  Footer.tsx        Contact
public/images/       Your two photos, optimized
```

## Editing content

Everything is plain text/props inside the components listed above — there's
no CMS or data file to hunt through. The most likely edits:

- `components/Projects.tsx` — add/edit project cards and the `status` tag
- `components/Skills.tsx` — add/remove stack chips
- `components/Hero.tsx` — headline, bio, quick stats
- `components/Footer.tsx` — email/phone

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) are bundled via `@fontsource`
  packages rather than fetched from Google Fonts at build time, so builds
  work even offline / behind restricted networks.
- `next.config.mjs` sets `images.unoptimized: true` so `next/image` works on
  Vercel's free tier and static hosts without extra config.
- **GitHub/LinkedIn buttons** in the hero currently link to `#` — drop your
  real URLs into the `href`s in `components/Hero.tsx` (search for "GitHub"
  and "LinkedIn").
- **Contact form** is frontend-only: submitting builds a `mailto:` link and
  opens the visitor's own email app with the message pre-filled. Nothing is
  stored or sent from the site itself. If you'd rather have messages land
  directly without opening the visitor's mail client, wire the form up to a
  service like Formspree or EmailJS (both have a generous free tier and
  need no backend of your own) — happy to do that if you want it.
- **Download CV** currently points at your uploaded resume PDF as-is. Its
  title still says "Professional Accountant" and the education end date
  reads "Persent" — worth fixing in the source file before people download
  it from the live site.
