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
    beforeEach(() => {
        //cy.loginUI('Godfrey.Nyathi@yopmail.com', 'Volo12345', 'Godfrey Nyathi')
        loginapi.login('Godfrey.Nyathi@yopmail.com', 'Godfrey Nyathi')
        recrStage.visitAssignment()
    })

    it('Valid>Add Associate. Tenant never connected', () => {

        recrStage.addAssignment()
        recrStage.selectAssociatesDdl(['Abigail Brown'])
        recrStage.clearFocus()

        cy.get('button.datepicker__open').click()
        var date = new Date()
        cy.log(date.getDate())
        date.setDate(date.getDate() + 2)
        cy.log(date.getDate() + 1)
        //cy.pause()

        var futureYear = date.getFullYear()
        //var futureMonth = date.toLocaleString("default", { month: "long" })
        var futureMonth = date.getMonth()
        var futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndYear() {
            cy.get('#cdk-overlay-0').find('.label-wrapper').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('button.custom-next-month').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('#cdk-overlay-0').find('.label-wrapper').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('button.custom-next-month').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('.mat-calendar-body-cell').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()

        recrStage.typeStartTime()
        recrStage.saveAssignment()

        cy.wait(2000)
        recrStage.checkAddedAssociate(['Abigail Brown'])
        // cy.get('.icon-delete').each(($el, index, $list)=>{
        //     cy.log("index: " + index + " : " + $el.text())
        // })
        // cy.wait(30000)
        // cy.get('.collaborator-item').each(($el, index, $list) => {
        //     cy.log("index: " + index + " : " + $el.text())
        // })

        // recrStage.deleteByBinIcon()
        // popupHelp.checkPopupTitle('Cancel Assignment')
        // recrStage.checkText_CancelAssignment('Are you sure you want to cancel this assignment?')
        // recrStage.confirmDeletingAssignment()
    })
});