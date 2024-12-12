/// <reference types="cypress" />

class CategoryPage {
  checkPageIsOpened(category) {
    cy.checkPageURL(`/${category.toLowerCase()}`);
    cy.checkPageHeader(category);
  }

  openSubcategory(subcategoryName) {
    cy.get(".sub-category-item")
      .find(".title")
      .each((subcategory) => {
        if (subcategory.text().trim() == subcategoryName) {
          cy.wrap(subcategory).click();
          return false;
        }
      });
  }

  openProduct(productName) {
    cy.get(".product-item")
      .find(".product-title")
      .each((product) => {
        if (product.text().trim() == productName) {
          cy.wrap(product).click();
          return false;
        }
      });
  }
}

export const categoryPage = new CategoryPage();
