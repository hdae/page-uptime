import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/page-uptime",
  plugins: [svelte()],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/")
    }
  }
})
