/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        gray: {
          900: '#121212',
          800: '#1a1a1a',
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
        glitch: 'glitch 1.5s infinite',
        glow: 'glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glitch: {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #22d3ee, 0 0 20px #06b6d4' },
          '50%': { boxShadow: '0 0 20px #22d3ee, 0 0 30px #06b6d4' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/path/to/hero-bg.jpg')", // Replace with your actual path
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
