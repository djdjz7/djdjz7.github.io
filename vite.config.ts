import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: '192.168.10.103'
  },
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
