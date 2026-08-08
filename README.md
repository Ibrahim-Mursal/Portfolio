# Ibrahim Mursal — Portfolio

Astro 5, static output, no runtime dependencies. Eight pages: home, a work index,
five generated case studies, and a 404.

Content is data-driven. Adding a sixth project means adding one object to
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
- [ ] **GitHub and LinkedIn.** `profile.links` in `src/data/profile.ts`. Both
      point at `EDIT-ME`. Deleting an entry removes it from both the footer and
      the contact section automatically. WhatsApp is real, derived from the phone
      number on the CV.
- [ ] **A social preview image.** There is no `og:image`, so shared links show no
      thumbnail. Add a 1200x630 image to `public/`, then a matching `og:image`
      tag in `src/layouts/Base.astro`. Worth doing: this is the same gap
      currently open on the Cafe Faim site.

Contact details, education, languages and skills all come from the CV and are
real. The street address on the CV is deliberately not published; the site shows
the city only.

## Content rule

Every factual claim on this site traces back to a project record: the test
counts, the line counts, the timings, the settlement figures. Where something is
still unresolved, the case study says so rather than rounding it into a win.

Client internals are deliberately left out even where they are known. No network
addresses, no credentials, no partner balances.

Work history is limited to what bears on engineering. The hotel reception and
management roles on the CV are left out on purpose: this is a computer
engineering portfolio.

## Design

Near-black ground, one accent: electric lime `#CDFF4D`. The accent is meant to
be loud, and it has a practical advantage over a warm accent on light ground.
Lime on `#0A0B0D` clears roughly 15:1, so it can carry text, borders, fills and
large numerals with no contrast exception anywhere. An earlier version of this
site used orange on white, which at `#EFA134` sits near 1.9:1 and cannot legally
be used as text at all.

**The CV is an information source, not a design source.** Contact details,
education, languages, strengths and work history come from it. Nothing about the
layout or palette does.

There is no second colour. One accent carries every piece of emphasis, and the
only place a colour is used at full strength on a large area is the lime strip
under the hero.

Type is Space Grotesk for display, Inter for body, JetBrains Mono for metadata,
all self-hosted through `@fontsource` so no request leaves the origin.

A contrast pass over every text and background pair on the built pages reports
zero failures against WCAG AA. Two rules came out of what it caught:

- **The two muted greys are a floor, not a preference.** On the darkest surface a
  neutral grey has to sit around `#8A8A8A` to clear 4.5:1 at 11px. An earlier,
  darker pair failed on four elements at once. If you darken `--text-400` or
  `--text-500`, re-run the pass.
- **The outlined surname needs its `@supports` guard.**
  `-webkit-text-stroke` is non-standard, so `.hero__last` is solid lime by
  default and only becomes transparent-plus-outline where the stroke is actually
  supported. Without that guard, an engine lacking the stroke renders the
  surname invisible.

Project covers are generated SVG (`src/components/Cover.astro`), one motif per
project, seeded deterministically so a cover never changes between builds. They
are not screenshots and not device mockups: a screenshot of an admin table says
nothing at card size, and a mockup of non-public work would be fiction. All five
use the same lime on near-black, because five accent colours across five cards is
how a palette stops meaning anything.

Project cards carry no separate call to action. The whole card is the link.

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
