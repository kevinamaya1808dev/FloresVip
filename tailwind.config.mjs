/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'petalo-moss': '#8B9A8B',
        'petalo-cream': '#FFF8F0',
        'petalo-rose': '#E8C5C5',
        'petalo-dark': '#2D3436',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'petalo': '8px',
      }
    },
  },
  plugins: [],
}