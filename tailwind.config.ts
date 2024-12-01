import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'body-sm': '14px',
        'body-base': '15px',
        'body-lg': '16px',
        'heading-sm': '18px',
        'heading-base': '20px',
        'heading-lg': '24px',
        'heading-xxl': '30px',
        'title-sm': '36px',
        'title-lg': '48px',
        'title-xl': '60px',
        'title-xxl': '72px',
      },
      fontWeight: {
        regular: '400',
        semibold: '500',
        closebold: '550',
        bold: '700',
      },
      lineHeight: {
        body: '1',
      },
      letterSpacing: {
        normal: 'normal',
        more: '10'
      },
      colors: {
        primary: {
          DEFAULT: '#FF6B3C', // Warm Orange
          lighter: '#FFA57A', // Lightened variant
          dark: '#CC5632', // Darkened variant
        },
        secondary: {
          DEFAULT: '#FFC107', // Golden Yellow
          light: '#FFD666', // Lighter Yellow
        },
        neutral: {
          white: '#F8F9FA', // Off White
          gray: '#6C757D', // Muted Gray
          charcoal: '#2E2E2E', // Charcoal Gray
        },
        highlight: {
          red: '#D32F2F', // Deep Red Accent
        },
        background:{
            DEFAULT: '#FDF6E3', // Soft Beige
            white: '#F7F7F7', // White
        },

      },
      spacing: {
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1300px',
        xl: '1500px',
      },
    },
  },
  plugins: [],
} satisfies Config;
