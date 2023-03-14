/// <reference types="Cypress" />

import RecruitmentStagePage from "../../support/pages/recruitment-page"

const recrStage = new RecruitmentStagePage()

describe('Testing Stage page UI', () => {

    beforeEach(() => {
        cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
        recrStage.visit()
    })

    it('adds meeting with integration', () => {
        recrStage.addMeeting()
        cy.wait(3000)
        cy.get('div.ng-value-container')
        .eq(0)
        .should('contain', 'Select')
        .type('Vera Reinhardt')
        //cy.get('h6.full-name').click({ force: true })
//'The user Vera Reinhardt has not yet accepted an invitation to Raiser'

        // cy.get('h6.full-name').each(($el) => {
        //     const associateName = $el.find('h6.full-name').text()
        //     if (associateName.includes('Vera Reinhardt')) {
        //         cy.wrap($el).click()
        //     }
        // })
        

    })
})