/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        PtsBold:['PTSans-Bold' , 'sans-serif'],
        PtsReg:['PTSans-Regular' , 'sans-serif'],
      },
      colors:{
        primary:"#15A9E3",
        primary_dark:"#184363",
        primary_light:"#EDF4F6",
        secondary:'#39cb74',
        tertiary:"#f2971f",
      },
    },
  },
  plugins: [],
}
