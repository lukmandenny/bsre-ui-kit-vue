/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Font Utama
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      // Token Warna BSrE
      colors: {
        'bsre-blue': {
          lightest: '#EAF6FC', // 50
          lighter: '#D5EEF9', // 100
          light: '#6DC3EA', // 300
          DEFAULT: '#2FAAE1', // Main Brand (500)
          dark: '#2588B4', // 700
          darker: '#12445A', // 800
          darkest: '#0E3343', // 900
        },
        'bsre-green': {
          lightest: '#E7F8F2',
          lighter: '#CFF1E5',
          light: '#57CEA6',
          DEFAULT: '#10B981',
          dark: '#0C9467',
          darker: '#064A33',
          darkest: '#043726',
        },
        'bsre-yellow': {
          lightest: '#FEF5E6',
          lighter: '#FDEBCE',
          light: '#F8BB54',
          DEFAULT: '#F59E0B',
          dark: '#C47E08',
          darker: '#623F04',
          darkest: '#492F03',
        },
        'bsre-red': {
          lightest: '#FBE7EC',
          lighter: '#F7D0D9',
          light: '#E45C7C',
          DEFAULT: '#D91744',
          dark: '#AD1236',
          darker: '#56091B',
          darkest: '#410614',
        },
        'bsre-purple': {
          lightest: '#F9EDFB',
          lighter: '#F4DBF8',
          light: '#DB81E8',
          DEFAULT: '#CC4BDF',
          dark: '#A33CB2',
          darker: '#511E59',
          darkest: '#3D1642',
        },
        // Warna Dasar & Teks
        'bsre-white': '#FFFFFF',
        'bsre-gray': '#808390',
        'bsre-text': {
          primary: '#2F2B3D', // 100%
          secondary: '#2F2B3DB3', // 70%
          subtitle: '#2F2B3D8C', // 55%
          disable: '#2F2B3D66', // 40%
        },
      },
      // Token Radius
      borderRadius: {
        0: '0',
        xxs: '2px',
        xs: '4px',
        sm: '6px',
        base: '12px',
        lg: '16px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
