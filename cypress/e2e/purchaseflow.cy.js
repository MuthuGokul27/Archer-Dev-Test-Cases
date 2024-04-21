describe("Purchas Flow", () =>{

 const auth = {
    username: "tartlabs",
    password: "T@rtL@bs",
  }

    beforeEach("bypass login", () => {
        cy.visit("/", {auth});
      });


    it("Sign up To Application", () =>{

      cy.intercept("GET", "https://api.archerpage.com/api/v1/my-profile", (req) => {
        req.reply((res) => {
          res.body.user.is_email_verified = 1;
          return res;
        })
      }).as("activated")

      cy.intercept("POST", "https://api.archerpage.com/api/v1/checkout", (req) =>{
        req.reply((res) =>{
            res.body.is_email_verified = True;
            return res;
        })
      })


        cy.signUpToApplication("Gokul", "Cypress", "gokulcypress28@mailinator.com", "password")
       //cy.wait("@activated").then((interception) => {
        //expect(interception.response.body.isActivate).to.equal("1")

       //})
        cy.visit("https://nurses.archerpage.com/nclex-rn",{auth})

      cy.contains("Buy Now").click()
      cy.contains('Buy Now | $159').click()

      })

})