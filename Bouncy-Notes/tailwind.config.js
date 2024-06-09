/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oleo': ['"Oleo Script"', 'cursive'],
      },
      fontSize: {
        'logo': '40px',
      },
    },
  },
  plugins: [],
}

