
  
Cypress.Commands.add("loginToApplication", (email,password) =>{


    cy.get('#reset-button').click()
    cy.get('[id="email"]').type(email)
    cy.get('#next-button').click()
    cy.get('[id="password"]').type(password)
    cy.get('[id="next-button"]').click()
    
  })


  Cypress.Commands.add("signUpToApplication", (firstName,lastName,Email,password) =>{
    cy.get('#reset-button').click()
    cy.get('[id="sign-up"]').click()
    cy.contains('First Name').type(firstName)
    cy.contains("Last Name").type(lastName)
    cy.contains('Email ID ').type(Email)
    cy.contains('Password').type(password)
    cy.get('[id="accept_terms_conditions"]').check()
    cy.get('[id="next-button"]').click()
    cy.get('[id="get-product"]').click()
    cy.contains('First Name').type(firstName)
    cy.contains("Last Name").type(lastName)
    cy.contains('Email ID ').type(Email)
    cy.contains('Password').type(password)
    cy.get('[id="accept_terms_conditions"]').check()
    cy.get('[id="next-button"]').click()
    cy.wait(4000)
    cy.get('span').should("contain", Email)
    cy.get("#get-product").click()


  })