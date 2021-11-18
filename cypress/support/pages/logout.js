/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const logoutclick="//strong[@class='d-none d-md-block']"

class logoutpage {
logout(){
    cy.xpath(logoutclick).click();
  cy.contains('Sign Out').click();
}
}
export default logoutpage