// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)',
          5: 'var(--primary-5)',
          6: 'var(--primary-6)',
          7: 'var(--primary-7)',
          8: 'var(--primary-8)',
        },
        
        success: {
          DEFAULT: 'var(--success-default)',
          dark: 'var(--success-dark)',
          light: 'var(--success-light)',
        },
        
        error: {
          DEFAULT: 'var(--error-default)',
          dark: 'var(--error-dark)',
          light: 'var(--error-light)',
        },
        
        warning: {
          DEFAULT: 'var(--warning-default)',
          dark: 'var(--warning-dark)',
          light: 'var(--warning-light)',
        },
        
        info: {
          DEFAULT: 'var(--info-default)',
          dark: 'var(--info-dark)',
          light: 'var(--info-light)',
        },
        
        secondary: {
          DEFAULT: 'var(--secondary-default)',
          dark: 'var(--secondary-dark)',
          light: 'var(--secondary-light)',
        }
      },
      fontFamily: {
        algecom: ['var(--font-algecom)'],
      }
    },
  },
  plugins: [],
}