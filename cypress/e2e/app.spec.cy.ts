// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the couter page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')

      // Find a link with an href attribute containing "counter" and click it
      cy.get('a[href*="counter"]').click()

      // The new url should include "/counter"
      cy.url().should('include', '/counter')

      // The new page should contain an h1 with "Counter"
      cy.get('h1').contains('Counter')
  })
  
  it('should navigate to the couter page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "counter" and click it
    cy.get('a[href*="Home"]').click()

    // The new url should include "/counter"
    cy.url().should('include', '/counter')

    // The new page should contain an h1 with "Counter"
    cy.get('h1').contains('Counter')
})
})