/**
 * Everything about me that appears on the site, in one place.
 *
 * Anything marked EDIT ME is a placeholder that has to be filled in before
 * this site goes public. Nothing here is invented: if a fact was not known
 * at build time it is a placeholder rather than a guess.
 */

export const profile = {
  name: 'Ibrahim Mursal',
  role: 'Software developer',

  // Shown in the hero. Two sentences, no adjective inflation.
  tagline:
    'I build software that goes into daily use in real shops and small businesses, then stay with it until the parts that actually break are fixed.',

  intro:
    'Freelance developer working across desktop, web and point-of-sale. Most of my work ships to one client and runs every day: a thermal-label printer on a shop counter, a till handling consignment stock in two languages, a café site in Dutch and English. The interesting part of that work is almost never the feature list, so this site is organised around what was hard instead.',

  // EDIT ME: confirm this is the address you want publicly listed. It is the
  // one on your machine, which is not necessarily the one for clients.
  email: 'ibrahimmursal2004@gmail.com',

  // EDIT ME: all three are placeholders. Delete any you do not want a link for
  // and it disappears from the footer and the contact section automatically.
  links: [
    { label: 'GitHub', href: 'https://github.com/EDIT-ME', handle: '@EDIT-ME' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/EDIT-ME', handle: 'EDIT ME' },
    { label: 'WhatsApp', href: 'https://wa.me/EDIT-ME', handle: 'EDIT ME' },
  ],

  // EDIT ME: not recorded anywhere I could read, so left blank rather than
  // guessed from the currency and language of your projects.
  location: '',

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

  /**
   * Toolkit. Grouped, and only things used on the projects listed on this
   * site, so the list stays checkable against the case studies.
   */
  toolkit: [
    {
      group: 'Languages',
      items: ['C#', 'TypeScript', 'JavaScript', 'PHP', 'C++', 'SQL', 'HTML', 'CSS'],
    },
    {
      group: 'Desktop',
      items: ['.NET 8', 'WPF', 'ASP.NET Core', 'Win32 spooler API', 'EPL / PPLB'],
    },
    {
      group: 'Web',
      items: ['React 19', 'Astro', 'Vite', 'Tailwind', 'Express 5', 'Framer Motion'],
    },
    {
      group: 'Data',
      items: ['SQLite', 'MySQL', 'Supabase', 'PostgreSQL'],
    },
    {
      group: 'Practice',
      items: ['Automated testing', 'Profiling', 'i18n and RTL', 'Accessibility', 'Static hosting'],
    },
  ],
} as const;

export type Profile = typeof profile;
