/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'uxbee-white': '#ffffff',
        'uxbee-black': '#000000',
        'uxbee-yellow': '#ffbc00',
        'uxbee-silver': '#A0A0A0',
        'uxbee-silver_dark': '#979797',
        'uxbee-silver_light': '#f8f8f8',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
