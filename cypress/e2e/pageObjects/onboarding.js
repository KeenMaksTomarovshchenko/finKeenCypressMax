import Locators from "../data/locators";
import credentials, {counterparties_name, counterparties_type, employee_last_name, taxes} from "../data/credentials"
import employeeData from "../data/credentials";
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
        locators.getInputField().eq(1).type('10000')
        locators.getButton().click()
    }
    account_2_creating() {
        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should("contain", 'Введите данные счета')

        locators.getSelector().eq(1).type(credentials.account_type.account_type_2)
        locators.getInputField().eq(0).type(credentials.account_name.account_name_2)
        locators.getInputField().eq(1).type('20000')
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

        locators.getCreateNewButton().eq(0).click()
        locators.getSubTitle().should('contain','Введите данные сотрудника')

        locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
        locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_1)
        locators.getSelector().eq(1).click()
        locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getSelector().eq(2).click()
        locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
        locators.getDatapickerInput().click()
        locators.getButton().click()
    }
    employee_2_creating(){

    locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_2)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
                locators.getButton().click()
    }
    employee_3_creating(){

                locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_3)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
                locators.getButton().click()
    }
    employee_4_creating(){

    locators.getCreateNewButton().eq(0).click()
                locators.getSubTitle().should('contain','Введите данные сотрудника')

                locators.getInputField().eq(0).type(credentials.employee_first_name.employee_first_name)
                locators.getInputField().eq(1).type(credentials.employee_last_name.employee_last_name_4)
                locators.getSelector().eq(1).click()
                locators.getSelector().eq(1).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
                locators.getSelector().eq(2).click()
                locators.getSelector().eq(2).type(credentials.employee_status.employee_status_1)
                locators.getDatapickerInput().click()
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
//Задолженность перед поставщиками
        DebtToSuppliers() {
            locators.getCreateNewButton().eq(0).click()
            locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
            locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
            cy.wait(1000)
            locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}');
            locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
            locators.getInputField().type('100')
            locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
            locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
            locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
            cy.wait(1000)
            locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}');
            locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
            locators.getInputField().type('100')
            locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
            locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
            locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
            cy.wait(1000)
            locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}');
            locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
            locators.getInputField().type('100')
            locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
            locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
            locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
            cy.wait(1000)
            locators.getSelectorValue().eq(3).should("contain", credentials.expense_item_name.expense_item_4_name);
            locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
            locators.getInputField().type('100')
            locators.getButton().click()

            ////

        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
            cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}');
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('100')
        locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
            cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}');
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
        locators.getInputField().type('100')
        locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
            cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}');
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
        locators.getInputField().type('100')
        locators.getButton().click()

            locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность перед поставщиками')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
            cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", credentials.expense_item_name.expense_item_4_name);
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
        locators.getInputField().type('100')
        locators.getButton().click()

        }
//Авансы покупателей

    BuyersAdvances() {
        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы покупателей')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.income_item.income_item_1_name + '{enter}');
        locators.getSelectorValue().eq(2).should("contain", "Выручка")
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы покупателей')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", credentials.income_item.income_item_2_name);
        locators.getSelectorValue().eq(2).should("contain", "Выручка")
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы покупателей')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.income_item.income_item_1_name + '{enter}');
        locators.getSelectorValue().eq(2).should("contain", "Выручка")
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы покупателей')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", credentials.income_item.income_item_2_name);
        locators.getSelectorValue().eq(2).should("contain", "Выручка")
        locators.getInputField().type('200')
        locators.getButton().click()

    }
//Задолженность сотрудникам
    DebtToEmployees() {
        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Задолженность сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_1 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('300')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Задолженность сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_2 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
        locators.getInputField().type('300')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Задолженность сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_3 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
        locators.getInputField().type('300')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Задолженность сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_4 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
        locators.getInputField().type('300')
        locators.getButton().click()

    }
//Задолженность по налогам
    TaxDebt(){
        //Социальный налог
        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax+'{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain",credentials.expense_item_category.expense_item_category_4)
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        ////////////////////////////////Подоходный налог//////////////////////////////////////////

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax+'{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax+'{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain",credentials.expense_item_category.expense_item_category_4)
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        ////////////////////////////////Налог на прибыль/////////////////////////////////

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.profit_tax+'{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain",credentials.expense_item_category.expense_item_category_5)
        locators.getSelectorValue().eq(3).should("contain",credentials.taxes.profit_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        ///////////////////////////НДС/////////////////////////////////

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain','Задолженность по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.Value_added_tax+'{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain",credentials.expense_item_category.expense_item_category_1)
        locators.getSelectorValue().eq(3).should("contain",credentials.expense_item_category.expense_item_category_6)
        locators.getInputField().type('50')
        locators.getButton().click()

    }
        page11() {
        locators.getTitle().should("contain", 'Кредиторская задолженность')
    //this.DebtToSuppliers()
    //this.BuyersAdvances()
    //this.DebtToEmployees()
    //this.TaxDebt()
        locators.getNextButton2().click()

}   ////////////////////////////////Дебиторская задолженность//////////////////////////////////////////////////

        ////////////////////////////////////Задолженность клиентов////////////////////////////////////////
    CustomerDebt() {
        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность клиентов')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.income_item.income_item_1_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', 'Выручка')
        locators.getInputField().type('100')
        locators.getButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность клиентов')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should('contain', credentials.income_item.income_item_2_name)
        locators.getSelectorValue().eq(2).should('contain', 'Выручка')
        locators.getInputField().type('100')
        locators.getButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность клиентов')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.income_item.income_item_1_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', 'Выручка')
        locators.getInputField().type('100')
        locators.getButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getModalWindow().should('contain', 'Задолженность клиентов')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should('contain', credentials.income_item.income_item_2_name)
        locators.getSelectorValue().eq(2).should('contain', 'Выручка')
        locators.getInputField().type('100')
        locators.getButton().click()

    }

        ///////////////////////////////Авансы поставщикам/////////////////////////////////
    AdvancesToSuppliers() {
        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_2)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_3)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should('contain', credentials.expense_item_name.expense_item_4_name)
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_4)
        locators.getInputField().type('50')
        locators.getButton().click()

        ////////////////////////////

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_2)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}')
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_3)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(1).click()
        locators.getModalWindow().should('contain', 'Авансы поставщикам')
        locators.getSelector().eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should('contain', credentials.expense_item_name.expense_item_4_name)
        locators.getSelectorValue().eq(2).should('contain', credentials.expense_item_category.expense_item_category_4)
        locators.getInputField().type('50')
        locators.getButton().click()
    }
        ////////////////////////////Авансы сотрудникам//////////////////////////////

    AdvancesToEmployees() {
        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Авансы сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_1 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Авансы сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_2 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Авансы сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_3 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
        locators.getInputField().type('200')
        locators.getButton().click()

        locators.getCreateNewButton().eq(2).click()
        locators.getModalWindow().should('contain', 'Авансы сотрудникам')
        locators.getSelector().eq(1).type(credentials.employee_full_name.employee_full_name_4 + '{enter}');
        cy.wait(1000)
        locators.getSelectorValue().eq(3).should("contain", "Зарплата")
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
        locators.getInputField().type('200')
        locators.getButton().click()
    }
        //////////////////////////Авансы по налогам////////////////////////////
    TaxAdvances() {
        ////////////////////////Социальный налог////////////////////////////////////
        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_1 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_2 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_3 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.social_tax + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.social_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        //Подоходный налог

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_1 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_2 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax + '{enter}')
        cy.wait(1000)
        locators.getSelector().eq(2).type(credentials.expense_item_category.expense_item_category_3 + '{enter}')
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.income_tax + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.income_tax)
        locators.getInputField().type('50')
        locators.getButton().click()

        //Налог на прибыль

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.profit_tax + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain", credentials.expense_item_category.expense_item_category_5)
        locators.getSelectorValue().eq(3).should("contain", credentials.taxes.profit_tax)
        locators.getInputField().type('50')
        locators.getButton().click()


        //НДС

        locators.getCreateNewButton().eq(3).click()
        locators.getModalWindow().should('contain', 'Авансы по налогам')
        locators.getSelector().eq(1).type(credentials.taxes.Value_added_tax + '{enter}')
        cy.wait(1000)
        locators.getSelectorValue().eq(2).should("contain", 'Выручка')
        locators.getSelectorValue().eq(3).should("contain", credentials.expense_item_category.expense_item_category_7)
        locators.getInputField().type('50')
        locators.getButton().click()


    }
    page12() {
        locators.getTitle().should("contain", 'Дебиторская задолженность')
        //this.CustomerDebt()
        //this.AdvancesToSuppliers()
       // this.AdvancesToEmployees()
       // this.TaxAdvances()
    locators.getNextButton2().click()
}    //Кредиты и займы
    page13(){
        locators.getTitle().should("contain",'Кредиты и займы')
        locators.getCreateNewButton().eq(0).click()
        locators.getInputField().eq(0).type(credentials.credits.credit_name_1)
        locators.getSelector().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
        locators.getInputField().eq(1).type('0001')
        locators.getInputField().eq(2).type('1000')
        locators.getDatapickerInput().click()
        cy.get('.custom-month-cell-wrapper').contains('декабрь').click({force: true});
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getInputField().eq(0).type(credentials.credits.credit_name_2)
        locators.getSelector().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
        locators.getInputField().eq(1).type('0002')
        locators.getInputField().eq(2).type('2000')
        locators.getDatapickerInput().click()
        cy.get('.unstyled-button.right').click({force: true})
        cy.get('.custom-month-cell-wrapper').contains('декабрь').click({force: true});
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getInputField().eq(0).type(credentials.credits.credit_name_3)
        locators.getSelector().eq(0).type(credentials.counterparties_name.counterparties_name_2+'{enter}')
        locators.getInputField().eq(1).type('0003')
        locators.getInputField().eq(2).type('3000')
        locators.getDatapickerInput().click()
        cy.get('.unstyled-button.right').click({force: true})
        cy.get('.custom-month-cell-wrapper').contains('январь').click({force: true});
        locators.getGreenButton().click()

        locators.getCreateNewButton().eq(0).click()
        locators.getInputField().eq(0).type(credentials.credits.credit_name_4)
        locators.getSelector().eq(0).type(credentials.counterparties_name.counterparties_name_2+'{enter}')
        locators.getInputField().eq(1).type('0004')
        locators.getInputField().eq(2).type('4000')
        locators.getDatapickerInput().click()
        cy.get('.unstyled-button.right').dblclick({force: true})
        cy.get('.custom-month-cell-wrapper').contains('январь').click({force: true});
        locators.getGreenButton().click()

        locators.getNextButton2().click()
    }
    //Основные средства
    page14(){
        locators.getTitle().should("contain",'Основные средства')

        locators.getNextButton2().click()
    }
    //Все готово
    page15(){
        locators.getTitle().should("contain",'Все готово')
        //с КЗ и ДЗ = 28 800, БЕЗ - 30 000
        locators.getAmountGreen().should('contain.text','30 000')
        locators.getNextButton2().click()
    }
    GetDashboard(){
        locators.getSubTitle().should('contain','Выручка')
        cy.url().should('eq', 'https://dev.fin-consult.com/home');
    }
}
export default onboarding