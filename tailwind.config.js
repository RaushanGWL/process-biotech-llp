/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // ✅ important for TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}