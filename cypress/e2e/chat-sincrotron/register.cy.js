
/// <reference types="cypress" />



describe('Register Page', () => {
    beforeEach(() => {
      // Visita la página de registro antes de cada prueba
      cy.visit('https://chat-sincrotron-febrero-2025.web.app/');
    });
  
    it('should register a new user', () => {
      // Rellena el formulario de registro
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
  
      // Envía el formulario
      cy.get('button[type="submit"]').click();
  
      // Verifica que la navegación a la página de hall haya ocurrido
      cy.url().should('include', '/hall');
  
      // Verifica que el usuario esté registrado y logueado
      cy.get('.user-email').should('contain', 'testuser@example.com');
    });
  
    it('should show an error for existing user', () => {
      // Rellena el formulario de registro con un usuario existente
      cy.get('input[name="email"]').type('existinguser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
  
      // Envía el formulario
      cy.get('button[type="submit"]').click();
  
      // Verifica que se muestre un mensaje de error
      cy.get('.error-message').should('contain', 'User already exists');
    });
  });