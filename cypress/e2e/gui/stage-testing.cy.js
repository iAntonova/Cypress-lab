/// <reference types="Cypress" />

import RecruitmentStagePage from "../../support/pages/recruitment-page"
import PopupHelpers from "../../support/pages/helpers-popup"
import LoginApiPage from "../../support/pages/log-in-page"

const recrStage = new RecruitmentStagePage()
const popupHelp = new PopupHelpers()
const loginapi = new LoginApiPage()

describe.skip('Testing Stage page UI - Integration', () => {

    beforeEach(() => {
        //cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
        recrStage.visit()
    })



    it('Invalid>Add meeting>Associates ERROR Message: \'1 emplyee not yet accepted an invitation\'', () => {
        recrStage.addMeeting()
        recrStage.selectAssociatesDdl(['Vera Reinhardt'])
        recrStage.clearFocus()
        recrStage.checkAssociatesError('The user Vera Reinhardt has not yet accepted an invitation to Raiser')
        recrStage.clickNextBtn()
        popupHelp.checkPopupTitle('Select Associate')
    })

    it('Invalid>Add meeting>Associates ERROR Message: \'more emplyees not yet accepted an invitation\'', () => {
        recrStage.addMeeting()
        recrStage.selectAssociatesDdl(['Vera Reinhardt', 'Carmen 47 Roca'])
        recrStage.clearFocus()
        recrStage.checkAssociatesError('These users have not yet accepted an invitation to Raiser: Vera Reinhardt, Carmen 47 Roca')
        recrStage.clickNextBtn()
        popupHelp.checkPopupTitle('Select Associate')
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

describe('Testing Stage page UI - without Integration', () => {

    before(() => {
        cy.fixture('associates').as('associateData')
    });

    beforeEach(() => {
        //cy.loginUI('Godfrey.Nyathi@yopmail.com', 'Volo12345', 'Godfrey Nyathi')
        loginapi.login('Godfrey.Nyathi@yopmail.com', 'Godfrey Nyathi')
        recrStage.visitAssignment()
    })

    it('Valid>Add Associate. Tenant never connected', () => {

        recrStage.addAssignment()
        cy.get('@associateData').then((associate) => {
            recrStage.selectAssociatesDdl(associate.associateName)
        })
        recrStage.clearFocus()

        recrStage.pickDate()
        recrStage.typeStartTime()

        recrStage.saveAssignment()

        cy.get('@associateData').then((associate) => {
            recrStage.checkAddedAssociateAndDelete(associate.associateName)
        })
        popupHelp.checkPopupTitle('Cancel Assignment')
        recrStage.checkText_CancelAssignment('Are you sure you want to cancel this assignment?')
        recrStage.confirmDeletingAssignment()
    })

it.skip('deletes associate from assignment', () => {
    // this.data.associateName.forEach(function (element) {
    //     recrStage.checkAddedAssociate(element).then(() => {
    //         debugger
    //      })
    // })

    


});

});