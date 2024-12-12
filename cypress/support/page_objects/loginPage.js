/// <reference types="cypress" />

class LoginPage {
  checkPageIsOpened() {
    cy.checkPageURL("/login");
    cy.checkPageHeader("Welcome, Please Sign In!");
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
