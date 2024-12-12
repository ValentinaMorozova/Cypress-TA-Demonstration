/// <reference types="cypress" />

class ShoppingCart {
  checkPageIsOpened() {
    cy.checkPageURL("/cart");
    cy.checkPageHeader("Shopping cart");
  }

  agreeWithTermsOfService() {
    cy.get("#termsofservice").check();
    cy.get("#termsofservice").should("be.checked");
  }

  navigateToCheckout() {
    cy.get("#checkout").click();
  }
}

export const shoppingCart = new ShoppingCart();
