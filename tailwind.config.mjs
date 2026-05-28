/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C70F7',
          600: '#1560D8',
          400: '#4D8EF9',
          100: '#DDEAFF',
          50: '#EEF4FF',
        },
        warm: {
          page: '#FAF9F6',
          surface: '#F5F3EE',
          overlay: '#EEEAE2',
          'border-light': '#E8E4DA',
          'border-mid': '#D4CFC4',
        },
        orange: {
          DEFAULT: '#F97316',
          100: '#FFEDD5',
          50: '#FFF7ED',
        },
        text: {
          1: '#1A1A1A',
          2: '#3D3D3D',
          3: '#6B6B6B',
          4: '#9A9A9A',
          5: '#C4C4C4',
        },
        success: {
          DEFAULT: '#22C55E',
          600: '#16A34A',
          50: '#F0FDF4',
        },
        warning: {
          DEFAULT: '#EAB308',
          50: '#FEFCE8',
        },
        danger: {
          DEFAULT: '#EF4444',
          600: '#DC2626',
          50: '#FEF2F2',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai Looped', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        '5xl': ['60px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '4xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '3xl': ['38px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        '2xl': ['30px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        xl: ['24px', { lineHeight: '1.25' }],
        lg: ['20px', { lineHeight: '1.4' }],
        md: ['17px', { lineHeight: '1.65' }],
        base: ['15px', { lineHeight: '1.65' }],
        sm: ['13px', { lineHeight: '1.6' }],
        xs: ['11px', { lineHeight: '1.6', letterSpacing: '0.10em' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 4px rgba(60,45,20,.07), 0 1px 2px rgba(60,45,20,.05)',
        md: '0 4px 16px rgba(60,45,20,.10), 0 2px 6px rgba(60,45,20,.06)',
        lg: '0 12px 40px rgba(60,45,20,.13), 0 4px 12px rgba(60,45,20,.07)',
        blue: '0 8px 24px rgba(28,112,247,.22), 0 2px 8px rgba(28,112,247,.14)',
      },
      spacing: {
        18: '72px',
        22: '88px',
      },
    },
  },
  plugins: [],
};
