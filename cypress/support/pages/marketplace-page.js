/// <reference types="Cypress" />

class MarketplacePage {

    timeout = Cypress.config().defaultCommandTimeout

    visit() {
        cy.visit('/admin/domain/integrations/marketplace')
    }

    searchMarketplace(keyword) {
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').clear()
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').click()
        cy.get('input[placeholder="Search"]', { timeout: this.timeout }).should('be.visible').type(keyword + '{enter}')
    }

    getAllCards() {
        return cy.get('.title>.ngx-ellipsis-inner', { timeout: this.timeout }).should('be.visible')
    }

    getNoData() {
        return cy.get('.no-data.text-center', { timeout: this.timeout }).should('be.visible')
    }


}


export default MarketplacePage;
