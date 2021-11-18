import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'
import logoutpage from "../../support/pages/logout";

const loginpageobj = new loginpage();
const logoutpageobj=new logoutpage();

When('user logsout from Application',() =>
{
  logoutpageobj.logout();

});
Then('verify Logout is successful',() =>
{
 cy.url().should('include','login');

});



