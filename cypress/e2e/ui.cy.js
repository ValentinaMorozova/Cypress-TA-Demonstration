import { mainPage } from "../support/page_objects/mainPage.js";
import { categoryPage } from "../support/page_objects/categoryPage.js";
import { checkoutPage } from "../support/page_objects/checkoutPage.js";
import { completedPage } from "../support/page_objects/completedPage.js";
import { loginPage } from "../support/page_objects/loginPage.js";
import { productPage } from "../support/page_objects/productPage.js";
import { searchPage } from "../support/page_objects/searchPage.js";
import { shoppingCart } from "../support/page_objects/shoppingCart.js";

describe("UI tests", () => {
  beforeEach("Navigate to the main page", () => {
    // 1. Open the main page.
    mainPage.navigateToMainPage();
  });

  it("001. Verify user login through the main page", () => {
    // 2. Click the "Log in" link in the header.
    mainPage.clickLogIn();
    loginPage.checkPageIsOpened();

    // 3. Enter valid credentials for an existing user:
    cy.fixture("ui/user.json").then(({ email, password }) => {
      loginPage.enterEmail(email);
      loginPage.enterPassword(password);
    });

    // 4. Click the"Log in" button
    loginPage.clickLoginButton();
    mainPage.checkPageIsOpened();

    // Expected Result
    // 1.The user should be logged in successfully.
    mainPage.checkLoggedIn();
  });

  it("002.1. Search computers by different prices ranges", () => {
    // 2. Enter "comput" in the search panel.
    mainPage.enterSearchTerm("comput");

    // 3. Click "Search" on the main page.
    mainPage.clickSearch();
    searchPage.checkPageIsOpened();

    // Expected Result
    // 1. There should be 6 products displayed for the initial search after step 3.
    searchPage.checkNumberOfProducts(6);

    // 4. Open "Advanced Search".
    searchPage.openAdvancedSearch();

    // 5. Select "Computers >> Desktops" from the "Category" dropdown.
    searchPage.selectCategory("Computers >> Desktops");

    // 6. Click "Search" on the search page.
    searchPage.clickSearchButton();
    searchPage.checkPageIsOpened();

    // Expected Result
    // 2. There should be 4 products displayed for the search after step 6.
    searchPage.checkNumberOfProducts(4);

    // 7. Set the "Price range" to "From 800 to 1500".
    searchPage.setPriceRange(800, 1500);

    // 8. Click "Search" on the search page.
    searchPage.clickSearchButton();
    searchPage.checkPageIsOpened();

    // Expected Result
    // 3. There should be 3 products displayed for the advanced search after step 7.
    searchPage.checkNumberOfProducts(3);

    // 4. The first product in the advanced search should have the title "Build your own cheap computer".
    searchPage.checkFirstProductTitle("Build your own cheap computer");
  });

  it("003.1. Add default computer to cart", () => {
    // 2. Navigate to the "Computer" category from the top menu.
    mainPage.navigateToCategoryFromTopMenu("Computers");
    categoryPage.checkPageIsOpened("Computers");

    // 3. Select the "Desktops" subcategory.
    categoryPage.openSubcategory("Desktops");
    categoryPage.checkPageIsOpened("Desktops");

    // 4. Open the "Build your own cheap computer" product page.
    categoryPage.openProduct("Build your own cheap computer");
    productPage.checkPageIsOpened("Build your own cheap computer");

    // 5. Click "Add to cart".
    productPage.addProductToCart();

    // Expected Result
    // 1. A success notification bar with text "The product has been added to your shopping cart" should be visible in the header.
    productPage.checkSuccessBarNotification();

    // 2. The shopping cart should contain 1 product.
    mainPage.checkShoppingCartNumberOfProducts(1);
  });

  it("004. Checkout process with logged in user - all default options", () => {
    // 2. Click the "Log in" link in the header.
    mainPage.clickLogIn();
    loginPage.checkPageIsOpened();

    // 3. Enter valid credentials for an existing user:
    cy.fixture("ui/user.json").then(({ email, password }) => {
      loginPage.enterEmail(email);
      loginPage.enterPassword(password);
    });

    // 4. Click the"Log in" button
    loginPage.clickLoginButton();
    mainPage.checkPageIsOpened();

    // 5. Navigate to the "Books" category from the top menu.
    mainPage.navigateToCategoryFromTopMenu("Books");
    categoryPage.checkPageIsOpened("Books");

    // 6. Open the "Computing and Internet" product page.
    categoryPage.openProduct("Computing and Internet");
    productPage.checkPageIsOpened("Computing and Internet");

    // 7. Click "Add to cart".
    productPage.addProductToCart();

    // 8. Open the shopping cart from the link in the header.
    mainPage.navigateToShoppingCart();
    shoppingCart.checkPageIsOpened();

    // 9. Agree with the terms of service by clicking the checkbox.
    shoppingCart.agreeWithTermsOfService();

    // 10. Click the "Checkout" button.
    shoppingCart.navigateToCheckout();
    checkoutPage.checkPageIsOpened();

    // 11. Click "Continue" in the Billing Address block.
    checkoutPage.clickButtonInBlock("billing");

    // 12. Click "Continue" in the Shipping Address block.
    checkoutPage.clickButtonInBlock("shipping");

    // 13. Click "Continue" in the Shipping Method block.
    checkoutPage.clickButtonInBlock("shipping-method");

    // 14. Click "Continue" in the Payment Method block.
    checkoutPage.clickButtonInBlock("payment-method");

    // 15. Click "Continue" in the Payment Information block.
    checkoutPage.clickButtonInBlock("payment-info");

    // 16. Click "Confirm" in the Confirm Order block.
    checkoutPage.clickButtonInBlock("confirm-order");
    completedPage.checkPageIsOpened();

    // Expected Result
    // 1. The completed message should contain the text "Your order has been successfully processed!".
    completedPage.checkSuccessMessage();
  });
});
