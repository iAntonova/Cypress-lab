class CockpitPage {

    timeout = Cypress.config().defaultCommandTimeout

    visit(){
        cy.visit('/admin/domain/company-structure/company-profile')
    }

    clickSideBarMenuItem(menuItem){
        cy.log('---CHECK---> Clicking on ' + menuItem)
        // cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).should('be.visible').click()
        cy.get('.sidebar-menu__link-label:contains('+menuItem+')', { timeout: this.timeout }).parent().click()
    }

    clickSideBarMenuSubItem(menuItem){
        cy.log('Clicking on ' + menuItem)
        cy.get('a.sidebar-menu__sub-link:contains('+menuItem+')', { timeout: this.timeout }).should('be.visible').click()
    }
}

export default CockpitPage;
