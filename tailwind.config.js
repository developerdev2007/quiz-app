module.exports = {
  content: ["index.html", "./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      animation: {
        rotateBorder: "rotateBorder 4s linear infinite",
        spinSlow: "spin 10s linear infinite",
        glow: "glowEffect 1.5s ease-in-out infinite",
      },
      keyframes: {
        rotateBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glowEffect: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 255, 255, 1), 0 0 10px rgba(0, 255, 255, 0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8)",
          },
        },
      },
    },
  },
  plugins: [],
};
