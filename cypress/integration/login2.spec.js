/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    it('Deve fazer login com sucesso' , () => {
        cy.visit('https://oplab.app/logout')   
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('oplab@oplab.com.br')        
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('oplab')       
        cy.get('form > .MuiBox-root').click() 
        /*cy.visit('https://oplab.app/logout')*/
        
    })    

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.visit('https://oplab.app/logout')
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('oplb@oplab.com.br')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('oplab')
        cy.get('form > .MuiBox-root').click()
        cy.get('.MuiAlert-message').should('contain', 'Não foi possível se conectar ao servidor do OpLab neste momento.')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.visit('https://oplab.app/logout')  
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('oplab@oplab.com.br')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('opb')
        cy.get('form > .MuiBox-root').click()
        cy.get('form > .MuiBox-root').click()
        cy.get('.MuiAlert-message').should('contain', 'Não foi possível se conectar ao servidor do OpLab neste momento.')

    })
}) 
