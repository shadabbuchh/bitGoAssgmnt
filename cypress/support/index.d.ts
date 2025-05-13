declare namespace Cypress {
    interface Chainable<Subject = any> {
        getTransactionHeading(): Chainable<JQuery<HTMLElement>>;
    }
}