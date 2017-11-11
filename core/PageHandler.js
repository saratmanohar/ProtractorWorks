
var elementHandler = require('../core/ElementHandler.js');

var pageHandler = function(){

    this.isDisplayed = function(byLocator) {
       return elementHandler.findElement(byLocator).isDisplayed();
    };

    this.writeText = function(byLocator,text) {
        var el = elementHandler.findElement(byLocator);
        el.clear();
        el.sendKeys(text);
    };

    this.getText = function(byLocator) {
        return elementHandler.findElement(byLocator).getText();
    };

    this.getTextFromFirstElement = function(byLocator) {
        return elementHandler.findElements(byLocator).get(0).getText();
    };

    this.getTextByElement = function(byElement) {
        return byElement.getText();
    };

    this.clickElement = function(byLocator) {
        elementHandler.findElement(byLocator).click();
    };

    this.clickElementByWebElement = function(byElement) {
        byElement.click();
    };

};
module.exports = new pageHandler();