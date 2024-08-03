/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontOpticalSizing: {
        'auto': 'auto',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.font-optical-sizing-auto': {
          fontOpticalSizing: 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

