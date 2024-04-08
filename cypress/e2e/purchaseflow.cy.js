describe("Purchas Flow", () =>{

    beforeEach("bypass login", () => {
        cy.visit("/", {
          auth: {
            username: "tartlabs",
            password: "T@rtL@bs",
          },
        });
        cy.on("window:alert", (str) => {
          expect(str).to.equal("Sign in");
        });
      });


    it("Sign up To Application", () =>{
        cy.signUpToApplication("Gokul", "Cypress", "gokulcypress15@mailinator.com", "password")
       // cy.contains("View Products").click()
        //cy.contains("NCLEX-RN®").click()
        cy.visit("https://nurses.archerpage.com/nclex-rn",{
          auth: {
            username: "tartlabs",
            password: "T@rtL@bs"
          },
      })

      cy.contains("Buy Now").click()
      cy.contains('Buy Now | $159').click()

      })

})