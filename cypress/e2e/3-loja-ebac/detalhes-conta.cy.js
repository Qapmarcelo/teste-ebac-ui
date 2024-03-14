///<reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.login('marceloteste@teste.com.br', 'teste123')
    });

    it('Deve completar detalhes da compra com sucesso', () => {
        cy.DetalhesConta('Marcelo','teste', 'Marcelo.qa')
        
    });
});