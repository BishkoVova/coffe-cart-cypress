/// <reference types="cypress" />

context('Coffe app', () => {

  describe('Menu page', () => {

    before(() => {
      cy.intercept('GET', '/list.json').as('itemsRequest');
      cy.visit('/');
      cy.wait('@itemsRequest');
    });

    it('should display Espresso', () => {
      cy.getByDataCy('Espresso').should('be.visible');
    });

    it('should display Espresso-Macchiato', () => {
      cy.getByDataCy('Espresso-Macchiato').should('be.visible');
    });

    it('should display Cappuccino', () => {
      cy.getByDataCy('Cappuccino').should('be.visible');
    });

    it('should display Mocha', () => {
      cy.getByDataCy('Mocha').should('be.visible');
    });

    it('should display Flat-White', () => {
      cy.getByDataCy('Flat-White').should('be.visible');
    });

    it('should display Americano', () => {
      cy.getByDataCy('Americano').should('be.visible');
    });

    it('should display Cafe-Latte', () => {
      cy.getByDataCy('Cafe-Latte').should('be.visible');
    });

    it('should display Espresso-Con Panna', () => {
      cy.getByDataCy('Espresso-Con Panna').should('be.visible');
    });

    it('should display Cafe-Breve', () => {
      cy.getByDataCy('Cafe-Breve').should('be.visible');
    });

    it('should display empty checkout', () => {
      cy.getByDataCy('checkout').should('contain', '$0.00');
    });

  });

  describe('Cart page', () => {

    before(() => {
      cy.visit('/cart');
    });

    it('should cart be empty by default', () => {
      cy.get('.list').contains('No coffee, go add some.').should('be.visible');
    });

  });


});