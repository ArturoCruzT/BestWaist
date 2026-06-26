import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          dark2: '#222222',
          yellow: '#FFD700',
          'yellow-dark': '#e6c200',
        },
        wp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulse_wp: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 4px 30px rgba(37,211,102,0.7)' },
        },
      },
      animation: {
        'pulse-wp': 'pulse_wp 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
