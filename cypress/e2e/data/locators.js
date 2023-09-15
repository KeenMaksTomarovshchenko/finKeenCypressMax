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
        return cy.get('[class="text-component bold"]')
    }
    getDropdown(){
        return cy.get('.mt-react-select__input-container')
    }
    getDropdownValue(){
        return cy.get('.mt-react-select__single-value')
    }
    getDropdownOption(){
        return cy.get('[class="tooltip-sign"]')
    }
    getModalWindow(){
        return cy.get('[class="modal-block-wrapper"]')
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
    getAmountGreen1(){
        return cy.get('[class="text-component amount big bold link-accent"]')
    }
    //Дашборд
    getCardTitle(){
        return cy.get('[class="main-indicator-card__title"]')
    }
    getCardValue(){
        return cy.get('[class="home-indicator__value"]')
    }
    getCardRow(){
        return cy.get('[class="main-indicator-card__content-row"]')
    }
    getSecondaryCardTitle(){
        return cy.get('[class="secondary-indicator-card__title-cell"]')
    }
    getSecondaryCardCell(){
        return cy.get('[class="secondary-indicator-card__content-cell"]')
    }
    getAccountName(){
        return cy.get('[class="account-name"]')
    }
    getAccountValue(){
        return cy.get('[class="account-value"]')
    }
    OpenBurgerMenu(){
        return cy.get('[class="expand-icon"]').click()
    }
    BoldText2(){
        return cy.get('[class="text-component bold"]')
    }

    OpenMenuPage(){
        return cy.get('[class="text-component pointer"]')
    }
    getSubmitButton(){
        return cy.get('[class="unstyled-button round-submit-button"]')
    }
    getCancelButton(){
        return cy.get('[class="unstyled-button round-cansel-button"]')
    }
    getQuantity(){
        return cy.get('[name="quantity"]')
    }
    getAmountGreen2(){
        return cy.get('[class="text-component bold amount"]')
    }
    getAdressMask(){
        return cy.get('[class="input-field input-field-mask"]')
    }
    getBoldText(){
        return cy.get('b')
    }
    getHugeBoldNumber(){
        return cy.get('[class="text-component amount huge bold link-accent"]')
    }
    getAccountsAndCurrentNumber(){
        return cy.get('[class="text-component option-text-wrapper"]')
    }
    getRowDocument(){
        return cy.get('[class="row"]')
    }
    getAmountGreen3(){
        return cy.get('[class="text-component bold link-accent"]')
    }
    getBalanceConvergenceRow(){
        return cy.get('[class="custom-row balance-convergence"]')
    }
    getRowCell(){
        return cy.get('[class="r-cell resizable"]')
    }
}

export default Locators