/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-bg" : "#123033",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'Josefin-Sans' : ['Josefin Sans'],
    }
  },
  plugins: [],
};
