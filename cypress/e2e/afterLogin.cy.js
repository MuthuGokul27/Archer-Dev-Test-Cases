//const cypress = require("cypress");

describe("Verifying Product in user Dashboard", () =>{
    beforeEach("Open Dashboard", () =>{
    cy.visit(Cypress.env("afterLoginUrl"), {
        auth: {
            username: "tartlabs",
            password: "T@rtL@bs",
        },
        });
        
    })

it("Check for right URl", () =>{
    cy.url().should("eq", "https://beta-app-feature.archerpage.com")
})
})