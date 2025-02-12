import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  build: {
    outDir: "dist",
  },
  vite: {
    ssr: {
      external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'],
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "server/entry.mjs", // Esto debería mover el archivo correctamente
        },
        external: ['mysql2', 'process', 'crypto', 'stream', 'jsonwebtoken'],
      },
    },
  },
});
