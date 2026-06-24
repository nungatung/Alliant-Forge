import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Alliant Forge Color Palette
        'af-background': '#FCFCFE',
        'af-muted-blue': '#4F6C8A',
        'af-light-beige': '#CEC8AE',
        'af-golden-brown': '#D5AA72',
        'af-muted-green': '#98A48B',
      },
      fontFamily: {
        polysans: ['Polysans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'conic-shine': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'scroll-marquee': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'conic-shine': 'conic-shine 6s ease-out infinite',
        'scroll-marquee': 'scroll-marquee 30s linear infinite',
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF)',
      },
    },
  },
  plugins: [],
};

export default config;