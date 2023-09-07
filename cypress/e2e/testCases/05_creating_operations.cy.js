import creating_operations from "../pageObjects/creating_operations";
const Creating_operations = new creating_operations()
import Login from "../pageObjects/login";
const login = new Login

it('create new operations',function (){
    login.login()
    Creating_operations.operations_with_doc_sell()
})