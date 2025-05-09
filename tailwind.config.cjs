/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				alegreya: ["Alegreya", "serif"],
			},
			colors: {
				"brand-orange": "#FF6B35",
			},
			maxWidth: {
				container: "1140px",
			},
		},
	},
	plugins: [],
};
