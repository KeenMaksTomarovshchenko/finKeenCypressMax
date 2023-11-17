import credentials from '../data/credentials';
import CommonActivities from '../data/CommonActivities';

const commonActivities = new CommonActivities();

const CSSBurgerMenu = '[class="expand-icon"]';
const CSSMenuBar = '[class="side-panel"]';
const CSSMenuPage = '[class="text-component"]';
const CSSMenuChapter = '[class="text-component bold"]';
const CSSInput = '.input-field';
const CSSRow = '[class="row"]';
const CSSSell = '[class="r-cell"]'
const CSSSortableSell = '[class="h-cell sortable"]'

class directories {
  company_data() {
    cy.get(CSSBurgerMenu).click();
    cy.get(CSSMenuBar).find(CSSMenuChapter).contains('Справочники').click();

    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Данные фирмы').click();
    commonActivities.checkTitle('Данные фирмы')

    cy.get(CSSInput).eq(0).should('have.text',credentials.company_full_name)
    cy.get(CSSInput).eq(1).should('have.text',credentials.company_short_name)
    cy.get(CSSInput).eq(2).should('have.text',credentials.company_tax_number)
    cy.get(CSSInput).eq(3).should('have.text',commonActivities.CurrentDate)
  }
  accounts() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Счета').click();
    commonActivities.checkTitle('Счета')

    cy.get(CSSRow).eq(0).find(CSSSell).eq(0).should('have.text',commonActivities.CurrentDate)
    cy.get(CSSRow).eq(0).find(CSSSell).eq(1).should('have.text',credentials.account_type.account_type_1)
    cy.get(CSSRow).eq(0).find(CSSSell).eq(2).should('have.text',credentials.account_name.account_name_1)
    cy.get(CSSRow).eq(0).find(CSSSell).eq(3).should('have.text','10 000')

    cy.get(CSSRow).eq(1).find(CSSSell).eq(0).should('have.text',commonActivities.CurrentDate)
    cy.get(CSSRow).eq(1).find(CSSSell).eq(1).should('have.text',credentials.account_type.account_type_2)
    cy.get(CSSRow).eq(1).find(CSSSell).eq(2).should('have.text',credentials.account_name.account_name_2)
    cy.get(CSSRow).eq(1).find(CSSSell).eq(3).should('have.text','20 000')

  }
  income_items() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Статьи доходов').click();
    commonActivities.checkTitle('Статьи доходов')

    cy.get(CSSSortableSell).contains('Статья дохода').click()

    cy.get(CSSRow).eq(0).find(CSSSell).eq(0).should('have.text','Выручка')
    cy.get(CSSRow).eq(0).find(CSSSell).eq(1).should('have.text',credentials.expense_item_category.expense_item_category_7)

    cy.get(CSSRow).eq(1).find(CSSSell).eq(0).should('have.text','Выручка')
    cy.get(CSSRow).eq(1).find(CSSSell).eq(1).should('have.text',credentials.income_item.income_item_1_name)

    cy.get(CSSRow).eq(2).find(CSSSell).eq(0).should('have.text','Выручка')
    cy.get(CSSRow).eq(2).find(CSSSell).eq(1).should('have.text',credentials.income_item.income_item_2_name)

    cy.get(CSSRow).eq(3).find(CSSSell).eq(0).should('have.text','Выручка')
    cy.get(CSSRow).eq(3).find(CSSSell).eq(1).should('have.text',credentials.income_item.income_item_3_name)
  }
  expense_items() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Статьи расходов').click();
    commonActivities.checkTitle('Статьи расходов')

    cy.get(CSSSortableSell).contains('Статья расходв').click()
  }
  employees() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Сотрудники').click();
    commonActivities.checkTitle('Сотрудники')


  }
  counterparties() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Контрагенты').click();
    commonActivities.checkTitle('Контрагенты')


  }
  warehouses() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Склады').click();
    commonActivities.checkTitle('Склады')


  }
  taxes() {
    cy.get(CSSMenuBar).find(CSSMenuPage).contains('Налоги').click();
    commonActivities.checkTitle('Налоги')


  }
}
export default directories;
