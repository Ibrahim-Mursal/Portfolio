# Ibrahim Mursal — Portfolio

Astro 5, static output, no runtime dependencies. Nine pages: home, a work index,
six generated case studies, and a 404.

Content is data-driven. Adding a seventh project means adding one object to
`src/data/projects.ts`; the home grid, the work index and the case-study page all
generate from it. Nothing about a project lives in a page file.

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

> Run npm from inside this folder. Running the build from a parent directory
> writes the cache into the wrong place and then fails to resolve dependencies.
> This cost time once already.

## Before this goes public

Everything below is a placeholder, marked `EDIT ME` in the source. The site
builds and looks finished with all of them still in place, which is exactly why
they are listed here.

- [ ] **Domain.** `site` in `astro.config.mjs` is set to a placeholder host that
      is written into every canonical link and Open Graph URL. Change it, and
      change the matching line in `public/robots.txt`.
- [ ] **GitHub, LinkedIn and WhatsApp links.** `profile.links` in
      `src/data/profile.ts`. All three point at `EDIT-ME`. Deleting an entry
      removes it from both the footer and the contact section automatically.
- [ ] **Public email.** `profile.email` is the address configured on this
      machine, which is not necessarily the one to hand to clients.
- [ ] **Location.** `profile.location` is deliberately empty rather than guessed.
      Fill it in or leave it out.
- [ ] **A social preview image.** There is no `og:image`, so shared links show no
      thumbnail. Add a 1200x630 image to `public/`, then a matching `og:image`
      tag in `src/layouts/Base.astro`. Worth doing: this is the same gap
      currently open on the Cafe Faim site.

## Content rule

Every factual claim on this site traces back to a project record: the test
counts, the line counts, the timings, the settlement figures. Where something is
still unresolved, the case study says so rather than rounding it into a win.

Client internals are deliberately left out even where they are known. No network
addresses, no credentials, no partner balances.

## Design

One accent carries every piece of emphasis: azure `#4C7DFF`. One warm colour,
amber `#FFAB33`, is reserved for the primary call to action and the
"live in production" badge, and appears nowhere else. If a third colour starts
showing up, something has gone wrong.

Type is Sora for display, Inter for body, JetBrains Mono for metadata, all
self-hosted through `@fontsource` so no request leaves the origin.

Project covers are generated SVG (`src/components/Cover.astro`), one motif per
project, seeded deterministically from the project's hue so a cover never
changes between builds. They are not screenshots and not device mockups: a
screenshot of an admin table says nothing at card size, and a mockup of
non-public work would be fiction.

## The scroll reveal, and why it is built that way

The rule that hides revealed elements is gated behind a `.js` class set by an
inline script in `<head>`, and there is a 2.5 second timer that force-reveals
everything if the observer never fires.

Without the gate, any JavaScript failure ships a blank page. The first build of
this site had exactly that defect. Both safeguards are in
`src/layouts/Base.astro` and `src/styles/global.css`; if you touch one, check the
other.

Note when testing: an automated browser that is not compositing frames will show
these transitions frozen at opacity 0 with the class correctly applied. That is
not a bug in the page. Check `classList` and computed style with transitions
disabled rather than waiting for the animation to finish.

## Where this lives

`C:\Desktop\Ibrahim Portfolio`, outside the Obsidian vault, under git.

The previous version of this site lived inside the vault and was destroyed when
the vault was reorganised. Keep this one out of there, and push it somewhere off
this machine.
