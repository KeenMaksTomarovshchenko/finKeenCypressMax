require('cypress-xpath');
class Locators {

    visitLoginPage() {
        cy.visit('https://dev.fin-consult.com/login')
    }
    getTextLink(){
        return cy.get('[class="text-component link-accent bold pointer regular"]')
    }
    getInputField() {
        return cy.get('[class="input-field"]')
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
    getSelectorValue(){
        return cy.get('.mt-react-select__single-value')
    }
    getModalWindow(){
        return cy.get('[class="modal-block-wrapper"]')
    }
    getDatapickerInput(){
        return cy.get('[class="react-datepicker__input-container "]') }
    getDatapickerValue(){
        return cy.get('input[value]')
    }
    getCheckbox(){
        return cy.get('[type="checkbox"]')
    }
    getName(){
        return cy.get('[class="name"]')
    }
    getGreenButton(){
        return cy.get('[class="main-button add-btn"]')
    }
    getAmountGreen(){
        return cy.get('.text-component.amount.big.bold.link-accent.regular')
    }
}

export default Locators