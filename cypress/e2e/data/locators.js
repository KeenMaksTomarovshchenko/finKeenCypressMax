require('cypress-xpath');
class Locators {

    visitLoginPage() {
        cy.visit('https://dev.fin-consult.com/login')
    }
    visitUserCreationPage(){
        cy.visit('https://dev.fin-consult.com/signup')
    }
    getInputField() {
        return cy.get('[class="input-field"]')
    }
    getAgreeWithTermOfUse(){
        return cy.get('[type="checkbox"]')
    }
    getButton() {
        return cy.get('[class="main-button"]')
    }
    getNextButton1(){
        return cy.get('[type="button"]')
    }
    getNextButton2(){
        return cy.get('[class="main-button next-btn"]')
    }
    getTextButton(){
        return cy.get('[class="text-button"]')
    }
    getTitle(){
        return cy.get('h1')
    }
    getSubTitle(){
        return cy.get('h2')
    }
    getCreateNewButton(){
        return cy.get('[class="text-component bold regular"]')
    }
    getSelector(){
        return cy.get('.mt-react-select__input-container')
    }
    getBurgerMenu(){
        return cy.get('[class="expand-icon"]')
    }
    getMenuPage(){
        return cy.get('[class="text-component pointer regular"]')
    }
    getModalWindow(){
        return cy.get('[class="modal-content-wrapper"]')
    }
    getStretchButton(){
        return cy.get('[class="main-button stretch-button"]')
    }
    getDatapickerInput(){
        return cy.get('[class="react-datepicker__input-container "]') }
    getCheckbox(){
        return cy.get('[type="checkbox"]')
    }
    getName(){
        return cy.get('[class="name"]')
    }
    getGreenButton(){
        return cy.get('[class="main-button add-btn"]')
    }
}

export default Locators