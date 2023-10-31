import credentials from '../data/credentials';


const CSSInput = '.input-field';
const CSSCheckbox = '[type="checkbox"]';
const CSSButton = '[class="main-button"]';
const LoginPage = 'https://dev.fin-consult.com/login';
const CSSTextLink = '[class="text-component link-accent bold pointer regular"]';
class User_creation {
  user_creation() {
    cy.visit(LoginPage);
    cy.get(CSSTextLink).should('contain', credentials.textLink.textLinkCreateNewAccount).click();
    cy.get(CSSInput).eq(0).type(credentials.name.name);
    cy.get(CSSInput).eq(1).type(credentials.email.email);
    cy.get(CSSInput).eq(2).type(credentials.password.password);
    cy.get(CSSInput).eq(3).type(credentials.password.password);
    cy.wait(1000);
    cy.get(CSSCheckbox).trigger('click');
    cy.wait(1000);
    cy.get(CSSButton).eq(0).click();
  }
}
export default User_creation;
