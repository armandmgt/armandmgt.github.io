/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	darkMode: 'class',
	safelist: ['text-white', 'text-black', 'border-white', 'border-black'],
	theme: {
		extend: {}
	},
	plugins: [require('tw-elements/dist/plugin')]
};
