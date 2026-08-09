# Ibrahim Mursal — Portfolio

One page. Astro 5, static output, no runtime dependencies and no server.

All content lives in `src/data/site.ts`. Editing a project, a client or a
contact detail means editing that one file.

## Running it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

The build writes to `dist/`, which uploads as-is to any static host.

> Run npm from inside this folder. Running it from a parent directory writes the
> cache to the wrong place and then fails to resolve dependencies.

## Deploying

Build command `npm run build`, publish directory `dist`. Nothing else to set.

**The site address configures itself.** `astro.config.mjs` reads the deploy URL
that Netlify, Vercel and Cloudflare Pages each expose, so canonical links, the
Open Graph URL and the preview image URL are all correct on a normal deploy.

**On a custom domain, set `SITE_URL`** in the host's environment variables, for
example `SITE_URL=https://ibrahimmursal.com`. The host variables point at the
`*.netlify.app` or `*.pages.dev` address, not the custom one, so without this
the canonical link names the wrong address. Everything still builds; the tags
just point somewhere you did not intend.

Locally, with no variable set, it falls back to `http://localhost:4321`.

### GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Enable it once in the repo: **Settings → Pages → Source → GitHub Actions.**

It assumes the repo is named `<your-username>.github.io` — a root site, served
at the domain root with no `/repo-name/` subpath. The workflow derives
`SITE_URL` from the repo owner automatically, so nothing needs editing. A
project-page repo (any other name, served under a subpath) is not supported as
shipped: the icons, logos and social preview image all use root-absolute paths
(`/favicon.svg`, `/logos/*.png`, `/og.png`), which would 404 under a subpath
without further changes.

**GitHub Pages does not read `dist/_headers`.** It has no custom-headers
feature at all, unlike Netlify or Cloudflare Pages. The file still gets
generated and sits in the published output; it is simply inert there. The
Content-Security-Policy and other headers in the Security section below apply
only on hosts that support them.

## What is on the page

Hero and pitch, a scrolling strip of companies worked with, four projects, a
short About, and contact. Plus a 404.

There are no per-project pages. Four projects with three points each says more
than four pages nobody opens.

Contact details are real: email, phone, WhatsApp and LinkedIn. Deleting an entry
from `links` in `src/data/site.ts` removes it from the contact section and the
footer automatically.

## Content rules

Personal details come from the CV. **The CV is an information source only.** No
part of the design comes from it.

**Project points say what the thing does, from the user's side.** Not
development notes. "Renders 5.3x faster than the first version" describes my
week; "print from any phone on the shop network" describes what the shop gets.
The rule is on the `points` field in `src/data/site.ts` so it does not drift.

The hotel reception and management roles on the CV are deliberately absent. This
is a computer engineering portfolio.

## Design

Near-black canvas, electric cyan `#2DD4EF` as the single functional accent. Cyan
on `#080B0F` clears roughly 11:1, so it carries text, borders and fills with no
contrast exception anywhere. Violet appears only inside the hero glow, never as
text or a border, and nothing depends on seeing it.

Type is Space Grotesk for display, Inter for body, JetBrains Mono for small
labels, all self-hosted through `@fontsource` so no request leaves the origin.

A contrast pass over every text and background pair on both pages reports zero
failures against WCAG AA. One rule came out of it: **`--text-400` is a floor,
not a preference.** On the darkest surface a grey has to sit near `#8A8A8A` to
clear 4.5:1 at 11px. Darkening it fails the pass.

### Fonts ship every subset, on purpose

`dist/` contains about 340 KB of woff2 across 15 files, including Cyrillic,
Greek and Vietnamese. That is not a leak. Fontsource splits by `unicode-range`,
so a browser rendering this page downloads only the three latin files, about
108 KB. Trimming the others would shrink the upload and change nothing a visitor
experiences.

## The client strip

`src/components/Clients.astro`. Three details in it are not cosmetic:

- **Spacing is `margin-inline-end` on the items, not `gap` on the track.** The
  loop animates exactly one pass (`100% / REPEATS`). With `gap` the track is one
  gap narrower than REPEATS whole passes, and the loop jumps once per cycle.
- **The logos are not lazy.** Most of the track sits outside the clipping
  window, so a lazily loaded logo scrolls into view still blank.
- **The reduced-motion block sits last in the file.** It has to override the
  width and duration rules above it, and position in the cascade is what makes
  that true.

Under `prefers-reduced-motion: reduce` the scroll stops and the duplicate passes
are hidden, leaving the real client list as a static row. Hovering pauses it.
Only the first pass is exposed to assistive technology, so a screen reader reads
three companies, not eighteen.

### Logos

All three are real artwork, kept unmodified in `public/logos/`. The Sha Perfume
file is its logo with the dark mockup background keyed out by luminance, so the
gold composites onto any background.

**They render white, by one CSS rule.** They arrive gold, white and dark purple,
and the purple measures 2.29:1 on this background, which is close to invisible.
`filter: brightness(0) invert(1)` flattens any colour to black then lifts it to
white, preserving alpha, so the same rule handles whatever colour a new logo
arrives in.

**`logoHeight` is per logo.** These three are 0.77:1, 1.17:1 and 3.1:1. A single
shared height would render the wide Revge wordmark at three times the width of
the others and let it dominate, so each is sized to look like equal weight
rather than equal height.

To add a company: drop the file in `public/logos/`, add the entry with a
`logoHeight`. Without a `logo` the name renders as a text wordmark instead.
**Never substitute a lookalike mark for a logo you do not have** — an invented
logo misrepresents someone else's company.

## Social preview

`public/og.png`, 1200x630, generated to match the site and using the site's own
fonts. It is referenced absolutely, because link previews will not resolve a
relative path, which is why `SITE_URL` matters on a custom domain.

If the headline or the pitch changes, regenerate the image so the two agree.

## Security

There is very little to attack. No forms, no inputs, no accounts, no cookies, no
storage, no database, no API, no analytics and no third-party scripts. The whole
site ships about 420 bytes of hand-written JavaScript and loads nothing from
another origin. **Astro is a build tool here and never reaches the browser**, so
the deployed artifact is plain HTML, CSS and those few lines.

Hardening is therefore defence in depth rather than a fix for a known hole.

### Response headers

`scripts/generate-headers.mjs` runs as `postbuild` and writes `dist/_headers`,
which **Netlify and Cloudflare Pages** read from the publish directory.
**Vercel ignores it** and needs the same values in `vercel.json`.

It is generated, not checked in, because the Content-Security-Policy pins each
inline script by SHA-256 hash. A checked-in copy would go stale the moment a
script changed, and a stale hash silently blocks the script.

Two concessions in the policy, both deliberate:

- **`style-src` allows `'unsafe-inline'`.** The page sets custom properties
  through style attributes (reveal delays, per-logo heights). Far weaker a
  concession than the same keyword in `script-src`.
- **`font-src` allows `data:`.** Vite inlines assets under its size threshold,
  and one font subset falls below it, so it arrives as a data URI in the
  stylesheet while the other fifteen stay files. Without `data:` the page loses
  that face. Fonts do not execute, and injecting one already requires the
  ability to inject CSS.

If you change the CSP, test it. `_headers` is not applied by a plain static
server, so copy `dist/index.html`, add the policy as a
`<meta http-equiv="Content-Security-Policy">`, load it and watch the console.
That is how the `data:` font above was found, after the policy looked correct on
paper.

### Dependencies

`npm audit` reports advisories against `astro`, `esbuild` and `sharp`. They are
all build-time and none is reachable here:

- The Astro advisories cover `define:vars`, spread props, named slots,
  `transition:*` directives, hydrated islands and SSR error pages. This site
  uses none of them and has no server.
- The `esbuild` one affects `astro dev` on Windows. It binds to localhost; do
  not run the dev server with `--host` on a network you do not trust.
- `sharp` is only invoked by `astro:assets`, which this site never uses. The
  logos are plain files in `public/`.

Clearing them needs Astro 7, two majors ahead. That is a real upgrade to plan,
not an emergency: the built output contains no Astro code, so none of it can
reach a visitor.

## The scroll reveal

The rule that hides revealed elements is gated behind a `.js` class set by an
inline script in `<head>`, plus a 2.5 second timer that force-reveals everything
if the observer never fires. Without the gate, any JavaScript failure ships a
blank page. Both safeguards are in `src/layouts/Base.astro` and
`src/styles/global.css`; if you touch one, check the other.

Note when testing: an automated browser that is not compositing frames shows
these transitions frozen at opacity 0 with the class correctly applied. That is
not a bug in the page. Check `classList` and computed style rather than waiting
for the animation.

## The icon

`public/favicon.svg` is the source. `favicon.ico` and `apple-touch-icon.png` are
generated from the same outline and have to be regenerated together, or they
drift apart.

It reads **IM**. It read IN for several commits, because the M was drawn with a
single diagonal. Look at the rendered file after changing it, at 16px as well as
large. Checking that the file exists and serves a 200 does not tell you what it
draws.

## Where this lives

`C:\Desktop\Ibrahim Portfolio`, outside the Obsidian vault, under git.

The previous version lived inside the vault and was destroyed when the vault was
reorganised. Keep this one out of there, and push it somewhere off this machine.
