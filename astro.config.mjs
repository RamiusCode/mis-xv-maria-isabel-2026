// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ⚠️ CAMBIAR por el dominio real antes de subir: WhatsApp necesita la
  // URL absoluta de la miniatura, si queda en localhost no la muestra.
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()]
  }
});