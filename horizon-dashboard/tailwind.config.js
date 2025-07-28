/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        footer: {
          text: 'var(--footer-text)',
          bg: 'var(--footer-bg)',
        },
      },
    },
  },
  plugins: [],
}
