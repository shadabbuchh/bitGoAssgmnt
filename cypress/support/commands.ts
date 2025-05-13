
declare global {
  namespace Cypress {
    interface Chainable {
      getTransactionHeading(): Chainable<JQuery<HTMLElement>>;
    }
  }
}


Cypress.Commands.add('getTransactionHeading', () => {
  return cy.get('.font-h3').contains(/25 of 2875 Transactions/i);
});

export {}; 