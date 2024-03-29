/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

import HomePage from "../../support/pages/home-page"
import CockpitPage from "../../support/pages/cockpit-page"
import CockpitGroupsPage from "../../support/pages/cockpit-groups-page"
import PopupHelpers from "../../support/pages/helpers-popup"
import LoginApiPage from "../../support/pages/log-in-page"


const home = new HomePage()
const cockpit = new CockpitPage()
const employeeGroups = new CockpitGroupsPage()
const popupHelp = new PopupHelpers()
const loginapi = new LoginApiPage()


describe('Employee Groups page UI', () => {

    beforeEach(() => {
        //cy.loginUI('victoria.antonova@volo.global', 'Volo12345', 'Victoria Antonova')
        loginapi.login('Godfrey.Nyathi@yopmail.com', 'Godfrey Nyathi')
        employeeGroups.visit()
        /* open from homepage:
        home.visit()
        home.openCockpit()
        cockpit.clickSideBarMenuSubItem('Employee Groups') */
    })

    /* Dynamic */


    it.only('creates Dynamic group with one Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectDynamicRadioBnt()
        employeeGroups.typeDescription(faker.lorem.sentence())
        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Rules')
        employeeGroups.selectByGoupRule('Gender')

        // employeeGroups.selectAllEmployees()
        // employeeGroups.clickSaveBtn()
    })

    /* Dynamic: Select Rules pop-up */



    /* Custom */

    it('creates Custom group with 10 Employees', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectCustomRadioBnt()
        employeeGroups.typeDescription(faker.lorem.sentence())
        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectAllEmployees()
        employeeGroups.clickSaveBtn()
    })

    it('creates private Custom group with 10 Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectCustomRadioBnt()
        employeeGroups.switchPrivate()
        employeeGroups.typeDescription(faker.lorem.sentence())

        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectAllEmployees()
        employeeGroups.clickSaveBtn()
    })

    it('creates Custom group with one Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectCustomRadioBnt()
        employeeGroups.typeDescription(faker.lorem.sentence())
        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectFirstEmployee()
        employeeGroups.clickSaveBtn()
    })

    it('creates private Custom group with one Employee', () => {
        employeeGroups.addGroup()
        employeeGroups.typeName(faker.company.catchPhrase())
        employeeGroups.selectCustomRadioBnt()
        employeeGroups.switchPrivate()
        employeeGroups.typeDescription(faker.lorem.sentence())

        employeeGroups.clickNextBtn()

        popupHelp.checkPopupTitle('Select Employees')
        employeeGroups.selectFirstEmployee()
        employeeGroups.clickSaveBtn()
    })

    /*  General: Add New Group pop-up */

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
        employeeGroups.checkFieldName('Name:', 0)
    })

    it('checks field name "Type"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Type:', 1)
    })

    it('checks field name "Private"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Private:', 2)
    })

    it('checks field name "Description"', () => {
        employeeGroups.addGroup()
        employeeGroups.checkFieldName('Description:', 3)
    })



})