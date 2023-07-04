/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      "primary" : "#DB6885",
      "secondary" : "#2F3137",
      "white" : "#ffffff",
      "gray" : "#2F3137"
    },
    container:{
      center :true,
      padding:{
        DEFAULT : '1rem',
        sm : "2rem",
        lg : "4rem",
        xl: "5rem",
      }
    },
    extend: {},
  },
  plugins: [],
}

