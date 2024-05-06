describe("Verifying All Sub Exam Demo", () =>{

    const auth ={
        username: "tartlabs",
        password: "T@rtL@bs",

    }


    beforeEach("Base Url", () =>{
        cy.visit("/", {auth})
    })

    it("Nclex-Rn Demo", function() {
        cy.get('[id="view-demo"]').should("contain", ("View Demo")).click()

        //Verifying Wheather Educator Has a Correct Url
        cy.get('[id="institution"]').should('have.attr', 'href', "https://forms.monday.com/forms/97b2f74b9a3b7dac8a02b73ddc1f599e?r=use1").and("contain", "Educator")

        //Verifying Nclex-Rn Demo

        cy.get('.cursor-pointer > .mt-2').should("contain", "Student").click()
        cy.window().then((win) => {
            cy.spy(win, 'navigateToPage').as('navigateToPage');
        });
        cy.contains("NCLEX-RN").click()




    })

})