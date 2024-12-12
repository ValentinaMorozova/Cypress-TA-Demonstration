/// <reference types="cypress" />

class MainPage {
  navigateToMainPage() {
    cy.visit("/");
  }

  checkPageIsOpened() {
    cy.checkPageURL("/");
  }

  clickLogIn() {
    cy.get(".ico-login").click();
  }

  checkLoggedIn() {
    cy.get(".ico-logout").should("be.visible").should("have.text", "Log out");
  }

  enterSearchTerm(searchText) {
    cy.get("#small-searchterms").type(searchText);
  }

  clickSearch() {
    cy.get(".search-box").find(".search-box-button").click();
  }

  navigateToCategoryFromTopMenu(categoryName) {
    cy.get(".top-menu")
      .find("a")
      .each((category) => {
        if (category.text().trim() == categoryName) {
          cy.wrap(category).click();
          return false;
        }
      });
  }

  checkShoppingCartNumberOfProducts(expectedNumber) {
    cy.get(".cart-qty").should("contain.text", expectedNumber);
  }

  navigateToShoppingCart() {
    cy.get("#topcartlink > .ico-cart").click();
  }
}

export const mainPage = new MainPage();
