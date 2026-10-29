import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://koolo2334.github.io',
  integrations: [mdx()],
});
