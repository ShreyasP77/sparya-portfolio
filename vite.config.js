import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  define: {
    'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
    'process.env.VITE_TEMPLATE_ID': JSON.stringify(process.env.VITE_TEMPLATE_ID),
    'process.env.VITE_PUBLIC_KEY': JSON.stringify(process.env.VITE_PUBLIC_KEY),

  },
})
