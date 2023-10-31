import reports_after_operations from '../pageObjects/reports_after_operations';
import Login from '../pageObjects/login';

const Reports_after_operations = new reports_after_operations();
const login = new Login();
before(() => {
  cy.viewport(1300, 800);
});
it('check reports after operations', () => {
  login.login();
  Reports_after_operations.dashboard();
  Reports_after_operations.flow_of_fund();
  Reports_after_operations.balance();
  Reports_after_operations.accounts_receivable();
  Reports_after_operations.accounts_payable();
});
