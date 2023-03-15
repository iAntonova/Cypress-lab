class RecruitmentStagePage {

    visit() {
        cy.visit('/recruitment/applications/recruitment-stages/5107/Victoria-test-JO-%28Testing%29/3055/Cy-57GM-Press?redirectUrl=recruitment%252Fapplications%252Fcandidates%252Flist')
    }

    addMeeting() {
        cy.contains('Add Meeting').click()
    }

    actionsEditMeeting(){
        cy.get('#actions-tooltip-container').click()
    }

    clearFocus() {
        cy.get('app-add-meeting')
            .click('left')
    }

    selectAssociatesDdl(associateList) {
        cy.wait(3000)
        cy.get('div.ng-value-container')
            .eq(0)
            .should('contain', 'Select').as('associatesDdl')

        associateList.forEach((associate) => {
            cy.get('@associatesDdl')
                .type(associate)
            cy.get('div.ng-option')
                .should('have.length', 1)
                .click()
            cy.wait(2000)
        });
    }

    checkAssociatesError(errorMessage) {
        cy.get('app-employee-autocomplete')
            .next('div.messages.text-danger')
            .should('contain', errorMessage)
    }

    clickNextBtn() {
        cy.get('app-add-meeting .btn-default-blue').as('nextBtn')
        cy.get('@nextBtn').click()
    }


}

export default RecruitmentStagePage;
