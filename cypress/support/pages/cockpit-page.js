class CockpitPage {

    timeout = Cypress.config().defaultCommandTimeout

    visit(){
        cy.visit('/admin/domain/company-structure/company-profile')
    }

    clickSideBarMenuItem(menuItem){
        cy.log('Clicking on ' + menuItem)
        if (menuItem == 'Integrations'){
            cy.get('#mat-expansion-panel-header-8 > .mat-content > .sidebar-menu__link', { timeout: this.timeout }).should('be.visible').click()
            //cy.get('.menu-', { timeout: this.timeout }).should('be.visible').click()
        }
        // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).should('be.visible')
        // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).click()
        // cy.contains(menuItem, { timeout: this.timeout }).should('be.visible').click()
    }

    clickSideBarMenuSubItem(menuItem){
        cy.log('Clicking on ' + menuItem)
        if (menuItem == 'Marketplace'){
            cy.get('#cdk-accordion-child-8 > .mat-expansion-panel-body > .sidebar-menu__children > .mat-accordion > :nth-child(1) > .sidebar-menu__sub-link', { timeout: this.timeout }).should('be.visible').click()
        }
        //cy.log('.sidebar-menu__link-label:contains('+menuItem+')')
        // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).should('be.visible')
        // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).click()
        //cy.contains(menuItem, { timeout: this.timeout }).should('be.visible').click()
    }
}

export default CockpitPage;
