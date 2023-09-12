import checking_onboarding_data from "../pageObjects/checking_onboarding_data";
const Checking_onboarding_data = new checking_onboarding_data()
import Login from "../pageObjects/login";
const login = new Login
it('Check all data entered during onboarding',function (){
    login.login()
    Checking_onboarding_data.dashboard_revenue()
    Checking_onboarding_data.dashboard_expense()
    Checking_onboarding_data.dashboard_profit()
    Checking_onboarding_data.dashboard_monetary_resources()
    Checking_onboarding_data.dashboard_working_capital()
    Checking_onboarding_data.dashboard_accounts_receivable()
    Checking_onboarding_data.dashboard_accounts_payable()
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