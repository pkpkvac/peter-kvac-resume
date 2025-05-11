import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://www.peter-kvac.com", // Updated to your actual domain
	},
});
