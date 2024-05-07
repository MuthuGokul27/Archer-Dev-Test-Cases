import Login from "../../../pageobjects/loginpage"
import cardCreadientials from "../../../pageobjects/cardcreadientials"

describe("Purchase Flow", () =>{
  const auth = {
    username: "tartlabs",
    password: "T@rtL@bs",

  }

  const login = new Login()
  const cardDetails = new cardCreadientials()
  
  beforeEach("Landing Page", () =>{
    cy.visit("/", {auth})
  })

  let username = "muthugokul027@gmail.com";
  let password = "password"


  it("Loging in and Purchasing Surepass Product", () =>{

    //Intersepting API Call and Restricting Takeing User to React Js
    cy.intercept("GET", "https://api.archerpage.com/api/v1/my-profile", (req)=>{
            req.reply((res) =>{
                res.body.user.has_user_bought_product = 0;
                return res;
              })
            })
    
    cy.get('#reset-button').click()
    cy.get('[id="login"]').click()
    cy.wait(6000)
    login.setUserName(username)
    cy.wait(6000)
    login.setPassword(password)
    cy.wait(6000)
    cy.get('#reset-button > .relative').click()
    cy.get('[id="NCLEX-RN®"]').should("have.attr", "href", "https://nurses.archerpage.com/nclex-rn", )
    cy.visit("https://nurses.archerpage.com/nclex-rn", {auth})
    cy.get('#buy-now > .relative').click()
    cy.get('#reset-button').click()
    cy.get('.border-selago-500.block > .flex-col > .z-10 > #reset-button > .relative').click()
    cy.get('.p-5 > .w-full > .text-sm').should("contain", "Your Item has been added to Cart !")
    cy.get(".pulse > .relative").click()
    cy.wait(6000)
    cy.get('[id="credit-debit-card"]').click()
    cy.wait(6000)
    cy.get('.leading-8.text-\[\#0E1633\] > .text-lg').invoke('text').as("totalPrice")
    cardDetails.fillingCreadientials("4111111111111111", "0330", "366", "James")
    cy.wait(10000)
    cy.get("p[class='text-base font-semibold text-[#00A185]']").should("contain", "@totalprice")
    cy.get('[id="go-dashboard"]').click()


    


  })
})