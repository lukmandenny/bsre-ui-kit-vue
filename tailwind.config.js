// bsre-ui-library/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // Panggil Preset disini
  presets: [require('./tailwind.preset.js')],

  // Content tetap spesifik untuk library ini
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
};
