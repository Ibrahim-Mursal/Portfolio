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
  /**
   * A real screenshot of the project, in `public/work/`. Never a mockup: each
   * one is the actual app or site (see the README for how they were taken).
   */
  image?: Picture;
  /** Drawn motif, used only when a project has no picture. */
  mark?: 'label' | 'bottle' | 'cup' | 'till';
  /** Drawn across the whole grid. One per page. */
  featured?: boolean;
  /** His own work rather than a client's: the maker's mark drops the client initials. */
  own?: boolean;
  /** The same product set up for another client, each with its own true status. */
  alsoFor?: { client: string; status: string; inUse: boolean }[];
  /** Only for work anyone can open right now. */
  url?: Link;
}

export interface Picture {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Link {
  href: string;
  label: string;
}

export const site = {
  name: 'Ibrahim Mursal',
  role: 'Computer engineering student',

  /**
   * The headline, split so the accent colour lands on the second half. Kept in
   * two parts rather than one string because the hero needs the break point,
   * and kept here rather than hardcoded in the page so there is one copy of it.
   */
  pitch: { lead: 'I make your job', accent: 'easier and faster' },

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

  /**
   * Sits directly under the phone and city, so the pair reads as both at once:
   * based in Hawler, and open to work anywhere.
   */
  availability: 'Available worldwide · remote',

  // Deleting an entry removes it from the contact section and the footer.
  links: [
    // Built from the phone number below.
    { label: 'WhatsApp', href: 'https://wa.me/9647505998014' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibrahim-mursal/' },
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
    { name: 'Maisoura', logo: '/logos/maisoura.png', logoHeight: '2.6rem' },
    { name: 'Sha Attar', logo: '/logos/sha-attar.png', logoHeight: '3.6rem' },
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

  /**
   * The Work section, chosen by Ibrahim from the projects in his vault
   * (C:\Desktop\MyBrain\01-Projects). Every status must be true today: when a
   * project's real state changes, change it here. A stamp that overclaims is
   * worse than no stamp.
   */
  projects: [
    {
      name: 'Label Printer',
      client: 'Sha Perfume',
      kind: 'Desktop app',
      status: 'In daily use',
      inUse: true,
      summary: 'Replaced the shop’s licensed label software.',
      points: [
        'Print from any phone on the network',
        'Search 550+ perfumes by ID, with photos',
        'Saved layouts, reprint from history',
      ],
      stack: ['C#', '.NET 8', 'WPF', 'ASP.NET Core'],
      image: {
        src: '/work/label-printer.webp',
        alt: 'The label printer app: copies, print and phone buttons, favourite and recent perfumes, a search box and perfume cards with photos.',
        width: 1200,
        height: 712,
      },
      mark: 'label',
      featured: true,
      alsoFor: [{ client: 'Sha Attar', status: 'In use', inUse: true }],
    },
    {
      name: 'Web Catalogue',
      client: 'Sha Perfume',
      kind: 'Website',
      status: 'In use',
      inUse: true,
      summary: 'A fragrance catalogue browsable by scent, with an admin area for the team.',
      points: [
        'Filter by accord, brand or price',
        'Photos, notes and accords per fragrance',
        'Admin area to add and edit it',
      ],
      stack: ['React', 'Supabase'],
      image: {
        src: '/work/catalogue.webp',
        alt: 'The Sha Perfume catalogue: search, filters and a grid of perfume bottles with their notes.',
        width: 1200,
        height: 750,
      },
      mark: 'bottle',
      alsoFor: [{ client: 'Sha Attar', status: 'Live', inUse: true }],
    },
    {
      name: 'Cafe Faim',
      client: 'Cafe Faim',
      kind: 'Website',
      status: 'In use',
      inUse: true,
      summary: 'Site for a Dutch cafe, in Dutch and English.',
      points: [
        'Menu, hours and location',
        'Dutch and English',
        'Marked up for Google search',
      ],
      stack: ['React', 'Vite', 'Supabase'],
      image: {
        src: '/work/cafe-faim.webp',
        alt: 'The Cafe Faim home page: “We cake you happy!” over a photo of the café, with menu and cake-order buttons.',
        width: 1200,
        height: 750,
      },
      mark: 'cup',
      url: { href: 'https://www.cafefaim.nl', label: 'cafefaim.nl' },
    },
    {
      /*
       * Was in daily use at the shop until 2026-08-04, when the install and its
       * data were lost. Rebuilt and tested on 2026-08-07; it runs with sample
       * stock until the shop's real stock is entered.
       */
      name: 'POS System',
      client: 'Shkar Store',
      kind: 'Web app',
      status: 'Ready to install',
      inUse: false,
      summary: 'A till for an electronics shop selling its own stock next to partner items.',
      points: [
        'Bargaining built into every sale',
        'Splits profit per partner',
        'English and Kurdish, phone or desktop',
      ],
      stack: ['React', 'Express', 'SQLite'],
      image: {
        src: '/work/pos.webp',
        alt: 'The POS till with sample stock: products by category and owner, and a sale of three items totalling 67,500 IQD.',
        width: 1200,
        height: 750,
      },
      mark: 'till',
    },
    {
      name: 'Owlava',
      client: 'My brand',
      kind: 'Website',
      status: 'Live',
      inUse: true,
      summary: 'The website for Owlava, my software studio in Erbil.',
      points: [
        'Services, work and contact on their own pages',
        'Contact form that keeps every enquiry',
        'Dark design built around the owl logo',
      ],
      stack: ['Next.js', 'TypeScript', 'Cloudflare'],
      image: {
        src: '/work/owlava.webp',
        alt: 'The Owlava home page: “We see in the dark. Then we ship fire.” beside the orange and white owl logo.',
        width: 1200,
        height: 750,
      },
      own: true,
      url: { href: 'https://owlava.com', label: 'owlava.com' },
    },
  ] satisfies Project[] as Project[],
} as const;
