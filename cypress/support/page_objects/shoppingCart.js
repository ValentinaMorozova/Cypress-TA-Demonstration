/// <reference types="cypress" />

class ShoppingCart {
  checkPageIsOpened() {
    cy.url().should("include", "cart");
    cy.get("h1").should("have.text", "Shopping cart");
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
