/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003399",
        "primary-2": "#0099CC",
        "primary-3": "#66CCFF",
        "primary-4": "#f1f5f9",
        "primary-5": "#ffffff",
        "primary-lite": "#a3a8a8",
        secondary: "#CCFFCC",
        "secondary-2": "#556987",
        "secondary-3": "#C1C1C1",
        "secondary-4": "#C7CACF",
        "secondary-5": "#444444",
        "secondary-6": "#697280",
        "secondary-7": "#ECECEC",
        "secondary-8": "#ffffff",
        "secondary-lite": "#00172A",
        "secondary-lite-2": "#1F2937",
        "secondary-dark": "#020420",
        "my-gray": "#444F60",
        "my-red": "#991B1B",
        "my-blue": "#2563EB",

        // dark theme colors

        "primary-dark": "#02201D",
        "primary-dark-2": "#ECEDEF",
        "secondary-dark-2": "#1B2637",
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
