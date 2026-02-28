// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: './', // Change this to relative so it works everywhere
//   server: {
//     port: 3000,
//   }
// })



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // This is the correct base for GitHub Pages hosting on a project repo
//   base: '/This-is-my-Elementary-Literacy-Website/', 
// })


// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
  
//   return {
//     plugins: [react()],
//     base: '/This-is-my-Elementary-Literacy-Website/',
//     define: {
//       // This allows you to use import.meta.env.VITE_API_URL in your fetch calls
//       'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL)
//     }
//   }
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures your assets are linked correctly relative to your repo name
  base: '/This-is-my-Elementary-Literacy-Website/',
})
