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

Cypress.Commands.add('loginUI', (username, password, namecheck) => {
    cy.session(['loginByForm', username], () => {
        cy.visit('/login')
        cy.get(':nth-child(3) > .new-element').should('be.visible')
        cy.get(':nth-child(3) > .new-element').type(username)
        cy.get(':nth-child(4) > .new-element').type(password)
        cy.get('.btn-blue').click()
        cy.get('.m-b-3 > .name-hyperlink', { timeout: 250000 }).should('be.visible')
        cy.url().should('contain', '/dashboard')
        cy.get('.m-b-3 > .name-hyperlink').should('contain', namecheck)
    })
    cy.visit('/dashboard')
})


Cypress.Commands.add('loginByApi', (username) => {
    const login = (username, () => {
        cy.session(username, () => {
            cy.request({
                method: 'POST',
                url: 'https://auth.raiser.work/connect/token',
                form: true,
                body: {
                    username: username,
                    password: 'Volo12345',
                    subdomain: 'test',
                    client_id: 'angularapi1',
                    grant_type: 'password',
                    client_secret: 'secret',
                    scope: 'api3 openid offline_access'
                }
            }).then(({resp}) => {
                window.localStorage.setItem('authToken', resp.body.access_token)
                    // expect(resp.status).to.eq(200)
                    // expect(resp.body.token_type).equal('Bearer')
                    // tokenvalue = resp.body.access_token
                    // cy.log(resp.body.access_token)
                })
        })
    })
})


// let tokenvalue

//     //     cy.loginByApi('victoria.antonova@volo.global', 'Volo12345')


//     it('Example sending GET request', () => {
//         