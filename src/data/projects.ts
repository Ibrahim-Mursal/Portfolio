/**
 * The six projects, and the only place their content lives.
 *
 * Adding a seventh project means adding one object to this array. The work
 * index, the home grid and the case-study page are all generated from it.
 *
 * Content rule, carried over from the first build of this site: every claim
 * here traces back to a real project record. No invented test counts, no
 * invented row counts, no rounded-up performance numbers. Client internals
 * (network addresses, credentials, partner balances) are deliberately left
 * out even where I know them.
 */

export interface Metric {
  value: string;
  label: string;
}

export interface HardPart {
  /** The symptom as it presented, before the cause was known. */
  symptom: string;
  /** What was actually going on. */
  cause: string;
  /** What was done about it. */
  fix: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  /** One line, card-sized. */
  summary: string;
  kind: string;
  year: string;
  /** Shown as a badge. `live` gets the warm accent. */
  status: 'live' | 'active' | 'delivered';
  statusLabel: string;
  stack: string[];
  /** Hue in degrees for the generated cover pattern. */
  hue: number;
  /** Which motif the cover component draws. */
  cover: 'grid' | 'ledger' | 'bloom' | 'arc' | 'stack' | 'tower';
  /** The situation before the work. */
  brief: string;
  role: string;
  /** Headline numbers. Keep to three or fewer. */
  metrics: Metric[];
  /** What shipped. */
  built: string[];
  /** The honest part. */
  hardParts: HardPart[];
  /** What I would do differently, or what is still open. */
  reflection: string;
}

export const projects: Project[] = [
  {
    slug: 'sha-perfume-label-printer',
    name: 'Label Printer',
    client: 'Sha Perfume',
    summary:
      'A Windows app that replaced BarTender on a shop counter, and a phone UI so staff can print from anywhere in the store.',
    kind: 'Desktop app',
    year: '2026',
    status: 'live',
    statusLabel: 'Live, in daily use',
    stack: ['C#', '.NET 8', 'WPF', 'ASP.NET Core', 'EPL / PPLB', 'Win32 spooler'],
    hue: 262,
    cover: 'grid',
    brief:
      'A perfume shop was printing its product labels through BarTender on an Argox CP-3140L thermal printer. The licence and the workflow both had to go, and the replacement had to match the old label geometry exactly, because the blank label stock was already bought and the shelf layout was built around it.',
    role: 'Sole developer. Specification, build, the shop network setup, and the rollout onto the shop PC.',
    metrics: [
      { value: '5.3x', label: 'faster label render, 44.6ms to 8.4ms' },
      { value: '~557', label: 'perfumes in the catalogue' },
      { value: '27', label: 'automated tests on print geometry' },
    ],
    built: [
      'Single-file self-contained .NET 8 WPF application. No installer: staff double-click one executable, and it can start with Windows.',
      'Label rendering that reproduces the previous software’s exact geometry, so existing label stock and shelf layout stayed valid.',
      'A catalogue of around 557 perfumes with photos and brand logos, ID search, favourites, and a print history you can reprint from.',
      'An embedded web server so a phone or tablet on the shop network can drive the printer. One tap selects, double-tap prints.',
      'Three renameable saved layout presets. Choosing a preset lives in Settings; saving and overwriting lives in the layout editor, because bundling both into one screen was tried and rejected.',
      'The perfume ID as a positionable printable element, printing the bare number with no prefix character.',
      'Auto-backup on close, plus export and import, which is also how a new build gets its settings onto the shop machine.',
      '27 automated tests covering print geometry, so a layout change cannot silently move a field.',
    ],
    hardParts: [
      {
        symptom:
          'The raw printer mode had never once produced a label. It did not error. It did not time out. The call simply never returned.',
        cause:
          'The code queued jobs through the .NET print queue API, which is part of the Windows XPS document pipeline and expects an XPS-capable driver. This printer ships a plain raw driver. Reproduced directly against the physical printer, past 45 seconds, on both threading models, which ruled out a deadlock in my own code. The job was never reaching the spooler at all.',
        fix:
          'Bypassed the document pipeline and wrote the printer command bytes straight to the Win32 spooler as a raw datatype. Print time landed between 59 and 89 milliseconds.',
      },
      {
        symptom:
          'A printer mode would work from the desktop app and do nothing from the phone. Switching it back and forth fixed it sometimes.',
        cause:
          'The settings dialog was handed the live settings object by reference, so a change applied to the running desktop app the moment it was picked, even if the dialog was cancelled. The web side read the same settings from the database and only saw them after an explicit save. Two sources of truth for one value.',
        fix:
          'The dialog now edits a clone and the app reloads from the database after it closes. One source of truth, and cancel actually cancels.',
      },
      {
        symptom: 'Printing was slow enough for staff to notice the pause.',
        cause:
          'The bitmap conversion read the image one pixel at a time, which meant roughly 195,000 individual bitmap locks for a single label.',
        fix:
          'Switched to locking the bitmap once and skipping the per-pixel maths on blank pixels, which are about 90% of a label. 44.6ms down to 8.4ms. Verified byte-identical output against the old path by fuzzing, sweeping the full alpha range, and running every supported pixel format, because a faster renderer that shifts a field by one pixel is worse than a slow one.',
      },
    ],
    reflection:
      'Two of the four printer modes turned out to be dead weight: one was an exact duplicate of another, and one ignored the layout entirely and printed at hardcoded positions. Both were removed, with old saved values migrated forward rather than silently reset. Worth recording that an earlier side-by-side test had concluded the raw mode offered no speed advantage. That test was measuring nothing, because the raw mode was hanging and falling back silently, and the slow pixel loop was hiding whatever difference remained. A benchmark that quietly compares a thing to itself is worse than no benchmark.',
  },

  {
    slug: 'shkar-store-pos',
    name: 'Point of Sale',
    client: 'Shkar Store',
    summary:
      'A till for an electronics shop selling its own stock alongside consignment items from several partners, with price bargaining built into the model.',
    kind: 'Web app',
    year: '2026',
    status: 'live',
    statusLabel: 'Live, in daily use',
    stack: ['React 19', 'Vite', 'Express 5', 'SQLite', 'i18n / RTL'],
    hue: 200,
    cover: 'ledger',
    brief:
      'A local electronics shop sells its own stock next to consignment items belonging to several partners, each on a different profit share. Bargaining on price is the norm rather than the exception, staff work from a phone as often as a desktop, and the interface had to work in both English and Kurdish.',
    role:
      'Sole developer. Built from a written specification, including the settlement model and both languages.',
    metrics: [
      { value: '10', label: 'pages, each working in both languages' },
      { value: '2', label: 'languages, one right-to-left' },
      { value: '0', label: 'database servers or native modules to install' },
    ],
    built: [
      'A till with product search, category and owner filters, barcode and SKU entry, and fractional quantities so cable can be sold by the metre.',
      'Per-line bargaining that keeps the normal price visible and warns when a price drops below what the partner is owed.',
      'Whole-basket bargaining: the cashier types one agreed total and it distributes proportionally across the lines, so no single partner absorbs the whole discount.',
      'A settlement model per partner: money back from sold items, plus their share of the profit, minus what has already been paid out.',
      'A customer debt ledger, separate from sales, with filters for owing and settled and a searchable history.',
      'Inventory with stock-level filters, inline adjustment showing a live new total, a reason field, and a full movement audit log.',
      'Reports with date-range presets and a custom range: revenue, profit, average sale, items sold, and how much was given away in bargaining, plus a separate block for balances right now.',
      'English and Kurdish Sorani throughout, right-to-left, with bilingual product names, a drawer nav and bottom-sheet cart on phones, and roles enforced on the server rather than hidden in the UI.',
    ],
    hardParts: [
      {
        symptom:
          'Changing a partner’s profit share is a routine request, and doing it the obvious way rewrites the history of every sale they were ever part of.',
        cause:
          'If a sale line reads the partner’s current percentage at report time, then editing that percentage retroactively changes what past sales earned and what the shop already paid out. Balances that were settled correctly last month stop matching the books.',
        fix:
          'The percentage is snapshotted onto every sale line at the time of sale, so history is immutable by default. Applying a new split to past sales is a separate, explicit action for when terms genuinely did change retroactively.',
      },
      {
        symptom:
          'Distributing one agreed basket total across lines from different owners is where a rounding error becomes someone being short-paid.',
        cause:
          'Proportional distribution across several lines will not divide evenly, and any remainder that gets dropped or absorbed by whichever line happens to be last is real money coming out of one partner’s share.',
        fix:
          'Verified end to end with a two-owner basket bargained to a round 40,000, which split to 32,941.18 and 7,058.82, and a partner settlement of 26,000 capital plus 3,470.59 share, coming to 29,470.59. The arithmetic closes.',
      },
      {
        symptom:
          'The database backup command wrote a file that was missing the most recent sales.',
        cause:
          'Copying a SQLite file while a write-ahead log is outstanding copies the database without the transactions still sitting in that log.',
        fix:
          'The backup checkpoints the write-ahead log before it copies. It is also the reason the open task list on this project still says to copy backups off the machine entirely: a backup living next to the database it protects is not a backup.',
      },
    ],
    reflection:
      'The parts that took the most care were the ones with no interface: the settlement formula, the snapshotted percentage, the rounding. A till that looks right and pays a partner 200 short is a worse product than an ugly one that closes the books. Still open: the Kurdish translation was written without a native speaker reviewing it, which is the next thing I would fix before calling this finished.',
  },

  {
    slug: 'sha-perfume-catalogue',
    name: 'Web Catalogue',
    client: 'Sha Perfume',
    summary:
      'A fragrance catalogue where filtering by scent accord is the primary way in, with an admin section for the people maintaining it.',
    kind: 'Web app',
    year: '2026',
    status: 'active',
    statusLabel: 'In progress',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Framer Motion'],
    hue: 38,
    cover: 'bloom',
    brief:
      'The same shop as the label printer, separate codebase. Customers browse perfumes by gender, brand and scent accord, so the filter panel is the actual product rather than a sidebar. Staff need to maintain the catalogue without touching the database directly.',
    role: 'Sole developer. Front end, admin section, and the brand design system.',
    metrics: [
      { value: '3', label: 'filter axes: gender, brand, accord' },
      { value: '1', label: 'design system, extracted and reusable' },
    ],
    built: [
      'Catalogue browsing with filters on gender, brand and scent accord, plus sorting.',
      'Accord filter chips coloured by a per-accord palette, so a scent family is recognisable before the label is read.',
      'Gender chips using the same three colours as the existing badges rather than a second, competing palette.',
      'A collapsible filter panel, because at full height it was pushing the products themselves below the fold.',
      'An admin dashboard with client-side search across name, code and brand.',
      'A per-row quick-view modal showing image, brand, gender, flags, description, accords and notes, with a shortcut straight into editing.',
      'A Supabase backend with a bundled sample-data fallback, so the app still runs and demos with no network.',
      'The brand rules, colours, accord palette, type and motion, extracted into a standalone document and mirrored as a reusable tooling profile so a future project inherits the brand instead of re-deriving it.',
    ],
    hardParts: [
      {
        symptom: 'The accord filter showed the same scent family twice, as two separate chips.',
        cause:
          'Both the facet counts and the filter itself keyed on the raw accord string straight from the data, so two different capitalisations of one word were two different facets. Selecting one silently excluded products tagged with the other.',
        fix:
          'Both paths normalise the name before it is used as a key. The bug is worth remembering as a category: any time a user-entered string becomes an identifier, the normalisation has to happen at every point that string is used as a key, not just the one where the bug was noticed.',
      },
      {
        symptom:
          'Going back to the catalogue from a perfume’s detail page threw away every filter and scrolled to the top.',
        cause:
          'The back affordance was a plain link to the catalogue route. To the browser that is a forward navigation to a fresh page, not a return, so filters, sort and scroll position had nothing to restore from.',
        fix:
          'It uses browser history instead, so the round trip preserves filters, sort and scroll position.',
      },
      {
        symptom:
          'A panel animation looked permanently stuck when checked through an automated browser, and completely fine in a real tab.',
        cause:
          'The automated browser does not reliably fire the frame callback that the animation library and anything scroll-related depend on while it is backgrounded. The animation was not stuck, it was never being ticked.',
        fix:
          'Verify animated state by reading the DOM, the accessibility attributes and computed styles, rather than waiting for a visual transition to finish. Saved chasing a bug that did not exist, and this note is why.',
      },
    ],
    reflection:
      'Extracting the design system was the highest-value thing here and it produced no visible feature. Colours, the accord palette, type and motion rules had been living in the codebase as convention, which means the next project either re-derives them or drifts. Written down once, it is inherited. One item still open: the scroll restore was verified logically but not yet watched in a real browser.',
  },

  {
    slug: 'cafe-faim',
    name: 'Café Faim',
    client: 'Café Faim, Waalwijk',
    summary:
      'A bilingual Dutch and English site for a café and patisserie, in plain HTML, CSS and JavaScript, with ordering by WhatsApp.',
    kind: 'Website',
    year: '2026',
    status: 'active',
    statusLabel: 'In progress',
    stack: ['HTML', 'CSS', 'JavaScript', 'JSON-LD'],
    hue: 340,
    cover: 'arc',
    brief:
      'A café, lunch spot and patisserie in Waalwijk in the Netherlands needed a marketing site: the concept, the lunch, drinks and pastry menus, custom cakes, a photo gallery, and opening hours. Customers order over WhatsApp, and the audience reads Dutch and English. No framework, because nothing here justified a build step or a dependency the owner would have to maintain.',
    role: 'Sole developer, and the code review pass afterwards.',
    metrics: [
      { value: '3', label: 'files: 534, 716 and 160 lines' },
      { value: '2', label: 'languages, switchable without a reload' },
      { value: '0', label: 'dependencies and no build step' },
    ],
    built: [
      'A single-page site: one HTML file at 534 lines, one stylesheet at 716, one script at 160.',
      'A language toggle driven by paired attributes on each element, swapped in JavaScript, with a fade transition and the choice remembered between visits.',
      'Reduced-motion preference respected in two separate places, not just the one that was obvious.',
      'Scroll reveal via an intersection observer, with a fallback that shows everything if the observer is unavailable, so no-JavaScript never means a blank page.',
      'A burger menu on mobile with the open state exposed to screen readers, a skip link, and a nav that gains a shadow once you scroll.',
      'Structured data describing the café, its address and its opening hours, so search results can show hours directly.',
      'WhatsApp ordering links throughout, in the current WhatsApp Business link format.',
      'Cache-busting query parameters on the stylesheet and script, so a fix reaches returning visitors rather than sitting behind a stale cache.',
    ],
    hardParts: [
      {
        symptom:
          'On some phones the cream and pink palette was being inverted into a dark theme that looked nothing like the café.',
        cause:
          'Several mobile browsers apply their own forced dark treatment to pages that do not declare which colour schemes they support. A warm, light, brand-specific palette is exactly the case that treatment handles worst.',
        fix:
          'The page declares that it supports light only, and the browsers stop rewriting it. One line, and the whole reason for the site’s existence stops being undone in transit.',
      },
      {
        symptom:
          'The site looked finished, and every link shared to WhatsApp or Instagram appeared as a bare text preview with no image.',
        cause:
          'The social preview image and canonical URL tags were missing. For a small local business where most traffic arrives through a shared link, that is the most visible thing on the page and it was not on the page at all.',
        fix:
          'Logged as the highest-impact open item on the project, alongside making the gallery image descriptions bilingual, which are currently Dutch only and inconsistent with how the rest of the page handles both languages.',
      },
    ],
    reflection:
      'One deliberate tradeoff: because the language switch happens in the browser rather than at separate URLs, the English content is not separately indexable. For a small local business whose customers arrive by search for the Dutch name or by a shared link, separate routes would have added structure for very little return. Recording it as a decision rather than discovering it later as a defect is the point.',
  },

  {
    slug: 'mujda-mursal-portfolio',
    name: 'Architecture Portfolio',
    client: 'Mujda Mursal',
    summary:
      'Thirty-three portfolio boards out of a PDF and into a site that keeps the drawings the subject, after one structural rebuild.',
    kind: 'Website',
    year: '2026',
    status: 'delivered',
    statusLabel: 'Delivered',
    stack: ['HTML', 'CSS', 'JavaScript'],
    hue: 12,
    cover: 'stack',
    brief:
      'An architect had a portfolio as a 33-board, six-project PDF. She needed something hostable that she could send as a link, built from the visual language already in her own boards rather than a template dropped over them.',
    role: 'Sole developer. Design taken from her existing boards, three rounds of revision.',
    metrics: [
      { value: '33', label: 'boards, extracted and compressed' },
      { value: '6', label: 'projects' },
      { value: '1', label: 'full structural rebuild after feedback' },
    ],
    built: [
      'An index of project titles where hovering a title raises a preview image that follows the cursor.',
      'A project view with a sticky information column beside a stacked column of boards, and previous and next navigation between projects.',
      'Hash-based routing, so every project is a link she can send on its own.',
      'A lightbox for reading a board at full size.',
      'All six projects’ text in a single data file, so she can correct a title or a description without touching the layout code.',
      'The 33 boards extracted from the source PDF and compressed for the web.',
      'Search and social preview tags, and a favicon, added in the polish pass.',
    ],
    hardParts: [
      {
        symptom:
          'The first delivery was rejected. Not the type, not the colours, the structure: a long single-scroll magazine layout with a side rail.',
        cause:
          'A continuous scroll made the six projects read as one undifferentiated stream. For a portfolio the unit is the project, and the reader wants to choose one, not be carried past all of them.',
        fix:
          'Rebuilt as an index plus a dedicated project view. Same visual language, completely different structure, and that version was accepted. The lesson was that a client saying it does not work usually means the structure, and asking which before rebuilding the visuals saves a round.',
      },
      {
        symptom:
          'The cursor preview never faded in. It tracked the pointer correctly and stayed invisible.',
        cause:
          'The reveal animation and the position tracking were writing to the same transform property, and the tracking code runs on every pointer move, so it overwrote the reveal on its first frame, every time.',
        fix:
          'Separated the position transform from the scale and opacity transform onto different elements, so tracking cannot cancel the reveal.',
      },
      {
        symptom:
          'The deliverable was one 4.5MB HTML file with everything inlined.',
        cause:
          'Convenient to hand over, and impossible to maintain or cache. A single byte changed means re-downloading everything, and editing a description means scrolling through base64.',
        fix:
          'Split into a conventional structure: an HTML entry point, a stylesheet directory, a scripts directory and an images directory. It now uploads to any static host as-is, which is what she needed.',
      },
    ],
    reflection:
      'A small interaction detail took two passes to get right. Hiding the system cursor entirely was tried and removed, and the preview thumbnail now floats above and to the right of the pointer instead of centring on it, so the arrow stays visible and you can still tell what is clickable. Still open before it goes live: the source PDF contained no contact details anywhere, so the site carries a clearly marked placeholder address that needs her real one.',
  },

  {
    slug: 'rukn-dubai',
    name: 'Rukn Dubai',
    client: 'Rukn Dubai',
    summary:
      'A property platform covering buy, rent and sell, with developments broken into individual units and three levels of staff access behind it.',
    kind: 'Web platform',
    year: '2026',
    status: 'delivered',
    statusLabel: 'Delivered',
    stack: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    hue: 168,
    cover: 'tower',
    brief:
      'A real-estate platform with two different things to list. Individual properties to buy, rent or sell, and developments, which are one project containing many units that each have their own price, floor and availability. Plus the staff side: listings submitted by the public have to be reviewed before they appear, and not everyone reviewing them should be able to manage accounts.',
    role: 'Sole developer. Public site, database schema and the administration area.',
    metrics: [
      { value: '2', label: 'listing models: properties and project units' },
      { value: '3', label: 'access levels: user, editor, administrator' },
      { value: '4', label: 'reporting views' },
    ],
    built: [
      'Public browsing split by intent into buy, rent and sell, rather than one list with a mode switch.',
      'Two listing types with their own detail pages: a standalone property, and a development with its units listed individually.',
      'Accounts with registration and sign-in, saved favourites, and a page for managing your own listings.',
      'Public listing submissions that enter a review queue instead of publishing straight to the site.',
      'An administration area with a dashboard and separate management screens for properties, developments, project units, submissions, editors and users.',
      'Four reporting views, over properties, project units, submissions and users.',
      'Three access levels, so an editor can work through the review queue without being able to manage accounts.',
      'Database credentials read from the environment with local defaults, so real credentials never need to be committed.',
    ],
    hardParts: [
      {
        symptom:
          'A development and a property look like the same thing on a listing card and behave nothing alike underneath.',
        cause:
          'A single listing has one price and one status. A development has many units, each with its own price and availability, and the development itself needs a summary that stays true as units sell. Forcing both through one table means either a column that is meaningless for half the rows, or a summary that goes stale.',
        fix:
          'Modelled as two related things, with units belonging to a development, and separate detail pages and separate reporting for each. The cost is two paths to maintain; the alternative was a listing whose price was quietly wrong.',
      },
      {
        symptom:
          'Public submissions and administrator actions arriving through the same forms and the same tables.',
        cause:
          'Anything a visitor can submit is untrusted, and anything that reaches the live site has to have been through review. Without a queue in between, one is one form field away from the other.',
        fix:
          'Submissions are a distinct stage with their own management screen and their own report, and the editor role exists specifically so the person clearing that queue does not need account management rights.',
      },
    ],
    reflection:
      'The one thing I would change is where the credentials sit. They read from the environment now, with local development defaults still present in the file, and the right end state is no working default in the source at all. Worth noting as the general shape of the problem: a default that works is a default nobody replaces.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Previous and next, wrapping, for the case-study footer. */
export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
