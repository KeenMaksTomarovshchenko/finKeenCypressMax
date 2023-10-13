import credentials, {counterparties_name, counterparties_type, employee_last_name, taxes} from "../data/credentials"

const LoginPage = 'https://dev.fin-consult.com/login'
const CSSInput = '.input-field'
const CSSButton = '[class="main-button"]'
const CSSNextButton = '[class="main-button next-btn"]'
const CSSSkipButton = '[class="text-button"]'
const CSSCreateNewButton = '[class="text-component bold"]'
const CSSGreenButton = '[class="main-button add-btn"]'
const CSSDropdown = '.mt-react-select__input-container'
const CSSDropdownValue = '.mt-react-select__single-value'
const CSSDatepicker = '[class="react-datepicker__input-container "]'
const CSSDatepickerRightButton = '.unstyled-button.right'
const CSSDatepickerMonth = '.custom-month-cell-wrapper'
const CSSGreenAmount = '[class="text-component amount big bold link-accent"]'
const CSSModalWindow = '[class="modal-block-wrapper"]'
const CSSTitle = 'h1'
const CSSSubTitle = 'h2'
const CSSWarehousesName = '[class="name"]'
const CSSCheckbox = '[type="checkbox"]'
const CSSWarehousesAdressMask = '[class="input-field input-field-mask"]'
const CSSBigBoldGreenAmount = '[class="text-component amount big bold green"]'

class onboarding{
    //Логин
    login(){
        cy.visit(LoginPage)
        cy.get(CSSTitle).should('contain','Вход')
        cy.wait(500)

       cy.get(CSSInput).eq(0).type(credentials.email.email)
       cy.get(CSSInput).eq(1).type(credentials.password.password)
        cy.wait(1000)
       cy.get(CSSButton).eq(0).click()
    }
    //Приветствие
    page0(){
        cy.get(CSSTitle).should("contain",'Добро пожаловать')
        cy.wait(500)

        cy.get(CSSNextButton).eq(0).click()
    }
    //Финансовое моделирование
    page1(){
        cy.get(CSSTitle).should("contain",'Финансовое моделирование')
        cy.wait(500)

        cy.get(CSSSkipButton).eq(1).click()
    }
    //Данные фирмы
    page2(){
        cy.get(CSSTitle).should("contain",'Данные фирмы')
        cy.wait(500)

       cy.get(CSSInput).eq(0).type(credentials.company_full_name.company_full_name)
       cy.get(CSSInput).eq(1).type(credentials.company_short_name.company_short_name)
       cy.get(CSSInput).eq(2).type(credentials.company_tax_number.company_tax_number)
        cy.wait(1000)
        cy.get(CSSNextButton).click()
    }
    //Валюта учёта
    page3(){
        cy.get(CSSTitle).should("contain",'Валюта учета')
        cy.wait(500)
        cy.get(CSSNextButton).click()
    }
    //Счета
    account_1_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain", 'Введите данные счета')

       cy.get(CSSDropdown).eq(1).type(credentials.account_type.account_type_1)
       cy.get(CSSInput).eq(0).type(credentials.account_name.account_name_1)
       cy.get(CSSInput).eq(1).type('10000')
       cy.get(CSSButton).click()
    }
    account_2_creating() {
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain", 'Введите данные счета')

       cy.get(CSSDropdown).eq(1).type(credentials.account_type.account_type_2)
       cy.get(CSSInput).eq(0).type(credentials.account_name.account_name_2)
       cy.get(CSSInput).eq(1).type('20000')
       cy.get(CSSButton).click()
    }
    page4(){
        cy.get(CSSTitle).should('contain','Счета')
        this.account_1_creating()
        this.account_2_creating()
        cy.get(CSSNextButton).click()
    }
    //Статьи доходов
    income_item_1_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью дохода')

       cy.get(CSSInput).eq(0).type(credentials.income_item.income_item_1_name)
       cy.get(CSSButton).click()
    }
    income_item_2_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью дохода')

       cy.get(CSSInput).eq(0).type(credentials.income_item.income_item_2_name)
       cy.get(CSSButton).click()
    }
    page5(){
        cy.get(CSSTitle).should("contain",'Статьи доходов')
        this.income_item_1_creating()
        this.income_item_2_creating()
        cy.get(CSSNextButton).click()
    }
    //Статьи расходов
    expense_item_1_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью расхода')

       cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_1_name)
       cy.get(CSSButton).click()
    }
    expense_item_2_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью расхода')

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
       cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_2_name)
       cy.get(CSSButton).click()
    }
    expense_item_3_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью расхода')

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
       cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_3_name)
       cy.get(CSSButton).click()
    }
    expense_item_4_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите статью расхода')

       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
       cy.get(CSSInput).eq(0).type(credentials.expense_item_name.expense_item_4_name)
       cy.get(CSSButton).click()
    }
    page6(){
        cy.get(CSSTitle).should("contain",'Статьи расходов')
        this.expense_item_1_creating()
        this.expense_item_2_creating()
        this.expense_item_3_creating()
        this.expense_item_4_creating()
        cy.get(CSSNextButton).click()
    }
    //Контрагенты
    counterparties_1_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите данные контрагента')
       cy.get(CSSInput).eq(0).type(counterparties_name.counterparties_name_1)
       cy.get(CSSButton).click()
    }
    counterparties_2_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should("contain",'Введите данные контрагента')

       cy.get(CSSCreateNewButton).eq(16).should("contain",counterparties_type.counterparties_type_2).click()
       cy.get(CSSInput).eq(0).type(counterparties_name.counterparties_name_2)
       cy.get(CSSButton).click()
    }
    page7(){
        cy.get(CSSTitle).should("contain",'Контрагенты')
        this.counterparties_1_creating()
        this.counterparties_2_creating()
        cy.get(CSSNextButton).click()
    }
    //Сотрудники

    employee_1_creating(){

       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSSubTitle).should('contain','Введите данные сотрудника')

       cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name)
       cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_1)
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
       cy.get(CSSDropdown).eq(2).click()
       cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1)
       cy.get(CSSButton).click()
    }
    employee_2_creating(){

   cy.get(CSSCreateNewButton).eq(0).click()
                cy.get(CSSSubTitle).should('contain','Введите данные сотрудника')

               cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name)
               cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_2)
               cy.get(CSSDropdown).eq(1).click()
               cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
               cy.get(CSSDropdown).eq(2).click()
               cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1)
               cy.get(CSSButton).click()
    }
    employee_3_creating(){

               cy.get(CSSCreateNewButton).eq(0).click()
                cy.get(CSSSubTitle).should('contain','Введите данные сотрудника')

               cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name)
               cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_3)
               cy.get(CSSDropdown).eq(1).click()
               cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
               cy.get(CSSDropdown).eq(2).click()
               cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1)
               cy.get(CSSButton).click()
    }
    employee_4_creating(){

   cy.get(CSSCreateNewButton).eq(0).click()
                cy.get(CSSSubTitle).should('contain','Введите данные сотрудника')

               cy.get(CSSInput).eq(0).type(credentials.employee_first_name.employee_first_name)
               cy.get(CSSInput).eq(1).type(credentials.employee_last_name.employee_last_name_4)
               cy.get(CSSDropdown).eq(1).click()
               cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_4+'{enter}')
               cy.get(CSSDropdown).eq(2).click()
               cy.get(CSSDropdown).eq(2).type(credentials.employee_status.employee_status_1)
               cy.get(CSSButton).click()
    }
    page8(){
        cy.get(CSSTitle).should('contain','Сотрудники')
        this.employee_1_creating()
        this.employee_2_creating()
        this.employee_3_creating()
        this.employee_4_creating()
        cy.get(CSSNextButton).click()
    }
    //Налоги
    page9(){
        cy.get(CSSTitle).should("contain",'Налоги')
        cy.get(CSSCheckbox).click()

       cy.get(CSSInput).eq(0).type('25')
       cy.get(CSSCreateNewButton).eq(0).click()

       cy.get(CSSInput).eq(1).type('50')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(1).click()
       cy.get(CSSDropdown).eq(1).type(credentials.expense_item_category.expense_item_category_2+'{enter}')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(2).click()
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(3).click()
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_category.expense_item_category_4+'{enter}')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(5).click()
       cy.get(CSSDropdown).eq(5).type(credentials.expense_item_category.expense_item_category_2+'{enter}')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(6).click()
       cy.get(CSSDropdown).eq(6).type(credentials.expense_item_category.expense_item_category_3+'{enter}')

       cy.get(CSSCreateNewButton).eq(1).click()
       cy.get(CSSDropdown).eq(7).click()
       cy.get(CSSDropdown).eq(7).type(credentials.expense_item_category.expense_item_category_4+'{enter}')

       cy.get(CSSNextButton).click()
    }
    //Склады
    waterhouse_1_creating(){
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSWarehousesName).should('contain','Склад №1')
        cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSInput).eq(0).type(credentials.product_name.product_1_name)
        cy.get(CSSDropdown).eq(0).click()
        cy.get(CSSDropdown).eq(0).type('a{backspace}' + credentials.units.unit_1.toLowerCase())
        cy.get(CSSInput).eq(1).type('100')
        cy.get(CSSInput).eq(2).type('10')
        cy.get(CSSGreenButton).click()
        cy.wait(500)
    }
    waterhouse_2_creating(){
        cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSWarehousesName).should('contain','Склад №2')
        cy.get(CSSCheckbox).eq(1).click()
        cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSInput).eq(0).type(credentials.product_name.product_2_name)
        cy.wait(500)
        cy.get(CSSWarehousesAdressMask).type('11.A.111')
        cy.get(CSSDropdown).eq(0).click()
        cy.get(CSSDropdown).eq(0).type('a{backspace}' + credentials.units.unit_2)
        cy.get(CSSInput).eq(2).type('200')
        cy.get(CSSInput).eq(3).type('10')
        cy.get(CSSGreenButton).click()

        cy.wait(1000)

        cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSInput).eq(0).type(credentials.product_name.product_3_name)
        cy.wait(500)
        cy.get(CSSWarehousesAdressMask).type('22.B.222')
        cy.get(CSSDropdown).eq(0).click()
        cy.get(CSSDropdown).eq(0).type('a{backspace}' + credentials.units.unit_3)
        cy.get(CSSInput).eq(2).type('300')
        cy.get(CSSInput).eq(3).type('10')
        cy.get(CSSGreenButton).click()
        cy.wait(500)

    }
    waterhouse_3_creating(){
        cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSWarehousesName).should('contain','Склад №3')
        cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSInput).eq(0).type(credentials.product_name.product_4_name)
        cy.wait(500)
        cy.get(CSSDropdown).eq(0).click()
        cy.get(CSSDropdown).eq(0).type('a{backspace}' + credentials.units.unit_4.toLowerCase())
        cy.get(CSSInput).eq(1).type('400')
        cy.get(CSSInput).eq(2).type('10')
        cy.get(CSSGreenButton).click()
    }

    page10(){
        cy.get(CSSTitle).should("contain",'Склады')
        this.waterhouse_1_creating()
        cy.wait(1000)
        this.waterhouse_2_creating()
        cy.wait(1000)
        this.waterhouse_3_creating()
        cy.wait(1000)
        cy.get(CSSNextButton).click()
    }
    /////////////////Кредиторская задолженность////////////////////////////
    //Задолженность перед поставщиками
        DebtToSuppliers() {
           cy.get(CSSCreateNewButton).eq(0).click()
            cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
           cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
           cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}');
           cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
           cy.get(CSSInput).type('100')
           cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
            cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
           cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
           cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}');
           cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
           cy.get(CSSInput).type('100')
           cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
            cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
           cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
           cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}');
           cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
           cy.get(CSSInput).type('100')
           cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
            cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
           cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
           cy.get(CSSDropdownValue).eq(3).should("contain", credentials.expense_item_name.expense_item_4_name);
           cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
           cy.get(CSSInput).type('100')
           cy.get(CSSButton).click()

            ////

       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}');
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}');
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}');
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

           cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность перед поставщиками')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.expense_item_name.expense_item_4_name);
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

        }
//Авансы покупателей

    BuyersAdvances() {
       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы покупателей')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
       cy.get(CSSDropdown).eq(3).type(credentials.income_item.income_item_1_name + '{enter}');
       cy.get(CSSDropdownValue).eq(2).should("contain", "Выручка")
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы покупателей')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.income_item.income_item_2_name);
       cy.get(CSSDropdownValue).eq(2).should("contain", "Выручка")
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы покупателей')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdown).eq(3).type(credentials.income_item.income_item_1_name + '{enter}');
       cy.get(CSSDropdownValue).eq(2).should("contain", "Выручка")
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы покупателей')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.income_item.income_item_2_name);
       cy.get(CSSDropdownValue).eq(2).should("contain", "Выручка")
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

    }
//Задолженность сотрудникам
    DebtToEmployees() {
       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_1 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).type('300')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_2 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
       cy.get(CSSInput).type('300')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_3 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
       cy.get(CSSInput).type('300')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_4 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSInput).type('300')
       cy.get(CSSButton).click()

    }
//Задолженность по налогам
    TaxDebt(){
        //Социальный налог
       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain",credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        ////////////////////////////////Подоходный налог//////////////////////////////////////////

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_1+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_2+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3+'{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain",credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        ////////////////////////////////Налог на прибыль/////////////////////////////////

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.profit_tax+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain",credentials.expense_item_category.expense_item_category_5)
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.taxes.profit_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        ///////////////////////////НДС/////////////////////////////////

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain','Задолженность по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.Value_added_tax+'{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain",credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSDropdownValue).eq(3).should("contain",credentials.expense_item_category.expense_item_category_6)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

    }
        page11() {
        cy.get(CSSTitle).should("contain", 'Кредиторская задолженность')
    this.DebtToSuppliers()
    this.BuyersAdvances()
    this.DebtToEmployees()
    this.TaxDebt()
        cy.get(CSSNextButton).click()

}

        ////////////////////////////////////Задолженность клиентов////////////////////////////////////////
    CustomerDebt() {
       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность клиентов')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.income_item.income_item_1_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка')
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность клиентов')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should('contain', credentials.income_item.income_item_2_name)
       cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка')
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность клиентов')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.income_item.income_item_1_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка')
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
        cy.get(CSSModalWindow).should('contain', 'Задолженность клиентов')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should('contain', credentials.income_item.income_item_2_name)
       cy.get(CSSDropdownValue).eq(2).should('contain', 'Выручка')
       cy.get(CSSInput).type('100')
       cy.get(CSSButton).click()

    }

        ///////////////////////////////Авансы поставщикам/////////////////////////////////
    AdvancesToSuppliers() {
       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_2)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_3)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_1 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should('contain', credentials.expense_item_name.expense_item_4_name)
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        ////////////////////////////

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_1_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_2_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_2)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdown).eq(3).type(credentials.expense_item_name.expense_item_3_name + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_3)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(1).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы поставщикам')
       cy.get(CSSDropdown).eq(1).type(credentials.counterparties_name.counterparties_name_2 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should('contain', credentials.expense_item_name.expense_item_4_name)
       cy.get(CSSDropdownValue).eq(2).should('contain', credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()
    }
        ////////////////////////////Авансы сотрудникам//////////////////////////////

    AdvancesToEmployees() {
       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_1 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_1)
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_2 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_2)
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_3 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_3)
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(2).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы сотрудникам')
       cy.get(CSSDropdown).eq(1).type(credentials.employee_full_name.employee_full_name_4 + '{enter}');
       cy.get(CSSDropdownValue).eq(3).should("contain", "Зарплата")
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSInput).type('200')
       cy.get(CSSButton).click()
    }
        //////////////////////////Авансы по налогам////////////////////////////
    TaxAdvances() {
        ////////////////////////Социальный налог////////////////////////////////////
       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_1 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_2 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.social_tax + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.social_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        //Подоходный налог

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_1 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_2 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax + '{enter}')
       cy.get(CSSDropdown).eq(2).type(credentials.expense_item_category.expense_item_category_3 + '{enter}')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.income_tax + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_4)
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.income_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()

        //Налог на прибыль

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.profit_tax + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain", credentials.expense_item_category.expense_item_category_5)
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.taxes.profit_tax)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()


        //НДС

       cy.get(CSSCreateNewButton).eq(3).click()
        cy.get(CSSModalWindow).should('contain', 'Авансы по налогам')
       cy.get(CSSDropdown).eq(1).type(credentials.taxes.Value_added_tax + '{enter}')
       cy.get(CSSDropdownValue).eq(2).should("contain", 'Выручка')
       cy.get(CSSDropdownValue).eq(3).should("contain", credentials.expense_item_category.expense_item_category_7)
       cy.get(CSSInput).type('50')
       cy.get(CSSButton).click()


    }
    page12() {
        cy.get(CSSTitle).should("contain", 'Дебиторская задолженность')
       this.CustomerDebt()
       this.AdvancesToSuppliers()
       this.AdvancesToEmployees()
       this.TaxAdvances()
    cy.get(CSSNextButton).click()
}    //Кредиты и займы
    page13(){
        cy.get(CSSTitle).should("contain",'Кредиты и займы')
       cy.get(CSSCreateNewButton).eq(0).click()
       cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_1)
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
       cy.get(CSSInput).eq(1).type('0001')
       cy.get(CSSInput).eq(2).type('1100')
        cy.get(CSSDatepicker).click()
        cy.get(CSSDatepickerMonth).contains('декабрь').click({force: true});
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
       cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_2)
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
       cy.get(CSSInput).eq(1).type('0002')
       cy.get(CSSInput).eq(2).type('2200')
        cy.get(CSSDatepicker).click()
        cy.get(CSSDatepickerRightButton).click({force: true})
        cy.get(CSSDatepickerMonth).contains('декабрь').click({force: true});
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
       cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_3)
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_2+'{enter}')
       cy.get(CSSInput).eq(1).type('0003')
       cy.get(CSSInput).eq(2).type('3300')
        cy.get(CSSDatepicker).click()
        cy.get(CSSDatepickerRightButton).click({force: true})
        cy.get(CSSDatepickerMonth).contains('январь').click({force: true});
       cy.get(CSSGreenButton).click()

       cy.get(CSSCreateNewButton).eq(0).click()
       cy.get(CSSInput).eq(0).type(credentials.credits.credit_name_4)
       cy.get(CSSDropdown).eq(0).type(credentials.counterparties_name.counterparties_name_2+'{enter}')
       cy.get(CSSInput).eq(1).type('0004')
       cy.get(CSSInput).eq(2).type('4400')
        cy.get(CSSDatepicker).click()
        cy.get(CSSDatepickerRightButton).dblclick({force: true})
        cy.get(CSSDatepickerMonth).contains('январь').click({force: true});
       cy.get(CSSGreenButton).click()

        cy.get(CSSNextButton).click()
    }
    //Основные средства
    page14(){
        cy.get(CSSTitle).should("contain",'Основные средства')

        cy.get(CSSNextButton).click()
    }
    //Все готово
    page15(){
        cy.get(CSSTitle).should("contain",'Все готово')
        //с КЗ и ДЗ = 27 800, БЕЗ - 29 000
       cy.get(CSSBigBoldGreenAmount).should('have.text','27 800')
        cy.get(CSSNextButton).click()
    }
    GetDashboard(){
        cy.url().should('eq', 'https://dev.fin-consult.com/home');
    }
}
export default onboarding