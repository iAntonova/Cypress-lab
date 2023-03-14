class RecruitmentStagePage {
    
    visit(){
        cy.visit('/recruitment/applications/recruitment-stages/5107/Victoria-test-JO-%28Testing%29/3055/Cy-57GM-Press?redirectUrl=recruitment%252Fapplications%252Fcandidates%252Flist')
    }

    addMeeting(){
        cy.contains('Add Meeting').click()
    }

    AssociatesDdl(){
        
    }
}

export default RecruitmentStagePage;
