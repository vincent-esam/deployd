// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [react()],
  vite: {
    ssr: {
      external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'], // Externaliza más dependencias
    },
    build: {
      rollupOptions: {
        external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'],
      },
    },
  },
});
