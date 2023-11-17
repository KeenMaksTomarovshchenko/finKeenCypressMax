import credentials from '../data/credentials';
import CommonActivities from "../data/CommonActivities";

const commonActivities = new CommonActivities();

const CSSMenuChapter = '[class="text-component bold"]';
const CSSMenuPage = '[class="text-component pointer"]';
const CSSTableCell = '[class="r-cell resizable"]';
const CSSCardTitleCell = '[class="home-indicator__value"]';
const CSSCardRow = '[class="main-indicator-card__content-row"]';
const CSSSecondaryCardTitleBold = '[class="secondary-indicator-card__title-cell"]';
const CSSSecondaryCardCell = '[class="secondary-indicator-card__content-cell"]';
const CSSAccountName = '[class="account-name"]';
const CSSAccountBalance = '[class="account-value"]';
const CSSBoldGreen = '[class="text-component bold green"]';
const CSSMenuBar = '[class="side-panel"]';

function checkCardTitles(i, value1, value2, value3) {
  cy.get(CSSCardTitleCell).eq(i).should('contain', value1);
  cy.get(CSSCardTitleCell).eq(i).should('contain', value2);
  cy.get(CSSCardTitleCell).eq(i).should('contain', value3);
}

function checkCardRows(rowNumber, value1,value2,value3) {
  cy.get(CSSCardRow).eq(rowNumber * 3).should('have.text', 'К месяцу:' + value1);
  cy.get(CSSCardRow).eq(rowNumber * 3 + 1).should('have.text', 'К дню:' + value2);
  cy.get(CSSCardRow).eq(rowNumber * 3 + 2).should('have.text', 'Прошлый период:' + value3);
}
class reports_after_operations {
  dashboard() {

    checkCardTitles(0, '160')
    checkCardTitles(1, '2 190')
    checkCardTitles(2, '-2 030')

    checkCardRows(0,'-','-','0');
    checkCardRows(1,'-','-','0');
    checkCardRows(2,'-','-','0');

    cy.get(CSSSecondaryCardTitleBold).eq(1).should('contain', '33 150');
    cy.get(CSSAccountName).should(($element) => {
      const text = $element.text();
      expect(text).to.include(credentials.account_name.account_name_1);
      expect(text).to.include(credentials.account_name.account_name_2);
    });
    cy.get(CSSAccountBalance).should(($element) => {
      const text = $element.text();
      expect(text).to.include('13 150');
      expect(text).to.include('20 000');
    });

    cy.get(CSSSecondaryCardTitleBold).eq(3).should('contain', '40 120');
    cy.get(CSSSecondaryCardCell).eq(1).should('contain', '0');

    cy.get(CSSSecondaryCardTitleBold).eq(5).should('contain', '2 670');
    cy.get(CSSSecondaryCardCell).eq(3).should('contain', '0');

    cy.get(CSSSecondaryCardTitleBold).eq(7).should('contain', '3 850');
    cy.get(CSSSecondaryCardCell).eq(5).should('contain', '0');

    cy.get(CSSSecondaryCardTitleBold).eq(9).should('have.text', '24 970');
    cy.get(CSSSecondaryCardCell).eq(7).should('have.text', '0');

    cy.get(CSSSecondaryCardTitleBold).eq(11).should('have.text', '0');
    cy.get(CSSSecondaryCardCell).eq(9).should('have.text', '-2 030');
  }
  flow_of_fund() {
    cy.get(CSSMenuBar).find(CSSMenuChapter).contains('Отчеты').click()
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Движение денежных средств').click()
    cy.wait(1000)

    commonActivities.checkCategoryMainValue('[class="custom-row money-from-start"]', '30 000')
    commonActivities.checkCategoryValue('[class="custom-row money-from-start"]', 0,credentials.account_name.account_name_1, '7 600')
    commonActivities.checkCategoryValue('[class="custom-row money-from-start"]', 1,credentials.account_name.account_name_2, '20 000')

    //Выручка

    commonActivities.checkCategoryMainValue('[class="custom-row revenue"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row revenue"]', 0,credentials.income_item.income_item_1_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row revenue"]', 1,credentials.income_item.income_item_2_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row revenue"]', 2,credentials.income_item.income_item_3_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row revenue"]', 3,'Возмещение НДС', '0')

    //Себестоимость

    commonActivities.checkCategoryMainValue('[class="custom-row cost"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row cost"]', 0,credentials.expense_item_name.expense_item_6_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row cost"]', 1,credentials.expense_item_name.expense_item_2_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row cost"]', 2,'Зарплата', '0')
    commonActivities.checkCategoryValue('[class="custom-row cost"]', 3,'Социальный налог', '0')
    commonActivities.checkCategoryValue('[class="custom-row cost"]', 4,'Подоходный налог', '0')

    // Общие

    commonActivities.checkCategoryMainValue('[class="custom-row common"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row common"]', 0,credentials.expense_item_name.expense_item_4_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row common"]', 1,'Зарплата', '0')
    commonActivities.checkCategoryValue('[class="custom-row common"]', 2,'Подоходный налог', '0')
    commonActivities.checkCategoryValue('[class="custom-row common"]', 3,'Социальный налог', '0')

    // Административные

    commonActivities.checkCategoryMainValue('[class="custom-row administrative"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 0,credentials.expense_item_name.expense_item_5_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 1,credentials.expense_item_name.expense_item_1_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 2,'Зарплата', '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 5,'Подоходный налог', '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 3,'Социальный налог', '0')
    commonActivities.checkCategoryValue('[class="custom-row administrative"]', 4,'Погашение НДС', '0')

    // Коммерческие

    commonActivities.checkCategoryMainValue('[class="custom-row commercial"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row commercial"]', 0,credentials.expense_item_name.expense_item_3_name, '0')
    commonActivities.checkCategoryValue('[class="custom-row commercial"]', 1,'Зарплата', '0')
    commonActivities.checkCategoryValue('[class="custom-row commercial"]', 2,'Подоходный налог', '0')
    commonActivities.checkCategoryValue('[class="custom-row commercial"]', 3,'Социальный налог', '0')

    // Послеоперационные

    commonActivities.checkCategoryMainValue('[class="custom-row postoperative"]', '0')
    commonActivities.checkCategoryValue('[class="custom-row postoperative"]', 0,'Проценты по кредитам', '0')
    commonActivities.checkCategoryValue('[class="custom-row postoperative"]', 1,'Налог на прибыль', '0')

    //Товары

    commonActivities.checkCategoryMainValue('[class="custom-row products"]', '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row products"]', '[class="custom-row warehouses"]', 0, '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row products"]', '[class="custom-row warehouses"]', 1, '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row products"]', '[class="custom-row warehouses"]', 2, '0')

    // Кредиты и займы

    // commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 0,credentials.credits.credit_name_1+' Поступление', '0')
    commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 1,credentials.credits.credit_name_3+' Выбытие', '0')
    // commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 2,credentials.credits.credit_name_2+' Поступление', '0')
    commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 3,credentials.credits.credit_name_4+' Выбытие', '0')
    // commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 4,credentials.credits.credit_name_3+' Поступление', '0')
    commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 5,credentials.credits.credit_name_2+' Выбытие', '0')
    // commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 6,credentials.credits.credit_name_4+' Поступление', '0')
    commonActivities.checkCategoryValue('[class="custom-row credits-and-loans"]', 7,credentials.credits.credit_name_1+' Выбытие', '0')

    // Дивиденды

    commonActivities.checkCategoryValue('[class="custom-row dividends"]', 0,'Выплата', '0')

    // Денег на конец месяца

    commonActivities.checkCategoryMainValue('[class="custom-row money-to-end"]', '30 000')
    commonActivities.checkCategoryValue('[class="custom-row money-to-end"]', 0,credentials.account_name.account_name_1, '10 000')
    commonActivities.checkCategoryValue('[class="custom-row money-to-end"]', 1,credentials.account_name.account_name_2, '20 000')
  }
  profits_and_loses(){
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Прибыли и убытки').click()
    cy.wait(1000)

    // Общая выручка

    commonActivities.checkCategoryMainValue('[class="custom-row revenue"]',0)
    commonActivities.checkCategoryValue('[class="custom-row revenue"]',0,credentials.income_item.income_item_1_name,0)
    commonActivities.checkCategoryValue('[class="custom-row revenue"]',1,credentials.income_item.income_item_2_name,0)
    commonActivities.checkCategoryValue('[class="custom-row revenue"]',2,credentials.income_item.income_item_3_name,0)

    // Себестоимость

    commonActivities.checkCategoryMainValue('[class="custom-row cost"]',0)
    commonActivities.checkCategoryValue('[class="custom-row cost"]',0,credentials.expense_item_name.expense_item_2_name,0)
    commonActivities.checkCategoryValue('[class="custom-row cost"]',3,"Социальный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row cost"]',1,"Подоходный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row cost"]',4,"Зарплата",0)
    commonActivities.checkCategoryValue('[class="custom-row cost"]',2,credentials.expense_item_name.expense_item_6_name,0)

    // Маржа

    commonActivities.checkCategoryRow('[class="custom-row marginal-profit"]',0,0)
    commonActivities.checkCategoryRow('[class="custom-row marginal-profit"]',1,0)

    // Общие расходы

    commonActivities.checkCategoryMainValue('[class="custom-row common"]',0)
    commonActivities.checkCategoryValue('[class="custom-row common"]',0,credentials.expense_item_name.expense_item_4_name,0)
    commonActivities.checkCategoryValue('[class="custom-row common"]',3,"Зарплата",0)
    commonActivities.checkCategoryValue('[class="custom-row common"]',2,"Социальный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row common"]',1,"Подоходный налог",0)

    // Валовая

    commonActivities.checkCategoryRow('[class="custom-row gross-profit"]',0,0)
    commonActivities.checkCategoryRow('[class="custom-row gross-profit"]',1,0)

    // Административные

    commonActivities.checkCategoryMainValue('[class="custom-row administrative"]',0)
    commonActivities.checkCategoryValue('[class="custom-row administrative"]',0,credentials.expense_item_name.expense_item_1_name,0)
    commonActivities.checkCategoryValue('[class="custom-row administrative"]',4,credentials.expense_item_name.expense_item_5_name,0)
    commonActivities.checkCategoryValue('[class="custom-row administrative"]',3,"Социальный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row administrative"]',1,"Подоходный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row administrative"]',2,"Зарплата",0)

    // Коммерческие

    commonActivities.checkCategoryMainValue('[class="custom-row commercial"]',0)
    commonActivities.checkCategoryValue('[class="custom-row commercial"]',0,credentials.expense_item_name.expense_item_3_name,0)
    commonActivities.checkCategoryValue('[class="custom-row commercial"]',2,"Зарплата",0)
    commonActivities.checkCategoryValue('[class="custom-row commercial"]',1,"Социальный налог",0)
    commonActivities.checkCategoryValue('[class="custom-row commercial"]',3,"Подоходный налог",0)

    // Операционная

    commonActivities.checkCategoryRow('[class="custom-row operating-profit"]',0,0)
    commonActivities.checkCategoryRow('[class="custom-row operating-profit"]',1,0)

    // Послеоперационные расходы

    commonActivities.checkCategoryMainValue('[class="custom-row post-operating-spendings"]',0)
    commonActivities.checkCategoryValue('[class="custom-row post-operating-spendings"]',1,"Проценты по кредитам",0)
    commonActivities.checkCategoryValue('[class="custom-row post-operating-spendings"]',2,"Налог на прибыль",0)
    commonActivities.checkCategoryValue('[class="custom-row post-operating-spendings"]',0,"Амортизация",0)

    // Чистая

    commonActivities.checkCategoryRow('[class="custom-row net-profit"]',0,0)
    commonActivities.checkCategoryRow('[class="custom-row net-profit"]',1,0)

  }
  balance() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Баланс').click()
    cy.wait(1000)

    //Активы

    commonActivities.checkCategoryMainValue('[class="custom-row assets"]','42 100')

    //Товары

    commonActivities.checkCategoryMainValue('[class="custom-row stocks"]','10 000')
    commonActivities.checkCategoryValue('[class="custom-row stocks"]',0, 'Склад №1', '1 000')
    commonActivities.checkCategoryValue('[class="custom-row stocks"]',1, 'Склад №2', '5 000')
    commonActivities.checkCategoryValue('[class="custom-row stocks"]',2, 'Склад №3', '4 000')

    //Деньги

    commonActivities.checkCategoryMainValue('[class="custom-row funds"]','30 000')
    commonActivities.checkCategoryValue('[class="custom-row funds"]',0, credentials.account_name.account_name_1, '10 000')
    commonActivities.checkCategoryValue('[class="custom-row funds"]',1, credentials.account_name.account_name_2, '20 000')

    //Дебиторка

    commonActivities.checkCategoryMainValue('[class="custom-row accounts-receivable"]','2 100')
    commonActivities.checkCategoryValue('[class="custom-row accounts-receivable"]',0, 'Задолженность клиентов', '400')
    commonActivities.checkCategoryValue('[class="custom-row accounts-receivable"]',1, 'Авансы поставщикам', '400')
    commonActivities.checkCategoryValue('[class="custom-row accounts-receivable"]',2, 'Авансы сотрудникам', '800')
    commonActivities.checkCategoryValue('[class="custom-row accounts-receivable"]',3, 'Авансы по налогам', '500')

    //Пассивы

    commonActivities.checkCategoryMainValue('[class="custom-row passive"]','42 100')

    //Собственный капитал

    commonActivities.checkCategoryMainValue('[class="custom-row equity"]','27 800')
    commonActivities.checkCategoryValue('[class="custom-row equity"]',0, 'Собственные средства', '27 800')
    commonActivities.checkCategoryValue('[class="custom-row equity"]',1, 'Накопленная прибыль', '0')

    //Кредиты (долгосрочные)

    commonActivities.checkCategoryMainValue('[class="custom-row long-term"]','6 600')
    commonActivities.checkCategoryValue('[class="custom-row long-term"]',0,credentials.credits.credit_name_4, '4 400')
    commonActivities.checkCategoryValue('[class="custom-row long-term"]',1,credentials.credits.credit_name_2, '2 200')

    //Кредиты (краткосрочные)

    commonActivities.checkCategoryMainValue('[class="custom-row short-term"]','4 400')
    commonActivities.checkCategoryValue('[class="custom-row short-term"]',0,credentials.credits.credit_name_3, '3 300')
    commonActivities.checkCategoryValue('[class="custom-row short-term"]',1,credentials.credits.credit_name_1, '1 100')

    //Кредиторская задолженность

    commonActivities.checkCategoryMainValue('[class="custom-row accounts-payable"]','3 300')
    commonActivities.checkCategoryValue('[class="custom-row accounts-payable"]',0, 'Задолженность перед поставщиками', '800')
    commonActivities.checkCategoryValue('[class="custom-row accounts-payable"]',1, 'Авансы покупателей', '800')
    commonActivities.checkCategoryValue('[class="custom-row accounts-payable"]',2, 'Задолженность сотрудникам', '1 200')
    commonActivities.checkCategoryValue('[class="custom-row accounts-payable"]',3, 'Задолженность по налогам', '500')

    //Сходимость баланса

    cy.get('[class="custom-row balance-convergence"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0')
  }

  accounts_receivable() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Дебиторская задолженность').click()
    cy.wait(1000)

    //Текущая

    cy.get(CSSBoldGreen).should("have.text",'2 100')

    //Задолженность клиентов

    commonActivities.checkCategoryMainValue('[class="custom-row customers-debt"]','400')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row customers-debt"]', 0, '200', 2)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row customers-debt"]', 1, '200', 2)

    //Авансы поставщикам

    commonActivities.checkCategoryMainValue('[class="custom-row advances-to-suppliers"]','400')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-suppliers"]', 0, '200', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-suppliers"]', 1, '200', 4)

    //Авансы сотрудникам

    commonActivities.checkCategoryMainValue('[class="custom-row advances-to-employees"]','800')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-employees"]', 0, '200', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-employees"]', 1, '200', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-employees"]', 2, '200', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row advances-to-employees"]', 3, '200', 1)

    //Авансы по налогам

    commonActivities.checkCategoryMainValue('[class="custom-row taxes-advances"]','500')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row taxes-advances"]', 0, '200', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row taxes-advances"]', 1, '200', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row taxes-advances"]', 2, '50', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row taxes-advances"]', 3, '50', 2)

    //Изменение

    cy.get(CSSMenuChapter).contains('Изменение').click()

    commonActivities.checkCategoryMainValue('[class="custom-row begin-period-debt"]','2 100')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row customers-debt"]', 0, '400')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row advances-to-suppliers"]', 0, '400')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row advances-to-employees"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row taxes-advances"]', 0, '500')

    commonActivities.checkCategoryMainValue('[class="custom-row changes-by-period"]','0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row customers-debt"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row advances-to-suppliers"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row advances-to-employees"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row taxes-advances"]', 0, '0')

    commonActivities.checkCategoryMainValue('[class="custom-row end-period-debt"]','2 100')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row customers-debt"]', 0, '400')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row advances-to-suppliers"]', 0, '400')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row advances-to-employees"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row taxes-advances"]', 0, '500')
  }
  accounts_payable() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Кредиторская задолженность').click()
    cy.wait(1000)

    //Текущая

    cy.get(CSSBoldGreen).should("have.text",'3 300')

    //Задолженность перед поставщиками

    commonActivities.checkCategoryMainValue('[class="custom-row debt-to-suppliers"]','800')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-suppliers"]', 0, '400', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-suppliers"]', 1, '400', 4)

    //Авансы покупателей

    commonActivities.checkCategoryMainValue('[class="custom-row buyers-advances"]','800')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row buyers-advances"]', 0, '400', 2)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row buyers-advances"]', 1, '400', 2)

    //Задолженность сотрудникам

    commonActivities.checkCategoryMainValue('[class="custom-row debt-to-employees"]','1 200')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-employees"]', 0, '300', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-employees"]', 1, '300', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-employees"]', 2, '300', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row debt-to-employees"]', 3, '300', 1)

    //Задолженность по налогам

    commonActivities.checkCategoryMainValue('[class="custom-row tax-arrears"]','500')
    commonActivities.checkClickAndGetModalWindow('[class="custom-row tax-arrears"]', 0, '200', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row tax-arrears"]', 1, '200', 4)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row tax-arrears"]', 2, '50', 1)
    commonActivities.checkClickAndGetModalWindow('[class="custom-row tax-arrears"]', 3, '50', 2)

    //Изменение

    cy.get(CSSMenuChapter).contains('Изменение').click()

    commonActivities.checkCategoryMainValue('[class="custom-row begin-period-debt"]','3 300')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row debt-to-suppliers"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row buyers-advances"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row debt-to-employees"]', 0, '1 200')
    commonActivities.checkCustomCategoryValue('[class="custom-row begin-period-debt"]', '[class="custom-row tax-arrears"]', 0, '500')

    commonActivities.checkCategoryMainValue('[class="custom-row changes-by-period"]','0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row debt-to-suppliers"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row buyers-advances"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row debt-to-employees"]', 0, '0')
    commonActivities.checkCustomClicableCategoryValue('[class="custom-row changes-by-period"]', '[class="custom-row tax-arrears"]', 0, '0')

    commonActivities.checkCategoryMainValue('[class="custom-row end-period-debt"]','3 300')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row debt-to-suppliers"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row buyers-advances"]', 0, '800')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row debt-to-employees"]', 0, '1 200')
    commonActivities.checkCustomCategoryValue('[class="custom-row end-period-debt"]', '[class="custom-row tax-arrears"]', 0, '500')
  }
  warehouses_and_products(){
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товарные запасы').click()
    cy.wait(1000)

    /////Текущая//////

    cy.get(CSSMenuChapter).contains('Текущая').click()

    cy.get(CSSBoldGreen).should('have.text','10 000')
    cy.get(CSSMenuChapter).eq(2).should('have.text','10 000')

    cy.get(CSSSortableSell).contains('Наименование').click()

    commonActivities.checkRowAndSells(0, 'Склад №1',credentials.product_name.product_1_name,credentials.units.unit_1,'100','10','1 000')
    commonActivities.checkRowAndSells(1, 'Склад №2',credentials.product_name.product_2_name,credentials.units.unit_2,'200','10','2 000')
    commonActivities.checkRowAndSells(2, 'Склад №2',credentials.product_name.product_3_name,credentials.units.unit_3,'300','10','3 000')
    commonActivities.checkRowAndSells(3, 'Склад №3',credentials.product_name.product_4_name,credentials.units.unit_4,'400','10','4 000')

    /////Изменение/////

    cy.get(CSSMenuChapter).contains('Изменение').click()
    cy.get(CSSBoldGreen).should('have.text','10 000')

    commonActivities.checkCategoryMainValue('[class="custom-row products-before-period"]', '10 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-before-period"]','[class="custom-row"]',0,'1 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-before-period"]','[class="custom-row"]',1,'5 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-before-period"]','[class="custom-row"]',2,'4 000')

    commonActivities.checkCategoryMainValue('[class="custom-row incomes-to-warehouses"]', '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row incomes-to-warehouses"]','[class="custom-row"]',0,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row incomes-to-warehouses"]','[class="custom-row"]',1,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row incomes-to-warehouses"]','[class="custom-row"]',2,'0')

    commonActivities.checkCategoryMainValue('[class="custom-row expenses-from-warehouses"]', '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row expenses-from-warehouses"]','[class="custom-row"]',0,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row expenses-from-warehouses"]','[class="custom-row"]',1,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row expenses-from-warehouses"]','[class="custom-row"]',2,'0')

    commonActivities.checkCategoryMainValue('[class="custom-row changes-by-period""]', '0')
    commonActivities.checkCustomCategoryValue('[class="custom-row changes-by-period""]','[class="custom-row"]',0,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row changes-by-period""]','[class="custom-row"]',1,'0')
    commonActivities.checkCustomCategoryValue('[class="custom-row changes-by-period""]','[class="custom-row"]',2,'0')

    commonActivities.checkCategoryMainValue('[class="custom-row products-after-period""]', '10 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-after-period""]','[class="custom-row"]',0,'1 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-after-period""]','[class="custom-row"]',1,'5 000')
    commonActivities.checkCustomCategoryValue('[class="custom-row products-after-period""]','[class="custom-row"]',2,'4 000')
  }
}

export default reports_after_operations;
