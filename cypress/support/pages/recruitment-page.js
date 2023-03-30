class RecruitmentStagePage {

    visit() {
        cy.visit('/recruitment/applications/recruitment-stages/5107/Victoria-test-JO-%28Testing%29/3055/Cy-57GM-Press?redirectUrl=recruitment%252Fapplications%252Fcandidates%252Flist')
    }

    visitAssignment() {
        cy.visit('/recruitment/applications/recruitment-stages/1/Business-Analyst/1/Jack-Monganson?redirectUrl=recruitment%2Fapplications%2Fcandidates%2Flist')
    }


    /* Assignment */
    addAssignment() {
        cy.contains('Add Assignment').click()
    }

    saveAssignment() {
        cy.get('.col-sm-12 > .btn-default-blue').click()
    }

    pickDate(){
        cy.get('button.datepicker__open').click()
        var date = new Date()
        cy.log("Today's date: " + date.getDate())
        date.setDate(date.getDate() + 2)
        cy.log("I want a date: " + date.getDate() + 1)

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
    }

    typeStartTime() {
        cy.get('.select-cursor > .ng-select-container > .ng-value-container > .ng-input > input')
            .type('01')
        cy.contains('01:00').click()
    }

    checkAddedAssociateAndEdit(associateName) {
        cy.get('.employee-name').each(($el, index, $list) => {
            cy.log("Found for EDIT: \'" + $el.text().trim() + "\'" + " with index: " + index)

            if ($el.text().trim() == associateName) {
                cy.get('.icon-edit').eq(index).click()
            } else {
                // If no elements with matching text were found
                cy.log("No match found in: " + index + "for: " + associateName)
            }
        })
    }

    checkAddedAssociateAndDelete(associateName) {
        cy.get('.employee-name').each(($el, index, $list) => {
            cy.log("Found for DELETE: \'" + $el.text().trim() + "\'" + " with index: " + index)

            if ($el.text().trim() == associateName) {
                cy.get('.icon-delete').eq(index).click()
            } else {
                // If no elements with matching text were found
                cy.log("No match found in: " + index + "for: " + associateName)
            }
        })
    }

    deleteByBinIcon() {
        cy.get('.icon-delete').click()
    }

    checkText_CancelAssignment(textInside) {
        cy.get('confirmation.ng-star-inserted > .modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .col-sm-12')
            .should('contain', textInside)
    }

    confirmDeletingAssignment() {
        cy.get('.col-sm-12 > .btn-default-danger').click()
    }

    /* Meeting*/
    addMeeting() {
        cy.contains('Add Meeting').click()
    }

    actionsEditMeeting() {
        cy.get('#actions-tooltip-container').click()
    }

    clearFocus() {
        cy.contains('Associates:').click()
        //  .click('left')
    }

    selectAssociatesDdl(associateName) {
        cy.wait(3000)
        cy.get('div.ng-value-container')
            .eq(0)
            .should('contain', 'Select').as('associatesDdl')

        associateName.forEach((associate) => {
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


    /* GENERAL */


}

export default RecruitmentStagePage;
