//открытие бокового меню (проверка если открыто или не открыто)
const CSSMenuIcon = '[class="expand-icon"]'
const CSSMenuContent = '[class="content"]'
const CSSMenuIconStrokeGray = '[stroke="#B3B3B3"]'
const CSSMenuIconStrokeGreen = '[stroke="#0CB646"]'
class CommonActivities{
    open_side_menu(){
        cy.get(CSSMenuIcon).should("have.css", "stroke").then((strokeColor) => {
            // Если цвет равен #0CB646, то меню уже открыто
            if (strokeColor === "#0CB646") {
                // Ничего не делаем, так как меню уже открыто
            } else {
                // Иначе, кликнем на бургер-меню для его открытия
                cy.get(CSSMenuIcon).click();
                // Проверим, что меню открыто
                cy.get(CSSMenuContent).should("be.visible");
                // Проверим, что цвет полосок стал #0CB646
                cy.get(CSSMenuIcon).should("have.css", "stroke", "#0CB646");
            }
        });
    }
}


export default CommonActivities
//смена языка интерфейса