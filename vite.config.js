import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              primary: '#0f9e99',        // Tropical Teal
              background: '#efe9e0',     // Soft Ivory
              text: '#333',              // Dark text for readability
            },
            fontFamily: {
              sans: ['Sansation', 'sans-serif'],  // Sansation as default sans-serif
            },
          },
        },
        content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
      },
    }),
  ],
});
