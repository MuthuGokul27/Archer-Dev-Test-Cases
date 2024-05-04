const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1080,
  viewportWidth : 1920,
  "pageLoadTimeout": 60000, // Set to 10 seconds
    
  env: {
    afterLoginUrl : "https://beta-app-feature.archerpage.com",
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl : "https://archerpage.com"
},

});
