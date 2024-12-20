# Cypress Tests Repository

## How to Download and Run Tests

### 1. Install Dependencies

Before running the tests, you need to install all the necessary dependencies. Run the following command:

```bash
npm install
```

### 2. Running the Tests

#### Running Tests with Cypress in the UI

To run the tests in the Cypress graphical interface, use the following command:

```bash
npx cypress open
```

This command will open the Cypress interface where you can choose and run specific test files.

#### Running Tests in Headless Mode

To run tests in the background without the UI, use the following command:

```bash
npx cypress run
```

This will run all the tests without displaying the interface.

## Test Files Structure

### 1. Test Files

There are two main test files in the repository:

- **pages.cy.js** – A basic test file for checking core functionality.
- **checkout.cy.js** – A test file containing scenarios for completing a task and additional tests.

### 2. Custom Commands

The **cypress.commands.js** file contains custom commands that implement the Page Object pattern. This helps create cleaner and more maintainable code.

### 3. Configuration

The repository also includes a configuration file containing settings for running tests and a reporter for generating HTML reports:

- The **cypress.config.js** file contains the settings for running tests and generating reports in HTML format, which are saved in the **/reports** folder.

### 4. Additional Configuration

The **e2e.js** file has additional settings like **hideXHR**, which are included in the headless configuration for more concise log monitoring during test execution.

### 5. Using intercept()

The **intercept()** method is used to intercept HTTP requests to ensure the complete loading of the menu page and its items, making sure the tests work correctly.

## Explanation

1. **npx cypress open** – Opens the Cypress interface, allowing you to manually select test files to run.
2. **npx cypress run** – Runs all tests in headless mode, generating a report in the **/reports** folder.
3. **cypress.commands.js** – Contains custom commands that enhance test readability by implementing the Page Object pattern.
4. **e2e.js** – An additional config file that includes settings for proper monitoring and filtering out unnecessary XHR requests.

This repository is intended for automated web application testing using Cypress.
