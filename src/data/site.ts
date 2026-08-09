/**
 * All content for the site, in one file.
 *
 * Personal details come from the CV and are all real. The one placeholder left
 * in the project is the domain in astro.config.mjs.
 */

export interface Project {
  name: string;
  client: string;
  kind: string;
  /** Short status label. */
  status: string;
  /** In use right now, which gets the accent badge. */
  inUse: boolean;
  /** One or two sentences. Keep it short. */
  summary: string;
  /**
   * The three main things it does, from the point of view of the person using
   * it. Not development notes: "renders 5.3x faster than the first version"
   * describes my week, "print from any phone on the shop network" describes
   * what they get.
   */
  points: string[];
  stack: string[];
  /** Which motif the card mark draws. */
  mark: 'label' | 'bottle' | 'cup' | 'till';
}

export const site = {
  name: 'Ibrahim Mursal',
  role: 'Computer engineering student',

  /** The pitch. */
  pitch: 'We make your job easier and faster.',

  /**
   * Search-result and link-preview text. Separate from `intro` because that one
   * is about how I work, which tells a search engine nothing about what I make.
   */
  metaDescription:
    'Desktop and web software for shops: label printing, point of sale, catalogues and websites. Built and supported by Ibrahim Mursal in Hawler, Iraq.',

  /**
   * The About text.
   *
   * Says nothing about the projects: the work section directly above already
   * does. It also does not repeat the degree and university, which the Studying
   * panel beside it carries. Short sentences and plain words on purpose.
   */
  intro:
    'Tell me the problem. I build it, set it up in your shop, and show your team how to use it. Then it just runs, with no IT department needed.',

  email: 'ibrahimmursal2004@gmail.com',
  phone: '+964 750 599 8014',
  /** City only. The street on the CV is deliberately not published. */
  location: 'Hawler (Erbil), Iraq',

  // Deleting an entry removes it from the contact section and the footer.
  links: [
    // Built from the phone number below.
    { label: 'WhatsApp', href: 'https://wa.me/9647505998014' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibrahim-mursal-142b5a368/' },
  ],

  education: {
    school: 'Tishk University',
    field: 'Computer Engineering',
    period: '2023 to present',
    standing: 'Fourth year',
  },

  /**
   * Companies worked with, shown in the scrolling strip.
   *
   * `logo` points at a file in `public/logos/`. Without it the name renders as
   * a text wordmark instead. Never substitute a lookalike mark for a missing
   * logo: an invented logo misrepresents someone else's company.
   *
   * `logoHeight` is set per logo because these three have very different
   * proportions: Revge is a wide wordmark at 3.1:1, Jir Home is a tall stacked
   * lockup at 0.77:1. One shared height would render Revge three times the
   * width of the others and let it dominate the row, so each is sized to look
   * like equal weight rather than equal height.
   */
  clients: [
    { name: 'Jir Home', logo: '/logos/jir-home.png', logoHeight: '3.9rem' },
    { name: 'Revge', logo: '/logos/revge.png', logoHeight: '2rem' },
    { name: 'Sha Perfume', logo: '/logos/sha-perfume.png', logoHeight: '3.4rem' },
  ] as { name: string; logo?: string; logoHeight?: string }[],

  skills: [
    'C#',
    '.NET',
    'React',
    'JavaScript',
    'C++',
    'SQL',
    'MySQL',
    'SQLite',
    'Supabase',
    'HTML',
    'CSS',
  ],

  languages: ['Kurdish', 'English', 'Arabic', 'Turkmani'],

  projects: [
    {
      name: 'Label Printer',
      client: 'Sha Perfume',
      kind: 'Desktop app',
      status: 'In daily use',
      inUse: true,
      summary:
        'Replaced the shop’s licensed label software. Staff print from the counter PC or from a phone anywhere in the store.',
      points: [
        'Print from any phone on the shop network',
        'Search around 550+ perfumes by ID, with photos and brand logos',
        'Saved label layouts and a print history you can reprint from',
      ],
      stack: ['C#', '.NET 8', 'WPF', 'ASP.NET Core'],
      mark: 'label',
    },
    {
      name: 'Web Catalogue',
      client: 'Sha Perfume',
      kind: 'Website',
      status: 'In use',
      inUse: true,
      summary:
        'A fragrance catalogue you browse by scent, with an admin area for the team who keep it current.',
      points: [
        'Browse and filter by scent accord, brand or price',
        'Every fragrance has its own photos, notes and accords',
        'Admin area so the team can add and edit it themselves',
      ],
      stack: ['React', 'Supabase'],
      mark: 'bottle',
    },
    {
      name: 'Cafe Faim',
      client: 'Cafe Faim',
      kind: 'Website',
      status: 'In use',
      inUse: true,
      summary:
        'Site for a Dutch cafe. Menu, opening hours and location, in Dutch and English.',
      points: [
        'Menu, opening hours and how to find the place',
        'Dutch and English',
        'Hours and address marked up so Google can show them in search',
      ],
      stack: ['HTML', 'CSS', 'JavaScript'],
      mark: 'cup',
    },
    {
      name: 'POS System',
      client: 'Shkar Store',
      kind: 'Web app',
      status: 'In daily use',
      inUse: true,
      summary:
        'A till for an electronics shop that sells its own stock next to partner consignment items.',
      points: [
        'Bargaining on price is built into every sale',
        'Splits the profit per partner automatically',
        'English and Kurdish, on a phone or a desktop',
      ],
      stack: ['React', 'Express', 'SQLite'],
      mark: 'till',
    },
  ] satisfies Project[] as Project[],
} as const;
