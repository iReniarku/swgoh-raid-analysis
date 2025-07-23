// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/order66',
  output: 'static',
  integrations: [mdx()],

  build: {
      assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});