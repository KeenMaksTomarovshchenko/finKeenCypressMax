import Locators from "../data/locators";
import credentials, {counterparties_name, counterparties_type} from "../data/credentials"
const locators = new Locators()

class onboarding{
    //Логин
    login(){
        locators.visitLoginPage()
        locators.getTitle().should('contain','Вход')
        cy.wait(500)

        locators.getInputField().eq(0).type(credentials.email.email)
        locators.getInputField().eq(1).type(credentials.password.password)
        cy.wait(1000)
        locators.getButton().eq(0).click()
    }
    //Приветствие
    page0(){
        locators.getTitle().should("contain",'Добро пожаловать')
        cy.wait(500)

        locators.getNextButton1().eq(0).click()
    }
    //Финансовое моделирование
    page1(){
        locators.getTitle().should("contain",'Финансовое моделирование')
        cy.wait(500)

        locators.getTextButton().eq(1).click()
    }
    //Данные фирмы
    page2(){
        locators.getTitle().should("contain",'Данные фирмы')
        cy.wait(500)

        locators.getInputField().eq(0).type(credentials.company_full_name.company_full_name)
        locators.getInputField().eq(1).type(credentials.company_short_name.company_short_name)
        locators.getInputField().eq(2).type(credentials.company_tax_number.company_tax_number)
        cy.wait(1000)
        locators.getNextButton2().click()
    }
    //Валюта учёта
    page3(){
        locators.getTitle().should("contain",'Валюта учета')
        cy.wait(500)
        locators.getNextButton2().click()
    }
    //Счета
    account_1_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain", 'Введите данные счета')

        locators.getSelector().eq(1).type(credentials.account_type.account_type_1)
        locators.getInputField().eq(0).type(credentials.account_name.account_name_1)
        locators.getInputField().eq(1).type(credentials.account_starting_balance.account_starting_balance_1)
        locators.getButton().click()
    }
    account_2_creating() {
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain", 'Введите данные счета')

        locators.getSelector().eq(1).type(credentials.account_type.account_type_2)
        locators.getInputField().eq(0).type(credentials.account_name.account_name_2)
        locators.getInputField().eq(1).type(credentials.account_starting_balance.account_starting_balance_2)
        locators.getButton().click()
    }
    page4(){
        locators.getTitle().should('contain','Счета')
        this.account_1_creating()
        this.account_2_creating()
        locators.getNextButton2().click()
    }
    //Статьи доходов
    income_item_1_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью дохода')

        locators.getInputField().eq(0).type(credentials.income_item.income_item_1_name)
        locators.getButton().click()
    }
    income_item_2_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью дохода')

        locators.getInputField().eq(0).type(credentials.income_item.income_item_2_name)
        locators.getButton().click()
    }
    page5(){
        locators.getTitle().should("contain",'Статьи доходов')
        this.income_item_1_creating()
        this.income_item_2_creating()
        locators.getNextButton2().click()
    }
    //Статьи расходов
    expense_item_1_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью расхода')

        locators.getInputField().eq(0).type(credentials.expense_item_name.expense_item_1_name)
        locators.getButton().click()
    }
    expense_item_2_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью расхода')

        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
        locators.getInputField().eq(0).type(credentials.expense_item_name.expense_item_2_name)
        locators.getButton().click()
    }
    expense_item_3_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью расхода')

        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
        locators.getInputField().eq(0).type(credentials.expense_item_name.expense_item_3_name)
        locators.getButton().click()
    }
    expense_item_4_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите статью расхода')

        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
        locators.getInputField().eq(0).type(credentials.expense_item_name.expense_item_4_name)
        locators.getButton().click()
    }
    page6(){
        locators.getTitle().should("contain",'Статьи расходов')
        this.expense_item_1_creating()
        this.expense_item_2_creating()
        this.expense_item_3_creating()
        this.expense_item_4_creating()
        locators.getNextButton2().click()
    }
    //Контрагенты
    counterparties_1_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите данные контрагента')
        locators.getInputField().eq(0).type(counterparties_name.counterparties_name_1)
        locators.getButton().click()
    }
    counterparties_2_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain",'Введите данные контрагента')

        locators.getCreateNewButton().eq(16).should("contain",counterparties_type.counterparties_type_2).click()
        locators.getInputField().eq(0).type(counterparties_name.counterparties_name_2)
        locators.getButton().click()
    }
    page7(){
        locators.getTitle().should("contain",'Контрагенты')
        this.counterparties_1_creating()
        this.counterparties_2_creating()
        locators.getNextButton2().click()
        cy.wait(1000)
    }
    //Сотрудники

    employee_1_creating(){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const formattedDate = `${day}/${month}/${year}`;

        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should('contain','Введите данные сотрудника')

        locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
        locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_1)
        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getSelector().eq(2).click()
        locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
        locators.getDatapickerInput().click()
        locators.getDatapickerInput().type(formattedDate)
        locators.getButton().click()
    }
    employee_2_creating(){

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;

    locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_2)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
                locators.getDatapickerInput().type(formattedDate)
                locators.getButton().click()
    }
    employee_3_creating(){

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;

                locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_3)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
                locators.getDatapickerInput().type(formattedDate)
                locators.getButton().click()
    }
    employee_4_creating(){

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;


    locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_4)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
                locators.getDatapickerInput().type(formattedDate)
                locators.getButton().click()
    }
    page8(){
        locators.getTitle().should('contain','Сотрудники')
        this.employee_1_creating()
        this.employee_2_creating()
        this.employee_3_creating()
        this.employee_4_creating()
        locators.getNextButton2().click()
    }
    //Налоги
    page9(){
        locators.getTitle().should("contain",'Налоги')
        locators.getCheckbox().click()

        locators.getInputField().eq(0).type('25')
        locators.getCreateNewButton().eq(0).click()

        locators.getInputField().eq(1).type('50')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(2).click()
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(3).click()
        locators.getSelector().eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(5).click()
        locators.getSelector().eq(5).type(credentials.expense_item_category.expense_item_category_2+'{enter}')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(6).click()
        locators.getSelector().eq(6).type(credentials.expense_item_category.expense_item_category_3+'{enter}')

        locators.getCreateNewButton().eq(1).click()
        locators.getSelector().eq(7).click()
        locators.getSelector().eq(7).type(credentials.expense_item_category.expense_item_category_4+'{enter}')

        locators.getNextButton2().click()
    }
    //Склады
    waterhouse_1_creating(){
        locators.getCreateNewButton().eq(0).click()
        locators.getName().should('contain','Склад №1')
        locators.getCreateNewButton().eq(0).click()
        locators.getInputField().eq(0).type(credentials.product_name.product_1_name)
        locators.getSelector().eq(0).click()
        locators.getSelector().eq(0).type('a{backspace}' + credentials.units.unit_1.toLowerCase())
        locators.getInputField().eq(1).type('100')
        locators.getInputField().eq(2).type('10')
        locators.getGreenButton().click()
    }
    waterhouse_2_creating(){
        locators.getCreateNewButton().eq(1).click()
        locators.getName().should('contain','Склад №2')
        locators.getCreateNewButton().eq(1).click()
        locators.getInputField().eq(0).type(credentials.product_name.product_2_name)
        locators.getSelector().eq(0).click()
        locators.getSelector().eq(0).type('a{backspace}' + credentials.units.unit_2.toLowerCase())
        locators.getInputField().eq(1).type('200')
        locators.getInputField().eq(2).type('10')
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getInputField().eq(0).type(credentials.product_name.product_3_name)
        locators.getSelector().eq(0).click()
        locators.getSelector().eq(0).type('a{backspace}' + credentials.units.unit_3.toLowerCase())
        locators.getInputField().eq(1).type('300')
        locators.getInputField().eq(2).type('10')
        locators.getGreenButton().click()

    }
    waterhouse_3_creating(){
        locators.getCreateNewButton().eq(2).click()
        locators.getName().should('contain','Склад №3')
        locators.getCreateNewButton().eq(2).click()
        locators.getInputField().eq(0).type(credentials.product_name.product_4_name)
        locators.getSelector().eq(0).click()
        locators.getSelector().eq(0).type('a{backspace}' + credentials.units.unit_4.toLowerCase())
        locators.getInputField().eq(1).type('400')
        locators.getInputField().eq(2).type('10')
        locators.getGreenButton().click()
    }

    page10(){
        locators.getTitle().should("contain",'Склады')
        this.waterhouse_1_creating()
        this.waterhouse_2_creating()
        this.waterhouse_3_creating()
        locators.getNextButton2().click()
    }
    //Кредиторская задолженность
    page11(){
        locators.getTitle().should("contain",'Кредиторская задолженность')
        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain','Задолженность перед поставщиками')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1+'{enter}');
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_1_name+'{enter}');
        locators.getSelectorValue().eq(2).should("contain",credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('100')
        locators.getButton().click()
        locators.getNextButton2().click()
    }
    //Дебиторская задолженность
    page12(){
        locators.getTitle().should("contain",'Дебиторская задолженность')
        cy.wait(1000)
        locators.getNextButton2().click()
    }
    //Кредиты и займы
    page13(){
        locators.getTitle().should("contain",'Кредиты и займы')
        cy.wait(1000)
        locators.getNextButton2().click()
    }
    //Основные средства
    page14(){
        locators.getTitle().should("contain",'Основные средства')
        cy.wait(1000)
        locators.getNextButton2().click()
    }
    //Все готово
    page15(){
        locators.getTitle().should("contain",'Все готово')
        cy.wait(1000)
        //locators.getNextButton2().click()
    }
    DeleteAllData(){
        locators.getSubTitle().should('contain','Выручка')
        cy.wait(1000)
        locators.getBurgerMenu().click()
        cy.wait(1000)
        locators.getCreateNewButton().eq(6).click()
        cy.wait(1000)
        locators.getMenuPage().eq(3).should('contain','Сбросить все данные').click()
        cy.wait(1000)
        locators.getModalWindow()
        locators.getSubTitle().should('contain','Сбросить все данные')
        cy.wait(1000)
        locators.getStretchButton().should('contain','Удалить все данные').click()
    }
}
export default onboarding