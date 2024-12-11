/// <reference types="cypress" />

class SearchPage {
  checkPageIsOpened() {
    cy.url().should("include", "search");
    cy.get("h1").should("have.text", "Search");
  }

  openAdvancedSearch() {
    cy.get("#As").check();
    cy.get("#As").should("be.checked");
    cy.get("#advanced-search-block").should(
      "have.attr",
      "style",
      "display: block;"
    );
  }

  selectCategory(category) {
    cy.get("#Cid").select(category);
  }

  setPriceRange(priceFrom, priceTo) {
    cy.get("#Pf").type(priceFrom);
    cy.get("#Pt").type(priceTo);
  }

  clickSearchButton() {
    cy.get(".search-button").click();
  }

  checkNumberOfProducts(expectedNumber) {
    cy.get(".search-results")
      .find(".item-box")
      .should("have.length", expectedNumber);
  }

  checkFirstProductTitle(expectedTitle) {
    cy.get(".search-results")
      .find(".item-box")
      .first()
      .find(".product-title")
      .should("contain.text", expectedTitle);
  }
}

export const searchPage = new SearchPage();
