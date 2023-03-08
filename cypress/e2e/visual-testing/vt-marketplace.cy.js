/// <reference types="Cypress" />

import HomePage from '../../support/pages/home-page.js'
import CockpitPage from '../../support/pages/cockpit-page.js'
import MarketplacePage from '../../support/pages/marketplace-page.js'

const home = new HomePage()
const cockpit = new CockpitPage()
const market = new MarketplacePage()

describe('Marketplase page visual test', () => {

  beforeEach(() => {
    // Open Eyes to start visual testing.
    cy.eyesOpen({
      appName: 'Raiser > Marketplace',
      testName: Cypress.currentTest.title,
    })
    // Login w/ UI costom command.
    cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
    // Load the Marketplace page.
    home.openCockpit()
    cockpit.clickSideBarMenuItem('Integrations')
    cockpit.clickSideBarMenuSubItem('Marketplace')
  })

  it('checks features', () => {
    // Verify the full Marketplace page loaded correctly.
    cy.eyesCheckWindow({
      tag: "Marketplace page",
      target: 'window',
      fully: true
    });

    //market.getFeatureCard('Microsoft Exchange / Office 365')
    cy.get('.ngx-ellipsis-inner').contains('Microsoft Exchange / Office 365').click()


    // Verify the full Feature Card loaded correctly.
    cy.eyesCheckWindow({
      tag: "Feature Card: Microsoft Exchange / Office 365",
      target: 'window',
      fully: true
    });

    

  })

  afterEach(() => {

    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
  })
})