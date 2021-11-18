import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'
import Orderfullfillment from "../../support/pages/Orderfullfillment";
import Skupagesearch from "../../support/pages/Skupagesearch";
import logoutpage from "../../support/pages/logout";

const loginpageobj = new loginpage();
const Orderfullfillmentobj=new Orderfullfillment();
const Skurecordobj=new Skupagesearch();

Then(`user should land in homepage`, ()=>
{
    cy.contains('Welcome to Cart.com!').should('be.visible');
   
});
And(`user Enter PO Number value in Search box`, ()=>
{
    Skurecordobj.entervalueinskusearch();
   
});

