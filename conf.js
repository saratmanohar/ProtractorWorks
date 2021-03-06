// An example configuration file.
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
    //browserName: 'internet explorer'
  },

  onPrepare:function(){
    browser.driver.manage().window().maximize();
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./specs/login_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
