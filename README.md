We need to install the cypress axe package to be able to carry out accessibity tests on a page using cypress

Run the command `npm install --save-dev cypress-axe` and `npm install --save-dev cypress axe-core` then include `import 'cypress-axe'` inside `cypress/support/e2e.js` file

## To view the accessibility issue 

While the cypress runner has completed, right click on a specific a11y issue and click inspect. Proceed to console tab of the inspect tool and located the description of the issue