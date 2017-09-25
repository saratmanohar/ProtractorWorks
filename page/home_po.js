var login_page =require('./login_po.js');
var pageHandler = require('../core/PageHandler.js');
var currentPage = require('path').basename(__filename).split('_po.js')[0];
var locators = require('../resources/locators/'+currentPage+'.json');

var home_page = function(){

    this.isHomePageDisplayed = function() {
        return pageHandler.isDisplayed(locators.header);
    };

    this.getWelcomeText = function(){
       return pageHandler.getTextFromFirstElement(locators.welcometext);
    };

    this.clickLogout = function(){
        pageHandler.clickElement(locators.logoutbutton);
        return login_page;
    };

};
module.exports = new home_page();