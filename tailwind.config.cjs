/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        'eco-forest': '#2F4F4F',
        'eco-sage': '#8FBC8F',
        'eco-earth': '#CD853F',
        'eco-beige': '#F5F5DC',
        'eco-white': '#FFFFFF',
        border: '#E2E8F0',
        background: '#FFFFFF',
        foreground: '#1F2937'
      },
      borderColor: {
        DEFAULT: '#E2E8F0'
      }
    },
  },
  plugins: [],
}
