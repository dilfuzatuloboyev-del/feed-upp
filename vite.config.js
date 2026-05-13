import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Mana buni qo'shasiz

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Va buni pluginlar ro'yxatiga qo'shasiz
  ],
})
