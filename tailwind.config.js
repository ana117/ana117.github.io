/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'primary': '#733B56',
            'secondary': '#F8F9F1',
            'accent': '#3C2434',
            'black': '#1E200E',
        }
    },
  },
  plugins: [],
}

