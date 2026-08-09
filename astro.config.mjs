import { defineConfig } from 'astro/config';

/**
 * The public address of the site.
 *
 * This is written into every canonical link, the Open Graph URL, and the social
 * preview image URL, so it has to be the address people actually visit. It used
 * to be a hardcoded placeholder domain that nobody owns, which is worse than
 * having none: it tells search engines the real pages live somewhere else.
 *
 * Netlify, Vercel and Cloudflare Pages each expose the deploy URL, so a normal
 * deploy is correct with no configuration. Set `SITE_URL` to override, which is
 * what a custom domain needs, since the host variables point at the
 * `*.netlify.app` / `*.pages.dev` address rather than the custom one.
 */
const resolveSite = () => {
  const explicit = process.env.SITE_URL;
  if (explicit) return explicit;

  if (process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Netlify. `URL` is the canonical site address, not the per-deploy preview.
  if (process.env.URL) return process.env.URL;

  return 'http://localhost:4321';
};

export default defineConfig({
  site: resolveSite(),
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
