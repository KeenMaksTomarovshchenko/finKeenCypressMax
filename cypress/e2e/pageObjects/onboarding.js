import credentials from '../data/credentials';
import CommonActivities from '../data/CommonActivities';
import Login from "./login";

const commonActivities = new CommonActivities();
const login = new Login()

const CSSInput = '.input-field';
const CSSButton = '[class="main-button"]';
const CSSNextButton = '[class="main-button next-btn"]';
const CSSSkipButton = '[class="text-button"]';
const CSSCreateNewButton = '[class="text-component bold"]';
const CSSGreenButton = '[class="main-button add-btn"]';
const CSSDropdown = '.mt-react-select__input-container';
const CSSDatepicker = '[class="react-datepicker__input-container "]';
const CSSDatepickerRightButton = '.unstyled-button.right';
const CSSDatepickerMonth = '.custom-month-cell-wrapper';
const CSSWarehousesName = '[class="name"]';
const CSSCheckbox = '[type="checkbox"]';
const CSSWarehousesAdressMask = '[class="input-field input-field-mask"]';
const CSSBigBoldGreenAmount = '[class="text-component amount big bold green"]';
const CSSModalProductsOnboarding = '[class="upsert-product-wrapper"]'
const CSSActionButtons = '[class="action-buttons"]'

class onboarding {
  // Приветствие
  page0() {
    commonActivities.checkTitle('Добро пожаловать');
    cy.wait(500);
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).eq(0).click();
  }

  // Финансовое моделирование
  page1() {
    commonActivities.checkTitle('Финансовое моделирование');
    cy.wait(500);
    commonActivities.checkToolTip();
    cy.get(CSSSkipButton).eq(1).click();
  }

  // Данные фирмы
  page2() {
    commonActivities.checkTitle('Данные фирмы');
    cy.wait(500);
    cy.get(CSSInput).eq(0).type(credentials.company_full_name.company_full_name);
    cy.get(CSSInput).eq(1).type(credentials.company_short_name.company_short_name);
    cy.get(CSSInput).eq(2).type(credentials.company_tax_number.company_tax_number);
    cy.wait(1000);
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Валюта учёта
  page3() {
    commonActivities.checkTitle('Валюта учета');
    cy.wait(500);
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Счета
  account_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные счета');
    cy.get(CSSDropdown).eq(1).type(credentials.account_type.account_type_1);
    cy.get(CSSInput).eq(0).type(credentials.account_name.account_name_1);
    cy.get(CSSInput).eq(1).type('10000');
    cy.get(CSSButton).click();
  }

  account_2_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные счета');

    cy.get(CSSDropdown).eq(1).type(credentials.account_type.account_type_2);
    cy.get(CSSInput).eq(0).type(credentials.account_name.account_name_2);
    cy.get(CSSInput).eq(1).type('20000');
    cy.get(CSSButton).click();
  }

  page4() {
    commonActivities.checkTitle('Счета');
    this.account_1_creating();
    this.account_2_creating();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Статьи доходов
  income_item_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью дохода');
    cy.get(CSSInput).eq(0).type(credentials.income_item.income_item_1_name);
    cy.get(CSSButton).click();
  }

  income_item_2_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью дохода');
    cy.get(CSSInput).eq(0).type(credentials.income_item.income_item_2_name);
    cy.get(CSSButton).click();
  }

  income_item_3_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью дохода');
    cy.get(CSSInput).eq(0).type(credentials.income_item.income_item_3_name);
    cy.get(CSSButton).click();
  }

  page5() {
    commonActivities.checkTitle('Статьи доходов');
    this.income_item_1_creating();
    this.income_item_2_creating();
    this.income_item_3_creating();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Статьи расходов
  expense_item_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_1_name);
    cy.get(CSSButton).click();
  }

  expense_item_2_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2 + '{enter}');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_2_name);
    cy.get(CSSButton).click();
  }

  expense_item_3_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_3 + '{enter}');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_3_name);
    cy.get(CSSButton).click();
  }

  expense_item_4_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_4 + '{enter}');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_4_name);
    cy.get(CSSButton).click();
  }

  expense_item_5_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_1 + '{enter}');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_5_name);
    cy.get(CSSCheckbox).click();
    cy.get(CSSButton).click();
  }

  expense_item_6_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите статью расхода');
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2 + '{enter}');
    cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_6_name);
    cy.get(CSSCheckbox).click();
    cy.get(CSSButton).click();
  }

  page6() {
    commonActivities.checkTitle('Статьи расходов');
    this.expense_item_1_creating();
    this.expense_item_2_creating();
    this.expense_item_3_creating();
    this.expense_item_4_creating();
    this.expense_item_5_creating();
    this.expense_item_6_creating();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Контрагенты
  counterparties_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные контрагента');
    cy.get(CSSInput).eq(0).type(credentials.counterparties_name.counterparties_name_1);
    cy.get(CSSButton).click();
  }

  counterparties_2_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные контрагента');
    cy.get(CSSCreateNewButton).eq(16).should('contain', credentials.counterparties_type.counterparties_type_2).click();
    cy.get(CSSInput).eq(0).type(credentials.counterparties_name.counterparties_name_2);
    cy.get(CSSButton).click();
  }

  page7() {
    commonActivities.checkTitle('Контрагенты');
    this.counterparties_1_creating();
    this.counterparties_2_creating();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Сотрудники

  employee_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные сотрудника');
    cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name);
    cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_1);
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_1 + '{enter}');
    cy.get(CSSDropdown).eq(2).click();
    cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1);
    cy.get(CSSButton).click();
  }

  employee_2_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные сотрудника');
    cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name);
    cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_2);
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2 + '{enter}');
    cy.get(CSSDropdown).eq(2).click();
    cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1);
    cy.get(CSSButton).click();
  }

  employee_3_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные сотрудника');
    cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name);
    cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_3);
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_3 + '{enter}');
    cy.get(CSSDropdown).eq(2).click();
    cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1);
    cy.get(CSSButton).click();
  }

  employee_4_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkSubTitle('Введите данные сотрудника');
    cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name);
    cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_4);
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_4 + '{enter}');
    cy.get(CSSDropdown).eq(2).click();
    cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1);
    cy.get(CSSButton).click();
  }

  page8() {
    commonActivities.checkTitle('Сотрудники');
    this.employee_1_creating();
    this.employee_2_creating();
    this.employee_3_creating();
    this.employee_4_creating();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Налоги
  page9() {
    commonActivities.checkTitle('Налоги');
    cy.get(CSSCheckbox).click();

    cy.get(CSSInput).eq(0).type('25');
    cy.get(CSSCreateNewButton).eq(0).click();

    cy.get(CSSInput).eq(1).type('50');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(1).click();
    cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2 + '{enter}');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(2).click();
    cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3 + '{enter}');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(3).click();
    cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_4 + '{enter}');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(5).click();
    cy.get(CSSDropdown).eq(5).type(credentials.expense_item_category.expense_item_category_2 + '{enter}');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(6).click();
    cy.get(CSSDropdown).eq(6).type(credentials.expense_item_category.expense_item_category_3 + '{enter}');

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSDropdown).eq(7).click();
    cy.get(CSSDropdown).eq(7).type(credentials.expense_item_category.expense_item_category_4 + '{enter}');

    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Склады
  waterhouse_1_creating() {
    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSWarehousesName).should('contain', 'Склад №1');
    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSModalProductsOnboarding).should('be.visible')
    cy.get(CSSInput).eq(0).type(credentials.product_name.product_1_name);
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('a' + '{backspace}' + credentials.units.unit_1 + '{enter}');
    cy.get(CSSInput).eq(1).type('100');
    cy.get(CSSInput).eq(2).type('10');
    cy.get(CSSActionButtons)
      .find(CSSGreenButton).click();
    cy.wait(5000);
  }

  waterhouse_2_creating() {
    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSWarehousesName).should('contain', 'Склад №2');
    cy.get(CSSCheckbox).eq(1).click();
    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSModalProductsOnboarding).should('be.visible')
    cy.get(CSSInput).eq(0).type(credentials.product_name.product_2_name);
    cy.wait(500);
    cy.get(CSSWarehousesAdressMask).type('11.A.111');
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('a' + '{backspace}' + credentials.units.unit_2 + '{enter}');
    cy.get(CSSInput).eq(2).type('200');
    cy.get(CSSInput).eq(3).type('10');
    cy.get(CSSActionButtons)
      .find(CSSGreenButton).click();

    cy.wait(5000);

    cy.get(CSSCreateNewButton).eq(1).click();
    cy.get(CSSModalProductsOnboarding).should('be.visible')
    cy.get(CSSInput).eq(0).type(credentials.product_name.product_3_name);
    cy.wait(500);
    cy.get(CSSWarehousesAdressMask).type('22.B.222');
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('a' + '{backspace}' + credentials.units.unit_3 + '{enter}');
    cy.get(CSSInput).eq(2).type('300');
    cy.get(CSSInput).eq(3).type('10');
    cy.get(CSSActionButtons)
      .find(CSSGreenButton).click();
    cy.wait(5000);
  }

  waterhouse_3_creating() {
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSWarehousesName).should('contain', 'Склад №3');
    cy.get(CSSCreateNewButton).eq(2).click();
    cy.get(CSSModalProductsOnboarding).should('be.visible')
    cy.get(CSSInput).eq(0).type(credentials.product_name.product_4_name);
    cy.wait(500);
    cy.get(CSSDropdown).eq(0).click();
    cy.get(CSSDropdown).eq(0).type('a' + '{backspace}' + credentials.units.unit_4 + '{enter}');
    cy.get(CSSInput).eq(1).type('400');
    cy.get(CSSInput).eq(2).type('10');
    cy.get(CSSGreenButton).click();
  }

  page10() {
    commonActivities.checkTitle('Склады');
    this.waterhouse_1_creating();
    cy.wait(1000);
    this.waterhouse_2_creating();
    cy.wait(1000);
    this.waterhouse_3_creating();
    cy.wait(1000);
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  /// //////////////Кредиторская задолженность////////////////////////////
  // Задолженность перед поставщиками
  DebtToSuppliers() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_1_name, credentials.expense_item_category.expense_item_category_1, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_2_name, credentials.expense_item_category.expense_item_category_2, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_3_name, credentials.expense_item_category.expense_item_category_3, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_4_name, credentials.expense_item_category.expense_item_category_4, '100');

    /// /

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_1_name, credentials.expense_item_category.expense_item_category_1, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_2_name, credentials.expense_item_category.expense_item_category_2, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_3_name, credentials.expense_item_category.expense_item_category_3, '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность перед поставщиками');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_4_name, credentials.expense_item_category.expense_item_category_4, '100');
  }

  // Авансы покупателей

  BuyersAdvances() {
    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы покупателей');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.income_item.income_item_1_name, 'Выручка', '200');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы покупателей');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.income_item.income_item_2_name, 'Выручка', '200');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы покупателей');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.income_item.income_item_1_name, 'Выручка', '200');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы покупателей');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.income_item.income_item_2_name, 'Выручка', '200');
  }

  // Задолженность сотрудникам
  DebtToEmployees() {
    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Задолженность сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_1, 'Зарплата', credentials.expense_item_category.expense_item_category_1, '300');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Задолженность сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_2, 'Зарплата', credentials.expense_item_category.expense_item_category_2, '300');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Задолженность сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_3, 'Зарплата', credentials.expense_item_category.expense_item_category_3, '300');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Задолженность сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_4, 'Зарплата', credentials.expense_item_category.expense_item_category_4, '300');
  }

  // Задолженность по налогам
  TaxDebt() {
    // Социальный налог
    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_1, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_2, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_3, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_4, credentials.taxes.social_tax, '50');

    /// /////////////////////////////Подоходный налог//////////////////////////////////////////

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_1, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_2, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_3, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_4, credentials.taxes.income_tax, '50');

    /// /////////////////////////////Налог на прибыль/////////////////////////////////

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.profit_tax, credentials.expense_item_category.expense_item_category_5, credentials.taxes.profit_tax, '50');

    /// ////////////////////////НДС/////////////////////////////////

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Задолженность по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.Value_added_tax, credentials.expense_item_category.expense_item_category_1, credentials.expense_item_category.expense_item_category_6, '50');
  }

  page11() {
    commonActivities.checkTitle('Кредиторская задолженность');
    this.DebtToSuppliers();
    this.BuyersAdvances();
    this.DebtToEmployees();
    this.TaxDebt();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  /// /////////////////////////////////Задолженность клиентов////////////////////////////////////////
  CustomerDebt() {
    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность клиентов');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.income_item.income_item_1_name, 'Выручка', '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность клиентов');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.income_item.income_item_2_name, 'Выручка', '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность клиентов');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.income_item.income_item_1_name, 'Выручка', '100');

    cy.get(CSSCreateNewButton).eq(0).click();
    commonActivities.checkModalWindow('Задолженность клиентов');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.income_item.income_item_2_name, 'Выручка', '100');
  }

  /// ////////////////////////////Авансы поставщикам/////////////////////////////////
  AdvancesToSuppliers() {
    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_1_name, credentials.expense_item_category.expense_item_category_1, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_2_name, credentials.expense_item_category.expense_item_category_2, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_3_name, credentials.expense_item_category.expense_item_category_3, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_1, credentials.expense_item_name.expense_item_4_name, credentials.expense_item_category.expense_item_category_4, '50');

    /// /////////////////////////

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_1_name, credentials.expense_item_category.expense_item_category_1, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_2_name, credentials.expense_item_category.expense_item_category_2, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_3_name, credentials.expense_item_category.expense_item_category_3, '50');

    cy.get(CSSCreateNewButton).eq(1).click();
    commonActivities.checkModalWindow('Авансы поставщикам');
    commonActivities.fillInAccountsPaybaleAndReceivable(credentials.counterparties_name.counterparties_name_2, credentials.expense_item_name.expense_item_4_name, credentials.expense_item_category.expense_item_category_4, '50');
  }

  /// /////////////////////////Авансы сотрудникам//////////////////////////////

  AdvancesToEmployees() {
    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Авансы сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_1, 'Зарплата', credentials.expense_item_category.expense_item_category_1, '200');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Авансы сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_2, 'Зарплата', credentials.expense_item_category.expense_item_category_2, '200');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Авансы сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_3, 'Зарплата', credentials.expense_item_category.expense_item_category_3, '200');

    cy.get(CSSCreateNewButton).eq(2).click();
    commonActivities.checkModalWindow('Авансы сотрудникам');
    commonActivities.fillInSalariesAccountsPaybaleAndReceivable(credentials.employee_full_name.employee_full_name_4, 'Зарплата', credentials.expense_item_category.expense_item_category_4, '200');
  }

  /// ///////////////////////Авансы по налогам////////////////////////////
  TaxAdvances() {
    /// /////////////////////Социальный налог////////////////////////////////////
    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_1, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_2, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_3, credentials.taxes.social_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.social_tax, credentials.expense_item_category.expense_item_category_4, credentials.taxes.social_tax, '50');

    // Подоходный налог

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_1, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_2, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInTaxesAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_3, credentials.taxes.income_tax, '50');

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.income_tax, credentials.expense_item_category.expense_item_category_4, credentials.taxes.income_tax, '50');

    // Налог на прибыль

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.profit_tax, credentials.expense_item_category.expense_item_category_5, credentials.taxes.profit_tax, '50');

    /// ////////////////////////НДС/////////////////////////////////

    cy.get(CSSCreateNewButton).eq(3).click();
    commonActivities.checkModalWindow('Авансы по налогам');
    commonActivities.fillInOneTaxAccountsPaybaleAndReceivable(credentials.taxes.Value_added_tax, 'Выручка', credentials.expense_item_category.expense_item_category_7, '50');
  }

  page12() {
    commonActivities.checkTitle('Дебиторская задолженность');
    this.CustomerDebt();
    this.AdvancesToSuppliers();
    this.AdvancesToEmployees();
    this.TaxAdvances();
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  } // Кредиты и займы
  page13() {
    commonActivities.checkTitle('Кредиты и займы');
    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_1);
    cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
    cy.get(CSSInput).eq(1).type('0001');
    cy.get(CSSInput).eq(2).type('1100');
    cy.get(CSSDatepicker).click();
    cy.get(CSSDatepickerMonth).contains('декабрь').click({ force: true });
    cy.get(CSSGreenButton).click();

    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_2);
    cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
    cy.get(CSSInput).eq(1).type('0002');
    cy.get(CSSInput).eq(2).type('2200');
    cy.get(CSSDatepicker).click();
    cy.get(CSSDatepickerRightButton).click({ force: true });
    cy.get(CSSDatepickerMonth).contains('декабрь').click({ force: true });
    cy.get(CSSGreenButton).click();

    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_3);
    cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
    cy.get(CSSInput).eq(1).type('0003');
    cy.get(CSSInput).eq(2).type('3300');
    cy.get(CSSDatepicker).click();
    cy.get(CSSDatepickerRightButton).click({ force: true });
    cy.get(CSSDatepickerMonth).contains('январь').click({ force: true });
    cy.get(CSSGreenButton).click();

    cy.get(CSSCreateNewButton).eq(0).click();
    cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_4);
    cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
    cy.get(CSSInput).eq(1).type('0004');
    cy.get(CSSInput).eq(2).type('4400');
    cy.get(CSSDatepicker).click();
    cy.get(CSSDatepickerRightButton).dblclick({ force: true });
    cy.get(CSSDatepickerMonth).contains('январь').click({ force: true });
    cy.get(CSSGreenButton).click();

    commonActivities.checkToolTip();

    cy.get(CSSNextButton).click();
  }

  // Основные средства
  page14() {
    commonActivities.checkTitle('Основные средства');
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  // Все готово
  page15() {
    commonActivities.checkTitle('Все готово');
    cy.get(CSSBigBoldGreenAmount).should('have.text', '27 800');
    commonActivities.checkToolTip();
    cy.get(CSSNextButton).click();
  }

  GetDashboard() {
    cy.url().should('eq', //'//https://staging.fin-consult.com/login'
    'https://develop.fin-consult.com/login'
    // 'https://app.fin-consult.com/login'
    )
  }
}
export default onboarding;
