const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, addBase }) => {
      addBase({
        ":root": {
          "font-size": "62.5%",
        },
      }),
        addUtilities({
          ".bg-gradient": {
            "background-image": "#243B55",
            "background-image":
              "-webkit-radial-gradient(circle at top, #243B55, #141E30)",
            "background-image":
              "radial-gradient(circle at top, #243B55, #141E30)",
          },
        })
    }),
  ],
}
