import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node'; // Asegúrate de importar correctamente


export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }), // Usa Node.js en lugar de Vercel
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
