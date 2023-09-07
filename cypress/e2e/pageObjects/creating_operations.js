
import Locators from "../data/locators";
import credentials from "../data/credentials";
const locators = new Locators()

class creating_operations{
    operations_with_doc_sell(){
        //describe("Операции с документами при продаже", () => {
           // it("Выполнение операций с документами", () => {
          //      const currentDate = new Date();
              //  const year = currentDate.getFullYear();
            //    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
            //    const formattedDate = '{month}/{year}';
        locators.OpenBurgerMenu()
        locators.OpenMenuСhapter().contains('Новая операция').click()
        locators.OpenMenuPage().contains('С документом').click()
//Реквизиты
        locators.getSelector().eq(0).type(credentials.counterparties_name.counterparties_name_1+'{enter}')
        locators.getSelector().eq(1).type('Invoice'+'{enter}')
//Транзакции
        locators.getCreateNewButton().eq(2).click()
        locators.getSelector().eq(2).type(credentials.account_name.account_name_1+'{enter}')
        locators.getInputField().eq(1).type('100')
        locators.getSubmitButton().click()
//Позиции
        locators.getCreateNewButton().eq(3).click()
        locators.getInputField().eq(1).type('Test')
        locators.getSelector().eq(3).type(credentials.income_item.income_item_1_name+'{enter}')
        locators.getSelectorValue().eq(2).should('contain','Выручка')
        locators.getInputField().eq(4).type('100')
        locators.getQuantity().type('1')
        locators.getSelector().eq(4).type('25'+'{enter}')
        locators.getSubmitButton().click()
        cy.get('[name="obligationFulfilled"]').click()
           // });
     //   });
    }
}
export default creating_operations