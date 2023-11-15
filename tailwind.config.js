/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          'from': { transform: 'translateX(100px)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeOut: {
          'to': { opacity: 0 },
        },
      },
      animation: {
        'toast': 'slideInLeft ease .4s, fadeOut linear 1s 2s forwards',
      },
    },
  },
  plugins: [],
}

