import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: false // We don't need a public directory for this setup
});
