import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 Permite conexiones desde fuera de localhost
    port: 5173,
    allowedHosts: ['5d15000ff16e.ngrok-free.app'] // 👈 Permite el dominio de ngrok
  }
})
