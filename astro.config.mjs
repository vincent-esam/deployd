import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // Nota: Importa desde "@astrojs/vercel" (sin '/serverless')

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
});
