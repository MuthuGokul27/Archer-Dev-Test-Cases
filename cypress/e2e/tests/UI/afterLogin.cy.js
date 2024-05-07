//const cypress = require("cypress");

describe("Verifying Product in user Dashboard", () =>{

    const auth = {
        username: "tartlabs",
        password: "T@rtL@bs",
       }

    it("Validation", () =>{
        cy.visit("https://archerpage.com/login", {auth})

        cy.intercept("GET", "https://api.archerpage.com/api/v1/my-profile", (req)=>{
            req.reply((res) =>{
                res.body.user.has_user_bought_product = 0;
                return res;
        
            })

        })

        cy.loginToApplication("mycypress@mailinator.com", "password")
        cy.wait(4000)
        cy.visit("https://beta-app-feature.archerpage.com/", {auth})
        cy.wait(8000)
        cy.intercept("GET", "https://api.archerpage.com/api/v1/active-product", (interception) =>{
            interception.reply((response) =>{
                const active_products = response.body.activeProducts.product_variant.display_name;
                return active_products;
            })
            cy.wait(8000)
        })

        it("Validating Active Products", () =>{
            console.log(active_products)
            cy.contains(active_products).should("exist");
        })

    })

})