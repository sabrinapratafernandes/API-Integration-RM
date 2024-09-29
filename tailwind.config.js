/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          purple: '#A149FA',
          blue: '#3B44F6',
          green: '#3EC70B',
          yellow: '#F7EC09'
        }
    },
  },
  plugins: [],
}

