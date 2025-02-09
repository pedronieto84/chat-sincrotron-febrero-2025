
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

    it('should disable the submit button for invalid email', () => {
      // Rellena el formulario con un email inválido
      cy.get('#formEmail').type('invalid-email');
      cy.get('#formPassword').type('password123');
  
      // Verifica que el botón de "Iniciar Sesión" esté deshabilitado
      cy.get('#root > div > form > div:nth-child(3) > button').should('be.disabled');
    });

    it('should disable the submit button for too short password', () => {
      // Rellena el formulario con una contraseña muy corta
      cy.get('#formEmail').type(`${Date.now()}@example.com`);
      cy.get('#formPassword').type('short');
  
      // Verifica que el botón de "Iniciar Sesión" esté deshabilitado
      cy.get('#root > div > form > div:nth-child(3) > button').should('be.disabled');
    });
  
    it('should disable the submit button for too long password', () => {
      // Rellena el formulario con una contraseña muy larga
      cy.get('#formEmail').type(`${Date.now()}@example.com`);
      cy.get('#formPassword').type('thispasswordiswaytoolongtobeaccepted');
  
      // Verifica que el botón de "Iniciar Sesión" esté deshabilitado
      cy.get('#root > div > form > div:nth-child(3) > button').should('be.disabled');
    });
  
    it('should navigate to "/" when clicking "Crear Cuenta"', () => {
      // Verifica que el enlace "Crear Cuenta" esté presente
      cy.get('a[href="/"]').click();
  
      // Verifica que la navegación a la página de inicio haya ocurrido
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  });