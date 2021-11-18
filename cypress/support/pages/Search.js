/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class Searchwithdiffcretieria {
clickonpendingtab(){
    cy.get('#pendingmd > .Nav_mediumW__27JHX > [style="z-index: 5;"]').click();
    cy.wait(2000);
}
EnterEmail(){
    cy.get('#searchInput').type('c-godswill.ayewah@cart.com');
}
EmailSubstring(){
    cy.get('#searchInput').type('c-godswill.ayewah'); 
}
clickonPickandpack(){
    cy.get('#pick-and-packmd > .Nav_mediumW__27JHX > [style="z-index: 5;"]').click();
    cy.wait(2000);
}
}
export default Searchwithdiffcretieria