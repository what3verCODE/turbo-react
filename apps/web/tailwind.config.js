/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  presets: [require('@repo/ui/tailwind.config.js')],
  theme: {
    extend: {},
  },
  plugins: [],
}

