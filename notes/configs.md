### Add Proxy

- so that we don't need to use full url in frontend project
- instead use like `const url = "/api/persons"`
- in `vite.config.js` file

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // your backend URL
        changeOrigin: true,
      },
    }
  },
})
```

