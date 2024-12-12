// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("checkPageHeader", (header) => {
  cy.get("h1")
    .invoke("text")
    .then((text) => {
      const cleanedText = text
        .replaceAll("&nbsp;", "")
        .replaceAll("\n", "")
        .trim();
      expect(cleanedText).to.equal(header);
    });
});

Cypress.Commands.add("checkPageURL", (url) => {
  cy.url().should("eq", Cypress.config("baseUrl") + url);
});

Cypress.Commands.add("sendRequestToEndpoint", (endpoint, query) => {
  const url = `${Cypress.config("baseUrl")}/search/${endpoint}.json?q=${query}`;
  return cy.request("GET", url).then((response) => {
    return cy.wrap(response);
  });
});

Cypress.Commands.add("sendRequestForBookWithTitle", (book) => {
  const url = `${Cypress.config("baseUrl")}/search.json?q=${book}&fields=title`;
  return cy.request("GET", url).then((response) => {
    return cy.wrap(response);
  });
});
