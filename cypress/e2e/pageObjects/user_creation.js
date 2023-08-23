import Locators from "../data/locators";
import credentials from "../data/credentials"
const locators = new Locators()

class User_creation {

    user_creation(){
        locators.visitLoginPage()
        locators.getTextLink().should('contain',credentials.textLink.textLinkCreateNewAccount).click()
        locators.getInputField().eq(0).type(credentials.name.name)
        locators.getInputField().eq(1).type(credentials.email.email)
        locators.getInputField().eq(2).type(credentials.password.password)
        locators.getInputField().eq(3).type(credentials.password.password)
        cy.wait(1000)
        locators.getCheckbox().trigger('click');
        cy.wait(1000)
        locators.getButton().eq(0).click()
    }}
export default User_creation