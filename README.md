# SkillBridge

SkillBridge is a pre-launch pilot project from a university team (Faculty of
Applied Sciences, Rajarata University of Sri Lanka). The idea: benchmark a
student's coursework against live industry job requirements, surface the
exact skill gaps, and match students to real project sprints with partner
companies so they can build job-ready proof of their skills. It has not
launched yet — this repo is a working prototype used to pitch and pilot the
idea, not a live product with real users, partner companies, or placement
results.

## Tech

A React + TypeScript single-page app, built with [Vite](https://vite.dev) and
styled with [Tailwind CSS v4](https://tailwindcss.com) (compiled via
`@tailwindcss/vite`, not the CDN build). Routing is client-side via
[react-router-dom](https://reactrouter.com). One shared design system
(`src/styles/index.css`) drives every screen; there is no per-page Tailwind
config.

## Running it locally

```bash
npm install
npm run dev
```

Then visit the URL Vite prints (defaults to `http://localhost:5173/`).

Other scripts:

```bash
npm run build    # type-check (tsc -b) + production build into dist/
npm run preview  # serve the dist/ build locally
```

## Structure

- `src/pages/` — one component per screen (e.g. `LandingPage.tsx`,
  `DashboardPage.tsx`). Routed from `src/App.tsx`.
- `src/layouts/` — shared chrome reused across groups of pages:
  `MarketingLayout`-style pages render their own header/footer inline,
  `AuthLayout` (login/signup/choose-path), `OnboardingLayout`
  (onboarding steps 1-3), `DashboardLayout` (student app shell),
  `AppShellLayout` + `CompanyLayout`/`InstituteLayout` (employer/institute
  app shells).
- `src/components/ui/` — small reusable pieces (e.g. `OnboardingProgress`).
- `src/styles/index.css` — the single Tailwind theme (colors, spacing,
  typography) used across the whole app.
- `design-source/` — original Stitch AI design-tool exports, kept for
  reference only; not used by the app.

## User flows

- **Student**: `/` (landing) → `/choose-path` → `/signup` → `/onboarding-1`
  → `/onboarding-2` → `/onboarding-3` → `/dashboard`
- **Company**: `/` → `/choose-path` → `/company-signup` →
  `/company-profile-setup` → `/company-dashboard`
- **Institute**: `/` → `/choose-path` → `/institute-signup` →
  `/institute-profile-setup` → `/institute-dashboard`
