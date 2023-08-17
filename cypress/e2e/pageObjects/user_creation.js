import Locators from "../data/locators";
import credentials from "../data/credentials"
const locators = new Locators()

class User_creation {

    user_creation(){
        locators.visitUserCreationPage()
        locators.getInputField().eq(0).type(credentials.name.name)
        cy.wait(1000)
        locators.getInputField().eq(1).type(credentials.email.email)
        cy.wait(1000)
        locators.getInputField().eq(2).type(credentials.password.password)
        cy.wait(1000)
        locators.getInputField().eq(3).type(credentials.password.password)
        cy.wait(1000)
        locators.getAgreeWithTermOfUse().click()
        locators.getButton().eq(0).click()

    }}
export default User_creation