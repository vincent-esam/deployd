import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/server'; // Cambiado a Vercel

export default defineConfig({
  output: 'server',
  adapter: vercel(), // Ahora usa Vercel
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
