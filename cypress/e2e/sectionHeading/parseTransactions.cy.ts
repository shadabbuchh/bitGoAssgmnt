describe('Parse & validate visible transactions', () => {
    const baseURL = 'https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732'

    before(() => {
        cy.visit(baseURL);
    });

    it('should have the correct number of transactions', () => {
        cy.get('transactions').should('have.length', 25)
                  .each(($txEl) => {
                    try {
                        const hash = $txEl.find('.ins-and-outs').text().trim();

                        const inputCount = $txEl.find('.vins').text().trim();

                        const outputCount = $txEl.find('.vouts').text().trim();

                        const input = parseInt(inputCount);
                        const output = parseInt(outputCount);

                        if (input === 1 && output === 2) {
                            cy.log(`Transaction with 1 input & 2 outputs: ${hash}`);
                        }
                        
                        
                    } catch (err) {
                        cy.log('Error parsing transaction:', err);
                    }
                  });
    });
    
    
})