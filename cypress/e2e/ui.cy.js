/// <reference types="cypress" />

describe("UI tests", () => {
  beforeEach("Navigate to the main page", () => {
    // 1. Open the main page.
    cy.visit("/");
  });

  it("001. Verify user login through the main page", () => {
    // 2. Click the "Log in" link in the header.
    cy.get(".ico-login").click();
    cy.url().should("include", "login");
    cy.get("h1").should("have.text", "Welcome, Please Sign In!");

    // 3. Enter valid credentials for an existing user:
    //  - email: "ValMor@gmail.com",
    //  - password: "passw0rd"
    cy.get("#Email").type("ValMor@gmail.com");
    cy.get("#Password").type("passw0rd");

    // 4. Click the"Log in" button
    cy.get(".login-button").click();
    cy.url().should("eq", Cypress.config("baseUrl"));

    // Expected Result
    // 1.The user should be logged in successfully.
    cy.get(".ico-logout").should("be.visible").should("have.text", "Log out");
  });

  it("002.1. Search computers by different prices ranges", () => {
    // 2. Enter "computer" in the search panel.
    cy.get("#small-searchterms").type("computer");

    // 3. Click "Search" on the main page.
    cy.get(".search-box-button").click();
    cy.url().should("include", "search");
    cy.get("h1").should("have.text", "Search");

    // Expected Result
    // 1. There should be 4 products displayed for the initial search after step 3.
    cy.get(".search-results").find(".item-box").as("foundProducts");
    cy.get("@foundProducts").should("have.length", 4);

    // 4. Open "Advanced Search".
    cy.get("#As").should("not.be.checked");
    cy.get("#As").check();
    cy.get("#As").should("be.checked");
    cy.get("#advanced-search-block").should(
      "have.attr",
      "style",
      "display: block;"
    );

    // 5. Select "Computers >> Desktops" from the "Category" dropdown.
    cy.get("#Cid").select("Computers >> Desktops");

    // 6. Set the "Price range" to "From 800 to 1500".
    cy.get("#Pf").type("800");
    cy.get("#Pt").type("1500");

    // 7. Click "Search" on the search page.
    cy.get(".search-button").click();
    cy.url().should("include", "search");
    cy.get("h1").should("have.text", "Search");

    // Expected Result
    // 2. There should be 3 products displayed for the advanced search after step 7.
    cy.get("@foundProducts").should("have.length", 3);

    // 3. The first product in the advanced search should have the title "Build your own cheap computer".
    cy.get("@foundProducts")
      .find(".product-title")
      .eq(0)
      .should("contain.text", "Build your own cheap computer");
  });

  it("003.1. Add default computer to cart", () => {
    // 2. Navigate to the "Computer" category from the top menu.
    cy.get(".top-menu").find('[href="/computers"]').click();
    cy.url().should("include", "computers");
    cy.get("h1").should("have.text", "Computers");

    // 3. Select the "Desktops" subcategory.
    cy.get(".sub-category-item")
      .find(".title")
      .find('[href="/desktops"]')
      .click();
    cy.url().should("include", "desktops");
    cy.get("h1").should("have.text", "Desktops");

    // 4. Open the "Build your own cheap computer" product page.
    cy.get(".product-item")
      .find(".product-title")
      .contains("Build your own cheap computer")
      .click();
    cy.get("h1").should("contain.text", "Build your own cheap computer");

    // 5. Click "Add to cart".
    cy.get(".add-to-cart-button").click();

    // Expected Result
    // 1. A success notification bar with text "The product has been added to your shopping cart" should be visible in the header.
    cy.get("#bar-notification.success")
      .should("be.visible")
      .should(
        "contain.text",
        "The product has been added to your shopping cart"
      );
    // 2. The shopping cart should contain 1 product.
    cy.get(".cart-qty").should("contain.text", "1");
  });

  it("004. Checkout process with logged in user - all default options", () => {
    // 2. Click the "Log in" link in the header.
    cy.get(".ico-login").click();
    cy.url().should("include", "login");
    cy.get("h1").should("have.text", "Welcome, Please Sign In!");

    // 3. Enter valid credentials for an existing user:
    //  - email: "ValMor@gmail.com",
    //  - password: "passw0rd"
    cy.get("#Email").type("ValMor@gmail.com");
    cy.get("#Password").type("passw0rd");

    // 4. Click the"Log in" button
    cy.get(".login-button").click();
    cy.url().should("eq", Cypress.config("baseUrl"));

    // 5. Navigate to the "Books" category from the top menu.
    cy.get(".top-menu").find('[href="/books"]').click();
    cy.url().should("include", "books");
    cy.get("h1").should("have.text", "Books");

    // 6. Open the "Computing and Internet" product page.
    cy.get(".product-item")
      .find(".product-title")
      .contains("Computing and Internet")
      .click();
    cy.get("h1").should("contain.text", "Computing and Internet");

    // 7. Click "Add to cart".
    cy.get(".add-to-cart-button").click();

    // 8. Open the shopping cart from the link in the header.
    cy.get("#topcartlink > .ico-cart").click();
    cy.url().should("include", "cart");
    cy.get("h1").should("have.text", "Shopping cart");

    // 9. Agree with the terms of service by clicking the checkbox.
    cy.get("#termsofservice").check();
    cy.get("#termsofservice").should("be.checked");

    // 10. Click the "Checkout" button.
    cy.get("#checkout").click();
    cy.url().should("include", "onepagecheckout");
    cy.get("h1").should("have.text", "Checkout");

    // 11. Click "Continue" in the Billing Address block.
    cy.get("#billing-buttons-container > .button-1").click();

    // 12. Click "Continue" in the Shipping Address block.
    cy.get("#shipping-buttons-container > .button-1").click();

    // 13. Click "Continue" in the Shipping Method block.
    cy.get("#shipping-method-buttons-container > .button-1").click();

    // 14. Click "Continue" in the Payment Method block.
    cy.get("#payment-method-buttons-container > .button-1").click();

    // 15. Click "Continue" in the Payment Information block.
    cy.get("#payment-info-buttons-container > .button-1").click();

    // 16. Click "Confirm" in the Confirm Order block.
    cy.get("#confirm-order-buttons-container > .button-1").click();
    cy.url().should("include", "completed");
    cy.get("h1").should("have.text", "Thank you");

    // Expected Result
    // 1. The completed message should contain the text "Your order has been successfully processed!".
    cy.get(".order-completed > .title").should(
      "contain.text",
      "Your order has been successfully processed!"
    );
  });
});
