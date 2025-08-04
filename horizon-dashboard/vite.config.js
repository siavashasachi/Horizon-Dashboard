import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [ tailwindcss(),react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),                 // optional if you want `@/...`
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@features': path.resolve(__dirname, './src/features'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@app': path.resolve(__dirname, './src/app'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})

