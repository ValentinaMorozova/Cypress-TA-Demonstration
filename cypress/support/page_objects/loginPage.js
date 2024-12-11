/// <reference types="cypress" />

class LoginPage {
  checkPageIsOpened() {
    cy.url().should("include", "login");
    cy.get("h1").should("have.text", "Welcome, Please Sign In!");
  }

  enterEmail(email) {
    cy.get("#Email").type(email);
  }

  enterPassword(password) {
    cy.get("#Password").type(password);
  }

  clickLoginButton() {
    cy.get(".login-button").click();
  }
}

export const loginPage = new LoginPage();
