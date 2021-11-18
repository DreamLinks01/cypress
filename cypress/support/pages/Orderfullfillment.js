/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const clickonhomedropdown='.h-100 > .bg-white'
const selectOrderFullfillment='.p-8px > [href="/order-fulfillment"]'
const clickonIncomingstock='.Nav_mediumWFirst__WXaqy > [style="z-index: 5;"]'
const clearbutton="//button[normalize-space()='X']"


class Orderfullfillment {
    clickonhomedropdown(){
        cy.get(clickonhomedropdown).click();
        cy.wait(2000);

    }
    selectOrderFullfillment(){
        cy.get(selectOrderFullfillment).click();
        cy.wait(2000);
    }
    clickonIncomingstock(){
        cy.get(clickonIncomingstock).click(); 

    }
    clearbutton(){
        cy.xpath(clearbutton).click();
    }
 
}
export default Orderfullfillment










