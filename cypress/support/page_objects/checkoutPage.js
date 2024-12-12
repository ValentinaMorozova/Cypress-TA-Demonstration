/// <reference types="cypress" />

class CheckoutPage {
  checkPageIsOpened() {
    cy.checkPageURL("/onepagecheckout");
    cy.checkPageHeader("Checkout");
  }

  clickButtonInBlock(block) {
    cy.get(`#${block}-buttons-container > .button-1`).click();
  }
}

export const checkoutPage = new CheckoutPage();
