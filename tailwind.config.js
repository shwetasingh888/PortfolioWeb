/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',      // violet
        secondary: '#23C4ED',    // cyan
        accent: '#F6F4FF',       // light background
        dark: '#1E1E2F',         // dark for text / cards
      },
    },
  },
  plugins: [],
}
