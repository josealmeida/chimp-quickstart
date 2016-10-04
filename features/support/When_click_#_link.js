module.exports = function() {
  this.When(/^click "([^"]*)" link$/, function (link) {
    browser.click('a='+link);
  });                                                  
};                                                     