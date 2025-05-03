/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Primary Neutral Palette
        primary: {
          DEFAULT: '#7C92FC',
          900: '#1D317B',
          800: '#2D3D92',
          700: '#4226B5',
          600: '#5E43DB',
          500: '#7C92FC',
          400: '#FFFFFF',
          300: '#E5E5FF',
          200: '#E7D9FE',
          100: '#F7F4FF',
        },
        neutral: {
          DEFAULT: '#FFFFFF',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
          100: '#F5F5F5',
        },
        // Success Palette
        success: {
          DEFAULT: '#9CD323',
          900: '#3B6506',
          800: '#467A0B',
          700: '#559711',
          600: '#77B519',
          500: '#9CD323',
          400: '#BCE455',
          300: '#C9F170',
          200: '#DEFA95',
          100: '#F2FED7',
        },
        // Error Palette
        error: {
          DEFAULT: '#FF4423',
          900: '#7A0919',
          800: '#93081B',
          700: '#B71112',
          600: '#DB2719',
          500: '#FF4423',
          400: '#FF7759',
          300: '#FFA37A',
          200: '#FFCBA6',
          100: '#FFE7D3',
        },
        // Warning Palette
        warning: {
          DEFAULT: '#FFC73A',
          900: '#7A4005',
          800: '#936312',
          700: '#B7821D',
          600: '#DBA32A',
          500: '#FFC73A',
          400: '#FFD98B',
          300: '#FFE488',
          200: '#FFEFBD',
          100: '#FFEBD7',
        },
        // Information Palette
        info: {
          DEFAULT: '#5AA6FF',
          900: '#1D327A',
          800: '#1A4395',
          700: '#3A65B7',
          600: '#5D81DB',
          500: '#5AA6FF',
          400: '#7CC2FF',
          300: '#8BD3FF',
          200: '#94E5FF',
          100: '#DCF2FF',
        },
        // Secondary Palette
        secondary: {
          DEFAULT: '#1A3D2C',
          900: '#040815',
          800: '#050C19',
          700: '#0D121F',
          600: '#131825',
          500: '#1A3D2C',
          400: '#5B6760',
          300: '#A0A38F',
          200: '#C5C6B3',
          100: '#E5E6F4',
        },
      },
      fontFamily: {
        algecom: ['var(--font-algecom)'],
        outfit: ['var(--font-outfit)'], 
      },
      keyframes: {

        'fade-in-1': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '33%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' }
        },
        'fade-in-2': {
          '0%, 33%': { opacity: '0', transform: 'translateY(-10px)' },
          '53%': { opacity: '1', transform: 'translateY(0)' },
          '66%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' }
        },
        'fade-in-3': {
          '0%, 66%': { opacity: '0', transform: 'translateY(-10px)' },
          '86%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        
        'fade-in-4': {
          '0%, 86%': { opacity: '0', transform: 'translateY(-10px)' },
          '93%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },

        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'glow-pulse': {
          '0%, 100%': {
            'background-color': '#F97316',
            'color': 'white',
            'box-shadow': '0 0 0 0 rgba(249, 115, 22, 0.4)'
          },
          '50%': {
            'background-color': 'white',
            'color': '#F97316',
            'box-shadow': '0 0 20px 10px rgba(249, 115, 22, 0.2)'
          }
        },
        'color-pulse': {
          '0%, 100%': {
            'background-color': '#F97316',
            'color': 'white'
          },
          '50%': {
            'background-color': 'white',
            'color': '#F97316'
          }
        }
      },
      animation: {
        'fade-in-1': 'fade-in-1 6s ease-out infinite',
        'fade-in-2': 'fade-in-2 6s ease-out infinite',
        'fade-in-3': 'fade-in-3 6s ease-out infinite',
        'fade-in-4': 'fade-in-4 6s ease-out infinite',
        'glow': 'color-pulse 2s ease-in-out infinite',
         'fade-in': 'fade-in 0.3s ease-out'
 
      }
    },
  },
  plugins: [],
}