import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` es necesario para las URLs canónicas y el sitemap. Debe coincidir con SITE_URL en src/config.ts.
export default defineConfig({
  site: 'https://gisi.online',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
