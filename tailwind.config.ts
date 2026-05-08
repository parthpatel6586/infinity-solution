import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/three/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#006B4F',
          blue: '#1E293B',
          teal: '#00897B',
        },
        surface: {
          white: '#FFFFFF',
          gray: '#F8FAFC',
          'light-green': '#E8F5E9',
          'light-blue': '#E3F2FD',
        },
        dark: '#1A2332',
        body: '#4A5568',
        border: '#E2E8F0',
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(#006B4F 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
