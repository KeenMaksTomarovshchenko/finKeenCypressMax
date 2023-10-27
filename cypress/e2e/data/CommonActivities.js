//открытие бокового меню (проверка если открыто или не открыто)

import credentials from "./credentials";

class CommonActivities {
    constructor() {
        this.CSSTitle = 'h1';
        this.CSSSubTitle = 'h2';
        this.CSSDropdown = '.mt-react-select__input-container'
        this.CSSDropdownValue = '.mt-react-select__single-value'
        this.CSSInput = '.input-field'
        this.CSSButton = '[class="main-button"]'
        this.CSSModalWindow = '[class="modal-block-wrapper"]'
    }

    checkTitle(text) {
        cy.get(this.CSSTitle).should('contain', text);
    }

    checkSubTitle(text) {
        cy.get(this.CSSSubTitle).should('contain', text);
    }
    checkModalWindow(text){
        cy.get(this.CSSModalWindow).should('contain',text)
    }
    fillInAccountsPaybaleAndReceivable(person, itemName, category, value){
        cy.get(this.CSSDropdown).eq(1).type(person + '{enter}');
        cy.get(this.CSSDropdown).eq(3).type(itemName + '{enter}');
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }
    fillInSalariesAccountsPaybaleAndReceivable(person, itemName, category, value){
        cy.get(this.CSSDropdown).eq(1).type(person + '{enter}');
        cy.get(this.CSSDropdownValue).eq(3).should("contain", itemName)
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }
    fillInTaxesAccountsPaybaleAndReceivable(tax, category, itemName, value){
        cy.get(this.CSSDropdown).eq(1).type(tax + '{enter}')
        cy.get(this.CSSDropdown).eq(2).type(category + '{enter}')
        cy.get(this.CSSDropdownValue).eq(3).should("contain",itemName)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }
    fillInOneTaxAccountsPaybaleAndReceivable(tax, category, itemName, value){
        cy.get(this.CSSDropdown).eq(1).type(tax + '{enter}')
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSDropdownValue).eq(3).should("contain", itemName)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }
}

export default CommonActivities
//смена языка интерфейса