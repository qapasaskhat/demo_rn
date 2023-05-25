/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'd-light': '#35383F',
        'd-medium': '#1F222A',
        'd-bold': '#181A20',
        'primary': '#12D18E',
        'primary-red': '#F75555',
        'backgraund-dark': "#181A20",
        'primary-400': '#41DAA5',
        'primary-300': '#71E3BB',
        'primary-200': '#A0EDD2',
        'primary-100': '#E7FAF4',

        'gray-scale-50': '#FAFAFA',
        'gray-scale-100': '#F5F5F5',
        'gray-scale-200': '#EEEEEE',
        'gray-scale-300': '#E0E0E0',
        'gray-scale-400': '#BDBDBD',
        'gray-scale-500': '#9E9E9E',
        'gray-scale-600': '#757575',
        'gray-scale-700': '#616161',
        'gray-scale-800': '#424242',
        'gray-scale-900': '#212121',

        'dark-1': '#181A20',
        'dark-2': '#1F222A',
        'dark-3': '#35383F',

        'red': '#F44336',
        'pink': '#E91E63',
        'purple': '#9C27B0',
        'deep-purple': '#673AB7',
        'indigo': '#3F51B5',
        'blue': '#2196F3',
        'light-blue': '#03A9F4',
        'cyan': '#00BCD4',
        'teal': '#009688',

        'green': '#4CAF50',
        'green-t-8': 'rgba(27, 172, 75, 0.08)',
        'light-green': '#8BC34A',
        'lime': '#CDDC39',
        'yellow': '#FFEB3B',
        'amber': '#FFC107',
        'orange': '#FF9800',
        'deep-orange': '#FF5722',
        'brown': '#795548',
        'blue-grey': '#607D8B',

        'dark-mode-gray': '#323C51',
        'gray-dark': '#6B7280',
        'blue-1': '#2545A0',
        'green-1': '#00FFB2',
        'dark-33': '#121425',

        'accent': '#22D3EE'
      },
      fontSize:{
        "heading-1": [
          "48px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "heading-2": [
          "40px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "heading-3": [
          "28px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "heading-4": [
          "24px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "heading-5": [
          "20px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "heading-6": [
          "18px", {
            letterSpacing: -0.01,
            fontFamily: 'Urbanist-Bold'
          }
        ],
        "body-xlarge": '18px',
        "body-large": '16px',
        "body-medium": '14px',
        "body-small": '12px',
        "body-xsmal": '10px',

        "body-xxsmall": '7px'
      },
      fontFamily: {
        "u-bold": "Urbanist-Bold",
        "u-semibold" : "Urbanist-SemiBold",
        "u-medium": "Urbanist-Medium",
        "u-regular": "Urbanist-Regular",
      },
      borderRadius: {
        '40': '40px'
      },
      spacing: {
        '60': '60px'
      }
    },
  },
  plugins: [],
}

