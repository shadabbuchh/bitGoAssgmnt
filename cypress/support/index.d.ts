declare namespace Cypress {
    interface Chainable {
        getTransactionHeading(): Chainable<JQuery<HTMLElement>>;
    }
}