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

Plain static HTML + [Tailwind CSS via CDN](https://tailwindcss.com). No
build step, no package manager, no framework — every page is a self-contained
`.html` file that loads Tailwind and Google Fonts from a CDN.

## Running it locally

Just open a page in a browser:

- Open `index.html` (redirects to `pages/landing.html`), or
- Open `pages/landing.html` directly.

Or serve the folder with any static file server, e.g.:

```bash
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:<port>/`.

## Structure

- `pages/` — the live site. Every page referenced by the prototype lives here.
- `design-source/` — original Stitch AI design-tool exports, kept for
  reference. These were the source material adapted into `pages/`; they are
  not used by the live site.
- `index.html` — redirects to `pages/landing.html`.

## User flows

- **Student**: `pages/landing.html` → `pages/choose-path.html` →
  `pages/signup.html`
- **Company**: `pages/landing.html` → `pages/choose-path.html` →
  `pages/company-signup.html`
