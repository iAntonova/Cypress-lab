/// <reference types="Cypress" />

import HomePage from '../../support/pages/home-page.js'
import CockpitPage from '../../support/pages/cockpit-page.js'
import MarketplacePage from '../../support/pages/marketplace-page.js'

const home = new HomePage()
const cockpit = new CockpitPage()
const market = new MarketplacePage()


describe('Marketplase page UI', () => {

  beforeEach(() => {
    // Login w/ UI custom command.
    cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
    // Load the Marketplace page.
    home.openCockpit()
    cockpit.clickSideBarMenuItem('Integrations')
    cockpit.clickSideBarMenuSubItem('Marketplace')
    cy.fixture('../fixtures/tags.json').as('tags')
  })

  it('checks all available features displayed', () => {
    // Perform Marketplace.
    market.getAllCards().should('have.length', 5)
  })

  it('searches w/ VALID value', () => {
    const searchValidList = ['microsoft', '365', 'teams', 'Gmail', 'Google Calendar', 'Microsoft Teams', 'exc', ' Microsoft ', 'calendar'];
    searchValidList.forEach((li) => {
      cy.log("Searching for " + "\'" + li + "\'");
      market.searchMarketplace(li)
      cy.wait(3000)

      market.getAllCards().each(($element, index) => {
        cy.log("Found: \'" + $element.text() + "\'" + " with index: " + index)
        const ele = cy.wrap($element.innerText)
        ele.contains(li, { matchCase: false })
      })
    })
  })

  it('searches w/ INVALID value', () => {
    const searchInvalidList = ['mac', '057'];
    searchInvalidList.forEach((li) => {
      cy.log("Searching for " + "\'" + li + "\'");
      market.searchMarketplace(li)
      cy.wait(3000)

      market.getNoData().then(element => {
        const actualText = element.text()
        expect(actualText.includes('No data to display')).to.be.true
      })
    })
  })

  it.skip('checks tags_2', () => {
    // cy.visit('/admin/domain/integrations/marketplace')
    cy.log('there are ${tags} .')
    
  })


  it.skip('checks tags', () => {
    cy.get('.ng-input').type('cal')
    cy.get('.ng-option-label').each(($el, index, $list) => {
      cy.log("Found tag: \'" + $el.text() + "\'" + " with index: " + index)
      if ($el.text() === 'Calendar') {
        cy.wrap($el).click()
        cy.get('.main-body').click()
        cy.wait(1000)
        // market.getAllCards().each(($element, index) => {
        //   cy.log("Found: \'" + $element.text() + "\'" + " with index: " + index)
        //   const ele = cy.wrap($element.innerText)
        //   ele.contains('Calendar', { matchCase: false })
        // })
      }
    })

    // const tagsList = ['Calendar', 'Channels', 'Emails', 'Gmail', 'Google',
    //   'Google Calendar', 'Microsoft Exchange', 'Microsoft Outlook',
    //   'Microsoft Teams', 'Office 365', 'Recrutment', 'Teams']

    // tagsList.forEach((li) => {
    //   cy.log("Searching for tag: " + "\'" + li + "\'");
    //   cy.get('.ng-input').type(li)
    //   cy.get('.ng-option-label').each(($el, index, $list) => {
    //     cy.log("Found tag: \'" + $el.text() + "\'" + " with index: " + index)
    //     if ($el.text() === li) {
    //       cy.wrap($el).click()
    //       cy.wait(3000)
    //       market.getAllCards().each(($element, index) => {
    //         cy.log("Found: \'" + $element.text() + "\'" + " with index: " + index)
    //         const ele = cy.wrap($element.innerText)
    //         ele.contains(li, { matchCase: false })
    //         // cy.get('.ng-input').contains('Calendar')
    //         // market.tagMarketplace().should('have.length', 7)
    //       })
    //     }
    //     })

    // })
  })
})