/*
 *  Test which goes into the application web page,
 *  and perform inumerous checks so we could be sure
 *  that ours specs are being respected in every viewport.
 */

const sizesMediaQuery = [
  "iphone-3",
  // 'iphone-4',
  // 'iphone-5',
  // 'iphone-6',
  // 'iphone-6+',
  // 'iphone-x',
  // 'iphone-xr',
  // 'iphone-x',
  // 'samsung-note9',
  // 'samsung-s10'
];

const sizes = [
  // 'ipad-2',
  // 'ipad-mini',
  // 'macbook-11',
  // 'macbook-13',
  // 'macbook-15',
  // [1024, 768],
  [1920, 1080],
];

describe("Button in multiple views", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000");
  });

  context("Screens with max width of 760px", () => {
    sizesMediaQuery.forEach((size) => {
      it(`Should have 150px in ${size} screen`, () => {
        cy.viewport(size);
        cy.wait(200);
        cy.get(".button-login").should("have.css", "width", "150px");
        cy.get(".logo").should("have.css", "width", "150px");
        cy.get(".logo").should("have.css", "height", "140px");
      });
    });
  });

  context("Screens with max width of 960px and orientation landscape", () => {
    sizesMediaQuery.forEach((size) => {
      it(`Should have 150px in ${size} screen`, () => {
        cy.viewport(size, "landscape");
        cy.wait(200);
        cy.get(".button-login").should("have.css", "width", "250px");
        cy.get(".logo").should("have.css", "width", "150px");
        cy.get(".logo").should("have.css", "height", "140px");
      });
    });
  });

  context("Screens larger than 760px", () => {
    sizes.forEach((size) => {
      it(`Should have 300px in ${size} screen`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.get(".button-login").should("have.css", "width", "250px");
        cy.get(".logo").should("have.css", "width", "235px");
        cy.get(".logo").should("have.css", "height", "235px");
      });
    });
  });
});
