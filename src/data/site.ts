/**
 * All content for the site, in one file.
 *
 * Personal details come from the CV. Anything marked EDIT ME is a placeholder
 * that has to be filled in before this goes public.
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
  /** Three points, maximum. */
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
  pitchLead: 'software that takes the slow part of your day and removes it',

  intro:
    'I build software that real shops use every day. A label printer on a counter, a till that handles partner stock in two languages, catalogue and cafe sites. Fourth-year computer engineering student at Tishk University.',

  email: 'ibrahimmursal2004@gmail.com',
  phone: '+964 750 599 8014',
  /** City only. The street on the CV is deliberately not published. */
  location: 'Hawler (Erbil), Iraq',

  links: [
    // Real, from the phone number on the CV.
    { label: 'WhatsApp', href: 'https://wa.me/9647505998014' },
    // EDIT ME: both still placeholders. Deleting an entry removes it from the
    // page and the footer automatically.
    { label: 'GitHub', href: 'https://github.com/EDIT-ME' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/EDIT-ME' },
  ],

  education: {
    school: 'Tishk University',
    field: 'Computer Engineering',
    period: '2023 to present',
    standing: 'Fourth year',
  },

  /** Companies worked with. Names only. */
  clients: ['Jir Home', 'Revge', 'Sha Perfume'],

  skills: [
    'C#',
    '.NET',
    'React',
    'TypeScript',
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
        'Labels render 5.3x faster than the first version',
        'Print from any phone on the shop network',
        'One file to run, no installer',
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
        'Filter by scent accord, brand or price',
        'Admin area for the team',
        'Photos and brand logos throughout',
      ],
      stack: ['React', 'TypeScript', 'Supabase'],
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
      points: ['Dutch and English', 'Menu and opening hours', 'Fast on a phone'],
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
        'Bargaining on price is built in',
        'Splits profit per partner automatically',
        'English and Kurdish, phone or desktop',
      ],
      stack: ['React', 'Express', 'SQLite'],
      mark: 'till',
    },
  ] satisfies Project[] as Project[],
} as const;
