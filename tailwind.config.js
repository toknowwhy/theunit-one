/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#151718',
        'main': '#5956FF',
        'secondary': '#A1A1A1',
        'white': '#FFFFFF',
        'gray-medium': '#565657',
        'black-bgd': '#0A0A0A',
        'gray-border': '#2D2D2D',
        'gray-light': '#E4E4E4',
        'gray-heavy': '#1D1D1F',
        'unit-orange': '#FF8243',
        'unit-blue': '#6495ED',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'footer': 'url(/footer-bgd.png)',
        'home-top': 'url(/home-top.png)',
        'partners': 'url(/partners-bgd.svg)',
        'index': 'url(/index-bgd.png)',
        'home-bgd1': 'url(/home-bgd-1.png)',
        'home-bottom': 'url(/home-bottom.png)'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
      },  
      aspectRatio: {
        '3/2': '3 / 2',
        '2/1': '2 / 1'
      },
    },
  },
  plugins: [],
}
