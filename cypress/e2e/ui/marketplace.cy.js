describe('Marketplase page UI', () => {

  beforeEach(() => {
    cy.login('victoria.antonova@volo.global', 'Volo12345')
    // cy.loginViaUi({ email: 'victoria.antonova@volo.global', password: 'Volo12345', name: 'Victoria Antonova' })
    cy.get('.icon-settings').should('be.visible')
    cy.get('.icon-settings').click()
    cy.get('#mat-expansion-panel-header-8 > .mat-content > .sidebar-menu__link').click()
    cy.get('#cdk-accordion-child-8 > .mat-expansion-panel-body > .sidebar-menu__children > .mat-accordion > :nth-child(1) > .sidebar-menu__sub-link').click()
    cy.get(':nth-child(7) > .ui-menuitem-link > .ui-menuitem-text').should('be.visible')
    cy.url().should('include', '/admin/domain/integrations/marketplace')
  })

  it('checks all available features', () => {
    // features id:1 "Microsoft Exchange / Office 365"
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    // features id:2 "Microsoft Office 365 Calendar"
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')
    
    // features id:3 "Gmail"
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')
    
    // features id:4 "Google Calendar"
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')
    
    // features id:5 "Microsoft Teams"
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')
  })


  it('searchs w/ VALID value', () => {
    // SEARCH: "Microsoft" (valid)

    cy.get('.search-wrapper').type('microsoft{enter}')
    // features id:1 "Microsoft Exchange / Office 365"
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    // features id:2 "Microsoft Office 365 Calendar"
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
        // features id:5 "Microsoft Teams"
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    cy.focused().clear()
    // cy.get('.search-wrapper').clear()

    // features id:1 "Microsoft Exchange / Office 365"
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    // features id:2 "Microsoft Office 365 Calendar"
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')
    
    // features id:3 "Gmail"
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')
    
    // features id:4 "Google Calendar"
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')
    
    // features id:5 "Microsoft Teams"
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')
  })

  it('searchs w/ INVALID value', () => {
    // SEARCH: "taem" (invalid)

    cy.get('.search-wrapper').type('taem{enter}')
    cy.get('.no-data').contains('No data to display')
    cy.focused().clear()
    cy.get('.search-wrapper').type('3652{enter}')
    cy.get('.no-data').contains('No data to display')
    cy.focused().clear()
    // cy.get('.search-wrapper').clear()

    // features id:1 "Microsoft Exchange / Office 365"
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Exchange / Office 365')
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')

    // features id:2 "Microsoft Office 365 Calendar"
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Office 365 Calendar')
    cy.get(':nth-child(2) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Microsoft Office 365 Calendar integration')
    
    // features id:3 "Gmail"
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Gmail')
    cy.get(':nth-child(3) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Enhance your recruitment mailing with Raiser and Gmail Integration')
    
    // features id:4 "Google Calendar"
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Google Calendar')
    cy.get(':nth-child(4) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'The details of your calendar and interview schedule are all in one place with Raiser and Google Calendar integration.')
    
    // features id:5 "Microsoft Teams"
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-title > .title > .ngx-ellipsis-inner').should('have.text', 'Microsoft Teams')
    cy.get(':nth-child(5) > .card-wrapper > .content-wrapper > .card-description > span > .ngx-ellipsis-inner').should('have.text', 'Creation of specific teams and channels in Microsoft Teams based on the relevant information from Raiser.')
    
  })

  it.only('opens feature\'s Content page by clickng on card', () => {
    cy.get(':nth-child(1) > .card-wrapper > .content-wrapper').click()
    cy.get('.name-title', {timeout: 15000}).should('be.visible')
    cy.get('.name-title').should('have.text', 'Microsoft Exchange / Office 365')
    cy.get(':nth-child(2) > .col-sm-12', {timeout: 15000}).contains('Enhance your recruitment emailing with Raiser and Microsoft Exchange or Office 365 Integration')
    //cy.get('.m-t-20 > .col-sm-8').should("have.length", 4)
    //cy.get(':nth-child(4) > [data-layer="Padding"]').should("have.length", 4)
    cy.get(':nth-child(1) > .tag').contains('Emails')
    
  })

  it('opens feature\'s Content page by clickng on View', () => {
    cy.get(':nth-child(1) > .card-wrapper > .footer-wrapper > .new-link')
  })
})