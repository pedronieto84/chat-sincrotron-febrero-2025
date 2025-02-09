/// <reference types="cypress" />

describe('ChatRoom Page', () => {
    beforeEach(() => {
      // Visita la página de login y loguea con el usuario existente
      cy.visit('/');
      cy.get('#formEmail').type('pedro@gmail.com');
      cy.get('#formPassword').type('123456');
      cy.contains('button', 'Iniciar sesión').click();
  
      // Verifica que la navegación a la página de hall haya ocurrido
      cy.url().should('include', '/hall');
  
      // Haz clic en el primer elemento del listado para navegar a la página de ChatRoom
      cy.get('.list-group a').first().click();
  
      // Verifica que la URL incluya '/chat-room'
      cy.url().should('include', '/chat-room');
    });
  
    it('should have a URL with two alphanumeric IDs separated by a "-"', () => {
      cy.url().then((url) => {
        const regex = /\/chat-room\/([a-zA-Z0-9]+)-([a-zA-Z0-9]+)/;
        const match = url.match(regex);
        expect(match).to.not.be.null;
        expect(match[1]).to.match(/^[a-zA-Z0-9]+$/);
        expect(match[2]).to.match(/^[a-zA-Z0-9]+$/);
      });
    });
  
  
    it('should send a message and display it in the chat', () => {
      // Escribe un mensaje en el campo de entrada
      const message = 'Hola';
      cy.get('#root > div > div > div > div.card-footer > div > input').type(message);
  
      // Envía el mensaje
      cy.get('#root > div > div > div > div.card-footer > div > button').click();
  
   
    // Verifica que el mensaje aparece en el chat
    cy.get('#root > div > div > div > div.card-body > div').last().should('contain.text', message);
    });


    it('should send a message and display it in the chat and we should see a whole conversation', () => {
        // Escribe un mensaje en el campo de entrada
        const message = 'Hola';
        cy.get('#root > div > div > div > div.card-footer > div > input').type(message);
    
        // Envía el mensaje
        cy.get('#root > div > div > div > div.card-footer > div > button').click();
    
        // Verifica que hay varios elementos con la clase card-body
        cy.get('#root > div > div > div > div.card-body > div').should('have.length.greaterThan', 1);
      });
  

  });