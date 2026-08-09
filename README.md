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
- [ ] **GitHub and LinkedIn.** In `src/data/site.ts`, both point at `EDIT-ME`.
      Deleting an entry removes it from the page and the footer automatically.
      WhatsApp is real, built from the phone number.
- [ ] **A social preview image.** No `og:image`, so shared links show no
      thumbnail. Add a 1200x630 image to `public/` and a matching tag in
      `src/layouts/Base.astro`.
- [ ] **Jir Home and Revge logos.** Only the Sha Perfume artwork was available,
      so those two render as text wordmarks in the strip. Put the file in
      `public/logos/`, add a `logo` line to that client in `src/data/site.ts`,
      and the strip switches to the image. **Do not substitute a lookalike
      mark** — an invented logo misrepresents someone else's company.

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

The Sha Perfume logo is the real artwork with its dark mockup background keyed
out by luminance, so the gold sits on any background.

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
