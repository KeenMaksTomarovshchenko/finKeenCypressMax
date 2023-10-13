import directories from "../pageObjects/directories";
const Directories = new directories()
import Login from "../pageObjects/login";
import CommonActivities from "../data/CommonActivities";
const login = new Login
const commonActivities = new CommonActivities

before(function (){
    cy.viewport(1300, 800);
});

it('check all directories for adding, deleting, changing and correspondence onboarding data',function () {
        login.login()
    commonActivities.open_side_menu()
    Directories.company_data()
    Directories.accounts()
    Directories.income_items()
    Directories.expense_items()
    Directories.employees()
    Directories.counterparties()
    Directories.warehouses()
    Directories.taxes()
})
