/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange": 'hsl(26, 100%, 55%)',
        'Paleorange': 'hsl(25, 100%, 94%)',
        "verydarkblue": "hsl(220, 13%, 13%)",
        "darkgrayishblue": "hsl(219, 9%, 45%)",
        "grayishblue": "hsl(220, 14%, 75%)",
        "lightgrayishblue": "hsl(223, 64%, 98%)",
        "white": "hsl(0, 0%, 100%)",
        "black": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
