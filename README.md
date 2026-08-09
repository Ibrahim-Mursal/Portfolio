# Ibrahim Mursal — Portfolio

One page. Astro 5, static output, no runtime dependencies.

All content is in `src/data/site.ts`. Adding or editing a project means editing
that one file.

## Running it

```bash
npm install
npm run dev
```

```bash
npm run build
```

The build writes to `dist/`, which uploads as-is to Netlify, Vercel, Cloudflare
Pages or GitHub Pages. No server, no environment variables.

> Run npm from inside this folder. Running it from a parent directory writes the
> cache to the wrong place and then fails to resolve dependencies.

## Before this goes public

- [ ] **Domain.** `site` in `astro.config.mjs` is a placeholder that is written
      into every canonical link. Change it, and change `public/robots.txt` to
      match.
Contact details are all real: email, phone, WhatsApp and LinkedIn. Deleting an
entry from `links` in `src/data/site.ts` removes it from the contact section and
the footer automatically.
- [ ] **A social preview image.** No `og:image`, so shared links show no
      thumbnail. Add a 1200x630 image to `public/` and a matching tag in
      `src/layouts/Base.astro`.

## Content

Personal details come from the CV. **The CV is an information source only** — no
part of the design is taken from it.

Project claims trace back to real project records. Where a number appears it is
the measured one.

## Design

Near-black canvas, electric cyan `#2DD4EF` as the single functional accent.
Cyan on `#080B0F` clears roughly 11:1, so it carries text, borders and fills
with no contrast exception. Violet appears only inside the hero glow, never as
text or a border, and nothing depends on seeing it.

Type is Space Grotesk for display, Inter for body, JetBrains Mono for small
labels, all self-hosted through `@fontsource`.

A contrast pass over every text and background pair reports zero failures
against WCAG AA. One rule came out of it: **`--text-400` is a floor, not a
preference.** On the darkest surface a grey has to sit near `#8A8A8A` to clear
4.5:1 at 11px. Darkening it fails the pass.

## The scrolling client strip

`src/components/Clients.astro`. Two details in it are not cosmetic:

- **Spacing is `margin-inline-end` on the items, not `gap` on the track.** The
  loop works by animating exactly one repetition (`100% / REPEATS`). With `gap`
  the track is one gap narrower than REPEATS whole repetitions, so the loop
  jumps once per cycle.
- **The logos are not lazy.** Most of the track sits outside the clipping
  window, so a lazily loaded logo scrolls into view still blank.

Under `prefers-reduced-motion: reduce` the scroll stops and the duplicate passes
are hidden, leaving the real client list as a plain static row. Hovering pauses
it.

### The logos

All three are the real artwork, kept unmodified in `public/logos/`. The Sha
Perfume file is its logo with the dark mockup background keyed out by luminance,
so the gold composites onto any background.

**They render white, by one CSS rule.** They arrive gold, white and dark purple,
and the purple measures 2.29:1 on this background, which is close to invisible.
`filter: brightness(0) invert(1)` flattens any colour to black then lifts it to
white, preserving alpha, so the same rule handles whatever colour a new logo
arrives in.

**`logoHeight` is per logo, in `src/data/site.ts`.** These three are 0.77:1,
1.17:1 and 3.1:1. A single shared height would render the wide Revge wordmark
three times the width of the others and let it dominate the row, so each is
sized to look like equal weight rather than equal height.

To add a company: drop the file in `public/logos/`, add the entry with a
`logoHeight`. Without a `logo` the name renders as a text wordmark instead.
**Never substitute a lookalike mark for a logo you do not have** — an invented
logo misrepresents someone else's company.

## Deliberately not here

No separate case-study pages. Four projects with three points each says more
than four pages nobody opens.

## The scroll reveal

The rule that hides revealed elements is gated behind a `.js` class set by an
inline script in `<head>`, plus a 2.5 second timer that force-reveals
everything if the observer never fires. Without the gate, any JavaScript
failure ships a blank page. Both safeguards are in `src/layouts/Base.astro` and
`src/styles/global.css`; if you touch one, check the other.

## Where this lives

`C:\Desktop\Ibrahim Portfolio`, outside the Obsidian vault, under git.

The previous version lived inside the vault and was destroyed when the vault was
reorganised. Keep this one out of there, and push it somewhere off this machine.
