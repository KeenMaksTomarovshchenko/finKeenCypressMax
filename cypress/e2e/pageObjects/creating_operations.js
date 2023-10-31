import credentials from '../data/credentials';
import CommonActivities from '../data/CommonActivities';

const commonActivities = new CommonActivities();

const CSSBurgerMenu = '[class="expand-icon"]';
const CSSMenuChapter = '[class="text-component bold"]';
const CSSMenuPage = '[class="text-component"]';
const CSSMenuBar = '[class="side-panel"]';
const CSSDropdown = '.mt-react-select__input-container';
const CSSInput = '.input-field';
const CSSDropdownValue = '.mt-react-select__single-value';
const CSSDropdownOption = '.tooltip-sign';
const CSSDatepicker = '[class="react-datepicker__input-container "]';
const CSSButton = '[class="main-button"]';
const CSSCreateNewButton = '[class="text-component bold"]';
const CSSSubmitButton = '[class="unstyled-button round-submit-button"]';
const CSSGreenButton = '[class="main-button add-btn"]';
const CSSQuantity = '[name="quantity"]';
const CSSCheckboxObligation = '[name="obligationFulfilled"]';
const CSSAccountNameAndBalance = '[class="text-component option-text-wrapper"]';
const CSSBoldNumber = '[class="text-component bold"]';
const CSSHugeBoldGreen = '[class="text-component amount huge bold green"]';
const CSSBoldGreenNumber = '[class="text-component bold amount"]';
const CSSDocumentRow = '[class="row"]';
const CSSBold = 'b';
const CSSTab = '[class="tab"]';
const CSSModalWindow = '[class="modal-block-wrapper"]';
class creating_operations {
  open_menu_chapter() {
    cy.wait(1000);
    cy.get(CSSBurgerMenu).click();
    cy.wait(1000);
    cy.get(CSSMenuBar).find(CSSMenuChapter).contains('Новая операция').click();
  }
  money_transaction() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Перемещение денег').click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.account_name.account_name_1}{enter}`);
    cy.get(CSSDropdownValue).eq(1).should('contain', `${credentials.account_name.account_name_1} / 10 000`);
    cy.get(CSSInput).eq(1).type('1000');
    cy.get(CSSDropdown).eq(2).type(`${credentials.account_name.account_name_2}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', `${credentials.account_name.account_name_2} / 20 000`);
    cy.get(CSSBoldGreenNumber).should('contain', '21 000');
    cy.wait(1000);
    cy.get(CSSButton).click();

    cy.wait(1000);

    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Перемещение денег').click();
    cy.wait(1000);
    cy.get(CSSDropdown).eq(1).type(`${credentials.account_name.account_name_2}{enter}`);
    cy.wait(1000);
    cy.get(CSSDropdownValue).eq(1).should('contain', `${credentials.account_name.account_name_2} / 21 000`);
    cy.get(CSSInput).eq(1).type('1000');
    cy.get(CSSDropdown).eq(2).type(`${credentials.account_name.account_name_1}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', `${credentials.account_name.account_name_1} / 9 000`);
    cy.get(CSSBoldGreenNumber).should('contain', '10 000');
    cy.wait(500);
    cy.get(CSSButton).click();
    cy.wait(1000);
  }
  operations_with_doc_sell() {
    /// //////////////С транзакцией, позицией и чекбоксом////////////////////
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Продажа').click();
    cy.wait(500);
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '100');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSInput).eq(4).type('100');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(3).type(`${credentials.income_item.income_item_1_name}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSCheckboxObligation).click();
    cy.wait(500);
    cy.get(CSSButton).click();

    /// ////////////С Позицией, без транзакции и без чекбокса///////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Продажа').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSInput).eq(4).type('100');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(3).type(`${credentials.income_item.income_item_1_name}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка');
    cy.get(CSSSubmitButton).click();
    cy.wait(500);
    cy.get(CSSButton).click();

    /// /////////////С Позицией, Транзакцией и без чекбокса //////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Продажа').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '100');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSInput).eq(4).type('100');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(3).type(`${credentials.income_item.income_item_1_name}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка');
    cy.get(CSSSubmitButton).click();
    cy.wait(500);
    cy.get(CSSButton).click();

    /// //////////////С Позицией, чекбоксом и без транзакции//////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Продажа').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSInput).eq(4).type('100');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(3).type(`${credentials.income_item.income_item_1_name}{enter}`);
    cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSCheckboxObligation).click();
    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operation_with_doc_buy() {
    /// ////////////////С транзакцией, позицией и чекбоксом////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Покупка').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    cy.get(CSSInput).eq(0).type('01');
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(3).click();
    cy.get(CSSDropdownOption).contains(credentials.expense_item_name.expense_item_1_name).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1);
    cy.get(CSSInput).eq(4).type('150');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSCheckboxObligation).click();
    cy.wait(500);
    cy.get(CSSButton).click();


    /// ////////////С Позицией, без транзакции и без чекбокса///////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Покупка').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    cy.get(CSSInput).eq(0).type('02');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(3).click();
    cy.get(CSSDropdownOption).contains(credentials.expense_item_name.expense_item_1_name).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1);
    cy.get(CSSInput).eq(4).type('150');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSSubmitButton).click();
    cy.wait(500);
    cy.get(CSSButton).click();
    /// //////////////С Позицией, чекбоксом и без транзакции//////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Покупка').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    cy.get(CSSInput).eq(0).type('03');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(3).click();
    cy.get(CSSDropdownOption).contains(credentials.expense_item_name.expense_item_1_name).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1);
    cy.get(CSSInput).eq(4).type('150');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSCheckboxObligation).click();
    cy.wait(500);
    cy.get(CSSButton).click();
    /// /////////////С Позицией, Транзакцией и без чекбокса ///////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Покупка').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Invoice' + '{enter}');
    cy.get(CSSInput).eq(0).type('04');
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');
    // Позиции
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSInput).eq(1).type('Test');
    cy.get(CSSDropdown).eq(3).click();
    cy.get(CSSDropdownOption).contains(credentials.expense_item_name.expense_item_1_name).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1);
    cy.get(CSSInput).eq(4).type('150');
    cy.get(CSSQuantity).type('1');
    cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1);
    cy.get(CSSDropdown).eq(5).type('25' + '{enter}');
    cy.get(CSSSubmitButton).click();
    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operation_with_salaries() {
    /// ///////////////С Начислением и с транзакцией//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Зарплата').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.employee_full_name_trim.employee_full_name_1}{enter}`);
    // Начисление
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.employee_full_name_trim.employee_full_name_1);
    cy.get(CSSInput).eq(1).type('150');
    cy.get(CSSGreenButton).click();
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');

    cy.wait(500);
    cy.get(CSSButton).click();
    /// ///////////////С Начислением и без транзакции//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Зарплата').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.employee_full_name_trim.employee_full_name_1}{enter}`);
    // Начисление
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSDropdownValue).eq(2).should('contain', credentials.employee_full_name_trim.employee_full_name_1);
    cy.get(CSSInput).eq(1).type('150');
    cy.get(CSSGreenButton).click();

    cy.wait(500);
    cy.get(CSSButton).click();
    /// ///////////////Без Начисления и с транзакцией//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Зарплата').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.employee_full_name_trim.employee_full_name_1}{enter}`);
    // Транзакции
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');

    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operation_with_taxes() {
    /// ///////////////С Начислением и с транзакцией//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Налог').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('Декларация' + '{enter}');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.taxes.social_tax}{enter}`);
    // Начисление
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSDropdownValue).eq(1).should('contain', credentials.taxes.social_tax);
    cy.get(CSSDropdown).eq(3).type(`${credentials.expense_item_category.expense_item_category_1}{enter}`);
    cy.get(CSSInput).eq(0).type('150');
    cy.get(CSSGreenButton).click();
    // Транзакция
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');

    cy.wait(500);
    cy.get(CSSButton).click();
    /// ///////////////С Начислением и без транзакции//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Налог').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('Декларация' + '{enter}');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.taxes.social_tax}{enter}`);
    // Начисление
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSDropdownValue).eq(1).should('contain', credentials.taxes.social_tax);
    cy.get(CSSDropdown).eq(3).type(`${credentials.expense_item_category.expense_item_category_1}{enter}`);
    cy.get(CSSInput).eq(0).type('150');
    cy.get(CSSGreenButton).click();

    cy.wait(500);
    cy.get(CSSButton).click();
    /// ///////////////Без Начисления и с транзакцией//////////////////////
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Налог').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('Декларация' + '{enter}');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(`${credentials.taxes.social_tax}{enter}`);
    // Транзакция
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '150');

    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operation_with_self_capital() {
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Собственный капитал').click();

    cy.get(CSSBold).eq(0).should('contain', '27 120');
    cy.get(CSSHugeBoldGreen).eq(0).should('contain', '27 800');
    cy.get(CSSHugeBoldGreen).eq(1).should('contain', '-680');
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSAccountNameAndBalance).contains(`${credentials.account_name.account_name_1} / 9 300`).click();
    cy.wait(500);
    cy.get(CSSInput).eq(0).type('150');
    cy.wait(500);
    cy.get(CSSButton).click();
    cy.wait(500);
    cy.get(CSSBold).eq(0).should('contain', '26 970');
    cy.get(CSSHugeBoldGreen).eq(0).should('contain', '27 650');
    cy.get(CSSDocumentRow).eq(1).should('contain', 'Выплата').and('contain', 'Дивиденды')
      .and('contain', '150');
  }
  operations_with_credits_receipt() {
    // Реквизиты
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Кредит и займ').click();
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Соглашение' + '{enter}');
    cy.get(CSSInput).eq(0).type('1001');
    cy.wait(500);
    // Транзакция
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSDropdown).eq(3).type(`${credentials.account_name.account_name_1}{enter}`);
    cy.get(CSSInput).eq(1).type('5000');
    cy.get(CSSGreenButton).click();
    cy.wait(500);
    // Позиция
    cy.get(CSSInput).eq(1).type(credentials.credits.credit_name_5);
    cy.get(CSSDatepicker).eq(1).click();
    cy.get('.unstyled-button.right').dblclick();
    cy.get('.custom-month-cell-wrapper').contains('октябрь').click();
    cy.wait(500);
    cy.get(CSSInput).eq(2).click();
    cy.get(CSSInput).eq(2).type('5000');

    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operations_with_credits_repayment_1() {
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Кредит и займ').click();
    cy.wait(500);
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Нулевой период' + '{enter}');
    cy.get(CSSDropdown).eq(2).type('0001' + '{enter}');
    cy.wait(500);
    // Транзакция
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '1000', 'Погашение кредита');
    cy.wait(500);
    // Позиция
    cy.get(CSSInput).eq(0).should('have.value', credentials.credits.credit_name_1);
    cy.get(CSSInput).eq(1).should('have.value', '12.2023');
    cy.get(CSSInput).eq(2).should('have.value', '1 100');

    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operations_with_credits_repayment_2() {
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Кредит и займ').click();
    // Реквизиты
    cy.get(CSSDropdown).eq(0).type(`${credentials.counterparties_name.counterparties_name_1}{enter}`);
    cy.get(CSSDropdown).eq(1).type('Нулевой период' + '{enter}');
    cy.get(CSSDropdown).eq(2).type('0001' + '{enter}');
    cy.get(CSSModalWindow).find(CSSButton).click();
    cy.wait(1000);
    // Транзакция
    commonActivities.createTransactionForOperations(commonActivities.CurrentDate(), credentials.account_name.account_name_1, '500', 'Оплата процентов');
    // Позиция
    cy.get(CSSInput).eq(0).should('have.value', credentials.credits.credit_name_1);
    cy.get(CSSInput).eq(1).should('have.value', '12.2023');
    cy.get(CSSInput).eq(2).should('have.value', '1 100');

    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operations_with_products_disposal() {
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товары').click();
    cy.get(CSSTab).contains('Выбытие').click();
    cy.get(CSSDropdown).eq(1).type('Склад №1' + '{enter}');
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSDropdown).eq(2).type(`${credentials.product_name.product_1_name}{enter}`);
    cy.get(CSSInput).type('40');
    cy.get(CSSDropdown).eq(3).type(`${credentials.expense_item_category.expense_item_category_1}{enter}`);
    cy.get(CSSDropdownValue).eq(4).should('have.text', credentials.expense_item_name.expense_item_1_name);
    cy.get(CSSSubmitButton).click();
    cy.get(CSSBoldNumber).eq(5).should('have.text', '400');
    cy.wait(500);
    cy.get(CSSButton).click();

    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товары').click();
    cy.get(CSSTab).contains('Выбытие').click();
    cy.get(CSSDropdown).eq(1).type('Склад №2' + '{enter}');
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSDropdown).eq(2).type(`${credentials.product_name.product_3_name}{enter}`);
    cy.get(CSSInput).type('45');
    cy.get(CSSDropdown).eq(3).type(`${credentials.expense_item_category.expense_item_category_1}{enter}`);
    cy.get(CSSDropdownValue).eq(4).should('have.text', credentials.expense_item_name.expense_item_1_name);
    cy.get(CSSSubmitButton).click();
    cy.get(CSSBoldNumber).eq(5).should('have.text', '450');
    cy.wait(500);
    cy.get(CSSButton).click();
  }
  operations_with_products_write_off() {
    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товары').click();
    cy.get(CSSTab).contains('Списание').click();
    cy.get(CSSDropdown).eq(1).type('Склад №1' + '{enter}');
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSDropdown).eq(2).type(`${credentials.product_name.product_1_name}{enter}`);
    cy.get(CSSInput).type('30');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSBoldNumber).eq(5).should('have.text', '300');
    cy.wait(500);
    cy.get(CSSButton).click();

    cy.wait(500);
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товары').click();
    cy.get(CSSTab).contains('Списание').click();
    cy.get(CSSDropdown).eq(1).type('Склад №2' + '{enter}');
    cy.get(CSSCreateNewButton).eq(3).click();
    cy.get(CSSDropdown).eq(2).type(`${credentials.product_name.product_2_name}{enter}`);
    cy.get(CSSInput).type('35');
    cy.get(CSSSubmitButton).click();
    cy.get(CSSBoldNumber).eq(5).should('have.text', '350');
    cy.wait(500);
    cy.get(CSSButton).click();
  }
}
export default creating_operations;
