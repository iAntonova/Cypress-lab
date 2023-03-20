let accessToken

const setAccessTokenIfNotYetSet = () => {
    if (!accessToken) {
        cy.task('getToken')
            .then(token => {
                accessToken = token
            })
    }
}

Cypress.Commands.add('api_login', () => {
    cy.request({
        method: 'POST',
        url: 'https://auth.raiser.work/connect/token',
        form: true,
        body: {
            username: 'victoria.antonova@volo.global',
            password: 'Volo12345',
            subdomain: 'test',
            client_id: 'angularapi1',
            grant_type: 'password',
            client_secret: 'secret',
            scope: 'api3 openid offline_access'
        }
    })
        .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.token_type).equal('Bearer')
            accessToken = resp.body.access_token
            cy.log(resp.body.access_token)
        })
})



Cypress.Commands.add('api_searchTag', () => {
    setAccessTokenIfNotYetSet()
    cy.request({
        method: 'POST',
        url: 'https://api.raiser.work/api/integration/tenant/features',
        headers: { authorization: 'Bearer ' + accessToken },
        body: { "name": "", "tags": [11] }
    })
})