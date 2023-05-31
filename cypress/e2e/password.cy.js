
describe('template spec', () => {
    it('passes', () => {

      cy.visit('https://preprod.backmarket.fr/fr-fr')
      cy.get('[data-qa="accept-cta"]').click()
      cy.get('[data-test="icon-avatar"]').click()
      cy.get('#email').type('89b76a3a-6964-487f-a061-cf52975b2fe2@mailslurp.world')
      cy.get('#submit-login').click()
      cy.get('.mb-7').click()
      cy.get('[data-test="password-reset-submit-button"]').click()
      cy.mailslurp()
    .then(mailslurp => mailslurp.waitForLatestEmail('924364b9-9227-4777-981b-4e60b012f1e5', 100000, true))
    .then(email => {
    cy.document().invoke('write', email.body)
    cy.get('.t_pt20px > a').click()
    cy.get('#newPassword').type('1234567lM')
    cy.get('#newPasswordConfirmation').type('1234567lM')
    cy.get('._1xMx-RYw').click()
    cy.get('#email').type('89b76a3a-6964-487f-a061-cf52975b2fe2@mailslurp.world')
    cy.get('#submit-login').click()
    cy.get('#password').type('1234567lM')
    cy.get('#submit-login').click()
    cy.url().should('include', 'https://preprod.backmarket.fr/fr-fr');
  })
})
})
