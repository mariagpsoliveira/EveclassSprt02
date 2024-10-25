import 'cypress-xpath'

Cypress.Commands.add('resolvaCaptcha', () =>{
  cy.pause();
  cy.log('Resolva o captcha manualmente!');
})

describe('Login Eveclass', () => {

  beforeEach(()=>{

    cy.visit('/')
    cy.wait(3000) //faz reload na pagina depois de carregar
  }) //fim beforeEach

  it('Login Eveclass', () => {
    /* Espera o link "Entrar" ficar visível e clica nele
    cy.contains('a', 'Entrar', {timeout: 20000})
      .should('be.visible')
      .click();*/


    cy.get('input[type="email"]')
     .should('be.visible')
      .type('mariaiterasysteste@gmail.com')

    // Preenche o campo de senha usando o novo ID
    cy.get('input[type="password"]')
      .should('be.visible')
      .type('Iterasys@123')
    
      cy.resolvaCaptcha()

   cy.contains('button', 'Entrar')
    .click()// Clica no botão de submissão (login)
  });

}) // fim describe 