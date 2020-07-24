describe("Validating login functionality", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000");
  });

  context("Check login response with invalid token", () => {
    it(`Should return unauthorized user`, () => {
      cy.get("[data-cy=authentication-input]").type("mocktoken12345");
      cy.get(".button-login").click();
      cy.wait(1000);
      cy.get(".authentication-info")
        .should("have.class", "error")
        .and("have.text", "Unauthorized user, try again.");
    });

    it(`Should log with admin privileges`, () => {
      cy.get("[data-cy=authentication-input]").type(Cypress.env("TOKEN"));
      cy.get(".button-login").click();
      cy.wait(1000);
      cy.get(".authentication-info")
        .should("have.class", "success")
        .and("have.text", "Welcome, Mr Speedwagon");
    });
  });
});
