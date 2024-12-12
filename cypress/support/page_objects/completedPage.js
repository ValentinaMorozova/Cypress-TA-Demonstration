/// <reference types="cypress" />

class CompletedPage {
  checkPageIsOpened() {
    cy.checkPageURL("/checkout/completed/");
    cy.checkPageHeader("Thank you");
  }

  checkSuccessMessage() {
    cy.get(".order-completed > .title").should(
      "contain.text",
      "Your order has been successfully processed!"
    );
  }
}

export const completedPage = new CompletedPage();
