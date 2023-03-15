// /// <reference types="Cypress" />

// import HomePage from '../../support/pages/home-page.js'
// import CockpitPage from '../../support/pages/cockpit-page.js'
// import MarketplacePage from '../../support/pages/marketplace-page.js'

// const home = new HomePage()
// const cockpit = new CockpitPage()
// const market = new MarketplacePage()

// describe('Marketplase page UI', () => {
//     // beforeEach(() => {
//     //     // cy.loginByApi('victoria.antonova@volo.global', 'Volo12345')
//     //     // home.openCockpit()
//     //     // cockpit.clickSideBarMenuItem('Integrations')
//     //     // cockpit.clickSideBarMenuSubItem('Marketplace')

//     // })

//     it.only('Example sending GET request', () => {
//         // cy.api({
//         //     method: 'POST',
//         //     url: 'https://auth.raiser.work/connect/token',
//         //     body: {
//         //         username: 'victoria.antonova@volo.global',
//         //         password: 'Volo12345',
//         //         subdomain: 'test',
//         //         client_id: 'angularapi1',
//         //         grant_type: 'password',
//         //         client_secret: 'secret',
//         //         scope: 'api3 openid offline_access'
//         //     }
//         // }).then((response) => {
//             const accessToken = '"eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1MzRGMDZBNjE0MEY3RTRFQUE5QzE5RjFCMTRDQzBDMTE5OUFDQjEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJGVFR3YW1GQTktVHFxY0dmR3hUTURCR1pyTEUifQ.eyJuYmYiOjE2Nzg0NTc4MjksImV4cCI6MTY3ODQ4NjYyOSwiaXNzIjoiaHR0cDovL2F1dGgucmFpc2VyLndvcmsiLCJhdWQiOlsiaHR0cDovL2F1dGgucmFpc2VyLndvcmsvcmVzb3VyY2VzIiwiYXBpMyJdLCJjbGllbnRfaWQiOiJhbmd1bGFyYXBpMSIsInN1YiI6IjNkNTVlY2NiLTRlZGYtNDI2My1iZDhhLTYxNjM0YjVjYmE0OCIsImF1dGhfdGltZSI6MTY3ODQ1NzgyOSwiaWRwIjoibG9jYWwiLCJpZCI6IjNkNTVlY2NiLTRlZGYtNDI2My1iZDhhLTYxNjM0YjVjYmE0OCIsInRlbmFudF9pZCI6Ijc2MjMiLCJ0ZW5hbnRfbmFtZSI6IlNpcGVzSW5jNCIsInNjb3BlIjpbIm9wZW5pZCIsImFwaTMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicGFzc3dvcmQiXX0.WGbOyJ3yQOeRHX9LLrIHjm38AAzbQULf8WiYdXeScywQMYd_m13Wouzvo3kmfBNS9oEIMs0nZMxpViwZEqJqVwkxrEv8DqemRt31Sm-l7r5BLm4siwIri5nkIjTiMii8i2QHbNNzsUIpY4ckzxOUwa002-9kwwF7F13g_JwTl4RoFHqZHHd77pUXqE405WEl1oCBWlk2xS28umR3ea_qwhCSpBM2H24j3Znn3t3c5qzZluFWMny6ghqZrbJqLlSveGqBLglSjCqe4wAO7IKwrdyyi-eojzkceXt5s7YAQ-XvIV97swU5l1J-uZ5F6nBioyfcCZ1xH76y-k-PljwvBg"            '
//             cy.api({
//                 method: 'GET',
//                 url: 'https://api.raiser.work/api/Employees/self',
//                 headers: {
//                     authorization: 'Bearer ' + accessToken
//                 }
//             })
//         })
//     })
// // })