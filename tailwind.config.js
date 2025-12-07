/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: {
          main: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
        },
        aurora: {
          start: "#6366F1",
          end: "#A855F7",
          glow: "#06B6D4"
        },
        sunset: {
          start: "#FF6B6B",
          end: "#FF9F1C",
          glow: "#FF477E"
        },
        mint: {
          start: "#10B981",
          end: "#06B6D4",
          glow: "#34D399"
        },
        neon: {
          start: "#00E5FF",
          end: "#4F46E5",
          glow: "#00C8FF"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': "var(--gradient-main)",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 14px var(--color-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
