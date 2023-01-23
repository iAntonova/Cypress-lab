describe('template spec', () => {
  it('opens login page', () => {
    // login
    cy.visit('/login')
    cy.get(':nth-child(3) > .new-element').type('victoria.antonova@volo.global')
    cy.get(':nth-child(4) > .new-element').type('Volo12345')
    cy.get('.btn-blue').click()
    cy.url().should('include', '/dashboard')
    // go to Marketplace
    cy.get('.icon-settings').click()
    cy.get('#mat-expansion-panel-header-8 > .mat-content > .sidebar-menu__link').click()
    cy.get('#cdk-accordion-child-8 > .mat-expansion-panel-body > .sidebar-menu__children > .mat-accordion > :nth-child(1) > .sidebar-menu__sub-link').click()
    cy.url().should('include', '/admin/domain/integrations/marketplace')

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
})