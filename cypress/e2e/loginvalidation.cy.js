describe("Login Validation", () => {
   const auth = {
    username: "tartlabs",
    password: "T@rtL@bs",
   }

    it("loginvalidation", () =>{
        cy.visit("https://archerpage.com", {auth})
        cy.get('#reset-button').click()
        cy.get('[id="login"]').click();
        cy.get('[id="email"]').type("muthugokul0277@gmail.com")
        cy.get('#next-button').click()
        cy.get('[id="get-product"]').click()
        cy.get('[id="email"]').type("muthugokul0277@gmail.com")
        cy.get('#next-button').click()
        cy.get('[class="pl-2"]').should("contain", "No Archer Review account is linked with this email address.")
        cy.get('[id="email"]').clear()
        cy.get('[id="email"]').type("muthugokul027@@gmail.com")
        cy.get("#next-button").click()
        cy.get('[class="pl-2"]').should("contain", "Enter a valid email")
        cy.get('[id="email"]').clear()
        cy.get('[id="email"]').type("muthugokul027@gmail.com")
        cy.get("#next-button").click()
        cy.get("#password").type("passwor")
        cy.get("#next-button").click()
        cy.wait(4000)
        cy.get(".pt-3").should("contain", "These credentials do not match our records.")
        cy.get("#password").clear()
        cy.get("#password").type("password")
        cy.get("#next-button").click()
    })

})