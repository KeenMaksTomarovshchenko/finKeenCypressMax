import credentials from "../data/credentials";

const CSSBurgerMenu = '[class="expand-icon"]'
const CSSMenuChapter = '[class="text-component bold"]'
const CSSBoldGreen = '[class="text-component bold green"]'
const CSSMenuPage = '[class="text-component"]'
const CSSCardTitleBold = '[class="main-indicator-card__title"]'
const CSSCardTitleCell = '[class="home-indicator__value"]'
const CSSCardRow = '[class="main-indicator-card__content-row"]'
const CSSRow = '[class="row"]'
const CSSTableHeaderRow = '[class="item-header opened"]'
const CSSTableContentChapter = '[class="item-content opened"]'
const CSSTableCell = '[class="r-cell resizable"]'
const CSSTableCellClickable = '[class="r-cell resizable clickable"]'
const CSSTableContentRow = '[class="custom-row"]'
const CSSTableCellName = '[class="r-cell first-cell"]'
const CSSTableContentRowProducts = '[class="custom-row products"]'
const CSSSecondaryCardTitleBold = '[class="secondary-indicator-card__title-cell"]'
const CSSSecondaryCardCell = '[class="secondary-indicator-card__content-cell"]'
const CSSGreenNumber = '[class="text-component bold link-accent"]'
const CSSAccountName = '[class="account-name"]'
const CSSAccountBalance = '[class="account-value"]'
const CSSModalWindow = '[class="modal-block-wrapper"]'
const CSSCloseButton = '[class="cross-icon-wrapper"]'
const CSSMenuBar = '[class="side-panel"]'

class checking_onboarding_data {

    dashboard(){

        function checkCardTitles(number){
            for (let number = 0; number < 3; number++) {
            cy.get(CSSCardTitleCell)
                .eq(number)
                .should('have.text','0')
        }}
        checkCardTitles()

        function checkCardRows(rowNumber){
            for (let rowNumber = 0; rowNumber < 3; rowNumber++) {
                cy.get(CSSCardRow).eq(rowNumber * 3).should('have.text', 'К месяцу:-');
                cy.get(CSSCardRow).eq(rowNumber * 3 + 1).should('have.text', 'К дню:-');
                cy.get(CSSCardRow).eq(rowNumber * 3 + 2).should('have.text', 'Прошлый период:0');
            }

        }
        checkCardRows()

        cy.get(CSSSecondaryCardTitleBold).eq(1).should('contain','30 000')
       cy.get(CSSAccountName).should(($element) => {
            const text = $element.text();
            expect(text).to.include(credentials.account_name.account_name_1);
            expect(text).to.include(credentials.account_name.account_name_2);
        });
        cy.get(CSSAccountBalance).should(($element) => {
            const text = $element.text();
            expect(text).to.include('10 000');
            expect(text).to.include('20 000');
        });

        function checkSecondaryCardTitle(number, value){
            cy.get(CSSSecondaryCardTitleBold).eq(number).should('have.text',value)
        }
        checkSecondaryCardTitle(3,'38 800')
        checkSecondaryCardTitle(5,'2 100')
        checkSecondaryCardTitle(7,'3 300')
        checkSecondaryCardTitle(9,'0')
        checkSecondaryCardTitle(11,'0')
        checkSecondaryCardTitle(13,'27 800')
        checkSecondaryCardTitle(15,'0')
        function checkSecondaryCardCell(number){
            for (let number = 0; number < 6; number++){
            cy.get(CSSSecondaryCardCell).eq(number * 2 + 1).should('have.text','0')
        }}
        checkSecondaryCardCell()
    }
    transaction_registry_accounts_receivable(){
        cy.get(CSSBurgerMenu).click()
        cy.get(CSSMenuBar).find(CSSMenuChapter).contains('Реестры').click()
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Денежные транзакции').click()
        cy.get(CSSRow).should('have.length',12)
    }
    transaction_registry_accounts_payable(){
        cy.get(CSSRow).should('have.length',12)
    }
    register_of_documents_accounts_receivable(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Документы').click()
        cy.get(CSSRow).should('have.length',24)
    }
    register_of_documents_accounts_payable(){
        cy.wait(1000)
        cy.get(CSSRow).should('have.length',24)
    }
    salary_register_accounts_receivable(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Зарплаты').click()
        cy.get(CSSRow).should('have.length',12)
    }
    salary_register_accounts_payable(){
        cy.wait(1000)
        cy.get(CSSRow).should('have.length',12)
    }
    tax_register_accounts_receivable(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Налоги').click()
        cy.get(CSSRow).should('have.length',31)
    }
    tax_register_accounts_payable(){
        cy.wait(1000)
        cy.get(CSSRow).should('have.length',31)
    }
    products_registry_warehouses_and_goods(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товары').click()
        cy.wait(1000)
        cy.get(CSSRow).should('have.length',4)
    }
    report_flow_of_funds_onboarding(){

        cy.get(CSSMenuBar).find(CSSMenuChapter).contains('Отчеты').click()
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Движение денежных средств').click()
        cy.wait(1000)

        function checkCategoryMainValue(categorySelector, expectedValue){
            cy.get(categorySelector)
                .find(CSSTableHeaderRow)
                .find(CSSTableCell)
                .last()
                .should("have.text",expectedValue)
        }

        function checkCategoryValue(categorySelector, i, itemName, expectedValue){

            cy.get(categorySelector)
                .find(CSSTableContentRow)
                .eq(i)
                .should('contain', itemName)
                .find(CSSTableCell)
                .last()
                .should('have.text',expectedValue)
        }

        checkCategoryMainValue('[class="custom-row money-from-start"]', '30 000')
        checkCategoryValue('[class="custom-row money-from-start"]', 0,'Счёт 1', '10 000')
        checkCategoryValue('[class="custom-row money-from-start"]', 1,'Счёт 2', '20 000')

        //Выручка

        checkCategoryMainValue('[class="custom-row revenue"]', '0')
        checkCategoryValue('[class="custom-row revenue"]', 0,credentials.income_item.income_item_1_name, '0')
        checkCategoryValue('[class="custom-row revenue"]', 1,credentials.income_item.income_item_2_name, '0')
        checkCategoryValue('[class="custom-row revenue"]', 2,'Возмещение НДС', '0')

        //Себестоимость

        checkCategoryMainValue('[class="custom-row cost"]', '0')
        checkCategoryValue('[class="custom-row cost"]', 0,credentials.expense_item_name.expense_item_2_name, '0')
        checkCategoryValue('[class="custom-row cost"]', 1,'Зарплата', '0')
        checkCategoryValue('[class="custom-row cost"]', 2,'Социальный налог', '0')
        checkCategoryValue('[class="custom-row cost"]', 3,'Подоходный налог', '0')

        // Общие

        checkCategoryMainValue('[class="custom-row common"]', '0')
        checkCategoryValue('[class="custom-row common"]', 0,credentials.expense_item_name.expense_item_4_name, '0')
        checkCategoryValue('[class="custom-row common"]', 1,'Зарплата', '0')
        checkCategoryValue('[class="custom-row common"]', 2,'Подоходный налог', '0')
        checkCategoryValue('[class="custom-row common"]', 3,'Социальный налог', '0')

        // Административные

        checkCategoryMainValue('[class="custom-row administrative"]', '0')
        checkCategoryValue('[class="custom-row administrative"]', 0,credentials.expense_item_name.expense_item_1_name, '0')
        checkCategoryValue('[class="custom-row administrative"]', 1,'Зарплата', '0')
        checkCategoryValue('[class="custom-row administrative"]', 2,'Подоходный налог', '0')
        checkCategoryValue('[class="custom-row administrative"]', 3,'Социальный налог', '0')
        checkCategoryValue('[class="custom-row administrative"]', 5,'Погашение НДС', '0')

        // Коммерческие

        checkCategoryMainValue('[class="custom-row commercial"]', '0')
        checkCategoryValue('[class="custom-row commercial"]', 0,credentials.expense_item_name.expense_item_3_name, '0')
        checkCategoryValue('[class="custom-row commercial"]', 1,'Зарплата', '0')
        checkCategoryValue('[class="custom-row commercial"]', 2,'Подоходный налог', '0')
        checkCategoryValue('[class="custom-row commercial"]', 3,'Социальный налог', '0')        //Товары

        checkCategoryMainValue('[class="custom-row operation-activity"]', '0')

                                cy.get('[class="custom-row operation-activity"]').eq(1)
                                    .find(CSSTableContentRowProducts)
                                    .eq(0)
                                    .should('contain','Склад 1')
                                    .find(CSSTableCell)
                                    .last()
                                    .should('have.text','0')

                                cy.get('[class="custom-row operation-activity"]').eq(1)
                                    .find(CSSTableContentRowProducts)
                                    .eq(1)
                                    .should('contain','Склад 2')
                                    .find(CSSTableCell)
                                    .last()
                                    .should('have.text','0')

                                cy.get('[class="custom-row operation-activity"]').eq(1)
                                    .find(CSSTableContentRowProducts)
                                    .eq(2)
                                    .should('contain','Склад 3')
                                    .find(CSSTableCell)
                                    .last()
                                    .should('have.text','0')
        // Кредиты и займы

        checkCategoryValue('[class="custom-row credits-and-loans"]', 0,credentials.credits.credit_name_1+' Поступление', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 1,credentials.credits.credit_name_1+' Выбытие', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 2,credentials.credits.credit_name_2+' Поступление', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 3,credentials.credits.credit_name_2+' Выбытие', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 4,credentials.credits.credit_name_3+' Поступление', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 5,credentials.credits.credit_name_3+' Выбытие', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 6,credentials.credits.credit_name_4+' Поступление', '0')
        checkCategoryValue('[class="custom-row credits-and-loans"]', 7,credentials.credits.credit_name_4+' Выбытие', '0')

        //Денег на конец месяца

        checkCategoryMainValue('[class="custom-row money-to-end"]', '30 000')
        checkCategoryValue('[class="custom-row money-to-end"]', 0,'Счёт 1', '10 000')
        checkCategoryValue('[class="custom-row money-to-end"]', 1,'Счёт 2', '20 000')
    }
    report_profits_and_loses_onboarding(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Прибыли и убытки').click()
        cy.wait(1000)

        // Общая выручка
                cy.get('[class="custom-row revenue"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row revenue"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row revenue"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row revenue"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row revenue"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Себестоимость

                cy.get('[class="custom-row cost"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row cost"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row cost"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row cost"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row cost"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Маржа

                cy.get('[class="custom-row marginal-profit"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                cy.get('[class="custom-row marginal-profit-efficiency"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

        // Общие расходы

                cy.get('[class="custom-row common"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row common"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row common"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row common"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row common"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Валовая

                cy.get('[class="custom-row gross-profit"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                cy.get('[class="custom-row gross-profit-efficiency"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

        // Административные

                cy.get('[class="custom-row administrative"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row administrative"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row administrative"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row administrative"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row administrative"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Коммерческие

                cy.get('[class="custom-row commercial"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row commercial"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row commercial"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row commercial"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row commercial"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Операционная

                cy.get('[class="custom-row operating-profit"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                cy.get('[class="custom-row operating-profit-efficiency"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

        // Послеоперационные расходы

                cy.get('[class="custom-row post-operating-spendings"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                        cy.get('[class="custom-row post-operating-spendings"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row post-operating-spendings"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','0')

                        cy.get('[class="custom-row post-operating-spendings"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','0')

        // Чистая

                cy.get('[class="custom-row net-profit"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')

                cy.get('[class="custom-row net-profit-efficiency"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text",'0')
    }
    report_balance_onboarding(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Баланс').click()
        cy.wait(1000)

        //Активы

                cy.get('[class="custom-row assets"]')
                    .find(CSSTableCell)
                    .last()
                    .should("have.text", '42 100')

        //Товары

                cy.get('[class="custom-row stocks"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should("have.text", '10 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'1 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'5 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'4 000')

        //Деньги

                cy.get('[class="custom-row funds"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '30 000')

                        cy.get('[class="custom-row funds"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'10 000')

                        cy.get('[class="custom-row funds"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'20 000')

        //Дебиторка

                cy.get('[class="custom-row accounts-receivable"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '2 100')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'400')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'400')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'800')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'500')

        //Пассивы

                cy.get('[class="custom-row passive"]')
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '42 100')

        //Собственный капитал

                cy.get('[class="custom-row equity"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '27 800')

                        cy.get('[class="custom-row equity"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'27 800')

                        cy.get('[class="custom-row equity"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'0')

        //Кредиты (долгосрочные)

                cy.get('[class="custom-row long-term"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '6 600')

                        // cy.get('[class="custom-row long-term"]')
                        //     .find(CSSTableContentChapter)
                        //     .find(CSSTableContentRow)
                        //     .eq(0)
                        //     .find(CSSTableCell)
                        //     .last()
                        //     .should("have.text",'2 200')
                        //
                        // cy.get('[class="custom-row long-term"]')
                        //     .find(CSSTableContentChapter)
                        //     .find(CSSTableContentRow)
                        //     .eq(1)
                        //     .find(CSSTableCell)
                        //     .last()
                        //     .should("have.text",'4 400')

        //Кредиты (краткосрочные)

                cy.get('[class="custom-row short-term"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '4 400')

                        // cy.get('[class="custom-row short-term"]')
                        //     .find(CSSTableContentChapter)
                        //     .find(CSSTableContentRow)
                        //     .eq(0)
                        //     .find(CSSTableCell)
                        //     .last()
                        //     .should("have.text",'1 100')
                        //
                        // cy.get('[class="custom-row short-term"]')
                        //     .find(CSSTableContentChapter)
                        //     .find(CSSTableContentRow)
                        //     .eq(1)
                        //     .find(CSSTableCell)
                        //     .last()
                        //     .should("have.text",'3 300')

        //Кредиторская задолженность

                cy.get('[class="custom-row accounts-payable"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '3 300')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'800')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'800')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'1 200')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .last()
                            .should("have.text",'500')

        //Сходимость баланса

                cy.get('[class="custom-row balance-convergence"]')
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '0')

    }
    report_accounts_receivable_onboarding(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Дебиторская задолженность').click()
        cy.wait(1000)

        //Текущая
        
       cy.get(CSSBoldGreen).should("have.text",'2 100')

        //Задолженность клиентов

                cy.get('[class="custom-row customers-debt"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','400')

                        cy.get('[class="custom-row customers-debt"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row customers-debt"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Авансы поставщикам

                cy.get('[class="custom-row advances-to-suppliers"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','400')

                        cy.get('[class="custom-row advances-to-suppliers"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',4)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                            cy.get('[class="custom-row advances-to-suppliers"]')
                                .find(CSSTableContentRow)
                                .eq(1)
                                .find(CSSTableCell)
                                .should('have.text','200')
                                .click()

                                    cy.get(CSSModalWindow)
                                        .find(CSSRow)
                                        .should('have.length',2)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Авансы сотрудникам


               cy.get('[class="custom-row advances-to-employees"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','800')

                       cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                               cy.get(CSSModalWindow)
                                   .find(CSSRow)
                                   .should('have.length',1)

                                       cy.wait(1000)
                                       cy.get(CSSCloseButton)

                       cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                               cy.get(CSSModalWindow)
                                   .find(CSSRow)
                                   .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                       cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                       cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Авансы по налогам

               cy.get('[class="custom-row taxes-advances"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','800')

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',4)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',4)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','50')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','50')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Изменение

        cy.get(CSSMenuChapter).contains('Изменение').click()

                cy.get('[class="custom-row begin-period-debt"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '2 100')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'400')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row advances-to-suppliers"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'400')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row advances-to-employees"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row taxes-advances"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'500')

                cy.get('[class="custom-row changes-by-period"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row advances-to-suppliers"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row advances-to-employees"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row taxes-advances"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')


                cy.get('[class="custom-row end-period-debt"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '2 100')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'400')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row advances-to-suppliers"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'400')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row advances-to-employees"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row taxes-advances"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'500')
    }
    report_accounts_payable_onboarding(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Кредиторская задолженность').click()
        cy.wait(1000)
        
       cy.get(CSSBoldGreen).should("have.text",'3 300')

        //Текущая

        cy.get(CSSBoldGreen).should("have.text",'2 100')

        //Задолженность перед поставщиками

        cy.get('[class="custom-row customers-debt"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .should('have.text','800')

                cy.get('[class="custom-row customers-debt"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','400')
                            .click()

                                    cy.get(CSSModalWindow)
                                        .find(CSSRow)
                                        .should('have.length',4)

                                            cy.wait(1000)
                                            cy.get(CSSCloseButton)

                cy.get('[class="custom-row customers-debt"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','400')
                            .click()

                                    cy.get(CSSModalWindow)
                                        .find(CSSRow)
                                        .should('have.length',4)

                                            cy.wait(1000)
                                            cy.get(CSSCloseButton)

        //Авансы покупателей

                cy.get('[class="custom-row advances-to-suppliers"]')
                            .find(CSSTableHeaderRow)
                            .find(CSSTableCell)
                            .should('have.text','800')

                        cy.get('[class="custom-row advances-to-suppliers"]')
                                    .find(CSSTableContentRow)
                                    .eq(0)
                                    .find(CSSTableCell)
                                    .should('have.text','400')
                                    .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                            cy.wait(1000)
                                            cy.get(CSSCloseButton)

                cy.get('[class="custom-row advances-to-suppliers"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','400')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                            cy.wait(1000)
                                            cy.get(CSSCloseButton)

        //Задолженность сотрудникам

                cy.get('[class="custom-row advances-to-employees"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','1200')

                        cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','300')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','300')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','300')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row advances-to-employees"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','300')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Задолженность по налогам

                cy.get('[class="custom-row taxes-advances"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .should('have.text','800')

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',4)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .should('have.text','200')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',4)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .should('have.text','50')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',1)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

                        cy.get('[class="custom-row taxes-advances"]')
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .should('have.text','50')
                            .click()

                                cy.get(CSSModalWindow)
                                    .find(CSSRow)
                                    .should('have.length',2)

                                        cy.wait(1000)
                                        cy.get(CSSCloseButton)

        //Изменение

        cy.get(CSSMenuChapter).contains('Изменение').click()

                cy.get('[class="custom-row begin-period-debt"]')
                    .find(CSSTableHeaderRow)
                    .find(CSSTableCell)
                    .last()
                    .should('have.text', '3 300')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row debt-to-suppliers"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row buyers-advances"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row debt-to-employees"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'1 200')

                                cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row tax-arrears"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'500')

        cy.get('[class="custom-row changes-by-period"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row debt-to-suppliers"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row buyers-advances"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row debt-to-employees"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

                            cy.get('[class="custom-row changes-by-period"]')
                                .find('[class="custom-row tax-arrears"]')
                                .find(CSSTableCellClickable)
                                .last()
                                .should("have.text",'0')

        cy.get('[class="custom-row end-period-debt"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '3 300')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row debt-to-suppliers"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row buyers-advances"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'800')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row debt-to-employees"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'1 200')

                            cy.get('[class="custom-row end-period-debt"]')
                                .find('[class="custom-row tax-arrears"]')
                                .find(CSSTableCell)
                                .last()
                                .should("have.text",'500')
    }
    report_warehouses_and_products(){
        cy.get(CSSMenuBar).find(CSSMenuPage).contains('Товарные запасы').click()
        cy.wait(1000)
        
    }
}
export default checking_onboarding_data