import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'

const loginpageobj = new loginpage();
Given('user login to Application',() =>
{
  cy.clearCookies();
  loginpageobj.login();

});

Then(`verify login is successful`, ()=>
{
  cy.contains('Welcome to Cart.com!').should('be.visible');
  console.log("success login ")
});
