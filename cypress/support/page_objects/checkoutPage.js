/// <reference types="cypress" />

class CheckoutPage {
  checkPageIsOpened() {
    cy.url().should("include", "onepagecheckout");
    cy.get("h1").should("have.text", "Checkout");
  }

  clickButtonInBlock(block) {
    cy.get(`#${block}-buttons-container > .button-1`).click();
  }
}

export const checkoutPage = new CheckoutPage();
