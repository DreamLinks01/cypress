import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'
import Orderfullfillment from "../../support/pages/Orderfullfillment";
import Skupagesearch from "../../support/pages/Skupagesearch";
import logoutpage from "../../support/pages/logout";

const loginpageobj = new loginpage();
const Orderfullfillmentobj=new Orderfullfillment();
const Skurecordobj=new Skupagesearch();


And(`User  clicks on homedropdown which is present on top left`, ()=>
{
    Orderfullfillmentobj.clickonhomedropdown();
 
  console.log('click on left top')
});
And(`user selects OrderFullfillment from dropdown`, ()=>
{
    Orderfullfillmentobj.selectOrderFullfillment();
   
    
});
And(`user click on Incoming Stock`, ()=>
{
    Orderfullfillmentobj.clickonIncomingstock();
   
});
And(`Click on Clear button in Search box`, ()=>

{
    Orderfullfillmentobj.clearbutton();
    
   
});
