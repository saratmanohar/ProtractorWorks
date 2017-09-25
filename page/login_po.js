var home_page = require('./home_po.js');
var pageHandler = require('../core/PageHandler.js');
var currentPage = require('path').basename(__filename).split('_po.js')[0];
var locators = require('../resources/locators/'+currentPage+'.json');

var login_page = function() {

    this.setUserName = function(userName) {
        pageHandler.writeText(locators.username,userName);
    };

    this.setPassword = function(password) {
        pageHandler.writeText(locators.password,password);
    };

    this.setNewUserDetails = function(userName) {
        pageHandler.writeText(locators.userdetails,userName);
    };

    this.clickLoginButton = function(){
        pageHandler.clickElement(locators.loginbutton);
        return home_page;
    };

    this.isLoginButtonDisplayed = function(){
        return pageHandler.isDisplayed(locators.loginbutton);
    };

};

module.exports = new login_page();