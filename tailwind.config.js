/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--bg-card)",
        dark: "var(--bg-dark)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        light: "var(--text-light)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-blue": "var(--accent-blue)",
        "accent-sky": "var(--accent-sky)",
        gold: "var(--gold)",
        border: "var(--border)",
        "border-dark": "var(--border-dark)",
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      }
    },
  },
  plugins: [],
}
