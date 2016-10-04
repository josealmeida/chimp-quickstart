module.exports = function() {
  this.When(/^click "([^"]*)" in the "([^"]*)" tab$/, function (letter, tab) {
    if (tab === 'AZ') {
      browser.waitForExist('#tabBtnAZ', 2000);
      browser.click('#tabBtnAZ');
      browser.waitForExist('.b.finder-button', 2000);
      browser.click('.b.finder-button');
    }
  });
};