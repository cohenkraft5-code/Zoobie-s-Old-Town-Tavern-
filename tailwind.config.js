/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#E2611A',        // ember orange (wood-fire glow)
        'primary-dark': '#B8470E',
        'primary-light': '#F58A3C',
        accent: '#E8B04B',         // toasted amber / flame gold
        'accent-dark': '#C58E2C',
        background: '#0B0907',     // near-black charcoal
        'background-2': '#121009', // warm soot
        surface: '#19150F',        // raised charcoal panel
        'surface-2': '#231D14',    // oak-tinged panel
        ink: '#F6EEE2',            // toasted cream (text on dark)
        'ink-dark': '#1A140D',     // dark ink (for use on light chips)
        muted: '#A39684',          // warm stone
        'muted-2': '#6E6353',      // deep stone
        divider: '#2B2419',        // charred divider
        ember: '#FF6A2B',          // hot ember highlight
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 3.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.88' },
          '55%': { opacity: '0.7' },
          '60%': { opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
}
