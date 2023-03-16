/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

import HomePage from "../../support/pages/home-page"
import CockpitPage from "../../support/pages/cockpit-page"
import CockpitGroupsPage from "../../support/pages/cockpit-groups-page"
import PopupHelpers from "../../support/pages/helpers-popup"

const home = new HomePage()
const cockpit = new CockpitPage()
const employeeGroups = new CockpitGroupsPage()
const popupHelp = new PopupHelpers()

describe('Employee Groups page UI', () => {

    beforeEach(() => {
        cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
        home.openCockpit()
        cockpit.clickSideBarMenuSubItem('Employee Groups')
    })

    it('creates Custom group with one Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectRadioBnt('Custom')
        employeeGroups.typeDescription(faker.lorem.sentence())
        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectFirstEmployee()
        employeeGroups.clickSaveBtn()
    })

    it('creates private Custom group with one Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectRadioBnt('Custom')
        employeeGroups.switchPrivate()
        employeeGroups.typeDescription(faker.lorem.sentence())
        
        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectFirstEmployee()
        employeeGroups.clickSaveBtn()
    })

    it.skip('NOT FINISHED: checks hover text for Private switcher', () => {
        employeeGroups.addGroup()
        employeeGroups.checkPrivateIconHover('Private groups will not be visible for their members in the My Groups tab.')
    })

    it('checks popup title "Add New Group"', () => {
        employeeGroups.addGroup()
        popupHelp.checkPopupTitle('Add New Group')
    })

    it('checks field name "Name"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Name', 0)
    })

    it('checks field name "Type"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Type', 1)
    })

    it('checks field name "Private"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Private', 2)
    })

    it('checks field name "Description"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Description', 3)
    })

    
    
})