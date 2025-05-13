describe('Test section heading', () => {
    const baseURL = 'https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732'

    beforeEach(() => {
        cy.visit(baseURL);
    });
    
    it('should have the correct section heading', () => {
        cy.getTransactionHeading().should('contain.text', '25 of 2875 Transactions');
    });
});



