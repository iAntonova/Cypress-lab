class CockpitGroupsPage {

    visit() {
        cy.visit('/admin/domain/company-structure/employees-group')
    }

    addGroup() {
        cy.contains('Add').click()
    }

    checkFieldName(textLabel, index) {
        cy.get('label.new-label').should(($label) => {
            expect($label.get(index).innerText).to.eq(textLabel)
        })
    }

    typeName(textName) {
        cy.get('[placeholder="Enter"]').type(textName)
    }

    selectCustomRadioBnt() {
        //cy.get('.form-radio [type="radio"]')
        cy.get('.m-r-45 > .marginB0').as('radioBnt_Custom')
        cy.get('@radioBnt_Custom').click()
    }

    selectDynamicRadioBnt() {
        //cy.get('.form-radio [type="radio"]')
        cy.get(':nth-child(2) > .marginB0').as('radioBnt_Dynamic')
        cy.get('@radioBnt_Dynamic').click()
    }


    switchPrivate() {
        cy.get('.switch')
            .should('have.attr', 'aria-checked', 'false').as('privateSwitcher')
        cy.get('@privateSwitcher').click()
    }

    // checkPrivateIconHover(textHovered){
    //     cy.get('.icon-information').click({ force: true })
    //     cy.get('ngb-tooltip-window').should('contain', textHovered)        
    // }

    checkPrivateIconHover(textHovered) {
        cy.get('.icon-information')
            .invoke('show')
            .click()
        cy.get('ngb-tooltip-window').should('contain', textHovered)
    }

    typeDescription(textDescription) {
        cy.get('textarea')
            .type(textDescription)
    }

    clickNextBtn() {
        cy.contains('Next').as('nextBtn')
        cy.get('@nextBtn').click()
    }


    /* Select Employees popup */

    selectFirstEmployee() {
        cy.wait(6000)
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > .w-prcent-15 > .datatable-body-cell-label > .border-checkbox-section > .border-checkbox-group > .border-checkbox-label').click()
    }

    selectAllEmployees() {
        cy.wait(6000)
        cy.get('label[for="checkbox-all-in-add"]').click()
    }

    clickSaveBtn() {
        cy.contains('Save').as('saveBtn')
        cy.get('@saveBtn').click()
    }

    /* Dynamic: Select Rules pop-up */

    /* Group Rules */
    selectByGoupRule(textGroupRuleList){
        // cy.get('#cdk-drop-list-0 > .cdk-drag > .table-row > .w-prcent-34 > .new-element > .ng-select-container > .ng-value-container > .ng-input > input')
        cy.get('ng-select[class="new-element ng-select ng-select-single ng-select-searchable ng-pristine ng-invalid ng-select-bottom validation-error ng-touched ng-select-opened"] div[class="ng-placeholder"]')
        .as('byGoupRule')
        cy.get('@byGoupRule').type(textGroupRuleList)

        textGroupRuleList.forEach((textGroupRule) => {
            cy.get('@byGoupRule')
            .type(textGroupRule)
            cy.get('ng-dropdown-panel')
            .should('have.length', 1)
                .click()
            cy.wait(2000)
        })
    }

    // selectAssociatesDdl(associateList) {
    //     cy.wait(3000)
    //     cy.get('div.ng-value-container')
    //         .eq(0)
    //         .should('contain', 'Select').as('associatesDdl')

    //     associateList.forEach((associate) => {
    //         cy.get('@associatesDdl')
    //             .type(associate)
    //         cy.get('div.ng-option')
    //             .should('have.length', 1)
    //             .click()
    //         cy.wait(2000)
    //     });
    // }


}

export default CockpitGroupsPage;
