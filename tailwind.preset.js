// bsre-ui-library/tailwind.preset.js

module.exports = {
  theme: {
    extend: {
      // 1. Font Utama
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },

      // 2. Color Pallete
      colors: {
        // 1. Base Colors
        base: {
          white: '#FFFFFF',
          black: '#111827',
        },

        // 2. Neutral / Gray
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          DEFAULT: '#6B7280',
        },

        // 3. Semantic & Brand Colors
        primary: {
          // Biru BSrE
          50: '#EAF6FC',
          100: '#D5EEF9',
          200: '#B5E0F4',
          300: '#8FD0EE',
          400: '#6DC3EA',
          500: '#2FAAE1',
          600: '#2588B4',
          700: '#1A668A',
          800: '#12445A',
          900: '#0E3343',
          DEFAULT: '#2FAAE1',
        },
        success: {
          // Hijau
          50: '#E7F8F2',
          100: '#CFF1E5',
          200: '#9DE3CB',
          300: '#57CEA6',
          400: '#33C393',
          500: '#10B981',
          600: '#0C9467',
          700: '#096F4D',
          800: '#064A33',
          900: '#043726',
          DEFAULT: '#10B981',
        },
        warning: {
          // Kuning
          50: '#FEF5E6',
          100: '#FDE8CE',
          200: '#FBD49F',
          300: '#F8BB54',
          400: '#F6AC2C',
          500: '#F59E0B',
          600: '#C47E08',
          700: '#935E06',
          800: '#623F04',
          900: '#492F03',
          DEFAULT: '#F59E0B',
        },
        danger: {
          // Merah
          50: '#FBE7EC',
          100: '#F7D0D9',
          200: '#F0A6B8',
          300: '#E45C7C',
          400: '#DB3A60',
          500: '#D91744',
          600: '#AD1236',
          700: '#820D29',
          800: '#56091B',
          900: '#410614',
          DEFAULT: '#D91744',
        },

        // 4. Discovery Colors
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          DEFAULT: '#6366F1',
        },
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          DEFAULT: '#A855F7',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
          DEFAULT: '#EC4899',
        },
      },

      // 3. Text Color
      textColor: {
        primary: '#0F172AE6', // 90%
        secondary: '#0F172AB3', // 70%
        muted: '#0F172A80', // 50%
        placeholder: '#0F172A59', // 35%
        disabled: '#0F172A33', // 20%
      },

      // 4. Token Radius
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
