import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: This tells Vite that the app will be served from the /digi/ subdirectory on GitHub Pages
  // This must match your GitHub repository name exactly.
  base: "/digi/",
})
