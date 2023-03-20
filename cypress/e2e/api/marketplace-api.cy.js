/// <reference types="Cypress" />

import HomePage from '../../support/pages/home-page.js'
import CockpitPage from '../../support/pages/cockpit-page.js'
import MarketplacePage from '../../support/pages/marketplace-page.js'
import { Response } from 'node-fetch'

const home = new HomePage()
const cockpit = new CockpitPage()
const market = new MarketplacePage()

let tokenvalue

describe('Marketplase page UI', () => {
    // beforeEach(() => {
    //     cy.loginByApi('victoria.antonova@volo.global', 'Volo12345')
    //     // home.openCockpit()
    //     // cockpit.clickSideBarMenuItem('Integrations')
    //     // cockpit.clickSideBarMenuSubItem('Marketplace')
    // })

    it('Example sending GET request', () => {
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
                tokenvalue = resp.body.access_token
                cy.log(resp.body.access_token)
            })
        })
        it('my first request to raiser', () => {
            cy.request({
                method: 'POST',
                url: 'https://api.raiser.work/api/integration/tenant/features',
                headers: {
                    authorization: 'Bearer ' + tokenvalue
                },
                body: { "name": "", "tags": [] }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                cy.log(resp.body)
            })
        })

    })