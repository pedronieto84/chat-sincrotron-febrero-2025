
/// <reference types="cypress" />



describe('Register Page', () => {
    beforeEach(() => {
      // Visita la página de registro antes de cada prueba
      cy.visit('/register');
    });
  
    it('should register a new user', () => {
      // Rellena el formulario de registro
      cy.get('#formEmail').type(`${Date.now()}@example.com`);
      cy.get('#formPassword').type('password123');
  
      // Envía el formulario
      cy.get('#root > div > form > div:nth-child(3) > button').click();
  
      // Verifica que la navegación a la página de hall haya ocurrido
      cy.url().should('include', '/hall');
    });
  });