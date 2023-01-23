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

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.get(':nth-child(3) > .new-element').should('be.visible')
    cy.get(':nth-child(3) > .new-element').type(username)
    cy.get(':nth-child(4) > .new-element').type(password)
    cy.get('.btn-blue').click()
    cy.get('.m-b-3 > .name-hyperlink', {timeout: 15000}).should('be.visible')
    //cy.get('app-employee-header > app-progress.ng-star-inserted > .loader-wrapper').should('be.visible')
    cy.url().should('contain', '/dashboard')
    
    //cy.get('app-employee-header > app-progress.ng-star-inserted > .loader-wrapper').should('be.visible')
    cy.get('.m-b-3 > .name-hyperlink').should('contain', 'Victoria Antonova')
})


// Cypress.Commands.add('login', (username, password) => {
//     cy.session([username, password], () => {
//       cy.visit('/login')
//       cy.get(':nth-child(3) > .new-element').type(username)
//       cy.get(':nth-child(4) > .new-element').type(password)
//       cy.get('.btn-blue').click()
//       cy.url().should('contain', '/dashboard')
//       cy.get('.m-b-3 > .name-hyperlink').should('contain', 'Victoria Antonova')
//     })
// })

// Cypress.Commands.add('loginViaUi', (user) => {
//     cy.session(
//       user,
//       () => {
//         cy.visit('/login')
//         cy.get(':nth-child(3) > .new-element').type(user.email)
//         cy.get(':nth-child(4) > .new-element').type(user.password)
//         cy.click('.btn-blue')
//         cy.url().should('contain', '/dashboard')
//         //cy.get('h1').contains(`Welcome back ${user.name}!`)
//         cy.get('.m-b-3 > .name-hyperlink').contains(`${user.name}`)
//       },
//       {
//         validate: () => {
//           cy.getCookie('auth_key').should('exist')
//         },
//       }
//     )
// })