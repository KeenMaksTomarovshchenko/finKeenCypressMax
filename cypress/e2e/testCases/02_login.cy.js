import Login from "../pageObjects/login"
const login = new Login

before(function (){
    cy.viewport(1300, 800);
});
it('Visit login page', function (){
    login.login()
});