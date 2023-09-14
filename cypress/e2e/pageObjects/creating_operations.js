
import Locators from "../data/locators";
import credentials from "../data/credentials";
const locators = new Locators()

class creating_operations{
    open_menu_chapter(){
        cy.wait(1000)
        locators.OpenBurgerMenu()
        cy.wait(1000)
        locators.OpenMenuСhapter().contains('Новая операция').click()
    }
    money_transaction(){
        locators.OpenMenuPage().contains('Денежная транзакция').click()
        locators.getDropdown().eq(1).type(credentials.account_name.account_name_1+'{enter}')
        locators.getDropdownValue().eq(1).should('contain',credentials.account_name.account_name_1+' / 10 000')
        locators.getInputField().eq(1).type('1000')
        locators.getDropdown().eq(2).type(credentials.account_name.account_name_2+'{enter}')
        locators.getDropdownValue().eq(2).should('contain',credentials.account_name.account_name_2+' / 20 000')
        locators.getGreenAmount().should('contain','21 000')
        locators.getButton().click()

        cy.wait(1000)

        locators.OpenMenuPage().contains('Денежная транзакция').click()
        locators.getDropdown().eq(1).type(credentials.account_name.account_name_2+'{enter}')
        cy.wait(1000)
        locators.getDropdownValue().eq(1).should('contain',credentials.account_name.account_name_2+' / 21 000')
        locators.getInputField().eq(1).type('1000')
        locators.getDropdown().eq(2).type(credentials.account_name.account_name_1+'{enter}')
        locators.getDropdownValue().eq(2).should('contain',credentials.account_name.account_name_1+' / 9 000')
        locators.getGreenAmount().should('contain','10 000')
        locators.getButton().click()
    }
    operations_with_doc_sell(){
        locators.OpenMenuPage().contains('С документом').click()
//Реквизиты
        locators.getDropdown().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
        locators.getDropdown().eq(1).type('Invoice'+'{enter}')
//Транзакции
        locators.getCreateNewButton().eq(2).click()
        locators.getDropdown().eq(2).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(1).type('100')
        locators.getSubmitButton().click()
//Позиции
        locators.getCreateNewButton().eq(3).click()
        locators.getInputField().eq(1).type('Test')
        locators.getDropdown().eq(4).type(credentials.units.unit_1)
        locators.getDropdown().eq(5).type('25'+'{enter}')
        locators.getInputField().eq(4).type('100')
        locators.getQuantity().type('1')
        locators.getDropdown().eq(3).type(credentials.income_item.income_item_1_name+'{enter}')
        locators.getDropdownValue().eq(2).should('contain','Выручка')
        locators.getSubmitButton().click()
        cy.get('[name="obligationFulfilled"]').click()
        locators.getButton().click()
    }
    operation_with_doc_buy(){
        cy.wait(1000)
        locators.OpenMenuPage().contains('С документом').click()
        locators.getCreateNewButton().contains('Покупка').click()
        //Реквизиты
        locators.getDropdown().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
        locators.getDropdown().eq(1).type('Invoice'+'{enter}')
        locators.getInputField().eq(0).type('01')
//Транзакции
        locators.getCreateNewButton().eq(2).click()
        locators.getDropdown().eq(2).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(1).type('150')
        locators.getSubmitButton().click()
//Позиции
        locators.getCreateNewButton().eq(3).click()
        locators.getInputField().eq(1).type('Test')
        locators.getDropdown().eq(3).click()
        locators.getDropdownOption().contains(credentials.expense_item_name.expense_item_1_name).click()
        locators.getDropdownValue().eq(2).should('contain',credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().eq(4).type('150')
        locators.getQuantity().type('1')
        locators.getDropdown().eq(4).type(credentials.units.unit_1)
        locators.getDropdown().eq(5).type('25'+'{enter}')
        locators.getSubmitButton().click()
        cy.get('[name="obligationFulfilled"]').click()
        locators.getButton().click()
    }
    operation_with_salaries(){
        ////////////1
        cy.wait(1000)
        locators.OpenMenuPage().contains('С зарплатами').click()

        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.employee_full_name_trim.employee_full_name_1+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_1)
        locators.getInputField().eq(1).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ////////////2
        cy.wait(1000)
        locators.OpenMenuPage().contains('С зарплатами').click()

        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.employee_full_name_trim.employee_full_name_2+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_2)
        locators.getInputField().eq(1).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ////////////3
        cy.wait(1000)
        locators.OpenMenuPage().contains('С зарплатами').click()

        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.employee_full_name_trim.employee_full_name_3+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_3)
        locators.getInputField().eq(1).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ////////////4
        cy.wait(1000)
        locators.OpenMenuPage().contains('С зарплатами').click()

        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.employee_full_name_trim.employee_full_name_4+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_4)
        locators.getInputField().eq(1).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()
    }
    operation_with_taxes_1(){
        ///////////////1
        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.social_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.social_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        //////////////////////2

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.social_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.social_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ////////////////////3

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.social_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.social_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ///////////////////4

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.social_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.social_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()
    }
    operation_with_taxes_2(){
        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.income_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.income_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ///////////////1

        //////////////////////2

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.income_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.income_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ////////////////////3

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.income_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.income_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()

        ///////////////////4

        cy.wait(1000)
        locators.OpenMenuPage().contains('С налогами').click()
        locators.getDropdown().eq(0).click()
        locators.getDropdown().eq(0).type('Декларация'+'{enter}')
        locators.getDropdown().eq(1).click()
        locators.getDropdown().eq(1).type(credentials.taxes.income_tax+'{enter}')

        locators.getCreateNewButton().eq(2).click()
        locators.getDropdownValue().eq(1).should('contain',credentials.taxes.income_tax)
        locators.getDropdown().eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(4).click()
        locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(0).type('150')
        locators.getGreenButton().click()

        locators.getButton().click()
    }
        operation_with_self_capital(){
            cy.wait(1000)
            locators.OpenMenuPage().contains('С собственным капиталом').click()

            locators.getBoldText().eq(0).should("contain",'25 960')
            locators.getHugeBoldNumber().eq(0).should("contain",'27 800')
            locators.getHugeBoldNumber().eq(1).should("contain",'-1 840')
            locators.getDropdown().eq(0).click()
            locators.getAccountsAndCurrentNumber().contains(credentials.account_name.account_name_1+' / 8 150').click()
            locators.getInputField().eq(0).type('150')
            locators.getButton().click()
            locators.getBoldText().eq(0).should("contain",'25 810')
            locators.getHugeBoldNumber().eq(0).should("contain",'27 650')
            locators.getRowDocument().eq(0).should("contain", 'Выплата').and("contain", 'Дивиденды').and("contain", '150')

        }
        operations_with_credits(){
            cy.wait(1000)
            locators.OpenMenuPage().contains('С кредитом / займом').click()
            locators.getDropdown().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
            locators.getDropdown().eq(1).type('Соглашение'+'{enter}')
            locators.getInputField().eq(0).type('1001')

            locators.getCreateNewButton().eq(2).click()
            locators.getDropdown().eq(3).type(credentials.account_name.account_name_1+'{enter}')
            locators.getInputField().eq(1).type('5000')
            locators.getGreenButton().click()

            locators.getInputField().eq(1).type(credentials.credits.credit_name_5)
            locators.getDatapickerInput().eq(1).click()
            cy.get('.unstyled-button.right').dblclick()
            cy.get('.custom-month-cell-wrapper').contains('октябрь').click();
            locators.getInputField().eq(2).type('5000')

            locators.getButton().click()
        }
}
export default creating_operations