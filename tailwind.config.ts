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
        // Chowboy Brand Colors
        'sage': {
          DEFAULT: '#8AA88B',
          50: '#F5F8F5',
          100: '#E6EFE7',
          200: '#C8DCC9',
          300: '#AAC9AC',
          400: '#8AA88B',
          500: '#6F906F',
          600: '#577357',
          700: '#425642',
          800: '#2E3A2E',
          900: '#1A1F1A',
        },
        'icy': {
          DEFAULT: '#8AB4F8',
          50: '#F0F6FE',
          100: '#E1EDFD',
          200: '#C3DBFB',
          300: '#A5C9F9',
          400: '#8AB4F8',
          500: '#5A9BF6',
          600: '#2A7FF4',
          700: '#0B62DB',
          800: '#084BA6',
          900: '#053470',
        },
        'mustard': {
          DEFAULT: '#F2C94C',
          50: '#FFFDF5',
          100: '#FEF9E6',
          200: '#FDF2C8',
          300: '#FCEBAA',
          400: '#F2C94C',
          500: '#F0B71F',
          600: '#D19A08',
          700: '#A37806',
          800: '#755704',
          900: '#473502',
        },
        'slate': {
          DEFAULT: '#2E3138',
          50: '#F7F7F8',
          100: '#E9EAEB',
          200: '#D3D4D7',
          300: '#BDBFC3',
          400: '#767982',
          500: '#2E3138',
          600: '#26282E',
          700: '#1E2024',
          800: '#16171A',
          900: '#0E0F11',
        },
        'sand': {
          DEFAULT: '#F4E9D8',
          50: '#FFFFFE',
          100: '#FBF7F0',
          200: '#F4E9D8',
          300: '#EDDBC0',
          400: '#E6CDA8',
          500: '#DFBF90',
          600: '#D8B178',
          700: '#C79A5A',
          800: '#A67D48',
          900: '#856036',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;

