class LoginApiPage {
    
    visit(){
        cy.visit('/dashboard')
    }

    openCockpit(){
        // cy.get('.icon-settings').should('be.visible')
        cy.get('.icon-settings').should('exist')
        cy.get('.icon-settings').click()
    }

    login = (username, namecheck) => {
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
            }).then(({ body }) => {
                window.localStorage.setItem('access_token', body.access_token)
            })
        },
            {
                validate() {
                    cy.visit('/dashboard')
                    cy.get('.m-b-3 > .name-hyperlink').should('contain', namecheck)
                }, 
                cacheAcrossSpecs: true,
            }
        )
    }

}

export default LoginApiPage;
