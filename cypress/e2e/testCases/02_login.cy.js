import Login from '../pageObjects/login';

const login = new Login();

before(() => {
  cy.viewport(1300, 800);
});
it('Visit login page', () => {
  login.login();
});
