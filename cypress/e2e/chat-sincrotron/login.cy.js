/// <reference types="cypress" />

describe('Login Page', () => {
    beforeEach(() => {
      // Visita la página de login antes de cada prueba
      cy.visit('/login');
    });
  
    it('should allow an existing user to log in', () => {
      // Rellena el formulario de login con un usuario existente
      cy.get('#formEmail').type('pedro@gmail.com');
      cy.get('#formPassword').type('123456');
  
      // Envía el formulario
      cy.get('#root > div > form > div:nth-child(3) > button').click();
  
      // Verifica que la navegación a la página de hall haya ocurrido
      cy.url().should('include', '/hall');
    });
  
    it('should disable the submit button for incorrect email', () => {
      // Rellena el formulario con un email incorrecto
      cy.get('#formEmail').type('incorrect-email');
      cy.get('#formPassword').type('123456');
  
      // Verifica que el botón de "Iniciar Sesión" esté deshabilitado
      cy.get('#root > div > form > div:nth-child(3) > button').should('be.disabled');
    });
  
    it('should disable the submit button for incorrect password', () => {
      // Rellena el formulario con un usuario existente pero con contraseña incorrecta
      cy.get('#formEmail').type('pedro@gmail.com');
      cy.get('#formPassword').type('123457');
  
      // Verifica que el botón de "Iniciar Sesión" esté deshabilitado
      cy.get('#root > div > form > div:nth-child(3) > button').should('be.disabled');
    });
  
    it('should navigate to "/register" when clicking "Crear Cuenta"', () => {
      // Verifica que el enlace "Crear Cuenta" esté presente
      cy.contains('a', 'Crear Cuenta').click();
  
      // Verifica que la navegación a la página de registro haya ocurrido
      cy.url().should('include', '/register');
    });
  });