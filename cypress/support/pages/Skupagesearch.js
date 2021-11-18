/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const clickonInventory='#inventorymd > .Nav_mediumW__27JHX > .Nav_mediumL__xwTot'
const searchField='#searchInput'
const searchButton='.col-md-auto > .btn'

class Skupagesearch {

    clickonInventory(){
        cy.get(clickonInventory).click();
        cy.wait(5000);
    }
    entervalueinskusearch(){
        cy.get(searchField).type('Poly Mailer');
        cy.wait(3000);
    }
    clickonsearch(){
        cy.get(searchButton).click();
        cy.wait(2000);
    }
    clickonvalues(){
        cy.contains('Poly Ma..').click();
    }
}
export default Skupagesearch