import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blueSky1': '#37B5B6',
        'purple1': '#81689D',
        'purple2': '#6962AD',
        'purple3': '#7077A1',
        'purple4': '#19141e',
        'whitec': '#ccc',
        'whitee': '#eee',
        'wec':'#ececec',
        'black1': '#111',
        'black2': '#222',
        'black3': '#333',
        'black4': '#31304D',
        'green1': '#265073',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
