/// <reference types="cypress" />

class CompletedPage {
  checkPageIsOpened() {
    cy.url().should("include", "completed");
    cy.get("h1").should("have.text", "Thank you");
  }

  checkSuccessMessage() {
    cy.get(".order-completed > .title").should(
      "contain.text",
      "Your order has been successfully processed!"
    );
  }
}

export const completedPage = new CompletedPage();
