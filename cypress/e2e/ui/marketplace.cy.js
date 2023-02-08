import HomePage from '../../support/pages/home-page.js'
import CockpitPage from '../../support/pages/cockpit-page.js'
import MarketplacePage from '../../support/pages/marketplace-page.js'

const home = new HomePage()
const cockpit = new CockpitPage()
const market = new MarketplacePage()

describe('Marketplase page UI', () => {

  beforeEach(() => {
    cy.login('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
    home.openCockpit()
    cockpit.clickSideBarMenuItem('Integrations')
    cockpit.clickSideBarMenuSubItem('Marketplace')
  })

  it('checks all available features', () => {
    market.getAllCards().should('have.length', 5)

    // // features id:1 "Microsoft Exchange / Office 365"
    // cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    // cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    // // features id:2 "Microsoft Office 365 Calendar"
    // cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    // cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')

    // // features id:3 "Gmail"
    // cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    // cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')

    // // features id:4 "Google Calendar"
    // cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    // cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')

    // // features id:5 "Microsoft Teams"
    // cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    // cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')
  })


  it.only('searchs w/ VALID value', () => {
    // SEARCH: "Microsoft" (valid)

    const object = { 'microsoft': 'microsoft', '365': '365', 'te1ams': 'teams' };

    for (const [key, value] of Object.entries(object)) {
      cy.log("Searching for " + key, "Expected: " + value);
      market.searchMarketplace(key)
      cy.wait(2000)
      
      market.getAllCards().each(($element) => {
        cy.log('!!! Debuging here .----->.' + cy.wrap($element.innerText))
        cy.log('!!! Debuging2 here .----->.' + $element.its('innerText'))
        cy.wrap($element.innerText).contains(value, { matchCase: false })
        //market.getAllCards().should('have.length', 3)
      })
    }




    // cy.get('.search-wrapper').type('microsoft{enter}')
    // features id:1 "Microsoft Exchange / Office 365"
    //   cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    //   // features id:2 "Microsoft Office 365 Calendar"
    //   cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    //       // features id:5 "Microsoft Teams"
    //   cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    //   cy.focused().clear()
    //   // cy.get('.search-wrapper').clear()

    //   // features id:1 "Microsoft Exchange / Office 365"
    //   cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    //   cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    //   // features id:2 "Microsoft Office 365 Calendar"
    //   cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    //   cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')

    //   // features id:3 "Gmail"
    //   cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    //   cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')

    //   // features id:4 "Google Calendar"
    //   cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    //   cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')

    //   // features id:5 "Microsoft Teams"
    //   cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    //   cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')
    // })

    // it('searchs w/ INVALID value', () => {
    //   // SEARCH: "taem" (invalid)

    //   cy.get('.search-wrapper').type('taem{enter}')
    //   cy.get('.no-data').contains('No data to display')
    //   cy.focused().clear()
    //   cy.get('.search-wrapper').type('3652{enter}')
    //   cy.get('.no-data').contains('No data to display')
    //   cy.focused().clear()
    //   // cy.get('.search-wrapper').clear()

    //   // features id:1 "Microsoft Exchange / Office 365"
    //   cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    //   cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    //   // features id:2 "Microsoft Office 365 Calendar"
    //   cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    //   cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')

    //   // features id:3 "Gmail"
    //   cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    //   cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')

    //   // features id:4 "Google Calendar"
    //   cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    //   cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')

    //   // features id:5 "Microsoft Teams"
    //   cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    //   cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')

  })

  it('opens feature\'s Content page by clickng on card', () => {
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper').click()
    // General Information:
    cy.get(':nth-child(2) > .form-card > .form-card-header > .row > .col-sm-12 > .title', { timeout: 15000 })
      .contains('General Information')
    //cy.get('.name-title', {timeout: 15000}).should('be.visible')
    cy.get('.name-title').should('have.text', 'Microsoft Exchange / Office 365')
    cy.get(':nth-child(2) > .col-sm-12')
      .contains('Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')
    //cy.get('.m-t-20 > .col-sm-8').should("have.length", 4)
    //cy.get(':nth-child(4) > [data-layer="Padding"]').should("have.length", 4)
    // Tags:
    cy.get(':nth-child(1) > .tag').contains('Emails')
    cy.get(':nth-child(2) > .tag').contains('Microsoft Exchange')
    cy.get(':nth-child(3) > .tag').contains('Office 365')
    cy.get(':nth-child(4) > .tag').contains('Recruitment')
    // Website:
    cy.get(':nth-child(4) > .col-sm-8 > .link')
      .should('have.attr', 'href')
      .and('equal', 'https://www.microsoft.com/en-us/microsoft-365/exchange/email')
    // Integration Instructions:
    cy.get(':nth-child(5) > .col-sm-8 > .link')
      .should('have.attr', 'href')
      .and('equal', 'https://www.raiser.global')
    // Description:
    cy.get(':nth-child(3) > .form-card > .form-card-header > .row > .col-sm-12 > .title')
      .contains('Description')
    cy.get(':nth-child(3) > .form-card > .form-card-content > :nth-child(1)')
      .contains('Integrate seamlessly with Microsoft Exchange/ Microsoft Office 365 server, to sync with your company email account and communicate with the candidates directly from Raiser.')
    cy.get('.form-card-content > :nth-child(2)')
      .contains('Functionalities')
    cy.get('.form-card-content > :nth-child(3) > ul > :nth-child(1)')
      .contains('Syncing of candidate mails to your inbox')
    cy.get('.form-card-content > :nth-child(3) > ul > :nth-child(2)')
      .contains('2-way responding via Raiser or Outlook')
    cy.get('.form-card-content > :nth-child(3) > ul > :nth-child(3)')
      .contains('Attaching files to emails')
    cy.get('.form-card-content > :nth-child(3) > ul > :nth-child(4)')
      .contains('Bulk emailing to the candidates')
    cy.get('.form-card-content > :nth-child(3) > ul > :nth-child(5)')
      .contains('Email scheduling features')
    cy.get('.form-card-content > :nth-child(4)')
      .contains('How Does the Integration with Raiser Work?')
    cy.get('.form-card-content > :nth-child(5)')
      .contains('Integration with Microsoft Exchange/Microsoft Office 365 provides 2-way mailbox syncing meaning that the email to the candidate sent from Raiser will appear in your Outlook mailbox and vice versa.')
    cy.get('.form-card-content > :nth-child(6)')
      .contains('After the integration is activated for the company, each user will need to enable emailing add-on to connect to his personal inbox.')
    // cy.get('.form-card-content > :nth-child(7)', {timeout: 15000})
    //.contains('More information about integration with Microsoft Exchange/ Microsoft Office 365  can be found via the Integration Instructions.')
  })

  it('opens feature\'s Content page by clickng on View', () => {
    cy.get(':nth-child(1) > .card-wrapper > .footer-wrapper > .new-link')
  })

  // it.only('searchs w/ VALID value', () => {
  //   // SEARCH: "Microsoft" (valid)

  //   const object = { 'microsoft': 'microsoft', '365': '365', 'teams': 'teams' };

  //   for (const [key, value] of Object.entries(object)) {
  //     cy.log(key, value);
  //     market.searchMarketplace(key)

  //     market.getAllCards().each(($element) => {
  //       cy.log($element.innerText)
  //       cy.wrap($element.innerText).contains(value, { matchCase: false })
  //       //market.getAllCards().should('have.length', 3)
  //     })
  //   }



  })