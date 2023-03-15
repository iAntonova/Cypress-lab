/// <reference types="Cypress" />

import RecruitmentStagePage from "../../support/pages/recruitment-page"

const recrStage = new RecruitmentStagePage()

describe('Testing Stage page UI', () => {

    beforeEach(() => {
        cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
        recrStage.visit()
    })

    it('Invalid>Add meeting>Associates ERROR Message: \'1 emplyee not yet accepted an invitation\'', () => {
        recrStage.addMeeting()
        recrStage.selectAssociatesDdl(['Vera Reinhardt'])
        recrStage.clearFocus()
        recrStage.checkAssociatesError('The user Vera Reinhardt has not yet accepted an invitation to Raiser')
        recrStage.clickNextBtn()
        recrStage.checkSelectAssociatePopupTitle()
    })

    it('Invalid>Add meeting>Associates ERROR Message: \'more emplyees not yet accepted an invitation\'', () => {
        recrStage.addMeeting()
        recrStage.selectAssociatesDdl(['Vera Reinhardt', 'Carmen 47 Roca'])
        recrStage.clearFocus()
        recrStage.checkAssociatesError('These users have not yet accepted an invitation to Raiser: Vera Reinhardt, Carmen 47 Roca')
        recrStage.clickNextBtn()
        recrStage.checkSelectAssociatePopupTitle()
    })

    it.skip('Invalid>Edit meeting>Associates ERROR Message: \'1 emplyee not yet accepted an invitation\'', () => {
        recrStage.addMeeting()
        recrStage.selectAssociatesDdl(['Vera Reinhardt'])
        recrStage.clearFocus()
        recrStage.checkAssociatesError('The user Vera Reinhardt has not yet accepted an invitation to Raiser')
        recrStage.clickNextBtn()
        recrStage.checkSelectAssociatePopupTitle()
    })
})