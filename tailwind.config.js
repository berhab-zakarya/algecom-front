/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          outfit: ['Outfit', 'sans-serif'],
        },
        colors: {
          primary: '#1E3A8A',
          secondary: '#4299e1',
          accent: '#48bb78',
        },
      },
    },
    plugins: [],
  }