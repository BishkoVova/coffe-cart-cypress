/// <reference types="cypress" />

context('Checkout', () => {

  // Task scenario 1
  describe('Adding items', () => {

    beforeEach(() => {
      cy.intercept('GET', '/list.json').as('itemsRequest');
      cy.visit('/');
      cy.wait('@itemsRequest');
    });

    it('should add item and show cart preview when hover', () => {
      cy.addToCart('Mocha');
      cy.menuCheckoutHover();
      cy.assertCartPreviewIsVisible();
      // verify that added item displayed in cart preview
      cy.contains('.list-item', 'Mocha').should('be.visible');
    });

    it('should remove added item from cart preview', () => {
      cy.addToCart('Mocha');
      cy.menuCheckoutHover();
      cy.cartPreviewRemoveItem('Mocha');
      cy.getByDataCy('checkout').should('contain', '$0.00');
    });

    it('should show lucky proposal when 3 items added', () => {
      cy.addToCart('Mocha');
      cy.addToCart('Americano');
      cy.addToCart('Espresso');
      cy.get('.promo').should('be.visible');
    });

    it.only('should add item as promo', () => {
      cy.addToCart('Mocha');
      cy.addToCart('Americano');
      cy.addToCart('Espresso');
      cy.submitPromo();
      cy.menuCheckoutHover();
      cy.get('.list-item').should('have.length', 4);
    });

  });

});