/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0B0A',
        charcoal: '#17140F',
        'charcoal-raised': '#201B14',
        gold: '#B8944F',
        'gold-bright': '#D9B872',
        bronze: '#7A5C36',
        bone: '#F3EEE4',
        stone: '#9C948A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'gold-pour': 'linear-gradient(90deg, transparent 0%, #7A5C36 15%, #D9B872 50%, #7A5C36 85%, transparent 100%)',
        'gold-sheen': 'linear-gradient(135deg, #7A5C36 0%, #D9B872 50%, #B8944F 100%)',
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(184,148,79,0.35)',
      },
      keyframes: {
        pour: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drip: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
      },
      animation: {
        pour: 'pour 1.1s cubic-bezier(0.16,1,0.3,1) forwards',
        rise: 'rise 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        drip: 'drip 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
