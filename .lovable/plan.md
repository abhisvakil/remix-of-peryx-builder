# Peryx.ai Marketing Site

Single-page marketing site for a B2B solar performance monitoring platform. Built in one pass with all copy included (rather than the suggested multi-message sequence — Lovable handles the full build in one go).

## Design System

- **Theme**: Dark mode default with light/dark toggle in header. Use a small React context + `<html class="dark">` toggle (in-memory only — no localStorage per the brief).
- **Fonts**: Space Grotesk (headings, bold) + Inter (body), loaded via `<link>` tags in `src/routes/__root.tsx`. Registered in `src/styles.css` under `@theme` as `--font-display` and `--font-sans`.
- **Tokens** (added to `src/styles.css` `:root` / `.dark`, oklch):
  - Dark: background `#0A0A0A`, foreground `#F5F5F4`, muted-foreground `#8A8A8E`, accent gold `#C9A227`
  - Light: inverted background/foreground, same gold
- **Eyebrow labels**: small uppercase, wide tracking (`tracking-[0.2em] text-xs uppercase`), gold or muted.
- All colors via semantic tokens — no hardcoded hex in components.

## Signature Scroll Animation (Logo Gold Trail)

The Peryx logo: two grey triangles (left lighter, right darker) forming a diamond/wing, with a thin vertical gold blade through the center.

- Build the logo as inline SVG so the gold blade is a targetable element.
- Use Framer Motion's `useScroll` + `useTransform` tied to the page scroll progress:
  - As the user scrolls past the hero, the gold blade's `y` translates downward and its opacity in the hero fades.
  - A second fixed-position "trailing" gold line element follows scroll progress down the right edge (or center gutter) — thin (1–2px), soft glow (`shadow`/`blur`), low opacity.
  - At each section boundary (detected via `IntersectionObserver` or section scroll offsets), briefly pulse/brighten the trail to "reappear."
- Respect `prefers-reduced-motion` — disable transform animations, keep static logo.
- Mobile: reduce trail length and disable the pulse to avoid jank.

## Sections (in order, single page, smooth-scroll anchor nav)

1. **Header** — sticky, transparent-on-top, blurred bg on scroll. Logo mark + nav (Features, Team, Contact) + theme toggle. Anchor links scroll to `#features`, `#team`, `#contact`.
2. **Hero** (`#top`) — full viewport, animated SVG logo, eyebrow "OPERATIONS INTELLIGENCE", headline "Solar performance, decoded.", subheadline, primary CTA "Get Started" (scrolls to `#contact`), secondary text link "See it in action ↓".
3. **Live Insights** — eyebrow, heading, 3 placeholder dashboard cards (Fleet Health Overview, Soiling & Degradation Tracking, Fault Detection Timeline) with blurred/muted mock chart graphics built from CSS (gradient bars, faint grid lines — no external images). Caption beneath.
4. **Features** (`#features`) — 6-card grid (3×2 desktop, 1-col mobile) with the 6 capabilities and full copy as provided.
5. **Partners** — eyebrow + heading + 5 muted placeholder logo blocks (rounded rectangles with "LOGO" text) + caption.
6. **Core Team** (`#team`) — 4 placeholder cards (circular photo placeholder with initials, NAME / ROLE / one-line bio). TODO code comment included.
7. **Advisors** — 3 placeholder cards, same treatment. TODO code comment included.
8. **FAQ** — shadcn `Accordion` with the 6 Q&A pairs verbatim.
9. **Get Started CTA Band** (`#contact`) — centered heading, subtext, gold "Get Started" button.
10. **Footer** — name + tagline + nav links + `[EMAIL PLACEHOLDER] · Ahmedabad, India` + LinkedIn/Twitter placeholders + copyright.

## File Plan

- `src/routes/__root.tsx` — add Google Fonts `<link>` tags (Space Grotesk + Inter) and update meta (title "Peryx.ai — Operations Intelligence for Solar Fleets", description, og tags).
- `src/routes/index.tsx` — replace placeholder with full landing page composition; page metadata.
- `src/styles.css` — add font tokens, gold accent color, dark-default token values.
- `src/components/peryx/` — new components:
  - `PeryxLogo.tsx` (inline SVG, accepts `goldOpacity`/`goldY` motion values)
  - `Header.tsx` (sticky nav + theme toggle)
  - `ThemeToggle.tsx` + `theme-provider.tsx` (in-memory context)
  - `ScrollTrail.tsx` (fixed-position framer-motion gold line)
  - `Hero.tsx`, `LiveInsights.tsx`, `Features.tsx`, `Partners.tsx`, `Team.tsx`, `Advisors.tsx`, `FAQ.tsx`, `CTA.tsx`, `Footer.tsx`
  - `DashboardMock.tsx` (CSS-only mock chart for the 3 preview cards)
- Use existing shadcn `accordion`, `button`, `card` components.

## Dependencies

- `bun add motion` (Motion for React, the current Framer Motion package) for scroll-linked animation.

## Notes / Deviations from Brief

- Building in a single pass instead of the suggested 5-message sequence — the copy is finalized and the structure is fixed, so splitting wouldn't change the output.
- Theme toggle persists in React state only (no localStorage), as specified.
- All team/advisor/partner content is placeholder with `// TODO` comments as requested.
- No real client logos — generic muted blocks only.
- Dashboard previews are pure CSS mocks (no stock images), built to be swapped for real screenshots later.

## Verification

- Run build/typecheck (auto).
- Open preview, scroll the page, confirm gold trail tracks scroll smoothly and anchor nav scrolls to each section.
