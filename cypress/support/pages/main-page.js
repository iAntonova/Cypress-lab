class MainPage {
    
    visit(){
        cy.visit('/dashboard')
    }

    openCockpit(){
        cy.get('.icon-settings').should('be.visible')
        cy.get('.icon-settings').click()
    }
}

export default MainPage;
