module.exports = function() {
  this.Given(/^I have visited the NICE website$/, function () {
    browser.url('https://www.nice.org.uk/');
  });
};