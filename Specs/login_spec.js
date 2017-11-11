var login_page = require('../page/login_po.js');
var home_page = require('../page/home_po.js');
var properties = require('../resources/data/properties.json');

describe("Login Test Validations", function(){

    it("Login to application and verify home page is displayed", function(){
        browser.get(properties.url);//Load URL
        expect(login_page.isLoginButtonDisplayed()).toEqual(true);//Login page is displayed
        
        //Login
        login_page.setUserName(properties.user);
        login_page.setPassword(properties.password);
        login_page.setNewUserDetails('angualr-sm');

        //Verify Home Page
        home_page = login_page.clickLoginButton();
        expect(home_page.isHomePageDisplayed()).toEqual(true);
        expect(home_page.getWelcomeText()).toEqual("You're logged in!!");
    });

    it("Click Logout and verify the user is logged out", function(){
        //Verify logout
        home_page.clickLogout();
        expect(login_page.isLoginButtonDisplayed()).toEqual(true);
    });

});