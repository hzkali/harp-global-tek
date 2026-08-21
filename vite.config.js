import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { readdirSync } from 'node:fs';

const root = dirname(fileURLToPath(import.meta.url));

const htmlEntries = readdirSync(root)
  .filter((file) => file.endsWith('.html'))
  .reduce((entries, file) => {
    entries[basename(file, '.html')] = resolve(root, file);
    return entries;
  }, {});

export default defineConfig({
  root,
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: htmlEntries,
    },
  },
});
