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
    mainPage.navigateToMainPage();
  });

  // TC-UI-001
  it("Verify user login through the main page", () => {
    cy.fixture("ui/001_users.json").then((testData) => {
      testData.forEach(({ email, password }) => {
        mainPage.clickLogIn();
        loginPage.checkPageIsOpened();

        loginPage.enterEmail(email);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();
        mainPage.checkPageIsOpened();

        mainPage.checkLoggedIn();
      });
    });
  });

  // TC-UI-002
  it("Search computers by different prices ranges", () => {
    cy.fixture("ui/002_searches.json").then((testDatas) => {
      testDatas.forEach((testData) => {
        mainPage.enterSearchTerm(testData.searchQuery);
        mainPage.clickSearch();
        searchPage.checkPageIsOpened();
        searchPage.checkNumberOfProducts(testData.numberOfProducts[0]);

        searchPage.openAdvancedSearch();

        searchPage.selectCategory(testData.productCategory);
        searchPage.clickSearchButton();
        searchPage.checkPageIsOpened();
        searchPage.checkNumberOfProducts(testData.numberOfProducts[1]);

        searchPage.setPriceRange(
          testData.pricesRange.from,
          testData.pricesRange.to
        );
        searchPage.clickSearchButton();
        searchPage.checkPageIsOpened();
        searchPage.checkNumberOfProducts(testData.numberOfProducts[2]);

        searchPage.checkFirstProductTitle(testData.productTitle);
      });
    });
  });

  // TC-UI-003
  it("Add default computer to cart", () => {
    cy.fixture("ui/003_desktops.json").then((testDatas) => {
      testDatas.forEach((testData) => {
        mainPage.navigateToCategoryFromTopMenu(testData.category);
        categoryPage.checkPageIsOpened(testData.category);

        categoryPage.openSubcategory(testData.subcategory);
        categoryPage.checkPageIsOpened(testData.subcategory);

        categoryPage.openProduct(testData.productTitle);
        productPage.checkPageIsOpened(testData.productTitle);

        productPage.addProductToCart();
        productPage.checkSuccessBarNotification();
        mainPage.checkShoppingCartNumberOfProducts(1);
      });
    });
  });

  // TC-UI-004
  it("Checkout process with logged in user - all default options", () => {
    cy.fixture("ui/004_checkout.json").then((testDatas) => {
      testDatas.forEach((testData) => {
        mainPage.clickLogIn();
        loginPage.checkPageIsOpened();
        loginPage.enterEmail(testData.email);
        loginPage.enterPassword(testData.password);
        loginPage.clickLoginButton();
        mainPage.checkPageIsOpened();

        mainPage.navigateToCategoryFromTopMenu(testData.category);
        categoryPage.checkPageIsOpened(testData.category);
        categoryPage.openProduct(testData.productTitle);
        productPage.checkPageIsOpened(testData.productTitle);

        productPage.addProductToCart();
        mainPage.navigateToShoppingCart();
        shoppingCart.checkPageIsOpened();

        shoppingCart.agreeWithTermsOfService();
        shoppingCart.navigateToCheckout();
        checkoutPage.checkPageIsOpened();

        checkoutPage.clickButtonInBlock("billing");
        checkoutPage.clickButtonInBlock("shipping");
        checkoutPage.clickButtonInBlock("shipping-method");
        checkoutPage.clickButtonInBlock("payment-method");
        checkoutPage.clickButtonInBlock("payment-info");
        checkoutPage.clickButtonInBlock("confirm-order");
        completedPage.checkPageIsOpened();

        completedPage.checkSuccessMessage();
      });
    });
  });
});
