describe('GitHub Workflow Test', () => {

  it('Simple Login Test', () => {

    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get("#username",{timeout:5000})
      .type('student');

    cy.get("#password")
      .type('Password123');

    cy.get("#submit")
      .click();

    cy.get(".post-title")
      .should('be.visible');

  });

});