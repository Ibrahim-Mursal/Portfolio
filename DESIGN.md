---
name: Ibrahim Mursal — Portfolio
description: A one-page portfolio that reads as a component datasheet, not a landing page.
colors:
  paper: "#f7f6f2"
  paper-deep: "#e6e0ce"
  ink: "#1a1a18"
  ink-secondary: "#33322e"
  ink-body: "#55534c"
  ink-quiet: "#6b6a62"
  ink-large-only: "#8a887f"
  green: "#0f6b3a"
  green-deep: "#0a4f2b"
  green-tint: "#ddeee2"
typography:
  display:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 8vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Work Sans Variable, Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.02em"
rounded:
  all: "3px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.all}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.all}"
    padding: "0.85rem 1.5rem"
  stamp-live:
    backgroundColor: "{colors.green-tint}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.all}"
---

# Design System: Ibrahim Mursal — Portfolio

## Overview

**Creative North Star: "The Component Datasheet"**

The portfolio reads as a manufacturer's datasheet for a person, not a SaaS landing page: bone-white paper, graphite ink, one deep-green accent spent only on status, rules, and active state. Every claim is a measured spec, never a pitch — a boxed "quick specs" table beside the pitch and each project as a spec entry with a status stamp. Contact is the deliberate exception: it was first built as a `dt`/`dd` "ordering information" table matching that language, and reverted to a row of real buttons after user feedback that the table read as cold and spreadsheet-like for the one section whose whole job is to invite a message.

This replaced an earlier near-black canvas with a single neon-cyan accent, glass cards, and a gradient hero glow — the default arrangement this whole portfolio genre converges on. The rejection is deliberate: light is chosen because a datasheet is a document read in daylight, on a shop counter or at a desk, not a dev-tool screen read in the dark. The system went through several rounds of user taste correction after the first build — the palette was deepened once for feeling too pale, then the accent hue and display typeface were both replaced outright on direct feedback ("don't like the font", "don't like the blue"). Treat the values recorded here as the settled state, not the first draft.

**Key Characteristics:**
- One ink color (graphite) plus one accent (deep green) — no gradients, no glass, no second competing hue.
- Hairline rules build every structure: a boxed table, a ruled list, a bordered panel.
- Status reads as a stamp (bordered, mono, tilted −1.5°), not a colored pill.
- Every project entry carries a small signed mark (initials), never an invented date.
- Headings and body both use plain, neutral sans faces (Inter for display, Work Sans for body) — no display face with a strong personality; that was tried and rejected.

## Colors

Flat and functional: one warm-neutral ink scale on one paper ground, plus a single deep-green accent that never shares a surface with a second hue.

### Primary
- **Green** (#0f6b3a): The one functional accent. Status stamps, active nav links, primary buttons, rule underscores on the accented phrase. Never decorative — every green mark means "active, current, or true." Replaced an earlier cobalt blue on direct user feedback; the role and every usage rule carried over unchanged, only the hue moved.

### Neutral
- **Paper** (#f7f6f2): Page background.
- **Paper Deep** (#e6e0ce): A real toned kraft/putty surface, not a near-white — recessed surfaces (the quick-specs box, param boxes, the contact panel, the client strip). Deepened once from an earlier, paler `#eeebe3` after user feedback that the page read as too light overall.
- **Ink** (#1a1a18): Headings, primary values, high-emphasis text (16.1:1 on paper). Also the header/footer background — see the Ink Bookend rule below.
- **Ink Secondary** (#33322e): Feature-list body text (11.9:1).
- **Ink Body** (#55534c): Default running copy (7.1:1).
- **Ink Quiet** (#6b6a62): Small mono labels and meta text — table keys, signatures (5.0:1 on paper; this is the floor for anything under ~18px on the paper ground). On the deepened `paper-deep` surface this floor isn't enough (4.1:1) — those labels step up to `ink-body` (5.8–6.5:1 on paper-deep) instead.
- **Ink Large-Only** (#8a887f): Decorative use and large text only (3.3:1) — never body copy, never a small label.

### Named Rules
**The One Ink Rule.** Every color on the page is a step on the ink scale or the green accent. A third hue never appears — client logos are flattened to ink via `filter: brightness(0)` specifically so a gold or purple logo can't introduce a competing color.

**The Quiet Floor Rule.** `ink-large-only` (3.3:1) is for large or decorative use only. Any label under ~18px uses at minimum `ink-quiet` (5.0:1) on plain paper, or `ink-body` (5.8:1+) on the deeper `paper-deep` surface — a real bug caught twice during build (once at each color pass) and now the standing rule.

**The Ink Bookend Rule.** The header and footer are solid `#1a1a18` ink, not paper — the page's one deliberate dark note, added specifically to answer "too pale." Every token used inside them (`ink`, `ink-body`, `ink-quiet`, `green`, `green-deep`, `rule`, `rule-strong`) is locally redefined to a light-on-dark equivalent right on the section selector (`--ink: var(--paper)`, etc.), so every existing rule — `.stamp`, nav links, focus rings — adapts automatically without a second copy of any component style.

## Typography

**Display Font:** Inter Variable (with Inter, ui-sans-serif fallback)
**Body Font:** Work Sans Variable (with Work Sans, ui-sans-serif fallback)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, SFMono-Regular fallback)

**Character:** Both display and body are plain, neutral, humanist sans faces — deliberately quiet, not a display face with a strong personality. An earlier pass used Big Shoulders Display (tall, condensed, industrial) for headlines; it was replaced outright on direct user feedback ("clean and neutral" was the explicit request), not softened or adjusted. Work Sans carries the actual reading without competing with the headline weight. JetBrains Mono is reserved for genuine data: table values, part-number-style labels, status stamps — never used as a "technical" costume on prose.

### Named Rules
**The Data Is Mono Rule.** Monospace only ever wraps something that is actually data, a label, or a measured value — a table cell, a status word, a stack tag. It never dresses up a sentence to look "technical."

**The Quiet Display Rule.** The display face carries weight and size, never personality. If a headline face is being considered and it has a strong, recognizable "voice" (condensed, industrial, display-serif, hand-lettered), that is the wrong direction for this system — it was tried once and reversed.

## Layout

Single shell (`max-width: 1180px`, fluid gutter `clamp(1.25rem, 5vw, 3.5rem)`). Section rhythm is fluid vertical padding (`clamp(3.5rem, 9vw, 6rem)`) rather than a fixed spacing scale — there is no discrete `sm/md/lg` spacing token; everything responsive is expressed as a `clamp()`.

The hero is a two-column masthead above `56rem` (pitch + actions at ~60%, a boxed "quick specs" mono table at ~40%), stacking to one column below it. The About section is a similar two-column split (intro, a single "Studying" param box) above `58rem` — the skills/tech-tag list that used to sit under the intro paragraph was removed on request, along with the per-project tech-stack chip row in the work grid; neither should be re-added without asking. The work grid is `repeat(auto-fill, minmax(min(100%, 22rem), 1fr))` — always at least one full-width card on mobile, filling available columns on wider screens.

## Elevation & Depth

Mostly flat — a document sits on paper, it doesn't float. The one exception is a project entry on hover, which lifts with a real offset-and-blur shadow (never a zero-offset colored halo) to signal interactivity.

### Shadow Vocabulary
- **entry-hover** (`box-shadow: 0 10px 26px -18px rgba(26,26,24,0.5)`): The only shadow in the system. Applied on `.entry:hover` (a project card) to lift it off the paper.

### Named Rules
**The Flat Paper Rule.** Nothing casts a shadow at rest. Depth appears only as a response to hover, never as ambient decoration under a static card.

## Shapes

Corners are sharp: a single `3px` radius (`--radius`) for every card, box, button and stamp — just enough to soften a hard edge without reading as a "rounded card" UI. No pill buttons, no circular avatars, no soft blob shapes. Two deliberate one-offs sit outside that scale: the focus-visible ring's own radius is `2px`; the skip-to-content link's exposed corner is `6px`. Borders are hairline (`1px`) for structural rules and `1.5px` for stamps and interactive borders — always solid, never a gradient border or a colored `border-left` accent stripe.

## Components

### Buttons
- **Shape:** 3px corners, 1.5px border, mono label type, uppercase-weight letter-spacing (0.02em) — deliberately not a pill, so it reads as a document control rather than an app CTA.
- **Primary:** deep-green fill (`#0f6b3a`), paper text, matching border.
- **Hover:** darkens to `#0a4f2b` and lifts 2px.
- **Ghost:** transparent fill, ink text, hairline-strong border; hover turns the border and text green.

### Stamps
- **Style:** bordered box, mono uppercase, 1.5px border, tilted −1.5° as if pressed by hand. Default stamp is ink-toned and neutral (a status word like "In use"); the live variant (`stamp--live`) fills with `green-tint` background and `green-deep` text/border for "in daily use" items.
- **State:** on a project-card hover, the live stamp deepens its tilt and scales up slightly (a small "freshly stamped" flourish) — the system's one signature micro-interaction, gated behind `prefers-reduced-motion`.

### Chips
- **Style:** hairline border, paper background, ink-body text. Used only for the stack/tech tags — the standalone "skills" chip list this style originally also served was removed (see Layout).
- **State:** static, read-only — chips here are tags, not filters.

### Cards / Containers (project entries, param boxes, quick-specs box)
- **Corner Style:** 3px.
- **Background:** paper for project entries (foreground content), paper-deep for recessed info boxes (quick specs, param box, contact panel background).
- **Shadow Strategy:** flat at rest; project entries lift on hover (see Elevation).
- **Border:** 1px hairline-strong; project entries darken their border to `ink-large-only` on hover.
- **Internal Padding:** roughly `1.1–1.5rem`, tighter in the mono data rows (`~0.6–0.85rem` per row).

### Inputs / Fields
Not used — the site has no forms. Contact happens through direct links (`mailto:`, `tel:`, WhatsApp, LinkedIn), each rendered as a real button (see Buttons above) in a wrapping row — not a table. This is the one place the datasheet vocabulary deliberately steps back: an invitation to reach out reads warmer as tappable buttons than as label-value rows, and that was a direct, explicit correction, not a style option to reconsider later.

### Navigation
Sticky ink-bookend header: a plain "PORTFOLIO" wordmark on the left, plain section links (Work / About / Contact — no section numbers, no revision tag; both were tried and removed on request) in the middle, a stamp-styled "Get in touch" control on the right. Below `30rem` the section links hide and only the stamp CTA remains.

### The Datasheet Table (signature component)
The recurring `dt`/`dd` row pattern (the quick-specs box in the hero, the "Studying" param box in About) — a mono key at low emphasis on the left, the value at full emphasis (`ink`) on the right, separated by a hairline top rule per row. This pattern is for passive facts read at a glance, not for anything a visitor is meant to act on; Contact is the deliberate exception (see Inputs / Fields above).

## Do's and Don'ts

### Do:
- **Do** keep the green accent to status, active state, rules, and links — if a screen has more than one thing "shouting" green at once, something is wrong.
- **Do** use the `dt`/`dd` hairline-row pattern for a passive, read-only fact list (quick specs, the Studying box) — but reach for real buttons instead when the list is something a visitor should act on, as with Contact.
- **Do** keep every project's status stamp a claim that is actually true (real "in use" / "in daily use" state) — the stamp motif only works because it is never decorative.
- **Do** keep both display and body type quiet and neutral — this was a direct, explicit user correction, not a style option to reconsider later.

### Don't:
- **Don't** use `ink-large-only` (#8a887f) on anything under ~18px or non-bold, and don't use `ink-quiet` on the deepened `paper-deep` surface — both fail the 4.5:1 floor there; use `ink-body` on that surface instead.
- **Don't** add a second accent color, a gradient, or a glass/blur surface — the whole system's discipline is one ink scale plus one accent.
- **Don't** round a button into a pill or a card into a soft blob — corners stay at the system's single sharp `3px`.
- **Don't** put a colored `border-left` accent stripe on a card or panel — info boxes get a full hairline border on all sides instead.
- **Don't** invent a project's date or timeline for the signature mark — it carries initials only, never a fabricated timestamp.
- **Don't** reintroduce a bold/condensed/industrial display face, a blue accent, section-number prefixes (`§01`), a revision tag ("REV 2026"), the skills chip list, per-project stack chips, or a `dt`/`dd` table for Contact — all six were built, then explicitly removed on user feedback in this same project. Re-adding any of them needs a fresh ask, not an assumption that the earlier version was "more complete."
