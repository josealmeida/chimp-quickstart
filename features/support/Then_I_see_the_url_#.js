module.exports = function() {
  this.Then(/^I see the url "([^"]*)"$/, function (url) {
    client.pause(1000);
    expect(browser.getUrl()).toBe(url);
  });
};