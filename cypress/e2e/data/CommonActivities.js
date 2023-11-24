class CommonActivities {
  constructor() {
    this.CSSTitle = 'h1';
    this.CSSSubTitle = 'h2';
    this.CSSDropdown = '.mt-react-select__input-container';
    this.CSSDropdownValue = '.mt-react-select__single-value';
    this.CSSInput = '.input-field';
    this.CSSButton = '[class="main-button"]';
    this.CSSAddButton = '[class="main-button add-btn"]';
    this.CSSModalWindow = '[class="modal-block-wrapper"]';
    this.CSSBlockTransaction1 = '[class="block cash-flow"]';
    this.CSSBlockTransaction2 = '[class="block transactions"]';
    this.CSSPlusButton = '[class="plus-button"]';
    this.CSSSubForm1 = '[class="sub-form"]';
    this.CSSSubForm2 = '[class="sub-form transactions"]';
    this.CSSDatePicker = '[class="react-datepicker-wrapper"]';
    this.CSSSubmitButton = '[class="unstyled-button round-submit-button"]';
    this.CSSTabActive = '[class="tab active"]';
    this.CSSToolTipContent = '[class="tooltip-content shown"]';
    this.CSSToolTipSign = '[class="tooltip-sign"]';
    this.CSSSidePannel = '[class="side-panel"]';
    this.CSSTableHeaderRow = '[class="item-header opened"]';
    this.CSSTableContentRow = '[class="custom-row"]';
    this.CSSTableCell = '[class="r-cell resizable"]';
    this.CSSTableCellClicable = '[class="r-cell resizable clickable"]'
    this.CSSCloseButton = '[class="cross-icon-wrapper"]';
    this.CSSRow = '[class="row"]';
    this.CSSSell = '[class="r-cell"]'
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
    cy.get(this.CSSModalWindow).should('contain', text);
  }

  fillInAccountsPaybaleAndReceivable(person, itemName, category, value) {
    cy.get(this.CSSDropdown).eq(1).type(`${person}{enter}`);
    cy.get(this.CSSDropdown).eq(3).type(`${itemName}{enter}`);
    cy.get(this.CSSDropdownValue).eq(2).should('contain', category);
    cy.get(this.CSSInput).type(value);
    cy.get(this.CSSButton).click();
  }

  fillInSalariesAccountsPaybaleAndReceivable(person, itemName, category, value) {
    cy.get(this.CSSDropdown).eq(1).type(`${person}{enter}`);
    cy.get(this.CSSDropdownValue).eq(3).should('contain', itemName);
    cy.get(this.CSSDropdownValue).eq(2).should('contain', category);
    cy.get(this.CSSInput).type(value);
    cy.get(this.CSSButton).click();
  }

  fillInTaxesAccountsPaybaleAndReceivable(tax, category, itemName, value) {
    cy.get(this.CSSDropdown).eq(1).type(`${tax}{enter}`);
    cy.get(this.CSSDropdown).eq(2).type(`${category}{enter}`);
    cy.get(this.CSSDropdownValue).eq(3).should('contain', itemName);
    cy.get(this.CSSInput).type(value);
    cy.get(this.CSSButton).click();
  }

  fillInOneTaxAccountsPaybaleAndReceivable(tax, category, itemName, value) {
    cy.get(this.CSSDropdown).eq(1).type(`${tax}{enter}`);
    cy.get(this.CSSDropdownValue).eq(2).should('contain', category);
    cy.get(this.CSSDropdownValue).eq(3).should('contain', itemName);
    cy.get(this.CSSInput).type(value);
    cy.get(this.CSSButton).click();
  }

  createTransactionForOperations(date, account, value, transactionType) {
    cy.url().then((url) => {
      if (url.includes('/operations/document/new?tab=issued') || url.includes('operations/document/new?tab=received')) {
        cy.get(this.CSSBlockTransaction1)
          .find(this.CSSPlusButton)
          .click();

        cy.get(this.CSSSubForm1)
          .find(this.CSSDatePicker)
          .invoke('val', '')
          .type('{selectall}{backspace}')
          .type(date);

        cy.get(this.CSSSubForm1)
          .find(this.CSSDropdown)
          .type(account + '{enter}');

        cy.get(this.CSSInput)
          .eq(1)
          .type(value);

        cy.get(this.CSSSubmitButton).click();
      } else if (url.includes('operations/salaries/new') || url.includes('operations/taxes/new')) {
        cy.get(this.CSSBlockTransaction2)
          .find(this.CSSPlusButton)
          .click();

        cy.get(this.CSSSubForm2)
          .find(this.CSSDatePicker)
          .invoke('val', '')
          .type('{selectall}{backspace}')
          .type(date);

        cy.get(this.CSSSubForm2)
          .find(this.CSSDropdown)
          .eq(1)
          .type(account + '{enter}');

        cy.get(this.CSSInput)
          .eq(0)
          .type(value);

        cy.get(this.CSSAddButton).click();
      } else if (url.includes('operations/credits/new')) {
        cy.get(this.CSSBlockTransaction1)
          .find(this.CSSPlusButton)
          .click();

        cy.get(this.CSSSubForm2)
          .find(this.CSSDropdown)
          .eq(0)
          .type(`${transactionType}{enter}`);

        cy.get(this.CSSSubForm2)
          .find(this.CSSDatePicker)
          .click({ force: true });

        cy.get(this.CSSSubForm2)
          .find(this.CSSDropdown)
          .eq(1)
          .type(account + '{enter}');

        cy.get(this.CSSInput)
          .eq(0)
          .type(value);

        cy.get(this.CSSAddButton).click();
      }
    });
  }

  checkDocInRegister(i,operationType,account,value,counterparty,docType,number,status,period,employee,tax,productName,warehouse,adres,units,quantity,price,cost){cy.url().then((url) => {
    if (url.includes('registers/money')) {

      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(0).should('contain',operationType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(1).should('contain',this.CurrentDate())
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(2).should('contain',account)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(3).should('contain',value)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(4).should('contain',counterparty)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(5).should('contain',docType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(6).should('contain',number)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(7).should('contain',status)

    } else if (url.includes('registers/document')) {

      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(0).should('contain',operationType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(1).should('contain',this.CurrentDate())
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(2).should('contain',counterparty)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(3).should('contain',docType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(4).should('contain',number)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(5).should('contain',value)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(6).should('contain',status)

    } else if (url.includes('registers/salaries')) {

      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(0).should('contain',operationType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(1).should('contain',this.CurrentDate())
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(2).should('contain',period)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(3).should('contain',employee)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(4).should('contain',account)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(5).should('contain',value)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(6).should('contain',status)

    } else if (url.includes('registers/taxes')) {

      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(0).should('contain',operationType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(1).should('contain',this.CurrentDate())
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(2).should('contain',period)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(3).should('contain',tax)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(4).should('contain',account)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(5).should('contain',value)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(6).should('contain',status)

    } else if (url.includes('registers/products')) {

      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(0).should('contain',operationType)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(1).should('contain',number)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(2).should('contain',this.CurrentDate())
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(3).should('contain',productName)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(4).should('contain',warehouse)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(5).should('contain',adres)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(6).should('contain',units)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(7).should('contain',quantity)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(8).should('contain',price)
      cy.get(this.CSSRow).eq(i).find(this.CSSSell).eq(9).should('contain',cost)
    }
  })
  }


  checkToolTip() {
    cy.get(this.CSSTitle).then(($title) => {
      if ($title.text().includes('Добро пожаловать!')) {
        cy.get(this.CSSToolTipContent).should('be.visible');
      } else {
        cy.get(this.CSSSidePannel)
          .find(this.CSSToolTipSign).click();
        cy.scrollTo('top');
        cy.get(this.CSSToolTipContent).should('be.visible');
      }
    });
  }

  checkCategoryMainValue(categorySelector, expectedValue) {
    cy.get(categorySelector)
      .find(this.CSSTableHeaderRow)
      .find(this.CSSTableCell)
      .last()
      .should('have.text', expectedValue);
  }

  checkCategoryValue(categorySelector, i, itemName, expectedValue) {
    cy.get(categorySelector)
      .find(this.CSSTableContentRow)
      .eq(i)
      .should('contain', itemName)
      .find(this.CSSTableCell)
      .last()
      .should('have.text', expectedValue);
  }

  checkCustomCategoryValue(categorySelector, rowSelector, i, expectedValue){
    cy.get(categorySelector)
      .find(rowSelector)
      .eq(i)
      .find(this.CSSTableCell)
      .last()
      .should("have.text",expectedValue)
  }

  checkCustomClicableCategoryValue(categorySelector, rowSelector, i, expectedValue){
    cy.get(categorySelector)
      .find(rowSelector)
      .eq(i)
      .find(this.CSSTableCellClicable)
      .last()
      .should("have.text",expectedValue)
  }

  checkClickAndGetModalWindow(categorySelector, i, expectedValue, rowsNumber){
    cy.get(categorySelector)
      .find(this.CSSTableContentRow)
      .eq(i)
      .find(this.CSSTableCell)
      .should('have.text',expectedValue)
      .click()

    cy.get(this.CSSModalWindow)
      .find(this.CSSRow)
      .should('have.length',rowsNumber)

    cy.wait(1000)
    cy.get(this.CSSCloseButton).click()
  }

  checkCategoryRow(categorySelector, i, expectedValue){
    cy.get(categorySelector)
      .eq(0)
      .find(this.CSSTableCell)
      .last()
      .should('have.text',expectedValue)
  }

  checkRowAndSells(rowIndex, sell_1_text, sell_2_text, sell_3_text, sell_4_text, sell_5_text, sell_6_text){
    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(0).should('have.text',sell_1_text)

    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(1).should('have.text',sell_2_text)

    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(2).should('have.text',sell_3_text)

    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(3).should('have.text',sell_4_text)

    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(4).should('have.text',sell_5_text)

    cy.get(this.CSSRow)
      .eq(rowIndex)
      .find(this.CSSSell)
      .eq(5).should('have.text',sell_6_text)
  }
}
export default CommonActivities;
