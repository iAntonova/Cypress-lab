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

    selectRadioBnt(radioName) {
        //cy.get('.form-radio [type="radio"]')
        cy.get('.m-r-45 > .marginB0')
            .should('contain', radioName).as('radioBnt')
        cy.get('@radioBnt').click()
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

    clickSaveBtn() {
        cy.contains('Save').as('saveBtn')
        cy.get('@saveBtn').click()
    }
}

export default CockpitGroupsPage;
