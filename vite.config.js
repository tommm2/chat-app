import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/chat-app/',
  alias: {
    "/@": path.resolve(__dirname, "src")
  },
  css: {
    preprocessorOptions: {
      scss: { 
        additionalData: `@import '/@/style/index.scss';`}
    },
  },
})
