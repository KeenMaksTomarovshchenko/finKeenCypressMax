import credentials from "../data/credentials";

const CSSBurgerMenu = '[class="expand-icon"]'
const CSSMenuChapter = '[class="text-component bold"]'
const CSSMenuPage = '[class="text-component pointer"]'
const CSSCardTitleBold = '[class="main-indicator-card__title"]'
const CSSCardTitleCell = '[class="home-indicator__value"]'
const CSSCardRow = '[class="main-indicator-card__content-row"]'
const CSSTableHeaderRow = '[class="item-header opened"]'
const CSSTableContentChapter = '[class="item-content opened"]'
const CSSTableCell = '[class="r-cell resizable"]'
const CSSTableContentRow = '[class="custom-row"]'
const CSSSecondaryCardTitleBold = '[class="secondary-indicator-card__title-cell"]'
const CSSSecondaryCardCell = '[class="secondary-indicator-card__content-cell"]'
const CSSGreenNumber = '[class="text-component bold link-accent"]'
const CSSAccountName = '[class="account-name"]'
const CSSAccountBalance = '[class="account-value"]'

class checking_onboarding_data {

    dashboard_revenue(){
        cy.get(CSSCardTitleBold).eq(0).should('contain','Выручка')
        cy.get(CSSCardTitleCell).eq(0).should('contain','0')
        
        cy.get(CSSCardRow).eq(0).should('contain','К месяцу', '-')
        cy.get(CSSCardRow).eq(0).should('contain', '-')
        
        cy.get(CSSCardRow).eq(1).should('contain','К дню', '-')
        cy.get(CSSCardRow).eq(1).should('contain','-')
        
        cy.get(CSSCardRow).eq(2).should('contain','Прошлый период', '0')
        cy.get(CSSCardRow).eq(2).should('contain', '0')
    }
    dashboard_expense(){
        cy.get(CSSCardTitleBold).eq(1).should('contain','Расходы')
        cy.get(CSSCardTitleCell).eq(1).should('contain','0')
        
        cy.get(CSSCardRow).eq(3).should('contain','К месяцу', '-')
        cy.get(CSSCardRow).eq(3).should('contain', '-')
        
        cy.get(CSSCardRow).eq(4).should('contain','К дню', '-')
        cy.get(CSSCardRow).eq(4).should('contain','-')
        
        cy.get(CSSCardRow).eq(5).should('contain','Прошлый период', '0')
        cy.get(CSSCardRow).eq(5).should('contain', '0')
    }
    dashboard_profit(){
        cy.get(CSSCardTitleBold).eq(2).should('contain','Прибыль')
        cy.get(CSSCardTitleCell).eq(2).should('contain','0')
        
        cy.get(CSSCardRow).eq(6).should('contain','К месяцу', '-')
        cy.get(CSSCardRow).eq(6).should('contain', '-')
        
        cy.get(CSSCardRow).eq(7).should('contain','К дню', '-')
        cy.get(CSSCardRow).eq(7).should('contain','-')
        
        cy.get(CSSCardRow).eq(8).should('contain','Прошлый период', '0')
        cy.get(CSSCardRow).eq(8).should('contain', '0')
    }
    dashboard_monetary_resources(){
        cy.get(CSSSecondaryCardTitleBold).eq(0).should('contain','Денежных средств')
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
    }
    dashboard_working_capital(){
        cy.get(CSSSecondaryCardTitleBold).eq(2).should('contain','Оборотный капитал')
        cy.get(CSSSecondaryCardTitleBold).eq(3).should('contain','38 800')//40 000 без КЗ и ДЗ, 38 800 - с
        
        cy.get(CSSSecondaryCardCell).eq(0).should('contain','Прошлый период')
        cy.get(CSSSecondaryCardCell).eq(1).should('contain','0')
    }
    dashboard_accounts_receivable(){
        cy.get(CSSSecondaryCardTitleBold).eq(4).should('contain','Дебиторская задолженность')
        cy.get(CSSSecondaryCardTitleBold).eq(5).should('contain','2 100')//2 100
        
        cy.get(CSSSecondaryCardCell).eq(2).should('contain','Прошлый период')
        cy.get(CSSSecondaryCardCell).eq(3).should('contain','0')
    }
    dashboard_accounts_payable(){
        cy.get(CSSSecondaryCardTitleBold).eq(6).should('contain','Кредиторская задолженность')
        cy.get(CSSSecondaryCardTitleBold).eq(7).should('contain','3 300')//3 300
        
        cy.get(CSSSecondaryCardCell).eq(4).should('contain','Прошлый период' )
        cy.get(CSSSecondaryCardCell).eq(5).should('contain', '0')
    }
    transaction_registry_accounts_receivable(){
        cy.get(CSSBurgerMenu).click()
        cy.get(CSSMenuChapter).contains('Реестры').click()
        cy.get(CSSMenuPage).contains('Денежные транзакции').click()
    }
    transaction_registry_accounts_payable(){
        cy.wait(1000)
    }
    register_of_documents_accounts_receivable(){
        cy.get(CSSMenuPage).contains('Документы').click()
    }
    register_of_documents_accounts_payable(){
        cy.wait(1000)
    }
    salary_register_accounts_receivable(){
        cy.get(CSSMenuPage).contains('Зарплаты').click()
    }
    salary_register_accounts_payable(){
        cy.wait(1000)
    }
    tax_register_accounts_receivable(){
        cy.get(CSSMenuPage).contains('Налоги').click()
    }
    tax_register_accounts_payable(){
        cy.wait(1000)
    }
    products_registry_warehouses_and_goods(){
        cy.get(CSSMenuPage).contains('Товары').click()
        cy.wait(1000)
    }
    report_flow_of_funds_onboarding(){
        cy.get(CSSMenuChapter).contains('Отчеты').click()
        cy.get(CSSMenuPage).contains('Движение денежных средств').click()
        cy.wait(1000)
    }
    report_profits_and_loses_onboarding(){
        cy.get(CSSMenuPage).contains('Прибыли и убытки').click()
        cy.wait(1000)
    }
    report_balance_onboarding(){
        cy.get(CSSMenuPage).contains('Баланс').click()
        cy.wait(1000)

        cy.get('[class="custom-row assets"]')
            .find(CSSTableCell)
            .last()
            .should('contain', '42 100')

        cy.get('[class="custom-row stocks"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '10 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'1 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'5 000')

                        cy.get('[class="custom-row stocks"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'4 000')
                    

        cy.get('[class="custom-row funds"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '30 000')

                        cy.get('[class="custom-row funds"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'10 000')

                        cy.get('[class="custom-row funds"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'20 000')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '2 100')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'400')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'400')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'800')

                        cy.get('[class="custom-row accounts-receivable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'500')

        cy.get('[class="custom-row passive"]')
            .find(CSSTableCell)
            .last()
            .should('contain', '42 100')

        cy.get('[class="custom-row equity"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '27 800')

                        cy.get('[class="custom-row equity"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'27 800')

                        cy.get('[class="custom-row equity"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'0')

        cy.get('[class="custom-row long-term"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '6 600')

                        cy.get('[class="custom-row long-term"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'2 200')

                        cy.get('[class="custom-row long-term"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'4 400')


        cy.get('[class="custom-row short-term"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '4 400')

                        cy.get('[class="custom-row short-term"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'1 100')

                        cy.get('[class="custom-row short-term"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'3 300')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '3 300')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(0)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'800')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(1)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'800')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(2)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'1 200')

                        cy.get('[class="custom-row accounts-payable"]')
                            .find(CSSTableContentChapter)
                            .find(CSSTableContentRow)
                            .eq(3)
                            .find(CSSTableCell)
                            .last()
                            .should("contain",'500')

        cy.get('[class="custom-row balance-convergence"]')
            .find(CSSTableCell)
            .last()
            .should('contain', '0')

    }
    report_accounts_receivable_onboarding(){
        cy.get(CSSMenuPage).contains('Дебиторская задолженность').click()
        cy.wait(1000)
        
       cy.get(CSSGreenNumber).should("contain",'2 100')

        cy.get(CSSMenuChapter).contains('Изменение').click()

        cy.get('[class="custom-row begin-period-debt"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '2 100')

                            cy.get('[class="custom-row begin-period-debt"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'400')

                            cy.get('[class="custom-row advances-to-suppliers"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'400')

                            cy.get('[class="custom-row advances-to-employees"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'800')

                            cy.get('[class="custom-row taxes-advances"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'500')
    }
    report_accounts_payable_onboarding(){
        cy.get(CSSMenuPage).contains('Кредиторская задолженность').click()
        cy.wait(1000)
        
       cy.get(CSSGreenNumber).should("contain",'3 300')

        cy.get(CSSMenuChapter).contains('Изменение').click()

        cy.get('[class="custom-row begin-period-debt"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('contain', '3 300')

                            cy.get('[class="custom-row debt-to-suppliers"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'800')

                            cy.get('[class="custom-row buyers-advances"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'800')

                            cy.get('[class="custom-row debt-to-employees"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'1 200')

                            cy.get('[class="custom-row tax-arrears"]')
                                .find('[class="custom-row customers-debt"]')
                                .find(CSSTableCell)
                                .last()
                                .should("contain",'500')
    }
    report_warehouses_and_products(){
        cy.get(CSSMenuPage).contains('Товарные запасы').click()
        cy.wait(1000)
        
    }
}
export default checking_onboarding_data