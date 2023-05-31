const { defineConfig } = require("cypress");

// cypress.config.js
module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "7f7ad8a6c2ca0a81acf0fb9f5e7f97e8454ce83687a92f776a8e5a13024327d6",
  },
  e2e: {
    defaultCommandTimeout: 100000,
    responseTimeout: 100000,
    requestTimeout: 100000,
  },
});
