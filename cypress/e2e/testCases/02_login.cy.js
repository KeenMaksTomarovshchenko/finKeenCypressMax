import Login from "../pageObjects/login"
const login = new Login


it('Visit login page', function (){
    login.login()
});