import User_creation from '../pageObjects/user_creation';

const user_creation = new User_creation();
before(() => {
  cy.viewport(1300, 800);
});
it('create new user', () => {
  user_creation.user_creation();
});
