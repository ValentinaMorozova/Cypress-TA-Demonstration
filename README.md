# UI and API Test Automation Demonstration

## Purpose

This project serves as a demonstration of my skills in test automation for a QA technical assignment. It includes two types of automated tests: **UI tests** and **API tests**.

The original task can be found in the file **docs/Task.docx**

## Systems Under Test

- UI tests check the behavior of https://demowebshop.tricentis.com, a demo web shop with a mock payment interface.

- API tests check the REST-API for https://openlibrary.org/; documentation is available [here](https://openlibrary.org/developers/api).

## Solution

This project is developed using the `Cypress` framework to implement a test automation solution. To ensure clean and maintainable code, I have applied the **Page Object Pattern** for organizing UI test elements and actions.

Test reports are generated in a simple HTML format using the `mochawesome` library.

### Requirements

To get started, you need to have [Node.js](https://nodejs.org/en/download/package-manager) version `v22.11.0` or later. Additionally, you’ll need to install `Cypress` to run tests and `mochawesome` for generating reports. You can do this by using the `npm` package manager with the following command:

> npm install cypress mochawesome --save-dev

### Environment

This solution was developed and tested on **Windows 11**. For other operating systems, some adjustments may be required.

`Cypress` supports running tests on any browser installed on your machine. For this project, UI tests were validated on the following browsers:

- Chrome v131
- Edge v131
- Electron v118

### Run tests

#### Method 1: Using the Cypress App

You can run the tests using the `Cypress` application.

To open `Cypress`, navigate to the main project directory in your terminal and run the following command:

> npx cypress open

Once `Cypress` opens, select "E2E Testing" and choose any browser you prefer to run the spec files.

To execute the **API tests**, click on the file **api.cy.js**, to execute the **UI tests**, click on the file **ui.cy.js**.

#### Method 2: Using the Command Line

You can also run tests via the command line from the main project directory. The `--browser` flag is optional and can be set to `electron`, `chrome`, `edge` or `firefox` (ensure the selected browser is installed on your machine beforehand).

To run tests with a specific browser, use the following command:

> npx cypress run --browser=chrome

You can also run tests for individual spec files by specifying the path:

> npx cypress run --spec cypress/e2e/ui.cy.js

When running tests via the command line, an HTML report will be generated for each spec file separately in the **cypress/reports** directory.

### Internal structure

- **cypress**: Contains the JavaScript code for the automated tests. This includes:
  - **e2e**: Spec files with test cases.
  - **fixtures**: .json files containing test data used across different specs.
  - **reports**: HTML reports generated for each spec file separately.
  - **support**: Page object files with `Cypress` code and other supporting files.
- **docs**: Contains all project-related documentation. This includes:
  - **Task.docx**: Task description.
  - **Test cases.xlsx**: Traceability matrix for test cases.
  - **Test results.xlsx**: Bug report.
  - **B-UI-001.png**: Screenshot for the bug report.
- **cypress.config.js**: Cypress configuration file.
