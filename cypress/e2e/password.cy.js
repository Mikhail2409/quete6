describe('template spec', () => {
  //`it` est une fonction qui décrit un test spécifique à effectuer  
  it('passes', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr')
      cy.get('[data-qa="accept-cta"]').click()
      cy.get('[data-test="icon-avatar"]').click()
      //entre l'adresse e-mail d'un utilisateur fictif
      cy.get('#email').type('89b76a3a-6964-487f-a061-cf52975b2fe2@mailslurp.world') 
      cy.get('#submit-login').click()
      cy.get('.mb-7').click()
      cy.get('[data-test="password-reset-submit-button"]').click()
      //exécute une commande de plugin mailslurp pour intercepter et traiter les e-mails envoyés lors de la réinitialisation de mot de passe
      cy.mailslurp()
      //utilise `waitForLatestEmail` pour attendre la réception de l'e-mail de réinitialisation  
      //de mot de passe contenant le jeton unique requis pour la réinitialisation
    .then(mailslurp => mailslurp.waitForLatestEmail('924364b9-9227-4777-981b-4e60b012f1e5', 100000, true))//Identifiant du courrier entrant 
    //exécute le traitement de l'e-mail une fois qu'il a été reçu
    .then(email => {
    //écrit le corps de l'e-mail dans la fenêtre de navigateur pour le débogage
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
