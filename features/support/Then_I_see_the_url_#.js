module.exports = function() {
  this.Then(/^I see the url "([^"]*)"$/, function (url) {
    if (browser.getUrl() === url) {
      return true;
    }
  });
};