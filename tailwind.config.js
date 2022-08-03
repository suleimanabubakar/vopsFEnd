/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bluish': '#2028EB',
          'greenish': '#92F8E0',
        }
      },
    },
    plugins: [],
  }