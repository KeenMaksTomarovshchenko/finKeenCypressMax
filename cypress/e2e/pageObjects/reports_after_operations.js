import credentials from '../data/credentials';

const CSSBurgerMenu = '[class="expand-icon"]';
const CSSMenuChapter = '[class="text-component bold"]';
const CSSMenuPage = '[class="text-component pointer"]';
const CSSTableHeaderRow = '[class="item-header opened"]';
const CSSTableContentChapter = '[class="item-content opened"]';
const CSSTableCell = '[class="r-cell resizable"]';
const CSSTableCellClickable = '[class="r-cell resizable clickable"]';
const CSSTableContentRow = '[class="custom-row"]';
const CSSTableContentRowProducts = '[class="custom-row products"]';
const CSSCardTitleCell = '[class="home-indicator__value"]';
const CSSCardRow = '[class="main-indicator-card__content-row"]';
const CSSSecondaryCardTitleBold = '[class="secondary-indicator-card__title-cell"]';
const CSSSecondaryCardCell = '[class="secondary-indicator-card__content-cell"]';
const CSSAccountName = '[class="account-name"]';
const CSSAccountBalance = '[class="account-value"]';
const CSSModalWindow = '[class="modal-block-wrapper"]';
const CSSCloseButton = '[class="cross-icon-wrapper"]';
const CSSRow = '[class="row"]';
const CSSBoldGreen = '[class="text-component bold green"]';

class reports_after_operations {
  dashboard() {
    cy.get(CSSCardTitleCell).eq(0).should('contain', '160');
    cy.get(CSSCardRow).eq(0).should('contain', '-');
    cy.get(CSSCardRow).eq(1).should('contain', '-');
    cy.get(CSSCardRow).eq(2).should('contain', '0');

    cy.get(CSSCardTitleCell).eq(1).should('contain', '2 190');
    cy.get(CSSCardRow).eq(3).should('contain', '-');
    cy.get(CSSCardRow).eq(4).should('contain', '-');
    cy.get(CSSCardRow).eq(5).should('contain', '0');

    cy.get(CSSCardTitleCell).eq(2).should('contain', '-2 030');
    cy.get(CSSCardRow).eq(6).should('contain', '-');
    cy.get(CSSCardRow).eq(7).should('contain', '-');
    cy.get(CSSCardRow).eq(8).should('contain', '0');

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
    cy.get(CSSBurgerMenu).click();
    cy.get(CSSMenuChapter).contains('Отчеты').click();
    cy.get(CSSMenuPage).contains('Движение денежных средств').click();
    cy.wait(1000);

    cy.get('[class="custom-row money-from-start"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '30 000');

    cy.get('[class="custom-row money-from-start"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', 'Счёт 1')
      .find(CSSTableCell)
      .last()
      .should('have.text', '10 000');

    cy.get('[class="custom-row money-from-start"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Счёт 2')
      .find(CSSTableCell)
      .last()
      .should('have.text', '20 000');

    // Выручка

    cy.get('[class="custom-row revenue"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '200');

    cy.get('[class="custom-row revenue"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', credentials.income_item.income_item_1_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '200');

    cy.get('[class="custom-row revenue"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', credentials.income_item.income_item_2_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row revenue"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', 'Возмещение НДС')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Себестоимость

    cy.get('[class="custom-row cost"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row cost"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', credentials.expense_item_name.expense_item_2_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row cost"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Зарплата')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row cost"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', 'Социальный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row cost"]')
      .find(CSSTableContentRow)
      .eq(3)
      .should('contain', 'Подоходный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Общие

    cy.get('[class="custom-row common"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row common"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', credentials.expense_item_name.expense_item_4_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row common"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Зарплата')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row common"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', 'Подоходный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row common"]')
      .find(CSSTableContentRow)
      .eq(3)
      .should('contain', 'Социальный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Административные

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '600');

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', credentials.expense_item_name.expense_item_1_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '300');

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Зарплата')
      .find(CSSTableCell)
      .last()
      .should('have.text', '150');

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', 'Социальный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '150');

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableContentRow)
      .eq(3)
      .should('contain', 'Погашение НДС')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row administrative"]')
      .find(CSSTableContentRow)
      .eq(4)
      .should('contain', 'Подоходный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Коммерческие

    cy.get('[class="custom-row commercial"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row commercial"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', credentials.expense_item_name.expense_item_3_name)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row commercial"')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Зарплата')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row commercial"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', 'Подоходный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row commercial"]')
      .find(CSSTableContentRow)
      .eq(3)
      .should('contain', 'Социальный налог')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Послеоперационные

    cy.get('[class="custom-row postoperative"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    cy.get('[class="custom-row postoperative"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', 'Проценты по кредитам')
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    cy.get('[class="custom-row postoperative"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Налог на прибыль')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Товары

    cy.get('[class="custom-row operation-activity"]').eq(1)
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row operation-activity"]').eq(1)
      .find(CSSTableContentRowProducts)
      .eq(0)
      .should('contain', 'Склад 1')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row operation-activity"]').eq(1)
      .find(CSSTableContentRowProducts)
      .eq(1)
      .should('contain', 'Склад 2')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row operation-activity"]').eq(1)
      .find(CSSTableContentRowProducts)
      .eq(2)
      .should('contain', 'Склад 3')
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    // Кредиты

    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', `${credentials.credits.credit_name_1} Поступление`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', `${credentials.credits.credit_name_1} Выбытие`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(2)
      .should('contain', `${credentials.credits.credit_name_2} Поступление`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(3)
      .should('contain', `${credentials.credits.credit_name_2} Выбытие`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(4)
      .should('contain', `${credentials.credits.credit_name_3} Поступление`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(5)
      .should('contain', `${credentials.credits.credit_name_3} Выбытие`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(6)
      .should('contain', `${credentials.credits.credit_name_4} Поступление`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(7)
      .should('contain', `${credentials.credits.credit_name_4} Выбытие`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(8)
      .should('contain', `${credentials.credits.credit_name_5} Поступление`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '5 000');
    cy.get('[class="custom-row credits-and-loans"]')
      .find(CSSTableContentRow)
      .eq(9)
      .should('contain', `${credentials.credits.credit_name_5} Выбытие`)
      .find(CSSTableCell)
      .last()
      .should('have.text', '1 000');

    // Денег на конец месяца

    cy.get('[class="custom-row money-to-end"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '32 800');

    cy.get('[class="custom-row money-to-end"]')
      .find(CSSTableContentRow)
      .eq(0)
      .should('contain', 'Счёт 1')
      .find(CSSTableCell)
      .last()
      .should('have.text', '12 800');

    cy.get('[class="custom-row money-to-end"]')
      .find(CSSTableContentRow)
      .eq(1)
      .should('contain', 'Счёт 2')
      .find(CSSTableCell)
      .last()
      .should('have.text', '20 000');
  }
  balance() {
    cy.get(CSSMenuPage).contains('Баланс').click();
    cy.wait(1000);

    // Активы

    cy.get('[class="custom-row assets"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '43 970');

    // Товары

    cy.get('[class="custom-row stocks"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '8 500');

    cy.get('[class="custom-row stocks"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '300');

    cy.get('[class="custom-row stocks"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '4 200');

    cy.get('[class="custom-row stocks"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .last()
      .should('have.text', '4 000');

    // Деньги

    cy.get('[class="custom-row funds"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '32 800');

    cy.get('[class="custom-row funds"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '12 800');

    cy.get('[class="custom-row funds"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '20 000');

    // Дебиторка

    cy.get('[class="custom-row accounts-receivable"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '2 670');

    cy.get('[class="custom-row accounts-receivable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    cy.get('[class="custom-row accounts-receivable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '550');

    cy.get('[class="custom-row accounts-receivable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .last()
      .should('have.text', '950');

    cy.get('[class="custom-row accounts-receivable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .last()
      .should('have.text', '670');

    // Пассивы

    cy.get('[class="custom-row passive"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '43 110');

    // Собственный капитал

    cy.get('[class="custom-row equity"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '24 810');

    cy.get('[class="custom-row equity"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '27 650');

    cy.get('[class="custom-row equity"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '-2 840');

    // Кредиты (долгосрочные)

    cy.get('[class="custom-row long-term"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '10 600');

    cy.get('[class="custom-row long-term"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '2 200');

    cy.get('[class="custom-row long-term"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '4 400');

    // Кредиты (краткосрочные)

    cy.get('[class="custom-row short-term"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '4 400');

    cy.get('[class="custom-row short-term"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '1 100');

    cy.get('[class="custom-row short-term"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '3 300');

    // Кредиторская задолженность

    cy.get('[class="custom-row accounts-payable"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '3 300');

    cy.get('[class="custom-row accounts-payable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row accounts-payable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row accounts-payable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .last()
      .should('have.text', '1 200');

    cy.get('[class="custom-row accounts-payable"]')
      .find(CSSTableContentChapter)
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    // Сходимость баланса

    cy.get('[class="custom-row balance-convergence"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '150');
  }

  accounts_receivable() {
    cy.get(CSSMenuPage).contains('Дебиторская задолженность').click();
    cy.wait(1000);

    // Текущая

    cy.get(CSSBoldGreen).should('have.text', '2 100');

    // Задолженность клиентов

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '400');

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Авансы поставщикам

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '400');

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Авансы сотрудникам


    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '800');

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Авансы по налогам

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '800');

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .should('have.text', '50')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .should('have.text', '50')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Изменение

    cy.get(CSSMenuChapter).contains('Изменение').click();

    cy.get('[class="custom-row begin-period-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '2 100');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row customers-debt"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '400');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '400');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row advances-to-employees"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row taxes-advances"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    cy.get('[class="custom-row changes-by-period"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row customers-debt"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row advances-to-employees"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row taxes-advances"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');


    cy.get('[class="custom-row end-period-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '2 100');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row customers-debt"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '400');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '400');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row advances-to-employees"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row taxes-advances"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');
  }
  accounts_payable() {
    cy.get(CSSMenuPage).contains('Кредиторская задолженность').click();
    cy.wait(1000);

    cy.get(CSSBoldGreen).should('have.text', '3 300');

    // Текущая

    cy.get(CSSBoldGreen).should('have.text', '2 100');

    // Задолженность перед поставщиками

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '800');

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '400')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row customers-debt"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '400')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Авансы покупателей

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '800');

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '400')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-suppliers"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '400')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Задолженность сотрудникам

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '1200');

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '300')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '300')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .should('have.text', '300')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row advances-to-employees"]')
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .should('have.text', '300')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Задолженность по налогам

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .should('have.text', '800');

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(0)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(1)
      .find(CSSTableCell)
      .should('have.text', '200')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 4);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(2)
      .find(CSSTableCell)
      .should('have.text', '50')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 1);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    cy.get('[class="custom-row taxes-advances"]')
      .find(CSSTableContentRow)
      .eq(3)
      .find(CSSTableCell)
      .should('have.text', '50')
      .click();

    cy.get(CSSModalWindow)
      .find(CSSRow)
      .should('have.length', 2);

    cy.wait(1000);
    cy.get(CSSCloseButton);

    // Изменение

    cy.get(CSSMenuChapter).contains('Изменение').click();

    cy.get('[class="custom-row begin-period-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '3 300');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row debt-to-suppliers"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row buyers-advances"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row debt-to-employees"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '1 200');

    cy.get('[class="custom-row begin-period-debt"]')
      .find('[class="custom-row tax-arrears"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');

    cy.get('[class="custom-row changes-by-period"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row debt-to-suppliers"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row buyers-advances"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row debt-to-employees"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row changes-by-period"]')
      .find('[class="custom-row tax-arrears"]')
      .find(CSSTableCellClickable)
      .last()
      .should('have.text', '0');

    cy.get('[class="custom-row end-period-debt"]')
      .find(CSSTableHeaderRow)
      .find(CSSTableCell)
      .last()
      .should('have.text', '3 300');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row debt-to-suppliers"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row buyers-advances"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '800');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row debt-to-employees"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '1 200');

    cy.get('[class="custom-row end-period-debt"]')
      .find('[class="custom-row tax-arrears"]')
      .find(CSSTableCell)
      .last()
      .should('have.text', '500');
  }
}

export default reports_after_operations;
