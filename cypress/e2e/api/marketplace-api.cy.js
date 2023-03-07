/// <reference types="Cypress" />

import HomePage from '../../support/pages/home-page.js'
import CockpitPage from '../../support/pages/cockpit-page.js'
import MarketplacePage from '../../support/pages/marketplace-page.js'

const home = new HomePage()
const cockpit = new CockpitPage()
const market = new MarketplacePage()

describe('Marketplase page UI', () => {
    beforeEach(() => {
        cy.loginByApi('victoria.antonova@volo.global', 'Volo12345')
        // home.openCockpit()
        // cockpit.clickSideBarMenuItem('Integrations')
        // cockpit.clickSideBarMenuSubItem('Marketplace')
    })

    it.only('Example sending GET request', () => {
        cy.request('https://api.raiser.work/api/integration/tenant')
            .then((response) => {
                console.log(response)
            })
    })
})