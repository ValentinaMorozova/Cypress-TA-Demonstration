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

To get started, you need to have `Node.js` `v22.11.0` or later. To install `cypress`, you can use `npm` package installer.

> npm install cypress --save-dev

## Environment

The solution was created and tests on Windows 11. For other systems, some adjustments might be needed.

UI tests require **Google Chrome** browser. It must be installed on your machine to run the tests.

## Run tests

Tests could be run via the command line in main directory.

To open cypress, run this:

> npx cypress open

YOu need to chose `e2e` tests to see the solution.

## Internal structure

- **cypress**: Contains the Java Script code for the automated tests. This includes:
  - **e2e** ;
  - **fixtures** ;
  - **support** .
- **docs**: Stores all documentation related to the project. This includes:
  - **Task.docx** – task description;
  - **Test cases.xlsx** – traceability matrix;
  - **Test results.xlsx** – bug report.
- **logs**: Stores example log files generated during test execution.
- **reports**: Contains HTML reports generated from the test results.
