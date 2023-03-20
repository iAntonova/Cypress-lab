describe('Project', () => {
      
    it('search by tag Teams', () => {
      
      cy.api_searchTag()
        .then(({ status, body }) => {
          expect(status).to.equal(200)
          expect(body.data[0].name).to.equal('Teams')
        })
    })
  })