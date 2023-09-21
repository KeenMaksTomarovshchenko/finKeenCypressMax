import reports_after_operations from "../pageObjects/reports_after_operations";
const Reports_after_operations = new reports_after_operations()
import Login from "../pageObjects/login";
const login = new Login

it('check reports after operations',function (){
    login.login()
    Reports_after_operations.dashboard()
    Reports_after_operations.flow_of_fund()
    Reports_after_operations.balance()
})