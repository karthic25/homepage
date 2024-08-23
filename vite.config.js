import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    https: {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
    },
    watch: {
      usePolling: true, // Optional: Use polling if file changes are not detected
    },
    hmr: {
      overlay: true, // Enable HMR overlay for error messages
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
