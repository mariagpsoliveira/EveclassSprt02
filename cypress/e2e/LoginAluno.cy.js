import 'cypress-xpath'

Cypress.Commands.add('resolvaCaptcha', () =>{
  cy.pause()
  cy.log('Resolva o captcha manualmente!')
})

describe('Login Eveclass', () => {

  beforeEach(()=>{

    cy.visit('/')
    cy.wait(3000) //espera carregar
  }) //fim beforeEach

  it('Login Eveclass', () => {
    
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('mariaiterasysteste@gmail.com') //insere email

    // Preenche o campo de senha usando o novo ID
    cy.get('input[type="password"]')
      .should('be.visible')
      .type('Iterasys@123') //insere pass

    cy.wait(5000)
    cy.resolvaCaptcha() //faz o captcha manual

    
    cy.get('button[type="submit"]')
      .click()

    /*cy.contains('button', 'Entrar')
      .click()// Clica no botão de submissão (login) //clica em login */

    cy.get('a.btn-topbar')
      .should('be.visible')
      .click() //procura a palavra voltar e clica 
    
    cy.wait(3000)
    cy.contains('a', 'Cursos')
      .should('be.visible')
      .click() //procura cursos e clica 

    //cy.contains('h3', 'Progr@mação JavaScript') // Verifica se tem o texto Programacao em Javasript
    //  .should('be.visible')
    //  .click()

    //cy.wait(3000)
    //cy.get('a.content-card')
    //  .click() // Clica no elemento

  })

}) // fim describe 