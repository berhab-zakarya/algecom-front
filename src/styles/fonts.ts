import localFont from 'next/font/local'

export const outfitFont = localFont({
  src: '../../public/assets/fonts/Outfit-VariableFont_wght.ttf',
  variable: '--font-outfit',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

// تعريف fontFamily مع خط Outfit فقط
export const fontFamily = `font-[family-name:var(--font-outfit)] text-sm`