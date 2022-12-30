import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// antd css 按需引入( @5.x以后不需要)
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
