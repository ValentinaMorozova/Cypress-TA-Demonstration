/// <reference types="cypress" />

class ProductPage {
  checkPageIsOpened(product) {
    cy.checkPageHeader(product);
  }

  addProductToCart() {
    cy.get(".add-to-cart-button").click();
  }
  checkSuccessBarNotification() {
    cy.get("#bar-notification.success")
      .should("be.visible")
      .should(
        "contain.text",
        "The product has been added to your shopping cart"
      );
  }
}

export const productPage = new ProductPage();
