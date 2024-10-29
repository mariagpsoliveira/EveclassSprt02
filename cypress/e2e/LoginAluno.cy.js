const { timeout } = require("async")

Cypress.Commands.add('resolvaCaptcha', () =>{
  cy.pause()
  cy.log('Resolva o captcha manualmente!') //vai chamar pra resolver o captcha manualmente
})

describe('Login Eveclass', () => {

  beforeEach(()=>{

    cy.visit('/') //definido na baseurl 
    cy.wait(2000) //espera carregar
  }) //fim beforeEach

  it('Login Eveclass', () => {
    
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('mariaiterasysteste+1@gmail.com') //insere email

    cy.get('input[type="password"]')
      .should('be.visible')
      .type('Iterasys@123') //insere pass

    cy.resolvaCaptcha() //faz o captcha manual

    cy.get('button[type="submit"]') //clica no entrar depois de resolver o captcha
      .click()
    
    cy.wait(5000) //espera carregar a pagina depois do login 

    //cy.get('a[type="button"][href="/pt/cursos"]')
     // .click()´

     cy.contains('a', 'Procurar cursos', {timeout: 5000})
        .should('be.visible')
        .click()
    
    cy.title()
      .should('eq', 'Cursos - Teste') // Ver título da página de cursos

    cy.get('input[type="text"]')
      .type('java em poucos passos') // Pesquisar curso "Java em poucos passos"

    cy.wait(4000)
    cy.contains('Java em poucos passos')
      .click() // Clicar no curso "Java em poucos passos"

    cy.title()
      .should('eq', 'Java em poucos passos - Teste') // Verificar o título da página do curso

    cy.contains('span', 'Comprar')
      .click() // Clicar no botão "Comprar"

    cy.title()
      .should('eq', 'Comprar: Java em poucos passos - Teste') // Verificar o título da página de compra

      cy.get('input[type="text"][data-vv-as="CPF"]')
       .clear()
       .type('03653936578') //cpf inserir

    cy.get('input[type="text"][data-vv-as="Telefone"]')
      .clear()
      .type('34343434343434') //telefone 

    cy.get('input[placeholder="CEP"]')
      .clear()
      .type('335540000') //cep 

    cy.get('input[placeholder="Cidade"]')
      .clear()
      .type('Oliveira') //cidade

    cy.get('input[placeholder="Estado"]')
      .clear()
      .type('MG') //estado

    cy.get('input[placeholder="Bairro"]')
      .clear()
      .type('São Sebastião') //bairro

    cy.get('input[placeholder="Rua"]')
      .clear()
      .type('Travessa São Sebastião') //rua

    cy.get('input[placeholder="Número"]')
      .clear()
      .type('96') //numero

    cy.contains('span', 'Confirmar Compra')
      .click() // Clicar no botão "Confirmar Compra"

    cy.title()
      .should('eq', 'Compra realizada com sucesso!')  // Verificar o título da página de confirmação de compra

    //cy.contains('Iniciar Curso')
     //.click() // Clicar no botão "Iniciar Curso"
  })
})