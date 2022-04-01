module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito : "'nunito', serif"
      }
     
    },
  },
  plugins: [ require("daisyui")],
}