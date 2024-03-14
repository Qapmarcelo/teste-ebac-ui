// Comando para realizar o login
Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)     
    cy.get('.woocommerce-form > .button').click()
})

// Comando para realizar o pré-cadastro
Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})

// Comando para editar os detalhes da conta
Cypress.Commands.add('DetalhesConta', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click() 
})

