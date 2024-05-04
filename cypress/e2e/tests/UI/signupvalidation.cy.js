/// <reference types = "cypress" />
//import Login from "../pageobjects/loginpage"
//const signup = new Login()

describe("Verifying Signup Validation", function(){
    const auth = {
        username: "tartlabs",
        password: "T@rtL@bs",
       }

       let firstName = "James"
       let lastName = "Clear"
       let email = "jamesclear08@mailinator.com"
       let password = "password"


    it("Signup Validation", () =>{
        cy.visit("https://archerpage.com", {auth});
        cy.get('#reset-button').click();
        cy.get('[id="sign-up"]').click();

        //validating all text field without value
        cy.get('[id="next-button"]').click()
        cy.get('[class="pl-2"]').eq(0).should("contain", "This field is required")
        cy.get('[class="pl-2"]').eq(1).should("contain", "This field is required")
        cy.get('[class="pl-2"]').eq(2).should("contain", "This field is required")
        cy.get('[class="pl-2"]').eq(3).should("contain", "Password has to be longer than 8 characters")
        cy.get('[class="pl-2"]').eq(4).should("contain", "You must agree to terms and conditions and privacy policy.")
        

        //Giving Value and Validating Wheather it Will Successfully Registered or Not.

        cy.get('[for="first-name"]').type(firstName)
        cy.get('[for="last-name"]').type(lastName)

        //Validating Email Field in Signup Page
        cy.get('[id="email"]').click().type("muthugokul027@@gmail.com")
        cy.get('[class="pl-2"]').should("contain", "Enter a valid email")
        cy.get('[id="email"]').clear()

        //Giving a Email Which Already Exist
        cy.get('[id="email"]').type("muthugokul027@gmail.com")

        //Giving Password
        cy.get('[id="password"]').click().type(password)

        //Validating Exam preference
        cy.get('[id="pre-nursing"]').check()

        //Validating Terms and Conditions checkbox
        cy.get('[id="accept_terms_conditions"]').check()
        cy.get('[id="accept_terms_conditions"]').should('be.checked')
        cy.wait(6000)
        cy.get('[id="next-button"]').click()

        //Validating Error Message After Clicking Next Button
        cy.wait(6000)
        cy.get('[class="pl-2"]').should("contain", "The email has already been taken.")
        cy.get('[id="email"]').clear()
        cy.get('[id="email"]').type(email)
        cy.get('[id="next-button"]').click()
        


        //Validating a Success popup Wheather We Get a Correct Email Address
        cy.wait(8000)
        cy.get('.pt-3 > div > .font-bold').should("contain", email)
        cy.get('#get-product').click()
        

        //Verifying Wheather correct email id is present in menu
        cy.wait(8000)
        cy.get('#web-profile-view > .relative').trigger("mouseover")
        cy.get(".inline-flex > .text-ellipsis").then( (client)=> {
            let clientname = client.text()
            expect(clientname).to.equal(firstName + " " + lastName)

        })
        cy.get('.inline-flex > .text-xs').then(  (actusername)=>{
            let actualUserName = actusername.text()
            expect(actualUserName).to.equal(email)
            
        })
        
    })
})