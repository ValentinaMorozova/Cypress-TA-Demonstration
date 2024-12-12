describe("API tests", () => {
  before("Set baseUrl for API tests", () => {
    Cypress.config("baseUrl", Cypress.env("apiBaseUrl"));
  });

  beforeEach("N", () => {});

  it("001. Validate number of results for authors search", () => {
    const requestURL =
      Cypress.config("baseUrl") + "/search/authors.json?q=Stephen+King";
    cy.request({
      method: "GET",
      url: requestURL,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("numFound", 82);
    });
  });

  it("002. Validate first result for book title search", () => {
    const requestURL =
      Cypress.config("baseUrl") + "/search.json?q=Harry+Potter&fields=title";
    cy.request({
      method: "GET",
      url: requestURL,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body["docs"][0]).to.have.property(
        "title",
        "Harry Potter and the Philosopher's Stone"
      );
    });
  });
});
