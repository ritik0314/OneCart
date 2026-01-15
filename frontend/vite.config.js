import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'detect-libc': path.resolve(__dirname, 'src/shims/detect-libc.js')
    }
  }
})
