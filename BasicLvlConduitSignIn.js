it('User login with existed data', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=yiy3hn');
    cy.get(':nth-child(1) > .form-control').type('cy.tester1@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Qwerty123456');
    cy.get('.btn').click();
    cy.get('.navbar').contains('cy.tester1').should('exist');
});