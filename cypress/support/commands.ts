Cypress.Commands.add('getTransactionHeading', () => {
    return (cy.get('.font-h3').contains(/25 of 2875 Transactions/i) as unknown) as Cypress.Chainable<JQuery<HTMLElement>>;
});