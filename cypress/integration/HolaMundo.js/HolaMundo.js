describe("Bienvenido al curso de Cypress sección 1",()=>{
  it("Mi primer Test -> hola mundo",()=>{
    cy.log("Hola mundo")
    cy.wait(4000)
  })
  it("Segundo Test -> campo name",()=>{
    cy.visit("http://demoqa.com/text-box")
    cy.get("#userName").type("Susana")
    cy.wait(4000)
  })
})