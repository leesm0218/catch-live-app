/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'content': '480px',
        'background': '100vw',
      },
      height: {
        'navigationBar': '120px',
      },
    },
  },
  plugins: [],
};
