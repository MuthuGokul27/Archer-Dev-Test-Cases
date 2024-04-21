//const cypress = require("cypress");

describe("Verifying Product in user Dashboard", () =>{

    const auth = {
        username: "tartlabs",
        password: "T@rtL@bs",
       }

    it("Validation", () =>{
        cy.visit("https://archerpage.com/login", {auth})
        cy.loginToApplication("muthugokul027@gmail.com", "password")
        cy.visit("https://beta-app.archerpage.com/", {auth})
        //cy.wait(4000)
        //cy.contains("Skip").click()
        //cy.contains("Skip").click()


    })

})