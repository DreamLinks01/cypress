import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'
import Orderfullfillment from "../../support/pages/Orderfullfillment";
import Skupagesearch from "../../support/pages/Skupagesearch";
import logoutpage from "../../support/pages/logout";
import Searchwithdiffcretieria from "../../support/pages/Search";

const Searchwithdiffcretieriaobj=new Searchwithdiffcretieria();


And(`Click on pick and pack`, ()=>
{
    Searchwithdiffcretieriaobj.clickonPickandpack();
   
});