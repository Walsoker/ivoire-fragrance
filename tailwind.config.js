/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          warm: 'var(--color-ivory-warm, #F7F1E7)',
          DEFAULT: '#F7F1E7',
        },
        cream: {
          light: 'var(--color-cream-light, #FDFBF7)',
          DEFAULT: '#FDFBF7',
        },
        gold: {
          primary: 'var(--color-gold-primary, #B88635)',
          soft: 'var(--color-gold-soft, #D7B879)',
          DEFAULT: '#B88635',
        },
        brandText: {
          primary: 'var(--color-text-primary, #191714)',
          secondary: 'var(--color-text-secondary, #746B60)',
        },
        borderSoft: 'var(--color-border-soft, #E7DED0)',
        darkAccent: 'var(--color-dark-accent, #171512)',
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      letterSpacing: {
        'widest-editorial': '0.25em',
        'super-spaced': '0.35em',
      },
      aspectRatio: {
        'portrait': '3/4',
        'editorial': '4/5',
      },
    },
  },
  plugins: [],
}

