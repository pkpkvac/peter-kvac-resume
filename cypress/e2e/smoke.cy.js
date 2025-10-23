describe("Smoke Test", () => {
	it("should load the homepage", () => {
		cy.visit("/");
		cy.contains("Hi! I'm Peter.");
		cy.contains("an infrastructure and full stack developer.");
	});

	it("should navigate to About page", () => {
		cy.visit("/");
		cy.contains("About Me").click();
		cy.url().should("include", "/about");
		cy.contains("About Me");
	});

	it("should navigate to Resume page", () => {
		cy.visit("/");
		cy.contains("Resume").click();
		cy.url().should("include", "/resume");
		cy.contains("PROFESSIONAL EXPERIENCE");
	});

	it("should be able to download resume", () => {
		cy.visit("/resume");
		cy.contains("Download Full Resume").should(
			"have.attr",
			"href",
			"/peter-kvac-resume.pdf"
		);
	});
});
