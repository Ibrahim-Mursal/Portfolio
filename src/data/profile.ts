/**
 * Everything about me that appears on the site, in one place.
 *
 * Sourced from the CV. Anything still marked EDIT ME is a placeholder that has
 * to be filled in before this site goes public. Nothing here is invented: if a
 * fact was not known at build time it is a placeholder rather than a guess.
 */

export const profile = {
  name: 'Ibrahim Mursal',
  role: 'Computer engineering student',

  tagline:
    'Computer engineering student building software that goes into daily use in real shops, then staying with it until the parts that actually break are fixed.',

  intro:
    'Third-year computer engineering student at Tishk University, working on desktop, web and point-of-sale software alongside my studies. Most of it ships to one client and runs every day: a thermal-label printer on a shop counter, a till handling consignment stock in two languages, a café site in Dutch and English. The interesting part of that work is almost never the feature list, so this site is organised around what was hard instead.',

  email: 'ibrahimmursal2004@gmail.com',
  phone: '+964 750 599 8014',
  /** City only. The street on the CV is deliberately not published. */
  location: 'Hawler (Erbil), Iraq',

  links: [
    // Real, derived from the phone number on the CV.
    { label: 'WhatsApp', href: 'https://wa.me/9647505998014' },
    // EDIT ME: both still placeholders. Deleting an entry removes it from the
    // footer and the contact section automatically.
    { label: 'GitHub', href: 'https://github.com/EDIT-ME' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/EDIT-ME' },
  ],

  education: {
    school: 'Tishk University',
    field: 'Computer Engineering',
    period: '2023 to present',
    standing: 'Junior, third year',
  },

  /**
   * Only work that bears on engineering. The hotel reception and management
   * roles on the CV are left out on purpose.
   */
  experience: [
    {
      org: 'Sha Perfume',
      role: 'Graphic design and data entry, website content',
      period: '2026',
      points: [
        'Edited and enhanced more than 500 product images.',
        'Performed the catalogue data entry behind the web catalogue listed below.',
        'Kept naming and formatting consistent across a large body of records.',
      ],
    },
  ],

  /** Spoken languages, from the CV. */
  spokenLanguages: ['Kurdish', 'English', 'Arabic', 'Turkmani'],

  /** From the CV's skills section. */
  strengths: [
    'Project management',
    'Time management',
    'Teamwork',
    'Leadership',
    'Effective communication',
    'Critical thinking',
    'Public relations',
    'Fast learner',
  ],

  /** Non-programming computer skills, from the CV. */
  alsoUses: [
    'Microsoft Office',
    'AI tools',
    'Graphic design and image enhancement',
    'Data entry and typing',
  ],

  /**
   * How I work. Each of these is a position I actually took on a real
   * project, not a value statement.
   */
  principles: [
    {
      title: 'Reproduce it against the real thing',
      body:
        'A print job that hung forever looked like a threading bug. It was not. Testing directly against the physical printer, past 45 seconds, on two different thread models, is what ruled that out and pointed at the driver instead.',
    },
    {
      title: 'One source of truth, or none',
      body:
        'A settings dialog handed the live object by reference and a web UI reading the same values from a database produce a bug that cannot be reproduced from either side alone. Most confusing behaviour I find turns out to be two copies of the same state.',
    },
    {
      title: 'Measure before optimising, verify after',
      body:
        'A label render went from 44.6ms to 8.4ms. The number is the easy half. The half that matters is proving the faster path produces byte-identical output across every pixel format before it goes anywhere near a client.',
    },
    {
      title: 'A backup next to the thing it backs up is not a backup',
      body:
        'Learned the hard way. Client code and client data now live outside anything I might reorganise, and backups get copied off the machine, not into a subfolder of the project.',
    },
    {
      title: 'Say no to the wrong feature',
      body:
        'Batch printing got declined twice on the printer project and stayed declined. Choosing a saved layout lives in Settings; saving one lives in the layout editor. Separating actions by intent beats bundling them into one clever screen.',
    },
    {
      title: 'Hand over something that runs',
      body:
        'Not a chat transcript and not a zip of snippets. A single-file executable that starts with Windows, or a folder with index.html and a css directory that uploads to any static host as-is.',
    },
  ],

  toolkit: [
    {
      group: 'Languages',
      items: ['C#', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
    },
    {
      group: 'Data',
      items: ['SQLite', 'MySQL', 'Supabase / Postgres'],
    },
  ],
} as const;

export type Profile = typeof profile;
