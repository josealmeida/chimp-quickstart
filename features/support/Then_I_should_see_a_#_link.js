module.exports = function() {
  this.Then(/^I should see a "([^"]*)" link$/, function (text) {
    browser.click('a=Back pain, low');
  });
};