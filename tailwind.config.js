/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        meli: {
          yellow: '#FFE600',
          'yellow-text': '#040036',
          'navy-text': '#161723',
        },
        surface: {
          base: '#000000',
          elevated: '#1C1C1E',
          card: '#3B3B3F',
        },
        grey: {
          100: '#C0C0C0',
          200: '#A1A1A1',
          500: '#333333',
        },
        green: {
          500: '#00A650',
          200: 'rgba(0, 166, 80, 0.2)',
        },
        ai: '#7957F6',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        sf: ['"SF Pro Text"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Every typography token uses line-height 130% project-wide.
        'xs-r': ['12px', { lineHeight: '1.3', fontWeight: '400' }],
        'xs-sb': ['12px', { lineHeight: '1.3', fontWeight: '600' }],
        'sm-r': ['14px', { lineHeight: '1.3', fontWeight: '400' }],
        'md-r': ['16px', { lineHeight: '1.3', fontWeight: '400' }],
        'md-sb': ['16px', { lineHeight: '1.3', fontWeight: '500' }],
        'lg-sb': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      borderRadius: {
        pill: '100px',
      },
      maxWidth: {
        // Frame is mobile-only — capped at 470px on tablet/desktop.
        mobile: '470px',
      },
      height: {
        // Desktop-only "phone" height — used above the lg breakpoint (1000px).
        phone: '850px',
      },
      keyframes: {
        // Waveform pulse — used by the AI search button while loading.
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        wave: 'wave 0.9s ease-in-out infinite',
      },
    },
    screens: {
      // Custom breakpoint at 1000px — at desktop the mobile frame becomes
      // a fixed-size "phone in browser" (470x850).
      sm: '640px',
      md: '768px',
      lg: '1000px',
    },
  },
  plugins: [],
}
