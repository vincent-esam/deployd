import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; 
// También podrías usar '@astrojs/vercel/edge' si quieres funciones Edge

export default defineConfig({
  // Indica que quieres generar una app del lado del servidor
  output: 'server',

  // Adaptador oficial para Vercel
  adapter: vercel(),

  // Integraciones que uses (React, Vue, Svelte, etc.)
  integrations: [react()],

  // Ajustes de build (si deseas personalizar)
  build: {
    outDir: 'dist',
  },

  // Ajustes de Vite (si necesitas externalizar paquetes)
  vite: {
    ssr: {
      external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'],
    },
    build: {
      rollupOptions: {
        output: {
          // Puedes mantenerlo si quieres un nombre de entry distinto;
          // El adaptador de Vercel se encarga de la mayoría de cosas,
          // así que no siempre es necesario personalizar esto.
          entryFileNames: 'server/entry.mjs',
        },
        external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'],
      },
    },
  },
});
