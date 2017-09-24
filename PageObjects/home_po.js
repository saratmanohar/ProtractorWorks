var login_page =require('./login_po.js');

var home_page = function(){

    this.isHomePageDisplayed = function() {
        return $('h1.ng-scope').isDisplayed();
    };

    this.getWelcomeText = function(){
        return element.all(by.css('p')).get(0).getText();
    };

    this.clickLogout = function(){
        element(by.linkText('Logout')).click();
        return login_page;
    };

};
module.exports = new home_page();