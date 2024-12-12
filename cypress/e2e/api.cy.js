describe("API tests", () => {
  before("Set baseUrl for API tests", () => {
    Cypress.config("baseUrl", Cypress.env("apiBaseUrl"));
  });

  it("001. Validate number of results for authors search", () => {
    cy.fixture("api_authors_search").then((data) => {
      data.forEach(({ name, numberOfResults }) => {
        const requestURL =
          Cypress.config("baseUrl") +
          "/search/authors.json?q=" +
          name.replaceAll(" ", "+");
        cy.request({
          method: "GET",
          url: requestURL,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("numFound", numberOfResults);
        });
      });
    });
  });

  it("002. Validate first result for book title search", () => {
    cy.fixture("api_books_titles_search").then((data) => {
      data.forEach(({ book, title }) => {
        const requestURL =
          Cypress.config("baseUrl") +
          "/search.json?q=" +
          book.replaceAll(" ", "+") +
          "&fields=title";
        cy.request({
          method: "GET",
          url: requestURL,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body["docs"][0]).to.have.property("title", title);
        });
      });
    });
  });
});
