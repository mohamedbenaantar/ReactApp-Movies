module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          "other" : {"min": "340px" , "max": "1200px"}
        },
        colors : {
          "darkbg" : "#082f49",
          blue: {
            100: "#dbeafe",
            400: "#818cf8"
          }
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }