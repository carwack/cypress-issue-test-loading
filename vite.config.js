import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), basicSsl()], // Adding basicSsl plugin causes the issue of Your tests are loading...
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { // adding server options casues the issue as well
    https: true,
    port: 5174,
    proxy: {
      '/api-proxy': {
        target: 'https://localhost:8001/',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, ''),
      },
    },
  },
})
