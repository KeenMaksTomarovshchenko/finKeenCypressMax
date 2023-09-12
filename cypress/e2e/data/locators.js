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
    OpenMenuСhapter(){
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
    getPrice(){
        return cy.get('[name="price"]')
    }

}

export default Locators