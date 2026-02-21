// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: './', // Change this to relative so it works everywhere
//   server: {
//     port: 3000,
//   }
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/This-is-my-Elementary-Literacy-Website/', // This matches your repo name exactly
})
