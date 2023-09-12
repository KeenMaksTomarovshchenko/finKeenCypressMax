import Locators from "../data/locators";
import credentials from "../data/credentials";
const locators = new Locators()

class Login {
    login() {
        locators.visitLoginPage()
        locators.getInputField().eq(0).clear()
        locators.getInputField().eq(0).type(credentials.email.email)
        cy.wait(1000)
        locators.getInputField().eq(1).type(credentials.password.password)
        cy.wait(1000)
        locators.getButton().eq(0).click()
    }
}

export default Login