/// <reference types="cypress" />

describe('Hall Page', () => {
    beforeEach(() => {
      // Visita la página de login y loguea con el usuario existente
      cy.visit('/');
      cy.get('#formEmail').type('pedro@gmail.com');
      cy.get('#formPassword').type('123456');
      cy.contains('button', 'Iniciar sesión').click();
  
      // Verifica que la navegación a la página de hall haya ocurrido
      cy.url().should('include', '/hall');
    });
  
    it('should load at least one element in the list', () => {
      // Verifica que al menos un elemento del listado esté presente
      cy.get('.list-group').should('have.length.greaterThan', 0);
    });
  
    it('should navigate to chatroom with two alphanumeric IDs separated by a "-" when clicking on an element', () => {
      // Haz clic en el primer elemento del listado
    cy.get('.list-group a').first().click();
  

      // Verifica que la URL incluya '/chatroom'
      cy.url().should('include', '/chat-room');
    
    });
  
    it('should navigate to "/" and log out when clicking "Salir"', () => {
      // Haz clic en el botón "Salir"
      cy.contains('a', 'Salir').click();
  
      // Verifica que la navegación a la página de inicio haya ocurrido
      cy.url().should('eq', Cypress.config().baseUrl + '/');
  
      // Verifica que el usuario esté deslogueado (puedes verificar la ausencia de un token o la presencia de un botón de login)
      cy.get('#formEmail').should('exist');
    });
  });

