import credentials from "../data/credentials";

const CSSBurgerMenu = '[class="expand-icon"]'
const CSSMenuChapter = '[class="text-component bold"]'
const CSSMenuPage = '[class="text-component pointer"]'
const CSSDropdown = '.mt-react-select__input-container'
const CSSInput = '.input-field'
const CSSDropdownValue = '.mt-react-select__single-value'
const CSSDropdownOption = '.tooltip-sign'
const CSSDatepicker = '[class="react-datepicker__input-container "]'
const CSSGreenAmount = '.text-component amount big bold link-accent'
const CSSButton = '[class="main-button"]'
const CSSCreateNewButton = '[class="text-component bold"]'
const CSSSubmitButton = '[class="unstyled-button round-submit-button"]'
const CSSGreenButton = '[class="main-button add-btn"]'
const CSSQuantity = '[name="quantity"]'
const CSSCheckboxObligation = '[name="obligationFulfilled"]'
const CSSAccountNameAndBalance = '[class="text-component option-text-wrapper"]'
const CSSBoldNumber = 'b'
const CSSHugeBoldNumber = '[class="text-component amount huge bold link-accent"]'
const CSSBoldGreenNumber = '[class="text-component bold amount"]'
const CSSDocumentRow = '[class="row"]'
const CSSTab = '[class="tab"]'
class creating_operations{
    open_menu_chapter(){
        cy.wait(1000)
        cy.get(CSSBurgerMenu).click()
        cy.wait(1000)
        cy.get(CSSMenuChapter).contains('Новая операция').click()
    }
    money_transaction(){
        cy.get(CSSMenuPage).contains('Денежная транзакция').click()
       cy.get(CSSDropdown).eq(1).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.account_name.account_name_1+' / 10 000')
       cy.get(CSSInput).eq(1).type('1000')
       cy.get(CSSDropdown).eq(2).type(credentials.account_name.account_name_2+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.account_name.account_name_2+' / 20 000')
       cy.get(CSSBoldGreenNumber).should('contain','21 000')
       cy.get(CSSButton).click()

        cy.wait(1000)

        cy.get(CSSMenuPage).contains('Денежная транзакция').click()
       cy.get(CSSDropdown).eq(1).type(credentials.account_name.account_name_2+'{enter}')
        cy.wait(1000)
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.account_name.account_name_2+' / 21 000')
       cy.get(CSSInput).eq(1).type('1000')
       cy.get(CSSDropdown).eq(2).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.account_name.account_name_1+' / 9 000')
       cy.get(CSSBoldGreenNumber).should('contain','10 000')
       cy.get(CSSButton).click()

        cy.wait(1000)
    }
    operations_with_doc_sell(){
        cy.get(CSSMenuPage).contains('С документом').click()
//Реквизиты
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
       cy.get(CSSDropdown).eq(1).type('Invoice'+'{enter}')
//Транзакции
       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdown).eq(2).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(1).type('100')
       cy.get(CSSSubmitButton).click()
//Позиции
       cy.get(CSSCreateNewButton).eq(3).click()
       cy.get(CSSInput).eq(1).type('Test')
       cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1)
       cy.get(CSSDropdown).eq(5).type('25'+'{enter}')
       cy.get(CSSInput).eq(4).type('100')
       cy.get(CSSQuantity).type('1')
       cy.get(CSSDropdown).eq(3).type(credentials.income_item.income_item_1_name+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain','Выручка')
       cy.get(CSSSubmitButton).click()
        cy.get(CSSCheckboxObligation).click()
       cy.get(CSSButton).click()
    }
    operation_with_doc_buy(){
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('С документом').click()
       cy.get(CSSCreateNewButton).contains('Покупка').click()
        //Реквизиты
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
       cy.get(CSSDropdown).eq(1).type('Invoice'+'{enter}')
       cy.get(CSSInput).eq(0).type('01')
//Транзакции
       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdown).eq(2).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(1).type('150')
       cy.get(CSSSubmitButton).click()
//Позиции
       cy.get(CSSCreateNewButton).eq(3).click()
       cy.get(CSSInput).eq(1).type('Test')
       cy.get(CSSDropdown).eq(3).click()
       cy.get(CSSDropdownOption).contains(credentials.expense_item_name.expense_item_1_name).click()
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).eq(4).type('150')
       cy.get(CSSQuantity).type('1')
       cy.get(CSSDropdown).eq(4).type(credentials.units.unit_1)
       cy.get(CSSDropdown).eq(5).type('25'+'{enter}')
       cy.get(CSSSubmitButton).click()
        cy.get(CSSCheckboxObligation).click()
       cy.get(CSSButton).click()
    }
    operation_with_salaries(){
        ////////////1
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Зарплаты').click()

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name_trim.employee_full_name_1+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_1)
       cy.get(CSSInput).eq(1).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ////////////2
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Зарплаты').click()

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name_trim.employee_full_name_2+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_2)
       cy.get(CSSInput).eq(1).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ////////////3
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Зарплаты').click()

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name_trim.employee_full_name_3+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_3)
       cy.get(CSSInput).eq(1).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ////////////4
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Зарплаты').click()

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name_trim.employee_full_name_4+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(2).should('contain',credentials.employee_full_name_trim.employee_full_name_4)
       cy.get(CSSInput).eq(1).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()
    }
    operation_with_taxes_1(){
        ///////////////1
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.social_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        //////////////////////2

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.social_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ////////////////////3

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.social_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ///////////////////4

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.social_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()
    }
    operation_with_taxes_2(){
        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.income_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ///////////////1

        //////////////////////2

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.income_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ////////////////////3

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.income_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()

        ///////////////////4

        cy.wait(1000)
        cy.get(CSSMenuPage).contains('Налоги').click()
       cy.get(CSSDropdown).eq(0).click()
       cy.get(CSSDropdown).eq(0).type('Декларация'+'{enter}')
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')

       cy.get(CSSCreateNewButton).eq(2).click()
       cy.get(CSSDropdownValue).eq(1).should('contain',credentials.taxes.income_tax)
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(4).click()
       cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
       cy.get(CSSInput).eq(0).type('150')
       cy.get(CSSGreenButton).click()

       cy.get(CSSButton).click()
    }
        operation_with_self_capital(){
            cy.wait(1000)
            cy.get(CSSMenuPage).contains('Собственный капитал').click()

            cy.get(CSSBoldNumber).eq(0).should("contain",'25 960')
            cy.get(CSSHugeBoldNumber).eq(0).should("contain",'27 800')
            cy.get(CSSHugeBoldNumber).eq(1).should("contain",'-1 840')
           cy.get(CSSDropdown).eq(0).click()
            cy.get(CSSAccountNameAndBalance).contains(credentials.account_name.account_name_1+' / 8 150').click()
           cy.get(CSSInput).eq(0).type('150')
           cy.get(CSSButton).click()
            cy.get(CSSBoldNumber).eq(0).should("contain",'25 810')
            cy.get(CSSHugeBoldNumber).eq(0).should("contain",'27 650')
            cy.get(CSSDocumentRow).eq(1).should("contain", 'Выплата').and("contain", 'Дивиденды').and("contain", '150')

        }
        operations_with_credits_receipt(){
            cy.wait(1000)
            cy.get(CSSMenuPage).contains('С кредитом / займом').click()
            cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
            cy.get(CSSDropdown).eq(1).type('Соглашение'+'{enter}')
            cy.get(CSSInput).eq(0).type('1001')

            cy.get(CSSCreateNewButton).eq(2).click()
            cy.get(CSSDropdown).eq(3).type(credentials.account_name.account_name_1+'{enter}')
            cy.get(CSSInput).eq(1).type('5000')
            cy.get(CSSGreenButton).click()

            cy.get(CSSInput).eq(1).type(credentials.credits.credit_name_5)
            cy.get(CSSDatepicker).eq(1).click()
            cy.get('.unstyled-button.right').dblclick()
            cy.get('.custom-month-cell-wrapper').contains('октябрь').click();
            cy.get(CSSInput).eq(2).type('5000')

            cy.get(CSSButton).click()
        }
        operations_with_credits_repayment_1(){
            cy.wait(1000)
            cy.get(CSSMenuPage).contains('С кредитом / займом').click()
            cy.get(CSSTab).contains('Погашение').click()

            cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
            cy.get(CSSDropdown).eq(1).type('Соглашение'+'{enter}')
            cy.get(CSSDropdown).eq(2).type('1001'+'{enter}')

            cy.get(CSSCreateNewButton).eq(2).click()
            cy.get(CSSDropdown).eq(3).type('Погашение кредита'+'{enter}')
            cy.get(CSSDropdown).eq(4).type(credentials.account_name.account_name_1+'{enter}')
            cy.get(CSSInput).eq(0).type('1000')
            cy.get(CSSGreenButton).click()

            cy.get(CSSInput).eq(0).should('have.value',credentials.credits.credit_name_5)
            cy.get(CSSInput).eq(1).should('have.value','10.2025')
            cy.get(CSSInput).eq(2).should('have.value','5 000')

            cy.get(CSSButton).click()

    }
        operations_with_credits_repayment_2(){
            cy.wait(1000)
            cy.get(CSSMenuPage).contains('С кредитом / займом').click()
            cy.get(CSSTab).contains('Погашение').click()

            cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
            cy.get(CSSDropdown).eq(1).type('Соглашение'+'{enter}')
            cy.get(CSSDropdown).eq(2).type('1001'+'{enter}')

            cy.get(CSSCreateNewButton).eq(2).click()
            cy.get(CSSDropdown).eq(3).type('Оплата процентов'+'{enter}')
            cy.get(CSSDropdown).eq(4).type(credentials.account_name.account_name_1+'{enter}')
            cy.get(CSSInput).eq(0).type('1000')
            cy.get(CSSGreenButton).click()

            cy.get(CSSInput).eq(0).should('have.value',credentials.credits.credit_name_5)
            cy.get(CSSInput).eq(1).should('have.value','10.2025')
            cy.get(CSSInput).eq(2).should('have.value','5 000')

            cy.get(CSSButton).click()
        }
}
export default creating_operations