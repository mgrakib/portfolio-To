/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)",
				"ternary-color": "var(--ternary-color)",
				"black-color": "var(--secondary-color)",
				"white-color": "var(--white-color)",
			},
		},
	},
	plugins: [],
};

