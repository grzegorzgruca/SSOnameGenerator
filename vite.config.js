import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/SSOnameGenerator/', // WAŻNE: Zastąp 'NAZWA_TWOJEGO_REPOZYTORIUM' rzeczywistą nazwą swojego repozytorium GitHub

})
