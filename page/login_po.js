var home_page = require('./home_po.js');
var pageHandler = require('../core/PageHandler.js');
var locators = require('../resources/locators/login.json');

var login_page = function() {

    this.setUserName = function(userName) {
       pageHandler.findElement(locators.username).sendKeys(userName);
    };

    this.setPassword = function(password) {
        pageHandler.findElement(locators.password).sendKeys(password);
    };

    this.setNewUserDetails = function(userName) {
        pageHandler.findElement(locators.userdetails).sendKeys(userName);
    };

    this.clickLoginButton = function(){
        pageHandler.findElement(locators.loginbutton).click();
        return home_page;
    };

    this.isLoginButtonDisplayed = function(){
       return pageHandler.findElement(locators.loginbutton).isDisplayed();
    };

};

module.exports = new login_page();