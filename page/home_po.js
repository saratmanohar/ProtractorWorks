var login_page =require('./login_po.js');
var pageHandler = require('../core/PageHandler.js');
var locators = require('../resources/locators/home.json');

var home_page = function(){

    this.isHomePageDisplayed = function() {
        return pageHandler.findElement(locators.header).isDisplayed();
    };

    this.getWelcomeText = function(){
        return pageHandler.findElements(locators.welcometext).get(0).getText();
    };

    this.clickLogout = function(){
        pageHandler.findElements(locators.logoutbutton).click();
        return login_page;
    };

};
module.exports = new home_page();