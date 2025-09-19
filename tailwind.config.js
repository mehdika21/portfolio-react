/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F6E9D6',
        gold: '#D4AF37',
        teal: '#3BA3A9',
        straw: '#F2C14E',
        ocean: '#0B1B2A',
        fire: '#FF6A3D',
        chef: '#0ED3CF',
        gum: '#F43F5E',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

