/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens (default "lg" breakpoint)
        'xl': '1280px',
        '2xl':'1440px',  // Extra-large screens
      },
    },
  },
  plugins: [],
}

