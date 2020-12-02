module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundImage: ["responsive", "hover", "focus"],
    backgroundOpacity: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
  },
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "best-game": "url('./image/bg.jpg')",
        "img-big-new": "url('./image/posts/2.jpg')",
      }),
    },
  },
};
