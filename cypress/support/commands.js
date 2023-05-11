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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', ()=>{
    cy.visit('https://www.hotwire.com/', {failOnStatusCode: false})
    // cy.get('[class="btn btn-default sign-in btn-xs"]').click()
    // cy.wait(500)
    // cy.get('[placeholder="Email"]').type('gotejip261@maksap.com')
    // cy.get('[placeholder="Password"]').type('e5h!8Gp!TW-BuZg')
    // cy.get('[class="btn btn-primary btn-block"]').click()
    // cy.wait(10000)
    cy.get('[data-bdd="farefinder-option-flights"]').click()
})

// Cypress.Commands.setDate('setDate', ()=>{
//     let date = new Date()
//     date.setDate(date.getDate()+5)
//     let futureDate = date.getDay()
//     let futureMonth = date.toLocaleTimeString('default', {month: 'short'})
// })
  