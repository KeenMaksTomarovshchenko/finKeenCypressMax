import Locators from "../data/locators";
import credentials from "../data/credentials";
import {setupHooks} from "cypress/mount-utils";
const locators = new Locators()

class checking_onboarding_data {

    dashboard_revenue(){
        locators.getCardTitle().eq(0).should('contain','Выручка')
        locators.getCardValue().eq(0).should('contain','0')
        locators.getCardRow().eq(0).should('contain','К месяцу', '-')
        locators.getCardRow().eq(0).should('contain', '-')
        locators.getCardRow().eq(1).should('contain','К дню', '-')
        locators.getCardRow().eq(1).should('contain','-')
        locators.getCardRow().eq(2).should('contain','Прошлый период', '0')
        locators.getCardRow().eq(2).should('contain', '0')
    }
    dashboard_expense(){
        locators.getCardTitle().eq(1).should('contain','Расходы')
        locators.getCardValue().eq(1).should('contain','0')
        locators.getCardRow().eq(3).should('contain','К месяцу', '-')
        locators.getCardRow().eq(3).should('contain', '-')
        locators.getCardRow().eq(4).should('contain','К дню', '-')
        locators.getCardRow().eq(4).should('contain','-')
        locators.getCardRow().eq(5).should('contain','Прошлый период', '0')
        locators.getCardRow().eq(5).should('contain', '0')
    }
    dashboard_profit(){
        locators.getCardTitle().eq(2).should('contain','Прибыль')
        locators.getCardValue().eq(2).should('contain','0')
        locators.getCardRow().eq(6).should('contain','К месяцу', '-')
        locators.getCardRow().eq(6).should('contain', '-')
        locators.getCardRow().eq(7).should('contain','К дню', '-')
        locators.getCardRow().eq(7).should('contain','-')
        locators.getCardRow().eq(8).should('contain','Прошлый период', '0')
        locators.getCardRow().eq(8).should('contain', '0')
    }
    dashboard_monetary_resources(){
        locators.getSecondaryCardTitle().eq(0).should('contain','Денежных средств')
        locators.getSecondaryCardTitle().eq(1).should('contain','30 000')
        locators.getAccountName().should(($element) => {
            const text = $element.text();
            expect(text).to.include(credentials.account_name.account_name_1);
            expect(text).to.include(credentials.account_name.account_name_2);
        });
        locators.getAccountValue().should(($element) => {
            const text = $element.text();
            expect(text).to.include('10 000');
            expect(text).to.include('20 000');
        });
    }
    dashboard_working_capital(){
        locators.getSecondaryCardTitle().eq(2).should('contain','Оборотный капитал')
        locators.getSecondaryCardTitle().eq(3).should('contain','38 800')//40 000 без КЗ и ДЗ, 38 800 - с
        locators.getSecondaryCardCell().eq(0).should('contain','Прошлый период')
        locators.getSecondaryCardCell().eq(1).should('contain','0')
    }
    dashboard_accounts_receivable(){
        locators.getSecondaryCardTitle().eq(4).should('contain','Дебиторская задолженность')
        locators.getSecondaryCardTitle().eq(5).should('contain','2 100')//2 100
        locators.getSecondaryCardCell().eq(2).should('contain','Прошлый период')
        locators.getSecondaryCardCell().eq(3).should('contain','0')
    }
    dashboard_accounts_payable(){
        locators.getSecondaryCardTitle().eq(6).should('contain','Кредиторская задолженность')
        locators.getSecondaryCardTitle().eq(7).should('contain','3 300')//3 300
        locators.getSecondaryCardCell().eq(4).should('contain','Прошлый период' )
        locators.getSecondaryCardCell().eq(5).should('contain', '0')
    }
    transaction_registry_accounts_receivable(){
        locators.OpenBurgerMenu()
        locators.BoldText2().contains('Реестры').click()
        locators.OpenMenuPage().contains('Денежные транзакции').click()
    }
    transaction_registry_accounts_payable(){
        cy.wait(1000)
    }
    register_of_documents_accounts_receivable(){
        locators.OpenMenuPage().contains('Документы').click()
    }
    register_of_documents_accounts_payable(){
        cy.wait(1000)
    }
    salary_register_accounts_receivable(){
        locators.OpenMenuPage().contains('Зарплаты').click()
    }
    salary_register_accounts_payable(){
        cy.wait(1000)
    }
    tax_register_accounts_receivable(){
        locators.OpenMenuPage().contains('Налоги').click()
    }
    tax_register_accounts_payable(){
        cy.wait(1000)
    }
    products_registry_warehouses_and_goods(){
        locators.OpenMenuPage().contains('Товары').click()
        cy.wait(1000)
    }
    report_flow_of_funds_onboarding(){
        locators.BoldText2().contains('Отчеты').click()
        locators.OpenMenuPage().contains('Движение денежных средств').click()
        cy.wait(1000)
    }
    report_profits_and_loses_onboarding(){
        locators.OpenMenuPage().contains('Прибыли и убытки').click()
        cy.wait(1000)
    }
    report_balance_onboarding(){
        locators.OpenMenuPage().contains('Баланс').click()
        cy.wait(1000)
            cy.get('[class="white-block balance-report"]')
                .find(locators.getBalanceConvergenceRow())
                .find(locators.getRowCell())
                .last()
                .should('contain','0')
    }
    report_accounts_receivable_onboarding(){
        locators.OpenMenuPage().contains('Дебиторская задолженность').click()
        cy.wait(1000)
        locators.getAmountGreen3().should("contain",'2 100')
    }
    report_accounts_payable_onboarding(){
        locators.OpenMenuPage().contains('Кредиторская задолженность').click()
        cy.wait(1000)
        locators.getAmountGreen3().should("contain",'3 300')
    }
    report_warehouses_and_products(){
        locators.OpenMenuPage().contains('Товарные запасы').click()
        cy.wait(1000)
    }
}
export default checking_onboarding_data