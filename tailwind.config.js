/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-background": "url('/img/home/omegaverse_herobg.png')",
				"mid-background": "url('/img/home/backg1.jpg')",
			},
		},
	},
	plugins: [],
};
