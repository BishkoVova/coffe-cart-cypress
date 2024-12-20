// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Get element by data-cy or data-test attribute, case-insensitive
Cypress.Commands.add('getByDataCy', (dataAttributeValue) => {
  return cy.get(`[data-cy="${dataAttributeValue}"], [data-test="${dataAttributeValue}"]`);
});

// Add an item to the cart by data-cy attribute
Cypress.Commands.add('addToCart', (item) => {
  cy.getByDataCy(item).click();
});

// Hover menu chechout button
Cypress.Commands.add('menuCheckoutHover', () => {
  cy.getByDataCy('checkout').trigger('mouseover');
});

// Assert cart preview is visible
Cypress.Commands.add('assertCartPreviewIsVisible', () => {
  cy.get('.cart-preview').should('be.visible');
});

// Remove item from cart preview
Cypress.Commands.add('cartPreviewRemoveItem', (item) => {
  cy.contains('.list-item', item).find('button').contains('-').click();
});

// Submit promo
Cypress.Commands.add('submitPromo', () => {
  cy.get('.yes').click();
});