/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            'custom-iconBackground': '#11152c',
            'custom-iconBorder': '#151931',
            'custom-bg': '#12172a',
            'custom-border': '#4f5876',
            'custom-bg-hour': '#262b42',
            'custom-iconColor': '#8a8ac8',
            'custom-courseOverviewText': '#a4aad3'
        }
    },
    container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // overriding the max-width values
        screens: {
          sm: '600px',
          md: '728px',
          lg: '1100px',
          xl: '1100px',
          '2xl': '1100px',
        },
    }
  },
  plugins: [],
}

