/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#A084E8',
        accent: '#F6F4FF'
      }
    },
  },
  plugins: [],
}
