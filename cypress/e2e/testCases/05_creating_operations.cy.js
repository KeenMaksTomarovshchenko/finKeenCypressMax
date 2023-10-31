import creating_operations from '../pageObjects/creating_operations';
import Login from '../pageObjects/login';

const Creating_operations = new creating_operations();
const login = new Login();
before(() => {
  cy.viewport(1300, 800);
});
it('create new operations', () => {
  login.login();
  Creating_operations.open_menu_chapter();
  Creating_operations.money_transaction()
  Creating_operations.operations_with_doc_sell()
  Creating_operations.operation_with_doc_buy()
  Creating_operations.operation_with_salaries()
  Creating_operations.operation_with_taxes()
  Creating_operations.operation_with_self_capital()
  Creating_operations.operations_with_credits_receipt()
  Creating_operations.operations_with_credits_repayment_1();
  Creating_operations.operations_with_credits_repayment_2();
  Creating_operations.operations_with_products_disposal()
  Creating_operations.operations_with_products_write_off()
});
