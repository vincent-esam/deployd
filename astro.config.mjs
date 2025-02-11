// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'; // Asegúrate de importar la integración de React
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [react()] // Agrega la integración de React aquí
});
