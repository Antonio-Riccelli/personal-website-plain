/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				terminal: '#00ff41'
			},
			dropShadow: {
				terminal: '0 0 8px #00ff41'
			}
		}
	},
	plugins: []
};
