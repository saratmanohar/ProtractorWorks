var pageHandler = function(){

    this.findElement = function(byLocator) {
        var locator = byLocator.trim();
        var lowerCaseLoc = locator.toLowerCase();
        
        if(lowerCaseLoc.startsWith("model=")){
            return element(by.model(locator.slice("model=".length)));
        }else if(lowerCaseLoc.startsWith("id=")){
            return element(by.id(locator.slice("id=".length)));
        }else if(lowerCaseLoc.startsWith("css=")){
            return element(by.css(locator.slice("css=".length)));
        }else if(lowerCaseLoc.startsWith("$=")){
            return $(locator.slice("$=".length));
        }else if(lowerCaseLoc.startsWith("binding=")){
            return element(by.binding(locator.slice("binding=".length)));
        }else if(lowerCaseLoc.startsWith("buttontext=")){
            return element(by.buttonText(locator.slice("buttontext=".length)));
        }else if(lowerCaseLoc.startsWith("linktext=")){
            return element(by.linkText(locator.slice("linktext=".length)));
        }else if(lowerCaseLoc.startsWith("xpath=")){
            return element(by.xpath(locator.slice("xpath=".length)));
        }else if(lowerCaseLoc.startsWith("exactbinding=")){
            return element(by.exactBinding(locator.slice("exactbinding=".length)));
        }else if(lowerCaseLoc.startsWith("partialbuttontext=")){
            return element(by.partialButtonText(locator.slice("partialbuttontext=".length)));
        }else if(lowerCaseLoc.startsWith("repeater=")){
            return element(by.repeater(locator.slice("repeater=".length)));
        }else if(lowerCaseLoc.startsWith("exactrepeater=")){
            return element(by.exactRepeater(locator.slice("exactrepeater=".length)));
        }else if(lowerCaseLoc.startsWith("options=")){
            return element(by.options(locator.slice("options=".length)));
        }else if(lowerCaseLoc.startsWith("deepcss=")){
            return element(by.deepCss(locator.slice("deepcss=".length)));
        }else if(lowerCaseLoc.startsWith("classname=")){
            return element(by.className(locator.slice("classname=".length)));
        }else if(lowerCaseLoc.startsWith("tagname=")){
            return element(by.tagName(locator.slice("tagname=".length)));
        }else if(lowerCaseLoc.startsWith("name=")){
            return element(by.name(locator.slice("name=".length)));
        }
    };

    this.findElements = function(byLocator) {
        var locator = byLocator.trim();
        var lowerCaseLoc = locator.toLowerCase();
        
        if(lowerCaseLoc.startsWith("model=")){
            return element.all(by.model(locator.slice("model=".length)));
        }else if(lowerCaseLoc.startsWith("id=")){
            return element.all(by.id(locator.slice("id=".length)));
        }else if(lowerCaseLoc.startsWith("css=")){
            return element.all(by.css(locator.slice("css=".length)));
        }else if(lowerCaseLoc.startsWith("$=")){
            return $(locator.slice("$=".length));
        }else if(lowerCaseLoc.startsWith("binding=")){
            return element.all(by.binding(locator.slice("binding=".length)));
        }else if(lowerCaseLoc.startsWith("buttontext=")){
            return element.all(by.buttonText(locator.slice("buttontext=".length)));
        }else if(lowerCaseLoc.startsWith("linktext=")){
            return element.all(by.linkText(locator.slice("linktext=".length)));
        }else if(lowerCaseLoc.startsWith("xpath=")){
            return element.all(by.xpath(locator.slice("xpath=".length)));
        }else if(lowerCaseLoc.startsWith("exactbinding=")){
            return element.all(by.exactBinding(locator.slice("exactbinding=".length)));
        }else if(lowerCaseLoc.startsWith("partialbuttontext=")){
            return element.all(by.partialButtonText(locator.slice("partialbuttontext=".length)));
        }else if(lowerCaseLoc.startsWith("repeater=")){
            return element.all(by.repeater(locator.slice("repeater=".length)));
        }else if(lowerCaseLoc.startsWith("exactrepeater=")){
            return element.all(by.exactRepeater(locator.slice("exactrepeater=".length)));
        }else if(lowerCaseLoc.startsWith("options=")){
            return element.all(by.options(locator.slice("options=".length)));
        }else if(lowerCaseLoc.startsWith("deepcss=")){
            return element.all(by.deepCss(locator.slice("deepcss=".length)));
        }else if(lowerCaseLoc.startsWith("classname=")){
            return element.all(by.className(locator.slice("classname=".length)));
        }else if(lowerCaseLoc.startsWith("tagname=")){
            return element.all(by.tagName(locator.slice("tagname=".length)));
        }else if(lowerCaseLoc.startsWith("name=")){
            return element.all(by.name(locator.slice("name=".length)));
        }
    };

};
module.exports = new pageHandler();