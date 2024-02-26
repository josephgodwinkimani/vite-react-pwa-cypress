/* eslint-disable @typescript-eslint/no-unsafe-assignment */

describe('App Component', () => {
  it('should increment count when button is clicked', () => {
    cy.visit({
      url: Cypress.env('base_Url')
    });

    cy.get('button').click();
    cy.get('button').contains('count is 1');
  });

  it('should navigate to Vite website when Vite logo is clicked', () => {
    cy.get('.logo').eq(0).click();
    cy.url().should('include', 'vitejs.dev');
  });

  it('should navigate to React website when React logo is clicked', () => {
    cy.get('.logo.react').click();
    cy.url().should('include', 'react.dev');
  });
});
