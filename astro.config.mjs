import { defineConfig } from 'astro/config';

// EDIT ME: `site` below is a placeholder, not a domain you own. It is written
// into every canonical link and Open Graph URL on the site, so it has to be
// changed before this goes public, and public/robots.txt changed to match.
export default defineConfig({
  site: 'https://ibrahimmursal.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
