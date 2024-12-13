describe("API tests", () => {
  it("001. Validate number of results for authors search", () => {
    cy.fixture("api/search/authors-results").then((testData) => {
      testData.forEach(({ name, numberOfResults }) => {
        cy.sendRequestToEndpoint("authors", name).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("numFound", numberOfResults);
        });
      });
    });
  });

  it("002. Validate first result for book title search", () => {
    cy.fixture("api/search/books-first-title").then((testData) => {
      testData.forEach(({ book, title }) => {
        cy.sendRequestForBookWithTitle(book).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body["docs"][0]).to.have.property("title", title);
        });
      });
    });
  });
});
