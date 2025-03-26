/**@type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#2B85FF",
				secondary: "#EF863E",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
