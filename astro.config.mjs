// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ivanros02.github.io',
  base: '/landing_saint_michelle',
  vite: {
    plugins: [tailwindcss()]
  }
});