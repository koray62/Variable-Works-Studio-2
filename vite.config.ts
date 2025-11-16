// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path'; // ← ESM uyumlu

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // publicDir / copyPublicDir varsayılanları zaten bunlar, yazmasan da olur
  // publicDir: 'public',
  // build: { copyPublicDir: true },
});
