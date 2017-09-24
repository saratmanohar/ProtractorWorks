var login_page = require('../PageObjects/login_po.js');
var home_page = require('../PageObjects/home_po.js');

describe("Login Test Validations", function(){

    it("Login to application and verify home page is displayed", function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");//Load URL
        expect(login_page.isLoginButtonDisplayed()).toEqual(true);//Login page is displayed
        
        //Login
        login_page.setUserName('angular');
        login_page.setPassword('password');
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