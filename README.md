# Learning protractor

This is a project to learn protractor by a mentorship program between Lucas Cordeiro da Silva and Walmyr Filho.

## Installation

`npm install`

Install the project dependencies

## Update webdriver-manager

`npm run webdriver:update`

This command needs to be executed after the project installation.

## Running tests

`npm test`

Run the Protractor tests

## Project structure

This is a very simple project with the following structure:

The `protractor.conf.js` stores all the configuration needed for running the e2e tests, such as spec files (test files), baseUrl, capabilities, etc.

The `*.spec.js` files are the test suites. Each spec file has at least one `describe` section (that is the test suite) and one ore more `it` sections, that are the test cases.

The `package.json` file is used for installing the project dependencies and scripts, such as script installation and webdriver update.

The `.gitignore` file is where all ignored files and directories are defined. Ignored files are not stored by the version control system.
