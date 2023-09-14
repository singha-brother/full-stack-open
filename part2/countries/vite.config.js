import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// export default defineConfig(
//   plugins: [react()],
//   ({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     define: {
//       'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
//       // If you want to exposes all env variables, which is not recommended
//       // 'process.env': env
//     },
//   }
// })
