import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: 'var(--main)'
      },
      fontFamily:{
        rubik : ['var(--font-rubik)'],
      },
      keyframes: {
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' },
          
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 20s linear infinite', // Adjust duration and timing as needed for your design.
      }
    },
  },
  plugins: [],
} satisfies Config;
