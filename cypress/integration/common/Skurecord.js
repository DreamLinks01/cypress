import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'
import Orderfullfillment from "../../support/pages/Orderfullfillment";
import Skupagesearch from "../../support/pages/Skupagesearch";
import logout from "../../support/pages/logout";

const loginpageobj = new loginpage();
const Orderfullfillmentobj=new Orderfullfillment();
const Skurecordobj=new Skupagesearch();
//const logoutpageobj=new logout

And(`user click on inventory`, ()=>
{
    Skurecordobj.clickonInventory();
   
});
And(`enter value in SKU search`, ()=>
{
    Skurecordobj.entervalueinskusearch();
   
});
And(`click on search`, ()=>
{
    Skurecordobj.clickonsearch();
   
});
And(`user click on Displayed Value`, ()=>
{
    Skurecordobj.clickonvalues();
   
});
Then(`verify the entered value is displayed`, ()=>
{
  cy.contains('Poly Mailer').should('be.visible');
})

// And(`user click on Logout`, ()=>
// {
//     logoutpageobj.clickonlogout();
       
// });