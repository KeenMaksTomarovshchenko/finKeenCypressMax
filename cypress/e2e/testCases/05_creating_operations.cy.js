import creating_operations from "../pageObjects/creating_operations";
const Creating_operations = new creating_operations()
import Login from "../pageObjects/login";
const login = new Login

it('create new operations',function (){
    login.login()
    Creating_operations.open_menu_chapter()
    Creating_operations.money_transaction()
    Creating_operations.operations_with_doc_sell()
    Creating_operations.operation_with_doc_buy()
    Creating_operations.operation_with_salaries()
    Creating_operations.operation_with_taxes_1()
    Creating_operations.operation_with_taxes_2()
})