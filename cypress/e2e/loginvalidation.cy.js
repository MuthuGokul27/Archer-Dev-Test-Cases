import Login from "../pageobjects/loginpage"

describe("Login Validation", () => {
   const auth = {
    username: "tartlabs",
    password: "T@rtL@bs",
   }

   const login = new Login();

    it("loginvalidation", () =>{
        cy.visit("https://archerpage.com", {auth})
        cy.get('#reset-button').click()
        cy.get('[id="login"]').click();
        login.setUserName("muthugokul0277@gmail.com")
        cy.get('[id="get-product"]').click()
    
        //Validting When The User Types Wrong Email Address Error Message
        login.setUserName("muthugokul0277@gmail.com")
        cy.get('[class="pl-2"]').should("contain", "No Archer Review account is linked with this email address.")
        cy.get('[id="email"]').clear()

        //Validting When The User Types Invalid Email Formet Error Message
        login.setUserName("muthugokul027@@gmail.com")
        cy.get('[class="pl-2"]').should("contain", "Enter a valid email")
        cy.get('[id="email"]').clear()

        //Vlidating When a Educator Trying to login in archerreview
        login.setUserName("davidmalanstanford@mailinator.com")
        cy.get('[id="get-product"]').should("contain", "Go to Educator Login")
        cy.get('svg[width="18"][height="18"][color="#687687"]').eq(0).click()
        cy.get('[id="email"]').clear()

        //Validating When We Enter correct Email Address, It Takes Me to Password Page
        login.setUserName("muthugokul027@gmail.com")

        //Validating Wrong Password
        login.setPassword("passwor")
        cy.wait(4000)
        cy.get(".pt-3").should("contain", "These credentials do not match our records.")

        //Validating Correct Password
        cy.get("#password").clear()
        login.setPassword("password")
    })

})