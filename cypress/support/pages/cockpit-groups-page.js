class HomePage {
    
    visit(){
        cy.visit('/dashboard')
    }

    openCockpit(){
        // cy.get('.icon-settings').should('be.visible')
        cy.get('.icon-settings').should('exist')
        cy.get('.icon-settings').click()
    }
}

export default HomePage;
