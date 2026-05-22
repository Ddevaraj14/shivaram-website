/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060606',
          900: '#0A0A0A',
          800: '#111111',
          700: '#161616',
          600: '#1E1E1E',
          500: '#2A2A2A',
          400: '#555555',
          300: '#8A8A8A',
          200: '#C0C0C0',
          100: '#F2F2F2',
          50:  '#FAFAFA',
        },
        electric: '#4F8EF7',
        violet: '#9B7FEA',
        amber:  { DEFAULT: '#F59E0B' },
        emerald:{ DEFAULT: '#10B981' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
