import checking_onboarding_data from "../pageObjects/checking_onboarding_data";
const Checking_onboarding_data = new checking_onboarding_data()
import Login from "../pageObjects/login";
const login = new Login
before(function (){
    cy.viewport(1300, 800);
});
it('Check all data entered during onboarding',function (){
    login.login()
    Checking_onboarding_data.dashboard()
    Checking_onboarding_data.transaction_registry_accounts_receivable()
    Checking_onboarding_data.transaction_registry_accounts_payable()
    Checking_onboarding_data.register_of_documents_accounts_receivable()
    Checking_onboarding_data.register_of_documents_accounts_payable()
    Checking_onboarding_data.salary_register_accounts_receivable()
    Checking_onboarding_data.salary_register_accounts_payable()
    Checking_onboarding_data.tax_register_accounts_receivable()
    Checking_onboarding_data.tax_register_accounts_payable()
    Checking_onboarding_data.products_registry_warehouses_and_goods()
    Checking_onboarding_data.report_flow_of_funds_onboarding()
    Checking_onboarding_data.report_profits_and_loses_onboarding()
    Checking_onboarding_data.report_balance_onboarding()
    Checking_onboarding_data.report_accounts_receivable_onboarding()
    Checking_onboarding_data.report_accounts_payable_onboarding()
    }
)