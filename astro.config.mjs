// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// Automatically get repository name from GitHub context or use 'order66' as fallback
const getBasePath = () => {
  if (process.env.NODE_ENV !== 'production') return '/';
  
  // Try to get repository name from GitHub context
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'order66';
  return `/${repoName}`;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: getBasePath(),
  output: 'static',
  integrations: [mdx()],

  build: {
      assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});