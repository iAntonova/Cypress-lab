class MarketplacePage {

    timeout = Cypress.config().defaultCommandTimeout

    visit() {
        cy.visit('/admin/domain/integrations/marketplace')
    }

    // getIntegrationCard(cardTitle) {
    //     cy.get('.content-wrapper').each(($el, index, $list) => {
    //         // $el is a wrapped jQuery element
    //         if ($el.get('.ngx-ellipsis-inner').contains(cardTitle)) {
    //             // wrap this element so we can
    //             // use cypress commands on it
    //             return cy.wrap($el)
    //             //} else {
    //             // do something else
    //         }
    //     })
    // }

    getAllCards() {
        //cy.get('.content-wrapper', { timeout: this.timeout }).should('be.visible').click()
        cy.log('find all elements' + '.title>.ngx-ellipsis-inner')
        const element = cy.get('.title>.ngx-ellipsis-inner', { timeout: this.timeout })
        cy.log('text here ..' + element.innerText)
        cy.log(element.its('length'))
        return cy.get('.title>.ngx-ellipsis-inner', { timeout: this.timeout }).should('be.visible')
    }

    searchMarketplace(keyword){
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').clear()
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').click()
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').type(keyword + '{enter}')
        
    }

    // openSideBarMenuSubItem(menuItem){
    //     cy.log('Clicking on ' + menuItem)
    //     if (menuItem == 'Marketplace'){
    //         cy.get('#cdk-accordion-child-8 > .mat-expansion-panel-body > .sidebar-menu__children > .mat-accordion > :nth-child(1) > .sidebar-menu__sub-link', { timeout: this.timeout }).should('be.visible').click()
    //     }
    //cy.log('.sidebar-menu__link-label:contains('+menuItem+')')
    // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).should('be.visible')
    // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).click()
    //cy.contains(menuItem, { timeout: this.timeout }).should('be.visible').click()
}


export default MarketplacePage;
