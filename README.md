# UI and API Test Automation Demonstration

## Purpose

This project serves as a demonstration of my skills in test automation for a QA technical assignment. It includes two types of automated tests: **UI tests** and **API tests**.

The original task can be found in the file `docs/Task.docx`

## Systems Under Test

- UI tests check the behavior of https://demowebshop.tricentis.com, a demo web shop with a mock payment interface.

- API tests check the REST-API for https://openlibrary.org/; documentation is available [here](https://openlibrary.org/developers/api).

# Solution

This project is developed in Cypress.
Test reports are generated in a simple HTML format.

## Requirements

To get started, you need to have [Node.js](https://nodejs.org/en/download/package-manager) version `v22.11.0` or later. You also need to install `cypresss` for run tests and `mochawesome` for reports. For that, you can use `npm` package installer with the next command:

> npm install cypress mochawesome --save-dev

## Environment

The solution was created and tested on Windows 11. For other systems, some adjustments might be needed.

Cypress can run tests on any browser installed on your machine.
UI tests were tested on **Chrome v131**, **Edge v131** and **Electron v118**.

## Run tests

### First method

Tests could be run via `cypress` app.

To open cypress, run this in main directory command line:

> npx cypress open

You need to choose `e2e testing` and any browser to open the spec files.

To run UI tests, click on `ui.cy.js`

### Second method

Tests could be run via the command line in main directory. `--browser` is an optional parameter, can be `electron`, `chrome`, `edge` or `firefox` (any of those browsers should be installed on your machine in advance).

> npx cypress run --browser=chrome

You also can run tests for each spec file separately:

> npx cypress run --spec cypress/e2e/ui.cy.js

For cmd runs, HTML report for each spec could be found in **cypress/reports** directory.

## Internal structure

- **cypress**: Contains the Java Script code for the automated tests. This includes:
  - **e2e** - specs, files with test cases;
  - **fixtures** - .json files with test data, used for different specs;
  - **reports** - HTML reports generated for each spec separately;
  - **support** - page objects file with cypress code, and other supported files.
- **docs**: Stores all documentation related to the project. This includes:
  - **Task.docx** – task description;
  - **Test cases.xlsx** – traceability matrix;
  - **Test results.xlsx** – bug report.
  - **B-UI-001.png** – screenshot for bug report;
- **cypress.config.js**: Stores cypress configuration.
