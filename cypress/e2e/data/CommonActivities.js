class CommonActivities {
    constructor() {
        this.CSSTitle = 'h1';
        this.CSSSubTitle = 'h2';
        this.CSSDropdown = '.mt-react-select__input-container'
        this.CSSDropdownValue = '.mt-react-select__single-value'
        this.CSSInput = '.input-field'
        this.CSSButton = '[class="main-button"]'
        this.CSSAddButton = '[class="main-button add-btn"]'
        this.CSSModalWindow = '[class="modal-block-wrapper"]'
        this.CSSBlockTransaction1 = '[class="block cash-flow"]'
        this.CSSBlockTransaction2 = '[class="block transactions"]'
        this.CSSPlusButton = '[class="plus-button"]'
        this.CSSSubForm1 = '[class="sub-form"]'
        this.CSSSubForm2 = '[class="sub-form transactions"]'
        this.CSSDatePicker = '[class="react-datepicker-wrapper"]'
        this.CSSSubmitButton = '[class="unstyled-button round-submit-button"]'
        this.CSSTabActive = '[class="tab active"]'
        this.CSSToolTipContent = '[class="tooltip-content shown"]'
        this.CSSToolTipSign = '[class="tooltip-sign"]'
        this.CSSSidePannel = '[class="side-panel"]'
        this.CSSTableHeaderRow = '[class="item-header opened"]'
        this.CSSTableContentRow = '[class="custom-row"]'
        this.CSSTableCell = '[class="r-cell resizable"]'
    }

    CurrentDate() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        return `${currentDay}.${currentMonth}.${currentYear}`;
    }

    checkTitle(text) {
        cy.get(this.CSSTitle).should('contain', text);
    }

    checkSubTitle(text) {
        cy.get(this.CSSSubTitle).should('contain', text);
    }

    checkModalWindow(text) {
        cy.get(this.CSSModalWindow).should('contain', text)
    }

    fillInAccountsPaybaleAndReceivable(person, itemName, category, value) {
        cy.get(this.CSSDropdown).eq(1).type(person + '{enter}');
        cy.get(this.CSSDropdown).eq(3).type(itemName + '{enter}');
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }

    fillInSalariesAccountsPaybaleAndReceivable(person, itemName, category, value) {
        cy.get(this.CSSDropdown).eq(1).type(person + '{enter}');
        cy.get(this.CSSDropdownValue).eq(3).should("contain", itemName)
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }

    fillInTaxesAccountsPaybaleAndReceivable(tax, category, itemName, value) {
        cy.get(this.CSSDropdown).eq(1).type(tax + '{enter}')
        cy.get(this.CSSDropdown).eq(2).type(category + '{enter}')
        cy.get(this.CSSDropdownValue).eq(3).should("contain", itemName)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }

    fillInOneTaxAccountsPaybaleAndReceivable(tax, category, itemName, value) {
        cy.get(this.CSSDropdown).eq(1).type(tax + '{enter}')
        cy.get(this.CSSDropdownValue).eq(2).should("contain", category)
        cy.get(this.CSSDropdownValue).eq(3).should("contain", itemName)
        cy.get(this.CSSInput).type(value)
        cy.get(this.CSSButton).click()
    }

    createTransactionForOperations(date, account, value, transactionType) {
        cy.get(this.CSSSubTitle).eq(0).then(($header) => {
            cy.get(this.CSSTabActive).then(($tab) => {
                if ($header.text().includes("Документ от:") &&
                    ($tab.text().includes("Продажа") || $tab.text().includes("Покупка"))) {
                    cy.get(this.CSSBlockTransaction1)
                        .find(this.CSSPlusButton)
                        .click();

                    cy.get(this.CSSSubForm1)
                        .find(this.CSSDatePicker)
                        .invoke('val', '').type('{selectall}{backspace}')
                        .type(date);

                    cy.get(this.CSSSubForm1)
                        .find(this.CSSDropdown)
                        .type(account + '{enter}');

                    cy.get(this.CSSInput)
                        .eq(1)
                        .type(value);

                    cy.get(this.CSSSubmitButton).click();
                } else if ($header.text().includes("Операция с зарплатами") ||
                    $header.text().includes("Операция с налогами")) {
                    cy.get(this.CSSBlockTransaction2)
                        .find(this.CSSPlusButton)
                        .click();
                    cy.get(this.CSSSubForm2)
                        .find(this.CSSDatePicker)
                        .invoke('val', '').type('{selectall}{backspace}')
                        .type(date);

                    cy.get(this.CSSSubForm2)
                        .find(this.CSSDropdown).eq(1)
                        .type(account + '{enter}');

                    cy.get(this.CSSInput)
                        .eq(0)
                        .type(value);

                    cy.get(this.CSSAddButton).click();
                } else if ($header.text().includes("Документ от:") &&
                    ($tab.text().includes("Поступление") || $tab.text().includes("Погашение"))) {
                    cy.get(this.CSSBlockTransaction1)
                        .find(this.CSSPlusButton)
                        .click();

                    cy.get(this.CSSSubForm2)
                        .find(this.CSSDropdown).eq(0).type(transactionType + '{enter}')

                    cy.get(this.CSSSubForm2)
                        .find(this.CSSDatePicker).click({ force: true })
                        // .invoke('val', '').type('{selectall}{backspace}')
                        // .type(date, { force: true })

                    cy.get(this.CSSSubForm2)
                        .find(this.CSSDropdown).eq(1)
                        .type(account + '{enter}');

                    cy.get(this.CSSInput)
                        .eq(0)
                        .type(value);

                    cy.get(this.CSSAddButton).click();
                }
            });
        });
    }
    checkToolTip() {
        cy.get(this.CSSTitle).then(($title) => {
            if ($title.text().includes('Добро пожаловать!')) {
                cy.get(this.CSSToolTipContent).should('be.visible');
            } else {
                cy.get(this.CSSSidePannel)
                    .find(this.CSSToolTipSign).click();
                cy.scrollTo("top")
                cy.get(this.CSSToolTipContent).should('be.visible');
            }
        });
    }

    checkCategoryMainValue(categorySelector, expectedValue){
        cy.get(categorySelector)
            .find(this.CSSTableHeaderRow)
            .find(this.CSSTableCell)
            .last()
            .should("have.text",expectedValue)
    }

    checkCategoryValue(categorySelector, i, itemName, expectedValue){

        cy.get(categorySelector)
            .find(this.CSSTableContentRow)
            .eq(i)
            .should('contain', itemName)
            .find(this.CSSTableCell)
            .last()
            .should('have.text',expectedValue)
    }

}


    export default CommonActivities
//смена языка интерфейса