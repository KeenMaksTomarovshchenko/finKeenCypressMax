import directories from '../pageObjects/directories';
import Login from '../pageObjects/login';
import CommonActivities from '../data/CommonActivities';

const Directories = new directories();
const login = new Login();
const commonActivities = new CommonActivities();

before(() => {
  cy.viewport(1300, 800);
});

it('check all directories for adding, deleting, changing and correspondence onboarding data', () => {
  login.login();
  Directories.company_data();
  Directories.accounts();
  Directories.income_items();
  Directories.expense_items();
  Directories.employees();
  Directories.counterparties();
  Directories.warehouses();
  Directories.taxes();
});
