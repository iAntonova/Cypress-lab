class PopupHelpers {
    
    checkPopupTitle(popupName) {
        cy.get('.modal-title').as('popupTitle')
        cy.get('@popupTitle')
            .should('contain', popupName)
    }
}

export default PopupHelpers;
