// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  
Cypress.Commands.add("loginToApplication", (email,password) =>{
    cy.get('#reset-button').click()
    cy.get('[id="login"]').click();
    cy.get('[id="email"]').type(email)
    cy.get('#next-button').click()
    cy.get('[id="get-product"]').click()
    cy.get('[id="email"]').type(email)
    cy.get('#next-button').click()
    cy.get('[id="password"]').type(password)
    cy.get('[id="next-button"]').click()
    cy.visit("https://beta-app-feature.archerpage.com/")
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