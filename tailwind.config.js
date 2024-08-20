/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Basil: "#8FBC8F",
        Carrot: "#FFA500",
        darkCarrot: "#FF8C00",
        Golden: "#FFD700",
        darkGolden: "#B8860B",
        white: "#FFFFFF",
        Slate: "#708090",
        HeroBg: "#F0F0F0",
        Tomato: "#FF6347",
        darkTomato: "#CD5C5C",
        Purple: "#614051",
      },
      fontFamily: {
        primaryFont: ["Open Sans", "sans-serif"],
        secFont: ["Poppins", "sans-serif"],
      },
      plugins: [
        function ({ addUtilities }) {
          const newUtilities = {
            ".hidden": {
              display: "none",
            },

            // Add other utilities as needed
          };

          addUtilities(newUtilities, ["responsive"]);
        },
      ],
    },
  },
  plugins: [],
};
