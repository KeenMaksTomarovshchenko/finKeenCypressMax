import credentials from '../data/credentials';


const CSSInput = '.input-field';
const CSSButton = '[class="main-button"]';
const LoginPage = 'https://dev.fin-consult.com/login';
class Login {
  login() {
    cy.visit(LoginPage);
    cy.get(CSSInput).eq(0).clear();
    cy.get(CSSInput).eq(0).type(credentials.email.email);
    cy.wait(1000);
    cy.get(CSSInput).eq(1).type(credentials.password.password);
    cy.wait(1000);
    cy.get(CSSButton).eq(0).click();
    cy.wait(2000);
  }
}

export default Login;
