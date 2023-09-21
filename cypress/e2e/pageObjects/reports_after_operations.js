import credentials from "../data/credentials";

class reports_after_operations{
    dashboard(){
    }
    flow_of_fund(){

    }
    balance(){
        cy.get(CSSMenuPage).contains('Баланс').click()
        cy.wait(1000)

        cy.get('[class="custom-row assets"]')
            .find(CSSTableCell)
            .last()
            .should("have.text", '42 100')

        cy.get('[class="custom-row stocks"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should("have.text", '10 000')

        cy.get('[class="custom-row stocks"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(0)
            .find(CSSTableCell)
            .last()
            .should("have.text",'1 000')

        cy.get('[class="custom-row stocks"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(1)
            .find(CSSTableCell)
            .last()
            .should("have.text",'5 000')

        cy.get('[class="custom-row stocks"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(2)
            .find(CSSTableCell)
            .last()
            .should("have.text",'4 000')


        cy.get('[class="custom-row funds"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '30 000')

        cy.get('[class="custom-row funds"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(0)
            .find(CSSTableCell)
            .last()
            .should("have.text",'10 000')

        cy.get('[class="custom-row funds"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(1)
            .find(CSSTableCell)
            .last()
            .should("have.text",'20 000')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '2 100')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(0)
            .find(CSSTableCell)
            .last()
            .should("have.text",'400')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(1)
            .find(CSSTableCell)
            .last()
            .should("have.text",'400')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(2)
            .find(CSSTableCell)
            .last()
            .should("have.text",'800')

        cy.get('[class="custom-row accounts-receivable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(3)
            .find(CSSTableCell)
            .last()
            .should("have.text",'500')

        cy.get('[class="custom-row passive"]')
            .find(CSSTableCell)
            .last()
            .should('have.text', '42 100')

        cy.get('[class="custom-row equity"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '27 800')

        cy.get('[class="custom-row equity"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(0)
            .find(CSSTableCell)
            .last()
            .should("have.text",'27 800')

        cy.get('[class="custom-row equity"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(1)
            .find(CSSTableCell)
            .last()
            .should("have.text",'0')

        cy.get('[class="custom-row long-term"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '6 600')

        // cy.get('[class="custom-row long-term"]')
        //     .find(CSSTableContentChapter)
        //     .find(CSSTableContentRow)
        //     .eq(0)
        //     .find(CSSTableCell)
        //     .last()
        //     .should("have.text",'2 200')
        //
        // cy.get('[class="custom-row long-term"]')
        //     .find(CSSTableContentChapter)
        //     .find(CSSTableContentRow)
        //     .eq(1)
        //     .find(CSSTableCell)
        //     .last()
        //     .should("have.text",'4 400')


        cy.get('[class="custom-row short-term"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '4 400')

        // cy.get('[class="custom-row short-term"]')
        //     .find(CSSTableContentChapter)
        //     .find(CSSTableContentRow)
        //     .eq(0)
        //     .find(CSSTableCell)
        //     .last()
        //     .should("have.text",'1 100')
        //
        // cy.get('[class="custom-row short-term"]')
        //     .find(CSSTableContentChapter)
        //     .find(CSSTableContentRow)
        //     .eq(1)
        //     .find(CSSTableCell)
        //     .last()
        //     .should("have.text",'3 300')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableHeaderRow)
            .find(CSSTableCell)
            .last()
            .should('have.text', '3 300')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(0)
            .find(CSSTableCell)
            .last()
            .should("have.text",'800')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(1)
            .find(CSSTableCell)
            .last()
            .should("have.text",'800')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(2)
            .find(CSSTableCell)
            .last()
            .should("have.text",'1 200')

        cy.get('[class="custom-row accounts-payable"]')
            .find(CSSTableContentChapter)
            .find(CSSTableContentRow)
            .eq(3)
            .find(CSSTableCell)
            .last()
            .should("have.text",'500')

        cy.get('[class="custom-row balance-convergence"]')
            .find(CSSTableCell)
            .last()
            .should('have.text', '0')

    }
    }
}

export default reports_after_operations