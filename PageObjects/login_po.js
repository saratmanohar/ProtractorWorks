var home_page = require('./home_po.js');

var login_page = function() {

    this.setUserName = function(userName) {
        element(by.model('Auth.user.name')).sendKeys(userName);
    };

    this.setPassword = function(password) {
        element(by.model('Auth.user.password')).sendKeys(password);
    };

    this.setNewUserDetails = function(userName) {
        element(by.model('model[options.key]')).sendKeys(userName);
    };

    this.clickLoginButton = function(){
        element(by.buttonText('Login')).click();
        return home_page;
    };

    this.isLoginButtonDisplayed = function(){
       return element(by.buttonText('Login')).isDisplayed();
    };

};

module.exports = new login_page();